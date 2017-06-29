/**
 * square is the basic part of a classic tetris' shape
 */
class Square extends egret.Shape {
    private static BORDER_COLOR: number = 0x000000;

    constructor(color: number) {
        super();
        this.draw(color);
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

    private draw(color: number) {
        // border box
        this.graphics.beginFill(Square.BORDER_COLOR);
        this.graphics.drawRect(0, 0, SIZE, SIZE);

        // shadow box
        this.graphics.beginFill(this.darken(color));
        this.graphics.drawRect(2, 2, SIZE - 4, SIZE - 4);

        // content box
        this.graphics.beginFill(color);
        this.graphics.drawRect(6, 6, SIZE - 12, SIZE - 12);

        this.graphics.endFill();
    }
}