import type { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';
import type { SpaceEventProp, SpaceEventListProp } from '../Types/index';
import { FlightActions } from '../Types/index';
import Styles from '../styles/Home.module.css';

//Generator
const ColorTag = (FLightAction: FlightActions): string => {
	switch (FLightAction) {
		case FlightActions.GRAVITYASSIST:
			return '#2978B5';
		case FlightActions.LAUNCH:
			return '#5B6D5B';
		case FlightActions.RETURN:
			return '#FB3640';
	}
};

// Cell
const EventCell: FunctionComponent<SpaceEventProp> = ({
	SpaceEvent,
}): JSX.Element => {
	/**
	 * * Takes In A Tyoe Event All Fields Are Required!
	 */
	const { vehicle, flight_action, destination, timeOfStart } = SpaceEvent;
	const [color, setColor] = useState<string>();

	useEffect(() => {
		const flightActionColor: string = ColorTag(flight_action);
		setColor(flightActionColor);
	}, []);

	return (
		<div className="group pt-5">
			<div className="">
				<div className="flex justify-center">
					<div className=" w-8/10 h-line mt-2 pl-3 bg-[#F6E6CB]"></div>
				</div>
				<section className=" pl-7 pt-3 flex text-3xl text-left">
					<label className={Styles.bebas}>
						<span style={{ color: color }}>{flight_action}</span>
						{' ~ '} {vehicle}
					</label>
				</section>
				<div className={Styles.subCourier}>
					<div className="pl-1/10 pt-5 text-[#FF7F50]">{`Destination - ${destination}`}</div>
				</div>
				<section className=" pt-5 pl-1/10">
					<label className={Styles.subCourier}>{timeOfStart}</label>
				</section>
			</div>
		</div>
	);
};

// Main

export const Event: FunctionComponent<SpaceEventListProp> = ({
	SpaceEvents,
}): JSX.Element => {
	/**
	 * Requires An Array Of @SpaceEvent
	 * ? Pass Prop As Named Events
	 */
	return (
		<div className="pt-10 pl-5 w-full h-3/4 ">
			<div className=" bg-[#393E46] rounded-sm-box h-3/4 overflow-x-scroll scrollbar-hide ">
				<section className="text-4xl text-center pt-3 sticky">
					<label className={Styles.bebas}>Events</label>
				</section>
				<section className="group">
					{SpaceEvents.map(evnt => (
						<EventCell SpaceEvent={evnt} />
					))}
				</section>
			</div>
		</div>
	);
};
