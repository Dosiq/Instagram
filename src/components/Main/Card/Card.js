import React from 'react'
import styles from './Card.css'

const Card = () => {
	return (
		<div className="Card">
			<div className="Card__Main">
				<div className="Card__Header">
					<div className="Card__userLogo"></div>
					<div className="Card__userDate">
						<div className="Card__userName">Bolatov Aidos</div>
						<div className="Card__userPosition">Kazakhstan, Almaty</div>
					</div>
						<div className="Card__burger">. . .</div>
				</div>

				<div className="Card__content"></div>
				<div className="Card__communication">
					<div className="Card__Icons">
						<span class="material-icons-outlined">
							favorite_border
						</span>
					</div>
					<div className="Card__Icons">
						<span class="material-icons-outlined">
							chat_bubble_outline
						</span>
					</div>
					<div className="Card__Icons">
						<span class="material-icons-outlined">
							send
						</span>
					</div>
					<div className="Card__Icons, Card_IconsFlag">
						<span class="material-icons-outlined">
							bookmark_border
						</span>
					</div>
				</div>
				<div className="Card__footer">
					<div className="Card__smile">
						<span class="material-icons-outlined">
							emoji_emotions
						</span>
					</div>
					<input type="text" placeholder="  Add a comment" className="Card__comment"/>
					<div className="Card__publish">Publish</div>
				</div>
			</div>
		
		</div>
	);

}

export default Card;