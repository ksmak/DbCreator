var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "stream";
import {
  createReadableStreamFromReadable
} from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createInstance } from "i18next";

// app/i18next.server.ts
import Backend from "i18next-fs-backend";
import { resolve } from "node:path";
import { RemixI18Next } from "remix-i18next/server";

// app/i18n.ts
var i18n_default = {
  // This is the list of languages your application supports
  supportedLngs: ["ru", "kk"],
  // This is the language you want to use in case
  // if the user language is not in the supportedLngs
  fallbackLng: "ru",
  // The default namespace of i18next is "translation", but you can customize it here
  defaultNS: "common"
};

// app/i18next.server.ts
var i18next = new RemixI18Next({
  detection: {
    supportedLanguages: i18n_default.supportedLngs,
    fallbackLanguage: i18n_default.fallbackLng
  },
  // This is the configuration for i18next used
  // when translating messages server-side only
  i18next: {
    ...i18n_default,
    backend: {
      loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json")
    }
  },
  // The i18next plugins you want RemixI18next to use for `i18n.getFixedT` inside loaders and actions.
  // E.g. The Backend plugin for loading translations from the file system
  // Tip: You could pass `resources` to the `i18next` configuration and avoid a backend here
  plugins: [Backend]
}), i18next_server_default = i18next;

// app/entry.server.tsx
import { I18nextProvider, initReactI18next } from "react-i18next";
import Backend2 from "i18next-fs-backend";
import { resolve as resolve2 } from "node:path";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let callbackName = isbot(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady", instance = createInstance(), lng = await i18next_server_default.getLocale(request), ns = i18next_server_default.getRouteNamespaces(remixContext);
  return await instance.use(initReactI18next).use(Backend2).init({
    ...i18n_default,
    // spread the configuration
    lng,
    // The locale we detected above
    ns,
    // The namespaces the routes about to render wants to use
    backend: { loadPath: resolve2("./public/locales/{{lng}}/{{ns}}.json") }
  }), new Promise((resolve3, reject) => {
    let didError = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(I18nextProvider, { i18n: instance, children: /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      {
        [callbackName]: () => {
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve3(
            new Response(stream, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  handle: () => handle,
  links: () => links,
  loader: () => loader
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData
} from "@remix-run/react";
import { useChangeLanguage } from "remix-i18next/react";
import { useTranslation } from "react-i18next";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-AV7DHKZF.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
async function loader({ request }) {
  let locale = await i18next_server_default.getLocale(request);
  return json({ locale });
}
var handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "common"
};
function App() {
  let { locale } = useLoaderData(), { i18n } = useTranslation();
  return useChangeLanguage(locale), /* @__PURE__ */ jsxDEV2("html", { lang: locale, dir: i18n.dir(), children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "bg-blue-gray-50", children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.search_data.$formId.tsx
var dashboard_search_data_formId_exports = {};
__export(dashboard_search_data_formId_exports, {
  action: () => action,
  default: () => SearchData,
  loader: () => loader2
});
import { Prisma } from "@prisma/client";
import { json as json2 } from "@remix-run/node";
import { useActionData, useLoaderData as useLoaderData2, useOutletContext } from "@remix-run/react";
import { useState as useState2 } from "react";

// app/components/api/instance.ts
import { PrismaClient } from "@prisma/client";
var prisma = new PrismaClient(), instance_default = prisma;

// app/components/api/users.ts
import bcrypt from "bcryptjs";
function UsersModule(prisma2) {
  return {
    getDepartments() {
      return prisma2.department.findMany();
    },
    getUsers(q = null) {
      return q ? prisma2.user.findMany({
        include: {
          roles: !0
        },
        where: {
          login: {
            startsWith: q
          }
        },
        orderBy: {
          login: "asc"
        }
      }) : prisma2.user.findMany({
        include: {
          roles: !0
        },
        orderBy: {
          login: "asc"
        }
      });
    },
    createUser(user) {
      return prisma2.user.create({
        data: {
          ...user,
          id: void 0,
          password: bcrypt.hashSync(user.password),
          createdAt: void 0,
          updatedAt: void 0
        }
      });
    },
    updateUser(userId, user) {
      return user.password ? prisma2.user.update({
        where: {
          id: userId
        },
        data: {
          ...user,
          id: void 0,
          password: void 0,
          createdAt: void 0,
          updatedAt: void 0
        }
      }) : prisma2.user.update({
        where: {
          id: userId
        },
        data: {
          ...user,
          id: void 0,
          password: bcrypt.hashSync(user.password),
          createdAt: void 0,
          updatedAt: void 0
        }
      });
    },
    getUser(userId) {
      return prisma2.user.findFirst({
        where: {
          id: userId
        }
      });
    },
    deleteUser(userId) {
      return prisma2.user.delete({
        where: {
          id: userId
        }
      });
    },
    getRoles() {
      return prisma2.role.findMany();
    },
    createEmptyRole(cnt) {
      return prisma2.role.create({
        data: {
          title_kk: `Role ${cnt}`,
          title_ru: `Role ${cnt}`
        }
      });
    },
    updateRole(roleId, role) {
      return prisma2.role.update({
        where: {
          id: roleId
        },
        data: {
          ...role,
          id: void 0
        }
      });
    },
    getRole(roleId) {
      return prisma2.role.findFirst({
        where: {
          id: roleId
        }
      });
    },
    deleteRole(roleId) {
      return prisma2.role.delete({
        where: {
          id: roleId
        }
      });
    },
    getAccessInputForms(roleId) {
      return prisma2.accessInputForm.findMany({
        include: {
          form: !0
        },
        where: {
          roleId
        }
      });
    },
    createEmptyAccessInputForm(roleId) {
      return prisma2.accessInputForm.create({
        data: {
          roleId
        }
      });
    },
    updateAccessInputForm(aformId, aform) {
      return prisma2.accessInputForm.update({
        where: {
          id: aformId
        },
        data: {
          ...aform,
          id: void 0
        }
      });
    },
    getAccessInputForm(aformId) {
      return prisma2.accessInputForm.findFirst({
        where: {
          id: aformId
        }
      });
    },
    deleteAccessInputForm(aformId) {
      return prisma2.accessInputForm.delete({
        where: {
          id: aformId
        }
      });
    },
    getAccessSearchForms(roleId) {
      return prisma2.accessSearchForm.findMany({
        include: {
          form: !0
        },
        where: {
          roleId
        }
      });
    },
    createEmptyAccessSearchForm(roleId) {
      return prisma2.accessSearchForm.create({
        data: {
          roleId
        }
      });
    },
    updateAccessSearchForm(aformId, aform) {
      return prisma2.accessSearchForm.update({
        where: {
          id: aformId
        },
        data: {
          ...aform,
          id: void 0
        }
      });
    },
    getAccessSearchForm(aformId) {
      return prisma2.accessSearchForm.findFirst({
        where: {
          id: aformId
        }
      });
    },
    deleteAccessSearchForm(aformId) {
      return prisma2.accessSearchForm.delete({
        where: {
          id: aformId
        }
      });
    },
    getUserRoles(userId) {
      return prisma2.userRole.findMany({
        include: {
          role: !0
        },
        where: {
          userId
        }
      });
    },
    createEmptyUserRole(userId) {
      return prisma2.userRole.create({
        data: {
          userId
        }
      });
    },
    updateUserRole(userRoleId, userRole) {
      return prisma2.userRole.update({
        where: {
          id: userRoleId
        },
        data: {
          ...userRole,
          id: void 0
        }
      });
    },
    deleteUserRole(userRoleId) {
      return prisma2.userRole.delete({
        where: {
          id: userRoleId
        }
      });
    }
  };
}

// app/components/api/db.ts
function DbModule(prisma2) {
  return {
    async getDictValues(dictId) {
      return prisma2.$queryRawUnsafe(`SELECT * FROM dic_${dictId}`);
    },
    async updateDictValue(dictId, dictVal) {
      return dictVal.id ? prisma2.$queryRawUnsafe(`UPDATE dic_${dictId} SET title_kk='${dictVal.title_kk}', title_ru='${dictVal.title_ru}', is_enabled=${dictVal.is_enabled} WHERE id=${dictVal.id}`) : prisma2.$queryRawUnsafe(`INSERT INTO dic_${dictId}(title_kk, title_ru, is_enabled) values('${dictVal.title_kk}', '${dictVal.title_ru}', ${dictVal.is_enabled})`);
    },
    async deleteDictValue(dictId, id) {
      return prisma2.$queryRawUnsafe(`DELETE FROM dic_${dictId} WHERE id=${id}`);
    },
    async getDictionaries() {
      let dicts = [], dictionaries = await prisma2.dictionary.findMany();
      for (let dict of dictionaries)
        try {
          let [dic1, dic2] = await prisma2.$transaction([
            prisma2.$queryRawUnsafe(`SELECT * FROM dic_${dict.id}`),
            prisma2.$queryRawUnsafe(`SELECT * FROM dic_${dict.id} WHERE is_enabled = true`)
          ]);
          dicts.push({
            id: dict.id,
            title_kk: dict.title_kk,
            title_ru: dict.title_ru,
            data_browse: dic1,
            data_edit: dic2
          });
        } catch {
          dicts.push({
            id: dict.id,
            title_kk: dict.title_kk,
            title_ru: dict.title_ru,
            data_browse: [],
            data_edit: []
          });
        }
      return dicts;
    },
    createEmptyDictionary(cnt) {
      return prisma2.dictionary.create({
        data: {
          title_kk: `Dictionary ${cnt}`,
          title_ru: `Dictionary ${cnt}`
        }
      });
    },
    updateDictionary(formId, form) {
      return prisma2.dictionary.update({
        where: {
          id: formId
        },
        data: {
          ...form,
          id: void 0
        }
      });
    },
    getDictionary(formId) {
      return prisma2.dictionary.findFirst({
        where: {
          id: formId
        }
      });
    },
    deleteDictionary(formId) {
      return prisma2.dictionary.delete({
        where: {
          id: formId
        }
      });
    },
    getInputForms() {
      return prisma2.inputForm.findMany({
        include: {
          groups: !0
        },
        orderBy: {
          pos: "asc"
        }
      });
    },
    createEmptyInputForm(cnt) {
      return prisma2.inputForm.create({
        data: {
          pos: cnt,
          title_kk: `Input Form ${cnt}`,
          title_ru: `Input Form ${cnt}`
        }
      });
    },
    updateInputForm(formId, form) {
      return prisma2.inputForm.update({
        where: {
          id: formId
        },
        data: {
          ...form,
          id: void 0
        }
      });
    },
    getInputForm(formId) {
      return prisma2.inputForm.findFirst({
        where: {
          id: formId
        },
        include: {
          groups: {
            orderBy: {
              pos: "asc"
            },
            include: {
              fields: {
                orderBy: {
                  pos: "asc"
                }
              }
            }
          }
        }
      });
    },
    deleteInputForm(formId) {
      return prisma2.inputForm.delete({
        where: {
          id: formId
        }
      });
    },
    getSearchForms() {
      return prisma2.searchForm.findMany({
        include: {
          fields: !0
        },
        orderBy: {
          pos: "asc"
        }
      });
    },
    createEmptySearchForm(cnt) {
      return prisma2.searchForm.create({
        data: {
          pos: cnt,
          title_kk: `Search Form ${cnt}`,
          title_ru: `Search Form ${cnt}`
        }
      });
    },
    updateSearchForm(formId, form) {
      return prisma2.searchForm.update({
        where: {
          id: formId
        },
        data: {
          ...form,
          id: void 0
        }
      });
    },
    getSearchForm(formId) {
      return prisma2.searchForm.findFirst({
        include: {
          fields: {
            orderBy: {
              pos: "asc"
            },
            include: {
              field: !0
            }
          }
        },
        where: {
          id: formId
        },
        orderBy: {
          pos: "asc"
        }
      });
    },
    deleteSearchForm(formId) {
      return prisma2.searchForm.delete({
        where: {
          id: formId
        }
      });
    },
    getGroups(formId) {
      return formId ? prisma2.group.findMany({
        where: {
          inputFormId: formId
        },
        include: {
          fields: !0
        },
        orderBy: {
          pos: "asc"
        }
      }) : [];
    },
    createEmptyGroup(formId, cnt) {
      return prisma2.group.create({
        data: {
          pos: cnt,
          inputFormId: formId,
          title_kk: `Group ${cnt}`,
          title_ru: `Group ${cnt}`
        }
      });
    },
    getGroup(groupId) {
      return prisma2.group.findFirst({
        include: {
          fields: {
            orderBy: {
              pos: "asc"
            }
          }
        },
        where: {
          id: groupId
        },
        orderBy: {
          pos: "asc"
        }
      });
    },
    updateGroup(groupId, group) {
      return prisma2.group.update({
        where: {
          id: groupId
        },
        data: {
          ...group,
          id: void 0
        }
      });
    },
    deleteGroup(groupId) {
      return prisma2.group.delete({
        where: {
          id: groupId
        }
      });
    },
    createEmptySearchField(formId, cnt) {
      return prisma2.searchField.create({
        data: {
          pos: cnt,
          searchFormId: formId,
          title_kk: `Search Field ${cnt}`,
          title_ru: `Search Field ${cnt}`
        }
      });
    },
    getSearchField(fieldId) {
      return prisma2.searchField.findFirst({
        where: {
          id: fieldId
        },
        include: {
          field: !0
        }
      });
    },
    updateSearchField(fieldId, searchField) {
      return prisma2.searchField.update({
        where: {
          id: fieldId
        },
        data: {
          ...searchField,
          id: void 0
        }
      });
    },
    deleteSearchField(fieldId) {
      return prisma2.searchField.delete({
        where: {
          id: fieldId
        }
      });
    },
    createEmptyInputField(groupId, cnt) {
      return prisma2.inputField.create({
        data: {
          pos: cnt,
          groupId,
          title_kk: `Input Field ${cnt}`,
          title_ru: `Input Field ${cnt}`
        }
      });
    },
    getInputFields() {
      return prisma2.inputField.findMany({
        include: {
          group: {
            include: {
              inputForm: !0
            }
          }
        }
      });
    },
    getInputField(fieldId) {
      return prisma2.inputField.findFirst({
        where: {
          id: fieldId
        }
      });
    },
    updateInputField(fieldId, field) {
      return prisma2.inputField.update({
        where: {
          id: fieldId
        },
        data: {
          ...field,
          id: void 0
        }
      });
    },
    deleteInputField(fieldId) {
      return prisma2.inputField.delete({
        where: {
          id: fieldId
        }
      });
    },
    generateStructDb() {
      return prisma2.$executeRaw`CALL restructure_db()`;
    }
  };
}

// app/components/api/doc.ts
function DocModule(prisma2) {
  return {
    async getDoc(sid, inputForm) {
      let tables = {};
      for (let group of inputForm.groups) {
        let fields = { id: null, sid: null, lst: 0 };
        for (let field of group.fields)
          fields[`f${field.id}`] = "";
        group.isMulty ? tables[`tbl_${group.id}`] = [] : tables[`tbl_${group.id}`] = [fields];
      }
      let doc = {
        id: null,
        formId: inputForm.id,
        isActive: !0,
        startDate: null,
        endDate: null,
        createdAt: null,
        updatedAt: null,
        createdUserId: null,
        updatedUserId: null,
        ...tables
      };
      if (sid) {
        let result = await prisma2.doc.findFirst({
          where: {
            id: sid,
            isActive: !0
          }
        });
        result && (doc.id = result.id, doc.formId = result.formId, doc.isActive = result.isActive, doc.startDate = result.startDate, doc.endDate = result.endDate, doc.createdAt = result.createdAt, doc.updatedAt = result.updatedAt, doc.createdUserId = result.createdUserId, doc.updatedUserId = result.updatedUserId);
      }
      for (let group of inputForm.groups) {
        let tbl = `tbl_${group.id}`;
        if (doc?.id) {
          let sql = "SELECT id";
          for (let field of group.fields) {
            let fieldName = `f${field.id}`;
            switch (field.fieldType) {
              case "DATE":
                sql = sql + `, to_char(${fieldName}, 'DD.MM.YYYY') ${fieldName}`;
                break;
              case "TIME":
                sql = sql + `, to_char(${fieldName}, 'HH:MI') ${fieldName}`;
                break;
              default:
                sql = sql + `, ${fieldName}`;
            }
          }
          sql = sql + ` FROM ${tbl} WHERE sid = ${sid}`;
          let data = await prisma2.$queryRawUnsafe(`${sql}`);
          doc[tbl] = data;
        }
      }
      return doc;
    },
    async createDoc(userId, inputForm, formData) {
      let tr = [], seq = await prisma2.$queryRaw`SELECT nextval('doc_id_seq')`, sid = Number(seq[0].nextval);
      tr.push(
        prisma2.doc.create({
          data: {
            id: sid,
            formId: inputForm.id,
            isActive: !0,
            dateStart: null,
            dateEnd: null,
            createdAt: null,
            updatedAt: null,
            createdUserId: userId,
            updatedUserId: null
          }
        })
      );
      for (let group of inputForm.groups) {
        let tableName = `tbl_${group.id}`, recCount = Number(formData.get(`${tableName}__count`));
        for (let i = 0; i < recCount; i++) {
          let flds = "sid", vals = `${sid}`;
          for (let field of group.fields) {
            let fieldName = `f${field.id}`;
            switch (flds = flds + `, ${fieldName}`, field.fieldType) {
              case "TEXT":
              case "CYRILLIC":
              case "DATE":
              case "TIME":
                let stringVal = formData.get(`${tableName}__${fieldName}__${i}`)?.toString();
                vals = vals + `, ${stringVal ? `'${stringVal}'` : "null"}`;
                break;
              case "FILE":
                let fileVal = formData.get(`${tableName}__${fieldName}__${i}`);
                vals = vals + `, ${fileVal.size === 0 ? "null" : `'/uploads/${fileVal.name}'`}`;
                break;
              default:
                let numberVal = formData.get(`${tableName}__${fieldName}__${i}`)?.toString();
                vals = vals + `, ${numberVal ? `${numberVal}` : " null"}`;
                break;
            }
          }
          tr.push(prisma2.$executeRawUnsafe(`INSERT INTO ${tableName}(${flds}) VALUES(${vals})`));
        }
      }
      return prisma2.$transaction(tr);
    },
    updateDoc(userId, inputForm, formData, docId) {
      let tr = [];
      tr.push(
        prisma2.doc.update({
          where: {
            id: docId
          },
          data: {
            formId: inputForm.id,
            isActive: !0,
            dateStart: void 0,
            dateEnd: void 0,
            createdAt: void 0,
            updatedAt: void 0,
            createdUserId: void 0,
            updatedUserId: userId
          }
        })
      );
      for (let group of inputForm.groups) {
        let tableName = `tbl_${group.id}`;
        if (group.isMulty) {
          tr.push(prisma2.$executeRawUnsafe(`DELETE FROM ${tableName} WHERE sid=${docId}`));
          let recCount = Number(formData.get(`${tableName}__count`));
          for (let i = 0; i < recCount; i++) {
            let flds = "sid", vals = `${docId}`;
            for (let field of group.fields) {
              let fieldName = `f${field.id}`;
              flds = flds + `, ${fieldName}`;
              let fieldVal = formData.get(`${tableName}__${fieldName}__${i}`);
              if (["null", ""].includes(String(fieldVal)))
                vals = vals + ", null";
              else
                switch (field.fieldType) {
                  case "TEXT":
                  case "CYRILLIC":
                  case "DATE":
                  case "TIME":
                    vals = vals + `, '${fieldVal}'`;
                    break;
                  case "FILE":
                    vals = vals + `, '/uploads/${fieldVal.name}'`;
                    break;
                  default:
                    vals = vals + `, ${fieldVal}`;
                    break;
                }
            }
            tr.push(prisma2.$executeRawUnsafe(`INSERT INTO ${tableName}(${flds}) VALUES(${vals})`));
          }
        } else {
          tr.push(prisma2.$executeRawUnsafe(`DELETE FROM ${tableName} WHERE sid=${docId}`));
          let sets = " SET ", id = formData.get(`${tableName}__id`);
          for (let field of group.fields) {
            let fieldName = `f${field.id}`, fieldVal = formData.get(`${tableName}__${fieldName}__0`);
            if (["null", ""].includes(String(fieldVal)))
              sets = sets + `, ${fieldName} = null`;
            else
              switch (field.fieldType) {
                case "TEXT":
                case "CYRILLIC":
                case "DATE":
                case "TIME":
                  sets = sets + `, ${fieldName} = '${fieldVal}'`;
                  break;
                case "FILE":
                  let file = fieldVal;
                  file.name && (sets = sets + `, ${fieldName} = '/uploads/${file.name}'`);
                  break;
                default:
                  sets = sets + `, ${fieldName} = ${fieldVal}`;
                  break;
              }
          }
          tr.push(prisma2.$executeRawUnsafe(`UPDATE ${tableName} SET ${sets}) WHERE id={id}`));
        }
      }
      return prisma2.$transaction(tr);
    },
    findDoc(inputForm, formData) {
      let sf = "", select = "SELECT distinct doc.id", from = ' FROM "Doc" doc', where = ' WHERE doc."isActive" is true', tbls = [];
      for (let group of inputForm.groups) {
        let tableName = `tbl_${group.id}`, recCount = Number(formData.get(`${tableName}__count`));
        for (let i = 0; i <= recCount; i++)
          for (let field of group.fields) {
            let fieldName = `f${field.id}`, fieldVal = formData.get(`${tableName}__${fieldName}__${i}`);
            if (fieldVal)
              switch (tbls.includes(tableName) || (tbls.push(tableName), where = where + ` AND doc.id = ${tableName}.sid`, from = from + `, ${tableName}`), field.fieldType) {
                case "TEXT":
                case "CYRILLIC":
                case "DATE":
                case "TIME":
                  where = where + ` AND ${fieldName} = '${fieldVal}'`;
                  break;
                case "FILE":
                  where = where + ` AND ${fieldName} = '/uploads/${fieldVal.name}'`;
                  break;
                default:
                  where = where + ` AND ${fieldName} = ${fieldVal}`;
                  break;
              }
          }
      }
      return sf = select + from + where, prisma2.$queryRawUnsafe(`${sf}`);
    },
    deleteDoc(sid) {
      return prisma2.doc.update({
        where: {
          id: sid
        },
        data: {
          isActive: !1
        }
      });
    },
    searchDoc(conditions) {
      let sf = "", select = "SELECT distinct doc.id", from = ' FROM "Doc" doc', where = ' WHERE doc."isActive" is true', tbls = [], val1 = "", val2 = "", conds = "", sids = "";
      for (let cond of conditions)
        if (cond.log)
          conds = conds + ` ${cond.log}`;
        else {
          let tbl = `tbl_${cond.field?.field.groupId}`, fieldName = `f${cond.field?.fieldId}`;
          switch (tbls.includes(tbl) || (tbls.push(tbl), sids = sids + ` AND doc.id = ${tbl}.sid`, from = from + `, ${tbl}`), cond.field?.field.fieldType) {
            case "TEXT":
            case "CYRILLIC":
            case "DATE":
            case "TIME":
            case "FILE":
              val1 = `'${cond.val1}'`, val2 = `'${cond.val2}'`;
              break;
            default:
              val1 = `${cond.val1}`, val2 = `${cond.val2}`;
              break;
          }
          switch (cond.oper) {
            case "between":
              conds = conds + ` ${fieldName} BETWEEN ${val2} AND ${val2}`;
              break;
            case "=":
            case ">=":
            case ">":
            case "<":
            case "<=":
            case "<>":
              conds = conds + ` ${fieldName} ${cond.oper} ${val1}`;
              break;
            case "=()":
              conds = conds + ` ${fieldName} IS NULL`;
              break;
            case "<>()":
              conds = conds + ` ${fieldName} IS NOT NULL`;
              break;
          }
        }
      return sf = select + from + where + sids + " AND " + conds, prisma2.$queryRawUnsafe(`${sf}`);
    }
  };
}

// app/components/api/index.ts
var api_default = {
  users: UsersModule(instance_default),
  db: DbModule(instance_default),
  doc: DocModule(instance_default)
};

// app/components/UI/elements/error_message.tsx
import MaterialTailwind from "@material-tailwind/react";
import { useState } from "react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var { Alert } = MaterialTailwind;
function ErrorMessage({ errors }) {
  let [open, setOpen] = useState(!1);
  return /* @__PURE__ */ jsxDEV3(
    Alert,
    {
      className: "text-white bg-red-500",
      open: errors !== void 0,
      onClose: () => setOpen(!1),
      children: errors || ""
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/elements/error_message.tsx",
      lineNumber: 13,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/search_data/dlg_condition.tsx
import MaterialTailwind2 from "@material-tailwind/react";

// app/components/UI/elements/custom_button.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function CustomButton({ className, outline, children, ...props }) {
  let cls = "";
  return outline ? cls = `border text-xs py-1.5 px-3.5 flex justify-center items-center gap-2 rounded-md hover:cursor-pointer hover:shadow-lg font-semibold uppercase ${className}` : cls = `text-white text-xs py-1.5 px-3.5 flex justify-center items-center gap-2 rounded-md hover:cursor-pointer hover:shadow-lg font-semibold uppercase ${className}`, /* @__PURE__ */ jsxDEV4(
    "button",
    {
      ...props,
      className: cls,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/elements/custom_button.tsx",
      lineNumber: 18,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/elements/custom_input.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function CustomInput({ className, subClass, id, title, errors, children, ...props }) {
  return /* @__PURE__ */ jsxDEV5(
    "div",
    {
      className: `${className} p-1 flex items-baseline`,
      children: [
        /* @__PURE__ */ jsxDEV5(
          "label",
          {
            className: "font-bold text-sm mr-1 min-w-40",
            htmlFor: id,
            children: title
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/elements/custom_input.tsx",
            lineNumber: 17,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV5("div", { className: "flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxDEV5(
            "input",
            {
              id,
              className: `${subClass} font-mono font-bold text-sm border-2 p-1 focus:outline-blue-gray-500`,
              ...props,
              children
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/elements/custom_input.tsx",
              lineNumber: 24,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV5("span", { className: "text-sm text-red-500 h-4", children: errors }, void 0, !1, {
            fileName: "app/components/UI/elements/custom_input.tsx",
            lineNumber: 31,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/UI/elements/custom_input.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/elements/custom_input.tsx",
      lineNumber: 14,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/search_data/dlg_condition.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var { Dialog, Card, CardBody, CardFooter } = MaterialTailwind2;
function ConditionDialog({
  condIndex,
  cond,
  setCond,
  show,
  setShow,
  conditions,
  setConditions
}) {
  let handlerOK = () => {
    if (condIndex !== null) {
      let conds = [...conditions];
      conds.splice(condIndex, 1, cond), setConditions(conds);
    } else
      conditions.length > 0 ? setConditions([...conditions, { log: "AND" }, cond]) : setConditions([...conditions, cond]);
    setShow(!1);
  };
  return /* @__PURE__ */ jsxDEV6(
    Dialog,
    {
      placeholder: "",
      size: "md",
      open: show,
      handler: () => setShow(!1),
      className: "bg-transparent shadow-none",
      children: /* @__PURE__ */ jsxDEV6(Card, { className: "mx-auto w-full", placeholder: "", children: [
        /* @__PURE__ */ jsxDEV6(CardBody, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-between items-center gap-1 w-full", children: [
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === "between" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: "between" }),
                disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)),
                children: "\u0421..\u041F\u041E"
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 53,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === "=" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: "=" }),
                children: "="
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 60,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === ">" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: ">" }),
                disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)),
                children: ">"
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 66,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === ">=" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: ">=" }),
                disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)),
                children: ">="
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 73,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === "<" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: "<" }),
                disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)),
                children: "<"
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 80,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === "<=" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: "<=" }),
                disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)),
                children: "<="
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 87,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === "<>" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: "<>" }),
                children: "<>"
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 94,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === "=()" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: "=()" }),
                children: "=()"
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 100,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomButton,
              {
                className: `${cond.oper === "<>()" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`,
                onClick: () => setCond({ ...cond, oper: "<>()" }),
                children: "<>()"
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 106,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
            lineNumber: 52,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "text-sm font-bold text-blue-gray-600", children: cond.field?.title }, void 0, !1, {
            fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
            lineNumber: 113,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { children: cond.oper === "between" ? /* @__PURE__ */ jsxDEV6("div", { children: [
            /* @__PURE__ */ jsxDEV6(
              CustomInput,
              {
                id: "val1",
                type: "text",
                name: "val1",
                title: "Val1: ",
                value: cond.val1,
                onChange: (e) => setCond({ ...cond, val1: e.target.value })
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 117,
                columnNumber: 33
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6(
              CustomInput,
              {
                id: "val2",
                type: "text",
                name: "val2",
                title: "Val2: ",
                value: cond.val2,
                onChange: (e) => setCond({ ...cond, val2: e.target.value })
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
                lineNumber: 125,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
            lineNumber: 116,
            columnNumber: 31
          }, this) : /* @__PURE__ */ jsxDEV6("div", { children: /* @__PURE__ */ jsxDEV6(
            CustomInput,
            {
              id: "val1",
              type: "text",
              name: "val1",
              title: "Val1: ",
              value: cond.val1,
              onChange: (e) => setCond({ ...cond, val1: e.target.value })
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
              lineNumber: 135,
              columnNumber: 33
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
            lineNumber: 134,
            columnNumber: 31
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
            lineNumber: 114,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6(CardFooter, { className: "pt-0 flex flex-row gap-3", placeholder: "", children: [
          /* @__PURE__ */ jsxDEV6(
            CustomButton,
            {
              className: "bg-blue-gray-500 hover:shadow-green-100",
              onClick: () => handlerOK(),
              children: "OK"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
              lineNumber: 147,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV6(
            CustomButton,
            {
              className: "bg-blue-gray-500 hover:shadow-green-100",
              onClick: () => setShow(!1),
              children: "Cancel"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
              lineNumber: 153,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
          lineNumber: 146,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
      lineNumber: 43,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/search_data/buttons/btn_search.tsx
import { useSubmit } from "@remix-run/react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function ButtonSearch({
  userId,
  inputFormId,
  conditions
}) {
  let { t } = useTranslation2(), submit = useSubmit(), handleSearch = () => {
    submit({
      _action: "searchDocument",
      _user: userId,
      _inputFormId: inputFormId,
      json: JSON.stringify(conditions)
    }, {
      method: "post"
    });
  };
  return /* @__PURE__ */ jsxDEV7(
    CustomButton,
    {
      className: "bg-blue-gray-500 hover:shadow-blue-gray-100",
      onClick: () => handleSearch(),
      children: [
        /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV7("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, !1, {
          fileName: "app/components/UI/widgets/search_data/buttons/btn_search.tsx",
          lineNumber: 36,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/search_data/buttons/btn_search.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        t("search")
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/search_data/buttons/btn_search.tsx",
      lineNumber: 31,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/search_data/buttons/buttons.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function Buttons({ userId, inputFormId, conditions }) {
  return /* @__PURE__ */ jsxDEV8(
    "div",
    {
      className: "flex items-center gap-3",
      children: /* @__PURE__ */ jsxDEV8(
        ButtonSearch,
        {
          userId,
          inputFormId,
          conditions
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/search_data/buttons/buttons.tsx",
          lineNumber: 15,
          columnNumber: 13
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/widgets/search_data/buttons/buttons.tsx",
      lineNumber: 12,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/elements/panel.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Panel({ className, children, ...props }) {
  return /* @__PURE__ */ jsxDEV9(
    "div",
    {
      className: `${className} bg-white border p-1 shadow-blue-gray-700 shadow-md`,
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/elements/panel.tsx",
      lineNumber: 9,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/search_data/list_fields.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function ListFields({ searchForm, fld, setFld, handleOpenCondition }) {
  return /* @__PURE__ */ jsxDEV10("div", { className: "w-1/3", children: searchForm && searchForm.fields.map((field) => /* @__PURE__ */ jsxDEV10(
    "div",
    {
      className: `${fld?.id === field.id ? "bg-blue-gray-100" : ""} hover:cursor-pointer hover:bg-blue-gray-100 select-none`,
      onClick: () => setFld(field),
      onDoubleClick: () => handleOpenCondition({
        oper: ["TEXT", "CYRILLIC", "DICT"].includes(field.field.fieldType) ? "=" : "between",
        field
      }, null),
      children: field.title
    },
    field.id,
    !1,
    {
      fileName: "app/components/UI/widgets/search_data/list_fields.tsx",
      lineNumber: 16,
      columnNumber: 17
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/UI/widgets/search_data/list_fields.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/search_data/view.tsx
import { useSubmit as useSubmit2 } from "@remix-run/react";

// app/components/UI/widgets/search_data/cond_buttons.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function ConditionButtons({
  handleAddCondition,
  handleDeleteCondition,
  handleEraseConditions,
  handleBktBoth,
  handleBktLeft,
  handleBktRight,
  handleReplaceOrAnd
}) {
  return /* @__PURE__ */ jsxDEV11("div", { className: "self-center flex flex-col justify-center gap-1", children: [
    /* @__PURE__ */ jsxDEV11(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center",
        onClick: () => handleAddCondition(),
        children: "Add"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
        lineNumber: 24,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center",
        onClick: () => handleDeleteCondition(),
        children: "Delete"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
        lineNumber: 30,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center",
        onClick: () => handleEraseConditions(),
        children: "Erase"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
        lineNumber: 36,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center",
        onClick: () => handleBktBoth(),
        children: "()"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
        lineNumber: 42,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center",
        onClick: () => handleBktLeft(),
        children: "("
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
        lineNumber: 48,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center",
        onClick: () => handleBktRight(),
        children: ")"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
        lineNumber: 54,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center",
        onClick: () => handleReplaceOrAnd("OR"),
        children: "OR"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
        lineNumber: 60,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV11(
      CustomButton,
      {
        className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center",
        onClick: () => handleReplaceOrAnd("AND"),
        children: "AND"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
        lineNumber: 66,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/search_data/list_conditions.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function ListConditions({
  conditions,
  condIndex,
  setCondIndex,
  handleOpenCondition
}) {
  return /* @__PURE__ */ jsxDEV12("div", { className: "w-2/3", children: conditions.map((c, index) => /* @__PURE__ */ jsxDEV12(
    "div",
    {
      className: `${condIndex === index ? "bg-blue-gray-100" : ""} hover:cursor-pointer`,
      onClick: () => setCondIndex(index),
      children: c.log ? /* @__PURE__ */ jsxDEV12(
        "div",
        {
          children: [
            "---- ",
            c.log,
            " ----"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/search_data/list_conditions.tsx",
          lineNumber: 26,
          columnNumber: 27
        },
        this
      ) : /* @__PURE__ */ jsxDEV12(
        "div",
        {
          onDoubleClick: () => handleOpenCondition(c, index),
          children: [
            c.field?.title,
            " ",
            c.oper,
            " ",
            c.val1,
            " ",
            c.val2
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/search_data/list_conditions.tsx",
          lineNumber: 29,
          columnNumber: 27
        },
        this
      )
    },
    index,
    !1,
    {
      fileName: "app/components/UI/widgets/search_data/list_conditions.tsx",
      lineNumber: 20,
      columnNumber: 17
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/UI/widgets/search_data/list_conditions.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/search_data/view.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function SearchDataView({
  errors,
  condIndex,
  setCondIndex,
  cond,
  setCond,
  show,
  setShow,
  conditions,
  setConditions,
  userId,
  inputFormId,
  searchForm,
  fld,
  setFld
}) {
  let submit = useSubmit2(), handleOpenCondition = (cond2, condIndex2 = null) => {
    setCondIndex(condIndex2), setCond(cond2), setShow(!0);
  };
  return /* @__PURE__ */ jsxDEV13("div", { className: "h-[calc(100vh-5rem)] flex flex-col gap-3 pb-5", children: [
    /* @__PURE__ */ jsxDEV13(ErrorMessage, { errors }, void 0, !1, {
      fileName: "app/components/UI/widgets/search_data/view.tsx",
      lineNumber: 112,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV13(
      ConditionDialog,
      {
        condIndex,
        cond,
        setCond,
        show,
        setShow,
        conditions,
        setConditions
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/search_data/view.tsx",
        lineNumber: 113,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV13(Panel, { className: "h-full overflow-auto", children: [
      /* @__PURE__ */ jsxDEV13(
        Buttons,
        {
          userId,
          inputFormId,
          conditions
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/search_data/view.tsx",
          lineNumber: 123,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-row", children: [
        /* @__PURE__ */ jsxDEV13(
          ListFields,
          {
            searchForm,
            fld,
            setFld,
            handleOpenCondition
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/search_data/view.tsx",
            lineNumber: 129,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ jsxDEV13(
          ConditionButtons,
          {
            handleAddCondition: () => {
              fld && handleOpenCondition({
                oper: ["TEXT", "CYRILLIC", "DICT"].includes(fld.field.fieldType) ? "=" : "between",
                field: fld
              });
            },
            handleDeleteCondition: () => {
              if (condIndex !== null) {
                let conds = [...conditions];
                conds[condIndex].log ? conds.splice(condIndex, 1) : conds.splice(condIndex - 1, 2), setConditions(conds);
              }
            },
            handleEraseConditions: () => {
              setConditions([]);
            },
            handleBktBoth: () => {
              conditions.length > 0 && setConditions([
                { log: "(" },
                ...conditions,
                { log: ")" }
              ]);
            },
            handleBktLeft: () => {
              if (condIndex !== null && !conditions[condIndex].log) {
                let conds = [...conditions];
                conds.splice(condIndex, 0, { log: "(" }), setConditions(conds);
              }
            },
            handleBktRight: () => {
              if (condIndex !== null && !conditions[condIndex].log) {
                let conds = [...conditions];
                conds.splice(condIndex + 1, 0, { log: ")" }), setConditions(conds);
              }
            },
            handleReplaceOrAnd: (log) => {
              if (condIndex !== null && ["OR", "AND"].includes(String(conditions[condIndex].log))) {
                let conds = [...conditions];
                conds.splice(condIndex, 1, { log }), setConditions(conds);
              }
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/search_data/view.tsx",
            lineNumber: 135,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ jsxDEV13(
          ListConditions,
          {
            conditions,
            condIndex,
            setCondIndex,
            handleOpenCondition
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/search_data/view.tsx",
            lineNumber: 144,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/search_data/view.tsx",
        lineNumber: 128,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/search_data/view.tsx",
      lineNumber: 122,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/search_data/view.tsx",
    lineNumber: 111,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard.search_data.$formId.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
async function loader2({
  request,
  params
}) {
  let state = new URL(request.url).searchParams.get("state"), searchForm;
  return searchForm = await api_default.db.getSearchForm(Number(params.formId)), json2({ searchForm, state });
}
async function action({
  request
}) {
  let ok = !1, errors = "", docs = null, formData = await request.formData(), {
    _action,
    _user,
    _inputFormId,
    ...values
  } = Object.fromEntries(formData);
  try {
    let jsonData = JSON.parse(String(values.json)), results = await api_default.doc.searchDoc(jsonData);
    docs = {
      formId: Number(_inputFormId),
      ids: results.map((item) => item.id)
    }, ok = !0;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError)
      errors = e.message;
    else
      throw e;
  }
  return json2({ errors });
}
function SearchData() {
  let { conditions, setConditions } = useOutletContext(), { searchForm, state } = useLoaderData2(), data = useActionData(), [showCondition, setShowCondition] = useState2(!1), [cond, setCond] = useState2({}), [condIndex, setCondIndex] = useState2(null), [fld, setFld] = useState2(null), userId = 19;
  return /* @__PURE__ */ jsxDEV14(
    SearchDataView,
    {
      errors: data?.errors,
      condIndex,
      setCondIndex,
      cond,
      setCond,
      show: showCondition,
      setShow: setShowCondition,
      conditions,
      setConditions,
      userId,
      inputFormId: searchForm ? searchForm.inputFormId : null,
      searchForm,
      fld,
      setFld
    },
    void 0,
    !1,
    {
      fileName: "app/routes/dashboard.search_data.$formId.tsx",
      lineNumber: 62,
      columnNumber: 9
    },
    this
  );
}

// app/routes/dashboard.enter_data.$formId.tsx
var dashboard_enter_data_formId_exports = {};
__export(dashboard_enter_data_formId_exports, {
  action: () => action2,
  default: () => EnterData,
  loader: () => loader3
});
import { Prisma as Prisma2 } from "@prisma/client";
import { json as json3, redirect, unstable_composeUploadHandlers, unstable_createFileUploadHandler, unstable_createMemoryUploadHandler, unstable_parseMultipartFormData } from "@remix-run/node";
import { useActionData as useActionData2, useLoaderData as useLoaderData3, useNavigation, useOutletContext as useOutletContext2 } from "@remix-run/react";
import { useEffect as useEffect2, useRef, useState as useState5 } from "react";

// app/components/UI/widgets/enter_data/view.tsx
import { useState as useState4 } from "react";

// app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx
import { useNavigate } from "@remix-run/react";
import { useTranslation as useTranslation3 } from "react-i18next";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
function ButtonCancel({ inputFormId, docId }) {
  let { t } = useTranslation3(), navigate = useNavigate();
  return /* @__PURE__ */ jsxDEV15(
    CustomButton,
    {
      outline: !0,
      className: "w-32 hover:shadow-primary_shadow text-primary border-primary",
      onClick: () => navigate(`/dashboard/enter_data/${inputFormId}?docId=${docId}`),
      children: [
        /* @__PURE__ */ jsxDEV15("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV15("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
          lineNumber: 21,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this),
        t("cancel")
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
      lineNumber: 15,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/enter_data/buttons/btn_create.tsx
import { useNavigate as useNavigate2 } from "@remix-run/react";
import { useTranslation as useTranslation4 } from "react-i18next";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function ButtonCreate({ inputFormId }) {
  let { t } = useTranslation4(), navigate = useNavigate2();
  return /* @__PURE__ */ jsxDEV16(
    CustomButton,
    {
      className: "w-32 bg-primary hover:shadow-primary_shadow",
      onClick: () => navigate(`/dashboard/enter_data/${inputFormId}?state=create`),
      children: [
        /* @__PURE__ */ jsxDEV16("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV16("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
          lineNumber: 19,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        t("create")
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
      lineNumber: 14,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/enter_data/buttons/btn_delete.tsx
import { Form } from "@remix-run/react";
import { useTranslation as useTranslation5 } from "react-i18next";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
function ButtonDelete({ userId, inputFormId, doc }) {
  let { t } = useTranslation5(), handleDelete = async (event) => {
    confirm(
      t("confirm_delete")
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV17(Form, { method: "post", children: [
    /* @__PURE__ */ jsxDEV17("input", { type: "hidden", name: "_user", value: userId }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV17("input", { type: "hidden", name: "_inputFormId", value: inputFormId }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV17("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV17(
      CustomButton,
      {
        className: "w-32 bg-red-500 hover:shadow-red-100",
        onClick: handleDelete,
        type: "submit",
        name: "_action",
        value: "deleteDocument",
        children: [
          /* @__PURE__ */ jsxDEV17("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV17("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
            fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
            lineNumber: 35,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
            lineNumber: 34,
            columnNumber: 17
          }, this),
          t("delete")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
        lineNumber: 27,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/enter_data/buttons/btn_edit.tsx
import { useNavigate as useNavigate3 } from "@remix-run/react";
import { useTranslation as useTranslation6 } from "react-i18next";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
function ButtonEdit({ inputFormId, docId }) {
  let { t } = useTranslation6(), navigate = useNavigate3();
  return /* @__PURE__ */ jsxDEV18(
    CustomButton,
    {
      className: "w-32 bg-blue-gray-500 hover:shadow-blue-gray-100",
      onClick: () => navigate(`/dashboard/enter_data/${inputFormId}?state=edit&docId=${docId}`),
      children: [
        /* @__PURE__ */ jsxDEV18("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV18("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
          lineNumber: 20,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        t("edit")
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
      lineNumber: 15,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/enter_data/buttons/btn_find.tsx
import { useTranslation as useTranslation7 } from "react-i18next";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
function ButtonFind() {
  let { t } = useTranslation7();
  return /* @__PURE__ */ jsxDEV19(
    CustomButton,
    {
      className: "w-32 bg-blue-gray-500 hover:shadow-blue-gray-100",
      form: "documentForm",
      type: "submit",
      name: "_action",
      value: "findDocument",
      children: [
        /* @__PURE__ */ jsxDEV19("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV19("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/btn_find.tsx",
          lineNumber: 17,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/btn_find.tsx",
          lineNumber: 16,
          columnNumber: 13
        }, this),
        t("find")
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_find.tsx",
      lineNumber: 9,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/enter_data/buttons/btn_save.tsx
import { useTranslation as useTranslation8 } from "react-i18next";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function ButtonSave() {
  let { t } = useTranslation8();
  return /* @__PURE__ */ jsxDEV20(
    CustomButton,
    {
      className: "w-32 bg-primary hover:shadow-primary_shadow",
      form: "documentForm",
      type: "submit",
      name: "_action",
      value: "saveDocument",
      children: [
        /* @__PURE__ */ jsxDEV20("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV20("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/btn_save.tsx",
          lineNumber: 15,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/btn_save.tsx",
          lineNumber: 14,
          columnNumber: 13
        }, this),
        t("save")
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_save.tsx",
      lineNumber: 7,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/enter_data/buttons/btn_search.tsx
import { useNavigate as useNavigate4 } from "@remix-run/react";
import { useTranslation as useTranslation9 } from "react-i18next";
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
function ButtonSearch2({ inputFormId }) {
  let { t } = useTranslation9(), navigate = useNavigate4();
  return /* @__PURE__ */ jsxDEV21(
    CustomButton,
    {
      className: "w-32 bg-primary hover:shadow-primary_shadow",
      onClick: () => navigate(`/dashboard/enter_data/${inputFormId}?state=search`),
      children: [
        /* @__PURE__ */ jsxDEV21("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV21("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
          lineNumber: 19,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        t("search")
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
      lineNumber: 14,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/enter_data/buttons/buttons.tsx
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
function Buttons2({ userId, inputFormId, state, doc }) {
  return /* @__PURE__ */ jsxDEV22(
    "div",
    {
      className: "flex items-center gap-3",
      children: [
        ["create", "edit", "search"].includes(String(state)) ? null : /* @__PURE__ */ jsxDEV22(ButtonCreate, { inputFormId }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
          lineNumber: 23,
          columnNumber: 19
        }, this),
        ["create", "edit", "search"].includes(String(state)) ? null : /* @__PURE__ */ jsxDEV22(ButtonSearch2, { inputFormId }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
          lineNumber: 26,
          columnNumber: 19
        }, this),
        state === "search" ? /* @__PURE__ */ jsxDEV22(ButtonFind, {}, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
          lineNumber: 29,
          columnNumber: 19
        }, this) : null,
        doc.id && !["create", "edit"].includes(String(state)) ? /* @__PURE__ */ jsxDEV22(ButtonEdit, { inputFormId, docId: doc.id }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
          lineNumber: 32,
          columnNumber: 19
        }, this) : null,
        state === "edit" || state === "create" ? /* @__PURE__ */ jsxDEV22(ButtonSave, {}, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
          lineNumber: 35,
          columnNumber: 19
        }, this) : null,
        state === "edit" || state === "search" || state === "create" ? /* @__PURE__ */ jsxDEV22(ButtonCancel, { inputFormId, docId: doc.id }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
          lineNumber: 38,
          columnNumber: 19
        }, this) : null,
        doc.id && !["create", "edit"].includes(String(state)) ? /* @__PURE__ */ jsxDEV22(ButtonDelete, { userId, inputFormId, doc }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
          lineNumber: 41,
          columnNumber: 19
        }, this) : null
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
      lineNumber: 19,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/enter_data/dlg_find_result.tsx
import MaterialTailwind3 from "@material-tailwind/react";
import { useNavigate as useNavigate5 } from "@remix-run/react";
import { useTranslation as useTranslation10 } from "react-i18next";
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
var { Dialog: Dialog2, Card: Card2, CardBody: CardBody2, CardFooter: CardFooter2 } = MaterialTailwind3;
function DialogFindResult({ open, setOpen, docs }) {
  let { t } = useTranslation10(), navigate = useNavigate5(), handleOpenInputForm = () => {
    setOpen(!1), docs && docs.ids?.length ? navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[0]}`) : navigate(`/dashboard/enter_data/${docs.formId}?state=search`);
  };
  return /* @__PURE__ */ jsxDEV23(
    Dialog2,
    {
      placeholder: "",
      size: "xs",
      open,
      className: "bg-transparent shadow-none",
      children: /* @__PURE__ */ jsxDEV23(Card2, { className: "mx-auto w-full", placeholder: "", children: [
        /* @__PURE__ */ jsxDEV23(CardBody2, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: docs && docs.ids?.length ? /* @__PURE__ */ jsxDEV23("div", { className: "font-bold text-lg p-1 text-primary text-center", children: [
          t("find_result"),
          " ",
          docs.ids?.length
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
          lineNumber: 36,
          columnNumber: 27
        }, this) : /* @__PURE__ */ jsxDEV23("div", { className: "font-bold text-lg p-1 text-primary text-center", children: t("nothing") }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
          lineNumber: 37,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV23(CardFooter2, { className: "pt-0 flex flex-row gap-3 justify-center", placeholder: "", children: /* @__PURE__ */ jsxDEV23(
          CustomButton,
          {
            className: "bg-primary hover:shadow-primary_shadow w-40",
            onClick: () => handleOpenInputForm(),
            children: "OK"
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
            lineNumber: 41,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
      lineNumber: 26,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx
import { useNavigate as useNavigate6 } from "@remix-run/react";
import { useState as useState3 } from "react";
import { useTranslation as useTranslation11 } from "react-i18next";
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
function RecNavigator({ docs, current, setCurrent }) {
  let { t } = useTranslation11(), [val, setVal] = useState3(current), navigate = useNavigate6(), handleFirst = () => {
    setVal(0), setCurrent(0), navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[0]}`);
  }, handlePrev = () => {
    current > 0 && (--current, setVal(current), setCurrent(current), navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[current]}`));
  }, handleNext = () => {
    let lastIndex = docs.ids.length - 1;
    current < lastIndex && (++current, setVal(current), setCurrent(current), navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[current]}`));
  }, handleLast = () => {
    let lastIndex = docs.ids.length - 1;
    setVal(lastIndex), setCurrent(lastIndex), navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[lastIndex]}`);
  }, handleSeek = (val2) => {
    val2 < 0 && (val2 = 0), val2 > docs.ids.length - 1 && (val2 = docs.ids.length - 1), setVal(val2), setCurrent(val2), navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[val2]}`);
  };
  return /* @__PURE__ */ jsxDEV24("div", { children: docs && docs.ids ? /* @__PURE__ */ jsxDEV24("div", { className: "flex gap-1 justify-end items-center text-xs", children: [
    /* @__PURE__ */ jsxDEV24("p", { className: "text-blue-gray-600 font-bold", children: [
      current + 1,
      " / ",
      docs.ids.length
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
      lineNumber: 58,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV24(
      "input",
      {
        className: "ml-1 p-1 text-primary focus:outline-0 w-20 border border-primary rounded",
        type: "number",
        max: docs.ids.length,
        min: 1,
        value: val + 1,
        onChange: (e) => setVal(Number(e.target.value) - 1)
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
        lineNumber: 61,
        columnNumber: 21
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24(
      "button",
      {
        className: "w-20 text-center border bg-secondary p-1 font-bold text-white rounded",
        onClick: () => handleSeek(val),
        children: t("seek")
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
        lineNumber: 70,
        columnNumber: 21
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24(
      "button",
      {
        className: "w-8 text-center border bg-secondary p-1 font-bold text-white rounded",
        onClick: () => handleFirst(),
        children: "<<"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
        lineNumber: 76,
        columnNumber: 21
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24(
      "button",
      {
        className: "w-8 text-center border bg-secondary p-1 font-bold text-white rounded",
        onClick: () => handlePrev(),
        children: "<"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
        lineNumber: 82,
        columnNumber: 21
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24(
      "button",
      {
        className: "w-8 text-center border bg-secondary p-1 font-bold text-white rounded",
        onClick: () => handleNext(),
        children: ">"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
        lineNumber: 88,
        columnNumber: 21
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24(
      "button",
      {
        className: "w-8 text-center border bg-secondary p-1 font-bold text-white rounded",
        onClick: () => handleLast(),
        children: ">>"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
        lineNumber: 94,
        columnNumber: 21
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
    lineNumber: 57,
    columnNumber: 19
  }, this) : null }, void 0, !1, {
    fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
    lineNumber: 55,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/enter_data/edit_form/edit_form.tsx
import { useLocation, useSubmit as useSubmit3 } from "@remix-run/react";

// app/components/UI/elements/custom_select.tsx
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
function CustomSelect({ className, id, title, errors, children, ...props }) {
  return /* @__PURE__ */ jsxDEV25(
    "div",
    {
      className: `${className} p-1 flex items-baseline`,
      children: [
        /* @__PURE__ */ jsxDEV25(
          "label",
          {
            className: "font-bold text-sm mr-1 min-w-40",
            htmlFor: id,
            children: title
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/elements/custom_select.tsx",
            lineNumber: 16,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV25("div", { className: "flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxDEV25(
            "select",
            {
              id,
              className: "font-mono font-bold text-sm border-2 p-1 focus:outline-blue-gray-500 bg-white",
              ...props,
              children
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/elements/custom_select.tsx",
              lineNumber: 23,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV25("span", { className: "text-sm text-red-500 h-4", children: errors }, void 0, !1, {
            fileName: "app/components/UI/elements/custom_select.tsx",
            lineNumber: 30,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/UI/elements/custom_select.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/elements/custom_select.tsx",
      lineNumber: 13,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/enter_data/edit_form/field.tsx
import { useTranslation as useTranslation12 } from "react-i18next";
import moment from "moment";
import { Fragment, jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
function Field({
  state,
  dictionaries,
  cls,
  fieldName,
  fieldType,
  fieldTitle,
  fieldLen,
  fieldRequired,
  fieldDisabled,
  fieldDict,
  defaultVal
}) {
  let { i18n } = useTranslation12();
  switch (fieldType) {
    case "TEXT":
      return /* @__PURE__ */ jsxDEV26(
        CustomInput,
        {
          className: cls,
          id: fieldName,
          title: fieldTitle,
          type: "text",
          name: fieldName,
          defaultValue: defaultVal,
          required: fieldRequired,
          disabled: fieldDisabled,
          size: fieldLen,
          maxLength: fieldLen
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 41,
          columnNumber: 17
        },
        this
      );
    case "CYRILLIC":
      return /* @__PURE__ */ jsxDEV26(
        CustomInput,
        {
          className: cls,
          id: fieldName,
          title: fieldTitle,
          type: "text",
          name: fieldName,
          defaultValue: defaultVal,
          required: fieldRequired,
          disabled: fieldDisabled,
          size: fieldLen,
          maxLength: fieldLen
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 56,
          columnNumber: 17
        },
        this
      );
    case "INTEGER":
      return /* @__PURE__ */ jsxDEV26(
        CustomInput,
        {
          className: cls,
          id: fieldName,
          title: fieldTitle,
          type: "number",
          name: fieldName,
          defaultValue: defaultVal,
          required: fieldRequired,
          disabled: fieldDisabled,
          size: fieldLen,
          maxLength: fieldLen
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 71,
          columnNumber: 17
        },
        this
      );
    case "NUMERIC":
      return /* @__PURE__ */ jsxDEV26(
        CustomInput,
        {
          className: cls,
          id: fieldName,
          title: fieldTitle,
          type: "number",
          step: "0.01",
          name: fieldName,
          defaultValue: defaultVal,
          required: fieldRequired,
          disabled: fieldDisabled,
          size: fieldLen,
          maxLength: fieldLen
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 86,
          columnNumber: 17
        },
        this
      );
    case "DICT":
      let dic = dictionaries.find((item) => item.id === fieldDict);
      return /* @__PURE__ */ jsxDEV26(
        CustomSelect,
        {
          className: cls,
          id: fieldName,
          title: fieldTitle,
          name: fieldName,
          defaultValue: defaultVal,
          required: fieldRequired,
          disabled: fieldDisabled,
          children: [
            /* @__PURE__ */ jsxDEV26("option", { children: "-" }, void 0, !1, {
              fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
              lineNumber: 112,
              columnNumber: 21
            }, this),
            ["create", "edit", "search", "find"].includes(String(state)) ? dic?.data_edit.map((item) => /* @__PURE__ */ jsxDEV26("option", { value: item.id, children: item[`title_${i18n.language}`] }, item.id, !1, {
              fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
              lineNumber: 115,
              columnNumber: 29
            }, this)) : dic?.data_browse.map((item) => /* @__PURE__ */ jsxDEV26("option", { value: item.id, children: item[`title_${i18n.language}`] }, item.id, !1, {
              fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
              lineNumber: 118,
              columnNumber: 29
            }, this))
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 103,
          columnNumber: 17
        },
        this
      );
    case "DATE":
      return /* @__PURE__ */ jsxDEV26(
        CustomInput,
        {
          className: cls,
          id: fieldName,
          title: fieldTitle,
          type: "date",
          name: fieldName,
          defaultValue: moment(defaultVal, "DD.MM.YYYY").format("YYYY-MM-DD"),
          required: fieldRequired,
          disabled: fieldDisabled,
          size: fieldLen,
          maxLength: fieldLen
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 124,
          columnNumber: 17
        },
        this
      );
    case "TIME":
      return /* @__PURE__ */ jsxDEV26(
        CustomInput,
        {
          className: cls,
          id: fieldName,
          title: fieldTitle,
          type: "time",
          name: fieldName,
          defaultValue: defaultVal,
          required: fieldRequired,
          disabled: fieldDisabled,
          size: fieldLen,
          maxLength: fieldLen
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 139,
          columnNumber: 17
        },
        this
      );
    case "FILE":
      return /* @__PURE__ */ jsxDEV26(Fragment, { children: defaultVal ? /* @__PURE__ */ jsxDEV26(
        "div",
        {
          className: `${cls} p-1 flex items-baseline mb-3`,
          children: [
            /* @__PURE__ */ jsxDEV26(
              "div",
              {
                className: "font-bold text-sm mr-1 min-w-40",
                children: fieldTitle
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
                lineNumber: 159,
                columnNumber: 29
              },
              this
            ),
            defaultVal instanceof File ? /* @__PURE__ */ jsxDEV26("div", { className: "text-primary", children: defaultVal.name }, void 0, !1, {
              fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
              lineNumber: 166,
              columnNumber: 39
            }, this) : /* @__PURE__ */ jsxDEV26("a", { className: "text-primary underline", href: defaultVal, children: defaultVal }, void 0, !1, {
              fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
              lineNumber: 169,
              columnNumber: 39
            }, this),
            /* @__PURE__ */ jsxDEV26("button", { children: "Delete" }, void 0, !1, {
              fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
              lineNumber: 173,
              columnNumber: 29
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 156,
          columnNumber: 27
        },
        this
      ) : /* @__PURE__ */ jsxDEV26(
        CustomInput,
        {
          className: cls,
          id: fieldName,
          title: fieldTitle,
          type: "file",
          name: fieldName,
          defaultValue: "",
          required: fieldRequired,
          disabled: fieldDisabled
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 175,
          columnNumber: 27
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
        lineNumber: 154,
        columnNumber: 17
      }, this);
  }
}

// app/components/UI/widgets/enter_data/edit_form/single_group.tsx
import { useTranslation as useTranslation13 } from "react-i18next";
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
function SingleGroup({ state, dictionaries, group, doc, setDoc }) {
  let { i18n } = useTranslation13();
  return /* @__PURE__ */ jsxDEV27("div", { className: "border p-1 grid grid-cols-3 gap-1", children: group?.fields && group.fields.map((fld) => {
    let cls = `col-span-${fld.colSpan} col-start-${fld.colStart}`, fieldName = `f${fld.id}`, fieldTitle = fld[`title_${i18n.language}`], fieldLen = fld.len ? fld.len : 30, fieldRequired = fld.isRequire && state === "edit", fieldDisabled = !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), tableName = `tbl_${fld.groupId}`, val = "";
    return doc[tableName].length && (val = doc[tableName][0][fieldName]), /* @__PURE__ */ jsxDEV27(
      Field,
      {
        cls,
        state,
        dictionaries,
        fieldName: `${tableName}__${fieldName}__0`,
        fieldType: fld.fieldType,
        fieldTitle,
        fieldLen,
        fieldRequired,
        fieldDisabled,
        fieldDict: fld.dicId,
        defaultVal: val
      },
      fld.id,
      !1,
      {
        fileName: "app/components/UI/widgets/enter_data/edit_form/single_group.tsx",
        lineNumber: 32,
        columnNumber: 21
      },
      this
    );
  }) }, void 0, !1, {
    fileName: "app/components/UI/widgets/enter_data/edit_form/single_group.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/enter_data/edit_form/multy_group.tsx
import { useTranslation as useTranslation14 } from "react-i18next";
import { Fragment as Fragment2, jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
function MultyGroup({
  state,
  dictionaries,
  group,
  setGroup,
  doc,
  setDoc,
  setRecordIndex
}) {
  let { i18n, t } = useTranslation14(), handleCreate = (e) => {
    e.preventDefault(), setRecordIndex(-1), setGroup(group);
  }, handleDelete = (e, recordIndex) => {
    if (e.preventDefault(), confirm(
      t("confirm_delete")
    )) {
      let d = { ...doc }, tbl = `tbl_${group?.id}`;
      d[tbl].splice([recordIndex], 1), setDoc(d);
    }
  }, handleEdit = (e, recordIndex) => {
    e.preventDefault(), setRecordIndex(recordIndex), setGroup(group);
  }, isEdit = ["edit", "create"].includes(String(state));
  return /* @__PURE__ */ jsxDEV28("div", { className: "border p-1 flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxDEV28("div", { className: "mt-2", children: state === "create" || state === "edit" ? /* @__PURE__ */ jsxDEV28(
      CustomButton,
      {
        className: "bg-primary hover:shadow-primary_shadow",
        onClick: handleCreate,
        children: [
          /* @__PURE__ */ jsxDEV28("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV28("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
            fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
            lineNumber: 60,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
            lineNumber: 59,
            columnNumber: 25
          }, this),
          t("add")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
        lineNumber: 55,
        columnNumber: 23
      },
      this
    ) : null }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV28(
      "table",
      {
        className: "border border-blue-gray-700 w-fit",
        children: [
          /* @__PURE__ */ jsxDEV28(
            "thead",
            {
              className: "bg-primary text-white text-center",
              children: /* @__PURE__ */ jsxDEV28("tr", { children: [
                /* @__PURE__ */ jsxDEV28("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                  lineNumber: 73,
                  columnNumber: 25
                }, this),
                group?.fields && group.fields.map((fld) => /* @__PURE__ */ jsxDEV28("th", { className: "p-1 text-sm border border-blue-gray-700", children: fld[`title_${i18n.language}`] }, fld.id, !1, {
                  fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                  lineNumber: 75,
                  columnNumber: 29
                }, this)),
                isEdit ? /* @__PURE__ */ jsxDEV28(Fragment2, { children: [
                  /* @__PURE__ */ jsxDEV28("th", { className: "p-1 text-sm border border-blue-gray-700" }, void 0, !1, {
                    fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                    lineNumber: 81,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV28("th", { className: "p-1 text-sm border border-blue-gray-700" }, void 0, !1, {
                    fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                    lineNumber: 82,
                    columnNumber: 33
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                  lineNumber: 80,
                  columnNumber: 31
                }, this) : null
              ] }, void 0, !0, {
                fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                lineNumber: 72,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
              lineNumber: 69,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV28("tbody", { children: doc[`tbl_${group?.id}`].map((record, index) => /* @__PURE__ */ jsxDEV28("tr", { children: [
            /* @__PURE__ */ jsxDEV28("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, !1, {
              fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
              lineNumber: 90,
              columnNumber: 29
            }, this),
            group?.fields && group.fields.map((fld) => {
              let val = doc[`tbl_${group.id}`][index][`f${fld.id}`];
              if (fld.fieldType === "DICT") {
                let dic = dictionaries.find((item) => item.id === fld.dicId);
                if (dic) {
                  let dicVal = dic.data_browse.find((item) => item.id === Number(val));
                  dicVal && (val = dicVal[`title_${i18n.language}`]);
                }
              }
              return /* @__PURE__ */ jsxDEV28("td", { className: "p-1 text-sm border border-blue-gray-700", children: fld.fieldType === "FILE" ? val instanceof File ? val.name : /* @__PURE__ */ jsxDEV28("a", { className: "text-primary underline", href: val, children: val }, void 0, !1, {
                fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                lineNumber: 107,
                columnNumber: 51
              }, this) : val }, fld.id, !1, {
                fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                lineNumber: 103,
                columnNumber: 37
              }, this);
            }),
            isEdit ? /* @__PURE__ */ jsxDEV28(Fragment2, { children: [
              /* @__PURE__ */ jsxDEV28("td", { className: "p-1 text-sm border border-blue-gray-700 w-10", children: /* @__PURE__ */ jsxDEV28(
                CustomButton,
                {
                  className: "bg-primary hover:shadow-primary_shadow",
                  onClick: (e) => handleEdit(e, index),
                  children: /* @__PURE__ */ jsxDEV28("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV28("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" }, void 0, !1, {
                    fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                    lineNumber: 122,
                    columnNumber: 49
                  }, this) }, void 0, !1, {
                    fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                    lineNumber: 121,
                    columnNumber: 45
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                  lineNumber: 117,
                  columnNumber: 41
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                lineNumber: 116,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ jsxDEV28("td", { className: "p-1 text-sm border border-blue-gray-700 w-10", children: /* @__PURE__ */ jsxDEV28(
                CustomButton,
                {
                  className: "bg-danger hover:shadow-danger_shadow",
                  onClick: (e) => handleDelete(e, index),
                  children: /* @__PURE__ */ jsxDEV28("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV28("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }, void 0, !1, {
                    fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                    lineNumber: 132,
                    columnNumber: 49
                  }, this) }, void 0, !1, {
                    fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                    lineNumber: 131,
                    columnNumber: 45
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                  lineNumber: 127,
                  columnNumber: 41
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
                lineNumber: 126,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
              lineNumber: 115,
              columnNumber: 35
            }, this) : null
          ] }, index, !0, {
            fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
            lineNumber: 89,
            columnNumber: 25
          }, this)) }, void 0, !1, {
            fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
            lineNumber: 87,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
        lineNumber: 66,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/enter_data/edit_form/edit_form.tsx
import { useTranslation as useTranslation15 } from "react-i18next";
import { jsxDEV as jsxDEV29 } from "react/jsx-dev-runtime";
function EditForm({
  formRef,
  userId,
  inputForm,
  state,
  dictionaries,
  setGroup,
  doc,
  setDoc,
  setRecordIndex
}) {
  let { i18n } = useTranslation15(), location = useLocation(), submit = useSubmit3();
  return /* @__PURE__ */ jsxDEV29("div", { children: /* @__PURE__ */ jsxDEV29(
    "form",
    {
      id: "documentForm",
      method: "post",
      ref: formRef,
      onSubmit: (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        formData.append("_action", e.nativeEvent.submitter.value), inputForm?.groups.forEach(
          (group) => {
            let tableName = `tbl_${group.id}`;
            if (formData.append(`${tableName}__count`, doc[tableName].length), group.isMulty)
              for (let i = 0; i < doc[tableName].length; i++)
                group.fields.forEach((fld) => {
                  let fieldName = `f${fld.id}`, r = `${tableName}__${fieldName}__${i}`;
                  formData.append(r, doc[tableName][i][fieldName]);
                });
            else
              formData.append(`${tableName}__id`, doc[tableName][0].id);
          }
        ), console.log(Object.fromEntries(formData)), submit(formData, {
          method: "post",
          encType: "multipart/form-data"
        });
      },
      children: [
        /* @__PURE__ */ jsxDEV29("input", { type: "hidden", name: "_user", value: userId }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV29("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
          lineNumber: 71,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV29("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this),
        inputForm?.groups && inputForm.groups.map((group) => {
          let groupTitle = group[`title_${i18n.language}`];
          return /* @__PURE__ */ jsxDEV29("div", { className: "mb-2", children: [
            /* @__PURE__ */ jsxDEV29("h2", { className: "col-span-3 bg-primary text-white font-bold text-sm p-1 pl-4", children: groupTitle }, void 0, !1, {
              fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
              lineNumber: 77,
              columnNumber: 29
            }, this),
            group.isMulty ? /* @__PURE__ */ jsxDEV29(
              MultyGroup,
              {
                state,
                dictionaries,
                group,
                setGroup,
                doc,
                setDoc,
                setRecordIndex
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
                lineNumber: 88,
                columnNumber: 35
              },
              this
            ) : /* @__PURE__ */ jsxDEV29(
              SingleGroup,
              {
                state,
                dictionaries,
                group,
                doc,
                setDoc
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
                lineNumber: 81,
                columnNumber: 35
              },
              this
            )
          ] }, group.id, !0, {
            fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
            lineNumber: 76,
            columnNumber: 25
          }, this);
        })
      ]
    },
    location.key,
    !0,
    {
      fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
      lineNumber: 63,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
    lineNumber: 62,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/enter_data/dlg_multy_group.tsx
import MaterialTailwind4 from "@material-tailwind/react";
import { useTranslation as useTranslation16 } from "react-i18next";
import { Fragment as Fragment3, jsxDEV as jsxDEV30 } from "react/jsx-dev-runtime";
var { Dialog: Dialog3, Card: Card3, CardBody: CardBody3, CardFooter: CardFooter3 } = MaterialTailwind4;
function DialogMultyGroup({
  state,
  group,
  setGroup,
  dictionaries,
  doc,
  setDoc,
  recordIndex
}) {
  let { i18n, t } = useTranslation16(), handleClose = (e) => {
    e.preventDefault(), setGroup(null);
  };
  return /* @__PURE__ */ jsxDEV30(
    Dialog3,
    {
      placeholder: "",
      size: "lg",
      open: !!group,
      handler: () => setGroup(null),
      className: "bg-transparent shadow-none",
      children: /* @__PURE__ */ jsxDEV30(Card3, { className: "mx-auto w-full", placeholder: "", children: [
        /* @__PURE__ */ jsxDEV30(CardBody3, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: /* @__PURE__ */ jsxDEV30(
          "form",
          {
            id: "groupForm",
            method: "post",
            onSubmit: (e) => {
              if (e.preventDefault(), group) {
                let formData = new FormData(e.currentTarget), values = Object.fromEntries(formData);
                group.fields.forEach((fld) => {
                  console.log(formData.get(`f${fld.id}`));
                });
                let d = { ...doc };
                recordIndex >= 0 ? d[`tbl_${group.id}`][recordIndex] = { ...values } : d[`tbl_${group.id}`].push({ ...values }), setDoc(d), setGroup(null);
              }
            },
            children: group?.fields ? group.fields.map((fld) => {
              let cls = `col-span-${fld.colSpan} col-start-${fld.colStart}`, fieldName = `f${fld.id}`, fieldTitle = fld[`title_${i18n.language}`], fieldLen = fld.len ? fld.len : 30, fieldRequired = fld.isRequire && state === "edit", fieldDisabled = !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state)), tableName = `tbl_${fld.groupId}`, val = "";
              return recordIndex >= 0 && doc[tableName].length && (val = doc[tableName][recordIndex][fieldName]), /* @__PURE__ */ jsxDEV30(
                Field,
                {
                  cls,
                  state,
                  dictionaries,
                  fieldName,
                  fieldType: fld.fieldType,
                  fieldTitle,
                  fieldLen,
                  fieldRequired,
                  fieldDisabled,
                  fieldDict: fld.dicId,
                  defaultVal: val
                },
                fld.id,
                !1,
                {
                  fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
                  lineNumber: 83,
                  columnNumber: 33
                },
                this
              );
            }) : /* @__PURE__ */ jsxDEV30(Fragment3, { children: "-" }, void 0, !1, {
              fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
              lineNumber: 98,
              columnNumber: 30
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
            lineNumber: 64,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
          lineNumber: 63,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV30(CardFooter3, { className: "pt-0 flex flex-row gap-3 justify-center", placeholder: "", children: [
          /* @__PURE__ */ jsxDEV30(
            CustomButton,
            {
              className: "bg-primary hover:shadow-primary_shadow",
              form: "groupForm",
              type: "submit",
              children: t("save")
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
              lineNumber: 102,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV30(
            CustomButton,
            {
              className: "bg-primary hover:shadow-primary_shadow",
              onClick: handleClose,
              children: t("close")
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
              lineNumber: 109,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
          lineNumber: 101,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
      lineNumber: 55,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/enter_data/view.tsx
import { jsxDEV as jsxDEV31 } from "react/jsx-dev-runtime";
function EnterDataView({
  errors,
  open,
  setOpen,
  docs,
  userId,
  current,
  setCurrent,
  formRef,
  inputForm,
  state,
  dictionaries,
  doc,
  setDoc
}) {
  let [group, setGroup] = useState4(null), [recordIndex, setRecordIndex] = useState4(0);
  return /* @__PURE__ */ jsxDEV31("div", { className: "h-[calc(100vh-5rem)] flex flex-col gap-3 pb-5", children: [
    /* @__PURE__ */ jsxDEV31(ErrorMessage, { errors }, void 0, !1, {
      fileName: "app/components/UI/widgets/enter_data/view.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV31(
      DialogFindResult,
      {
        open,
        setOpen,
        docs
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/enter_data/view.tsx",
        lineNumber: 48,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV31(
      DialogMultyGroup,
      {
        state,
        group,
        setGroup,
        dictionaries,
        doc,
        setDoc,
        recordIndex
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/enter_data/view.tsx",
        lineNumber: 53,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV31(Panel, { className: "h-full overflow-auto", children: [
      /* @__PURE__ */ jsxDEV31("div", { className: "py-2 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxDEV31(Buttons2, { userId, inputFormId: inputForm.id, doc, state }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/view.tsx",
          lineNumber: 64,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV31(RecNavigator, { docs, current, setCurrent }, void 0, !1, {
          fileName: "app/components/UI/widgets/enter_data/view.tsx",
          lineNumber: 65,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/enter_data/view.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV31(
        EditForm,
        {
          formRef,
          userId,
          inputForm,
          state,
          dictionaries,
          setGroup,
          doc,
          setDoc,
          setRecordIndex
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/enter_data/view.tsx",
          lineNumber: 67,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/enter_data/view.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/enter_data/view.tsx",
    lineNumber: 46,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard.enter_data.$formId.tsx
import { jsxDEV as jsxDEV32 } from "react/jsx-dev-runtime";
async function loader3({
  request,
  params
}) {
  let url = new URL(request.url), state = url.searchParams.get("state"), docId = url.searchParams.get("docId"), inputForm = await api_default.db.getInputForm(Number(params.formId)), doc = await api_default.doc.getDoc(docId ? Number(docId) : null, inputForm);
  return json3({ inputForm, doc, state });
}
async function action2({
  request
}) {
  let ok = !1, errors = "", docs = null, deletedDocId = null, uploadHandler = unstable_composeUploadHandlers(
    unstable_createFileUploadHandler({
      directory: `${process.cwd()}/public/uploads`,
      file: ({ filename }) => filename,
      maxPartSize: 5e7
    }),
    unstable_createMemoryUploadHandler()
  ), formData = await unstable_parseMultipartFormData(request, uploadHandler), {
    _action,
    _user,
    _inputFormId,
    _id,
    ...values
  } = Object.fromEntries(formData);
  switch (_action) {
    case "saveDocument": {
      try {
        let inputForm = await api_default.db.getInputForm(Number(_inputFormId));
        return _id ? (await api_default.doc.updateDoc(Number(_user), inputForm, formData, Number(_id)), redirect(`/dashboard/enter_data/${_inputFormId}?docId=${_id}`)) : (await api_default.doc.createDoc(Number(_user), inputForm, formData), redirect(`/dashboard/enter_data/${_inputFormId}`));
      } catch (e) {
        if (e instanceof Prisma2.PrismaClientKnownRequestError)
          errors = e.message;
        else
          throw e;
      }
      break;
    }
    case "findDocument": {
      try {
        let inputForm = await api_default.db.getInputForm(Number(_inputFormId)), results = await api_default.doc.findDoc(inputForm, formData);
        results.length > 100 ? errors = "Find records more 100" : (docs = {
          formId: inputForm.id,
          ids: results.map((item) => item.id)
        }, ok = !0);
      } catch (e) {
        if (e instanceof Prisma2.PrismaClientKnownRequestError)
          errors = e.message;
        else
          throw e;
      }
      break;
    }
    case "deleteDocument": {
      try {
        _id && (await api_default.doc.deleteDoc(Number(_id)), deletedDocId = Number(_id), ok = !0);
      } catch (e) {
        if (e instanceof Prisma2.PrismaClientKnownRequestError)
          errors = e.message;
        else
          throw e;
      }
      break;
    }
  }
  return json3({ errors, docs, deletedDocId, ok });
}
function EnterData() {
  let { dictionaries, docs, setDocs, current, setCurrent } = useOutletContext2(), { inputForm, doc, state } = useLoaderData3(), [document2, setDocument] = useState5(doc), navigation = useNavigation(), formRef = useRef(null), userId = 1, data = useActionData2(), [showFind, setShowFind] = useState5(!1);
  return useEffect2(() => {
    formRef.current?.reset(), setDocument(doc);
  }, [doc]), useEffect2(() => {
    data?.docs && data?.ok && (setDocs(data.docs), setShowFind(!0)), navigation.state === "idle" && data?.ok && formRef.current?.reset(), data?.deletedDocId && data?.ok && setDocs((prev) => ({ formId: prev.formId, ids: prev.ids?.filter((item) => item !== data.deletedDocId) }));
  }, [data]), /* @__PURE__ */ jsxDEV32(
    EnterDataView,
    {
      errors: data?.errors,
      open: showFind,
      setOpen: setShowFind,
      docs,
      userId,
      current,
      setCurrent,
      formRef,
      inputForm,
      state,
      dictionaries,
      doc: document2,
      setDoc: setDocument
    },
    void 0,
    !1,
    {
      fileName: "app/routes/dashboard.enter_data.$formId.tsx",
      lineNumber: 136,
      columnNumber: 9
    },
    this
  );
}

// app/routes/dashboard.dictionaries.tsx
var dashboard_dictionaries_exports = {};
__export(dashboard_dictionaries_exports, {
  action: () => action3,
  default: () => Dictionaries,
  loader: () => loader4
});
import { Prisma as Prisma3 } from "@prisma/client";
import { json as json4, redirect as redirect2 } from "@remix-run/node";
import { useActionData as useActionData3, useLoaderData as useLoaderData4, useOutletContext as useOutletContext3 } from "@remix-run/react";

// app/components/UI/widgets/dictionaries/buttons/btn_add_value.tsx
import { Form as Form3 } from "@remix-run/react";
import { useTranslation as useTranslation17 } from "react-i18next";
import { jsxDEV as jsxDEV33 } from "react/jsx-dev-runtime";
function ButtonAddDictValue({ dictionary }) {
  let { t } = useTranslation17();
  return /* @__PURE__ */ jsxDEV33(Form3, { method: "post", children: /* @__PURE__ */ jsxDEV33(
    CustomButton,
    {
      className: "bg-primary hover:shadow-primary_shadow",
      type: "submit",
      name: "_action",
      value: "addDictVal",
      children: [
        /* @__PURE__ */ jsxDEV33("input", { type: "hidden", name: "dictId", value: dictionary.id }, void 0, !1, {
          fileName: "app/components/UI/widgets/dictionaries/buttons/btn_add_value.tsx",
          lineNumber: 21,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV33("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV33("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
          fileName: "app/components/UI/widgets/dictionaries/buttons/btn_add_value.tsx",
          lineNumber: 23,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/dictionaries/buttons/btn_add_value.tsx",
          lineNumber: 22,
          columnNumber: 17
        }, this),
        t("add")
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/dictionaries/buttons/btn_add_value.tsx",
      lineNumber: 15,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/UI/widgets/dictionaries/buttons/btn_add_value.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/dictionaries/buttons/buttons.tsx
import { jsxDEV as jsxDEV34 } from "react/jsx-dev-runtime";
function Buttons3({ dictionary }) {
  return /* @__PURE__ */ jsxDEV34("div", { className: "mb-2 flex justify-end items-center py-2 px-2 border", children: /* @__PURE__ */ jsxDEV34(ButtonAddDictValue, { dictionary }, void 0, !1, {
    fileName: "app/components/UI/widgets/dictionaries/buttons/buttons.tsx",
    lineNumber: 12,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/UI/widgets/dictionaries/buttons/buttons.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx
import { useNavigate as useNavigate7 } from "@remix-run/react";
import { useTranslation as useTranslation18 } from "react-i18next";
import { jsxDEV as jsxDEV35 } from "react/jsx-dev-runtime";
function DictionariesTable({
  dictionaries,
  dictionary
}) {
  let { i18n, t } = useTranslation18(), navigate = useNavigate7();
  return /* @__PURE__ */ jsxDEV35(
    "table",
    {
      className: "w-full",
      children: [
        /* @__PURE__ */ jsxDEV35(
          "thead",
          {
            className: "bg-primary text-white text-center",
            children: /* @__PURE__ */ jsxDEV35("tr", { children: [
              /* @__PURE__ */ jsxDEV35("th", { className: "p-1 text-sm border border-blue-gray-500", children: "#" }, void 0, !1, {
                fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
                lineNumber: 25,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV35("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("title") }, void 0, !1, {
                fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
                lineNumber: 26,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
              lineNumber: 24,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
            lineNumber: 21,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV35("tbody", { children: dictionaries && dictionaries.map((dic, index) => /* @__PURE__ */ jsxDEV35(
          "tr",
          {
            className: dic?.id === dictionary.id ? "bg-selected hover:cursor-pointer" : " hover:cursor-pointer",
            onClick: () => navigate(`/dashboard/dictionaries?current_dic=${dic.id}`),
            children: [
              /* @__PURE__ */ jsxDEV35("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: index + 1 }, void 0, !1, {
                fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
                lineNumber: 36,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV35("td", { className: "p-1 text-sm border border-blue-gray-500", children: dic[`title_${i18n.language}`] }, void 0, !1, {
                fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
                lineNumber: 37,
                columnNumber: 25
              }, this)
            ]
          },
          dic.id,
          !0,
          {
            fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
            lineNumber: 31,
            columnNumber: 21
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
      lineNumber: 18,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/dictionaries/tbl_dic_values.tsx
import { Form as Form5 } from "@remix-run/react";
import { useTranslation as useTranslation20 } from "react-i18next";

// app/components/UI/widgets/dictionaries/buttons/btn_delete_value.tsx
import { Form as Form4 } from "@remix-run/react";
import { useTranslation as useTranslation19 } from "react-i18next";
import { jsxDEV as jsxDEV36 } from "react/jsx-dev-runtime";
function ButtonDeleteDictValue({ dictId, id }) {
  let { t } = useTranslation19();
  return /* @__PURE__ */ jsxDEV36(Form4, { method: "post", children: [
    /* @__PURE__ */ jsxDEV36("input", { type: "hidden", name: "id", defaultValue: id }, void 0, !1, {
      fileName: "app/components/UI/widgets/dictionaries/buttons/btn_delete_value.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV36("input", { type: "hidden", name: "dictId", defaultValue: dictId }, void 0, !1, {
      fileName: "app/components/UI/widgets/dictionaries/buttons/btn_delete_value.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV36(
      CustomButton,
      {
        className: "bg-danger hover:shadow-danger_shadow",
        onClick: async (event) => {
          confirm(
            t("confirm_delete")
          ) || event.preventDefault();
        },
        type: "submit",
        name: "_action",
        value: "deleteDictVal",
        children: /* @__PURE__ */ jsxDEV36("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV36("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }, void 0, !1, {
          fileName: "app/components/UI/widgets/dictionaries/buttons/btn_delete_value.tsx",
          lineNumber: 34,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/dictionaries/buttons/btn_delete_value.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/dictionaries/buttons/btn_delete_value.tsx",
        lineNumber: 26,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/dictionaries/buttons/btn_delete_value.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/dictionaries/tbl_dic_values.tsx
import { jsxDEV as jsxDEV37 } from "react/jsx-dev-runtime";
function DicValuesTable({
  dictionary,
  dictValues
}) {
  let { t } = useTranslation20();
  return /* @__PURE__ */ jsxDEV37("div", { children: [
    dictValues && dictValues.map((item) => /* @__PURE__ */ jsxDEV37(
      Form5,
      {
        method: "post",
        className: "hidden",
        id: `updateDictValForm_${item.id}`,
        children: [
          /* @__PURE__ */ jsxDEV37("input", { type: "hidden", name: "dictId", defaultValue: dictionary.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
            lineNumber: 26,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV37("input", { type: "hidden", name: "id", defaultValue: item.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
            lineNumber: 27,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV37(
            "input",
            {
              id: `updateDictValButton_${item.id}`,
              type: "submit",
              name: "_action",
              value: "updateDictVal"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
              lineNumber: 28,
              columnNumber: 21
            },
            this
          )
        ]
      },
      item.id,
      !0,
      {
        fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
        lineNumber: 20,
        columnNumber: 17
      },
      this
    )),
    /* @__PURE__ */ jsxDEV37(
      "table",
      {
        className: "w-full",
        children: [
          /* @__PURE__ */ jsxDEV37(
            "thead",
            {
              className: "bg-primary text-white text-center",
              children: /* @__PURE__ */ jsxDEV37("tr", { children: [
                /* @__PURE__ */ jsxDEV37("th", { className: "p-1 text-sm border border-blue-gray-500", children: "ID" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
                  lineNumber: 43,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV37("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("title_kk") }, void 0, !1, {
                  fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
                  lineNumber: 44,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV37("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("title_ru") }, void 0, !1, {
                  fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
                  lineNumber: 45,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV37("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("is_enable") }, void 0, !1, {
                  fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
                  lineNumber: 46,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV37("th", { className: "p-1 text-sm border border-blue-gray-500" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
                  lineNumber: 47,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
                lineNumber: 42,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
              lineNumber: 39,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV37("tbody", { children: dictValues && dictValues.map((item) => /* @__PURE__ */ jsxDEV37("tr", { children: [
            /* @__PURE__ */ jsxDEV37("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: item.id }, void 0, !1, {
              fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
              lineNumber: 53,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV37("td", { className: "p-1 text-sm border border-blue-gray-500", children: /* @__PURE__ */ jsxDEV37(
              "input",
              {
                className: "text-sm w-full focus:outline-none p-1 text-black",
                form: `updateDictValForm_${item.id}`,
                type: "text",
                name: "title_kk",
                defaultValue: item.title_kk,
                maxLength: 45,
                onChange: () => {
                  document.getElementById(`updateDictValButton_${item.id}`).click();
                }
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
                lineNumber: 55,
                columnNumber: 33
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
              lineNumber: 54,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV37("td", { className: "p-1 text-sm border border-blue-gray-500", children: /* @__PURE__ */ jsxDEV37(
              "input",
              {
                className: "text-sm w-full focus:outline-none p-1 text-black",
                form: `updateDictValForm_${item.id}`,
                type: "text",
                name: "title_ru",
                defaultValue: item.title_ru,
                maxLength: 45,
                onChange: () => {
                  document.getElementById(`updateDictValButton_${item.id}`).click();
                }
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
                lineNumber: 69,
                columnNumber: 33
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
              lineNumber: 68,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV37("td", { className: "p-1 text-sm border border-blue-gray-500", children: /* @__PURE__ */ jsxDEV37(
              "input",
              {
                className: "text-sm w-full focus:outline-none p-1 text-black",
                form: `updateDictValForm_${item.id}`,
                type: "checkbox",
                name: "is_enabled",
                defaultChecked: item.is_enabled,
                onChange: () => {
                  document.getElementById(`updateDictValButton_${item.id}`).click();
                }
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
                lineNumber: 83,
                columnNumber: 33
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
              lineNumber: 82,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV37("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: item.id && /* @__PURE__ */ jsxDEV37(ButtonDeleteDictValue, { dictId: dictionary.id, id: item.id }, void 0, !1, {
              fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
              lineNumber: 96,
              columnNumber: 45
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
              lineNumber: 95,
              columnNumber: 29
            }, this)
          ] }, item.id, !0, {
            fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
            lineNumber: 52,
            columnNumber: 25
          }, this)) }, void 0, !1, {
            fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
        lineNumber: 36,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/dictionaries/view.tsx
import { jsxDEV as jsxDEV38 } from "react/jsx-dev-runtime";
function DictionariesView({
  errors,
  dictionaries,
  dictionary,
  dictValues
}) {
  return /* @__PURE__ */ jsxDEV38("div", { className: "mx-1 flex flex-col gap-3 h-[calc(100vh-5rem)]", children: [
    /* @__PURE__ */ jsxDEV38(ErrorMessage, { errors }, void 0, !1, {
      fileName: "app/components/UI/widgets/dictionaries/view.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV38(Panel, { className: "h-full overflow-auto", children: [
      /* @__PURE__ */ jsxDEV38(Buttons3, { dictionary }, void 0, !1, {
        fileName: "app/components/UI/widgets/dictionaries/view.tsx",
        lineNumber: 26,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV38("div", { className: "flex flex-row gap-10", children: [
        /* @__PURE__ */ jsxDEV38("div", { className: "w-1/3", children: /* @__PURE__ */ jsxDEV38(
          DictionariesTable,
          {
            dictionaries,
            dictionary
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/dictionaries/view.tsx",
            lineNumber: 29,
            columnNumber: 25
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/dictionaries/view.tsx",
          lineNumber: 28,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV38("div", { className: "w-2/3", children: /* @__PURE__ */ jsxDEV38(
          DicValuesTable,
          {
            dictionary,
            dictValues
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/dictionaries/view.tsx",
            lineNumber: 35,
            columnNumber: 25
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/dictionaries/view.tsx",
          lineNumber: 34,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/dictionaries/view.tsx",
        lineNumber: 27,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/dictionaries/view.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/dictionaries/view.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard.dictionaries.tsx
import { jsxDEV as jsxDEV39 } from "react/jsx-dev-runtime";
async function loader4({
  request
}) {
  let currentDicId = new URL(request.url).searchParams.get("current_dic"), dictionary = {}, dictValues = [];
  return currentDicId && (dictionary = await api_default.db.getDictionary(Number(currentDicId)), dictValues = await api_default.db.getDictValues(Number(currentDicId))), json4({ dictionary, dictValues });
}
async function action3({
  request
}) {
  let errors = null, formData = await request.formData(), { _action, ...values } = Object.fromEntries(formData);
  switch (_action) {
    case "addDictVal": {
      try {
        let dictId = Number(values.dictId), createDictVal = {
          title_kk: "Dict Value",
          title_ru: "Dict Value",
          is_enabled: !0
        };
        return await api_default.db.updateDictValue(dictId, createDictVal), redirect2(`/dashboard/dictionaries?current_dic=${dictId}`);
      } catch (e) {
        e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
      }
      break;
    }
    case "updateDictVal": {
      try {
        let dictId = Number(values.dictId), updateDictVal = {
          id: Number(values.id),
          title_kk: String(values.title_kk),
          title_ru: String(values.title_ru),
          is_enabled: Boolean(values.is_enabled)
        };
        return await api_default.db.updateDictValue(dictId, updateDictVal), redirect2(`/dashboard/dictionaries?current_dic=${dictId}`);
      } catch (e) {
        e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
      }
      break;
    }
    case "deleteDictVal": {
      try {
        let dictId = Number(values.dictId);
        return await api_default.db.deleteDictValue(dictId, Number(values.id)), redirect2(`/dashboard/dictionaries?current_dic=${dictId}`);
      } catch (e) {
        e instanceof Prisma3.PrismaClientKnownRequestError && (errors = e.message);
      }
      break;
    }
  }
  return json4({ errors });
}
function Dictionaries() {
  let { dictionaries } = useOutletContext3(), { dictionary, dictValues } = useLoaderData4(), data = useActionData3();
  return /* @__PURE__ */ jsxDEV39(
    DictionariesView,
    {
      errors: data?.errors ? data?.errors : void 0,
      dictionaries,
      dictionary,
      dictValues
    },
    void 0,
    !1,
    {
      fileName: "app/routes/dashboard.dictionaries.tsx",
      lineNumber: 87,
      columnNumber: 9
    },
    this
  );
}

// app/routes/dashboard.db_struct.tsx
var dashboard_db_struct_exports = {};
__export(dashboard_db_struct_exports, {
  action: () => action4,
  default: () => DbStruct,
  loader: () => loader5
});
import { Prisma as Prisma4 } from "@prisma/client";
import { json as json5, redirect as redirect3 } from "@remix-run/node";
import { useActionData as useActionData4, useLoaderData as useLoaderData5, useOutletContext as useOutletContext4 } from "@remix-run/react";
import invariant from "tiny-invariant";

// app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx
import { Form as Form6 } from "@remix-run/react";
import { useTranslation as useTranslation21 } from "react-i18next";
import { jsxDEV as jsxDEV40 } from "react/jsx-dev-runtime";
function ButtonAddDicionary({ count }) {
  let { t } = useTranslation21();
  return /* @__PURE__ */ jsxDEV40(Form6, { method: "post", children: [
    /* @__PURE__ */ jsxDEV40("input", { type: "hidden", name: "cnt", defaultValue: count + 1 }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV40(
      CustomButton,
      {
        className: "bg-primary hover:shadow-primary_shadow",
        type: "submit",
        name: "_action",
        value: "createEmptyDictionary",
        children: [
          /* @__PURE__ */ jsxDEV40("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV40("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx",
            lineNumber: 22,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx",
            lineNumber: 21,
            columnNumber: 17
          }, this),
          t("add_dictionary")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx",
        lineNumber: 15,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_dictionary.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx
import { Form as Form7 } from "@remix-run/react";
import { useTranslation as useTranslation22 } from "react-i18next";
import { jsxDEV as jsxDEV41 } from "react/jsx-dev-runtime";
function ButtonAddInputForm({ count }) {
  let { t } = useTranslation22();
  return /* @__PURE__ */ jsxDEV41(Form7, { method: "post", children: [
    /* @__PURE__ */ jsxDEV41("input", { type: "hidden", name: "cnt", defaultValue: count + 1 }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV41(
      CustomButton,
      {
        className: "bg-primary hover:shadow-primary_shadow",
        type: "submit",
        name: "_action",
        value: "createEmptyInputForm",
        children: [
          /* @__PURE__ */ jsxDEV41("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV41("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx",
            lineNumber: 22,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx",
            lineNumber: 21,
            columnNumber: 17
          }, this),
          t("add_inputform")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx",
        lineNumber: 15,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_inputform.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx
import { Form as Form8 } from "@remix-run/react";
import { useTranslation as useTranslation23 } from "react-i18next";
import { jsxDEV as jsxDEV42 } from "react/jsx-dev-runtime";
function ButtonAddSearchForm({ count }) {
  let { t } = useTranslation23();
  return /* @__PURE__ */ jsxDEV42(Form8, { method: "post", children: [
    /* @__PURE__ */ jsxDEV42("input", { type: "hidden", name: "cnt", defaultValue: count + 1 }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV42(
      CustomButton,
      {
        className: "bg-primary hover:shadow-primary_shadow",
        type: "submit",
        name: "_action",
        value: "createEmptySearchForm",
        children: [
          /* @__PURE__ */ jsxDEV42("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV42("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx",
            lineNumber: 22,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx",
            lineNumber: 21,
            columnNumber: 17
          }, this),
          t("add_searchform")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx",
        lineNumber: 15,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/buttons/btn_add_searchform.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx
import MaterialTailwind5 from "@material-tailwind/react";
import { Form as Form9, useFetcher } from "@remix-run/react";
import { useTranslation as useTranslation24 } from "react-i18next";
import { Fragment as Fragment4, jsxDEV as jsxDEV43 } from "react/jsx-dev-runtime";
var { Spinner } = MaterialTailwind5;
function ButtonRestructDb() {
  let { t } = useTranslation24(), isRestruct = useFetcher().state !== "idle";
  return /* @__PURE__ */ jsxDEV43(Form9, { method: "post", children: /* @__PURE__ */ jsxDEV43(
    CustomButton,
    {
      className: "bg-primary hover:shadow-primary_shadow",
      type: "submit",
      name: "_action",
      value: "generateStructDb",
      disabled: isRestruct,
      onClick: async (event) => {
        confirm(
          "Please confirm you want to restructure database."
        ) || event.preventDefault();
      },
      children: isRestruct ? /* @__PURE__ */ jsxDEV43(Fragment4, { children: [
        /* @__PURE__ */ jsxDEV43(Spinner, { className: "w-4 h-4" }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
          lineNumber: 32,
          columnNumber: 25
        }, this),
        t("restruct_db"),
        " ..."
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
        lineNumber: 31,
        columnNumber: 23
      }, this) : /* @__PURE__ */ jsxDEV43(Fragment4, { children: [
        /* @__PURE__ */ jsxDEV43("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV43("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
          lineNumber: 37,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
          lineNumber: 36,
          columnNumber: 25
        }, this),
        t("restruct_db")
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
        lineNumber: 35,
        columnNumber: 23
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
      lineNumber: 22,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/UI/widgets/db_struct/buttons/btn_restruct_db.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/buttons/buttons.tsx
import { jsxDEV as jsxDEV44 } from "react/jsx-dev-runtime";
function Buttons4({
  state,
  dictionaries_count,
  inputForms_count,
  searchForms_count
}) {
  return /* @__PURE__ */ jsxDEV44("div", { className: "mb-2 flex justify-between py-2 px-2 border", children: [
    /* @__PURE__ */ jsxDEV44("div", { className: "flex items-center gap-3", children: state === "dictionary" ? /* @__PURE__ */ jsxDEV44(ButtonAddDicionary, { count: dictionaries_count }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
      lineNumber: 23,
      columnNumber: 23
    }, this) : state === "inputForm" ? /* @__PURE__ */ jsxDEV44(ButtonAddInputForm, { count: inputForms_count }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
      lineNumber: 25,
      columnNumber: 27
    }, this) : state === "searchForm" ? /* @__PURE__ */ jsxDEV44(ButtonAddSearchForm, { count: searchForms_count }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
      lineNumber: 27,
      columnNumber: 31
    }, this) : null }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV44(ButtonRestructDb, {}, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/buttons/buttons.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/navigator.tsx
import { Link as Link2 } from "@remix-run/react";
import { useTranslation as useTranslation25 } from "react-i18next";
import { jsxDEV as jsxDEV45 } from "react/jsx-dev-runtime";
function DbStructNav({
  state,
  inputForms,
  searchForms,
  dictionaries,
  inputFormId,
  searchFormId,
  dictionaryId,
  groupId
}) {
  let { i18n, t } = useTranslation25();
  return /* @__PURE__ */ jsxDEV45("div", { className: "p-4 mr-5 w-1/4 border", children: /* @__PURE__ */ jsxDEV45("ul", { children: [
    /* @__PURE__ */ jsxDEV45(
      "li",
      {
        className: [
          "flex items-center gap-1 font-bold",
          state === "inputForm" && !inputFormId ? "bg-selected" : ""
        ].join(" "),
        children: [
          /* @__PURE__ */ jsxDEV45("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV45("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
            lineNumber: 36,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
            lineNumber: 35,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV45(
            Link2,
            {
              to: "/dashboard/db_struct?state=inputForm&inputFormId=0",
              children: t("inputforms")
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
              lineNumber: 38,
              columnNumber: 21
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 31,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ jsxDEV45("ul", { children: inputForms.map((form) => {
      let formTitle = `${form.pos}. ${form[`title_${i18n.language}`]}`;
      return /* @__PURE__ */ jsxDEV45("div", { children: [
        /* @__PURE__ */ jsxDEV45(
          Link2,
          {
            to: `/dashboard/db_struct?state=inputForm&inputFormId=${form.id}`,
            children: /* @__PURE__ */ jsxDEV45(
              "li",
              {
                className: [
                  "pl-4 flex items-center gap-1 hover:cursor-pointer",
                  state === "inputForm" && form.id === inputFormId ? "bg-selected" : ""
                ].join(" "),
                children: [
                  /* @__PURE__ */ jsxDEV45("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV45("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
                    fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                    lineNumber: 57,
                    columnNumber: 45
                  }, this) }, void 0, !1, {
                    fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                    lineNumber: 56,
                    columnNumber: 41
                  }, this),
                  formTitle
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                lineNumber: 52,
                columnNumber: 37
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
            lineNumber: 49,
            columnNumber: 33
          },
          this
        ),
        /* @__PURE__ */ jsxDEV45("ul", { children: form.groups.map((gr) => {
          let groupTitle = `${gr.pos}. ${gr[`title_${i18n.language}`]}`;
          return /* @__PURE__ */ jsxDEV45(
            Link2,
            {
              to: `/dashboard/db_struct?state=group&inputFormId=${gr.inputFormId}&groupId=${gr.id}`,
              children: /* @__PURE__ */ jsxDEV45(
                "li",
                {
                  className: [
                    "pl-8 flex items-center gap-1 hover:cursor-pointer",
                    state === "group" && gr.id === groupId ? "bg-selected" : ""
                  ].join(" "),
                  children: [
                    /* @__PURE__ */ jsxDEV45("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV45("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
                      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                      lineNumber: 75,
                      columnNumber: 57
                    }, this) }, void 0, !1, {
                      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                      lineNumber: 74,
                      columnNumber: 53
                    }, this),
                    groupTitle
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                  lineNumber: 70,
                  columnNumber: 49
                },
                this
              )
            },
            gr.id,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
              lineNumber: 66,
              columnNumber: 45
            },
            this
          );
        }) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
          lineNumber: 62,
          columnNumber: 33
        }, this)
      ] }, form.id, !0, {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 48,
        columnNumber: 29
      }, this);
    }) }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 44,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV45(
      "li",
      {
        className: [
          "flex items-center gap-1 font-bold",
          state === "searchForm" && !searchFormId ? "bg-selected" : ""
        ].join(" "),
        children: [
          /* @__PURE__ */ jsxDEV45("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV45("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
            lineNumber: 92,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
            lineNumber: 91,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV45(
            Link2,
            {
              to: "/dashboard/db_struct?state=searchForm&searchFormId=0",
              children: t("searchforms")
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
              lineNumber: 94,
              columnNumber: 21
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 87,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ jsxDEV45("ul", { children: searchForms.map((form) => {
      let formTitle = `${form.pos}. ${form[`title_${i18n.language}`]}`;
      return /* @__PURE__ */ jsxDEV45(
        Link2,
        {
          to: `/dashboard/db_struct?state=searchForm&searchFormId=${form.id}`,
          children: /* @__PURE__ */ jsxDEV45(
            "li",
            {
              className: [
                "pl-4 flex items-center gap-1 hover:cursor-pointer",
                state === "searchForm" && form.id === searchFormId ? "bg-selected" : ""
              ].join(" "),
              children: [
                /* @__PURE__ */ jsxDEV45("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV45("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                  lineNumber: 113,
                  columnNumber: 41
                }, this) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                  lineNumber: 112,
                  columnNumber: 37
                }, this),
                formTitle
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
              lineNumber: 108,
              columnNumber: 33
            },
            this
          )
        },
        form.id,
        !1,
        {
          fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
          lineNumber: 104,
          columnNumber: 29
        },
        this
      );
    }) }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 100,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV45(
      "li",
      {
        className: [
          "flex items-center gap-1 font-bold",
          state === "dictionary" && !dictionaryId ? "bg-selected" : ""
        ].join(" "),
        children: [
          /* @__PURE__ */ jsxDEV45("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV45("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
            lineNumber: 126,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
            lineNumber: 125,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV45(
            Link2,
            {
              to: "/dashboard/db_struct?state=dictionary&dictionaryId=0",
              children: t("dictionaries")
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
              lineNumber: 128,
              columnNumber: 21
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
        lineNumber: 121,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ jsxDEV45("ul", { children: dictionaries.map((dict) => {
      let dicTitle = dict[`title_${i18n.language}`];
      return /* @__PURE__ */ jsxDEV45(
        Link2,
        {
          to: `/dashboard/db_struct?state=dictionary&dictionaryId=${dict.id}`,
          children: /* @__PURE__ */ jsxDEV45(
            "li",
            {
              className: [
                "pl-4 flex items-center gap-1 hover:cursor-pointer",
                state === "dictionary" && dict.id === dictionaryId ? "bg-selected" : ""
              ].join(" "),
              children: [
                /* @__PURE__ */ jsxDEV45("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV45("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                  lineNumber: 147,
                  columnNumber: 41
                }, this) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
                  lineNumber: 146,
                  columnNumber: 37
                }, this),
                dicTitle
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
              lineNumber: 142,
              columnNumber: 33
            },
            this
          )
        },
        dict.id,
        !1,
        {
          fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
          lineNumber: 138,
          columnNumber: 29
        },
        this
      );
    }) }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
      lineNumber: 134,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
    lineNumber: 30,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/UI/widgets/db_struct/navigator.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/forms/form_dict.tsx
import { Form as Form10 } from "@remix-run/react";
import { useTranslation as useTranslation26 } from "react-i18next";
import { Fragment as Fragment5, jsxDEV as jsxDEV46 } from "react/jsx-dev-runtime";
function DictionaryForm({ dictionary }) {
  let { i18n, t } = useTranslation26(), handleDelete = async (event) => {
    confirm(
      t("confirm_delete")
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV46(Fragment5, { children: [
    /* @__PURE__ */ jsxDEV46("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV46(
        CustomButton,
        {
          className: "hidden",
          id: "updateDictionaryButton",
          form: "updateDictionary",
          type: "submit",
          name: "_action",
          value: "updateDictionary",
          children: [
            /* @__PURE__ */ jsxDEV46("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV46("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
              lineNumber: 33,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
              lineNumber: 32,
              columnNumber: 21
            }, this),
            t("save")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
          lineNumber: 24,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV46(Form10, { method: "post", children: [
        /* @__PURE__ */ jsxDEV46("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
          lineNumber: 38,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV46(
          CustomButton,
          {
            className: "bg-red-500 hover:shadow-red-100",
            onClick: handleDelete,
            type: "submit",
            name: "_action",
            value: "deleteDictionary",
            children: [
              /* @__PURE__ */ jsxDEV46("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV46("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
                fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
                lineNumber: 47,
                columnNumber: 29
              }, this) }, void 0, !1, {
                fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
                lineNumber: 46,
                columnNumber: 25
              }, this),
              t("delete")
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
            lineNumber: 39,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV46(
      Form10,
      {
        id: "updateDictionary",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV46("input", { type: "hidden", name: "id", defaultValue: dictionary.id ? dictionary.id : "" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
            lineNumber: 59,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV46(
            CustomInput,
            {
              id: dictionary.id,
              title: t("title_kk"),
              type: "text",
              defaultValue: dictionary?.title_kk,
              name: "title_kk",
              required: !0,
              onChange: () => {
                document.getElementById("updateDictionaryButton").click();
              },
              size: 100
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
              lineNumber: 60,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV46(
            CustomInput,
            {
              id: dictionary.id,
              title: t("title_ru"),
              type: "text",
              defaultValue: dictionary?.title_ru,
              name: "title_ru",
              required: !0,
              onChange: () => {
                document.getElementById("updateDictionaryButton").click();
              },
              size: 100
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
              lineNumber: 73,
              columnNumber: 17
            },
            this
          )
        ]
      },
      dictionary?.id,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
        lineNumber: 53,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/forms/form_dict.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/forms/form_group.tsx
import { Form as Form11, useNavigate as useNavigate8 } from "@remix-run/react";
import { FieldType } from "@prisma/client";
import { useTranslation as useTranslation27 } from "react-i18next";
import { Fragment as Fragment6, jsxDEV as jsxDEV47 } from "react/jsx-dev-runtime";
function GroupForm({ group, dicts }) {
  let { i18n, t } = useTranslation27(), navigate = useNavigate8(), handleDelete = async (event) => {
    confirm(
      t("confirm_delete")
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV47(Fragment6, { children: [
    /* @__PURE__ */ jsxDEV47("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV47(
        CustomButton,
        {
          className: "bg-primary hover:shadow-primary_shadow",
          form: "addInputFieldForm",
          type: "submit",
          name: "_action",
          value: "createEmptyInputField",
          children: [
            /* @__PURE__ */ jsxDEV47("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV47("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 36,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 35,
              columnNumber: 21
            }, this),
            t("add_field")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 28,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV47(
        CustomButton,
        {
          className: "hidden",
          id: "updateGroupButton",
          color: "green",
          form: "updateGroupForm",
          type: "submit",
          name: "_action",
          value: "updateGroup",
          children: [
            /* @__PURE__ */ jsxDEV47("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV47("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 50,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 49,
              columnNumber: 21
            }, this),
            t("save")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 40,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV47(
        CustomButton,
        {
          className: "bg-danger hover:shadow-danger_shadow",
          form: "deleteGroupForm",
          type: "submit",
          name: "_action",
          value: "deleteGroup",
          children: [
            /* @__PURE__ */ jsxDEV47("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV47("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 62,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 61,
              columnNumber: 21
            }, this),
            t("delete")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 54,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV47(
      Form11,
      {
        id: "addInputFieldForm",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV47("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 71,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV47("input", { type: "hidden", name: "groupId", defaultValue: group.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 72,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV47("input", { type: "hidden", name: "cnt", defaultValue: group.fields.length + 1 }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 67,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV47(
      Form11,
      {
        id: "updateGroupForm",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV47("input", { type: "hidden", name: "id", defaultValue: group.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV47("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV47(
            CustomInput,
            {
              id: "group_pos",
              type: "number",
              name: "pos",
              title: t("pos"),
              defaultValue: group?.pos,
              required: !0,
              onChange: () => {
                document.getElementById("updateGroupButton").click();
              },
              subClass: "w-16"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 83,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV47(
            CustomInput,
            {
              id: "group_title_kk",
              type: "text",
              name: "title_kk",
              title: t("title_kk"),
              defaultValue: group?.title_kk,
              required: !0,
              onChange: () => {
                document.getElementById("updateGroupButton").click();
              },
              size: 100
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 96,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV47(
            CustomInput,
            {
              id: "group_title_ru",
              type: "text",
              name: "title_ru",
              title: t("title_ru"),
              defaultValue: group?.title_ru,
              required: !0,
              onChange: () => {
                document.getElementById("updateGroupButton").click();
              },
              size: 100
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 109,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV47(
            CustomInput,
            {
              id: "group_ismulty",
              type: "checkbox",
              name: "isMulty",
              title: t("is_multy"),
              checked: !!group?.isMulty,
              required: !1,
              onChange: () => {
                document.getElementById("updateGroupButton").click();
              }
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 122,
              columnNumber: 17
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 75,
        columnNumber: 13
      },
      this
    ),
    group?.fields && group.fields.map((field) => /* @__PURE__ */ jsxDEV47(
      Form11,
      {
        className: "hidden",
        id: `updateInputFieldForm_${field.id}`,
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV47("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 142,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV47("input", { type: "hidden", name: "groupId", defaultValue: field.groupId }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 143,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV47(
            CustomButton,
            {
              className: "bg-green-500 hover:shadow-green-100",
              id: `updateInputFieldButton_${field.id}`,
              form: `updateInputFieldForm_${field.id}`,
              type: "submit",
              name: "_action",
              value: "updateInputField",
              children: [
                /* @__PURE__ */ jsxDEV47("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV47("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
                  lineNumber: 153,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
                  lineNumber: 152,
                  columnNumber: 25
                }, this),
                t("save")
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 144,
              columnNumber: 21
            },
            this
          )
        ]
      },
      `updateInputFieldForm_${field.id}`,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 136,
        columnNumber: 17
      },
      this
    )),
    /* @__PURE__ */ jsxDEV47("div", { className: "overflow-x-auto mt-4", children: /* @__PURE__ */ jsxDEV47("table", { className: "w-full", children: [
      /* @__PURE__ */ jsxDEV47(
        "thead",
        {
          className: "bg-primary text-white text-center",
          children: /* @__PURE__ */ jsxDEV47("tr", { children: [
            /* @__PURE__ */ jsxDEV47("th", { className: "p-1 text-sm border", children: "#" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 165,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV47("th", { className: "p-1 text-sm border", children: "ID" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 166,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV47("th", { className: "p-1 text-sm border", children: "1" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 167,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV47("th", { className: "p-1 text-sm border", children: "2" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 168,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV47("th", { className: "p-1 text-sm border", children: "3" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 169,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV47("th", { className: "p-1 text-sm border", children: t("title_kk") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 170,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV47("th", { className: "p-1 text-sm border", children: t("title_ru") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 171,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV47("th", { className: "p-1 text-sm border", children: t("type_data") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 172,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV47("th", { className: "p-1 text-sm border", children: t("dictionary") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 173,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV47("th", { className: "p-1 text-sm border", children: t("len") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 174,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV47("th", { className: "p-1 text-sm border", children: t("precision") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 175,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV47("th", { className: "p-1 text-sm border", children: "4" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 176,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV47("th", { className: "p-1 text-sm border", children: "5" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 177,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV47("th", { className: "p-1 text-sm border", children: "6" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 178,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV47("th", { className: "p-1 text-sm border", children: "7" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 179,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV47("th", { className: "p-1 text-sm border", children: "8" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 180,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV47("th", { className: "p-1 text-sm border" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 181,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 164,
            columnNumber: 25
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 161,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ jsxDEV47("tbody", { className: "text-center", children: group?.fields && group.fields.map((field, index) => /* @__PURE__ */ jsxDEV47("tr", { children: [
        /* @__PURE__ */ jsxDEV47("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 187,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV47("td", { className: "p-1 text-sm border border-blue-gray-700", children: [
          "F",
          field.id
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 188,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV47("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV47(
          "input",
          {
            className: "text-sm w-full focus:outline-none",
            form: `updateInputFieldForm_${field.id}`,
            type: "number",
            name: "pos",
            defaultValue: field.pos,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 190,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 189,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV47("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV47(
          "input",
          {
            className: "text-sm w-full focus:outline-none",
            form: `updateInputFieldForm_${field.id}`,
            type: "number",
            name: "colSpan",
            min: 1,
            max: 3,
            defaultValue: field.colSpan,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 203,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 202,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV47("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV47(
          "input",
          {
            className: "text-sm w-full focus:outline-none",
            form: `updateInputFieldForm_${field.id}`,
            type: "number",
            name: "colStart",
            min: 1,
            max: 3,
            defaultValue: field.colStart,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 218,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 217,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV47(
          "td",
          {
            className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40",
            children: /* @__PURE__ */ jsxDEV47(
              "input",
              {
                className: "text-sm w-full focus:outline-none",
                form: `updateInputFieldForm_${field.id}`,
                type: "text",
                name: "title_kk",
                defaultValue: field.title_kk,
                maxLength: 23,
                onChange: () => {
                  document.getElementById(`updateInputFieldButton_${field.id}`).click();
                }
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
                lineNumber: 235,
                columnNumber: 37
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 232,
            columnNumber: 33
          },
          this
        ),
        /* @__PURE__ */ jsxDEV47(
          "td",
          {
            className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40",
            children: /* @__PURE__ */ jsxDEV47(
              "input",
              {
                className: "text-sm w-full focus:outline-none",
                form: `updateInputFieldForm_${field.id}`,
                type: "text",
                name: "title_ru",
                defaultValue: field.title_ru,
                maxLength: 23,
                onChange: () => {
                  document.getElementById(`updateInputFieldButton_${field.id}`).click();
                }
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
                lineNumber: 251,
                columnNumber: 37
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 248,
            columnNumber: 33
          },
          this
        ),
        /* @__PURE__ */ jsxDEV47("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV47(
          "select",
          {
            className: "text-sm w-full focus:outline-none",
            form: `updateInputFieldForm_${field.id}`,
            name: "fieldType",
            defaultValue: field.fieldType,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            },
            children: Object.keys(FieldType).map((key) => /* @__PURE__ */ jsxDEV47("option", { value: key, children: key }, key, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 275,
              columnNumber: 78
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 265,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 264,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV47("td", { className: "p-1 text-sm border border-blue-gray-700", children: field.fieldType === "DICT" ? /* @__PURE__ */ jsxDEV47(
          "select",
          {
            className: "text-sm w-full focus:outline-none",
            form: `updateInputFieldForm_${field.id}`,
            name: "dicId",
            defaultValue: String(field.dicId),
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            },
            children: [
              /* @__PURE__ */ jsxDEV47("option", { value: "", children: "-" }, void 0, !1, {
                fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
                lineNumber: 290,
                columnNumber: 45
              }, this),
              dicts.map((dic) => /* @__PURE__ */ jsxDEV47("option", { value: dic.id, children: dic[`title_${i18n.language}`] }, dic.id, !1, {
                fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
                lineNumber: 291,
                columnNumber: 77
              }, this))
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 280,
            columnNumber: 43
          },
          this
        ) : null }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 278,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV47("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV47(
          "input",
          {
            className: "text-sm w-full focus:outline-none",
            form: `updateInputFieldForm_${field.id}`,
            type: "number",
            name: "len",
            defaultValue: field.len,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 296,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 295,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV47("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV47(
          "input",
          {
            className: "text-sm w-full focus:outline-none",
            form: `updateInputFieldForm_${field.id}`,
            type: "number",
            name: "precision",
            defaultValue: field.precision,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 309,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 308,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV47("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV47(
          "input",
          {
            className: "text-sm",
            form: `updateInputFieldForm_${field.id}`,
            type: "checkbox",
            name: "isKey",
            defaultChecked: field.isKey,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 322,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 321,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV47("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV47(
          "input",
          {
            className: "text-sm",
            form: `updateInputFieldForm_${field.id}`,
            type: "checkbox",
            name: "isVisible",
            defaultChecked: field.isVisible,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 335,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 334,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV47("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV47(
          "input",
          {
            className: "text-sm",
            form: `updateInputFieldForm_${field.id}`,
            type: "checkbox",
            name: "isEnable",
            defaultChecked: field.isEnable,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 348,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 347,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV47("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV47(
          "input",
          {
            className: "text-sm",
            form: `updateInputFieldForm_${field.id}`,
            type: "checkbox",
            name: "isRequire",
            defaultChecked: field.isRequire,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 361,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 360,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV47("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV47(
          "input",
          {
            className: "text-sm",
            form: `updateInputFieldForm_${field.id}`,
            type: "checkbox",
            name: "isDuplicate",
            defaultChecked: field.isDuplicate,
            onChange: () => {
              document.getElementById(`updateInputFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 374,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 373,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV47("td", { className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer", children: /* @__PURE__ */ jsxDEV47(Form11, { method: "post", children: [
          /* @__PURE__ */ jsxDEV47("input", { type: "hidden", name: "id", defaultValue: field?.id ? field.id : "" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 388,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV47(
            CustomButton,
            {
              className: "bg-danger hover:shadow-danger_shadow",
              onClick: handleDelete,
              type: "submit",
              name: "_action",
              value: "deleteInputField",
              children: /* @__PURE__ */ jsxDEV47("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV47("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }, void 0, !1, {
                fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
                lineNumber: 397,
                columnNumber: 49
              }, this) }, void 0, !1, {
                fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
                lineNumber: 396,
                columnNumber: 45
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
              lineNumber: 389,
              columnNumber: 41
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 387,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
          lineNumber: 386,
          columnNumber: 33
        }, this)
      ] }, field.id, !0, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 186,
        columnNumber: 29
      }, this)) }, void 0, !1, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 184,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
      lineNumber: 160,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
      lineNumber: 159,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV47(
      Form11,
      {
        id: "deleteGroupForm",
        method: "post",
        onSubmit: (event) => {
          confirm(
            "Please confirm you want to delete this record."
          ) || event.preventDefault();
        },
        children: [
          /* @__PURE__ */ jsxDEV47("input", { type: "hidden", name: "inputFormId", defaultValue: group.inputFormId }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 419,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV47("input", { type: "hidden", name: "id", defaultValue: group.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
            lineNumber: 420,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 407,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV47("div", { className: "pt-5", children: [
      /* @__PURE__ */ jsxDEV47("div", { className: "text-sm", children: [
        "1-",
        t("pos")
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 423,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV47("div", { className: "text-sm", children: [
        "2-",
        t("span")
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 424,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV47("div", { className: "text-sm", children: [
        "3-",
        t("start")
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 425,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV47("div", { className: "text-sm", children: [
        "4-",
        t("is_key")
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 426,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV47("div", { className: "text-sm", children: [
        "5-",
        t("is_visible")
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 427,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV47("div", { className: "text-sm", children: [
        "6-",
        t("is_enable")
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 428,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV47("div", { className: "text-sm", children: [
        "7-",
        t("is_require")
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 429,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV47("div", { className: "text-sm", children: [
        "8-",
        t("duplicate")
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
        lineNumber: 430,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
      lineNumber: 422,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/forms/form_group.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/forms/form_input.tsx
import { Form as Form12 } from "@remix-run/react";
import { useTranslation as useTranslation28 } from "react-i18next";
import { Fragment as Fragment7, jsxDEV as jsxDEV48 } from "react/jsx-dev-runtime";
function InputFormForm({ inputForm, groups }) {
  let { t } = useTranslation28();
  return /* @__PURE__ */ jsxDEV48(Fragment7, { children: [
    /* @__PURE__ */ jsxDEV48("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV48(
        CustomButton,
        {
          className: "bg-primary hover:shadow-primary_shadow",
          form: "addGroupForm",
          type: "submit",
          name: "_action",
          value: "createEmptyGroup",
          children: [
            /* @__PURE__ */ jsxDEV48("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV48("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
              lineNumber: 25,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
              lineNumber: 24,
              columnNumber: 21
            }, this),
            t("add_group")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
          lineNumber: 17,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV48(
        CustomButton,
        {
          className: "hidden",
          id: "updateInputFormButton",
          form: "updateInputForm",
          type: "submit",
          name: "_action",
          value: "updateInputForm",
          children: [
            /* @__PURE__ */ jsxDEV48("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV48("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
              lineNumber: 38,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
              lineNumber: 37,
              columnNumber: 21
            }, this),
            t("save")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
          lineNumber: 29,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV48(
        CustomButton,
        {
          className: "bg-danger hover:shadow-danger_shadow",
          form: "deleteInputForm",
          type: "submit",
          name: "_action",
          value: "deleteInputForm",
          children: [
            /* @__PURE__ */ jsxDEV48("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV48("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
              lineNumber: 50,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
              lineNumber: 49,
              columnNumber: 21
            }, this),
            t("delete")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
          lineNumber: 42,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV48(
      Form12,
      {
        id: "addGroupForm",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV48("input", { type: "hidden", name: "inputFormId", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
            lineNumber: 60,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV48("input", { type: "hidden", name: "cnt", defaultValue: groups.length + 1 }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this)
        ]
      },
      1,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
        lineNumber: 55,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV48(
      Form12,
      {
        id: "updateInputForm",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV48("input", { type: "hidden", name: "id", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV48(
            CustomInput,
            {
              id: "inputForm_pos",
              title: t("pos"),
              type: "number",
              defaultValue: inputForm?.pos,
              name: "pos",
              required: !0,
              onChange: () => {
                document.getElementById("updateInputFormButton").click();
              },
              subClass: "w-16"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
              lineNumber: 70,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV48(
            CustomInput,
            {
              id: "inputForm_title_kk",
              title: t("title_kk"),
              type: "text",
              defaultValue: inputForm?.title_kk,
              name: "title_kk",
              required: !0,
              onChange: () => {
                document.getElementById("updateInputFormButton").click();
              },
              size: 100
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
              lineNumber: 83,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV48(
            CustomInput,
            {
              id: "inputForm_title_ru",
              title: t("title_ru"),
              type: "text",
              defaultValue: inputForm?.title_ru,
              name: "title_ru",
              required: !0,
              onChange: () => {
                document.getElementById("updateInputFormButton").click();
              },
              size: 100
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
              lineNumber: 96,
              columnNumber: 17
            },
            this
          )
        ]
      },
      2,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
        lineNumber: 63,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV48(
      Form12,
      {
        id: "deleteInputForm",
        method: "post",
        onSubmit: (event) => {
          confirm(
            t("confirm_delete")
          ) || event.preventDefault();
        },
        children: /* @__PURE__ */ jsxDEV48("input", { type: "hidden", name: "id", defaultValue: inputForm.id ? inputForm.id : "" }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
          lineNumber: 123,
          columnNumber: 17
        }, this)
      },
      3,
      !1,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
        lineNumber: 110,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/forms/form_input.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/forms/form_search.tsx
import { Form as Form13 } from "@remix-run/react";
import { useTranslation as useTranslation29 } from "react-i18next";
import { Fragment as Fragment8, jsxDEV as jsxDEV49 } from "react/jsx-dev-runtime";
function SearchFormForm({ searchForm, inputFields }) {
  let { i18n, t } = useTranslation29(), handleDelete = async (event) => {
    confirm(
      t("confirm_delete")
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV49(Fragment8, { children: [
    /* @__PURE__ */ jsxDEV49("div", { className: "flex flex-row gap-3 justify-end", children: [
      /* @__PURE__ */ jsxDEV49(
        CustomButton,
        {
          className: "bg-primary hover:shadow-primary_shadow",
          form: "addSearchFieldForm",
          type: "submit",
          name: "_action",
          value: "createEmptySearchField",
          children: [
            /* @__PURE__ */ jsxDEV49("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV49("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 34,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 33,
              columnNumber: 21
            }, this),
            t("add_field")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 26,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV49(
        CustomButton,
        {
          className: "hidden",
          id: "updateSearchFormButton",
          form: "updateSearchForm",
          type: "submit",
          name: "_action",
          value: "updateSearchForm",
          children: [
            /* @__PURE__ */ jsxDEV49("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV49("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 47,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 46,
              columnNumber: 21
            }, this),
            t("save")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 38,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV49(
        CustomButton,
        {
          className: "bg-danger hover:shadow-danger_shadow",
          form: "deleteSearchForm",
          type: "submit",
          name: "_action",
          value: "deleteSearchForm",
          children: [
            /* @__PURE__ */ jsxDEV49("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV49("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 59,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 58,
              columnNumber: 21
            }, this),
            t("delete")
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 51,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV49(
      Form13,
      {
        id: "addSearchFieldForm",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV49("input", { type: "hidden", name: "searchFormId", defaultValue: searchForm.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV49("input", { type: "hidden", name: "cnt", defaultValue: searchForm.fields?.length + 1 }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 64,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV49(
      Form13,
      {
        id: "updateSearchForm",
        className: "flex flex-col gap-3",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV49("input", { type: "hidden", name: "id", defaultValue: searchForm.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV49(
            CustomInput,
            {
              id: "searchForm_pos",
              title: t("pos"),
              type: "number",
              value: searchForm?.pos,
              name: "pos",
              required: !0,
              onChange: () => {
                document.getElementById("updateSearchFormButton").click();
              },
              subClass: "w-16"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 78,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV49(
            CustomInput,
            {
              id: "searchForm_title_kk",
              title: t("title_kk"),
              type: "text",
              value: searchForm?.title_kk,
              name: "title_kk",
              required: !0,
              onChange: () => {
                document.getElementById("updateSearchFormButton").click();
              },
              size: 100
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 91,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV49(
            CustomInput,
            {
              id: "searchForm_title_ru",
              title: t("title_ru"),
              type: "text",
              value: searchForm?.title_ru,
              name: "title_ru",
              required: !0,
              onChange: () => {
                document.getElementById("updateSearchFormButton").click();
              },
              size: 100
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 104,
              columnNumber: 17
            },
            this
          )
        ]
      },
      searchForm?.id,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 71,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV49(
      Form13,
      {
        id: "deleteSearchForm",
        method: "post",
        onSubmit: (event) => {
          confirm(
            t("confirm_delete")
          ) || event.preventDefault();
        },
        children: /* @__PURE__ */ jsxDEV49("input", { type: "hidden", name: "id", defaultValue: searchForm.id ? searchForm.id : "" }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 130,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 118,
        columnNumber: 13
      },
      this
    ),
    searchForm?.fields && searchForm.fields.map((field) => /* @__PURE__ */ jsxDEV49(
      Form13,
      {
        className: "hidden",
        id: `updateSearchFieldForm_${field.id}`,
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV49("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 139,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV49("input", { type: "hidden", name: "searchFormId", defaultValue: field.searchFormId }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 140,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV49(
            CustomButton,
            {
              className: "bg-green-500 hover:shadow-green-100",
              id: `updateSearchFieldButton_${field.id}`,
              form: `updateSearchFieldForm_${field.id}`,
              type: "submit",
              name: "_action",
              value: "updateSearchField",
              children: [
                /* @__PURE__ */ jsxDEV49("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV49("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
                  lineNumber: 150,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
                  lineNumber: 149,
                  columnNumber: 25
                }, this),
                t("save")
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 141,
              columnNumber: 21
            },
            this
          )
        ]
      },
      `updateSearchFieldForm_${field.id}`,
      !0,
      {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 133,
        columnNumber: 17
      },
      this
    )),
    /* @__PURE__ */ jsxDEV49("div", { className: "overflow-x-auto mt-4", children: /* @__PURE__ */ jsxDEV49("table", { className: "w-full", children: [
      /* @__PURE__ */ jsxDEV49(
        "thead",
        {
          className: "bg-primary text-white text-center",
          children: /* @__PURE__ */ jsxDEV49("tr", { children: [
            /* @__PURE__ */ jsxDEV49("th", { className: "p-1 text-sm border", children: "#" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 162,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV49("th", { className: "p-1 text-sm border", children: "ID" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 163,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV49("th", { className: "p-1 text-sm border", children: t("pos") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 164,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV49("th", { className: "p-1 text-sm border", children: t("title_kk") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 165,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV49("th", { className: "p-1 text-sm border", children: t("title_ru") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 166,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV49("th", { className: "p-1 text-sm border", children: t("field") }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 167,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV49("th", { className: "p-1 text-sm border" }, void 0, !1, {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 168,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 161,
            columnNumber: 25
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 158,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ jsxDEV49("tbody", { children: searchForm?.fields && searchForm.fields.map((field, index) => /* @__PURE__ */ jsxDEV49("tr", { children: [
        /* @__PURE__ */ jsxDEV49("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 174,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV49("td", { className: "p-1 text-sm border border-blue-gray-700", children: [
          "F",
          field.id
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 175,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV49("td", { className: "p-1 text-sm border border-blue-gray-700 w-20", children: /* @__PURE__ */ jsxDEV49(
          "input",
          {
            className: "text-sm w-full",
            form: `updateSearchFieldForm_${field.id}`,
            type: "number",
            name: "pos",
            defaultValue: field.pos,
            onChange: () => {
              document.getElementById(`updateSearchFieldButton_${field.id}`).click();
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 177,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 176,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV49(
          "td",
          {
            className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40",
            children: /* @__PURE__ */ jsxDEV49(
              "input",
              {
                className: "text-sm w-full",
                form: `updateSearchFieldForm_${field.id}`,
                type: "text",
                name: "title_kk",
                defaultValue: field.title_kk,
                onChange: () => {
                  document.getElementById(`updateSearchFieldButton_${field.id}`).click();
                }
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
                lineNumber: 192,
                columnNumber: 37
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 189,
            columnNumber: 33
          },
          this
        ),
        /* @__PURE__ */ jsxDEV49(
          "td",
          {
            className: "p-1 text-sm border border-blue-gray-700 hover:cursor-pointer hover:underline w-40",
            children: /* @__PURE__ */ jsxDEV49(
              "input",
              {
                className: "text-sm w-full",
                form: `updateSearchFieldForm_${field.id}`,
                type: "text",
                name: "title_ru",
                defaultValue: field.title_ru,
                onChange: () => {
                  document.getElementById(`updateSearchFieldButton_${field.id}`).click();
                }
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
                lineNumber: 207,
                columnNumber: 37
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 204,
            columnNumber: 33
          },
          this
        ),
        /* @__PURE__ */ jsxDEV49("td", { className: "p-1 text-sm border border-blue-gray-700", children: /* @__PURE__ */ jsxDEV49(
          "select",
          {
            className: "text-sm w-full",
            form: `updateSearchFieldForm_${field.id}`,
            name: "fieldId",
            defaultValue: String(field.fieldId),
            onChange: () => {
              document.getElementById(`updateSearchFieldButton_${field.id}`).click();
            },
            children: [
              /* @__PURE__ */ jsxDEV49("option", { value: "", children: "-" }, void 0, !1, {
                fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
                lineNumber: 230,
                columnNumber: 41
              }, this),
              inputFields && inputFields.map(
                (fld) => {
                  let frm = fld.group.inputForm.pos + ". " + fld.group.inputForm[`title_${i18n.language}`], grp = fld.group.pos + ". " + fld.group[`title_${i18n.language}`], fieldTitle = frm + " -> " + grp + " -> " + fld.pos + ". " + fld[`title_${i18n.language}`];
                  return /* @__PURE__ */ jsxDEV49("option", { value: fld.id, children: fieldTitle }, fld.id, !1, {
                    fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
                    lineNumber: 237,
                    columnNumber: 53
                  }, this);
                }
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 220,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 219,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV49("td", { className: "p-1 text-sm border border-blue-gray-700 w-10", children: /* @__PURE__ */ jsxDEV49(Form13, { method: "post", children: [
          /* @__PURE__ */ jsxDEV49("input", { type: "hidden", name: "id", defaultValue: field.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
            lineNumber: 245,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV49(
            CustomButton,
            {
              className: "bg-danger hover:shadow-danger_shadow",
              onClick: handleDelete,
              type: "submit",
              name: "_action",
              value: "deleteSearchField",
              children: /* @__PURE__ */ jsxDEV49("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV49("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }, void 0, !1, {
                fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
                lineNumber: 254,
                columnNumber: 49
              }, this) }, void 0, !1, {
                fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
                lineNumber: 253,
                columnNumber: 45
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
              lineNumber: 246,
              columnNumber: 41
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 244,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
          lineNumber: 243,
          columnNumber: 33
        }, this)
      ] }, field.id, !0, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 173,
        columnNumber: 29
      }, this)) }, void 0, !1, {
        fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
        lineNumber: 171,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
      lineNumber: 157,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
      lineNumber: 156,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/forms/form_search.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/forms/forms.tsx
import { jsxDEV as jsxDEV50 } from "react/jsx-dev-runtime";
function Forms({
  state,
  dictionaries,
  groups,
  inputForm,
  searchForm,
  dictionary,
  group,
  inputFields
}) {
  return /* @__PURE__ */ jsxDEV50("div", { className: "p-4 border w-3/4", children: state === "inputForm" && inputForm ? /* @__PURE__ */ jsxDEV50(InputFormForm, { inputForm, groups }, void 0, !1, {
    fileName: "app/components/UI/widgets/db_struct/forms/forms.tsx",
    lineNumber: 30,
    columnNumber: 19
  }, this) : state === "searchForm" && searchForm ? /* @__PURE__ */ jsxDEV50(SearchFormForm, { searchForm, inputFields }, void 0, !1, {
    fileName: "app/components/UI/widgets/db_struct/forms/forms.tsx",
    lineNumber: 32,
    columnNumber: 23
  }, this) : state === "dictionary" && dictionary ? /* @__PURE__ */ jsxDEV50(DictionaryForm, { dictionary }, void 0, !1, {
    fileName: "app/components/UI/widgets/db_struct/forms/forms.tsx",
    lineNumber: 34,
    columnNumber: 27
  }, this) : state === "group" && group ? /* @__PURE__ */ jsxDEV50(GroupForm, { group, dicts: dictionaries }, void 0, !1, {
    fileName: "app/components/UI/widgets/db_struct/forms/forms.tsx",
    lineNumber: 36,
    columnNumber: 31
  }, this) : null }, void 0, !1, {
    fileName: "app/components/UI/widgets/db_struct/forms/forms.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/db_struct/view.tsx
import { jsxDEV as jsxDEV51 } from "react/jsx-dev-runtime";
function DbStructView({
  errors,
  state,
  inputForms,
  searchForms,
  dictionaries,
  groups,
  inputFormId,
  searchFormId,
  dictionaryId,
  groupId,
  inputForm,
  searchForm,
  dictionary,
  group,
  inputFields
}) {
  return /* @__PURE__ */ jsxDEV51("div", { className: "mx-1 flex flex-col gap-3 h-[calc(100vh-5rem)]", children: [
    /* @__PURE__ */ jsxDEV51(ErrorMessage, { errors }, void 0, !1, {
      fileName: "app/components/UI/widgets/db_struct/view.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV51(Panel, { className: "h-full overflow-auto", children: [
      /* @__PURE__ */ jsxDEV51(
        Buttons4,
        {
          state,
          dictionaries_count: dictionaries && dictionaries.length ? dictionaries.length : 0,
          inputForms_count: inputForms && inputForms.length ? inputForms.length : 0,
          searchForms_count: searchForms && searchForms.length ? searchForms.length : 0
        },
        void 0,
        !1,
        {
          fileName: "app/components/UI/widgets/db_struct/view.tsx",
          lineNumber: 46,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV51("div", { className: "flex flex-row", children: [
        /* @__PURE__ */ jsxDEV51(
          DbStructNav,
          {
            state,
            inputForms,
            searchForms,
            dictionaries,
            groups,
            inputFormId,
            searchFormId,
            dictionaryId,
            groupId
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/view.tsx",
            lineNumber: 53,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ jsxDEV51(
          Forms,
          {
            state,
            dictionaries,
            groups,
            inputForm,
            searchForm,
            dictionary,
            group,
            inputFields
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/db_struct/view.tsx",
            lineNumber: 64,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/db_struct/view.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/db_struct/view.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/db_struct/view.tsx",
    lineNumber: 43,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard.db_struct.tsx
import { jsxDEV as jsxDEV52 } from "react/jsx-dev-runtime";
async function loader5({
  request
}) {
  let url = new URL(request.url), state = url.searchParams.get("state"), inputFormId = url.searchParams.get("inputFormId"), searchFormId = url.searchParams.get("searchFormId"), dictionaryId = url.searchParams.get("dictionaryId"), groupId = url.searchParams.get("groupId"), inputFieldId = url.searchParams.get("inputFieldId"), groups = await api_default.db.getGroups(Number(inputFormId)), inputFields = await api_default.db.getInputFields(), inputForm, searchForm, dictionary, group, inputField;
  switch (state) {
    case "dictionary": {
      invariant(dictionaryId, "Missing dictionaryId param"), dictionary = await api_default.db.getDictionary(Number(dictionaryId));
      break;
    }
    case "inputForm": {
      invariant(inputFormId, "Missing inputFormId param"), inputForm = await api_default.db.getInputForm(Number(inputFormId));
      break;
    }
    case "searchForm": {
      invariant(searchFormId, "Missing searchFormId param"), searchForm = await api_default.db.getSearchForm(Number(searchFormId));
      break;
    }
    case "group": {
      invariant(groupId, "Missing groupId param"), group = await api_default.db.getGroup(Number(groupId)), inputField = group?.fields.find((item) => {
        item.id, Number(inputFieldId);
      });
      break;
    }
  }
  return json5({
    state,
    dictionary,
    inputForm,
    searchForm,
    group,
    inputField,
    groups,
    inputFields
  });
}
async function action4({
  request
}) {
  let errors = null, formData = await request.formData(), { _action, ...values } = Object.fromEntries(formData);
  if (_action === "updateInputForm")
    try {
      return await api_default.db.updateInputForm(Number(values.id), {
        id: Number(values.id),
        pos: Number(values.pos),
        title_kk: String(values.title_kk),
        title_ru: String(values.title_ru)
      }), redirect3(`/dashboard/db_struct?state=inputForm&inputFormId=${values.id}`);
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptyInputForm")
    try {
      let form = await api_default.db.createEmptyInputForm(Number(values.cnt));
      return redirect3(`/dashboard/db_struct?state=inputForm&inputFormId=${form.id}`);
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteInputForm")
    try {
      return await api_default.db.deleteInputForm(Number(values.id)), redirect3("/dashboard/db_struct");
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateSearchForm")
    try {
      return await api_default.db.updateSearchForm(Number(values.id), {
        id: Number(values.id),
        pos: Number(values.pos),
        title_kk: String(values.title_kk),
        title_ru: String(values.title_ru)
      }), redirect3(`/dashboard/db_struct?state=searchForm&searchFormId=${values.id}`);
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptySearchForm")
    try {
      let form = await api_default.db.createEmptySearchForm(Number(values.cnt));
      return redirect3(`/dashboard/db_struct?state=searchForm&searchFormId=${form.id}`);
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteSearchForm")
    try {
      return await api_default.db.deleteSearchForm(Number(values.id)), redirect3("/dashboard/db_struct");
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateDictionary")
    try {
      return await api_default.db.updateDictionary(Number(values.id), {
        id: Number(values.id),
        title_kk: String(values.title_kk),
        title_ru: String(values.title_ru)
      }), redirect3(`/dashboard/db_struct?state=dictionary&dictionaryId=${values.id}`);
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptyDictionary")
    try {
      let dict = await api_default.db.createEmptyDictionary(Number(values.cnt));
      return redirect3(`/dashboard/db_struct?state=dictionary&dictionaryId=${dict.id}`);
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteDictionary")
    try {
      return await api_default.db.deleteDictionary(Number(values.id)), redirect3("/dashboard/db_struct");
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptyGroup")
    try {
      let group = await api_default.db.createEmptyGroup(Number(values.inputFormId), Number(values.cnt));
      return redirect3(`/dashboard/db_struct?state=group&groupId=${group.id}&inputFormId=${group.inputFormId}`);
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateGroup")
    try {
      let group = await api_default.db.updateGroup(
        Number(values.id),
        {
          id: Number(values.id),
          inputFormId: Number(values.inputFormId),
          pos: Number(values.pos),
          title_kk: String(values.title_kk),
          title_ru: String(values.title_ru),
          isMulty: Boolean(values.isMulty)
        }
      );
      return redirect3(`/dashboard/db_struct?state=group&inputFormId=${group.inputFormId}&groupId=${group.id}`);
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteGroup")
    try {
      return await api_default.db.deleteGroup(Number(values.id)), redirect3("/dashboard/db_struct");
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateInputField")
    try {
      return await api_default.db.updateInputField(Number(values.id), {
        id: Number(values.id),
        groupId: Number(values.groupId),
        colSpan: Number(values.colSpan),
        colStart: Number(values.colStart),
        pos: Number(values.pos),
        title_kk: String(values.title_kk),
        title_ru: String(values.title_ru),
        len: Number(values.len),
        fieldType: String(values.fieldType),
        dicId: Number(values.dicId),
        isKey: Boolean(values.isKey),
        isVisible: Boolean(values.isVisible),
        isEnable: Boolean(values.isEnable),
        isRequire: Boolean(values.isRequire),
        precision: Number(values.precision),
        isDuplicate: Boolean(values.isDuplicate)
      }), redirect3(`/dashboard/db_struct?state=group&inputFormId=${values.inputFormId}&groupId=${values.groupId}`);
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptyInputField")
    try {
      await api_default.db.createEmptyInputField(Number(values.groupId), Number(values.cnt));
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteInputField")
    try {
      await api_default.db.deleteInputField(Number(values.id));
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "createEmptySearchField")
    try {
      await api_default.db.createEmptySearchField(Number(values.searchFormId), Number(values.cnt));
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateSearchField")
    try {
      return await api_default.db.updateSearchField(Number(values.id), {
        id: Number(values.id),
        pos: Number(values.pos),
        searchFormId: Number(values.searchFormId),
        title_kk: String(values.title_kk),
        title_ru: String(values.title_ru),
        fieldId: Number(values.fieldId)
      }), redirect3(`/dashboard/db_struct?state=searchForm&searchFormId=${values.searchFormId}`);
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "deleteSearchField")
    try {
      await api_default.db.deleteSearchField(Number(values.id));
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "generateStructDb")
    try {
      await api_default.db.generateStructDb();
    } catch (e) {
      e instanceof Prisma4.PrismaClientKnownRequestError && (errors = e.message);
    }
  return json5({ errors });
}
function DbStruct() {
  let { dictionaries, inputForms, searchForms } = useOutletContext4(), {
    state,
    dictionary,
    inputForm,
    searchForm,
    group,
    groups,
    inputFields
  } = useLoaderData5(), data = useActionData4();
  return /* @__PURE__ */ jsxDEV52(
    DbStructView,
    {
      errors: data?.errors ? data?.errors : void 0,
      state,
      inputForms,
      searchForms,
      dictionaries,
      groups,
      inputFormId: inputForm?.id,
      searchFormId: searchForm?.id,
      dictionaryId: dictionary?.id,
      groupId: group?.id,
      inputForm,
      searchForm,
      dictionary,
      group,
      inputFields
    },
    void 0,
    !1,
    {
      fileName: "app/routes/dashboard.db_struct.tsx",
      lineNumber: 313,
      columnNumber: 9
    },
    this
  );
}

// app/routes/dashboard.users.tsx
var dashboard_users_exports = {};
__export(dashboard_users_exports, {
  action: () => action5,
  default: () => Users,
  loader: () => loader6
});
import { Prisma as Prisma5 } from "@prisma/client";
import { json as json6, redirect as redirect4 } from "@remix-run/node";
import { useActionData as useActionData5, useLoaderData as useLoaderData6 } from "@remix-run/react";

// app/components/UI/widgets/users/dlg_user.tsx
import MaterialTailwind6 from "@material-tailwind/react";
import { Form as Form14 } from "@remix-run/react";
import moment2 from "moment";
import { useEffect as useEffect3, useState as useState6 } from "react";
import { useTranslation as useTranslation30 } from "react-i18next";
import { jsxDEV as jsxDEV53 } from "react/jsx-dev-runtime";
var { Dialog: Dialog4, Card: Card4, CardBody: CardBody4, CardFooter: CardFooter4 } = MaterialTailwind6;
function UserDialog({ isNew, user, departments, errors }) {
  let { i18n, t } = useTranslation30(), [open, setOpen] = useState6(!1);
  return useEffect3(() => {
    setOpen(!!user);
  }, [user]), /* @__PURE__ */ jsxDEV53(
    Dialog4,
    {
      placeholder: "",
      size: "sm",
      open,
      handler: () => setOpen(!1),
      className: "bg-transparent shadow-none",
      children: /* @__PURE__ */ jsxDEV53(Card4, { className: "mx-auto w-full", placeholder: "", children: [
        /* @__PURE__ */ jsxDEV53(CardBody4, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: [
          /* @__PURE__ */ jsxDEV53(
            Form14,
            {
              id: "userForm",
              className: "flex flex-col gap-3",
              method: "post",
              children: [
                /* @__PURE__ */ jsxDEV53("input", { type: "hidden", name: "id", defaultValue: user?.id ? user.id : "" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/dlg_user.tsx",
                  lineNumber: 43,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV53(
                  CustomInput,
                  {
                    id: "user_is_active",
                    type: "checkbox",
                    name: "isActive",
                    title: t("is_active"),
                    defaultChecked: user?.isActive
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/dlg_user.tsx",
                    lineNumber: 44,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV53(
                  CustomInput,
                  {
                    id: "user_login",
                    type: "text",
                    name: "login",
                    title: t("login"),
                    defaultValue: user?.login,
                    required: !0,
                    readOnly: !isNew,
                    size: 45
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/dlg_user.tsx",
                    lineNumber: 51,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV53(
                  CustomInput,
                  {
                    id: "user_password",
                    type: "password",
                    name: "password",
                    title: t("password"),
                    defaultValue: user?.password,
                    required: !1,
                    size: 45
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/dlg_user.tsx",
                    lineNumber: 61,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV53(
                  CustomInput,
                  {
                    id: "user_firsName",
                    type: "text",
                    name: "firstName",
                    title: t("first_name"),
                    defaultValue: user?.firstName ? user.firstName : "",
                    required: !1,
                    size: 45
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/dlg_user.tsx",
                    lineNumber: 70,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV53(
                  CustomInput,
                  {
                    id: "user_lastName",
                    type: "text",
                    name: "lastName",
                    title: t("last_name"),
                    defaultValue: user?.lastName ? user.lastName : "",
                    required: !1,
                    size: 45
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/dlg_user.tsx",
                    lineNumber: 79,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV53(
                  CustomInput,
                  {
                    id: "user_middleName",
                    type: "text",
                    name: "middleName",
                    title: t("middle_name"),
                    defaultValue: user?.middleName ? user.middleName : "",
                    required: !1,
                    size: 45
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/dlg_user.tsx",
                    lineNumber: 88,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV53(
                  CustomSelect,
                  {
                    id: "user_department",
                    name: "departmentId",
                    title: t("department"),
                    defaultValue: user?.departmentId ? user.departmentId : "",
                    required: !1,
                    children: [
                      /* @__PURE__ */ jsxDEV53("option", { children: "-" }, void 0, !1, {
                        fileName: "app/components/UI/widgets/users/dlg_user.tsx",
                        lineNumber: 104,
                        columnNumber: 29
                      }, this),
                      departments.map((item) => /* @__PURE__ */ jsxDEV53("option", { value: item.id, children: item[`title_${i18n.language}`] }, void 0, !1, {
                        fileName: "app/components/UI/widgets/users/dlg_user.tsx",
                        lineNumber: 106,
                        columnNumber: 33
                      }, this))
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/UI/widgets/users/dlg_user.tsx",
                    lineNumber: 97,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV53(
                  CustomInput,
                  {
                    id: "user_expiredPwd",
                    type: "date",
                    name: "expiredPwd",
                    title: t("expired_password"),
                    defaultValue: moment2(user?.expiredPwd).format("YYYY-MM-DD"),
                    required: !0,
                    size: 45
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/dlg_user.tsx",
                    lineNumber: 109,
                    columnNumber: 25
                  },
                  this
                )
              ]
            },
            user?.id,
            !0,
            {
              fileName: "app/components/UI/widgets/users/dlg_user.tsx",
              lineNumber: 37,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV53("span", { className: "text-red-500 text-sm", children: errors }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/dlg_user.tsx",
            lineNumber: 119,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/users/dlg_user.tsx",
          lineNumber: 36,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV53(CardFooter4, { className: "pt-0 flex flex-row gap-3 justify-center", placeholder: "", children: [
          /* @__PURE__ */ jsxDEV53(
            CustomButton,
            {
              className: "bg-primary hover:shadow-primary_shadow",
              form: "userForm",
              type: "submit",
              name: "_action",
              value: isNew ? "createUser" : "updateUser",
              children: t("save")
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/users/dlg_user.tsx",
              lineNumber: 122,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV53(
            CustomButton,
            {
              className: "bg-primary hover:shadow-primary_shadow",
              onClick: () => setOpen(!1),
              children: t("close")
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/users/dlg_user.tsx",
              lineNumber: 131,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/users/dlg_user.tsx",
          lineNumber: 121,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/UI/widgets/users/dlg_user.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/widgets/users/dlg_user.tsx",
      lineNumber: 28,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/users/btn_new_user.tsx
import { useNavigate as useNavigate9 } from "@remix-run/react";
import { useTranslation as useTranslation31 } from "react-i18next";
import { jsxDEV as jsxDEV54 } from "react/jsx-dev-runtime";
function ButtonNewUser() {
  let navigate = useNavigate9(), { t } = useTranslation31();
  return /* @__PURE__ */ jsxDEV54(
    CustomButton,
    {
      className: "bg-primary hover:shadow-blue-gray-100",
      onClick: () => navigate("/dashboard/users?new_user=True"),
      children: [
        /* @__PURE__ */ jsxDEV54("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV54("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
          fileName: "app/components/UI/widgets/users/btn_new_user.tsx",
          lineNumber: 15,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/users/btn_new_user.tsx",
          lineNumber: 14,
          columnNumber: 13
        }, this),
        t("new_user")
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/users/btn_new_user.tsx",
      lineNumber: 10,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/users/tbl_users.tsx
import moment3 from "moment";
import { useNavigate as useNavigate11 } from "@remix-run/react";

// app/components/UI/widgets/users/btn_delete_user.tsx
import { Form as Form15 } from "@remix-run/react";
import { useTranslation as useTranslation32 } from "react-i18next";
import { jsxDEV as jsxDEV55 } from "react/jsx-dev-runtime";
function ButtonDeleteUser({ userId }) {
  let { t } = useTranslation32();
  return /* @__PURE__ */ jsxDEV55(Form15, { method: "post", children: [
    /* @__PURE__ */ jsxDEV55("input", { type: "hidden", name: "id", defaultValue: userId }, void 0, !1, {
      fileName: "app/components/UI/widgets/users/btn_delete_user.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV55(
      CustomButton,
      {
        className: "bg-danger hover:shadow-danger_shadow",
        onClick: async (event) => {
          confirm(
            t("confirm_delete")
          ) || event.preventDefault();
        },
        type: "submit",
        name: "_action",
        value: "deleteUser",
        children: /* @__PURE__ */ jsxDEV55("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV55("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }, void 0, !1, {
          fileName: "app/components/UI/widgets/users/btn_delete_user.tsx",
          lineNumber: 32,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/users/btn_delete_user.tsx",
          lineNumber: 31,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/users/btn_delete_user.tsx",
        lineNumber: 24,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/users/btn_delete_user.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/users/tbl_users.tsx
import { useTranslation as useTranslation34 } from "react-i18next";

// app/components/UI/widgets/users/btn_edit_user.tsx
import { useNavigate as useNavigate10 } from "@remix-run/react";
import { useTranslation as useTranslation33 } from "react-i18next";
import { jsxDEV as jsxDEV56 } from "react/jsx-dev-runtime";
function ButtonEditUser({ userId }) {
  let navigate = useNavigate10(), { t } = useTranslation33();
  return /* @__PURE__ */ jsxDEV56(
    CustomButton,
    {
      className: "bg-primary hover:shadow-blue-gray-100",
      onClick: () => navigate(`/dashboard/users?state=users&userId=${userId}`),
      children: /* @__PURE__ */ jsxDEV56("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV56("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" }, void 0, !1, {
        fileName: "app/components/UI/widgets/users/btn_edit_user.tsx",
        lineNumber: 19,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/UI/widgets/users/btn_edit_user.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/widgets/users/btn_edit_user.tsx",
      lineNumber: 14,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/users/tbl_users.tsx
import { jsxDEV as jsxDEV57 } from "react/jsx-dev-runtime";
function UsersTable({ currentUserId, users, departments }) {
  let navigate = useNavigate11(), { t } = useTranslation34();
  return /* @__PURE__ */ jsxDEV57(
    "table",
    {
      className: "w-full",
      children: [
        /* @__PURE__ */ jsxDEV57(
          "thead",
          {
            className: "bg-primary text-white text-center",
            children: /* @__PURE__ */ jsxDEV57("tr", { children: [
              /* @__PURE__ */ jsxDEV57("th", { className: "p-1 text-sm border border-blue-gray-500", children: "#" }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                lineNumber: 26,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV57("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("is_active") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                lineNumber: 27,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV57("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("login") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                lineNumber: 28,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV57("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("first_name") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                lineNumber: 29,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV57("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("last_name") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                lineNumber: 30,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV57("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("middle_name") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                lineNumber: 31,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV57("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("department") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                lineNumber: 32,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV57("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("expired_password") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                lineNumber: 33,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV57("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("created") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                lineNumber: 34,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV57("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("updated") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                lineNumber: 35,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV57("th", { className: "p-1 text-sm border border-blue-gray-500" }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                lineNumber: 36,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV57("th", { className: "p-1 text-sm border border-blue-gray-500" }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                lineNumber: 37,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/UI/widgets/users/tbl_users.tsx",
              lineNumber: 25,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/users/tbl_users.tsx",
            lineNumber: 22,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV57("tbody", { children: users.map((user, index) => /* @__PURE__ */ jsxDEV57(
          "tr",
          {
            className: user?.id === currentUserId ? "bg-selected hover:cursor-pointer" : " hover:cursor-pointer",
            children: [
              /* @__PURE__ */ jsxDEV57(
                "td",
                {
                  className: "p-1 text-sm border border-blue-gray-500",
                  onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`),
                  children: index + 1
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                  lineNumber: 46,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV57(
                "td",
                {
                  className: "p-1 text-sm border border-blue-gray-500",
                  onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`),
                  children: user.isActive ? t("active") : t("not_active")
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                  lineNumber: 49,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV57(
                "td",
                {
                  className: "p-1 text-sm border border-blue-gray-500",
                  onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`),
                  children: user.login
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                  lineNumber: 54,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV57(
                "td",
                {
                  className: "p-1 text-sm border border-blue-gray-500",
                  onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`),
                  children: user.firstName
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                  lineNumber: 59,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV57(
                "td",
                {
                  className: "p-1 text-sm border border-blue-gray-500",
                  onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`),
                  children: user.lastName
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                  lineNumber: 64,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV57(
                "td",
                {
                  className: "p-1 text-sm border border-blue-gray-500",
                  onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`),
                  children: user.middleName
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                  lineNumber: 69,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV57(
                "td",
                {
                  className: "p-1 text-sm border border-blue-gray-500",
                  onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`),
                  children: departments.find((item) => item.id === user.departmentId)?.title
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                  lineNumber: 74,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV57(
                "td",
                {
                  className: "p-1 text-sm border border-blue-gray-500",
                  onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`),
                  children: moment3(user.expiredPwd).format("DD.MM.YYYY")
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                  lineNumber: 79,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV57(
                "td",
                {
                  className: "p-1 text-sm border border-blue-gray-500",
                  onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`),
                  children: moment3(user.createdAt).format("DD.MM.YYYY H:m:s")
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                  lineNumber: 84,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV57(
                "td",
                {
                  className: "p-1 text-sm border border-blue-gray-500",
                  onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`),
                  children: moment3(user.updatedAt).format("DD.MM.YYYY H:m:s")
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                  lineNumber: 89,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ jsxDEV57("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: /* @__PURE__ */ jsxDEV57(ButtonEditUser, { userId: user.id }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                lineNumber: 95,
                columnNumber: 29
              }, this) }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                lineNumber: 94,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV57("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: /* @__PURE__ */ jsxDEV57(ButtonDeleteUser, { userId: user.id }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                lineNumber: 98,
                columnNumber: 29
              }, this) }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users.tsx",
                lineNumber: 97,
                columnNumber: 25
              }, this)
            ]
          },
          user.id,
          !0,
          {
            fileName: "app/components/UI/widgets/users/tbl_users.tsx",
            lineNumber: 42,
            columnNumber: 21
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/UI/widgets/users/tbl_users.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/users/tbl_users.tsx",
      lineNumber: 19,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/users/view.tsx
import MaterialTailwind7 from "@material-tailwind/react";
import { useTranslation as useTranslation48 } from "react-i18next";

// app/components/UI/widgets/users/tbl_roles.tsx
import { Form as Form17, useNavigate as useNavigate12 } from "@remix-run/react";
import { useTranslation as useTranslation36 } from "react-i18next";

// app/components/UI/widgets/users/btn_delete_role.tsx
import { Form as Form16 } from "@remix-run/react";
import { useTranslation as useTranslation35 } from "react-i18next";
import { jsxDEV as jsxDEV58 } from "react/jsx-dev-runtime";
function ButtonDeleteRole({ roleId }) {
  let { t } = useTranslation35();
  return /* @__PURE__ */ jsxDEV58(Form16, { method: "post", children: [
    /* @__PURE__ */ jsxDEV58("input", { type: "hidden", name: "id", defaultValue: roleId }, void 0, !1, {
      fileName: "app/components/UI/widgets/users/btn_delete_role.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV58(
      CustomButton,
      {
        className: "bg-danger hover:shadow-danger_shadow",
        onClick: async (event) => {
          confirm(
            t("confirm_delete")
          ) || event.preventDefault();
        },
        type: "submit",
        name: "_action",
        value: "deleteRole",
        children: /* @__PURE__ */ jsxDEV58("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV58("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }, void 0, !1, {
          fileName: "app/components/UI/widgets/users/btn_delete_role.tsx",
          lineNumber: 32,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/users/btn_delete_role.tsx",
          lineNumber: 31,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/users/btn_delete_role.tsx",
        lineNumber: 24,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/users/btn_delete_role.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/users/tbl_roles.tsx
import { Fragment as Fragment9, jsxDEV as jsxDEV59 } from "react/jsx-dev-runtime";
function RolesTable({ role, roles }) {
  let navigate = useNavigate12(), { i18n, t } = useTranslation36();
  return /* @__PURE__ */ jsxDEV59(Fragment9, { children: [
    roles.map((role2) => /* @__PURE__ */ jsxDEV59(
      Form17,
      {
        method: "post",
        className: "hidden",
        id: `updateRoleForm_${role2.id}`,
        children: [
          /* @__PURE__ */ jsxDEV59("input", { type: "hidden", name: "id", defaultValue: role2.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
            lineNumber: 24,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV59(
            "input",
            {
              id: `updateRoleButton_${role2.id}`,
              type: "submit",
              name: "_action",
              value: "updateRole"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
              lineNumber: 25,
              columnNumber: 21
            },
            this
          )
        ]
      },
      role2.id,
      !0,
      {
        fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
        lineNumber: 18,
        columnNumber: 17
      },
      this
    )),
    /* @__PURE__ */ jsxDEV59(
      "table",
      {
        className: "w-full",
        children: [
          /* @__PURE__ */ jsxDEV59(
            "thead",
            {
              className: "bg-primary text-white text-center",
              children: /* @__PURE__ */ jsxDEV59("tr", { children: [
                /* @__PURE__ */ jsxDEV59("th", { className: "p-1 text-sm border border-blue-gray-500", children: "#" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
                  lineNumber: 40,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV59("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("title_kk") }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
                  lineNumber: 41,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV59("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("title_ru") }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
                  lineNumber: 42,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV59("th", { className: "p-1 text-sm border border-blue-gray-500" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
                  lineNumber: 43,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
                lineNumber: 39,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
              lineNumber: 36,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV59("tbody", { children: roles.map((rl, index) => /* @__PURE__ */ jsxDEV59(
            "tr",
            {
              className: role?.id === rl.id ? "bg-selected hover:cursor-pointer" : "hover:cursor-pointer",
              onClick: () => navigate(`/dashboard/users?state=roles&roleId=${rl.id}`),
              children: [
                /* @__PURE__ */ jsxDEV59("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: index + 1 }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
                  lineNumber: 53,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV59(
                  "td",
                  {
                    className: "p-1 text-sm border border-blue-gray-500 hover:cursor-pointer hover:underline",
                    children: /* @__PURE__ */ jsxDEV59(
                      "input",
                      {
                        className: "text-sm w-full focus:outline-none p-1 text-black",
                        form: `updateRoleForm_${rl.id}`,
                        type: "text",
                        name: "title_kk",
                        defaultValue: rl.title_kk,
                        maxLength: 45,
                        onChange: () => {
                          document.getElementById(`updateRoleButton_${rl.id}`).click();
                        }
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
                        lineNumber: 57,
                        columnNumber: 33
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
                    lineNumber: 54,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV59(
                  "td",
                  {
                    className: "p-1 text-sm border border-blue-gray-500 hover:cursor-pointer hover:underline",
                    children: /* @__PURE__ */ jsxDEV59(
                      "input",
                      {
                        className: "text-sm w-full focus:outline-none p-1 text-black",
                        form: `updateRoleForm_${rl.id}`,
                        type: "text",
                        name: "title_ru",
                        defaultValue: rl.title_ru,
                        maxLength: 45,
                        onChange: () => {
                          document.getElementById(`updateRoleButton_${rl.id}`).click();
                        }
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
                        lineNumber: 73,
                        columnNumber: 33
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
                    lineNumber: 70,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV59("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: /* @__PURE__ */ jsxDEV59(ButtonDeleteRole, { roleId: rl.id }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
                  lineNumber: 87,
                  columnNumber: 33
                }, this) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
                  lineNumber: 86,
                  columnNumber: 29
                }, this)
              ]
            },
            rl.id,
            !0,
            {
              fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
              lineNumber: 48,
              columnNumber: 25
            },
            this
          )) }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
            lineNumber: 46,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
        lineNumber: 33,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/users/tbl_ainputforms.tsx
import { AccessType } from "@prisma/client";
import { Form as Form19 } from "@remix-run/react";
import { useTranslation as useTranslation38 } from "react-i18next";

// app/components/UI/widgets/users/btn_delete_ainputform.tsx
import { Form as Form18 } from "@remix-run/react";
import { useTranslation as useTranslation37 } from "react-i18next";
import { jsxDEV as jsxDEV60 } from "react/jsx-dev-runtime";
function ButtonDeleteAccessInputForm({ aform }) {
  let { t } = useTranslation37(), handleDelete = async (event) => {
    confirm(
      t("confirm_delete")
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV60(Form18, { method: "post", children: [
    /* @__PURE__ */ jsxDEV60("input", { type: "hidden", name: "id", defaultValue: aform.id }, void 0, !1, {
      fileName: "app/components/UI/widgets/users/btn_delete_ainputform.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV60("input", { type: "hidden", name: "roleId", defaultValue: aform.roleId }, void 0, !1, {
      fileName: "app/components/UI/widgets/users/btn_delete_ainputform.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV60(
      CustomButton,
      {
        className: "bg-danger hover:shadow-danger_shadow",
        onClick: handleDelete,
        type: "submit",
        name: "_action",
        value: "deleteAccessInput",
        children: /* @__PURE__ */ jsxDEV60("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV60("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }, void 0, !1, {
          fileName: "app/components/UI/widgets/users/btn_delete_ainputform.tsx",
          lineNumber: 34,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/users/btn_delete_ainputform.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/users/btn_delete_ainputform.tsx",
        lineNumber: 26,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/users/btn_delete_ainputform.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/users/tbl_ainputforms.tsx
import { Fragment as Fragment10, jsxDEV as jsxDEV61 } from "react/jsx-dev-runtime";
function AccessInputFormsTable({ aforms, inputForms }) {
  let { i18n, t } = useTranslation38();
  return /* @__PURE__ */ jsxDEV61(Fragment10, { children: [
    aforms && aforms.map((aform) => /* @__PURE__ */ jsxDEV61(
      Form19,
      {
        className: "hidden",
        id: `updateAccessInputForm_${aform.id}`,
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV61("input", { type: "hidden", name: "id", defaultValue: aform.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
            lineNumber: 25,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV61("input", { type: "hidden", name: "roleId", defaultValue: aform.roleId }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
            lineNumber: 26,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV61(
            CustomButton,
            {
              className: "bg-green-500 hover:shadow-green-100",
              id: `updateAccessInputFormButton_${aform.id}`,
              form: `updateAccessInputForm_${aform.id}`,
              type: "submit",
              name: "_action",
              value: "updateAccessInput"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
              lineNumber: 27,
              columnNumber: 21
            },
            this
          )
        ]
      },
      `updateAccessInputForm_${aform.id}`,
      !0,
      {
        fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
        lineNumber: 19,
        columnNumber: 17
      },
      this
    )),
    /* @__PURE__ */ jsxDEV61(
      "table",
      {
        className: "w-full",
        children: [
          /* @__PURE__ */ jsxDEV61(
            "thead",
            {
              className: "bg-primary text-white text-center",
              children: /* @__PURE__ */ jsxDEV61("tr", { children: [
                /* @__PURE__ */ jsxDEV61("th", { className: "p-1 text-sm border border-blue-gray-500", children: "#" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
                  lineNumber: 44,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV61("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("form") }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
                  lineNumber: 45,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV61("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("access_type") }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
                  lineNumber: 46,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV61("th", { className: "p-1 text-sm border border-blue-gray-500" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
                  lineNumber: 47,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
                lineNumber: 43,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
              lineNumber: 40,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV61("tbody", { children: aforms.map((aform, index) => /* @__PURE__ */ jsxDEV61(
            "tr",
            {
              children: [
                /* @__PURE__ */ jsxDEV61("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: index + 1 }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
                  lineNumber: 55,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV61("td", { className: "p-1 text-sm border border-blue-gray-500", children: /* @__PURE__ */ jsxDEV61(
                  "select",
                  {
                    className: "text-sm w-full",
                    form: `updateAccessInputForm_${aform.id}`,
                    name: "formId",
                    defaultValue: aform.formId ? aform.formId : "",
                    onChange: () => {
                      document.getElementById(`updateAccessInputFormButton_${aform.id}`).click();
                    },
                    children: inputForms.map((inputForm) => /* @__PURE__ */ jsxDEV61("option", { value: inputForm.id, children: inputForm[`title_${i18n.language}`] }, inputForm.id, !1, {
                      fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
                      lineNumber: 68,
                      columnNumber: 41
                    }, this))
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
                    lineNumber: 57,
                    columnNumber: 33
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
                  lineNumber: 56,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV61("td", { className: "p-1 text-sm border border-blue-gray-500 w-24", children: /* @__PURE__ */ jsxDEV61(
                  "select",
                  {
                    className: "text-sm w-full",
                    form: `updateAccessInputForm_${aform.id}`,
                    name: "accessType",
                    defaultValue: aform.accessType ? aform.accessType : "",
                    onChange: () => {
                      document.getElementById(`updateAccessInputFormButton_${aform.id}`).click();
                    },
                    children: Object.keys(AccessType).map((key) => /* @__PURE__ */ jsxDEV61("option", { value: key, children: key }, key, !1, {
                      fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
                      lineNumber: 85,
                      columnNumber: 75
                    }, this))
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
                    lineNumber: 75,
                    columnNumber: 33
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
                  lineNumber: 74,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV61("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: /* @__PURE__ */ jsxDEV61(ButtonDeleteAccessInputForm, { aform }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
                  lineNumber: 89,
                  columnNumber: 33
                }, this) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
                  lineNumber: 88,
                  columnNumber: 29
                }, this)
              ]
            },
            aform.id,
            !0,
            {
              fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
              lineNumber: 52,
              columnNumber: 25
            },
            this
          )) }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
        lineNumber: 37,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/users/btn_add_ainputform.tsx
import { Form as Form20 } from "@remix-run/react";
import { useTranslation as useTranslation39 } from "react-i18next";
import { jsxDEV as jsxDEV62 } from "react/jsx-dev-runtime";
function ButtonAddAccessInputForm({ roleId }) {
  let { t } = useTranslation39();
  return /* @__PURE__ */ jsxDEV62(Form20, { method: "post", children: [
    /* @__PURE__ */ jsxDEV62("input", { type: "hidden", name: "roleId", value: roleId }, void 0, !1, {
      fileName: "app/components/UI/widgets/users/btn_add_ainputform.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV62(
      CustomButton,
      {
        className: "bg-primary hover:shadow-blue-gray-100",
        type: "submit",
        name: "_action",
        value: "createEmptyAccessInput",
        children: [
          /* @__PURE__ */ jsxDEV62("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV62("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/btn_add_ainputform.tsx",
            lineNumber: 22,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/btn_add_ainputform.tsx",
            lineNumber: 21,
            columnNumber: 17
          }, this),
          t("add")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/users/btn_add_ainputform.tsx",
        lineNumber: 15,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/users/btn_add_ainputform.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/users/btn_add_role.tsx
import { Form as Form21 } from "@remix-run/react";
import { useTranslation as useTranslation40 } from "react-i18next";
import { jsxDEV as jsxDEV63 } from "react/jsx-dev-runtime";
function ButtonAddRole({ count }) {
  let { t } = useTranslation40();
  return /* @__PURE__ */ jsxDEV63(Form21, { method: "post", children: [
    /* @__PURE__ */ jsxDEV63("input", { type: "hidden", name: "cnt", defaultValue: count + 1 }, void 0, !1, {
      fileName: "app/components/UI/widgets/users/btn_add_role.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV63(
      CustomButton,
      {
        className: "bg-primary hover:shadow-primary_shadow",
        type: "submit",
        name: "_action",
        value: "createEmptyRole",
        children: [
          /* @__PURE__ */ jsxDEV63("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV63("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/btn_add_role.tsx",
            lineNumber: 22,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/btn_add_role.tsx",
            lineNumber: 21,
            columnNumber: 17
          }, this),
          t("add")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/users/btn_add_role.tsx",
        lineNumber: 15,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/users/btn_add_role.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/users/btn_add_asearchform.tsx
import { Form as Form22 } from "@remix-run/react";
import { useTranslation as useTranslation41 } from "react-i18next";
import { jsxDEV as jsxDEV64 } from "react/jsx-dev-runtime";
function ButtonAddAccessSearchForm({ roleId }) {
  let { t } = useTranslation41();
  return /* @__PURE__ */ jsxDEV64(Form22, { method: "post", children: [
    /* @__PURE__ */ jsxDEV64("input", { type: "hidden", name: "roleId", value: roleId }, void 0, !1, {
      fileName: "app/components/UI/widgets/users/btn_add_asearchform.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV64(
      CustomButton,
      {
        className: "bg-primary hover:shadow-blue-gray-100",
        type: "submit",
        name: "_action",
        value: "createEmptyAccessSearch",
        children: [
          /* @__PURE__ */ jsxDEV64("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV64("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/btn_add_asearchform.tsx",
            lineNumber: 22,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/btn_add_asearchform.tsx",
            lineNumber: 21,
            columnNumber: 17
          }, this),
          t("add")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/users/btn_add_asearchform.tsx",
        lineNumber: 15,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/users/btn_add_asearchform.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/users/tbl_asearchforms.tsx
import { AccessType as AccessType2 } from "@prisma/client";
import { Form as Form24 } from "@remix-run/react";
import { useTranslation as useTranslation43 } from "react-i18next";

// app/components/UI/widgets/users/btn_delete_asearchform.tsx
import { Form as Form23 } from "@remix-run/react";
import { useTranslation as useTranslation42 } from "react-i18next";
import { jsxDEV as jsxDEV65 } from "react/jsx-dev-runtime";
function ButtonDeleteAccessSearchForm({ aform }) {
  let { t } = useTranslation42(), handleDelete = async (event) => {
    confirm(
      t("confirm_delete")
    ) || event.preventDefault();
  };
  return /* @__PURE__ */ jsxDEV65(Form23, { method: "post", children: [
    /* @__PURE__ */ jsxDEV65("input", { type: "hidden", name: "id", defaultValue: aform.id }, void 0, !1, {
      fileName: "app/components/UI/widgets/users/btn_delete_asearchform.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV65("input", { type: "hidden", name: "roleId", defaultValue: aform.roleId }, void 0, !1, {
      fileName: "app/components/UI/widgets/users/btn_delete_asearchform.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV65(
      CustomButton,
      {
        className: "bg-danger hover:shadow-danger_shadow",
        onClick: handleDelete,
        type: "submit",
        name: "_action",
        value: "deleteAccessSearch",
        children: /* @__PURE__ */ jsxDEV65("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV65("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }, void 0, !1, {
          fileName: "app/components/UI/widgets/users/btn_delete_asearchform.tsx",
          lineNumber: 34,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/users/btn_delete_asearchform.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/users/btn_delete_asearchform.tsx",
        lineNumber: 26,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/users/btn_delete_asearchform.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/users/tbl_asearchforms.tsx
import { Fragment as Fragment11, jsxDEV as jsxDEV66 } from "react/jsx-dev-runtime";
function AccessSearchFormsTable({ aforms, searchForms }) {
  let { i18n, t } = useTranslation43();
  return /* @__PURE__ */ jsxDEV66(Fragment11, { children: [
    aforms && aforms.map((aform) => /* @__PURE__ */ jsxDEV66(
      Form24,
      {
        className: "hidden",
        id: `updateAccessSearchForm_${aform.id}`,
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV66("input", { type: "hidden", name: "id", defaultValue: aform.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
            lineNumber: 25,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV66("input", { type: "hidden", name: "roleId", defaultValue: aform.roleId }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
            lineNumber: 26,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV66("input", { type: "hidden", name: "accessType", defaultValue: AccessType2.READ }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
            lineNumber: 27,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV66(
            CustomButton,
            {
              className: "bg-green-500 hover:shadow-green-100",
              id: `updateAccessSearchFormButton_${aform.id}`,
              form: `updateAccessSearchForm_${aform.id}`,
              type: "submit",
              name: "_action",
              value: "updateAccessSearch"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
              lineNumber: 28,
              columnNumber: 21
            },
            this
          )
        ]
      },
      `updateAccessSearchForm_${aform.id}`,
      !0,
      {
        fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
        lineNumber: 19,
        columnNumber: 17
      },
      this
    )),
    /* @__PURE__ */ jsxDEV66(
      "table",
      {
        className: "w-full",
        children: [
          /* @__PURE__ */ jsxDEV66(
            "thead",
            {
              className: "bg-primary text-white text-center",
              children: /* @__PURE__ */ jsxDEV66("tr", { children: [
                /* @__PURE__ */ jsxDEV66("th", { className: "p-1 text-sm border border-blue-gray-500", children: "#" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
                  lineNumber: 45,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV66("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("form") }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
                  lineNumber: 46,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV66("th", { className: "p-1 text-sm border border-blue-gray-500" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
                  lineNumber: 47,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
                lineNumber: 44,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
              lineNumber: 41,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV66("tbody", { children: aforms.map((aform, index) => /* @__PURE__ */ jsxDEV66(
            "tr",
            {
              children: [
                /* @__PURE__ */ jsxDEV66("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: index + 1 }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
                  lineNumber: 55,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV66("td", { className: "p-1 text-sm border border-blue-gray-500", children: /* @__PURE__ */ jsxDEV66(
                  "select",
                  {
                    className: "text-sm w-full",
                    form: `updateAccessSearchForm_${aform.id}`,
                    name: "formId",
                    defaultValue: aform.formId ? aform.formId : "",
                    onChange: () => {
                      document.getElementById(`updateAccessSearchFormButton_${aform.id}`).click();
                    },
                    children: searchForms.map((searchForm) => /* @__PURE__ */ jsxDEV66("option", { value: searchForm.id, children: searchForm[`title_${i18n.language}`] }, searchForm.id, !1, {
                      fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
                      lineNumber: 68,
                      columnNumber: 41
                    }, this))
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
                    lineNumber: 57,
                    columnNumber: 33
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
                  lineNumber: 56,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV66("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: /* @__PURE__ */ jsxDEV66(ButtonDeleteAccessSearchForm, { aform }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
                  lineNumber: 75,
                  columnNumber: 33
                }, this) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
                  lineNumber: 74,
                  columnNumber: 29
                }, this)
              ]
            },
            aform.id,
            !0,
            {
              fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
              lineNumber: 52,
              columnNumber: 25
            },
            this
          )) }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
        lineNumber: 38,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/users/tbl_users_only_login.tsx
import { useNavigate as useNavigate15 } from "@remix-run/react";
import { useTranslation as useTranslation44 } from "react-i18next";
import { jsxDEV as jsxDEV67 } from "react/jsx-dev-runtime";
function UsersOnlyLoginTable({ users, currentUserId }) {
  let navigate = useNavigate15(), { t } = useTranslation44();
  return /* @__PURE__ */ jsxDEV67(
    "table",
    {
      className: "w-full",
      children: [
        /* @__PURE__ */ jsxDEV67(
          "thead",
          {
            className: "bg-primary text-white text-center",
            children: /* @__PURE__ */ jsxDEV67("tr", { children: [
              /* @__PURE__ */ jsxDEV67("th", { className: "p-1 text-sm border border-blue-gray-500", children: "#" }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
                lineNumber: 22,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV67("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("login") }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
                lineNumber: 23,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
              lineNumber: 21,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
            lineNumber: 18,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV67("tbody", { children: users.map((user, index) => /* @__PURE__ */ jsxDEV67(
          "tr",
          {
            className: user?.id === currentUserId ? "bg-selected hover:cursor-pointer" : " hover:cursor-pointer",
            onClick: () => navigate(`/dashboard/users?state=users_roles&current_user=${user.id}`),
            children: [
              /* @__PURE__ */ jsxDEV67("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: index + 1 }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
                lineNumber: 33,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV67(
                "td",
                {
                  className: "p-1 text-sm border border-blue-gray-500",
                  children: user.login
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
                  lineNumber: 34,
                  columnNumber: 25
                },
                this
              )
            ]
          },
          user.id,
          !0,
          {
            fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
            lineNumber: 28,
            columnNumber: 21
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
      lineNumber: 15,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/widgets/users/tbl_roles_only_title.tsx
import { useTranslation as useTranslation46 } from "react-i18next";

// app/components/UI/widgets/users/btn_delete_userrole.tsx
import { Form as Form25 } from "@remix-run/react";
import { useTranslation as useTranslation45 } from "react-i18next";
import { jsxDEV as jsxDEV68 } from "react/jsx-dev-runtime";
function ButtonDeleteUserRole({ userRoleId, userId }) {
  let { t } = useTranslation45();
  return /* @__PURE__ */ jsxDEV68(Form25, { method: "post", children: [
    /* @__PURE__ */ jsxDEV68("input", { type: "hidden", name: "id", defaultValue: userRoleId }, void 0, !1, {
      fileName: "app/components/UI/widgets/users/btn_delete_userrole.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV68("input", { type: "hidden", name: "userId", defaultValue: userId || "" }, void 0, !1, {
      fileName: "app/components/UI/widgets/users/btn_delete_userrole.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV68(
      CustomButton,
      {
        className: "bg-danger hover:shadow-danger_shadow",
        onClick: async (event) => {
          confirm(
            t("confirm_delete")
          ) || event.preventDefault();
        },
        type: "submit",
        name: "_action",
        value: "deleteUserRole",
        children: /* @__PURE__ */ jsxDEV68("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV68("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }, void 0, !1, {
          fileName: "app/components/UI/widgets/users/btn_delete_userrole.tsx",
          lineNumber: 34,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/UI/widgets/users/btn_delete_userrole.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/users/btn_delete_userrole.tsx",
        lineNumber: 26,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/users/btn_delete_userrole.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/users/tbl_roles_only_title.tsx
import { Form as Form26 } from "@remix-run/react";
import { Fragment as Fragment12, jsxDEV as jsxDEV69 } from "react/jsx-dev-runtime";
function RolesOnlyTitleTable({ userRoles, roles }) {
  let { i18n, t } = useTranslation46();
  return /* @__PURE__ */ jsxDEV69(Fragment12, { children: [
    userRoles && userRoles.map((ur) => /* @__PURE__ */ jsxDEV69(
      Form26,
      {
        className: "hidden",
        id: `updateUserRole_${ur.id}`,
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV69("input", { type: "hidden", name: "id", defaultValue: ur.id }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
            lineNumber: 23,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV69("input", { type: "hidden", name: "userId", defaultValue: ur.userId ? ur.userId : "" }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
            lineNumber: 24,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV69(
            "input",
            {
              type: "submit",
              id: `updateUserRoleButton_${ur.id}`,
              form: `updateUserRole_${ur.id}`,
              name: "_action",
              value: "updateUserRole"
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
              lineNumber: 25,
              columnNumber: 21
            },
            this
          )
        ]
      },
      `updateUserRole_${ur.id}`,
      !0,
      {
        fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
        lineNumber: 17,
        columnNumber: 17
      },
      this
    )),
    /* @__PURE__ */ jsxDEV69(
      "table",
      {
        className: "w-full",
        children: [
          /* @__PURE__ */ jsxDEV69(
            "thead",
            {
              className: "bg-primary text-white text-center",
              children: /* @__PURE__ */ jsxDEV69("tr", { children: [
                /* @__PURE__ */ jsxDEV69("th", { className: "p-1 text-sm border border-blue-gray-500", children: "#" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
                  lineNumber: 41,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV69("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("title") }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
                  lineNumber: 42,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV69("th", { className: "p-1 text-sm border border-blue-gray-500" }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
                  lineNumber: 43,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
                lineNumber: 40,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
              lineNumber: 37,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV69("tbody", { children: userRoles.map((ur, index) => /* @__PURE__ */ jsxDEV69(
            "tr",
            {
              children: [
                /* @__PURE__ */ jsxDEV69("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: index + 1 }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
                  lineNumber: 51,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV69(
                  "td",
                  {
                    className: "p-1 text-sm border border-blue-gray-500",
                    children: /* @__PURE__ */ jsxDEV69(
                      "select",
                      {
                        className: "text-sm w-full",
                        form: `updateUserRole_${ur.id}`,
                        name: "roleId",
                        defaultValue: ur.roleId ? ur.roleId : "",
                        onChange: () => {
                          document.getElementById(`updateUserRoleButton_${ur.id}`).click();
                        },
                        children: roles.map((role) => /* @__PURE__ */ jsxDEV69("option", { value: role.id, children: role[`title_${i18n.language}`] }, role.id, !1, {
                          fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
                          lineNumber: 66,
                          columnNumber: 41
                        }, this))
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
                        lineNumber: 55,
                        columnNumber: 33
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
                    lineNumber: 52,
                    columnNumber: 29
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV69("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: /* @__PURE__ */ jsxDEV69(ButtonDeleteUserRole, { userRoleId: ur.id, userId: ur.userId }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
                  lineNumber: 73,
                  columnNumber: 33
                }, this) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
                  lineNumber: 72,
                  columnNumber: 29
                }, this)
              ]
            },
            ur.id,
            !0,
            {
              fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
              lineNumber: 48,
              columnNumber: 25
            },
            this
          )) }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
            lineNumber: 46,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
        lineNumber: 34,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/users/btn_add_userrole.tsx
import { Form as Form27 } from "@remix-run/react";
import { useTranslation as useTranslation47 } from "react-i18next";
import { jsxDEV as jsxDEV70 } from "react/jsx-dev-runtime";
function ButtonAddUserRole({ userId }) {
  let { t } = useTranslation47();
  return /* @__PURE__ */ jsxDEV70(Form27, { method: "post", children: [
    /* @__PURE__ */ jsxDEV70("input", { type: "hidden", name: "userId", defaultValue: userId }, void 0, !1, {
      fileName: "app/components/UI/widgets/users/btn_add_userrole.tsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV70(
      CustomButton,
      {
        className: "bg-primary hover:shadow-primary_shadow",
        type: "submit",
        name: "_action",
        value: "createEmptyUserRole",
        children: [
          /* @__PURE__ */ jsxDEV70("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsxDEV70("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/btn_add_userrole.tsx",
            lineNumber: 22,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/users/btn_add_userrole.tsx",
            lineNumber: 21,
            columnNumber: 17
          }, this),
          t("add")
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/users/btn_add_userrole.tsx",
        lineNumber: 15,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/users/btn_add_userrole.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/users/view.tsx
import { jsxDEV as jsxDEV71 } from "react/jsx-dev-runtime";
var { Tab, TabPanel, Tabs, TabsBody, TabsHeader } = MaterialTailwind7;
function UsersView({
  state,
  role,
  roles,
  isNewUser,
  user,
  users,
  departments,
  inputForms,
  searchForms,
  accessInputForms,
  accessSearchForms,
  currentUserId,
  userRoles,
  errors
}) {
  let { t } = useTranslation48();
  return /* @__PURE__ */ jsxDEV71("div", { className: "mx-1 flex flex-col gap-3 h-[calc(100vh-5rem)]", children: [
    /* @__PURE__ */ jsxDEV71(ErrorMessage, { errors }, void 0, !1, {
      fileName: "app/components/UI/widgets/users/view.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV71(
      UserDialog,
      {
        isNew: isNewUser,
        user,
        departments,
        errors
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/users/view.tsx",
        lineNumber: 59,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV71(Panel, { className: "h-full overflow-auto", children: /* @__PURE__ */ jsxDEV71(Tabs, { value: state || "users", children: [
      /* @__PURE__ */ jsxDEV71(
        TabsHeader,
        {
          placeholder: "",
          children: [
            /* @__PURE__ */ jsxDEV71(
              Tab,
              {
                className: "capitalize text-primary font-bold",
                value: "users",
                placeholder: "",
                children: t("users")
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/users/view.tsx",
                lineNumber: 70,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV71(
              Tab,
              {
                className: "capitalize text-primary font-bold",
                value: "roles",
                placeholder: "",
                children: t("roles")
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/users/view.tsx",
                lineNumber: 77,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ jsxDEV71(
              Tab,
              {
                className: "capitalize text-primary font-bold",
                value: "users-roles",
                placeholder: "",
                children: t("users-roles")
              },
              void 0,
              !1,
              {
                fileName: "app/components/UI/widgets/users/view.tsx",
                lineNumber: 84,
                columnNumber: 25
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/users/view.tsx",
          lineNumber: 67,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ jsxDEV71(
        TabsBody,
        {
          animate: {
            initial: { x: 250 },
            mount: { x: 0 },
            unmount: { x: 250 }
          },
          placeholder: "",
          children: [
            /* @__PURE__ */ jsxDEV71(TabPanel, { className: "p-1", value: "users", children: [
              /* @__PURE__ */ jsxDEV71("div", { className: "mb-2 flex justify-between py-2 px-2 border border-blue-gray-100", children: /* @__PURE__ */ jsxDEV71(
                "div",
                {
                  className: "flex items-center gap-3",
                  children: /* @__PURE__ */ jsxDEV71(ButtonNewUser, {}, void 0, !1, {
                    fileName: "app/components/UI/widgets/users/view.tsx",
                    lineNumber: 105,
                    columnNumber: 37
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/view.tsx",
                  lineNumber: 102,
                  columnNumber: 33
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/UI/widgets/users/view.tsx",
                lineNumber: 101,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ jsxDEV71(
                UsersTable,
                {
                  currentUserId,
                  users,
                  departments
                },
                void 0,
                !1,
                {
                  fileName: "app/components/UI/widgets/users/view.tsx",
                  lineNumber: 108,
                  columnNumber: 29
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 100,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV71(TabPanel, { className: "p-1", value: "users-roles", children: /* @__PURE__ */ jsxDEV71("div", { className: "mt-5 p-1 border flex gap-20", children: [
              /* @__PURE__ */ jsxDEV71("div", { className: "w-1/2 flex flex-col gap-3", children: [
                /* @__PURE__ */ jsxDEV71("h1", { className: "text-bold text-primary", children: t("users") }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/view.tsx",
                  lineNumber: 117,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ jsxDEV71("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV71(
                  UsersOnlyLoginTable,
                  {
                    users,
                    currentUserId
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/view.tsx",
                    lineNumber: 119,
                    columnNumber: 41
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/view.tsx",
                  lineNumber: 118,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/UI/widgets/users/view.tsx",
                lineNumber: 116,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV71("div", { className: "w-1/2 flex flex-col gap-3", children: [
                /* @__PURE__ */ jsxDEV71("h1", { className: "text-bold text-primary", children: t("roles") }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/view.tsx",
                  lineNumber: 126,
                  columnNumber: 37
                }, this),
                currentUserId ? /* @__PURE__ */ jsxDEV71(ButtonAddUserRole, { userId: currentUserId }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/view.tsx",
                  lineNumber: 127,
                  columnNumber: 54
                }, this) : null,
                /* @__PURE__ */ jsxDEV71(
                  RolesOnlyTitleTable,
                  {
                    roles,
                    userRoles
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/view.tsx",
                    lineNumber: 128,
                    columnNumber: 37
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/UI/widgets/users/view.tsx",
                lineNumber: 125,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 115,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 114,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV71(TabPanel, { className: "p-1", value: "roles", children: [
              /* @__PURE__ */ jsxDEV71("div", { className: "mt-5 p-1 border flex flex-col gap-3", children: [
                /* @__PURE__ */ jsxDEV71("h1", { className: "text-bold text-primary", children: t("roles") }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/view.tsx",
                  lineNumber: 137,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ jsxDEV71("div", { children: /* @__PURE__ */ jsxDEV71(ButtonAddRole, { count: roles.length }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/view.tsx",
                  lineNumber: 139,
                  columnNumber: 37
                }, this) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/view.tsx",
                  lineNumber: 138,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ jsxDEV71(RolesTable, { role, roles }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/view.tsx",
                  lineNumber: 141,
                  columnNumber: 33
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/UI/widgets/users/view.tsx",
                lineNumber: 136,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ jsxDEV71("div", { className: "mt-5 p-1 border flex flex-col gap-3", children: [
                /* @__PURE__ */ jsxDEV71("h1", { className: "text-bold text-primary", children: t("access_inputforms") }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/view.tsx",
                  lineNumber: 144,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ jsxDEV71("div", { children: role && /* @__PURE__ */ jsxDEV71(ButtonAddAccessInputForm, { roleId: role.id }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/view.tsx",
                  lineNumber: 146,
                  columnNumber: 46
                }, this) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/view.tsx",
                  lineNumber: 145,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ jsxDEV71(
                  AccessInputFormsTable,
                  {
                    aforms: accessInputForms,
                    inputForms
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/view.tsx",
                    lineNumber: 148,
                    columnNumber: 33
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/UI/widgets/users/view.tsx",
                lineNumber: 143,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ jsxDEV71("div", { className: "mt-5 p-1 border flex flex-col gap-3", children: [
                /* @__PURE__ */ jsxDEV71("h1", { className: "text-bold text-primary", children: t("access_searchforms") }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/view.tsx",
                  lineNumber: 154,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ jsxDEV71("div", { children: role && /* @__PURE__ */ jsxDEV71(ButtonAddAccessSearchForm, { roleId: role.id }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/view.tsx",
                  lineNumber: 156,
                  columnNumber: 46
                }, this) }, void 0, !1, {
                  fileName: "app/components/UI/widgets/users/view.tsx",
                  lineNumber: 155,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ jsxDEV71(
                  AccessSearchFormsTable,
                  {
                    aforms: accessSearchForms,
                    searchForms
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/UI/widgets/users/view.tsx",
                    lineNumber: 158,
                    columnNumber: 33
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/UI/widgets/users/view.tsx",
                lineNumber: 153,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 135,
              columnNumber: 25
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/UI/widgets/users/view.tsx",
          lineNumber: 92,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/UI/widgets/users/view.tsx",
      lineNumber: 66,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/UI/widgets/users/view.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/users/view.tsx",
    lineNumber: 57,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard.users.tsx
import { jsxDEV as jsxDEV72 } from "react/jsx-dev-runtime";
async function loader6({
  request
}) {
  let roles = await api_default.users.getRoles(), users = await api_default.users.getUsers(), departments = await api_default.users.getDepartments(), inputForms = await api_default.db.getInputForms(), searchForms = await api_default.db.getSearchForms(), url = new URL(request.url), state = url.searchParams.get("state"), roleId = url.searchParams.get("roleId"), userId = url.searchParams.get("userId"), isNewUser = url.searchParams.get("new_user"), currenUserId = url.searchParams.get("current_user"), user;
  isNewUser ? user = {} : userId && (user = await api_default.users.getUser(Number(userId)), user = { ...user, password: void 0 });
  let role, accessInputForms = [], accessSearchForms = [];
  roleId && (role = await api_default.users.getRole(Number(roleId)), accessInputForms = await api_default.users.getAccessInputForms(Number(roleId)), accessSearchForms = await api_default.users.getAccessSearchForms(Number(roleId)));
  let userRoles = [];
  return currenUserId && (userRoles = await api_default.users.getUserRoles(Number(currenUserId))), json6({
    state,
    role,
    roles,
    isNewUser,
    user,
    users,
    departments,
    inputForms,
    searchForms,
    accessInputForms,
    accessSearchForms,
    currenUserId,
    userRoles
  });
}
async function action5({
  request
}) {
  let errors = null, formData = await request.formData(), { _action, ...values } = Object.fromEntries(formData);
  if (_action === "createUser") {
    let createUser = {
      id: Number(values.id),
      isActive: Boolean(values.isActive),
      login: String(values.login),
      password: String(values.password),
      firstName: String(values.firstName),
      lastName: String(values.lastName),
      middleName: String(values.middleName),
      departmentId: Number(values.departmentId),
      expiredPwd: new Date(String(values.expiredPwd)),
      createdAt: null,
      updatedAt: null
    };
    try {
      return await api_default.users.createUser(createUser), redirect4("/dashboard/users");
    } catch (e) {
      e instanceof Prisma5.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  if (_action === "updateUser") {
    let userId = Number(values.id), updateUser = {
      id: Number(values.id),
      isActive: Boolean(values.isActive),
      login: String(values.login),
      password: String(values.password),
      firstName: String(values.firstName),
      lastName: String(values.lastName),
      middleName: String(values.middleName),
      departmentId: Number(values.departmentId),
      expiredPwd: new Date(String(values.expiredPwd)),
      createdAt: null,
      updatedAt: null
    };
    try {
      return await api_default.users.updateUser(userId, updateUser), redirect4("/dashboard/users");
    } catch (e) {
      e instanceof Prisma5.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  if (_action === "deleteUser") {
    let userId = Number(values.id);
    try {
      return await api_default.users.deleteUser(userId), redirect4("/dashboard/users");
    } catch (e) {
      e instanceof Prisma5.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  if (_action === "createEmptyRole")
    try {
      return await api_default.users.createEmptyRole(Number(values.cnt)), redirect4("/dashboard/users");
    } catch (e) {
      e instanceof Prisma5.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateRole") {
    let roleId = Number(values.id), updateRole = {
      id: Number(values.id),
      title_kk: String(values.title_kk),
      title_ru: String(values.title_ru)
    };
    try {
      return await api_default.users.updateRole(roleId, updateRole), redirect4("/dashboard/users");
    } catch (e) {
      e instanceof Prisma5.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  if (_action === "deleteRole") {
    let roleId = Number(values.id);
    try {
      return await api_default.users.deleteRole(roleId), redirect4("/dashboard/users");
    } catch (e) {
      e instanceof Prisma5.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  if (_action === "createEmptyAccessInput")
    try {
      return await api_default.users.createEmptyAccessInputForm(Number(values.roleId)), redirect4(`/dashboard/users?state=roles&roleId=${values.roleId}`);
    } catch (e) {
      e instanceof Prisma5.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateAccessInput") {
    let aformId = Number(values.id), updateAccessInput = {
      id: Number(values.id),
      roleId: Number(values.roleId),
      formId: Number(values.formId),
      accessType: String(values.accessType)
    };
    try {
      return await api_default.users.updateAccessInputForm(aformId, updateAccessInput), redirect4(`/dashboard/users?state=roles&roleId=${values.roleId}`);
    } catch (e) {
      e instanceof Prisma5.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  if (_action === "deleteAccessInput") {
    let aformId = Number(values.id);
    try {
      return await api_default.users.deleteAccessInputForm(aformId), redirect4(`/dashboard/users?state=roles&roleId=${values.roleId}`);
    } catch (e) {
      e instanceof Prisma5.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  if (_action === "createEmptyAccessSearch")
    try {
      return await api_default.users.createEmptyAccessSearchForm(Number(values.roleId)), redirect4(`/dashboard/users?state=roles&roleId=${values.roleId}`);
    } catch (e) {
      e instanceof Prisma5.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateAccessSearch") {
    let aformId = Number(values.id), updateAccessSearch = {
      id: Number(values.id),
      roleId: Number(values.roleId),
      formId: Number(values.formId),
      accessType: String(values.accessType)
    };
    try {
      return await api_default.users.updateAccessSearchForm(aformId, updateAccessSearch), redirect4(`/dashboard/users?state=roles&roleId=${values.roleId}`);
    } catch (e) {
      e instanceof Prisma5.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  if (_action === "deleteAccessSearch") {
    let aformId = Number(values.id);
    try {
      return await api_default.users.deleteAccessSearchForm(aformId), redirect4(`/dashboard/users?state=roles&roleId=${values.roleId}`);
    } catch (e) {
      e instanceof Prisma5.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  if (_action === "createEmptyUserRole")
    try {
      return await api_default.users.createEmptyUserRole(Number(values.userId)), redirect4(`/dashboard/users?state=users_roles&current_user=${values.userId}`);
    } catch (e) {
      e instanceof Prisma5.PrismaClientKnownRequestError && (errors = e.message);
    }
  if (_action === "updateUserRole") {
    let userRoleId = Number(values.id), updateUserRole = {
      id: Number(values.id),
      userId: Number(values.userId),
      roleId: Number(values.roleId)
    };
    try {
      return await api_default.users.updateUserRole(userRoleId, updateUserRole), redirect4(`/dashboard/users?state=roles&current_user=${values.userId}`);
    } catch (e) {
      e instanceof Prisma5.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  if (_action === "deleteUserRole") {
    let userRoleId = Number(values.id);
    try {
      return await api_default.users.deleteUserRole(userRoleId), redirect4(`/dashboard/users?state=users_roles&current_user=${values.userId}`);
    } catch (e) {
      e instanceof Prisma5.PrismaClientKnownRequestError && (errors = e.message);
    }
  }
  return json6({ errors });
}
function Users() {
  let {
    state,
    role,
    roles,
    isNewUser,
    user,
    users,
    departments,
    inputForms,
    searchForms,
    accessInputForms,
    accessSearchForms,
    currenUserId,
    userRoles
  } = useLoaderData6(), data = useActionData5();
  return /* @__PURE__ */ jsxDEV72(
    UsersView,
    {
      state,
      roles,
      role,
      isNewUser: !!isNewUser,
      user,
      users,
      departments,
      inputForms,
      searchForms,
      accessInputForms,
      accessSearchForms,
      currentUserId: Number(currenUserId),
      userRoles,
      errors: data?.errors ? data.errors : void 0
    },
    void 0,
    !1,
    {
      fileName: "app/routes/dashboard.users.tsx",
      lineNumber: 293,
      columnNumber: 9
    },
    this
  );
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard,
  loader: () => loader7
});
import { json as json7, useLoaderData as useLoaderData7 } from "@remix-run/react";
import { useEffect as useEffect4, useState as useState8 } from "react";
import {
  NewspaperIcon,
  UsersIcon,
  CircleStackIcon,
  BookOpenIcon
} from "@heroicons/react/24/solid";
import { useTranslation as useTranslation51 } from "react-i18next";

// app/components/UI/widgets/dashboard/view.tsx
import { Outlet as Outlet2 } from "@remix-run/react";

// app/components/UI/widgets/dashboard/menu/main_menu.tsx
import MaterialTailwind10 from "@material-tailwind/react";

// app/components/UI/elements/logo.tsx
import { Link as Link3 } from "@remix-run/react";
import { jsxDEV as jsxDEV73 } from "react/jsx-dev-runtime";
var Logo = () => /* @__PURE__ */ jsxDEV73(Link3, { to: "/dashboard", className: "flex gap-3", children: [
  /* @__PURE__ */ jsxDEV73(
    "img",
    {
      className: "h-14 object-cover object-center",
      src: "/logo.png",
      alt: "logo"
    },
    void 0,
    !1,
    {
      fileName: "app/components/UI/elements/logo.tsx",
      lineNumber: 6,
      columnNumber: 13
    },
    this
  ),
  /* @__PURE__ */ jsxDEV73("span", { className: "font-bold text-lg self-center text-primary text-bold h-4", children: "Db Creator" }, void 0, !1, {
    fileName: "app/components/UI/elements/logo.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/components/UI/elements/logo.tsx",
  lineNumber: 5,
  columnNumber: 9
}, this), logo_default = Logo;

// app/components/UI/widgets/dashboard/menu/nav_list.tsx
import MaterialTailwind9 from "@material-tailwind/react";

// app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx
import MaterialTailwind8 from "@material-tailwind/react";
import { Fragment as Fragment13, createElement, useState as useState7 } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link as Link4 } from "@remix-run/react";
import { jsxDEV as jsxDEV74 } from "react/jsx-dev-runtime";
var {
  Collapse,
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} = MaterialTailwind8;
function NavListMenu({ menuTitle, navListMenuItems }) {
  let [isMenuOpen, setIsMenuOpen] = useState7(!1), [isMobileMenuOpen, setIsMobileMenuOpen] = useState7(!1), renderItems = navListMenuItems.map(
    ({ icon, title, link }, key) => /* @__PURE__ */ jsxDEV74("div", { children: /* @__PURE__ */ jsxDEV74(
      MenuItem,
      {
        placeholder: "",
        className: "flex items-center gap-3 rounded-lg",
        children: [
          /* @__PURE__ */ jsxDEV74("div", { className: "flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ", children: [
            " ",
            createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-primary w-6"
            })
          ] }, void 0, !0, {
            fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
            lineNumber: 34,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV74("div", { children: /* @__PURE__ */ jsxDEV74(
            Typography,
            {
              className: "flex items-center text-sm font-bold text-primary",
              variant: "h6",
              placeholder: "",
              children: /* @__PURE__ */ jsxDEV74(Link4, { to: link, children: title }, void 0, !1, {
                fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
                lineNumber: 47,
                columnNumber: 29
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
              lineNumber: 42,
              columnNumber: 25
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
            lineNumber: 41,
            columnNumber: 21
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
        lineNumber: 30,
        columnNumber: 17
      },
      this
    ) }, key, !1, {
      fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this)
  );
  return /* @__PURE__ */ jsxDEV74(Fragment13, { children: [
    /* @__PURE__ */ jsxDEV74(
      Menu,
      {
        open: isMenuOpen,
        handler: setIsMenuOpen,
        offset: { mainAxis: 20 },
        placement: "bottom",
        children: [
          /* @__PURE__ */ jsxDEV74(MenuHandler, { children: /* @__PURE__ */ jsxDEV74(
            Typography,
            {
              className: "font-medium",
              as: "div",
              variant: "small",
              placeholder: "",
              children: /* @__PURE__ */ jsxDEV74(
                ListItem,
                {
                  className: "flex items-center gap-2 py-2 pr-4 font-bold text-primary h-6",
                  selected: isMenuOpen || isMobileMenuOpen,
                  onClick: () => setIsMobileMenuOpen((cur) => !cur),
                  placeholder: "",
                  children: [
                    menuTitle,
                    /* @__PURE__ */ jsxDEV74(
                      ChevronDownIcon,
                      {
                        strokeWidth: 2.5,
                        className: `hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""}`
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
                        lineNumber: 77,
                        columnNumber: 29
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV74(
                      ChevronDownIcon,
                      {
                        strokeWidth: 2.5,
                        className: `block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""}`
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
                        lineNumber: 82,
                        columnNumber: 29
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
                  lineNumber: 70,
                  columnNumber: 25
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
              lineNumber: 64,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
            lineNumber: 63,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV74(
            MenuList,
            {
              className: "hidden max-w-screen-xl rounded-xl lg:block",
              placeholder: "",
              children: /* @__PURE__ */ jsxDEV74("ul", { className: "flex flex-col gap-y-2 outline-none outline-0", children: renderItems }, void 0, !1, {
                fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
                lineNumber: 94,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
              lineNumber: 90,
              columnNumber: 17
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
        lineNumber: 57,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV74("div", { className: "block lg:hidden", children: /* @__PURE__ */ jsxDEV74(Collapse, { open: isMobileMenuOpen, children: renderItems }, void 0, !1, {
      fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
      lineNumber: 100,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
      lineNumber: 99,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/dashboard/menu/nav_list_menu.tsx",
    lineNumber: 56,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/dashboard/menu/nav_list.tsx
import { useTranslation as useTranslation49 } from "react-i18next";
import { jsxDEV as jsxDEV75 } from "react/jsx-dev-runtime";
var { List } = MaterialTailwind9;
function NavList({
  editDataMenuItems,
  searchDataMenuItems,
  serviceMenuItems
}) {
  let { t } = useTranslation49();
  return /* @__PURE__ */ jsxDEV75(
    List,
    {
      className: "mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1",
      placeholder: "",
      children: [
        /* @__PURE__ */ jsxDEV75(
          NavListMenu,
          {
            menuTitle: t("edit_data"),
            navListMenuItems: editDataMenuItems
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/dashboard/menu/nav_list.tsx",
            lineNumber: 25,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV75(
          NavListMenu,
          {
            menuTitle: t("search_data"),
            navListMenuItems: searchDataMenuItems
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/dashboard/menu/nav_list.tsx",
            lineNumber: 29,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV75(
          NavListMenu,
          {
            menuTitle: t("service"),
            navListMenuItems: serviceMenuItems
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/dashboard/menu/nav_list.tsx",
            lineNumber: 33,
            columnNumber: 13
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/dashboard/menu/nav_list.tsx",
      lineNumber: 21,
      columnNumber: 9
    },
    this
  );
}

// app/components/UI/elements/language.tsx
import { useTranslation as useTranslation50 } from "react-i18next";
import { jsxDEV as jsxDEV76 } from "react/jsx-dev-runtime";
function LanguagePanel() {
  let { i18n } = useTranslation50();
  return /* @__PURE__ */ jsxDEV76("div", { className: "flex flex-row justify-center items-center gap-4 font-bold", children: [
    {
      title: "KAZ",
      label: "kk"
    },
    {
      title: "RUS",
      label: "ru"
    }
  ].map((item, index) => /* @__PURE__ */ jsxDEV76(
    "span",
    {
      className: `${i18n.language === item.label ? "bg-primary text-white" : "border border-primary"} p-1 text-sm rounded-md hover:cursor-pointer`,
      onClick: () => i18n.changeLanguage(item.label),
      children: item.title
    },
    index,
    !1,
    {
      fileName: "app/components/UI/elements/language.tsx",
      lineNumber: 20,
      columnNumber: 17
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/UI/elements/language.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/dashboard/menu/main_menu.tsx
import {
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { jsxDEV as jsxDEV77 } from "react/jsx-dev-runtime";
var {
  IconButton,
  Collapse: Collapse2
} = MaterialTailwind10;
function MainMenu({
  openNav,
  setOpenNav,
  editDataMenuItems,
  searchDataMenuItems,
  serviceMenuItems
}) {
  return /* @__PURE__ */ jsxDEV77("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV77(
    "div",
    {
      className: "w-full px-4 bg-white shadow shadow-blue-gray-500 mb-2",
      children: [
        /* @__PURE__ */ jsxDEV77("div", { className: "w-full flex items-center justify-between text-blue-gray-900", children: [
          /* @__PURE__ */ jsxDEV77("div", { className: "shrink-0 h-16", children: /* @__PURE__ */ jsxDEV77(logo_default, {}, void 0, !1, {
            fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
            lineNumber: 38,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
            lineNumber: 37,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV77("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxDEV77(
            NavList,
            {
              editDataMenuItems,
              searchDataMenuItems,
              serviceMenuItems
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
              lineNumber: 41,
              columnNumber: 25
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
            lineNumber: 40,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV77(
            IconButton,
            {
              variant: "text",
              color: "blue-gray",
              className: "lg:hidden",
              onClick: () => setOpenNav(!openNav),
              placeholder: "",
              children: openNav ? /* @__PURE__ */ jsxDEV77(XMarkIcon, { className: "h-6 w-6", strokeWidth: 2 }, void 0, !1, {
                fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
                lineNumber: 55,
                columnNumber: 29
              }, this) : /* @__PURE__ */ jsxDEV77(Bars3Icon, { className: "h-6 w-6", strokeWidth: 2 }, void 0, !1, {
                fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
                lineNumber: 57,
                columnNumber: 29
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
              lineNumber: 47,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ jsxDEV77(LanguagePanel, {}, void 0, !1, {
            fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
            lineNumber: 60,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
          lineNumber: 36,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV77(Collapse2, { open: openNav, children: /* @__PURE__ */ jsxDEV77(
          NavList,
          {
            editDataMenuItems,
            searchDataMenuItems,
            serviceMenuItems
          },
          void 0,
          !1,
          {
            fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
            lineNumber: 63,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
          lineNumber: 62,
          columnNumber: 17
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
      lineNumber: 32,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/UI/widgets/dashboard/menu/main_menu.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

// app/components/UI/widgets/dashboard/view.tsx
import { jsxDEV as jsxDEV78 } from "react/jsx-dev-runtime";
function DashboardView({
  openNav,
  setOpenNav,
  editDataMenuItems,
  searchDataMenuItems,
  serviceMenuItems,
  context
}) {
  return /* @__PURE__ */ jsxDEV78("div", { className: "w-full h-screen", children: [
    /* @__PURE__ */ jsxDEV78(
      MainMenu,
      {
        openNav,
        setOpenNav,
        editDataMenuItems,
        searchDataMenuItems,
        serviceMenuItems
      },
      void 0,
      !1,
      {
        fileName: "app/components/UI/widgets/dashboard/view.tsx",
        lineNumber: 24,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV78("div", { className: "overflow-y-auto h-[calc(100vh-5rem)]", children: /* @__PURE__ */ jsxDEV78(Outlet2, { context }, void 0, !1, {
      fileName: "app/components/UI/widgets/dashboard/view.tsx",
      lineNumber: 32,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/UI/widgets/dashboard/view.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UI/widgets/dashboard/view.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard.tsx
import { jsxDEV as jsxDEV79 } from "react/jsx-dev-runtime";
async function loader7() {
  let dictionaries = await api_default.db.getDictionaries(), inputForms = await api_default.db.getInputForms(), searchForms = await api_default.db.getSearchForms();
  return json7({
    dictionaries,
    inputForms,
    searchForms
  });
}
function dashboard() {
  let { i18n, t } = useTranslation51(), data = useLoaderData7(), [docs, setDocs] = useState8({}), [current, setCurrent] = useState8(0), [conditions, setConditions] = useState8([]), context = {
    ...data,
    docs,
    setDocs,
    current,
    setCurrent,
    conditions,
    setConditions
  }, [openNav, setOpenNav] = useState8(!1), editDataMenuItems = data.inputForms.map((item) => ({
    title: item[`title_${i18n.language}`],
    link: `/dashboard/enter_data/${item.id}`,
    icon: NewspaperIcon
  })), searchDataMenuItems = data.searchForms.map((item) => ({
    title: item[`title_${i18n.language}`],
    link: `/dashboard/search_data/${item.id}`,
    icon: NewspaperIcon
  })), serviceMenuItems = [
    {
      title: t("menu_db_structure"),
      link: "db_struct",
      icon: CircleStackIcon
    },
    {
      title: t("menu_db_users"),
      link: "users",
      icon: UsersIcon
    },
    {
      title: t("menu_dictionaries"),
      link: "dictionaries",
      icon: BookOpenIcon
    }
  ];
  return useEffect4(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(!1)
    );
  }, []), /* @__PURE__ */ jsxDEV79(
    DashboardView,
    {
      openNav,
      setOpenNav,
      editDataMenuItems,
      searchDataMenuItems,
      serviceMenuItems,
      context
    },
    void 0,
    !1,
    {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 88,
      columnNumber: 9
    },
    this
  );
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import { Link as Link5 } from "@remix-run/react";
import { jsxDEV as jsxDEV80 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV80("div", { children: /* @__PURE__ */ jsxDEV80(Link5, { to: "/dashboard", children: "Dashboard" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-QR2IZ3WB.js", imports: ["/build/_shared/chunk-OAPPX4FA.js", "/build/_shared/chunk-Z46RVADL.js", "/build/_shared/chunk-AX7SAOSU.js", "/build/_shared/chunk-7PHB3BFD.js", "/build/_shared/chunk-FQWAC4DA.js", "/build/_shared/chunk-SOESSFXD.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-WEAPBHQG.js", "/build/_shared/chunk-CJ4MY3PQ.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-V23H7CSP.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-JCFTVRU3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-VQRACQF4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard.db_struct": { id: "routes/dashboard.db_struct", parentId: "routes/dashboard", path: "db_struct", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.db_struct-QZEH5X42.js", imports: ["/build/_shared/chunk-KJDVWT2A.js", "/build/_shared/chunk-RAAIBPHZ.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard.dictionaries": { id: "routes/dashboard.dictionaries", parentId: "routes/dashboard", path: "dictionaries", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.dictionaries-3KN53QRW.js", imports: ["/build/_shared/chunk-RAAIBPHZ.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard.enter_data.$formId": { id: "routes/dashboard.enter_data.$formId", parentId: "routes/dashboard", path: "enter_data/:formId", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.enter_data.$formId-5RTYHYYB.js", imports: ["/build/_shared/chunk-255ORAUR.js", "/build/_shared/chunk-KJDVWT2A.js", "/build/_shared/chunk-RAAIBPHZ.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard.search_data.$formId": { id: "routes/dashboard.search_data.$formId", parentId: "routes/dashboard", path: "search_data/:formId", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.search_data.$formId-N5TB5HSY.js", imports: ["/build/_shared/chunk-KJDVWT2A.js", "/build/_shared/chunk-RAAIBPHZ.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard.users": { id: "routes/dashboard.users", parentId: "routes/dashboard", path: "users", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.users-BMBLX4PO.js", imports: ["/build/_shared/chunk-255ORAUR.js", "/build/_shared/chunk-KJDVWT2A.js", "/build/_shared/chunk-RAAIBPHZ.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "9507dc88", hmr: { runtime: "/build/_shared/chunk-SOESSFXD.js", timestamp: 1710846922601 }, url: "/build/manifest-9507DC88.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard.search_data.$formId": {
    id: "routes/dashboard.search_data.$formId",
    parentId: "routes/dashboard",
    path: "search_data/:formId",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_search_data_formId_exports
  },
  "routes/dashboard.enter_data.$formId": {
    id: "routes/dashboard.enter_data.$formId",
    parentId: "routes/dashboard",
    path: "enter_data/:formId",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_enter_data_formId_exports
  },
  "routes/dashboard.dictionaries": {
    id: "routes/dashboard.dictionaries",
    parentId: "routes/dashboard",
    path: "dictionaries",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_dictionaries_exports
  },
  "routes/dashboard.db_struct": {
    id: "routes/dashboard.db_struct",
    parentId: "routes/dashboard",
    path: "db_struct",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_db_struct_exports
  },
  "routes/dashboard.users": {
    id: "routes/dashboard.users",
    parentId: "routes/dashboard",
    path: "users",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_users_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
