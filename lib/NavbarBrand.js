'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * NavbarBrand 组件
 */

var NavbarBrand = function (_Component) {
    (0, _inherits3.default)(NavbarBrand, _Component);

    function NavbarBrand() {
        (0, _classCallCheck3.default)(this, NavbarBrand);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(NavbarBrand).apply(this, arguments));
    }

    (0, _createClass3.default)(NavbarBrand, [{
        key: 'render',

        //渲染
        value: function render() {
            var _props = this.props;
            var href = _props.href;
            var className = _props.className;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['href', 'className', 'children']);


            return _react2.default.createElement(
                'a',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('navbar-brand', className), href: href || '#' }),
                children
            );
        }
        //props校验

    }]);
    return NavbarBrand;
}(_react.Component);

NavbarBrand.propTypes = {
    href: _react.PropTypes.string,
    className: _react.PropTypes.string
};
exports.default = NavbarBrand;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(NavbarBrand, 'NavbarBrand', 'src/scripts/NavbarBrand.js');
})();

;