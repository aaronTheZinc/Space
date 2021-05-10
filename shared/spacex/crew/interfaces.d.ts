export interface Astronaught {
    name:      string;
    agency:    Agency;
    image:     string;
    wikipedia: string;
    launches:  Launch[];
    status:    Status;
    id:        string;
}

export enum Agency {
    Esa = "ESA",
    Jaxa = "JAXA",
    Nasa = "NASA",
    SpaceX = "SpaceX",
}

export enum Launch {
    The5Eb87D46Ffd86E000604B388 = "5eb87d46ffd86e000604b388",
    The5Eb87D4Dffd86E000604B38E = "5eb87d4dffd86e000604b38e",
    The5Fe3Af58B3467846B324215F = "5fe3af58b3467846b324215f",
}

export enum Status {
    Active = "active",
}
