import type { FunctionComponent } from 'react';
import type { SpaceNewsProp } from '../Types/index';
import Styles from '../styles/Home.module.css';

export const News: FunctionComponent<SpaceNewsProp> = ({
	story,
}): JSX.Element => {
	const { title, body, published } = story;
	return (
		<div className=" ml-1/10 w-10/10 bg-[#F0EBCC] rounded-sm-box pt-10 h-6/10">
			<div>
				<div className="pl-1/7 text-black ">
					<section
						style={{ fontWeight: 'bolder' }}
						className="text-2xl"
					>
						<label className={Styles.bebas}>{title}</label>
					</section>
					<div className="max-w-4/10 max-h-1/10 overflow-scroll scrollbar-hide pt-7 text-xs ">
						<section className={Styles.subCourier}>
							<p className="max-h-40">{body}</p>
						</section>
					</div>
					<div className="pt-7">
						<section className={Styles.subCourier}>
							<label style={{ fontWeight: 'bolder' }}>
								{published}
							</label>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};
