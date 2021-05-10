import * as react from 'react';
import { spacex } from 'shared';
import type { AxiosInstance } from 'axios';

export function Crew() {
	const [client, _]: [AxiosInstance, any] = react.useState(() =>
		spacex.createClient()
	);
	const [crew, setCrew]: [Array<spacex.Crew>, any] = react.useState(null);
	const [member, setMember]: [spacex.Crew, any] = react.useState(null);

	function loadCrew() {
		react.useEffect(() => {
			async () => {
				const result = await spacex.listCrew(client);

				setCrew(result);
				console.log(crew);
			};
		}, []);
	}

	function setRandomMember() {
		react.useEffect(() => {
			async () => {
				const i = Math.floor(Math.random() * crew.length);
				const result = await spacex.getCrewMemberById(
					i.toString(),
					client
				);
				setMember(result);
				console.log(member);
			};
		}, []);
	}

	const clickHandler = () => setRandomMember();

	return (
		<div>
			<div onLoad={loadCrew}>
				<p>Crew member: {member ? member.name : ''}</p>
				<button onClick={clickHandler}>Randow crew member</button>
			</div>
		</div>
	);
}
