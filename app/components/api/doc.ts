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
                tables[`tbl_${group.id}`] = []
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
                                sql = sql + `, to_char(f${fieldName}, 'HH:MI') ${fieldName}`
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
        async createDoc(userId: number | null, inputForm: any, doc: any) {
            const seq = await prisma.$queryRaw`SELECT nextval('doc_id_seq')`
            const sid = Number(seq[0].nextval)
            let tr = []
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
                const tbl = `tbl_${group.id}`
                for (const rec of doc[tbl]) {
                    let flds = "sid"
                    let vals = `${sid}`
                    for (const field of group.fields) {
                        const fieldName = `f${field.id}`
                        flds = flds + `, ${fieldName}`
                        const fieldVal: string = rec[fieldName]
                        switch (field.fieldType) {
                            case "TEXT":
                            case "CYRILLIC":
                            case "DATE":
                            case "TIME":
                            case "FILE":
                                vals = vals + `, ${['', '-'].includes(fieldVal) ? 'null' : `'${fieldVal}'`}`
                                break
                            default:
                                vals = vals + `, ${['', '-'].includes(fieldVal) ? 'null' : fieldVal}`
                                break
                        }
                    }
                    tr.push(prisma.$executeRawUnsafe(`INSERT INTO ${tbl}(${flds}) VALUES(${vals})`))
                }
            }
            return prisma.$transaction(tr)
        },
        updateDoc(userId: number | null, inputForm: any, doc: any) {
            let tr = []
            tr.push(
                prisma.doc.update({
                    where: {
                        id: doc.id
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
                const tbl = `tbl_${group.id}`
                // deleting all rows
                tr.push(prisma.$executeRawUnsafe(`DELETE FROM ${tbl} WHERE sid=${doc.id}`))
                // inserting rows
                for (const rec of doc[tbl]) {
                    let flds = "sid"
                    let vals = `${doc.id}`
                    for (const field of group.fields) {
                        const fieldName = `f${field.id}`
                        flds = flds + `, ${fieldName}`
                        const fieldVal: string = rec[fieldName]
                        switch (field.fieldType) {
                            case "TEXT":
                            case "CYRILLIC":
                            case "DATE":
                            case "TIME":
                            case "FILE":
                                vals = vals + `, ${['', '-'].includes(fieldVal) ? 'null' : `'${fieldVal}'`}`
                                break
                            default:
                                vals = vals + `, ${['', '-'].includes(fieldVal) ? 'null' : fieldVal}`
                                break
                        }
                    }
                    tr.push(prisma.$executeRawUnsafe(`INSERT INTO ${tbl}(${flds}) VALUES(${vals})`))
                }
            }
            return prisma.$transaction(tr)
        },
        findDoc(inputForm: any, doc: any) {
            let sf = ''
            let select = 'SELECT distinct doc.id'
            let from = ' FROM "Doc" doc'
            let where = ' WHERE doc."isActive" is true'
            let tbls: string[] = []
            for (const group of inputForm.groups) {
                const tbl = `tbl_${group.id}`
                if (!group.isMulty) {
                    for (const field of group.fields) {
                        const fieldName = `f${field.id}`
                        const fieldVal = doc[tbl][0][fieldName]
                        if (!['', '-'].includes(fieldVal)) {
                            if (!tbls.includes(tbl)) {
                                tbls.push(tbl)
                                where = where + ` AND doc.id = ${tbl}.sid`
                                from = from + `, ${tbl}`
                            }
                            switch (field.fieldType) {
                                case "TEXT":
                                case "CYRILLIC":
                                case "DATE":
                                case "TIME":
                                case "FILE":
                                    where = where + ` AND ${fieldName} = '${fieldVal}'`
                                    break
                                default:
                                    where = where + ` AND ${fieldName} = ${fieldVal}`
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