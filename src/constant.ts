enum Shape {
    DOT,
    LINE_TWO,
    LINE_THREE,
    LINE_FOUR,
    CORNOR_THREE,
    CORNOR_FOUR,
    CORNOR_FOUR_REVERSE,
    THREE_WITH_DOT,
    Z,
    Z_REVERSE,
    SQUARE,
};

const COLOR = {
    [Shape.DOT]: 0xFFFFFF,
    [Shape.LINE_TWO]: 0x00924C,
    [Shape.LINE_THREE]: 0x0E77CA,
    [Shape.LINE_FOUR]: 0x802800,
    [Shape.CORNOR_THREE]: 0xD75000,
    [Shape.CORNOR_FOUR]: 0x6252CD,
    [Shape.CORNOR_FOUR_REVERSE]: 0xE09A00,
    [Shape.THREE_WITH_DOT]: 0x3DB8C1,
    [Shape.Z]: 0x919191,
    [Shape.Z_REVERSE]: 0xD73435,
    [Shape.SQUARE]: 0xF7629E,
}

const SIZE = 50;

enum Direction {
    TOP,
    RIGHT,
    DOWN,
    LEFT,
};