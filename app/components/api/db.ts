import { Dictionary, InputForm, SearchForm, Group, InputField, SearchField } from "@prisma/client"
import { PrismaClient } from "@prisma/client/extension";
import { IDict, IDictVal } from "~/types/types";

export default function DbModule(prisma: PrismaClient) {
    return {
        async getDictValues(dictId: number) {
            return prisma.$queryRawUnsafe(`SELECT * FROM dic_${dictId}`)
        },
        async updateDictValue(dictId: number, dictVal: IDictVal) {
            if (!dictVal.id) {
                return prisma.$queryRawUnsafe(`INSERT INTO dic_${dictId}(title_kk, title_ru, is_enabled) values('${dictVal.title_kk}', '${dictVal.title_ru}', ${dictVal.is_enabled})`)
            } else {
                return prisma.$queryRawUnsafe(`UPDATE dic_${dictId} SET title_kk='${dictVal.title_kk}', title_ru='${dictVal.title_ru}', is_enabled=${dictVal.is_enabled} WHERE id=${dictVal.id}`)
            }
        },
        async deleteDictValue(dictId: number, id: number) {
            return prisma.$queryRawUnsafe(`DELETE FROM dic_${dictId} WHERE id=${id}`)
        },
        async getDictionaries() {
            let dicts: IDict[] = []
            const dictionaries = await prisma.dictionary.findMany()
            for (const dict of dictionaries) {
                try {
                    const [dic1, dic2] = await prisma.$transaction([
                        prisma.$queryRawUnsafe(`SELECT * FROM dic_${dict.id}`),
                        prisma.$queryRawUnsafe(`SELECT * FROM dic_${dict.id} WHERE is_enabled = true`)
                    ])
                    dicts.push({
                        id: dict.id,
                        title_kk: dict.title_kk,
                        title_ru: dict.title_ru,
                        data_browse: dic1,
                        data_edit: dic2
                    })
                } catch (e) {
                    dicts.push({
                        id: dict.id,
                        title_kk: dict.title_kk,
                        title_ru: dict.title_ru,
                        data_browse: [],
                        data_edit: []
                    })
                }
            }
            return dicts
        },
        createEmptyDictionary(cnt: number) {
            return prisma.dictionary.create({
                data: {
                    title_kk: `Dictionary ${cnt}`,
                    title_ru: `Dictionary ${cnt}`,
                }
            })
        },
        updateDictionary(formId: number, form: Dictionary) {
            return prisma.dictionary.update({
                where: {
                    id: formId
                },
                data: {
                    ...form,
                    id: undefined
                }
            })
        },
        getDictionary(formId: number) {
            return prisma.dictionary.findFirst({
                where: {
                    id: formId
                }
            })
        },
        deleteDictionary(formId: number) {
            return prisma.dictionary.delete({
                where: {
                    id: formId
                }
            })
        },
        getInputForms() {
            return prisma.inputForm.findMany({
                include: {
                    groups: true,
                },
                orderBy: {
                    pos: 'asc'
                }
            })
        },
        createEmptyInputForm(cnt: number) {
            return prisma.inputForm.create({
                data: {
                    pos: cnt,
                    title_kk: `Input Form ${cnt}`,
                    title_ru: `Input Form ${cnt}`,
                }
            })
        },
        updateInputForm(formId: number, form: InputForm) {
            return prisma.inputForm.update({
                where: {
                    id: formId
                },
                data: {
                    ...form,
                    id: undefined
                }
            })
        },
        getInputForm(formId: number) {
            return prisma.inputForm.findFirst({
                where: {
                    id: formId
                },
                include: {
                    groups: {
                        orderBy: {
                            pos: 'asc'
                        },
                        include: {
                            fields: {
                                orderBy: {
                                    pos: 'asc'
                                }
                            }
                        }
                    }
                }
            })
        },
        deleteInputForm(formId: number) {
            return prisma.inputForm.delete({
                where: {
                    id: formId
                }
            })
        },
        getSearchForms() {
            return prisma.searchForm.findMany({
                include: {
                    fields: true,
                },
                orderBy: {
                    pos: 'asc'
                }
            })
        },
        createEmptySearchForm(cnt: number) {
            return prisma.searchForm.create({
                data: {
                    pos: cnt,
                    title_kk: `Search Form ${cnt}`,
                    title_ru: `Search Form ${cnt}`,
                }
            })
        },
        updateSearchForm(formId: number, form: SearchForm) {
            return prisma.searchForm.update({
                where: {
                    id: formId
                },
                data: {
                    ...form,
                    id: undefined
                }
            })
        },
        getSearchForm(formId: number) {
            return prisma.searchForm.findFirst({
                include: {
                    fields: {
                        orderBy: {
                            pos: 'asc'
                        },
                        include: {
                            field: true
                        }
                    }
                },
                where: {
                    id: formId
                },
                orderBy: {
                    pos: 'asc'
                }
            })
        },
        deleteSearchForm(formId: number) {
            return prisma.searchForm.delete({
                where: {
                    id: formId
                }
            })
        },
        getGroups(formId: number | null) {
            if (!formId) return []
            return prisma.group.findMany({
                where: {
                    inputFormId: formId
                },
                include: {
                    fields: true
                },
                orderBy: {
                    pos: 'asc'
                }
            })
        },
        createEmptyGroup(formId: number, cnt: number) {
            return prisma.group.create({
                data: {
                    pos: cnt,
                    inputFormId: formId,
                    title_kk: `Group ${cnt}`,
                    title_ru: `Group ${cnt}`,
                }
            })
        },
        getGroup(groupId: number) {
            return prisma.group.findFirst({
                include: {
                    fields: {
                        orderBy: {
                            pos: 'asc'
                        }
                    }
                },
                where: {
                    id: groupId
                },
                orderBy: {
                    pos: 'asc',
                }
            })
        },
        updateGroup(groupId: number, group: Group) {
            return prisma.group.update({
                where: {
                    id: groupId
                },
                data: {
                    ...group,
                    id: undefined,
                }
            })
        },
        deleteGroup(groupId: number) {
            return prisma.group.delete({
                where: {
                    id: groupId
                }
            })
        },
        createEmptySearchField(formId: number, cnt: number) {
            return prisma.searchField.create({
                data: {
                    pos: cnt,
                    searchFormId: formId,
                    title_kk: `Search Field ${cnt}`,
                    title_ru: `Search Field ${cnt}`,
                }
            })
        },
        getSearchField(fieldId: number) {
            return prisma.searchField.findFirst({
                where: {
                    id: fieldId
                },
                include: {
                    field: true
                }
            })
        },
        updateSearchField(fieldId: number, searchField: SearchField) {
            return prisma.searchField.update({
                where: {
                    id: fieldId
                },
                data: {
                    ...searchField,
                    id: undefined
                }
            })
        },
        deleteSearchField(fieldId: number) {
            return prisma.searchField.delete({
                where: {
                    id: fieldId
                }
            })
        },
        createEmptyInputField(groupId: number, cnt: number) {
            return prisma.inputField.create({
                data: {
                    pos: cnt,
                    groupId: groupId,
                    title_kk: `Input Field ${cnt}`,
                    title_ru: `Input Field ${cnt}`,
                }
            })
        },
        getInputFields() {
            return prisma.inputField.findMany({
                include: {
                    group: {
                        include: {
                            inputForm: true
                        }
                    }
                }
            })
        },
        getInputField(fieldId: number) {
            return prisma.inputField.findFirst({
                where: {
                    id: fieldId
                },
            })
        },
        updateInputField(fieldId: number, field: InputField) {
            return prisma.inputField.update({
                where: {
                    id: fieldId
                },
                data: {
                    ...field,
                    id: undefined
                }
            })
        },
        deleteInputField(fieldId: number) {
            return prisma.inputField.delete({
                where: {
                    id: fieldId
                }
            })
        },
        generateStructDb() {
            return prisma.$executeRaw`CALL restructure_db()`
        },
    }
}