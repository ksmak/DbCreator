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
  useActionData,
  useLoaderData,
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

// app/routes/dashboard.search_data.$formId.tsx
var import_node = __toESM(require_node(), 1);
var import_react5 = __toESM(require_react(), 1);

// app/components/UI/widgets/search_data/dlg_condition.tsx
var import_react = __toESM(require_react2(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/search_data/dlg_condition.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/search_data/dlg_condition.tsx"
  );
  import.meta.hot.lastModified = "1709721700075.692";
}
var {
  Dialog,
  Card,
  CardBody,
  CardFooter
} = import_react.default;
function ConditionDialog({
  condIndex,
  cond,
  setCond,
  show,
  setShow,
  conditions,
  setConditions
}) {
  const handlerOK = () => {
    if (condIndex !== null) {
      let conds = [...conditions];
      conds.splice(condIndex, 1, cond);
      setConditions(conds);
    } else {
      if (conditions.length > 0) {
        setConditions([...conditions, {
          log: "AND"
        }, cond]);
      } else {
        setConditions([...conditions, cond]);
      }
    }
    setShow(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { placeholder: "", size: "md", open: show, handler: () => setShow(false), className: "bg-transparent shadow-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mx-auto w-full", placeholder: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardBody, { className: "flex flex-col gap-4 overflow-auto", placeholder: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center gap-1 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: `${cond.oper === "between" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: "between"
        }), disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)), children: "\u0421..\u041F\u041E" }, void 0, false, {
          fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
          lineNumber: 59,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: `${cond.oper === "=" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: "="
        }), children: "=" }, void 0, false, {
          fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
          lineNumber: 65,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: `${cond.oper === ">" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: ">"
        }), disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)), children: ">" }, void 0, false, {
          fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
          lineNumber: 71,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: `${cond.oper === ">=" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: ">="
        }), disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)), children: ">=" }, void 0, false, {
          fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
          lineNumber: 77,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: `${cond.oper === "<" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: "<"
        }), disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)), children: "<" }, void 0, false, {
          fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
          lineNumber: 83,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: `${cond.oper === "<=" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: "<="
        }), disabled: ["TEXT", "CYRILLIC", "DICT"].includes(String(cond.field?.field.fieldType)), children: "<=" }, void 0, false, {
          fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
          lineNumber: 89,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: `${cond.oper === "<>" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: "<>"
        }), children: "<>" }, void 0, false, {
          fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
          lineNumber: 95,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: `${cond.oper === "=()" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: "=()"
        }), children: "=()" }, void 0, false, {
          fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
          lineNumber: 101,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: `${cond.oper === "<>()" ? "bg-green-600  hover:shadow-green-100" : "bg-blue-gray-600  hover:shadow-blue-gray-100"} flex justify-center flex-1`, onClick: () => setCond({
          ...cond,
          oper: "<>()"
        }), children: "<>()" }, void 0, false, {
          fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
          lineNumber: 107,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
        lineNumber: 58,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-bold text-blue-gray-600", children: cond.field?.title }, void 0, false, {
        fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
        lineNumber: 114,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: cond.oper === "between" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { id: "val1", type: "text", name: "val1", title: "Val1: ", value: cond.val1, onChange: (e) => setCond({
          ...cond,
          val1: e.target.value
        }) }, void 0, false, {
          fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
          lineNumber: 117,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { id: "val2", type: "text", name: "val2", title: "Val2: ", value: cond.val2, onChange: (e) => setCond({
          ...cond,
          val2: e.target.value
        }) }, void 0, false, {
          fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
          lineNumber: 121,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
        lineNumber: 116,
        columnNumber: 52
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomInput, { id: "val1", type: "text", name: "val1", title: "Val1: ", value: cond.val1, onChange: (e) => setCond({
        ...cond,
        val1: e.target.value
      }) }, void 0, false, {
        fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
        lineNumber: 126,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
        lineNumber: 125,
        columnNumber: 38
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
        lineNumber: 115,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
      lineNumber: 57,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardFooter, { className: "pt-0 flex flex-row gap-3", placeholder: "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-green-100", onClick: () => handlerOK(), children: "OK" }, void 0, false, {
        fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
        lineNumber: 134,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-green-100", onClick: () => setShow(false), children: "Cancel" }, void 0, false, {
        fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
        lineNumber: 137,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
      lineNumber: 133,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
    lineNumber: 56,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/UI/widgets/search_data/dlg_condition.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_c = ConditionDialog;
var _c;
$RefreshReg$(_c, "ConditionDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/search_data/buttons/btn_search.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/search_data/buttons/btn_search.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/search_data/buttons/btn_search.tsx"
  );
  import.meta.hot.lastModified = "1709721613969.048";
}
function ButtonSearch({
  userId,
  inputFormId,
  conditions
}) {
  _s();
  const {
    t
  } = useTranslation();
  const submit = useSubmit();
  const handleSearch = () => {
    submit({
      _action: "searchDocument",
      _user: userId,
      _inputFormId: inputFormId,
      json: JSON.stringify(conditions)
    }, {
      method: "post"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100", onClick: () => handleSearch(), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" }, void 0, false, {
      fileName: "app/components/UI/widgets/search_data/buttons/btn_search.tsx",
      lineNumber: 47,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/search_data/buttons/btn_search.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    t("search")
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/search_data/buttons/btn_search.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(ButtonSearch, "6b9drngkmiq9KhFUfrO+O1zoj50=", false, function() {
  return [useTranslation, useSubmit];
});
_c2 = ButtonSearch;
var _c2;
$RefreshReg$(_c2, "ButtonSearch");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/search_data/buttons/buttons.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/search_data/buttons/buttons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/search_data/buttons/buttons.tsx"
  );
  import.meta.hot.lastModified = "1709718504676.997";
}
function Buttons({
  userId,
  inputFormId,
  conditions
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ButtonSearch, { userId, inputFormId, conditions }, void 0, false, {
    fileName: "app/components/UI/widgets/search_data/buttons/buttons.tsx",
    lineNumber: 28,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/UI/widgets/search_data/buttons/buttons.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c3 = Buttons;
var _c3;
$RefreshReg$(_c3, "Buttons");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/search_data/list_fields.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/search_data/list_fields.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/search_data/list_fields.tsx"
  );
  import.meta.hot.lastModified = "1709719215785.543";
}
function ListFields({
  searchForm,
  fld,
  setFld,
  handleOpenCondition
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-1/3", children: searchForm && searchForm.fields.map((field) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${fld?.id === field.id ? "bg-blue-gray-100" : ""} hover:cursor-pointer hover:bg-blue-gray-100 select-none`, onClick: () => setFld(field), onDoubleClick: () => handleOpenCondition({
    oper: ["TEXT", "CYRILLIC", "DICT"].includes(field.field.fieldType) ? "=" : "between",
    field
  }, null), children: field.title }, field.id, false, {
    fileName: "app/components/UI/widgets/search_data/list_fields.tsx",
    lineNumber: 28,
    columnNumber: 59
  }, this)) }, void 0, false, {
    fileName: "app/components/UI/widgets/search_data/list_fields.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c4 = ListFields;
var _c4;
$RefreshReg$(_c4, "ListFields");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/search_data/cond_buttons.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/search_data/cond_buttons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/search_data/cond_buttons.tsx"
  );
  import.meta.hot.lastModified = "1709721365840.984";
}
function ConditionButtons({
  handleAddCondition,
  handleDeleteCondition,
  handleEraseConditions,
  handleBktBoth,
  handleBktLeft,
  handleBktRight,
  handleReplaceOrAnd
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "self-center flex flex-col justify-center gap-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center", onClick: () => handleAddCondition(), children: "Add" }, void 0, false, {
      fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center", onClick: () => handleDeleteCondition(), children: "Delete" }, void 0, false, {
      fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center", onClick: () => handleEraseConditions(), children: "Erase" }, void 0, false, {
      fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center", onClick: () => handleBktBoth(), children: "()" }, void 0, false, {
      fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center", onClick: () => handleBktLeft(), children: "(" }, void 0, false, {
      fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center", onClick: () => handleBktRight(), children: ")" }, void 0, false, {
      fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center", onClick: () => handleReplaceOrAnd("OR"), children: "OR" }, void 0, false, {
      fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CustomButton, { className: "bg-blue-gray-500 hover:shadow-blue-gray-100 text-2xl w-16 h-16 flex justify-center", onClick: () => handleReplaceOrAnd("AND"), children: "AND" }, void 0, false, {
      fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/search_data/cond_buttons.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c5 = ConditionButtons;
var _c5;
$RefreshReg$(_c5, "ConditionButtons");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/search_data/list_conditions.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/search_data/list_conditions.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/search_data/list_conditions.tsx"
  );
  import.meta.hot.lastModified = "1709720560964.36";
}
function ListConditions({
  conditions,
  condIndex,
  setCondIndex,
  handleOpenCondition
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-2/3", children: conditions.map((c, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: `${condIndex === index ? "bg-blue-gray-100" : ""} hover:cursor-pointer`, onClick: () => setCondIndex(index), children: c.log ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    "---- ",
    c.log,
    " ----"
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/search_data/list_conditions.tsx",
    lineNumber: 29,
    columnNumber: 30
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { onDoubleClick: () => handleOpenCondition(c, index), children: [
    c.field?.title,
    " ",
    c.oper,
    " ",
    c.val1,
    " ",
    c.val2
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/search_data/list_conditions.tsx",
    lineNumber: 29,
    columnNumber: 61
  }, this) }, index, false, {
    fileName: "app/components/UI/widgets/search_data/list_conditions.tsx",
    lineNumber: 28,
    columnNumber: 43
  }, this)) }, void 0, false, {
    fileName: "app/components/UI/widgets/search_data/list_conditions.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c6 = ListConditions;
var _c6;
$RefreshReg$(_c6, "ListConditions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/search_data/view.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/search_data/view.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/search_data/view.tsx"
  );
  import.meta.hot.lastModified = "1709721649074.134";
}
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
  _s2();
  const submit = useSubmit();
  const handleOpenCondition = (cond2, condIndex2 = null) => {
    setCondIndex(condIndex2);
    setCond(cond2);
    setShow(true);
  };
  const handleAddCondition = () => {
    if (fld) {
      handleOpenCondition({
        oper: ["TEXT", "CYRILLIC", "DICT"].includes(fld.field.fieldType) ? "=" : "between",
        field: fld
      });
    }
  };
  const handleDeleteCondition = () => {
    if (condIndex !== null) {
      let conds = [...conditions];
      if (conds[condIndex].log) {
        conds.splice(condIndex, 1);
      } else {
        conds.splice(condIndex - 1, 2);
      }
      setConditions(conds);
    }
  };
  const handleEraseConditions = () => {
    setConditions([]);
  };
  const handleBktBoth = () => {
    if (conditions.length > 0) {
      setConditions([{
        log: "("
      }, ...conditions, {
        log: ")"
      }]);
    }
  };
  const handleBktLeft = () => {
    if (condIndex !== null && !conditions[condIndex].log) {
      let conds = [...conditions];
      conds.splice(condIndex, 0, {
        log: "("
      });
      setConditions(conds);
    }
  };
  const handleBktRight = () => {
    if (condIndex !== null && !conditions[condIndex].log) {
      let conds = [...conditions];
      conds.splice(condIndex + 1, 0, {
        log: ")"
      });
      setConditions(conds);
    }
  };
  const handleReplaceOrAnd = (log) => {
    if (condIndex !== null && ["OR", "AND"].includes(String(conditions[condIndex].log))) {
      let conds = [...conditions];
      conds.splice(condIndex, 1, {
        log
      });
      setConditions(conds);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "h-[calc(100vh-5rem)] flex flex-col gap-3 pb-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ErrorMessage, { errors }, void 0, false, {
      fileName: "app/components/UI/widgets/search_data/view.tsx",
      lineNumber: 112,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ConditionDialog, { condIndex, cond, setCond, show, setShow, conditions, setConditions }, void 0, false, {
      fileName: "app/components/UI/widgets/search_data/view.tsx",
      lineNumber: 113,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Panel, { className: "h-full overflow-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Buttons, { userId, inputFormId, conditions }, void 0, false, {
        fileName: "app/components/UI/widgets/search_data/view.tsx",
        lineNumber: 115,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ListFields, { searchForm, fld, setFld, handleOpenCondition }, void 0, false, {
          fileName: "app/components/UI/widgets/search_data/view.tsx",
          lineNumber: 117,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ConditionButtons, { handleAddCondition, handleDeleteCondition, handleEraseConditions, handleBktBoth, handleBktLeft, handleBktRight, handleReplaceOrAnd }, void 0, false, {
          fileName: "app/components/UI/widgets/search_data/view.tsx",
          lineNumber: 118,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ListConditions, { conditions, condIndex, setCondIndex, handleOpenCondition }, void 0, false, {
          fileName: "app/components/UI/widgets/search_data/view.tsx",
          lineNumber: 119,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/search_data/view.tsx",
        lineNumber: 116,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/search_data/view.tsx",
      lineNumber: 114,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/search_data/view.tsx",
    lineNumber: 111,
    columnNumber: 10
  }, this);
}
_s2(SearchDataView, "/qFIYzOq2OE/SSM69ffcyD0/sOE=", false, function() {
  return [useSubmit];
});
_c7 = SearchDataView;
var _c7;
$RefreshReg$(_c7, "SearchDataView");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.search_data.$formId.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.search_data.$formId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.search_data.$formId.tsx"
  );
  import.meta.hot.lastModified = "1709721456984.035";
}
function SearchData() {
  _s3();
  const {
    conditions,
    setConditions
  } = useOutletContext();
  const {
    searchForm,
    state
  } = useLoaderData();
  const data = useActionData();
  const [showCondition, setShowCondition] = (0, import_react5.useState)(false);
  const [cond, setCond] = (0, import_react5.useState)({});
  const [condIndex, setCondIndex] = (0, import_react5.useState)(null);
  const [fld, setFld] = (0, import_react5.useState)(null);
  const userId = 19;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SearchDataView, { errors: data?.errors, condIndex, setCondIndex, cond, setCond, show: showCondition, setShow: setShowCondition, conditions, setConditions, userId, inputFormId: searchForm ? searchForm.inputFormId : null, searchForm, fld, setFld }, void 0, false, {
    fileName: "app/routes/dashboard.search_data.$formId.tsx",
    lineNumber: 89,
    columnNumber: 10
  }, this);
}
_s3(SearchData, "iY72atdRjl/61T/Gm9xDjbyb/3k=", false, function() {
  return [useOutletContext, useLoaderData, useActionData];
});
_c8 = SearchData;
var _c8;
$RefreshReg$(_c8, "SearchData");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SearchData as default
};
//# sourceMappingURL=/build/routes/dashboard.search_data.$formId-N5TB5HSY.js.map
