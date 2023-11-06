class GameFlowchartNode {

    private id: String;
    private nextNode: GameFlowchartNode | null;
    private children: GameFlowchartNode[];

    public constructor(id: String) {
        this.id = id;
        this.nextNode = null;
        this.children = [];
    }

    public getId(): String { return this.id; }
    public getNextNode(): GameFlowchartNode | null { return this.nextNode; }

    public setNextNode(node: GameFlowchartNode | null) { this.nextNode = node; }

    public addChildNode(node: GameFlowchartNode) {
        this.children.push(node);
    }

    public removeChildNode(id: String): GameFlowchartNode | null{
        const index: number = this.children.findIndex((node) => node.getId() === id);
        if (index === -1) {
            return null;
        } else {
            return this.children.splice(index, 1)[0];
        }
    }
}
