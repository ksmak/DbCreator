import {
  CustomButton,
  ErrorMessage,
  Panel,
  require_node
} from "/build/_shared/chunk-QI3KDWHL.js";
import "/build/_shared/chunk-Z46RVADL.js";
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
  useNavigate,
  useOutletContext
} from "/build/_shared/chunk-FQWAC4DA.js";
import {
  createHotContext
} from "/build/_shared/chunk-SOESSFXD.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-WEAPBHQG.js";
import "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/dashboard.dictionaries.tsx
var import_node = __toESM(require_node(), 1);

// app/components/UI/widgets/dictionaries/buttons/btn_add_value.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/dictionaries/buttons/btn_add_value.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/dictionaries/buttons/btn_add_value.tsx"
  );
  import.meta.hot.lastModified = "1710314331784.562";
}
function ButtonAddDictValue({
  dictionary
}) {
  _s();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomButton, { className: "bg-primary hover:shadow-primary_shadow", type: "submit", name: "_action", value: "addDictVal", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "dictId", value: dictionary.id }, void 0, false, {
      fileName: "app/components/UI/widgets/dictionaries/buttons/btn_add_value.tsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }, void 0, false, {
      fileName: "app/components/UI/widgets/dictionaries/buttons/btn_add_value.tsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/dictionaries/buttons/btn_add_value.tsx",
      lineNumber: 35,
      columnNumber: 17
    }, this),
    t("add")
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/dictionaries/buttons/btn_add_value.tsx",
    lineNumber: 33,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/UI/widgets/dictionaries/buttons/btn_add_value.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(ButtonAddDictValue, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c = ButtonAddDictValue;
var _c;
$RefreshReg$(_c, "ButtonAddDictValue");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/dictionaries/buttons/buttons.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/dictionaries/buttons/buttons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/dictionaries/buttons/buttons.tsx"
  );
  import.meta.hot.lastModified = "1710315565105.556";
}
function Buttons({
  dictionary
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-2 flex justify-end items-center py-2 px-2 border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ButtonAddDictValue, { dictionary }, void 0, false, {
    fileName: "app/components/UI/widgets/dictionaries/buttons/buttons.tsx",
    lineNumber: 26,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/UI/widgets/dictionaries/buttons/buttons.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = Buttons;
var _c2;
$RefreshReg$(_c2, "Buttons");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx"
  );
  import.meta.hot.lastModified = "1710308694892.745";
}
function DictionariesTable({
  dictionaries,
  dictionary
}) {
  _s2();
  const {
    i18n,
    t
  } = useTranslation();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("table", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("thead", { className: "bg-primary text-white text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: "#" }, void 0, false, {
        fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
        lineNumber: 37,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("title") }, void 0, false, {
        fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
      lineNumber: 36,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tbody", { children: dictionaries && dictionaries.map((dic, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tr", { className: dic?.id === dictionary.id ? "bg-selected hover:cursor-pointer" : " hover:cursor-pointer", onClick: () => navigate(`/dashboard/dictionaries?current_dic=${dic.id}`), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: index + 1 }, void 0, false, {
        fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
        lineNumber: 43,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", children: dic[`title_${i18n.language}`] }, void 0, false, {
        fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
        lineNumber: 44,
        columnNumber: 25
      }, this)
    ] }, dic.id, true, {
      fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
      lineNumber: 42,
      columnNumber: 67
    }, this)) }, void 0, false, {
      fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/dictionaries/tbl_dictionaries.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s2(DictionariesTable, "snclS1U3LXStivP937A7v9MkjWg=", false, function() {
  return [useTranslation, useNavigate];
});
_c3 = DictionariesTable;
var _c3;
$RefreshReg$(_c3, "DictionariesTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/dictionaries/buttons/btn_delete_value.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/dictionaries/buttons/btn_delete_value.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/dictionaries/buttons/btn_delete_value.tsx"
  );
  import.meta.hot.lastModified = "1710316519487.088";
}
function ButtonDeleteDictValue({
  dictId,
  id
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: id }, void 0, false, {
      fileName: "app/components/UI/widgets/dictionaries/buttons/btn_delete_value.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "dictId", defaultValue: dictId }, void 0, false, {
      fileName: "app/components/UI/widgets/dictionaries/buttons/btn_delete_value.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CustomButton, { className: "bg-danger hover:shadow-danger_shadow", onClick: handleDelete, type: "submit", name: "_action", value: "deleteDictVal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" }, void 0, false, {
      fileName: "app/components/UI/widgets/dictionaries/buttons/btn_delete_value.tsx",
      lineNumber: 44,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/dictionaries/buttons/btn_delete_value.tsx",
      lineNumber: 43,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/UI/widgets/dictionaries/buttons/btn_delete_value.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/dictionaries/buttons/btn_delete_value.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s3(ButtonDeleteDictValue, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c4 = ButtonDeleteDictValue;
var _c4;
$RefreshReg$(_c4, "ButtonDeleteDictValue");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/dictionaries/tbl_dic_values.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/dictionaries/tbl_dic_values.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx"
  );
  import.meta.hot.lastModified = "1710316905449.414";
}
function DicValuesTable({
  dictionary,
  dictValues
}) {
  _s4();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    dictValues && dictValues.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { method: "post", className: "hidden", id: `updateDictValForm_${item.id}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "dictId", defaultValue: dictionary.id }, void 0, false, {
        fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
        lineNumber: 35,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "id", defaultValue: item.id }, void 0, false, {
        fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { id: `updateDictValButton_${item.id}`, type: "submit", name: "_action", value: "updateDictVal" }, void 0, false, {
        fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
        lineNumber: 37,
        columnNumber: 21
      }, this)
    ] }, item.id, true, {
      fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
      lineNumber: 34,
      columnNumber: 51
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("table", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("thead", { className: "bg-primary text-white text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: "ID" }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
          lineNumber: 42,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("title_kk") }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
          lineNumber: 43,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("title_ru") }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
          lineNumber: 44,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500", children: t("is_enable") }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
          lineNumber: 45,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { className: "p-1 text-sm border border-blue-gray-500" }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
        lineNumber: 41,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tbody", { children: dictValues && dictValues.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: item.id }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
          lineNumber: 51,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "text-sm w-full focus:outline-none p-1 text-black", form: `updateDictValForm_${item.id}`, type: "text", name: "title_kk", defaultValue: item.title_kk, maxLength: 45, onChange: () => {
          const button = document.getElementById(`updateDictValButton_${item.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
          lineNumber: 53,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
          lineNumber: 52,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "text-sm w-full focus:outline-none p-1 text-black", form: `updateDictValForm_${item.id}`, type: "text", name: "title_ru", defaultValue: item.title_ru, maxLength: 45, onChange: () => {
          const button = document.getElementById(`updateDictValButton_${item.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
          lineNumber: 59,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
          lineNumber: 58,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { className: "text-sm w-full focus:outline-none p-1 text-black", form: `updateDictValForm_${item.id}`, type: "checkbox", name: "is_enabled", defaultChecked: item.is_enabled, onChange: () => {
          const button = document.getElementById(`updateDictValButton_${item.id}`);
          button.click();
        } }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
          lineNumber: 65,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
          lineNumber: 64,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "p-1 text-sm border border-blue-gray-500 w-10", children: item.id && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ButtonDeleteDictValue, { dictId: dictionary.id, id: item.id }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
          lineNumber: 71,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
          lineNumber: 70,
          columnNumber: 29
        }, this)
      ] }, item.id, true, {
        fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
        lineNumber: 50,
        columnNumber: 59
      }, this)) }, void 0, false, {
        fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/dictionaries/tbl_dic_values.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s4(DicValuesTable, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c5 = DicValuesTable;
var _c5;
$RefreshReg$(_c5, "DicValuesTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/UI/widgets/dictionaries/view.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/widgets/dictionaries/view.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/widgets/dictionaries/view.tsx"
  );
  import.meta.hot.lastModified = "1710316347886.498";
}
function DictionariesView({
  errors,
  dictionaries,
  dictionary,
  dictValues
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-1 flex flex-col gap-3 h-[calc(100vh-5rem)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ErrorMessage, { errors }, void 0, false, {
      fileName: "app/components/UI/widgets/dictionaries/view.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Panel, { className: "h-full overflow-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Buttons, { dictionary }, void 0, false, {
        fileName: "app/components/UI/widgets/dictionaries/view.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-row gap-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-1/3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DictionariesTable, { dictionaries, dictionary }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/view.tsx",
          lineNumber: 38,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/view.tsx",
          lineNumber: 37,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-2/3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DicValuesTable, { dictionary, dictValues }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/view.tsx",
          lineNumber: 41,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/UI/widgets/dictionaries/view.tsx",
          lineNumber: 40,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/UI/widgets/dictionaries/view.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/widgets/dictionaries/view.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/widgets/dictionaries/view.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c6 = DictionariesView;
var _c6;
$RefreshReg$(_c6, "DictionariesView");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.dictionaries.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.dictionaries.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.dictionaries.tsx"
  );
  import.meta.hot.lastModified = "1710316075711.216";
}
function Dictionaries() {
  _s5();
  const {
    dictionaries
  } = useOutletContext();
  const {
    dictionary,
    dictValues
  } = useLoaderData();
  const data = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DictionariesView, { errors: data?.errors ? data?.errors : void 0, dictionaries, dictionary, dictValues }, void 0, false, {
    fileName: "app/routes/dashboard.dictionaries.tsx",
    lineNumber: 118,
    columnNumber: 10
  }, this);
}
_s5(Dictionaries, "+Xh8mrYOqo7WCQcBYLUNDhdo5nk=", false, function() {
  return [useOutletContext, useLoaderData, useActionData];
});
_c7 = Dictionaries;
var _c7;
$RefreshReg$(_c7, "Dictionaries");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Dictionaries as default
};
//# sourceMappingURL=/build/routes/dashboard.dictionaries-PQFMGWYS.js.map
