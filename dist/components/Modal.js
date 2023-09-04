"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../style/modal.scss");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    isOpen,
    onClose,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "overlay-modal",
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, children, /*#__PURE__*/_react.default.createElement("span", {
    className: "close",
    onClick: onClose
  }, "x"))));
};
var _default = Modal;
exports.default = _default;