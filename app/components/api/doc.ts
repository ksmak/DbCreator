import { PrismaClient } from "@prisma/client/extension"
import { ICondition } from "~/types/types"

export default function DocModule(prisma: PrismaClient) {
    return {
        async getDoc(sid: number | null, inputForm: any) {
            let tables: any = {}
            for (const group of inputForm.groups) {
                let fields: any = { id: null, sid: null, lst: 0 }
                for (const field of group.fields) {
                    fields[`f${field.id}`] = ''
                }
                if (group.isMulty) {
                    tables[`tbl_${group.id}`] = []
                } else {
                    tables[`tbl_${group.id}`] = [fields]
                }
            }
            let doc = {
                id: null,
                formId: inputForm.id,
                isActive: true,
                startDate: null,
                endDate: null,
                createdAt: null,
                updatedAt: null,
                createdUserId: null,
                updatedUserId: null,
                ...tables,
            }
            if (sid) {
                let result = await prisma.doc.findFirst({
                    where: {
                        id: sid,
                        isActive: true
                    }
                })
                if (result) {
                    doc.id = result.id
                    doc.formId = result.formId
                    doc.isActive = result.isActive
                    doc.startDate = result.startDate
                    doc.endDate = result.endDate
                    doc.createdAt = result.createdAt
                    doc.updatedAt = result.updatedAt
                    doc.createdUserId = result.createdUserId
                    doc.updatedUserId = result.updatedUserId
                }
            }
            for (const group of inputForm.groups) {
                const tbl = `tbl_${group.id}`
                if (doc?.id) {
                    let sql = 'SELECT id'
                    for (const field of group.fields) {
                        const fieldName = `f${field.id}`
                        switch (field.fieldType) {
                            case "DATE":
                                sql = sql + `, to_char(${fieldName}, 'DD.MM.YYYY') ${fieldName}`
                                break
                            case "TIME":
                                sql = sql + `, to_char(${fieldName}, 'HH:MI') ${fieldName}`
                                break
                            default:
                                sql = sql + `, ${fieldName}`
                        }
                    }
                    sql = sql + ` FROM ${tbl} WHERE sid = ${sid}`
                    const data = await prisma.$queryRawUnsafe(`${sql}`)
                    doc[tbl] = data
                }
            }
            return doc
        },
        async createDoc(userId: number | null, inputForm: any, formData: FormData) {
            let tr = []
            const seq = await prisma.$queryRaw`SELECT nextval('doc_id_seq')`
            const sid = Number(seq[0].nextval)
            tr.push(
                prisma.doc.create({
                    data: {
                        id: sid,
                        formId: inputForm.id,
                        isActive: true,
                        dateStart: null,
                        dateEnd: null,
                        createdAt: null,
                        updatedAt: null,
                        createdUserId: userId,
                        updatedUserId: null,
                    }
                })
            )
            for (const group of inputForm.groups) {
                const tableName = `tbl_${group.id}`
                let recCount = Number(formData.get(`${tableName}__count`))
                for (let i = 0; i < recCount; i++) {
                    let flds = "sid"
                    let vals = `${sid}`
                    for (const field of group.fields) {
                        const fieldName = `f${field.id}`
                        flds = flds + `, ${fieldName}`
                        switch (field.fieldType) {
                            case "TEXT":
                            case "CYRILLIC":
                            case "DATE":
                            case "TIME":
                                let stringVal = formData.get(`${tableName}__${fieldName}__${i}`)?.toString()
                                vals = vals + `, ${!stringVal ? 'null' : `'${stringVal}'`}`
                                break
                            case "FILE":
                                let fileVal = formData.get(`${tableName}__${fieldName}__${i}`) as File
                                vals = vals + `, ${fileVal.size === 0 ? 'null' : `'/uploads/${fileVal.name}'`}`
                                break
                            default:
                                let numberVal = formData.get(`${tableName}__${fieldName}__${i}`)?.toString()
                                vals = vals + `, ${!numberVal ? ' null' : `${numberVal}`}`
                                break
                        }
                    }
                    tr.push(prisma.$executeRawUnsafe(`INSERT INTO ${tableName}(${flds}) VALUES(${vals})`))
                }
            }
            return prisma.$transaction(tr)
        },
        updateDoc(userId: number | null, inputForm: any, formData: FormData, docId: number) {
            let tr = []
            tr.push(
                prisma.doc.update({
                    where: {
                        id: docId
                    },
                    data: {
                        formId: inputForm.id,
                        isActive: true,
                        dateStart: undefined,
                        dateEnd: undefined,
                        createdAt: undefined,
                        updatedAt: undefined,
                        createdUserId: undefined,
                        updatedUserId: userId,
                    }
                })
            )
            for (const group of inputForm.groups) {
                const tableName = `tbl_${group.id}`
                if (group.isMulty) {
                    tr.push(prisma.$executeRawUnsafe(`DELETE FROM ${tableName} WHERE sid=${docId}`))
                    let recCount = Number(formData.get(`${tableName}__count`))
                    for (let i = 0; i < recCount; i++) {
                        let flds = "sid"
                        let vals = `${docId}`
                        for (const field of group.fields) {
                            const fieldName = `f${field.id}`
                            flds = flds + `, ${fieldName}`
                            const fieldVal = formData.get(`${tableName}__${fieldName}__${i}`)
                            if (['null', ''].includes(String(fieldVal))) {
                                vals = vals + `, null`
                            } else {
                                switch (field.fieldType) {
                                    case "TEXT":
                                    case "CYRILLIC":
                                    case "DATE":
                                    case "TIME":
                                        vals = vals + `, '${fieldVal}'`
                                        break
                                    case "FILE":
                                        let file = fieldVal as File
                                        vals = vals + `, '/uploads/${file.name}'`
                                        break
                                    default:
                                        vals = vals + `, ${fieldVal}`
                                        break
                                }
                            }
                        }
                        tr.push(prisma.$executeRawUnsafe(`INSERT INTO ${tableName}(${flds}) VALUES(${vals})`))
                    }
                } else {
                    tr.push(prisma.$executeRawUnsafe(`DELETE FROM ${tableName} WHERE sid=${docId}`))
                    let sets = " SET "
                    let id = formData.get(`${tableName}__id`)
                    for (const field of group.fields) {
                        const fieldName = `f${field.id}`
                        const fieldVal = formData.get(`${tableName}__${fieldName}__${0}`)
                        if (['null', ''].includes(String(fieldVal))) {
                            sets = sets + `, ${fieldName} = null`
                        } else {
                            switch (field.fieldType) {
                                case "TEXT":
                                case "CYRILLIC":
                                case "DATE":
                                case "TIME":
                                    sets = sets + `, ${fieldName} = '${fieldVal}'`
                                    break
                                case "FILE":
                                    let file = fieldVal as File
                                    if (file.name) {
                                        sets = sets + `, ${fieldName} = '/uploads/${file.name}'`
                                    }
                                    break
                                default:
                                    sets = sets + `, ${fieldName} = ${fieldVal}`
                                    break
                            }
                        }
                    }
                    tr.push(prisma.$executeRawUnsafe(`UPDATE ${tableName} SET ${sets}) WHERE id={id}`))
                }
            }
            return prisma.$transaction(tr)
        },
        findDoc(inputForm: any, formData: FormData) {
            let sf = ''
            let select = 'SELECT distinct doc.id'
            let from = ' FROM "Doc" doc'
            let where = ' WHERE doc."isActive" is true'
            let tbls: string[] = []
            for (const group of inputForm.groups) {
                const tableName = `tbl_${group.id}`
                let recCount = Number(formData.get(`${tableName}__count`))
                for (let i = 0; i <= recCount; i++) {
                    for (const field of group.fields) {
                        const fieldName = `f${field.id}`
                        let fieldVal = formData.get(`${tableName}__${fieldName}__${i}`)
                        if (fieldVal) {
                            if (!tbls.includes(tableName)) {
                                tbls.push(tableName)
                                where = where + ` AND doc.id = ${tableName}.sid`
                                from = from + `, ${tableName}`
                            }
                            switch (field.fieldType) {
                                case "TEXT":
                                case "CYRILLIC":
                                case "DATE":
                                case "TIME":
                                    where = where + ' AND ' + `${fieldName} = '${fieldVal}'`
                                    break
                                case "FILE":
                                    where = where + ' AND ' + `${fieldName} = '/uploads/${(fieldVal as File).name}'`
                                    break
                                default:
                                    where = where + ' AND ' + `${fieldName} = ${fieldVal}`
                                    break
                            }
                        }
                    }
                }
            }
            sf = select + from + where
            return prisma.$queryRawUnsafe(`${sf}`)
        },
        deleteDoc(sid: number) {
            return prisma.doc.update({
                where: {
                    id: sid
                },
                data: {
                    isActive: false
                }
            })
        },
        searchDoc(conditions: ICondition[]) {
            let sf = ''
            let select = 'SELECT distinct doc.id'
            let from = ' FROM "Doc" doc'
            let where = ' WHERE doc."isActive" is true'
            let tbls: string[] = []
            let val1 = '', val2 = '', conds = '', sids = ''
            for (const cond of conditions) {
                if (cond.log) {
                    conds = conds + ` ${cond.log}`
                } else {
                    const tbl = `tbl_${cond.field?.field.groupId}`
                    const fieldName = `f${cond.field?.fieldId}`
                    if (!tbls.includes(tbl)) {
                        tbls.push(tbl)
                        sids = sids + ` AND doc.id = ${tbl}.sid`
                        from = from + `, ${tbl}`
                    }
                    switch (cond.field?.field.fieldType) {
                        case "TEXT":
                        case "CYRILLIC":
                        case "DATE":
                        case "TIME":
                        case "FILE":
                            val1 = `'${cond.val1}'`
                            val2 = `'${cond.val2}'`
                            break
                        default:
                            val1 = `${cond.val1}`
                            val2 = `${cond.val2}`
                            break
                    }
                    switch (cond.oper) {
                        case 'between':
                            conds = conds + ` ${fieldName} BETWEEN ${val2} AND ${val2}`
                            break
                        case '=':
                        case '>=':
                        case '>':
                        case '<':
                        case '<=':
                        case '<>':
                            conds = conds + ` ${fieldName} ${cond.oper} ${val1}`
                            break
                        case '=()':
                            conds = conds + ` ${fieldName} IS NULL`
                            break
                        case '<>()':
                            conds = conds + ` ${fieldName} IS NOT NULL`
                            break
                    }
                }
            }
            sf = select + from + where + sids + ' AND ' + conds
            return prisma.$queryRawUnsafe(`${sf}`)
        },
    }
}