export interface Ship {
    legacyID:      null | string;
    model:         null | string;
    type:          Type;
    roles:         string[];
    imo:           number | null;
    mmsi:          number | null;
    abs:           number | null;
    class:         number | null;
    massKg:        number | null;
    massLbs:       number | null;
    yearBuilt:     number | null;
    homePort:      HomePort;
    status:        null | string;
    speedKn:       null;
    courseDeg:     null;
    latitude:      null;
    longitude:     null;
    lastAisUpdate: null;
    link:          null | string;
    image:         null | string;
    launches:      string[];
    name:          string;
    active:        boolean;
    id:            string;
}

export enum HomePort {
    FortLauderdale = "Fort Lauderdale",
    PortCanaveral = "Port Canaveral",
    PortOfLosAngeles = "Port of Los Angeles",
}

export enum Type {
    Barge = "Barge",
    Cargo = "Cargo",
    HighSpeedCraft = "High Speed Craft",
    Tug = "Tug",
}
