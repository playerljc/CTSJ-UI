"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_react=_interopRequireDefault(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),Example=function(e){function r(e){var t;return(0,_classCallCheck2.default)(this,r),(t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(r).call(this,e))).state={isOpenCode:!1},t}return(0,_inherits2.default)(r,e),(0,_createClass2.default)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.children,a=t.title,l=t.introduction;return _react.default.createElement("div",{className:"CT-UI-Example"},_react.default.createElement("div",{className:"CT-UI-Example-Component"},r[0]),_react.default.createElement("fieldset",{className:"CT-UI-Example-Fieldset"},_react.default.createElement("legend",null,a),_react.default.createElement("div",{dangerouslySetInnerHTML:{__html:l}})),_react.default.createElement("div",{className:"CT-UI-Example-footer ".concat(this.state.isOpenCode?"open":"")}," ",_react.default.createElement("span",{className:"iconfont ".concat(this.state.isOpenCode?"iconcode":"iconcode1"),onClick:function(){e.setState({isOpenCode:!e.state.isOpenCode})}})),_react.default.createElement("div",{className:"CT-UI-Example-Code ".concat(this.state.isOpenCode?"open":"")},r[1]))}}]),r}(_react.default.Component);Example.propTypes={children:_propTypes.default.array,title:_propTypes.default.string,introduction:_propTypes.default.string};var _default=Example;exports.default=_default;
//# sourceMappingURL=example.js.map
