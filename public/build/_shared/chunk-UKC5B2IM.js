import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  createHotContext
} from "/build/_shared/chunk-SOESSFXD.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/UI/elements/custom_select.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UI/elements/custom_select.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UI/elements/custom_select.tsx"
  );
  import.meta.hot.lastModified = "1708575059973.424";
}
function CustomSelect({
  className,
  id,
  title,
  errors,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${className} p-1 flex items-baseline`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-bold text-sm mr-1 min-w-40", htmlFor: id, children: title }, void 0, false, {
      fileName: "app/components/UI/elements/custom_select.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id, className: "font-mono text-sm border-2 p-1 focus:outline-blue-gray-500 bg-white", ...props, children }, void 0, false, {
        fileName: "app/components/UI/elements/custom_select.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-red-500 h-4", children: errors }, void 0, false, {
        fileName: "app/components/UI/elements/custom_select.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UI/elements/custom_select.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UI/elements/custom_select.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = CustomSelect;
var _c;
$RefreshReg$(_c, "CustomSelect");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CustomSelect
};
//# sourceMappingURL=/build/_shared/chunk-UKC5B2IM.js.map
