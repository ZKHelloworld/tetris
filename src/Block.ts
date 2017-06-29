class Block extends egret.DisplayObjectContainer {
    private shape: Shape;
    private direction: Direction;
    private squares: Array<Square> = [];

    constructor(shape: Shape) {
        super();

        this.shape = shape;
        this.direction = Direction.TOP;

        this.redraw();
    }

    private reinitialize(color: number): void {
        this.contains(this.squares[0]) && this.removeChild(this.squares[0]);
        this.contains(this.squares[1]) && this.removeChild(this.squares[1]);
        this.contains(this.squares[2]) && this.removeChild(this.squares[2]);
        this.contains(this.squares[3]) && this.removeChild(this.squares[3]);

        this.squares = [
            new Square(color),
            new Square(color),
            new Square(color),
            new Square(color),
        ];
    }

    private redraw(): void {
        this.reinitialize(COLOR[this.shape]);

        const { shape, squares, direction } = this;

        switch(shape) {
            case Shape.DOT:
                this.addChild(squares[0]);
                break;
            case Shape.LINE_TWO:
                this.addChild(squares[0]);
                this.addChild(squares[1]);

                if (direction === Direction.TOP || direction === Direction.DOWN) {
                    squares[1].x = SIZE;
                } else {
                    squares[1].y = SIZE;
                }
                break;
            case Shape.LINE_THREE:
                this.addChild(squares[0]);
                this.addChild(squares[1]);
                this.addChild(squares[2]);

                if (direction === Direction.TOP || direction === Direction.DOWN) {
                    squares[1].x = SIZE;
                    squares[2].x = SIZE * 2;
                } else {
                    squares[1].y = SIZE;
                    squares[2].y = SIZE * 2;
                }
                break;
            case Shape.LINE_FOUR:
                this.addChild(squares[0]);
                this.addChild(squares[1]);
                this.addChild(squares[2]);
                this.addChild(squares[3]);

                if (direction === Direction.TOP || direction === Direction.DOWN) {
                    squares[1].x = SIZE;
                    squares[2].x = SIZE * 2;
                    squares[3].x = SIZE * 3;
                } else {
                    squares[1].y = SIZE;
                    squares[2].y = SIZE * 2;
                    squares[3].y = SIZE * 3;
                }
                break;
            case Shape.CORNOR_THREE:
                this.addChild(squares[0]);
                this.addChild(squares[1]);
                this.addChild(squares[2]);

                if (direction === Direction.TOP) {
                    squares[1].x = SIZE;
                    squares[2].y = SIZE;
                } else if (direction === Direction.RIGHT) {
                    squares[1].x = SIZE;
                    squares[2].x = SIZE;
                    squares[2].y = SIZE;
                } else if (direction === Direction.DOWN) {
                    squares[0].x = SIZE;
                    squares[1].y = SIZE;
                    squares[2].x = SIZE;
                    squares[2].y = SIZE;
                } else if (direction === Direction.LEFT) {
                    squares[1].y = SIZE;
                    squares[2].x = SIZE;
                    squares[2].y = SIZE;
                }
                break;
            case Shape.CORNOR_FOUR:
                this.addChild(squares[0]);
                this.addChild(squares[1]);
                this.addChild(squares[2]);
                this.addChild(squares[3]);

                if (direction === Direction.TOP) {
                    squares[1].x = SIZE;
                    squares[2].x = SIZE * 2;
                    squares[3].y = SIZE;
                } else if (direction === Direction.RIGHT) {
                    squares[1].x = SIZE;
                    squares[2].x = SIZE;
                    squares[2].y = SIZE;
                    squares[3].x = SIZE;
                    squares[3].y = SIZE * 2;
                } else if (direction === Direction.DOWN) {
                    squares[0].x = SIZE * 2;
                    squares[1].y = SIZE;
                    squares[2].x = SIZE;
                    squares[2].y = SIZE;
                    squares[3].x = SIZE * 2;
                    squares[3].y = SIZE;
                } else if (direction === Direction.LEFT) {
                    squares[1].y = SIZE;
                    squares[2].y = SIZE * 2;
                    squares[3].x = SIZE;
                    squares[3].y = SIZE * 2;
                }
                break;
            case Shape.CORNOR_FOUR_REVERSE:
                this.addChild(squares[0]);
                this.addChild(squares[1]);
                this.addChild(squares[2]);
                this.addChild(squares[3]);

                if (direction === Direction.TOP) {
                    squares[1].x = SIZE;
                    squares[2].x = SIZE * 2;
                    squares[3].x = SIZE * 2;
                    squares[3].y = SIZE;
                } else if (direction === Direction.RIGHT) {
                    squares[0].x = SIZE;
                    squares[1].x = SIZE;
                    squares[1].y = SIZE;
                    squares[2].y = SIZE * 2;
                    squares[3].x = SIZE;
                    squares[3].y = SIZE * 2;;
                } else if (direction === Direction.DOWN) {
                    squares[1].y = SIZE;
                    squares[2].x = SIZE;
                    squares[2].y = SIZE;
                    squares[3].x = SIZE * 2;
                    squares[3].y = SIZE;
                } else if (direction === Direction.LEFT) {
                    squares[1].x = SIZE;
                    squares[2].y = SIZE;
                    squares[3].y = SIZE * 2;
                }
                break;
            case Shape.THREE_WITH_DOT:
                this.addChild(squares[0]);
                this.addChild(squares[1]);
                this.addChild(squares[2]);
                this.addChild(squares[3]);

                if (direction === Direction.TOP) {
                    squares[1].x = SIZE;
                    squares[2].x = SIZE * 2;
                    squares[3].x = SIZE;
                    squares[3].y = SIZE;
                } else if (direction === Direction.RIGHT) {
                    squares[0].x = SIZE;
                    squares[1].y = SIZE;
                    squares[2].x = SIZE;
                    squares[2].y = SIZE;
                    squares[3].x = SIZE;
                    squares[3].y = SIZE * 2;
                } else if (direction === Direction.DOWN) {
                    squares[0].x = SIZE;
                    squares[1].y = SIZE;
                    squares[2].x = SIZE;
                    squares[2].y = SIZE;
                    squares[3].x = SIZE * 2;
                    squares[3].y = SIZE;
                } else if (direction === Direction.LEFT) {
                    squares[1].y = SIZE;
                    squares[2].x = SIZE;
                    squares[2].y = SIZE;
                    squares[3].y = SIZE * 2;
                }
                break;
            case Shape.Z:
                this.addChild(squares[0]);
                this.addChild(squares[1]);
                this.addChild(squares[2]);
                this.addChild(squares[3]);

                if (direction === Direction.TOP || direction === Direction.DOWN) {
                    squares[1].x = SIZE;
                    squares[2].x = SIZE;
                    squares[2].y = SIZE;
                    squares[3].x = SIZE * 2;
                    squares[3].y = SIZE;
                } else {
                    squares[0].x = SIZE;
                    squares[1].y = SIZE;
                    squares[2].x = SIZE;
                    squares[2].y = SIZE;
                    squares[3].y = SIZE * 2;
                }
                break;
            case Shape.Z_REVERSE:
                this.addChild(squares[0]);
                this.addChild(squares[1]);
                this.addChild(squares[2]);
                this.addChild(squares[3]);

                if (direction === Direction.TOP || direction === Direction.DOWN) {
                    squares[0].x = SIZE;
                    squares[1].x = SIZE * 2;
                    squares[2].y = SIZE;
                    squares[3].x = SIZE;
                    squares[3].y = SIZE;
                } else {
                    squares[1].y = SIZE;
                    squares[2].x = SIZE;
                    squares[2].y = SIZE;
                    squares[3].x = SIZE;
                    squares[3].y = SIZE * 2;
                }
                break;
            case Shape.SQUARE:
                this.addChild(squares[0]);
                this.addChild(squares[1]);
                this.addChild(squares[2]);
                this.addChild(squares[3]);

                squares[1].x = SIZE;
                squares[2].y = SIZE;
                squares[3].x = SIZE;
                squares[3].y = SIZE;
                break;
        }
    }

    public changeDirection(direction: Direction) {
        this.direction = direction;
        this.redraw();
    }

    public static randomShape(): Shape {
        switch(Math.ceil(Math.random() * 100) % 11) {
            case 0: return Shape.DOT;
            case 1: return Shape.LINE_TWO;
            case 2: return Shape.LINE_THREE;
            case 3: return Shape.LINE_FOUR;
            case 4: return Shape.CORNOR_THREE;
            case 5: return Shape.CORNOR_FOUR;
            case 6: return Shape.CORNOR_FOUR_REVERSE;
            case 7: return Shape.THREE_WITH_DOT;
            case 8: return Shape.Z;
            case 9: return Shape.Z_REVERSE;
            case 10: return Shape.SQUARE;
        }
    }
}