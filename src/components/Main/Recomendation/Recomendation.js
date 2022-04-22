import React, { useState } from 'react'
import styles from './Recomendation.css'
import Under_recomendation from './Under_recomendation/Under_recomendation';


const Recomendation = () => {

	const [items] = useState([1,2,3,4,5])

	return (	
			<div className="Main__recomendation">
				<div className="Main__header">

					<div className="Main__userLogo">
						<span class="material-icons-outlined">
							account_circle
						</span>
					</div>

					<div className="Main__userDate">
						<div className="Main__userName">Bolatov Aidos</div>
						<div className="Main__userPosition">Kazakhstan, Almaty</div>
					</div>

					<div className="Main__switch">Switch</div>
				</div>

				<div className='Main__friends'>
					<div className='Friends__header'>
						<div className='Friends__text'>Suggestions for you</div>
						<div className='Friends__switch'>See all</div>
					</div>
					<div className='Friends__recomendation'>
						{items.map(() => {
							return (
								<Under_recomendation />
							)
						})}
					</div>
				</div>

				<div className='Recomendation__support'>
						<ul className='Recomendation__support_items'>
							<li className='Recomendation__support__tag'>About</li>
							<li className='Recomendation__support__tag'>Help</li>
							<li className='Recomendation__support__tag'>Press</li>
							<li className='Recomendation__support__tag'>API</li>
							<li className='Recomendation__support__tag'>Jobs</li>
							<li className='Recomendation__support__tag'>Privacy</li>
							<li className='Recomendation__support__tag'>Terms</li>
							<li className='Recomendation__support__tag'>Locations</li>
							<li className='Recomendation__support__tag'>Top accounts</li>
							<li className='Recomendation__support__tag'>Hashtags</li>
							<li className='Recomendation__support__tag'>Language</li>
						</ul>
						<div className='Recomendation__support__text'>
							© 2022 INSTAGRAM FROM META
						</div>
					</div>

			</div>
	);
}
export default Recomendation;