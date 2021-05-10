import Head from 'next/head';
import { FunctionComponent, useEffect, useState } from 'react';
import { Header, HomeContent as Content } from '../components';
import type { RequestedHomeData } from '../Types/index';
import { SpaceEvents, Story, PastEvents } from '../static';
import type { SpaceEventListProp } from '../Types';

const Home: FunctionComponent = (): JSX.Element => {
	const [pageContent, setContent] = useState<RequestedHomeData>({
		Content: {
			SpaceEvents: { SpaceEvents: [] },
			News: { title: '', body: '', image: '', published: '' },
			PastEvents: [],
		},
	});
	// Fetch Page Data
	useEffect(() => {
		// Static Example Data
		const EventList: SpaceEventListProp = {
			SpaceEvents: SpaceEvents,
		};

		return setContent({
			Content: {
				SpaceEvents: EventList,
				News: Story,
				PastEvents: [PastEvents],
			},
		});
	}, []);
	return (
		<div>
			<Head>
				<title>Space, the final frontier</title>
				<link rel="icon" href="/circle-logo.png" />
			</Head>
			<Header />
			<Content Content={pageContent.Content} />
		</div>
	);
};

export default Home;
