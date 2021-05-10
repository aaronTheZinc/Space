export interface Capsule {
    reuseCount:    number;
    waterLandings: number;
    landLandings:  number;
    lastUpdate:    string;
    launches:      string[];
    serial:        string;
    status:        Status;
    type:          Type;
    id:            string;
}

export enum Status {
    Active = "active",
    Destroyed = "destroyed",
    Retired = "retired",
    Unknown = "unknown",
}

export enum Type {
    Dragon10 = "Dragon 1.0",
    Dragon11 = "Dragon 1.1",
    Dragon20 = "Dragon 2.0",
}
