"use strict";

var _litElement = require("lit-element");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<slot/>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            ::slotted(img) { min-height: 1px; min-width: 1px; }\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LazyImage = /*#__PURE__*/function (_LitElement) {
  _inherits(LazyImage, _LitElement);

  var _super = _createSuper(LazyImage);

  _createClass(LazyImage, null, [{
    key: "styles",
    get: function get() {
      // Minimum dimensions needed for IntersectionObserver to work
      return (0, _litElement.css)(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        src: {
          type: String,
          reflect: true
        },
        canUseLazyAttr: {
          type: Boolean
        },
        intersected: {
          type: Boolean
        },
        tolerance: {
          type: String
        } // rootMargin for IntersectionObserver

      };
    }
  }]);

  function LazyImage() {
    var _this;

    _classCallCheck(this, LazyImage);

    _this = _super.call(this);
    _this.intersected = false;
    _this.tolerance = '0px 0px 0px 0px';
    _this.canUseLazyAttr = 'loading' in HTMLImageElement.prototype;

    if (!_this.canUseLazyAttr) {
      _this.setupIntersectionObserver();
    }

    return _this;
  }

  _createClass(LazyImage, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldVal, newVal) {
      // Call to super to update the instance property
      _get(_getPrototypeOf(LazyImage.prototype), "attributeChangedCallback", this).call(this, name, oldVal, newVal);

      if (name === 'src' && (this.canUseLazyAttr || this.intersected)) {
        this.setImageSrc();
      }
    }
  }, {
    key: "getImage",
    value: function getImage() {
      return this.children[0];
    }
  }, {
    key: "setImageSrc",
    value: function setImageSrc(value) {
      this.getImage().setAttribute('src', this.src);
    }
  }, {
    key: "setupIntersectionObserver",
    value: function setupIntersectionObserver() {
      var config = {
        rootMargin: this.tolerance
      };
      new IntersectionObserver(this.intersectionObserverCallback.bind(this), config).observe(this.getImage());
    }
  }, {
    key: "intersectionObserverCallback",
    value: function intersectionObserverCallback(entries, observer) {
      var _this2 = this;

      entries.forEach(function (_ref) {
        var isIntersecting = _ref.isIntersecting;

        if (isIntersecting) {
          observer.disconnect();

          _this2.setImageSrc();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _litElement.html)(_templateObject2());
    }
  }]);

  return LazyImage;
}(_litElement.LitElement);

customElements.define('lazy-img', LazyImage);