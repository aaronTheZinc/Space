export interface Starlink {
    spaceTrack:  SpaceTrack;
    version:     Version;
    launch:      Launch;
    longitude:   number | null;
    latitude:    number | null;
    heightKM:    number | null;
    velocityKms: number | null;
    id:          string;
}

export enum Launch {
    The5Eb87D14Ffd86E000604B361 = "5eb87d14ffd86e000604b361",
    The5Eb87D30Ffd86E000604B378 = "5eb87d30ffd86e000604b378",
    The5Eb87D39Ffd86E000604B37D = "5eb87d39ffd86e000604b37d",
    The5Eb87D3Cffd86E000604B380 = "5eb87d3cffd86e000604b380",
    The5Eb87D3Fffd86E000604B382 = "5eb87d3fffd86e000604b382",
    The5Eb87D41Ffd86E000604B383 = "5eb87d41ffd86e000604b383",
    The5Eb87D43Ffd86E000604B385 = "5eb87d43ffd86e000604b385",
    The5Eb87D44Ffd86E000604B386 = "5eb87d44ffd86e000604b386",
    The5Eb87D45Ffd86E000604B387 = "5eb87d45ffd86e000604b387",
    The5Eb87D46Ffd86E000604B389 = "5eb87d46ffd86e000604b389",
    The5Ed9819A1F30554030D45C29 = "5ed9819a1f30554030d45c29",
    The5Ed981D91F30554030D45C2A = "5ed981d91f30554030d45c2a",
    The5Ef6A1E90059C33Cee4A828A = "5ef6a1e90059c33cee4a828a",
    The5Ef6A2090059C33Cee4A828B = "5ef6a2090059c33cee4a828b",
    The5Ef6A2Bf0059C33Cee4A828C = "5ef6a2bf0059c33cee4a828c",
    The5Ef6A2E70059C33Cee4A8293 = "5ef6a2e70059c33cee4a8293",
    The5Fb95B3F3A88Ae63C954603C = "5fb95b3f3a88ae63c954603c",
    The5Fbfecce54Ceb10A5664C80A = "5fbfecce54ceb10a5664c80a",
    The5Fbfecfe54Ceb10A5664C80B = "5fbfecfe54ceb10a5664c80b",
    The5Fd386Aa7Faea57D297C86C1 = "5fd386aa7faea57d297c86c1",
    The5Ff6554F9257F579Ee3A6C5F = "5ff6554f9257f579ee3a6c5f",
    The600F9A5E8F798E2A4D5F979C = "600f9a5e8f798e2a4d5f979c",
    The600F9A718F798E2A4D5F979D = "600f9a718f798e2a4d5f979d",
    The600F9A8D8F798E2A4D5F979E = "600f9a8d8f798e2a4d5f979e",
    The60428Aafc041C16716F73Cd7 = "60428aafc041c16716f73cd7",
    The60428Ac4C041C16716F73Cd8 = "60428ac4c041c16716f73cd8",
}

export interface SpaceTrack {
    ccsdsOmmVers:       string;
    comment:            Comment;
    creationDate:       Date;
    originator:         Originator;
    objectName:         string;
    objectID:           string;
    centerName:         CenterName;
    refFrame:           RefFrame;
    timeSystem:         TimeSystem;
    meanElementTheory:  MeanElementTheory;
    epoch:              Date;
    meanMotion:         number;
    eccentricity:       number;
    inclination:        number;
    raOfAscNode:        number;
    argOfPericenter:    number;
    meanAnomaly:        number;
    ephemerisType:      number;
    classificationType: ClassificationType;
    noradCatID:         number;
    elementSetNo:       number;
    revAtEpoch:         number;
    bstar:              number;
    meanMotionDot:      number;
    meanMotionDdot:     number;
    semimajorAxis:      number;
    period:             number;
    apoapsis:           number;
    periapsis:          number;
    objectType:         ObjectType;
    rcsSize:            RCSSize | null;
    countryCode:        CountryCode;
    launchDate:         Date;
    site:               Site;
    decayDate:          Date | null;
    decayed:            number;
    file:               number;
    gpID:               number;
    tleLine0:           string;
    tleLine1:           string;
    tleLine2:           string;
}

export enum CenterName {
    Earth = "EARTH",
}

export enum ClassificationType {
    U = "U",
}

export enum Comment {
    GeneratedViaSpaceTrackOrgAPI = "GENERATED VIA SPACE-TRACK.ORG API",
}

export enum CountryCode {
    Us = "US",
}

export enum MeanElementTheory {
    Sgp4 = "SGP4",
}

export enum ObjectType {
    Payload = "PAYLOAD",
}

export enum Originator {
    The18Spcs = "18 SPCS",
}

export enum RCSSize {
    Large = "LARGE",
}

export enum RefFrame {
    Teme = "TEME",
}

export enum Site {
    Afetr = "AFETR",
    Afwtr = "AFWTR",
}

export enum TimeSystem {
    UTC = "UTC",
}

export enum Version {
    Prototype = "prototype",
    V09 = "v0.9",
    V10 = "v1.0",
}
