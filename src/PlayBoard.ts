class PlayBoard extends egret.DisplayObjectContainer {
    private current: Block;
    private staticBlocks: Array<[Block, number, number]>;

    constructor() {
        super();
    }

    public start(): void {
    }
}