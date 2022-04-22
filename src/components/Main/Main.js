import React, { useState } from 'react'
import styles from './Main.css'
import Card from './Card/Card.js'
import Slider from './Slider/Slider.js'
import Recomendation from './Recomendation/Recomendation'




const Main = () => {

	const [items] = useState([1,2,3,4,5,6,7,8,9])
	


	return (
		
		<div className="Main">
			<div className="Main__content">
				<div className='Main__content_slider'><Slider /></div>
				{items.map(() => {
					return (
						<Card />
					)
				})}
			</div>
			<div className='Main__content__recomendation'><Recomendation /></div>
		</div>
		
	);
}
export default Main;