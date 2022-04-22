import React, { useState } from 'react'
import styles from './Under_recomendation.css'


const Under_recomendation = () => {

	return (	
			<div className="Under_recomendation">
				<div className="Under_recomendation__header">

					<div className="Under_recomendation__userLogo">
						<span class="material-icons-outlined">
							account_circle
						</span>
					</div>

					<div className="Under_recomendation__userDate">
						<div className="Under_recomendation__userName">Bolatov Aidos</div>
						<div className="Under_recomendation__userPosition">Kazakhstan, Almaty</div>
					</div>

          <div className="Under_recomendation__switch">Follow</div>
          
				</div>
			</div>
	);
}
export default Under_recomendation;