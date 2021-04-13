// tsc -t es5 app.ts
// class Product {
//     private _scale: number = 0;
//     private _name: string = '';
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var Scales = /** @class */ (function () {
    function Scales() {
        this._products = [];
    }
    Scales.prototype.add = function (product) {
        this._products.push(product);
    };
    Scales.prototype.getSumScale = function () {
        return this._products
            .map(function (a) { return a.getScale(); })
            .reduce(function (scale, sum) { return scale + sum; }, 0);
    };
    Scales.prototype.getNameList = function () {
        var reducer = function (arr, name) { return __spreadArray(__spreadArray([], arr), [name]); };
        return this._products
            .map(function (a) { return a.getName(); })
            .reduce(reducer, []);
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple() {
        this._scale = 10;
        this._name = 'Apple';
    }
    Apple.prototype.getScale = function () {
        return this._scale;
    };
    Apple.prototype.getName = function () {
        return this._name;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato() {
        this._scale = 2;
        this._name = 'Tomato';
    }
    Tomato.prototype.getScale = function () {
        return this._scale;
    };
    Tomato.prototype.getName = function () {
        return this._name;
    };
    return Tomato;
}());
var apple = new Apple();
var tomato = new Tomato();
var scales = new Scales();
scales.add(apple);
scales.add(tomato);
console.log(scales.getNameList());
console.log(scales.getSumScale());
