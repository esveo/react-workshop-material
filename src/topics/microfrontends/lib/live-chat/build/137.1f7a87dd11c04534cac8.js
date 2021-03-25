(self.webpackChunkreact_workshops_material=self.webpackChunkreact_workshops_material||[]).push([[137],{137:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "ChatWidget": () => (/* binding */ ChatWidget_ChatWidget)\n});\n\n// EXTERNAL MODULE: consume shared module (default) react@=0.0.0-experimental-7d06b80af (singleton) (fallback: ./node_modules/react/index.js)\nvar index_js_ = __webpack_require__(715);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\nvar injectStylesIntoStyleTag = __webpack_require__(379);\nvar injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);\n// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/topics/microfrontends/lib/base-components/Button.css\nvar Button = __webpack_require__(738);\n;// CONCATENATED MODULE: ./src/topics/microfrontends/lib/base-components/Button.css\n\n            \n\nvar options = {};\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = injectStylesIntoStyleTag_default()(Button/* default */.Z, options);\n\n\n\n/* harmony default export */ const base_components_Button = (Button/* default.locals */.Z.locals || {});\n// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 15 modules\nvar emotion_react_browser_esm = __webpack_require__(476);\n;// CONCATENATED MODULE: ./src/topics/microfrontends/lib/base-components/Button.tsx\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nfunction Button_Button(props) {\n  return (0,emotion_react_browser_esm/* jsx */.tZ)("button", _extends({}, props, {\n    className: "satellite-control-button"\n  }));\n}\n// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/topics/microfrontends/lib/live-chat/ChatWidget.css\nvar ChatWidget = __webpack_require__(52);\n;// CONCATENATED MODULE: ./src/topics/microfrontends/lib/live-chat/ChatWidget.css\n\n            \n\nvar ChatWidget_options = {};\n\nChatWidget_options.insert = "head";\nChatWidget_options.singleton = false;\n\nvar ChatWidget_update = injectStylesIntoStyleTag_default()(ChatWidget/* default */.Z, ChatWidget_options);\n\n\n\n/* harmony default export */ const live_chat_ChatWidget = (ChatWidget/* default.locals */.Z.locals || {});\n;// CONCATENATED MODULE: ./src/topics/microfrontends/lib/live-chat/ChatWidget.tsx\n\n\n\n\nfunction ChatWidget_ChatWidget(props) {\n  const [open, setOpen] = (0,index_js_.useState)(false);\n  return (0,emotion_react_browser_esm/* jsx */.tZ)("div", {\n    className: "chat-widget"\n  }, open && (0,emotion_react_browser_esm/* jsx */.tZ)(Chat, props), (0,emotion_react_browser_esm/* jsx */.tZ)(Button_Button, {\n    onClick: () => setOpen(o => !o)\n  }, open ? "Hide" : "Show", " Chat: ", props.username));\n}\n\nfunction Chat(props) {\n  const [messages, setMessages] = (0,index_js_.useState)([]);\n  const [input, setInput] = (0,index_js_.useState)("");\n  const listRef = (0,index_js_.useRef)(null);\n  (0,index_js_.useEffect)(() => {\n    if (listRef.current) {\n      listRef.current.scrollTop = listRef.current.scrollHeight;\n    }\n  }, [messages]);\n  const handleMessage = (0,index_js_.useCallback)(message => {\n    setMessages(m => [...m, message]);\n  }, []);\n\n  function handleSend(e) {\n    e.preventDefault();\n    setMessages(m => [...m, input]);\n    setInput("");\n  }\n\n  return (0,emotion_react_browser_esm/* jsx */.tZ)("div", {\n    className: "chat-container"\n  }, (0,emotion_react_browser_esm/* jsx */.tZ)("ul", {\n    ref: listRef\n  }, messages.map((m, i) => (0,emotion_react_browser_esm/* jsx */.tZ)("li", {\n    key: i\n  }, JSON.stringify(m, null, 2)))), (0,emotion_react_browser_esm/* jsx */.tZ)("form", {\n    onSubmit: handleSend\n  }, (0,emotion_react_browser_esm/* jsx */.tZ)("input", {\n    type: "text",\n    value: input,\n    onChange: e => setInput(e.target.value)\n  }), (0,emotion_react_browser_esm/* jsx */.tZ)(Button_Button, {\n    type: "submit"\n  }, "Send")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC13b3Jrc2hvcHMtbWF0ZXJpYWwvLi9zcmMvdG9waWNzL21pY3JvZnJvbnRlbmRzL2xpYi9iYXNlLWNvbXBvbmVudHMvQnV0dG9uLmNzcz8xYzRiIiwid2VicGFjazovL3JlYWN0LXdvcmtzaG9wcy1tYXRlcmlhbC8uL3NyYy90b3BpY3MvbWljcm9mcm9udGVuZHMvbGliL2Jhc2UtY29tcG9uZW50cy9CdXR0b24udHN4PzQxOGEiLCJ3ZWJwYWNrOi8vcmVhY3Qtd29ya3Nob3BzLW1hdGVyaWFsLy4vc3JjL3RvcGljcy9taWNyb2Zyb250ZW5kcy9saWIvbGl2ZS1jaGF0L0NoYXRXaWRnZXQuY3NzPzNkYTgiLCJ3ZWJwYWNrOi8vcmVhY3Qtd29ya3Nob3BzLW1hdGVyaWFsLy4vc3JjL3RvcGljcy9taWNyb2Zyb250ZW5kcy9saWIvbGl2ZS1jaGF0L0NoYXRXaWRnZXQudHN4P2I0OTMiXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJDaGF0V2lkZ2V0Iiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsIm8iLCJ1c2VybmFtZSIsIkNoYXQiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiaW5wdXQiLCJzZXRJbnB1dCIsImxpc3RSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiaGFuZGxlTWVzc2FnZSIsInVzZUNhbGxiYWNrIiwibWVzc2FnZSIsIm0iLCJoYW5kbGVTZW5kIiwiZSIsInByZXZlbnREZWZhdWx0IiwibWFwIiwiaSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRztBQUNyRyxZQUFvRzs7QUFFcEc7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLGtDQUFHLENBQUMscUJBQU87Ozs7QUFJeEIsNkRBQWUsbUNBQWMsTUFBTSxFOzs7Ozs7QUNYbkM7O0FBRU8sU0FBU0EsYUFBVCxDQUFnQkMsS0FBaEIsRUFBaUQ7QUFDdEQsU0FBTyxpRUFBWUEsS0FBWjtBQUFtQixhQUFTLEVBQUM7QUFBN0IsS0FBUDtBQUNELEM7Ozs7QUNMb0c7QUFDckcsWUFBd0c7O0FBRXhHLElBQUksa0JBQU87O0FBRVgsa0JBQU87QUFDUCxrQkFBTzs7QUFFUCxJQUFJLGlCQUFNLEdBQUcsa0NBQUcsQ0FBQyx5QkFBTyxFQUFFLGtCQUFPOzs7O0FBSWpDLDJEQUFlLHVDQUFjLE1BQU0sRTs7QUNabkM7QUFDQTtBQUNBOztBQUVPLFNBQVNDLHFCQUFULENBQW9CRCxLQUFwQixFQUFpRDtBQUN0RCxRQUFNLENBQUNFLElBQUQsRUFBT0MsT0FBUCxJQUFrQkMsc0JBQVEsQ0FBQyxLQUFELENBQWhDO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dGLElBQUksSUFBSSwwQ0FBQyxJQUFELEVBQVVGLEtBQVYsQ0FEWCxFQUVFLDBDQUFDLGFBQUQ7QUFBUSxXQUFPLEVBQUUsTUFBTUcsT0FBTyxDQUFFRSxDQUFELElBQU8sQ0FBQ0EsQ0FBVDtBQUE5QixLQUNHSCxJQUFJLEdBQUcsTUFBSCxHQUFZLE1BRG5CLGFBQ2tDRixLQUFLLENBQUNNLFFBRHhDLENBRkYsQ0FERjtBQVFEOztBQUlELFNBQVNDLElBQVQsQ0FBY1AsS0FBZCxFQUEyQztBQUN6QyxRQUFNLENBQUNRLFFBQUQsRUFBV0MsV0FBWCxJQUEwQkwsc0JBQVEsQ0FBUSxFQUFSLENBQXhDO0FBQ0EsUUFBTSxDQUFDTSxLQUFELEVBQVFDLFFBQVIsSUFBb0JQLHNCQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU1RLE9BQU8sR0FBR0Msb0JBQU0sQ0FBbUIsSUFBbkIsQ0FBdEI7QUFFQUMseUJBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUYsT0FBTyxDQUFDRyxPQUFaLEVBQXFCO0FBQ25CSCxhQUFPLENBQUNHLE9BQVIsQ0FBZ0JDLFNBQWhCLEdBQTRCSixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JFLFlBQTVDO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ1QsUUFBRCxDQUpNLENBQVQ7QUFNQSxRQUFNVSxhQUFhLEdBQUdDLHlCQUFXLENBQUVDLE9BQUQsSUFBa0I7QUFDbERYLGVBQVcsQ0FBRVksQ0FBRCxJQUFPLENBQUMsR0FBR0EsQ0FBSixFQUFPRCxPQUFQLENBQVIsQ0FBWDtBQUNELEdBRmdDLEVBRTlCLEVBRjhCLENBQWpDOztBQUlBLFdBQVNFLFVBQVQsQ0FBb0JDLENBQXBCLEVBQWtDO0FBQ2hDQSxLQUFDLENBQUNDLGNBQUY7QUFFQWYsZUFBVyxDQUFFWSxDQUFELElBQU8sQ0FBQyxHQUFHQSxDQUFKLEVBQU9YLEtBQVAsQ0FBUixDQUFYO0FBRUFDLFlBQVEsQ0FBQyxFQUFELENBQVI7QUFDRDs7QUFFRCxTQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFJLE9BQUcsRUFBRUM7QUFBVCxLQUNHSixRQUFRLENBQUNpQixHQUFULENBQWEsQ0FBQ0osQ0FBRCxFQUFJSyxDQUFKLEtBQ1o7QUFBSSxPQUFHLEVBQUVBO0FBQVQsS0FBYUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLENBQWYsRUFBa0IsSUFBbEIsRUFBd0IsQ0FBeEIsQ0FBYixDQURELENBREgsQ0FERixFQU1FO0FBQU0sWUFBUSxFQUFFQztBQUFoQixLQUNFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxTQUFLLEVBQUVaLEtBRlQ7QUFHRSxZQUFRLEVBQUdhLENBQUQsSUFBT1osUUFBUSxDQUFDWSxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVjtBQUgzQixJQURGLEVBTUUsMENBQUMsYUFBRDtBQUFRLFFBQUksRUFBQztBQUFiLFlBTkYsQ0FORixDQURGO0FBaUJEIiwiZmlsZSI6IjEzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQnV0dG9uLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IENvbXBvbmVudFByb3BzIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vQnV0dG9uLmNzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbihwcm9wczogQ29tcG9uZW50UHJvcHM8XCJidXR0b25cIj4pIHtcclxuICByZXR1cm4gPGJ1dHRvbiB7Li4ucHJvcHN9IGNsYXNzTmFtZT1cInNhdGVsbGl0ZS1jb250cm9sLWJ1dHRvblwiIC8+O1xyXG59XHJcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQ2hhdFdpZGdldC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBGb3JtRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL2Jhc2UtY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IFwiLi9DaGF0V2lkZ2V0LmNzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYXRXaWRnZXQocHJvcHM6IHsgdXNlcm5hbWU6IHN0cmluZyB9KSB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LXdpZGdldFwiPlxyXG4gICAgICB7b3BlbiAmJiA8Q2hhdCB7Li4ucHJvcHN9IC8+fVxyXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oKG8pID0+ICFvKX0+XHJcbiAgICAgICAge29wZW4gPyBcIkhpZGVcIiA6IFwiU2hvd1wifSBDaGF0OiB7cHJvcHMudXNlcm5hbWV9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ2hhdFdpZGdldCA9IHR5cGVvZiBDaGF0V2lkZ2V0O1xyXG5cclxuZnVuY3Rpb24gQ2hhdChwcm9wczogeyB1c2VybmFtZTogc3RyaW5nIH0pIHtcclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XHJcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBsaXN0UmVmID0gdXNlUmVmPEhUTUxVTGlzdEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxpc3RSZWYuY3VycmVudCkge1xyXG4gICAgICBsaXN0UmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gbGlzdFJlZi5jdXJyZW50LnNjcm9sbEhlaWdodDtcclxuICAgIH1cclxuICB9LCBbbWVzc2FnZXNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IHVzZUNhbGxiYWNrKChtZXNzYWdlOiBhbnkpID0+IHtcclxuICAgIHNldE1lc3NhZ2VzKChtKSA9PiBbLi4ubSwgbWVzc2FnZV0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU2VuZChlOiBGb3JtRXZlbnQpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBzZXRNZXNzYWdlcygobSkgPT4gWy4uLm0sIGlucHV0XSk7XHJcblxyXG4gICAgc2V0SW5wdXQoXCJcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWNvbnRhaW5lclwiPlxyXG4gICAgICA8dWwgcmVmPXtsaXN0UmVmfT5cclxuICAgICAgICB7bWVzc2FnZXMubWFwKChtLCBpKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpfT57SlNPTi5zdHJpbmdpZnkobSwgbnVsbCwgMil9PC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNlbmR9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kPC9CdXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///137\n')},738:(module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ".satellite-control-button {\\r\\n  background: #104474;\\r\\n  border: 0;\\r\\n  color: white;\\r\\n  cursor: pointer;\\r\\n  font: inherit;\\r\\n  padding: 10px 16px;\\r\\n}\\r\\n\\r\\n.satellite-control-button:hover {\\r\\n  background: #165fa1;\\r\\n}\\r\\n\\r\\n.satellite-control-button:active {\\r\\n  background: #2f84ce;\\r\\n}\\r\\n.satellite-control-button:disabled {\\r\\n  background: #333d47;\\r\\n  color: #888;\\r\\n  cursor: not-allowed;\\r\\n}\\r\\n\\r\\n.satellite-control-button + .satellite-control-button {\\r\\n  margin-left: 16px;\\r\\n}\\r\\n", "",{"version":3,"sources":["webpack://./src/topics/microfrontends/lib/base-components/Button.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":[".satellite-control-button {\\r\\n  background: #104474;\\r\\n  border: 0;\\r\\n  color: white;\\r\\n  cursor: pointer;\\r\\n  font: inherit;\\r\\n  padding: 10px 16px;\\r\\n}\\r\\n\\r\\n.satellite-control-button:hover {\\r\\n  background: #165fa1;\\r\\n}\\r\\n\\r\\n.satellite-control-button:active {\\r\\n  background: #2f84ce;\\r\\n}\\r\\n.satellite-control-button:disabled {\\r\\n  background: #333d47;\\r\\n  color: #888;\\r\\n  cursor: not-allowed;\\r\\n}\\r\\n\\r\\n.satellite-control-button + .satellite-control-button {\\r\\n  margin-left: 16px;\\r\\n}\\r\\n"],"sourceRoot":""}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC13b3Jrc2hvcHMtbWF0ZXJpYWwvLi9zcmMvdG9waWNzL21pY3JvZnJvbnRlbmRzL2xpYi9iYXNlLWNvbXBvbmVudHMvQnV0dG9uLmNzcz85NWRhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNrSTtBQUM3QjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EscUVBQXFFLDBCQUEwQixnQkFBZ0IsbUJBQW1CLHNCQUFzQixvQkFBb0IseUJBQXlCLEtBQUsseUNBQXlDLDBCQUEwQixLQUFLLDBDQUEwQywwQkFBMEIsS0FBSyx3Q0FBd0MsMEJBQTBCLGtCQUFrQiwwQkFBMEIsS0FBSywrREFBK0Qsd0JBQXdCLEtBQUssV0FBVywySEFBMkgsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLHFEQUFxRCwwQkFBMEIsZ0JBQWdCLG1CQUFtQixzQkFBc0Isb0JBQW9CLHlCQUF5QixLQUFLLHlDQUF5QywwQkFBMEIsS0FBSywwQ0FBMEMsMEJBQTBCLEtBQUssd0NBQXdDLDBCQUEwQixrQkFBa0IsMEJBQTBCLEtBQUssK0RBQStELHdCQUF3QixLQUFLLHVCQUF1QjtBQUN4NUM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQyIsImZpbGUiOiI3MzguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zYXRlbGxpdGUtY29udHJvbC1idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogIzEwNDQ3NDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5zYXRlbGxpdGUtY29udHJvbC1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzE2NWZhMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNhdGVsbGl0ZS1jb250cm9sLWJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogIzJmODRjZTtcXHJcXG59XFxyXFxuLnNhdGVsbGl0ZS1jb250cm9sLWJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMzMzZDQ3O1xcclxcbiAgY29sb3I6ICM4ODg7XFxyXFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2F0ZWxsaXRlLWNvbnRyb2wtYnV0dG9uICsgLnNhdGVsbGl0ZS1jb250cm9sLWJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTZweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RvcGljcy9taWNyb2Zyb250ZW5kcy9saWIvYmFzZS1jb21wb25lbnRzL0J1dHRvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNhdGVsbGl0ZS1jb250cm9sLWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMTA0NDc0O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNhdGVsbGl0ZS1jb250cm9sLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMTY1ZmExO1xcclxcbn1cXHJcXG5cXHJcXG4uc2F0ZWxsaXRlLWNvbnRyb2wtYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMmY4NGNlO1xcclxcbn1cXHJcXG4uc2F0ZWxsaXRlLWNvbnRyb2wtYnV0dG9uOmRpc2FibGVkIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMzMzNkNDc7XFxyXFxuICBjb2xvcjogIzg4ODtcXHJcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxufVxcclxcblxcclxcbi5zYXRlbGxpdGUtY29udHJvbC1idXR0b24gKyAuc2F0ZWxsaXRlLWNvbnRyb2wtYnV0dG9uIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///738\n')},52:(module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ".chat-widget {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-end;\\r\\n  font-size: 0.8em;\\r\\n}\\r\\n\\r\\n.chat-container {\\r\\n  background: #20212c;\\r\\n  border: 1px solid white;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.chat-container form {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.chat-container input {\\r\\n  width: 100%;\\r\\n  flex: 1 1 auto;\\r\\n}\\r\\n\\r\\n.chat-container button {\\r\\n  flex: 0 0 auto;\\r\\n}\\r\\n\\r\\n.chat-container ul {\\r\\n  height: 200px;\\r\\n  width: 300px;\\r\\n  overflow-y: auto;\\r\\n  white-space: normal;\\r\\n  list-style-type: none;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.chat-container li {\\r\\n  width: 100%;\\r\\n  text-overflow: ellipsis;\\r\\n  padding: 0.5rem;\\r\\n  border-bottom: 1px solid rgb(112, 112, 112);\\r\\n  overflow: hidden;\\r\\n}\\r\\n", "",{"version":3,"sources":["webpack://./src/topics/microfrontends/lib/live-chat/ChatWidget.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,SAAS;EACT,QAAQ;EACR,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,eAAe;EACf,2CAA2C;EAC3C,gBAAgB;AAClB","sourcesContent":[".chat-widget {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-end;\\r\\n  font-size: 0.8em;\\r\\n}\\r\\n\\r\\n.chat-container {\\r\\n  background: #20212c;\\r\\n  border: 1px solid white;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.chat-container form {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.chat-container input {\\r\\n  width: 100%;\\r\\n  flex: 1 1 auto;\\r\\n}\\r\\n\\r\\n.chat-container button {\\r\\n  flex: 0 0 auto;\\r\\n}\\r\\n\\r\\n.chat-container ul {\\r\\n  height: 200px;\\r\\n  width: 300px;\\r\\n  overflow-y: auto;\\r\\n  white-space: normal;\\r\\n  list-style-type: none;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.chat-container li {\\r\\n  width: 100%;\\r\\n  text-overflow: ellipsis;\\r\\n  padding: 0.5rem;\\r\\n  border-bottom: 1px solid rgb(112, 112, 112);\\r\\n  overflow: hidden;\\r\\n}\\r\\n"],"sourceRoot":""}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC13b3Jrc2hvcHMtbWF0ZXJpYWwvLi9zcmMvdG9waWNzL21pY3JvZnJvbnRlbmRzL2xpYi9saXZlLWNoYXQvQ2hhdFdpZGdldC5jc3M/MTY4NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDa0k7QUFDN0I7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHdEQUF3RCxzQkFBc0IsZ0JBQWdCLGVBQWUsb0JBQW9CLDZCQUE2Qiw0QkFBNEIsdUJBQXVCLEtBQUsseUJBQXlCLDBCQUEwQiw4QkFBOEIsb0JBQW9CLDZCQUE2QixLQUFLLDhCQUE4QixvQkFBb0IsS0FBSywrQkFBK0Isa0JBQWtCLHFCQUFxQixLQUFLLGdDQUFnQyxxQkFBcUIsS0FBSyw0QkFBNEIsb0JBQW9CLG1CQUFtQix1QkFBdUIsMEJBQTBCLDRCQUE0QixpQkFBaUIsS0FBSyw0QkFBNEIsa0JBQWtCLDhCQUE4QixzQkFBc0Isa0RBQWtELHVCQUF1QixLQUFLLFdBQVcseUhBQXlILFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSx3Q0FBd0Msc0JBQXNCLGdCQUFnQixlQUFlLG9CQUFvQiw2QkFBNkIsNEJBQTRCLHVCQUF1QixLQUFLLHlCQUF5QiwwQkFBMEIsOEJBQThCLG9CQUFvQiw2QkFBNkIsS0FBSyw4QkFBOEIsb0JBQW9CLEtBQUssK0JBQStCLGtCQUFrQixxQkFBcUIsS0FBSyxnQ0FBZ0MscUJBQXFCLEtBQUssNEJBQTRCLG9CQUFvQixtQkFBbUIsdUJBQXVCLDBCQUEwQiw0QkFBNEIsaUJBQWlCLEtBQUssNEJBQTRCLGtCQUFrQiw4QkFBOEIsc0JBQXNCLGtEQUFrRCx1QkFBdUIsS0FBSyx1QkFBdUI7QUFDcHRFO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUMiLCJmaWxlIjoiNTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jaGF0LXdpZGdldCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXQtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMyMDIxMmM7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhdC1jb250YWluZXIgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhdC1jb250YWluZXIgaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmbGV4OiAxIDEgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXQtY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICBmbGV4OiAwIDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXQtY29udGFpbmVyIHVsIHtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5jaGF0LWNvbnRhaW5lciBsaSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMTIsIDExMiwgMTEyKTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90b3BpY3MvbWljcm9mcm9udGVuZHMvbGliL2xpdmUtY2hhdC9DaGF0V2lkZ2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtFQUNSLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsMkNBQTJDO0VBQzNDLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2hhdC13aWRnZXQge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxufVxcclxcblxcclxcbi5jaGF0LWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMjAyMTJjO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXQtY29udGFpbmVyIGZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXQtY29udGFpbmVyIGlucHV0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZmxleDogMSAxIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jaGF0LWNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgZmxleDogMCAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jaGF0LWNvbnRhaW5lciB1bCB7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhdC1jb250YWluZXIgbGkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTEyLCAxMTIsIDExMik7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///52\n')}}]);