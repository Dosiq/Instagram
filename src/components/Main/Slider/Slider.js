import React, { useRef, useState } from 'react'
import styles from './Slider.css'


const Slider = () => {

	let position = 0 ;
	const slider = useRef(null)
	const [items, setItems] = useState([1, 2, ,3 ,4 ,5 ,6 ,7, 8, 9, 10, 11, 12, 13, 14, ,15 ,16 ,17 ,18 ,19, 20, 21, 22, 23, 24])
	const [prev, setPrev] = useState(false)
	const [next, setNext] = useState(false)


	const prevHandler = () => {
		if (position === 0){
			setPrev(true)
		} else {
			setPrev(false)
			position += 300
			slider.current.childNodes.forEach((element) => {
				element.style = `transform: translateX(${position}px)`
			})
		}
	}

	const nextHandler = () => {
		if(position === -(items.length - 6) * 100 + 100){
			setNext(true)
			setPrev(false)
		} else {
			setPrev(false)
			position -= 300
			slider.current.childNodes.forEach((element) => {
				element.style = `transform: translateX(${position}px)`
			})
		}
	}

	return (
		<div className='Slider'>
			<div className="Slider__track" ref={slider}>
				{items.map(() => {
					return (
						<div className= "Slider__item"></div>
					)
				})}
			</div>
			<button className="SLider__button SLider__button__prev" onClick={prevHandler}> P </button>
			<button className="SLider__button SLider__button__next" onClick={nextHandler}> N </button>
		</div>
	);
}
export default Slider