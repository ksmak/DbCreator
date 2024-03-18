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
  useLocation,
  useNavigate,
  useNavigation,
  useOutletContext,
  useSubmit
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

// app/routes/dashboard.enter_data.$formId.tsx
var import_node = __toESM(require_node(), 1);
var import_react14 = __toESM(require_react(), 1);

// app/components/UI/widgets/enter_data/view.tsx
var import_react12 = __toESM(require_react(), 1);

// app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx"
  );
  import.meta.hot.lastModified = "1710333963814.371";
}
function ButtonCancel({
  inputFormId,
  docId
}) {
  _s();
  const {
    t
  } = useTranslation();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { outline: true, className: "hover:shadow-primary_shadow text-primary border-primary", onClick: () => navigate(`/dashboard/enter_data/${inputFormId}?docId=${docId}`), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
      lineNumber: 36,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    t("cancel")
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_cancel.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s(ButtonCancel, "1n6r5eWNKhP/dvqdbLCphpT4ddM=", false, function() {
  return [useTranslation, useNavigate];
});
_c = ButtonCancel;
var _c;
$RefreshReg$(_c, "ButtonCancel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/buttons/btn_create.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/buttons/btn_create.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/buttons/btn_create.tsx"
  );
  import.meta.hot.lastModified = "1710389479632.482";
}
function ButtonCreate({
  inputFormId
}) {
  _s2();
  const {
    t
  } = useTranslation();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: "bg-primary hover:shadow-primary_shadow", onClick: () => navigate(`/dashboard/enter_data/${inputFormId}?state=create`), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
      lineNumber: 35,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    t("create")
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_create.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s2(ButtonCreate, "1n6r5eWNKhP/dvqdbLCphpT4ddM=", false, function() {
  return [useTranslation, useNavigate];
});
_c2 = ButtonCreate;
var _c2;
$RefreshReg$(_c2, "ButtonCreate");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/buttons/btn_delete.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/buttons/btn_delete.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx"
  );
  import.meta.hot.lastModified = "1710744853562.776";
}
function ButtonDelete({
  userId,
  inputFormId,
  doc
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputFormId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CustomButton, { className: "bg-red-500 hover:shadow-red-100", onClick: handleDelete, type: "submit", name: "_action", value: "deleteDocument", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
        lineNumber: 46,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      t("delete")
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_delete.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s3(ButtonDelete, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c3 = ButtonDelete;
var _c3;
$RefreshReg$(_c3, "ButtonDelete");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/buttons/btn_edit.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/buttons/btn_edit.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx"
  );
  import.meta.hot.lastModified = "1710735478504.2424";
}
function ButtonEdit({
  inputFormId,
  docId
}) {
  _s4();
  const {
    t
  } = useTranslation();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", onClick: () => navigate(`/dashboard/enter_data/${inputFormId}?state=edit&docId=${docId}`), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
      lineNumber: 36,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    t("edit")
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_edit.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s4(ButtonEdit, "1n6r5eWNKhP/dvqdbLCphpT4ddM=", false, function() {
  return [useTranslation, useNavigate];
});
_c4 = ButtonEdit;
var _c4;
$RefreshReg$(_c4, "ButtonEdit");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/buttons/btn_find.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/buttons/btn_find.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/buttons/btn_find.tsx"
  );
  import.meta.hot.lastModified = "1710740134497.0242";
}
function ButtonFind() {
  _s5();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", form: "documentForm", type: "submit", name: "_action", value: "findDocument", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_find.tsx",
      lineNumber: 31,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_find.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    t("find")
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_find.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s5(ButtonFind, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c5 = ButtonFind;
var _c5;
$RefreshReg$(_c5, "ButtonFind");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/buttons/btn_save.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/buttons/btn_save.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/buttons/btn_save.tsx"
  );
  import.meta.hot.lastModified = "1710587971324.9219";
}
function ButtonSave() {
  _s6();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CustomButton, { className: "bg-primary hover:shadow-primary_shadow", form: "documentForm", type: "submit", name: "_action", value: "saveDocument", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_save.tsx",
      lineNumber: 31,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_save.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    t("save")
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_save.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s6(ButtonSave, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c6 = ButtonSave;
var _c6;
$RefreshReg$(_c6, "ButtonSave");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/buttons/btn_search.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/buttons/btn_search.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s7 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/buttons/btn_search.tsx"
  );
  import.meta.hot.lastModified = "1710333282591.402";
}
function ButtonSearch({
  inputFormId
}) {
  _s7();
  const {
    t
  } = useTranslation();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CustomButton, { className: "bg-primary hover:shadow-primary_shadow", onClick: () => navigate(`/dashboard/enter_data/${inputFormId}?state=search`), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
      lineNumber: 35,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    t("search")
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/buttons/btn_search.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s7(ButtonSearch, "1n6r5eWNKhP/dvqdbLCphpT4ddM=", false, function() {
  return [useTranslation, useNavigate];
});
_c7 = ButtonSearch;
var _c7;
$RefreshReg$(_c7, "ButtonSearch");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/buttons/buttons.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/buttons/buttons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/buttons/buttons.tsx"
  );
  import.meta.hot.lastModified = "1710733553907.5867";
}
function Buttons({
  userId,
  inputFormId,
  state,
  doc
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center gap-3", children: [
    !["create", "edit", "search"].includes(String(state)) ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ButtonCreate, { inputFormId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
      lineNumber: 35,
      columnNumber: 70
    }, this) : null,
    !["create", "edit", "search"].includes(String(state)) ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ButtonSearch, { inputFormId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
      lineNumber: 36,
      columnNumber: 70
    }, this) : null,
    state === "search" ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ButtonFind, {}, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
      lineNumber: 37,
      columnNumber: 35
    }, this) : null,
    doc.id && !["create", "edit"].includes(String(state)) ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ButtonEdit, { inputFormId, docId: doc.id }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
      lineNumber: 38,
      columnNumber: 70
    }, this) : null,
    state === "edit" || state === "create" ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ButtonSave, {}, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
      lineNumber: 39,
      columnNumber: 55
    }, this) : null,
    state === "edit" || state === "search" || state === "create" ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ButtonCancel, { inputFormId, docId: doc.id }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
      lineNumber: 40,
      columnNumber: 77
    }, this) : null,
    doc.id && !["create", "edit"].includes(String(state)) ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ButtonDelete, { userId, inputFormId, doc }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
      lineNumber: 41,
      columnNumber: 70
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/buttons/buttons.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c8 = Buttons;
var _c8;
$RefreshReg$(_c8, "Buttons");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/dlg_find_result.tsx
var import_react6 = __toESM(require_react2(), 1);
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/dlg_find_result.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s8 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/dlg_find_result.tsx"
  );
  import.meta.hot.lastModified = "1710750896309.148";
}
var {
  Dialog,
  Card,
  CardBody,
  CardFooter
} = import_react6.default;
function DialogFindResult({
  open,
  setOpen,
  docs
}) {
  _s8();
  const {
    t
  } = useTranslation();
  const navigate = useNavigate();
  const handleOpenInputForm = () => {
    setOpen(false);
    if (docs && docs.ids?.length) {
      navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[0]}`);
    } else {
      navigate(`/dashboard/enter_data/${docs.formId}?state=search`);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    Dialog,
    {
      placeholder: "",
      size: "xs",
      open,
      className: "bg-transparent shadow-none",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Card, { className: "mx-auto w-full", placeholder: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CardBody, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: docs && docs.ids?.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "font-bold text-lg p-1 text-primary text-center", children: [
          t("find_result"),
          " ",
          docs.ids?.length
        ] }, void 0, true, {
          fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
          lineNumber: 55,
          columnNumber: 49
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-bold p-1", children: t("nothing") }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
          lineNumber: 55,
          columnNumber: 159
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
          lineNumber: 54,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CardFooter, { className: "pt-0 flex flex-row gap-3 justify-center", placeholder: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CustomButton, { className: "bg-primary hover:shadow-primary_shadow w-40", onClick: () => handleOpenInputForm(), children: "OK" }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
          lineNumber: 59,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
          lineNumber: 58,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/UI/widgets/enter_data/dlg_find_result.tsx",
      lineNumber: 50,
      columnNumber: 10
    },
    this
  );
}
_s8(DialogFindResult, "1n6r5eWNKhP/dvqdbLCphpT4ddM=", false, function() {
  return [useTranslation, useNavigate];
});
_c9 = DialogFindResult;
var _c9;
$RefreshReg$(_c9, "DialogFindResult");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx
var import_react9 = __toESM(require_react(), 1);
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s9 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx"
  );
  import.meta.hot.lastModified = "1710750590658.6624";
}
function RecNavigator({
  docs,
  current,
  setCurrent
}) {
  _s9();
  const {
    t
  } = useTranslation();
  const [val, setVal] = (0, import_react9.useState)(current);
  const navigate = useNavigate();
  const handleFirst = () => {
    setVal(0);
    setCurrent(0);
    navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[0]}`);
  };
  const handlePrev = () => {
    if (current > 0) {
      --current;
      setVal(current);
      setCurrent(current);
      navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[current]}`);
    }
  };
  const handleNext = () => {
    const lastIndex = docs.ids.length - 1;
    if (current < lastIndex) {
      ++current;
      setVal(current);
      setCurrent(current);
      navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[current]}`);
    }
  };
  const handleLast = () => {
    const lastIndex = docs.ids.length - 1;
    setVal(lastIndex);
    setCurrent(lastIndex);
    navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[lastIndex]}`);
  };
  const handleSeek = (val2) => {
    if (val2 < 0) {
      val2 = 0;
    }
    if (val2 > docs.ids.length - 1) {
      val2 = docs.ids.length - 1;
    }
    setVal(val2);
    setCurrent(val2);
    navigate(`/dashboard/enter_data/${docs.formId}?docId=${docs.ids[val2]}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: docs && docs.ids ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex gap-1 justify-end items-center text-xs", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-blue-gray-600 font-bold", children: [
      current + 1,
      " / ",
      docs.ids.length
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
      lineNumber: 77,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { className: "ml-1 p-1 text-primary focus:outline-0 w-20 border border-primary rounded", type: "number", max: docs.ids.length, min: 1, value: val + 1, onChange: (e) => setVal(Number(e.target.value) - 1) }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
      lineNumber: 80,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "w-20 text-center border bg-secondary p-1 font-bold text-white rounded", onClick: () => handleSeek(val), children: t("seek") }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
      lineNumber: 81,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "w-8 text-center border bg-secondary p-1 font-bold text-white rounded", onClick: () => handleFirst(), children: "<<" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
      lineNumber: 84,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "w-8 text-center border bg-secondary p-1 font-bold text-white rounded", onClick: () => handlePrev(), children: "<" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
      lineNumber: 87,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "w-8 text-center border bg-secondary p-1 font-bold text-white rounded", onClick: () => handleNext(), children: ">" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
      lineNumber: 90,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "w-8 text-center border bg-secondary p-1 font-bold text-white rounded", onClick: () => handleLast(), children: ">>" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
      lineNumber: 93,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
    lineNumber: 76,
    columnNumber: 33
  }, this) : null }, void 0, false, {
    fileName: "app/components/UI/widgets/enter_data/edit_form/rec_navigator.tsx",
    lineNumber: 75,
    columnNumber: 10
  }, this);
}
_s9(RecNavigator, "8fBEyI2WTmsxmx34svgAPxx7G5w=", false, function() {
  return [useTranslation, useNavigate];
});
_c10 = RecNavigator;
var _c10;
$RefreshReg$(_c10, "RecNavigator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/edit_form/field.tsx
var import_moment = __toESM(require_moment(), 1);
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/edit_form/field.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s10 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/edit_form/field.tsx"
  );
  import.meta.hot.lastModified = "1710742191518.8323";
}
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
  _s10();
  const {
    i18n
  } = useTranslation();
  switch (fieldType) {
    case "TEXT":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fieldTitle, type: "text", name: fieldName, defaultValue: defaultVal, required: fieldRequired, disabled: fieldDisabled, size: fieldLen, maxLength: fieldLen }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
        lineNumber: 45,
        columnNumber: 14
      }, this);
    case "CYRILLIC":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fieldTitle, type: "text", name: fieldName, defaultValue: defaultVal, required: fieldRequired, disabled: fieldDisabled, size: fieldLen, maxLength: fieldLen }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
        lineNumber: 47,
        columnNumber: 14
      }, this);
    case "INTEGER":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fieldTitle, type: "number", name: fieldName, defaultValue: defaultVal, required: fieldRequired, disabled: fieldDisabled, size: fieldLen, maxLength: fieldLen }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
        lineNumber: 49,
        columnNumber: 14
      }, this);
    case "NUMERIC":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fieldTitle, type: "number", step: "0.01", name: fieldName, defaultValue: defaultVal, required: fieldRequired, disabled: fieldDisabled, size: fieldLen, maxLength: fieldLen }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
        lineNumber: 51,
        columnNumber: 14
      }, this);
    case "DICT":
      const dic = dictionaries.find((item) => item.id === fieldDict);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CustomSelect, { className: cls, id: fieldName, title: fieldTitle, name: fieldName, defaultValue: defaultVal, required: fieldRequired, disabled: fieldDisabled, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { children: "-" }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 55,
          columnNumber: 21
        }, this),
        ["create", "edit", "search", "find"].includes(String(state)) ? dic?.data_edit.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: item.id, children: item[`title_${i18n.language}`] }, item.id, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 56,
          columnNumber: 112
        }, this)) : dic?.data_browse.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("option", { value: item.id, children: item[`title_${i18n.language}`] }, item.id, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
          lineNumber: 56,
          columnNumber: 224
        }, this))
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
        lineNumber: 54,
        columnNumber: 14
      }, this);
    case "DATE":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fieldTitle, type: "date", name: fieldName, defaultValue: (0, import_moment.default)(defaultVal, "DD.MM.YYYY").format("YYYY-MM-DD"), required: fieldRequired, disabled: fieldDisabled, size: fieldLen, maxLength: fieldLen }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
        lineNumber: 59,
        columnNumber: 14
      }, this);
    case "TIME":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fieldTitle, type: "time", name: fieldName, defaultValue: defaultVal, required: fieldRequired, disabled: fieldDisabled, size: fieldLen, maxLength: fieldLen }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
        lineNumber: 61,
        columnNumber: 14
      }, this);
    case "FILE":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CustomInput, { className: cls, id: fieldName, title: fieldTitle, type: "file", name: fieldName, defaultValue: "", required: fieldRequired, disabled: fieldDisabled }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/field.tsx",
        lineNumber: 63,
        columnNumber: 14
      }, this);
  }
}
_s10(Field, "iD7vDB/EPQWin5ATG71yacngHuk=", false, function() {
  return [useTranslation];
});
_c11 = Field;
var _c11;
$RefreshReg$(_c11, "Field");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/edit_form/single_group.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/edit_form/single_group.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s11 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/edit_form/single_group.tsx"
  );
  import.meta.hot.lastModified = "1710736571940.2961";
}
function SingleGroup({
  state,
  dictionaries,
  group,
  doc,
  setDoc
}) {
  _s11();
  const {
    i18n
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "border p-1 grid grid-cols-3 gap-1", children: group?.fields && group.fields.map((fld) => {
    let cls = `col-span-${fld.colSpan} col-start-${fld.colStart}`;
    let fieldName = `f${fld.id}`;
    let fieldTitle = fld[`title_${i18n.language}`];
    let fieldLen = fld.len ? fld.len : 30;
    let fieldRequired = fld.isRequire && state === "edit";
    let fieldDisabled = !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state));
    let tableName = `tbl_${fld.groupId}`;
    let val = "";
    if (doc[tableName].length) {
      val = doc[tableName][0][fieldName];
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Field, { cls, state, dictionaries, fieldName: `${tableName}__${fieldName}__0`, fieldType: fld.fieldType, fieldTitle, fieldLen, fieldRequired, fieldDisabled, fieldDict: fld.dicId, defaultVal: val }, fld.id, false, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/single_group.tsx",
      lineNumber: 48,
      columnNumber: 14
    }, this);
  }) }, void 0, false, {
    fileName: "app/components/UI/widgets/enter_data/edit_form/single_group.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s11(SingleGroup, "iD7vDB/EPQWin5ATG71yacngHuk=", false, function() {
  return [useTranslation];
});
_c12 = SingleGroup;
var _c12;
$RefreshReg$(_c12, "SingleGroup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/edit_form/multy_group.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/edit_form/multy_group.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s12 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx"
  );
  import.meta.hot.lastModified = "1710743675745.3887";
}
function MultyGroup({
  state,
  dictionaries,
  group,
  setGroup,
  doc,
  setDoc,
  setRecordIndex
}) {
  _s12();
  const {
    i18n,
    t
  } = useTranslation();
  const handleCreate = (e) => {
    e.preventDefault();
    setRecordIndex(-1);
    setGroup(group);
  };
  const handleDelete = (e, recordIndex) => {
    e.preventDefault();
    const response = confirm(t("confirm_delete"));
    if (response) {
      let d = {
        ...doc
      };
      const tbl = `tbl_${group?.id}`;
      d[tbl].splice([recordIndex], 1);
      setDoc(d);
    }
  };
  const handleEdit = (e, recordIndex) => {
    e.preventDefault();
    setRecordIndex(recordIndex);
    setGroup(group);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "border p-1 flex flex-col gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-2", children: state === "create" || state === "edit" ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(CustomButton, { className: "bg-primary hover:shadow-primary_shadow", onClick: handleCreate, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
        lineNumber: 64,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
        lineNumber: 63,
        columnNumber: 25
      }, this),
      t("add")
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
      lineNumber: 62,
      columnNumber: 59
    }, this) : null }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("table", { className: "border border-blue-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("thead", { className: "bg-primary text-white text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: "#" }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 72,
          columnNumber: 25
        }, this),
        group?.fields && group.fields.map((fld) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: fld[`title_${i18n.language}`] }, fld.id, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 73,
          columnNumber: 67
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700" }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 76,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700" }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 77,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
        lineNumber: 71,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("tbody", { children: doc[`tbl_${group?.id}`].map((record, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700", children: index + 1 }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 82,
          columnNumber: 29
        }, this),
        group?.fields && group.fields.map((fld) => {
          let val = doc[`tbl_${group.id}`][index][`f${fld.id}`];
          if (fld.fieldType === "DICT") {
            let dic = dictionaries.find((item) => item.id === fld.dicId);
            if (dic) {
              let dicVal = dic.data_browse.find((item) => item.id === Number(val));
              if (dicVal) {
                val = dicVal[`title_${i18n.language}`];
              }
            }
          } else if (fld.fieldType === "FILE") {
            val = "";
          }
          return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-700", children: val }, fld.id, false, {
            fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
            lineNumber: 96,
            columnNumber: 20
          }, this);
        }),
        ["edit", "create"].includes(String(state)) ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 w-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(CustomButton, { className: "bg-primary hover:shadow-primary_shadow", onClick: (e) => handleEdit(e, index), children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 103,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 102,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 101,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 100,
          columnNumber: 75
        }, this) : null,
        ["edit", "create"].includes(String(state)) ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-700 w-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(CustomButton, { className: "bg-danger hover:shadow-danger_shadow", onClick: (e) => handleDelete(e, index), children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 110,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 109,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 108,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
          lineNumber: 107,
          columnNumber: 75
        }, this) : null
      ] }, index, true, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
        lineNumber: 81,
        columnNumber: 69
      }, this)) }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
        lineNumber: 80,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/edit_form/multy_group.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s12(MultyGroup, "tesxYUfym1EdybWre/Q68xlYjtY=", false, function() {
  return [useTranslation];
});
_c13 = MultyGroup;
var _c13;
$RefreshReg$(_c13, "MultyGroup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/edit_form/edit_form.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/edit_form/edit_form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s13 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx"
  );
  import.meta.hot.lastModified = "1710744490997.3008";
}
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
  _s13();
  const {
    i18n
  } = useTranslation();
  const location = useLocation();
  const submit = useSubmit();
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    formData.append("_action", e.nativeEvent.submitter.value);
    inputForm?.groups.forEach((group) => {
      let tableName = `tbl_${group.id}`;
      formData.append(`${tableName}__count`, doc[tableName].length);
      if (group.isMulty) {
        for (let i = 0; i < doc[tableName].length; i++) {
          group.fields.forEach((fld) => {
            let fieldName = `f${fld.id}`;
            let r = `${tableName}__${fieldName}__${i}`;
            formData.append(r, doc[tableName][i][fieldName]);
          });
        }
      }
    });
    console.log(Object.fromEntries(formData));
    submit(formData, {
      method: "post",
      encType: "multipart/form-data"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("form", { id: "documentForm", method: "post", ref: formRef, onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "hidden", name: "_user", value: userId }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
      lineNumber: 68,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "hidden", name: "_inputFormId", value: inputForm.id }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
      lineNumber: 69,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "hidden", name: "_id", value: doc.id ? doc.id : "" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
      lineNumber: 70,
      columnNumber: 17
    }, this),
    inputForm?.groups && inputForm.groups.map((group) => {
      let groupTitle = group[`title_${i18n.language}`];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "col-span-3 bg-primary text-white font-bold text-sm p-1 pl-4", children: groupTitle }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
          lineNumber: 74,
          columnNumber: 29
        }, this),
        !group.isMulty ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(SingleGroup, { state, dictionaries, group, doc, setDoc }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
          lineNumber: 77,
          columnNumber: 47
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(MultyGroup, { state, dictionaries, group, setGroup, doc, setDoc, setRecordIndex }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
          lineNumber: 77,
          columnNumber: 147
        }, this)
      ] }, group.id, true, {
        fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
        lineNumber: 73,
        columnNumber: 16
      }, this);
    })
  ] }, location.key, true, {
    fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
    lineNumber: 67,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/UI/widgets/enter_data/edit_form/edit_form.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_s13(EditForm, "dIKqo6G1QC1MneMYUcVvuznTrYI=", false, function() {
  return [useTranslation, useLocation, useSubmit];
});
_c14 = EditForm;
var _c14;
$RefreshReg$(_c14, "EditForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/dlg_multy_group.tsx
var import_react11 = __toESM(require_react2(), 1);
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/dlg_multy_group.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s14 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/dlg_multy_group.tsx"
  );
  import.meta.hot.lastModified = "1710742981520.8042";
}
var {
  Dialog: Dialog2,
  Card: Card2,
  CardBody: CardBody2,
  CardFooter: CardFooter2
} = import_react11.default;
function DialogMultyGroup({
  state,
  group,
  setGroup,
  dictionaries,
  doc,
  setDoc,
  recordIndex
}) {
  _s14();
  const {
    i18n,
    t
  } = useTranslation();
  const handleClose = (e) => {
    e.preventDefault();
    setGroup(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (group) {
      let formData = new FormData(e.currentTarget);
      let values = Object.fromEntries(formData);
      let d = {
        ...doc
      };
      if (recordIndex >= 0) {
        d[`tbl_${group.id}`][recordIndex] = {
          ...values
        };
      } else {
        d[`tbl_${group.id}`].push({
          ...values
        });
      }
      setDoc(d);
      setGroup(null);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Dialog2, { placeholder: "", size: "lg", open: group ? true : false, handler: () => setGroup(null), className: "bg-transparent shadow-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Card2, { className: "mx-auto w-full", placeholder: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CardBody2, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("form", { id: "groupForm", method: "post", onSubmit: handleSubmit, children: group?.fields ? group.fields.map((fld) => {
      let cls = `col-span-${fld.colSpan} col-start-${fld.colStart}`;
      let fieldName = `f${fld.id}`;
      let fieldTitle = fld[`title_${i18n.language}`];
      let fieldLen = fld.len ? fld.len : 30;
      let fieldRequired = fld.isRequire && state === "edit";
      let fieldDisabled = !fld.isEnable || !["create", "edit", "search", "find"].includes(String(state));
      let tableName = `tbl_${fld.groupId}`;
      let val = "";
      if (recordIndex >= 0 && doc[tableName].length) {
        val = doc[tableName][recordIndex][fieldName];
      }
      if (fld.fieldType === "FILE") {
        val = "";
      }
      return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Field, { cls, state, dictionaries, fieldName, fieldType: fld.fieldType, fieldTitle, fieldLen, fieldRequired, fieldDisabled, fieldDict: fld.dicId, defaultVal: val }, fld.id, false, {
        fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
        lineNumber: 90,
        columnNumber: 20
      }, this);
    }) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: "-" }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
      lineNumber: 91,
      columnNumber: 16
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
      lineNumber: 74,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
      lineNumber: 73,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CardFooter2, { className: "pt-0 flex flex-row gap-3 justify-center", placeholder: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CustomButton, { className: "bg-primary hover:shadow-primary_shadow", form: "groupForm", type: "submit", children: t("save") }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
        lineNumber: 95,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CustomButton, { className: "bg-primary hover:shadow-primary_shadow", onClick: handleClose, children: t("close") }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
        lineNumber: 98,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
      lineNumber: 94,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
    lineNumber: 72,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/UI/widgets/enter_data/dlg_multy_group.tsx",
    lineNumber: 71,
    columnNumber: 10
  }, this);
}
_s14(DialogMultyGroup, "tesxYUfym1EdybWre/Q68xlYjtY=", false, function() {
  return [useTranslation];
});
_c15 = DialogMultyGroup;
var _c15;
$RefreshReg$(_c15, "DialogMultyGroup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/enter_data/view.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/enter_data/view.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s15 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/enter_data/view.tsx"
  );
  import.meta.hot.lastModified = "1710742937816.3804";
}
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
  _s15();
  const [group, setGroup] = (0, import_react12.useState)(null);
  const [recordIndex, setRecordIndex] = (0, import_react12.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "h-[calc(100vh-5rem)] flex flex-col gap-3 pb-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ErrorMessage, { errors }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/view.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(DialogFindResult, { open, setOpen, docs }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/view.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(DialogMultyGroup, { state, group, setGroup, dictionaries, doc, setDoc, recordIndex }, void 0, false, {
      fileName: "app/components/UI/widgets/enter_data/view.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Panel, { className: "h-full overflow-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "py-2 flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Buttons, { userId, inputFormId: inputForm.id, doc, state }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/view.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(RecNavigator, { docs, current, setCurrent }, void 0, false, {
          fileName: "app/components/UI/widgets/enter_data/view.tsx",
          lineNumber: 55,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/enter_data/view.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(EditForm, { formRef, userId, inputForm, state, dictionaries, setGroup, doc, setDoc, setRecordIndex }, void 0, false, {
        fileName: "app/components/UI/widgets/enter_data/view.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/enter_data/view.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/enter_data/view.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s15(EnterDataView, "RpzR+jQlNY7MksAo6MzoeDnFd0o=");
_c16 = EnterDataView;
var _c16;
$RefreshReg$(_c16, "EnterDataView");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.enter_data.$formId.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.enter_data.$formId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s16 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.enter_data.$formId.tsx"
  );
  import.meta.hot.lastModified = "1710748201916.8281";
}
function EnterData() {
  _s16();
  const {
    dictionaries,
    docs,
    setDocs,
    current,
    setCurrent
  } = useOutletContext();
  const {
    inputForm,
    doc,
    state
  } = useLoaderData();
  const [document, setDocument] = (0, import_react14.useState)(doc);
  const navigation = useNavigation();
  const formRef = (0, import_react14.useRef)(null);
  const userId = 1;
  const data = useActionData();
  const [showFind, setShowFind] = (0, import_react14.useState)(false);
  (0, import_react14.useEffect)(() => {
    formRef.current?.reset();
    setDocument(doc);
  }, [doc]);
  (0, import_react14.useEffect)(() => {
    if (data?.docs && data?.ok) {
      setDocs(data.docs);
      setShowFind(true);
    }
    if (navigation.state === "idle" && data?.ok) {
      formRef.current?.reset();
    }
    if (data?.deletedDocId && data?.ok) {
      setDocs((prev) => ({
        formId: prev.formId,
        ids: prev.ids?.filter((item) => item !== data.deletedDocId)
      }));
    }
  }, [data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(EnterDataView, { errors: data?.errors, open: showFind, setOpen: setShowFind, docs, userId, current, setCurrent, formRef, inputForm, state, dictionaries, doc: document, setDoc: setDocument }, void 0, false, {
    fileName: "app/routes/dashboard.enter_data.$formId.tsx",
    lineNumber: 173,
    columnNumber: 10
  }, this);
}
_s16(EnterData, "5/1QAMMsuCa9Z9XpGxCZDcBaDPk=", false, function() {
  return [useOutletContext, useLoaderData, useNavigation, useActionData];
});
_c17 = EnterData;
var _c17;
$RefreshReg$(_c17, "EnterData");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EnterData as default
};
//# sourceMappingURL=/build/routes/dashboard.enter_data.$formId-BZX6L6RY.js.map
