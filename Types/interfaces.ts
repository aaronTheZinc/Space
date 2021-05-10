//Evemts

export enum FlightActions {
	LAUNCH = 'LAUNCH',
	RETURN = 'RETURN',
	GRAVITYASSIST = 'GRAVITY ASSIST',
}
export interface SpaceEvent {
	vehicle: string;
	flight_action: FlightActions;
	timeOfStart: string;
	timeOfEnd: string;
	destination: string;
}
export interface SpaceEventListProp {
	SpaceEvents: SpaceEvent[];
}

export interface SpaceEventProp {
	SpaceEvent: SpaceEvent;
}

// Space News
export interface SpaceNews {
	title: string;
	body: string;
	published: string;
	image?: string;
}
export interface SpaceNewsProp {
	story: SpaceNews;
}

// Previous Events
export interface PastMissions {
	id: string;
	title: string;
	backgroundSrc: string;
}
export interface PastMissionsProp {
	missions: PastMissions[];
}
export interface PastMissionsCell {
	mission: PastMissions;
}
