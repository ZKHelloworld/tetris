/**
 * square is the basic part of a classic tetris' shape
 */
class Square extends egret.Shape {
    private static BORDER_COLOR: number = 0x000000;
    private static SIZE: number = 50;

    constructor(color: number, x: number, y:number) {
        super();
        this.draw(color, x, y);
    }

    /**
     * darken color
     */
    private darken(color: number) {
        let darked: number = color;

        if ((color & 0x000011) >= 0x000020) {
            darked -= 0x000020;
        } else {
            darked -= (color & 0x000011);
        }

        if ((color & 0x001100) >= 0x002000) {
            darked -= 0x002000;
        } else {
            darked -= (color & 0x001100);
        }

        if ((color & 0x110000) >= 0x200000) {
            darked -= 0x200000;
        } else {
            darked -= (color & 0x110000);
        }

        return darked;
    }

    private draw(color: number, x: number, y:number) {
        // border box
        this.graphics.beginFill(Square.BORDER_COLOR);
        this.graphics.drawRect(x, y, Square.SIZE, Square.SIZE);

        // shadow box
        this.graphics.beginFill(this.darken(color));
        this.graphics.drawRect(x + 2, y + 2, Square.SIZE - 4, Square.SIZE - 4);

        // content box
        this.graphics.beginFill(color);
        this.graphics.drawRect(x + 6, y + 6, Square.SIZE - 12, Square.SIZE - 12);

        this.graphics.endFill();
    }
}