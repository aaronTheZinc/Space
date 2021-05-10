export interface Launch {
	fairings:           Fairings | null;
	links:              Links;
	staticFireDateUTC:  Date | null;
	staticFireDateUnix: number | null;
	tbd:                boolean;
	net:                boolean;
	window:             number | null;
	rocket:             Rocket;
	success:            boolean | null;
	details:            null | string;
	crew:               string[];
	ships:              string[];
	capsules:           string[];
	payloads:           string[];
	launchpad:          Launchpad;
	autoUpdate:         boolean;
	launchLibraryID:    null | string;
	failures:           Failure[];
	flightNumber:       number;
	name:               string;
	dateUTC:            Date;
	dateUnix:           number;
	dateLocal:          Date;
	datePrecision:      DatePrecision;
	upcoming:           boolean;
	cores:              Core[];
	id:                 string;
}

export interface Core {
	core:           null | string;
	flight:         number | null;
	gridfins:       boolean | null;
	legs:           boolean | null;
	reused:         boolean | null;
	landingAttempt: boolean | null;
	landingSuccess: boolean | null;
	landingType:    LandingType | null;
	landpad:        Landpad | null;
}

export enum LandingType {
	Asds = "ASDS",
	Ocean = "Ocean",
	Rtls = "RTLS",
}

export enum Landpad {
	The5E9E3032383Ecb267A34E7C7 = "5e9e3032383ecb267a34e7c7",
	The5E9E3032383Ecb554034E7C9 = "5e9e3032383ecb554034e7c9",
	The5E9E3032383Ecb6Bb234E7CA = "5e9e3032383ecb6bb234e7ca",
	The5E9E3032383Ecb761634E7Cb = "5e9e3032383ecb761634e7cb",
	The5E9E3032383Ecb90A834E7C8 = "5e9e3032383ecb90a834e7c8",
	The5E9E3033383Ecbb9E534E7Cc = "5e9e3033383ecbb9e534e7cc",
}

export enum DatePrecision {
	Day = "day",
	Hour = "hour",
	Month = "month",
	Quarter = "quarter",
}

export interface Failure {
	time:     number;
	altitude: number | null;
	reason:   string;
}

export interface Fairings {
	reused:          boolean | null;
	recoveryAttempt: boolean | null;
	recovered:       boolean | null;
	ships:           Ship[];
}

export enum Ship {
	The5Ea6Ed2E080Df4000697C907 = "5ea6ed2e080df4000697c907",
	The5Ea6Ed2E080Df4000697C908 = "5ea6ed2e080df4000697c908",
	The5Ea6Ed2E080Df4000697C909 = "5ea6ed2e080df4000697c909",
	The5Ea6Ed2F080Df4000697C90B = "5ea6ed2f080df4000697c90b",
	The5Ea6Ed2F080Df4000697C90C = "5ea6ed2f080df4000697c90c",
	The5Ea6Ed2F080Df4000697C90D = "5ea6ed2f080df4000697c90d",
	The6059166413F40E27E8Af34B6 = "6059166413f40e27e8af34b6",
}

export enum Launchpad {
	The5E9E4501F509094Ba4566F84 = "5e9e4501f509094ba4566f84",
	The5E9E4502F509092B78566F87 = "5e9e4502f509092b78566f87",
	The5E9E4502F509094188566F88 = "5e9e4502f509094188566f88",
	The5E9E4502F5090995De566F86 = "5e9e4502f5090995de566f86",
}

export interface Links {
	patch:     Patch;
	reddit:    Reddit;
	flickr:    Flickr;
	presskit:  null | string;
	webcast:   null | string;
	youtubeID: null | string;
	article:   null | string;
	wikipedia: null | string;
}

export interface Flickr {
	small:    any[];
	original: string[];
}

export interface Patch {
	small: null | string;
	large: null | string;
}

export interface Reddit {
	campaign: null | string;
	launch:   null | string;
	media:    null | string;
	recovery: null | string;
}

export enum Rocket {
  The5E9D0D95Eda69955F709D1Eb = "5e9d0d95eda69955f709d1eb",
  The5E9D0D95Eda69973A809D1Ec = "5e9d0d95eda69973a809d1ec",
  The5E9D0D95Eda69974Db09D1Ed = "5e9d0d95eda69974db09d1ed",
}
