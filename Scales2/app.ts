// tsc -t es5 app.ts


interface IScalable {
    getScale(): number;
    getName(): string;
}

class Scales {

    private _products: IScalable[] = [];

    add(product: IScalable) {
        this._products.push(product);
    }

    getSumScale(): number {
        return this._products
            .map((a: IScalable): number => a.getScale())
            .reduce((scale: number, sum: number): number => scale + sum, 0)
    }

    getNameList(): string {

        const reducer = (arr: string[] | any, name: string): string[] => [...arr, name]

        return this._products
            .map((a: IScalable): string => a.getName())
            .reduce(reducer, []);
    }
}

class Apple implements IScalable {


    private _scale: number = 10;
    private _name: string = 'Apple';

    getScale(): number {
        return this._scale;
    }
    getName(): string {
        return this._name;
    }
}

class Tomato implements IScalable {

    private _scale: number = 2;
    private _name: string = 'Tomato';

    getScale(): number {
        return this._scale;
    }
    getName(): string {
        return this._name;
    }
}

let apple: Apple = new Apple()
let tomato: Tomato = new Tomato()

let scales: Scales = new Scales();

scales.add(apple);
scales.add(tomato);

console.log(scales.getNameList());
console.log(scales.getSumScale());