class GameFlowchartEncounter extends GameFlowchartNode {

    private area: String;
    private encounterMethods: String[];
    private encounterTables = {
        "starter": [],
        "grass": [],
        "tall_grass": [],
        "old_rod": [],
        "good_rod": [],
        "super_rod": [],
        "surf": [],
        "dive": [],
        "gift": [],
        "trade": []
    };

    public constructor (id: String, area: String, encounterMethods: String[]) {
        super(id);
        this.area = area;
        this.encounterMethods = encounterMethods;
    }

    getArea(): String { return this.area; }
    getEncounterMethods(): String[] { return this.encounterMethods; }
}