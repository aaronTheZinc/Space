export interface Rocket {
    height:         Diameter;
    diameter:       Diameter;
    mass:           Mass;
    firstStage:     FirstStage;
    secondStage:    SecondStage;
    engines:        Engines;
    landingLegs:    LandingLegs;
    payloadWeights: PayloadWeight[];
    flickrImages:   string[];
    name:           string;
    type:           string;
    active:         boolean;
    stages:         number;
    boosters:       number;
    costPerLaunch:  number;
    successRatePct: number;
    firstFlight:    Date;
    country:        string;
    company:        string;
    wikipedia:      string;
    description:    string;
    id:             string;
}

export interface Diameter {
    meters: number | null;
    feet:   number | null;
}

export interface Engines {
    isp:            ISP;
    thrustSeaLevel: Thrust;
    thrustVacuum:   Thrust;
    number:         number;
    type:           string;
    version:        string;
    layout:         null | string;
    engineLossMax:  number | null;
    propellant1:    string;
    propellant2:    string;
    thrustToWeight: number;
}

export interface ISP {
    seaLevel: number;
    vacuum:   number;
}

export interface Thrust {
    kN:  number;
    lbf: number;
}

export interface FirstStage {
    thrustSeaLevel: Thrust;
    thrustVacuum:   Thrust;
    reusable:       boolean;
    engines:        number;
    fuelAmountTons: number;
    burnTimeSEC:    number | null;
}

export interface LandingLegs {
    number:   number;
    material: null | string;
}

export interface Mass {
    kg: number;
    lb: number;
}

export interface PayloadWeight {
    id:   string;
    name: string;
    kg:   number;
    lb:   number;
}

export interface SecondStage {
    thrust:         Thrust;
    payloads:       Payloads;
    reusable:       boolean;
    engines:        number;
    fuelAmountTons: number;
    burnTimeSEC:    number | null;
}

export interface Payloads {
    compositeFairing: CompositeFairing;
    option1:          string;
}

export interface CompositeFairing {
    height:   Diameter;
    diameter: Diameter;
}
