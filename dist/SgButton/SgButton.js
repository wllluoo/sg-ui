'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SgButton = function (_React$Component) {
    _inherits(SgButton, _React$Component);

    function SgButton(props) {
        _classCallCheck(this, SgButton);

        var _this = _possibleConstructorReturn(this, (SgButton.__proto__ || Object.getPrototypeOf(SgButton)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(SgButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref) {
            _objectDestructuringEmpty(_ref);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                onClick = _props.onClick,
                key = _props.key,
                children = _props.children;

            console.log('children', children);

            if (!children) {
                throw new TypeError('children is required!');
            }
            return _react2.default.createElement(
                'button',
                { onClick: onClick, key: key },
                children
            );
        }
    }]);

    return SgButton;
}(_react2.default.Component);

exports.default = SgButton;

Demo.defaultProps = {
    key: _shortid2.default.generate(),
    onClick: function onClick() {}
};
Demo.propTypes = {
    key: _propTypes2.default.number,
    onClick: _propTypes2.default.func
};