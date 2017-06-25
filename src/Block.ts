class Block extends egret.DisplayObjectContainer {
    public static Shape = {
        DOT: 'dot',
        LINE_TWO: 'line_two',
        LINE_THREE: 'line_three',
        LINE_FOUR: 'line_four',
        CORNOR_THREE: 'cornor_three',
        CORNOR_FOUR: 'cornor_four',
        CORNOR_FOUR_REVERSE: 'cornor_four_reverse',
        THREE_WITH_DOT: 'three_with_dot',
        Z: 'z',
        Z_REVERSE: 'z_reverse',
        SQUARE: 'square',
    };

    private static COLOR = {
        DOT: 0xFFFFFF,
        LINE_TWO: 0x00924C,
        LINE_THREE: 0x0E77CA,
        LINE_FOUR: 0x802800,
        CORNOR_THREE: 0xD75000,
        CORNOR_FOUR: 0x6252CD,
        CORNOR_FOUR_REVERSE: 0xE09A00,
        THREE_WITH_DOT: 0x3DB8C1,
        Z: 0x919191,
        Z_REVERSE: 0xD73435,
        SQUARE: 0xF7629E,
    }

    private shape: string;
    private direction: string; // top left bottom right
    private squares: Array<Square> = [];

    constructor(shape: string) {
        super();

        this.shape = shape;
        this.direction = 'top';
        this.redraw();
    }

    private clear() {
        this.squares[0] && this.removeChild(this.squares[0]);
        this.squares[1] && this.removeChild(this.squares[1]);
        this.squares[2] && this.removeChild(this.squares[2]);
        this.squares[3] && this.removeChild(this.squares[3]);
        this.squares = [];
    }

    public redraw(shape?: string) {
        this.clear();

        switch(shape || this.shape) {
            case Block.Shape.DOT:
                this.squares[0] = new Square(Block.COLOR.DOT, 0, 0);
                this.addChild(this.squares[0]);
                break;
            case Block.Shape.LINE_TWO:
                this.squares[0] = new Square(Block.COLOR.LINE_TWO, 0, 0);
                this.squares[1] = new Square(Block.COLOR.LINE_TWO, 50, 0);

                this.addChild(this.squares[0]);
                this.addChild(this.squares[1]);
                break;
            case Block.Shape.LINE_THREE:
                this.squares[0] = new Square(Block.COLOR.LINE_THREE, 0, 0);
                this.squares[1] = new Square(Block.COLOR.LINE_THREE, 50, 0);
                this.squares[2] = new Square(Block.COLOR.LINE_THREE, 100, 0);

                this.addChild(this.squares[0]);
                this.addChild(this.squares[1]);
                this.addChild(this.squares[2]);
                break;
            case Block.Shape.LINE_FOUR:
                this.squares[0] = new Square(Block.COLOR.LINE_FOUR, 0, 0);
                this.squares[1] = new Square(Block.COLOR.LINE_FOUR, 50, 0);
                this.squares[2] = new Square(Block.COLOR.LINE_FOUR, 100, 0);
                this.squares[3] = new Square(Block.COLOR.LINE_FOUR, 150, 0);

                this.addChild(this.squares[0]);
                this.addChild(this.squares[1]);
                this.addChild(this.squares[2]);
                this.addChild(this.squares[3]);
                break;
            case Block.Shape.CORNOR_THREE:
                this.squares[0] = new Square(Block.COLOR.CORNOR_THREE, 0, 0);
                this.squares[1] = new Square(Block.COLOR.CORNOR_THREE, 50, 0);
                this.squares[2] = new Square(Block.COLOR.CORNOR_THREE, 0, 50);

                this.addChild(this.squares[0]);
                this.addChild(this.squares[1]);
                this.addChild(this.squares[2]);
                break;
            case Block.Shape.CORNOR_FOUR:
                this.squares[0] = new Square(Block.COLOR.CORNOR_FOUR, 0, 0);
                this.squares[1] = new Square(Block.COLOR.CORNOR_FOUR, 50, 0);
                this.squares[2] = new Square(Block.COLOR.CORNOR_FOUR, 100, 0);
                this.squares[3] = new Square(Block.COLOR.CORNOR_FOUR, 0, 50);

                this.addChild(this.squares[0]);
                this.addChild(this.squares[1]);
                this.addChild(this.squares[2]);
                this.addChild(this.squares[3]);
                break;
            case Block.Shape.CORNOR_FOUR_REVERSE:
                this.squares[0] = new Square(Block.COLOR.CORNOR_FOUR_REVERSE, 0, 0);
                this.squares[1] = new Square(Block.COLOR.CORNOR_FOUR_REVERSE, 50, 0);
                this.squares[2] = new Square(Block.COLOR.CORNOR_FOUR_REVERSE, 100, 0);
                this.squares[3] = new Square(Block.COLOR.CORNOR_FOUR_REVERSE, 100, 50);

                this.addChild(this.squares[0]);
                this.addChild(this.squares[1]);
                this.addChild(this.squares[2]);
                this.addChild(this.squares[3]);
                break;
            case Block.Shape.THREE_WITH_DOT:
                this.squares[0] = new Square(Block.COLOR.THREE_WITH_DOT, 0, 0);
                this.squares[1] = new Square(Block.COLOR.THREE_WITH_DOT, 50, 0);
                this.squares[2] = new Square(Block.COLOR.THREE_WITH_DOT, 100, 0);
                this.squares[3] = new Square(Block.COLOR.THREE_WITH_DOT, 50, 50);

                this.addChild(this.squares[0]);
                this.addChild(this.squares[1]);
                this.addChild(this.squares[2]);
                this.addChild(this.squares[3]);
                break;
            case Block.Shape.Z:
                this.squares[0] = new Square(Block.COLOR.Z, 0, 0);
                this.squares[1] = new Square(Block.COLOR.Z, 50, 0);
                this.squares[2] = new Square(Block.COLOR.Z, 50, 50);
                this.squares[3] = new Square(Block.COLOR.Z, 100, 50);

                this.addChild(this.squares[0]);
                this.addChild(this.squares[1]);
                this.addChild(this.squares[2]);
                this.addChild(this.squares[3]);
                break;
            case Block.Shape.Z_REVERSE:
                this.squares[0] = new Square(Block.COLOR.Z_REVERSE, 50, 0);
                this.squares[1] = new Square(Block.COLOR.Z_REVERSE, 100, 0);
                this.squares[2] = new Square(Block.COLOR.Z_REVERSE, 0, 50);
                this.squares[3] = new Square(Block.COLOR.Z_REVERSE, 50, 50);

                this.addChild(this.squares[0]);
                this.addChild(this.squares[1]);
                this.addChild(this.squares[2]);
                this.addChild(this.squares[3]);
                break;
            case Block.Shape.SQUARE:
                this.squares[0] = new Square(Block.COLOR.SQUARE, 0, 0);
                this.squares[1] = new Square(Block.COLOR.SQUARE, 50, 0);
                this.squares[2] = new Square(Block.COLOR.SQUARE, 0, 50);
                this.squares[3] = new Square(Block.COLOR.SQUARE, 50, 50);

                this.addChild(this.squares[0]);
                this.addChild(this.squares[1]);
                this.addChild(this.squares[2]);
                this.addChild(this.squares[3]);
                break;
        }
    }

    public static randomShape(): string {
        switch(Math.ceil(Math.random() * 100) % 11) {
            case 0: return Block.Shape.DOT;
            case 1: return Block.Shape.LINE_TWO;
            case 2: return Block.Shape.LINE_THREE;
            case 3: return Block.Shape.LINE_FOUR;
            case 4: return Block.Shape.CORNOR_THREE;
            case 5: return Block.Shape.CORNOR_FOUR;
            case 6: return Block.Shape.CORNOR_FOUR_REVERSE;
            case 7: return Block.Shape.THREE_WITH_DOT;
            case 8: return Block.Shape.Z;
            case 9: return Block.Shape.Z_REVERSE;
            case 10: return Block.Shape.SQUARE;
        }
    }
}