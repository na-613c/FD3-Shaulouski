var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// tsc -t es5 app.ts
var Product = /** @class */ (function () {
    function Product(scale, name) {
        this._scale = 0;
        this._name = '';
        this._scale = scale;
        this._name = name;
    }
    Product.prototype.getScale = function () {
        return this._scale;
    };
    Product.prototype.getName = function () {
        return this._name;
    };
    return Product;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this._products = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this._products.push(item);
    };
    ;
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this._products[index];
    };
    ;
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this._products.length;
    };
    ;
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this._KEY = 'ScalesStorageEngine';
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var _products = JSON.parse(localStorage.getItem(this._KEY)) || [];
        _products.push(item);
        localStorage.setItem(this._KEY, JSON.stringify(_products));
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var _products = JSON.parse(localStorage.getItem(this._KEY)) || [];
        //@ts-ignore
        return new Product(_products[index]._scale, _products[index]._name);
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var _products = JSON.parse(localStorage.getItem(this._KEY)) || [];
        return _products.length;
    };
    ;
    return ScalesStorageEngineLocalStorage;
}());
var Scales = /** @class */ (function () {
    function Scales(storageEngine) {
        this._storageEngine = storageEngine;
    }
    Scales.prototype.add = function (product) {
        this._storageEngine.addItem(product);
    };
    Scales.prototype.getSumScale = function () {
        var _products = [];
        for (var i = 0; i < this._storageEngine.getCount(); i++) {
            _products.push(this._storageEngine.getItem(i));
        }
        return _products
            .map(function (a) { return a.getScale(); })
            .reduce(function (scale, sum) { return scale + sum; }, 0);
    };
    Scales.prototype.getNameList = function () {
        var _products = [];
        for (var i = 0; i < this._storageEngine.getCount(); i++) {
            _products.push(this._storageEngine.getItem(i));
        }
        var reducer = function (arr, name) { return __spreadArray(__spreadArray([], arr), [name]); };
        return _products
            .map(function (a) { return a.getName(); })
            .reduce(reducer, []);
    };
    return Scales;
}());
var apple = new Product(1, 'Apple');
var tomato = new Product(2, 'Tomato');
var tomato2 = new Product(3, 'Tomato2');
var scalesStorageEngineArray = new Scales(new ScalesStorageEngineArray);
scalesStorageEngineArray.add(apple);
scalesStorageEngineArray.add(tomato);
scalesStorageEngineArray.add(tomato2);
var scalesStorageEngineLocalStorage = new Scales(new ScalesStorageEngineLocalStorage);
scalesStorageEngineLocalStorage.add(apple);
scalesStorageEngineLocalStorage.add(tomato);
scalesStorageEngineLocalStorage.add(tomato2);
console.log(scalesStorageEngineArray.getNameList(), 'scalesStorageEngineArray');
console.log(scalesStorageEngineArray.getSumScale(), 'scalesStorageEngineArray');
console.log(scalesStorageEngineLocalStorage.getNameList(), 'scalesStorageEngineLocalStorage');
console.log(scalesStorageEngineLocalStorage.getSumScale(), 'scalesStorageEngineLocalStorage');
localStorage.clear();
