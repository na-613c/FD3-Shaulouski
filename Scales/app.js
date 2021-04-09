// tsc -t es5 app.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(scale, name) {
        this._scale = 0;
        this._name = '';
        this._scale = scale;
        this._name = name;
    }
    Object.defineProperty(Product.prototype, "getScale", {
        get: function () {
            return this._scale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var Scales = /** @class */ (function () {
    function Scales() {
        this._products = [];
    }
    Object.defineProperty(Scales.prototype, "add", {
        set: function (product) {
            this._products.push(product);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scales.prototype, "getSumScale", {
        get: function () {
            return this._products
                .map(function (a) { return a.getScale; })
                .reduce(function (scale, sum) { return scale + sum; }, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scales.prototype, "getNameList", {
        get: function () {
            return this._products
                .map(function (a) { return a.getName; })
                .reduce(function (name, str) { return str + " " + name; });
        },
        enumerable: false,
        configurable: true
    });
    return Scales;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(scale, name) {
        return _super.call(this, scale, name) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(scale, name) {
        return _super.call(this, scale, name) || this;
    }
    return Tomato;
}(Product));
var apple = new Apple(10, 'Apple');
var tomato = new Tomato(2, 'Tomato');
var scales = new Scales();
scales.add = apple;
scales.add = tomato;
console.log(scales.getNameList);
console.log(scales.getSumScale);
