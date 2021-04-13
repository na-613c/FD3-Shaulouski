// tsc -t es5 app.ts
class Product {
    private _scale: number = 0;
    private _name: string = '';

    constructor(scale: number, name: string) {
        this._scale = scale;
        this._name = name;
    }

    getScale(): number {
        return this._scale;
    }
    getName(): string {
        return this._name;
    }
}

interface IStorageEngine {
    addItem(item: Product): void;
    getItem(index: number): Product;
    getCount(): number;
}

class ScalesStorageEngineArray {
    private _products: Product[] = [];

    addItem(item: Product): void {
        this._products.push(item)
    };

    getItem(index: number): Product {
        return this._products[index];
    };
    getCount(): number {
        return this._products.length;
    };
}

class ScalesStorageEngineLocalStorage {

    private _KEY: string = 'ScalesStorageEngine';

    addItem(item: Product): void {
        let _products: Product[] = JSON.parse(localStorage.getItem(this._KEY))||[];
        _products.push(item)
        localStorage.setItem(this._KEY, JSON.stringify(_products));
    };

    getItem(index: number): Product {
        let _products: Product[] = JSON.parse(localStorage.getItem(this._KEY)) || [];
        //@ts-ignore
        return new Product(_products[index]._scale, _products[index]._name);
    };
    getCount(): number {
        let _products: Product[] = JSON.parse(localStorage.getItem(this._KEY)) || [];
        return _products.length;
    };
}

class Scales<StorageEngine extends IStorageEngine> {

    private _storageEngine: StorageEngine;

    constructor(storageEngine: StorageEngine) {
        this._storageEngine = storageEngine;
    }

    add(product: Product) {
        this._storageEngine.addItem(product);
    }

    getSumScale(): number {
        let _products: Product[] = [];

        for (let i = 0; i < this._storageEngine.getCount(); i++) {
            _products.push(this._storageEngine.getItem(i))
        }

        return _products
            .map((a: Product): number => a.getScale())
            .reduce((scale: number, sum: number): number => scale + sum, 0)
    }

    getNameList(): string {
        let _products: Product[] = [];

        for (let i = 0; i < this._storageEngine.getCount(); i++) {
            _products.push(this._storageEngine.getItem(i))
        }

        const reducer = (arr: string[] | any, name: string): string[] => [...arr, name]

        return _products
            .map((a: Product): string => a.getName())
            .reduce(reducer, []);
    }
}


let apple: Product = new Product(1, 'Apple')
let tomato: Product = new Product(2, 'Tomato')
let tomato2: Product = new Product(3, 'Tomato2')


let scalesStorageEngineArray: Scales<ScalesStorageEngineArray> = new Scales(new ScalesStorageEngineArray);

scalesStorageEngineArray.add(apple);
scalesStorageEngineArray.add(tomato);
scalesStorageEngineArray.add(tomato2);

let scalesStorageEngineLocalStorage: Scales<ScalesStorageEngineLocalStorage> = new Scales(new ScalesStorageEngineLocalStorage);

scalesStorageEngineLocalStorage.add(apple);
scalesStorageEngineLocalStorage.add(tomato);
scalesStorageEngineLocalStorage.add(tomato2);

console.log(scalesStorageEngineArray.getNameList(), 'scalesStorageEngineArray');
console.log(scalesStorageEngineArray.getSumScale(), 'scalesStorageEngineArray');

console.log(scalesStorageEngineLocalStorage.getNameList(), 'scalesStorageEngineLocalStorage');
console.log(scalesStorageEngineLocalStorage.getSumScale(), 'scalesStorageEngineLocalStorage');

localStorage.clear();