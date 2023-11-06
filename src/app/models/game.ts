export class Game {

    public id: String;
    public name: String;
    public gen: number;
    public isRomHack: boolean;

    constructor (id: String, name: String, gen: number, isRomHack: boolean) {
        this.id = id;
        this.name = name;
        this.gen = gen;
        this.isRomHack = isRomHack;
    }
}