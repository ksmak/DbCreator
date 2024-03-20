CREATE OR REPLACE PROCEDURE restructure_db() AS $$
DECLARE
	r_dics RECORD;
	r_tbls RECORD;
	r_flds RECORD;
	fld_type TEXT;
    flds TEXT;
	f_type TEXT;
	prec integer;
	f_def TEXT;
BEGIN
	FOR r_dics IN
	SELECT id FROM "Dictionary"
	LOOP
		IF (NOT EXISTS(SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'dic_' || r_dics.id)) THEN
			EXECUTE 'CREATE TABLE ' || 'dic_' || r_dics.id || ' (id SERIAL NOT NULL PRIMARY KEY, title_kk text, title_ru text, is_enabled boolean) ';
		END IF;
	END LOOP;
    FOR r_tbls IN
	SELECT id FROM "Group"
	LOOP
		IF (NOT EXISTS(SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'tbl_' || r_tbls.id)) THEN
			flds = '';
			FOR r_flds IN
			SELECT 
				field.id field_id, 
				field."fieldType" field_type, 
				field."len" field_len,
				field."scale" field_scale
			FROM 
				"InputField" field 
			WHERE 
				field."groupId" = r_tbls.id
			LOOP
				fld_type = 'text';
				IF r_flds.field_type = 'INTEGER' OR r_flds.field_type = 'DICT' THEN
	    			fld_type = 'integer';
				ELSIF r_flds.field_type = 'NUMERIC' THEN
	    			fld_type = 'numeric(' || r_flds.field_len || ', ' || r_flds.field_scale || ')';
				ELSIF r_flds.field_type = 'DATE' THEN
	    			fld_type = 'date';
				ELSIF r_flds.field_type = 'TIME' THEN
	    			fld_type = 'time';
				END IF;
				flds = flds || ', f' || r_flds.field_id || ' ' || fld_type;
			END LOOP;
			
			EXECUTE 'CREATE TABLE ' || 'tbl_' || r_tbls.id || ' (id SERIAL NOT NULL PRIMARY KEY, sid integer NOT NULL, lst integer DEFAULT 0' || flds || ') ';
		ELSE
			FOR r_flds IN
			SELECT 
				field.id field_id, 
				field."fieldType" field_type, 
				field."len" field_len,
				field."scale" field_scale 
			FROM 
				"InputField" field 
			WHERE 
				field."groupId" = r_tbls.id
			LOOP
				SELECT 
					data_type
  				FROM 
					information_schema.columns
 				WHERE 
					table_schema = 'public'
   					AND table_name   = 'tbl_' || r_tbls.id
   					AND column_name = 'f' || r_flds.field_id
				INTO f_type;
				
				fld_type = 'text';
				IF r_flds.field_type = 'INTEGER' OR r_flds.field_type = 'DICT' THEN
	    			fld_type = 'integer';
				ELSIF r_flds.field_type = 'NUMERIC' THEN
	    			fld_type = 'numeric(' || r_flds.field_len || ', ' || r_flds.field_scale || ')';
				ELSIF r_flds.field_type = 'DATE' THEN
	    			fld_type = 'date';
				ELSIF r_flds.field_type = 'TIME' THEN
	    			fld_type = 'time';
				END IF;
				
				IF (f_type IS NULL) THEN
					EXECUTE 'ALTER TABLE tbl_' || r_tbls.id || ' ADD COLUMN f' || r_flds.field_id || ' ' || fld_type;
				ELSE
				  	IF (f_type <> fld_type) THEN
						EXECUTE 'ALTER TABLE tbl_' || r_tbls.id || ' ADD COLUMN TEMP_COL ' || fld_type;
						EXECUTE 'UPDATE tbl_' || r_tbls.id || ' SET TEMP_COL=CAST(f' || r_flds.field_id || ' AS ' || fld_type || ')' || ' WHERE f' || r_flds.field_id || ' IS NOT NULL';
						EXECUTE 'ALTER TABLE tbl_' || r_tbls.id || ' DROP f' || r_flds.field_id;
						EXECUTE 'ALTER TABLE tbl_' || r_tbls.id || ' ADD COLUMN f' || r_flds.field_id || ' ' || fld_type;
						EXECUTE 'UPDATE tbl_' || r_tbls.id || ' SET f' || r_flds.field_id || '=TEMP_COL WHERE TEMP_COL IS NOT NULL';
						EXECUTE 'ALTER TABLE tbl_' || r_tbls.id || ' DROP TEMP_COL';
		  	      	END IF;
				END IF;
			END LOOP;
		END IF;
	END LOOP;
END;
$$ LANGUAGE plpgsql;