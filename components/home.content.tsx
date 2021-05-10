import { Event } from './events';
import type { FunctionComponent } from 'react';
import type { RequestedHomeData } from '../Types/index';
import { News, PastMissions } from './index';

/**
 * * Home Page Data
 * @param Requires All Data For Home
 * @returns
 */
export const HomeContent: FunctionComponent<RequestedHomeData> = ({
	Content,
}): JSX.Element => {
	/**
	 * *Requires All Page Props To Render Data
	 * ? Pass in @RequestedHomeData
	 */
	const { SpaceEvents, News: story, PastEvents } = Content;

	return (
		<div className="">
			<div className="flex">
				<section className=" order-first w-2/7">
					<Event SpaceEvents={SpaceEvents.SpaceEvents} />
				</section>
				<section className=" flex order-2 float-right mt-20 w-5/10 h-auto justify-center">
					<News story={story} />
					{/* <section>
						<PastMissions missions={PastEvents} />
					</section> */}
				</section>
			</div>
		</div>
	);
};
