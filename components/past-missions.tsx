import type { FunctionComponent } from 'react';
import Router from 'next/router';
import type { PastMissionsProp, PastMissionsCell } from '../Types';

/**
 * *Cell To Display Past Events
 * @param Mission
 * @returns Cell Element
 */
const PastMissionCell: FunctionComponent<PastMissionsCell> = ({
	mission,
}): JSX.Element => {
	const { title, backgroundSrc, id } = mission;
	const viewMore = () => Router.push(`/past-mission?${id}`);
	return (
		<div
			onClick={viewMore}
			style={{
				backgroundImage:
					'https://cdn.vox-cdn.com/thumbor/hin1OBS-Lgrt_bld7QOxozSXSnk=/0x0:3840x2160/1200x800/filters:focal(1613x773:2227x1387)/cdn.vox-cdn.com/uploads/chorus_image/image/69053543/Exu93_nU8AAMAiC.0.jpg',
			}}
		>
			<h1>{title}</h1>
		</div>
	);
};

export const PastMissions: FunctionComponent<PastMissionsProp> = ({
	missions,
}): JSX.Element => {
	return (
		<div>
			{missions.map((mission, key) => (
				<PastMissionCell mission={mission} key={key} />
			))}
			<h1>Hello World</h1>
		</div>
	);
};
