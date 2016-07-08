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
 * FormGroup 组件.
 */

var FormGroup = function (_Component) {
    (0, _inherits3.default)(FormGroup, _Component);

    function FormGroup() {
        (0, _classCallCheck3.default)(this, FormGroup);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormGroup).apply(this, arguments));
    }

    (0, _createClass3.default)(FormGroup, [{
        key: 'render',

        //渲染
        value: function render() {
            var _props = this.props;
            var col = _props.col;
            var className = _props.className;
            var children = _props.children;
            var others = (0, _objectWithoutProperties3.default)(_props, ['col', 'className', 'children']);
            var colClass = col ? 'col-xs-' + col : null;

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: (0, _classnames2.default)('form-group', colClass, className) }),
                children
            );
        }
        //props校验

    }]);
    return FormGroup;
}(_react.Component);

FormGroup.propTypes = {
    //所占比例
    col: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    //自定义样式
    className: _react.PropTypes.string
};
exports.default = FormGroup;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(FormGroup, 'FormGroup', 'src/scripts/FormGroup.js');
})();

;