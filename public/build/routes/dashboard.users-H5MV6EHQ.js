import {
  CustomSelect,
  require_moment
} from "/build/_shared/chunk-MXYI6LSU.js";
import {
  CustomInput
} from "/build/_shared/chunk-KJDVWT2A.js";
import {
  CustomButton,
  ErrorMessage,
  Panel,
  require_index_browser,
  require_node
} from "/build/_shared/chunk-RAAIBPHZ.js";
import {
  require_react as require_react2
} from "/build/_shared/chunk-Z46RVADL.js";
import {
  useTranslation
} from "/build/_shared/chunk-AX7SAOSU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-FQWAC4DA.js";
import {
  createHotContext
} from "/build/_shared/chunk-SOESSFXD.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-WEAPBHQG.js";
import {
  require_react
} from "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/dashboard.users.tsx
var import_node = __toESM(require_node(), 1);

// app/components/UI/widgets/users/dlg_user.tsx
var import_react = __toESM(require_react2(), 1);
var import_moment = __toESM(require_moment(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/dlg_user.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/dlg_user.tsx"
  );
  import.meta.hot.lastModified = "1710331139876.001";
}
var {
  Dialog,
  Card,
  CardBody,
  CardFooter
} = import_react.default;
function UserDialog({
  isNew,
  user,
  departments,
  errors
}) {
  _s();
  const {
    i18n,
    t
  } = useTranslation();
  const [open, setOpen] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => {
    setOpen(user ? true : false);
  }, [user]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { placeholder: "", size: "sm", open, handler: () => setOpen(false), className: "bg-transparent shadow-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mx-auto w-full", placeholder: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardBody, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: "userForm", className: "flex flex-col gap-3", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: user?.id ? user.id : "" }, void 0, false, {
          fileName: "app/components/UI/widgets/users/dlg_user.tsx",
          lineNumber: 55,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { id: "user_is_active", type: "checkbox", name: "isActive", title: t("is_active"), defaultChecked: user?.isActive }, void 0, false, {
          fileName: "app/components/UI/widgets/users/dlg_user.tsx",
          lineNumber: 56,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { id: "user_login", type: "text", name: "login", title: t("login"), defaultValue: user?.login, required: true, readOnly: !isNew, size: 45 }, void 0, false, {
          fileName: "app/components/UI/widgets/users/dlg_user.tsx",
          lineNumber: 57,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { id: "user_password", type: "password", name: "password", title: t("password"), defaultValue: user?.password, required: false, size: 45 }, void 0, false, {
          fileName: "app/components/UI/widgets/users/dlg_user.tsx",
          lineNumber: 58,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { id: "user_firsName", type: "text", name: "firstName", title: t("first_name"), defaultValue: user?.firstName ? user.firstName : "", required: false, size: 45 }, void 0, false, {
          fileName: "app/components/UI/widgets/users/dlg_user.tsx",
          lineNumber: 59,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { id: "user_lastName", type: "text", name: "lastName", title: t("last_name"), defaultValue: user?.lastName ? user.lastName : "", required: false, size: 45 }, void 0, false, {
          fileName: "app/components/UI/widgets/users/dlg_user.tsx",
          lineNumber: 60,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { id: "user_middleName", type: "text", name: "middleName", title: t("middle_name"), defaultValue: user?.middleName ? user.middleName : "", required: false, size: 45 }, void 0, false, {
          fileName: "app/components/UI/widgets/users/dlg_user.tsx",
          lineNumber: 61,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomSelect, { id: "user_department", name: "departmentId", title: t("department"), defaultValue: user?.departmentId ? user.departmentId : "", required: false, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "-" }, void 0, false, {
            fileName: "app/components/UI/widgets/users/dlg_user.tsx",
            lineNumber: 63,
            columnNumber: 29
          }, this),
          departments.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: item.id, children: item[`title_${i18n.language}`] }, void 0, false, {
            fileName: "app/components/UI/widgets/users/dlg_user.tsx",
            lineNumber: 64,
            columnNumber: 54
          }, this))
        ] }, void 0, true, {
          fileName: "app/components/UI/widgets/users/dlg_user.tsx",
          lineNumber: 62,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { id: "user_expiredPwd", type: "date", name: "expiredPwd", title: t("expired_password"), defaultValue: (0, import_moment.default)(user?.expiredPwd).format("YYYY-MM-DD"), required: true, size: 45 }, void 0, false, {
          fileName: "app/components/UI/widgets/users/dlg_user.tsx",
          lineNumber: 66,
          columnNumber: 25
        }, this)
      ] }, user?.id, true, {
        fileName: "app/components/UI/widgets/users/dlg_user.tsx",
        lineNumber: 54,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500 text-sm", children: errors }, void 0, false, {
        fileName: "app/components/UI/widgets/users/dlg_user.tsx",
        lineNumber: 68,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/users/dlg_user.tsx",
      lineNumber: 53,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardFooter, { className: "pt-0 flex flex-row gap-3 justify-center", placeholder: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-primary hover:shadow-primary_shadow", form: "userForm", type: "submit", name: "_action", value: isNew ? "createUser" : "updateUser", children: t("save") }, void 0, false, {
        fileName: "app/components/UI/widgets/users/dlg_user.tsx",
        lineNumber: 71,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-primary hover:shadow-primary_shadow", onClick: () => setOpen(false), children: t("close") }, void 0, false, {
        fileName: "app/components/UI/widgets/users/dlg_user.tsx",
        lineNumber: 74,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/users/dlg_user.tsx",
      lineNumber: 70,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/dlg_user.tsx",
    lineNumber: 52,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/UI/widgets/users/dlg_user.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
_s(UserDialog, "fkoagGwCabd9KhwTM9eG2tS/77g=", false, function() {
  return [useTranslation];
});
_c = UserDialog;
var _c;
$RefreshReg$(_c, "UserDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/btn_new_user.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/btn_new_user.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/btn_new_user.tsx"
  );
  import.meta.hot.lastModified = "1710231100568.955";
}
function ButtonNewUser() {
  _s2();
  const navigate = useNavigate();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: "bg-primary hover:shadow-blue-gray-100", onClick: () => navigate("/dashboard/users?new_user=True"), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_new_user.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_new_user.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    t("new_user")
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/btn_new_user.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_s2(ButtonNewUser, "GK/KaWFRYoH2IJJH58+SEoGCCyc=", false, function() {
  return [useNavigate, useTranslation];
});
_c2 = ButtonNewUser;
var _c2;
$RefreshReg$(_c2, "ButtonNewUser");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/tbl_users.tsx
var import_moment2 = __toESM(require_moment(), 1);

// app/components/UI/widgets/users/btn_delete_user.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/btn_delete_user.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/btn_delete_user.tsx"
  );
  import.meta.hot.lastModified = "1710238597897.079";
}
function ButtonDeleteUser({
  userId
}) {
  _s3();
  const {
    t
  } = useTranslation();
  const handleDelete = async (event) => {
    const response = confirm(t("confirm_delete"));
    if (!response) {
      event.preventDefault();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: userId }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_user.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "bg-danger hover:shadow-danger_shadow", onClick: handleDelete, type: "submit", name: "_action", value: "deleteUser", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_user.tsx",
      lineNumber: 42,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_user.tsx",
      lineNumber: 41,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_user.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/btn_delete_user.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s3(ButtonDeleteUser, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c3 = ButtonDeleteUser;
var _c3;
$RefreshReg$(_c3, "ButtonDeleteUser");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/btn_edit_user.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/btn_edit_user.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/btn_edit_user.tsx"
  );
  import.meta.hot.lastModified = "1710238678078.705";
}
function ButtonEditUser({
  userId
}) {
  _s4();
  const navigate = useNavigate();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CustomButton, { className: "bg-primary hover:shadow-blue-gray-100", onClick: () => navigate(`/dashboard/users?state=users&userId=${userId}`), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" }, void 0, false, {
    fileName: "app/components/UI/widgets/users/btn_edit_user.tsx",
    lineNumber: 35,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/UI/widgets/users/btn_edit_user.tsx",
    lineNumber: 34,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/UI/widgets/users/btn_edit_user.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s4(ButtonEditUser, "GK/KaWFRYoH2IJJH58+SEoGCCyc=", false, function() {
  return [useNavigate, useTranslation];
});
_c4 = ButtonEditUser;
var _c4;
$RefreshReg$(_c4, "ButtonEditUser");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/tbl_users.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/tbl_users.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/tbl_users.tsx"
  );
  import.meta.hot.lastModified = "1710238211356.216";
}
function UsersTable({
  currentUserId,
  users,
  departments
}) {
  _s5();
  const navigate = useNavigate();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("table", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("thead", { className: "bg-primary text-white text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: "#" }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 40,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("is_active") }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 41,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("login") }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 42,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("first_name") }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 43,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("last_name") }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("middle_name") }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 45,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("department") }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 46,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("expired_password") }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 47,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("created") }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 48,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("updated") }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 49,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500" }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500" }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 51,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/users/tbl_users.tsx",
      lineNumber: 39,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/users/tbl_users.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tbody", { children: users.map((user, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { className: user?.id === currentUserId ? "bg-selected hover:cursor-pointer" : " hover:cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`), children: index + 1 }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 56,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`), children: user.isActive ? t("active") : t("not_active") }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 57,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`), children: user.login }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 60,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`), children: user.firstName }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 63,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`), children: user.lastName }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 66,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`), children: user.middleName }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 69,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`), children: departments.find((item) => item.id === user.departmentId)?.title }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 72,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`), children: (0, import_moment2.default)(user.expiredPwd).format("DD.MM.YYYY") }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 75,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`), children: (0, import_moment2.default)(user.createdAt).format("DD.MM.YYYY H:m:s") }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 78,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", onClick: () => navigate(`/dashboard/users?state=users&current_user=${user.id}`), children: (0, import_moment2.default)(user.updatedAt).format("DD.MM.YYYY H:m:s") }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 81,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ButtonEditUser, { userId: user.id }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 85,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 84,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ButtonDeleteUser, { userId: user.id }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 88,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users.tsx",
        lineNumber: 87,
        columnNumber: 25
      }, this)
    ] }, user.id, true, {
      fileName: "app/components/UI/widgets/users/tbl_users.tsx",
      lineNumber: 55,
      columnNumber: 45
    }, this)) }, void 0, false, {
      fileName: "app/components/UI/widgets/users/tbl_users.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/tbl_users.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s5(UsersTable, "GK/KaWFRYoH2IJJH58+SEoGCCyc=", false, function() {
  return [useNavigate, useTranslation];
});
_c5 = UsersTable;
var _c5;
$RefreshReg$(_c5, "UsersTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/view.tsx
var import_react21 = __toESM(require_react2(), 1);

// app/components/UI/widgets/users/btn_delete_role.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/btn_delete_role.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/btn_delete_role.tsx"
  );
  import.meta.hot.lastModified = "1710238595541.048";
}
function ButtonDeleteRole({
  roleId
}) {
  _s6();
  const {
    t
  } = useTranslation();
  const handleDelete = async (event) => {
    const response = confirm(t("confirm_delete"));
    if (!response) {
      event.preventDefault();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: roleId }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_role.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CustomButton, { className: "bg-danger hover:shadow-danger_shadow", onClick: handleDelete, type: "submit", name: "_action", value: "deleteRole", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_role.tsx",
      lineNumber: 42,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_role.tsx",
      lineNumber: 41,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_role.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/btn_delete_role.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s6(ButtonDeleteRole, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c6 = ButtonDeleteRole;
var _c6;
$RefreshReg$(_c6, "ButtonDeleteRole");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/tbl_roles.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/tbl_roles.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s7 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/tbl_roles.tsx"
  );
  import.meta.hot.lastModified = "1710246361755.381";
}
function RolesTable({
  role,
  roles
}) {
  _s7();
  const navigate = useNavigate();
  const {
    i18n,
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    roles.map((role2) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Form, { method: "post", className: "hidden", id: `updateRoleForm_${role2.id}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: role2.id }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
        lineNumber: 37,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { id: `updateRoleButton_${role2.id}`, type: "submit", name: "_action", value: "updateRole" }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this)
    ] }, role2.id, true, {
      fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
      lineNumber: 36,
      columnNumber: 32
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("table", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("thead", { className: "bg-primary text-white text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: "#" }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
          lineNumber: 43,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("title_kk") }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
          lineNumber: 44,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("title_ru") }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
          lineNumber: 45,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500" }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
        lineNumber: 42,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("tbody", { children: roles.map((rl, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("tr", { className: role?.id === rl.id ? "bg-selected hover:cursor-pointer" : "hover:cursor-pointer", onClick: () => navigate(`/dashboard/users?state=roles&roleId=${rl.id}`), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: index + 1 }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
          lineNumber: 51,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500 hover:cursor-pointer hover:underline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { className: "text-sm w-full focus:outline-none p-1 text-black", form: `updateRoleForm_${rl.id}`, type: "text", name: "title_kk", defaultValue: rl.title_kk, maxLength: 45, onChange: () => {
          const button = document.getElementById(`updateRoleButton_${rl.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
          lineNumber: 53,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
          lineNumber: 52,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500 hover:cursor-pointer hover:underline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { className: "text-sm w-full focus:outline-none p-1 text-black", form: `updateRoleForm_${rl.id}`, type: "text", name: "title_ru", defaultValue: rl.title_ru, maxLength: 45, onChange: () => {
          const button = document.getElementById(`updateRoleButton_${rl.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
          lineNumber: 59,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
          lineNumber: 58,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ButtonDeleteRole, { roleId: rl.id }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
          lineNumber: 65,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
          lineNumber: 64,
          columnNumber: 29
        }, this)
      ] }, rl.id, true, {
        fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
        lineNumber: 50,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/tbl_roles.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s7(RolesTable, "S/mlWsZTmnR3pBaV4+wWlnjauYg=", false, function() {
  return [useNavigate, useTranslation];
});
_c7 = RolesTable;
var _c7;
$RefreshReg$(_c7, "RolesTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/tbl_ainputforms.tsx
var import_client = __toESM(require_index_browser(), 1);

// app/components/UI/widgets/users/btn_delete_ainputform.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/btn_delete_ainputform.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s8 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/btn_delete_ainputform.tsx"
  );
  import.meta.hot.lastModified = "1710238593029.015";
}
function ButtonDeleteAccessInputForm({
  aform
}) {
  _s8();
  const {
    t
  } = useTranslation();
  const handleDelete = async (event) => {
    const response = confirm(t("confirm_delete"));
    if (!response) {
      event.preventDefault();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: aform.id }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_ainputform.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "roleId", defaultValue: aform.roleId }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_ainputform.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CustomButton, { className: "bg-danger hover:shadow-danger_shadow", onClick: handleDelete, type: "submit", name: "_action", value: "deleteAccessInput", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_ainputform.tsx",
      lineNumber: 43,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_ainputform.tsx",
      lineNumber: 42,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_ainputform.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/btn_delete_ainputform.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s8(ButtonDeleteAccessInputForm, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c8 = ButtonDeleteAccessInputForm;
var _c8;
$RefreshReg$(_c8, "ButtonDeleteAccessInputForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/tbl_ainputforms.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/tbl_ainputforms.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s9 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/tbl_ainputforms.tsx"
  );
  import.meta.hot.lastModified = "1710246544750.794";
}
function AccessInputFormsTable({
  aforms,
  inputForms
}) {
  _s9();
  const {
    i18n,
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    aforms && aforms.map((aform) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Form, { className: "hidden", id: `updateAccessInputForm_${aform.id}`, method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: aform.id }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "roleId", defaultValue: aform.roleId }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
        lineNumber: 39,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CustomButton, { className: "bg-green-500 hover:shadow-green-100", id: `updateAccessInputFormButton_${aform.id}`, form: `updateAccessInputForm_${aform.id}`, type: "submit", name: "_action", value: "updateAccessInput" }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
        lineNumber: 40,
        columnNumber: 21
      }, this)
    ] }, `updateAccessInputForm_${aform.id}`, true, {
      fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
      lineNumber: 37,
      columnNumber: 44
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("table", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("thead", { className: "bg-primary text-white text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: "#" }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
          lineNumber: 45,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("form") }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("access_type") }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
          lineNumber: 47,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500" }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
          lineNumber: 48,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("tbody", { children: aforms.map((aform, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: index + 1 }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
          lineNumber: 53,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("select", { className: "text-sm w-full", form: `updateAccessInputForm_${aform.id}`, name: "formId", defaultValue: aform.formId ? aform.formId : "", onChange: () => {
          const button = document.getElementById(`updateAccessInputFormButton_${aform.id}`);
          button.click();
        }, children: inputForms.map((inputForm) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: inputForm.id, children: inputForm[`title_${i18n.language}`] }, inputForm.id, false, {
          fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
          lineNumber: 59,
          columnNumber: 66
        }, this)) }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
          lineNumber: 55,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
          lineNumber: 54,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500 w-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("select", { className: "text-sm w-full", form: `updateAccessInputForm_${aform.id}`, name: "accessType", defaultValue: aform.accessType ? aform.accessType : "", onChange: () => {
          const button = document.getElementById(`updateAccessInputFormButton_${aform.id}`);
          button.click();
        }, children: Object.keys(import_client.AccessType).map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: key, children: key }, key, false, {
          fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
          lineNumber: 69,
          columnNumber: 73
        }, this)) }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
          lineNumber: 65,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
          lineNumber: 64,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ButtonDeleteAccessInputForm, { aform }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
          lineNumber: 73,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
          lineNumber: 72,
          columnNumber: 29
        }, this)
      ] }, aform.id, true, {
        fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
        lineNumber: 52,
        columnNumber: 51
      }, this)) }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/tbl_ainputforms.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s9(AccessInputFormsTable, "tesxYUfym1EdybWre/Q68xlYjtY=", false, function() {
  return [useTranslation];
});
_c9 = AccessInputFormsTable;
var _c9;
$RefreshReg$(_c9, "AccessInputFormsTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/btn_add_ainputform.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/btn_add_ainputform.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s10 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/btn_add_ainputform.tsx"
  );
  import.meta.hot.lastModified = "1710226579995.721";
}
function ButtonAddAccessInputForm({
  roleId
}) {
  _s10();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "roleId", value: roleId }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_add_ainputform.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CustomButton, { className: "bg-primary hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "createEmptyAccessInput", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
        fileName: "app/components/UI/widgets/users/btn_add_ainputform.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/users/btn_add_ainputform.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      t("add")
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/users/btn_add_ainputform.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/btn_add_ainputform.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s10(ButtonAddAccessInputForm, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c10 = ButtonAddAccessInputForm;
var _c10;
$RefreshReg$(_c10, "ButtonAddAccessInputForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/btn_add_role.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/btn_add_role.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s11 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/btn_add_role.tsx"
  );
  import.meta.hot.lastModified = "1710226856464.462";
}
function ButtonAddRole({
  count
}) {
  _s11();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "cnt", defaultValue: count + 1 }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_add_role.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CustomButton, { className: "bg-primary hover:shadow-primary_shadow", type: "submit", name: "_action", value: "createEmptyRole", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
        fileName: "app/components/UI/widgets/users/btn_add_role.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/users/btn_add_role.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      t("add")
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/users/btn_add_role.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/btn_add_role.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s11(ButtonAddRole, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c11 = ButtonAddRole;
var _c11;
$RefreshReg$(_c11, "ButtonAddRole");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/btn_add_asearchform.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/btn_add_asearchform.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s12 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/btn_add_asearchform.tsx"
  );
  import.meta.hot.lastModified = "1710228484440.997";
}
function ButtonAddAccessSearchForm({
  roleId
}) {
  _s12();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "hidden", name: "roleId", value: roleId }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_add_asearchform.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(CustomButton, { className: "bg-primary hover:shadow-blue-gray-100", type: "submit", name: "_action", value: "createEmptyAccessSearch", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
        fileName: "app/components/UI/widgets/users/btn_add_asearchform.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/users/btn_add_asearchform.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      t("add")
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/users/btn_add_asearchform.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/btn_add_asearchform.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s12(ButtonAddAccessSearchForm, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c12 = ButtonAddAccessSearchForm;
var _c12;
$RefreshReg$(_c12, "ButtonAddAccessSearchForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/tbl_asearchforms.tsx
var import_client2 = __toESM(require_index_browser(), 1);

// app/components/UI/widgets/users/btn_delete_asearchform.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/btn_delete_asearchform.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s13 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/btn_delete_asearchform.tsx"
  );
  import.meta.hot.lastModified = "1710238594453.033";
}
function ButtonDeleteAccessSearchForm({
  aform
}) {
  _s13();
  const {
    t
  } = useTranslation();
  const handleDelete = async (event) => {
    const response = confirm(t("confirm_delete"));
    if (!response) {
      event.preventDefault();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: aform.id }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_asearchform.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "hidden", name: "roleId", defaultValue: aform.roleId }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_asearchform.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(CustomButton, { className: "bg-danger hover:shadow-danger_shadow", onClick: handleDelete, type: "submit", name: "_action", value: "deleteAccessSearch", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_asearchform.tsx",
      lineNumber: 43,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_asearchform.tsx",
      lineNumber: 42,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_asearchform.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/btn_delete_asearchform.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s13(ButtonDeleteAccessSearchForm, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c13 = ButtonDeleteAccessSearchForm;
var _c13;
$RefreshReg$(_c13, "ButtonDeleteAccessSearchForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/tbl_asearchforms.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/tbl_asearchforms.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s14 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/tbl_asearchforms.tsx"
  );
  import.meta.hot.lastModified = "1710246584903.56";
}
function AccessSearchFormsTable({
  aforms,
  searchForms
}) {
  _s14();
  const {
    i18n,
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
    aforms && aforms.map((aform) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Form, { className: "hidden", id: `updateAccessSearchForm_${aform.id}`, method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: aform.id }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "hidden", name: "roleId", defaultValue: aform.roleId }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
        lineNumber: 39,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "hidden", name: "accessType", defaultValue: import_client2.AccessType.READ }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
        lineNumber: 40,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(CustomButton, { className: "bg-green-500 hover:shadow-green-100", id: `updateAccessSearchFormButton_${aform.id}`, form: `updateAccessSearchForm_${aform.id}`, type: "submit", name: "_action", value: "updateAccessSearch" }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
        lineNumber: 41,
        columnNumber: 21
      }, this)
    ] }, `updateAccessSearchForm_${aform.id}`, true, {
      fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
      lineNumber: 37,
      columnNumber: 44
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("table", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("thead", { className: "bg-primary text-white text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: "#" }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("form") }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
          lineNumber: 47,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500" }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
          lineNumber: 48,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
        lineNumber: 45,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("tbody", { children: aforms.map((aform, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: index + 1 }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
          lineNumber: 53,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("select", { className: "text-sm w-full", form: `updateAccessSearchForm_${aform.id}`, name: "formId", defaultValue: aform.formId ? aform.formId : "", onChange: () => {
          const button = document.getElementById(`updateAccessSearchFormButton_${aform.id}`);
          button.click();
        }, children: searchForms.map((searchForm) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("option", { value: searchForm.id, children: searchForm[`title_${i18n.language}`] }, searchForm.id, false, {
          fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
          lineNumber: 59,
          columnNumber: 68
        }, this)) }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
          lineNumber: 55,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
          lineNumber: 54,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(ButtonDeleteAccessSearchForm, { aform }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
          lineNumber: 65,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
          lineNumber: 64,
          columnNumber: 29
        }, this)
      ] }, aform.id, true, {
        fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
        lineNumber: 52,
        columnNumber: 51
      }, this)) }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/tbl_asearchforms.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s14(AccessSearchFormsTable, "tesxYUfym1EdybWre/Q68xlYjtY=", false, function() {
  return [useTranslation];
});
_c14 = AccessSearchFormsTable;
var _c14;
$RefreshReg$(_c14, "AccessSearchFormsTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/tbl_users_only_login.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/tbl_users_only_login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s15 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/tbl_users_only_login.tsx"
  );
  import.meta.hot.lastModified = "1710238263032.832";
}
function UsersOnlyLoginTable({
  users,
  currentUserId
}) {
  _s15();
  const navigate = useNavigate();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("table", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("thead", { className: "bg-primary text-white text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: "#" }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("login") }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
        lineNumber: 37,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
      lineNumber: 35,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("tbody", { children: users.map((user, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("tr", { className: user?.id === currentUserId ? "bg-selected hover:cursor-pointer" : " hover:cursor-pointer", onClick: () => navigate(`/dashboard/users?state=users_roles&current_user=${user.id}`), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: index + 1 }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
        lineNumber: 42,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", children: user.login }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
        lineNumber: 43,
        columnNumber: 25
      }, this)
    ] }, user.id, true, {
      fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
      lineNumber: 41,
      columnNumber: 45
    }, this)) }, void 0, false, {
      fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/tbl_users_only_login.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s15(UsersOnlyLoginTable, "GK/KaWFRYoH2IJJH58+SEoGCCyc=", false, function() {
  return [useNavigate, useTranslation];
});
_c15 = UsersOnlyLoginTable;
var _c15;
$RefreshReg$(_c15, "UsersOnlyLoginTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/btn_delete_userrole.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/btn_delete_userrole.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s16 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/btn_delete_userrole.tsx"
  );
  import.meta.hot.lastModified = "1710238603865.158";
}
function ButtonDeleteUserRole({
  userRoleId,
  userId
}) {
  _s16();
  const {
    t
  } = useTranslation();
  const handleDelete = async (event) => {
    const response = confirm(t("confirm_delete"));
    if (!response) {
      event.preventDefault();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: userRoleId }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_userrole.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { type: "hidden", name: "userId", defaultValue: userId ? userId : "" }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_userrole.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(CustomButton, { className: "bg-danger hover:shadow-danger_shadow", onClick: handleDelete, type: "submit", name: "_action", value: "deleteUserRole", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_userrole.tsx",
      lineNumber: 44,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_userrole.tsx",
      lineNumber: 43,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_delete_userrole.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/btn_delete_userrole.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s16(ButtonDeleteUserRole, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c16 = ButtonDeleteUserRole;
var _c16;
$RefreshReg$(_c16, "ButtonDeleteUserRole");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/tbl_roles_only_title.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/tbl_roles_only_title.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s17 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/tbl_roles_only_title.tsx"
  );
  import.meta.hot.lastModified = "1710246644748.71";
}
function RolesOnlyTitleTable({
  userRoles,
  roles
}) {
  _s17();
  const {
    i18n,
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    userRoles && userRoles.map((ur) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Form, { className: "hidden", id: `updateUserRole_${ur.id}`, method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: ur.id }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { type: "hidden", name: "userId", defaultValue: ur.userId ? ur.userId : "" }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
        lineNumber: 37,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { type: "submit", id: `updateUserRoleButton_${ur.id}`, form: `updateUserRole_${ur.id}`, name: "_action", value: "updateUserRole" }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this)
    ] }, `updateUserRole_${ur.id}`, true, {
      fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
      lineNumber: 35,
      columnNumber: 47
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("table", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("thead", { className: "bg-primary text-white text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: "#" }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
          lineNumber: 43,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("title") }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
          lineNumber: 44,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500" }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
          lineNumber: 45,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
        lineNumber: 42,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("tbody", { children: userRoles.map((ur, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: index + 1 }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
          lineNumber: 50,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("select", { className: "text-sm w-full", form: `updateUserRole_${ur.id}`, name: "roleId", defaultValue: ur.roleId ? ur.roleId : "", onChange: () => {
          const button = document.getElementById(`updateUserRoleButton_${ur.id}`);
          button.click();
        }, children: roles.map((role) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("option", { value: role.id, children: role[`title_${i18n.language}`] }, role.id, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
          lineNumber: 56,
          columnNumber: 56
        }, this)) }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
          lineNumber: 52,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
          lineNumber: 51,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(ButtonDeleteUserRole, { userRoleId: ur.id, userId: ur.userId }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
          lineNumber: 62,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
          lineNumber: 61,
          columnNumber: 29
        }, this)
      ] }, ur.id, true, {
        fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
        lineNumber: 49,
        columnNumber: 51
      }, this)) }, void 0, false, {
        fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/tbl_roles_only_title.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s17(RolesOnlyTitleTable, "tesxYUfym1EdybWre/Q68xlYjtY=", false, function() {
  return [useTranslation];
});
_c17 = RolesOnlyTitleTable;
var _c17;
$RefreshReg$(_c17, "RolesOnlyTitleTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/btn_add_userrole.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/btn_add_userrole.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s18 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/btn_add_userrole.tsx"
  );
  import.meta.hot.lastModified = "1710233282688.666";
}
function ButtonAddUserRole({
  userId
}) {
  _s18();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { type: "hidden", name: "userId", defaultValue: userId }, void 0, false, {
      fileName: "app/components/UI/widgets/users/btn_add_userrole.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(CustomButton, { className: "bg-primary hover:shadow-primary_shadow", type: "submit", name: "_action", value: "createEmptyUserRole", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
        fileName: "app/components/UI/widgets/users/btn_add_userrole.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/users/btn_add_userrole.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      t("add")
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/users/btn_add_userrole.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/btn_add_userrole.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s18(ButtonAddUserRole, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c18 = ButtonAddUserRole;
var _c18;
$RefreshReg$(_c18, "ButtonAddUserRole");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/users/view.tsx
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/users/view.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s19 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/users/view.tsx"
  );
  import.meta.hot.lastModified = "1710238390874.407";
}
var {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader
} = import_react21.default;
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
  _s19();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mx-1 flex flex-col gap-3 h-[calc(100vh-5rem)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ErrorMessage, { errors }, void 0, false, {
      fileName: "app/components/UI/widgets/users/view.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(UserDialog, { isNew: isNewUser, user, departments, errors }, void 0, false, {
      fileName: "app/components/UI/widgets/users/view.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Panel, { className: "h-full overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Tabs, { value: state ? state : "users", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TabsHeader, { placeholder: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Tab, { className: "capitalize text-primary font-bold", value: "users", placeholder: "", children: t("users") }, void 0, false, {
          fileName: "app/components/UI/widgets/users/view.tsx",
          lineNumber: 71,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Tab, { className: "capitalize text-primary font-bold", value: "roles", placeholder: "", children: t("roles") }, void 0, false, {
          fileName: "app/components/UI/widgets/users/view.tsx",
          lineNumber: 74,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Tab, { className: "capitalize text-primary font-bold", value: "users-roles", placeholder: "", children: t("users-roles") }, void 0, false, {
          fileName: "app/components/UI/widgets/users/view.tsx",
          lineNumber: 77,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/users/view.tsx",
        lineNumber: 70,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TabsBody, { animate: {
        initial: {
          x: 250
        },
        mount: {
          x: 0
        },
        unmount: {
          x: 250
        }
      }, placeholder: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TabPanel, { className: "p-1", value: "users", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mb-2 flex justify-between py-2 px-2 border border-blue-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ButtonNewUser, {}, void 0, false, {
            fileName: "app/components/UI/widgets/users/view.tsx",
            lineNumber: 95,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/UI/widgets/users/view.tsx",
            lineNumber: 94,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/UI/widgets/users/view.tsx",
            lineNumber: 93,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(UsersTable, { currentUserId, users, departments }, void 0, false, {
            fileName: "app/components/UI/widgets/users/view.tsx",
            lineNumber: 98,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/UI/widgets/users/view.tsx",
          lineNumber: 92,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TabPanel, { className: "p-1", value: "users-roles", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-5 p-1 border flex gap-20", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "w-1/2 flex flex-col gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "text-bold text-primary", children: t("users") }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 103,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(UsersOnlyLoginTable, { users, currentUserId }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 105,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 104,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/UI/widgets/users/view.tsx",
            lineNumber: 102,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "w-1/2 flex flex-col gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "text-bold text-primary", children: t("roles") }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 109,
              columnNumber: 37
            }, this),
            currentUserId ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ButtonAddUserRole, { userId: currentUserId }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 110,
              columnNumber: 54
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(RolesOnlyTitleTable, { roles, userRoles }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 111,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/UI/widgets/users/view.tsx",
            lineNumber: 108,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/UI/widgets/users/view.tsx",
          lineNumber: 101,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/users/view.tsx",
          lineNumber: 100,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(TabPanel, { className: "p-1", value: "roles", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-5 p-1 border flex flex-col gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "text-bold text-primary", children: t("roles") }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 117,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ButtonAddRole, { count: roles.length }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 119,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 118,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(RolesTable, { role, roles }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 121,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/UI/widgets/users/view.tsx",
            lineNumber: 116,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-5 p-1 border flex flex-col gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "text-bold text-primary", children: t("access_inputforms") }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 124,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: role && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ButtonAddAccessInputForm, { roleId: role.id }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 126,
              columnNumber: 46
            }, this) }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 125,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(AccessInputFormsTable, { aforms: accessInputForms, inputForms }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 128,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/UI/widgets/users/view.tsx",
            lineNumber: 123,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-5 p-1 border flex flex-col gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "text-bold text-primary", children: t("access_searchforms") }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 131,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: role && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ButtonAddAccessSearchForm, { roleId: role.id }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 133,
              columnNumber: 46
            }, this) }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 132,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(AccessSearchFormsTable, { aforms: accessSearchForms, searchForms }, void 0, false, {
              fileName: "app/components/UI/widgets/users/view.tsx",
              lineNumber: 135,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/UI/widgets/users/view.tsx",
            lineNumber: 130,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/UI/widgets/users/view.tsx",
          lineNumber: 115,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/users/view.tsx",
        lineNumber: 81,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/users/view.tsx",
      lineNumber: 69,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/users/view.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/users/view.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
}
_s19(UsersView, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c19 = UsersView;
var _c19;
$RefreshReg$(_c19, "UsersView");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.users.tsx
var import_jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.users.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s20 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.users.tsx"
  );
  import.meta.hot.lastModified = "1710246472441.429";
}
function Users() {
  _s20();
  const {
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
  } = useLoaderData();
  const data = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(UsersView, { state, roles, role, isNewUser: isNewUser ? true : false, user, users, departments, inputForms, searchForms, accessInputForms, accessSearchForms, currentUserId: Number(currenUserId), userRoles, errors: data?.errors ? data.errors : void 0 }, void 0, false, {
    fileName: "app/routes/dashboard.users.tsx",
    lineNumber: 318,
    columnNumber: 10
  }, this);
}
_s20(Users, "qvXjFPalKHSWt9TJ+mTH8UosF/w=", false, function() {
  return [useLoaderData, useActionData];
});
_c20 = Users;
var _c20;
$RefreshReg$(_c20, "Users");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Users as default
};
//# sourceMappingURL=/build/routes/dashboard.users-H5MV6EHQ.js.map
