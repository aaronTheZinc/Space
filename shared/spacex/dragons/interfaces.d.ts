export interface Dragon {
    heatShield:         HeatShield;
    launchPayloadMass:  PayloadMass;
    launchPayloadVol:   LaunchPayloadVol;
    returnPayloadMass:  PayloadMass;
    returnPayloadVol:   LaunchPayloadVol;
    pressurizedCapsule: PressurizedCapsule;
    trunk:              Trunk;
    heightWTrunk:       Diameter;
    diameter:           Diameter;
    firstFlight:        Date;
    flickrImages:       string[];
    name:               string;
    type:               string;
    active:             boolean;
    crewCapacity:       number;
    sidewallAngleDeg:   number;
    orbitDurationYr:    number;
    dryMassKg:          number;
    dryMassLB:          number;
    thrusters:          Thruster[];
    wikipedia:          string;
    description:        string;
    id:                 string;
}

export interface Diameter {
    meters: number;
    feet:   number;
}

export interface HeatShield {
    material:    string;
    sizeMeters:  number;
    tempDegrees: number;
    devPartner:  string;
}

export interface PayloadMass {
    kg: number;
    lb: number;
}

export interface LaunchPayloadVol {
    cubicMeters: number;
    cubicFeet:   number;
}

export interface PressurizedCapsule {
    payloadVolume: LaunchPayloadVol;
}

export interface Thruster {
    type:   string;
    amount: number;
    pods:   number;
    fuel1:  string;
    fuel2:  string;
    isp:    number;
    thrust: Thrust;
}

export interface Thrust {
    kN:  number;
    lbf: number;
}

export interface Trunk {
    trunkVolume: LaunchPayloadVol;
    cargo:       Cargo;
}

export interface Cargo {
    solarArray:         number;
    unpressurizedCargo: boolean;
}
