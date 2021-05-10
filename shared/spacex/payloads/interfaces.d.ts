export interface Payload {
    dragon:          Dragon;
    name:            string;
    type:            Type;
    reused:          boolean;
    launch:          null | string;
    customers:       string[];
    noradIDS:        number[];
    nationalities:   string[];
    manufacturers:   string[];
    massKg:          number | null;
    massLbs:         number | null;
    orbit:           null | string;
    referenceSystem: ReferenceSystem | null;
    regime:          Regime | null;
    longitude:       number | null;
    semiMajorAxisKM: number | null;
    eccentricity:    number | null;
    periapsisKM:     number | null;
    apoapsisKM:      number | null;
    inclinationDeg:  number | null;
    periodMin:       number | null;
    lifespanYears:   number | null;
    epoch:           Date | null;
    meanMotion:      number | null;
    raan:            number | null;
    argOfPericenter: number | null;
    meanAnomaly:     number | null;
    id:              string;
}

export interface Dragon {
    capsule:         null | string;
    massReturnedKg:  number | null;
    massReturnedLbs: number | null;
    flightTimeSEC:   number | null;
    manifest:        null | string;
    waterLanding:    boolean | null;
    landLanding:     boolean | null;
}

export enum ReferenceSystem {
    Geocentric = "geocentric",
    Heliocentric = "heliocentric",
    HighlyElliptical = "highly-elliptical",
}

export enum Regime {
    Geostationary = "geostationary",
    Geosynchronous = "geosynchronous",
    HighEarth = "high-earth",
    HighlyElliptical = "highly-elliptical",
    L1Point = "L1-point",
    LowEarth = "low-earth",
    MediumEarth = "medium-earth",
    SemiSynchronous = "semi-synchronous",
    SubOrbital = "sub-orbital",
    SunSynchronous = "sun-synchronous",
    VeryLowEarth = "very-low-earth",
}

export enum Type {
    CrewDragon = "Crew Dragon",
    Dragon10 = "Dragon 1.0",
    Dragon11 = "Dragon 1.1",
    Dragon20 = "Dragon 2.0",
    DragonBoilerplate = "Dragon Boilerplate",
    Lander = "Lander",
    Satellite = "Satellite",
}
