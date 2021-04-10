// tsc -t es5 app.ts
class Product {
    private _scale: number = 0;
    private _name: string = '';

    constructor(scale: number, name: string) {
        this._scale = scale;
        this._name = name;
    }

    get getScale(): number {
        return this._scale;
    }
    get getName(): string {
        return this._name;
    }
}

class Scales {

    private _products: Product[] = [];

    set add(product: Product) {
        this._products.push(product);
    }

    get getSumScale(): number {
        return this._products
            .map(a => a.getScale)
            .reduce((scale: number, sum: number): number => scale + sum, 0)
    }

    get getNameList(): string {
        return this._products
            .map(a => a.getName)
            .reduce((str: string, name: string): string => `${str} ${name}`)
    }
}

class Apple extends Product {
    constructor() {
        super(10, 'Apple');
    }
}

class Tomato extends Product {
    constructor() {
        super(2, 'Tomato');
    }
}

let apple: Apple = new Apple()
let tomato: Tomato = new Tomato()

let scales: Scales = new Scales();

scales.add = apple;
scales.add = tomato;

console.log(scales.getNameList);
console.log(scales.getSumScale);