import type { SpaceEventListProp, SpaceNews, PastMissions } from './interfaces';

export interface RequestedHomeData {
	meta?: Object;
	Content: {
		SpaceEvents: SpaceEventListProp;
		News: SpaceNews;
		PastEvents: PastMissions[];
	};
}
