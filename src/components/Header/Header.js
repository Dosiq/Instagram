import React from 'react'
import styles from './Header.css'

const Header = () => {
	return(
		<div className="Header">
				<div className="Header__Main">
				<div className="Header__Logo">Instagram</div>

					<input className="Header__Search" type="text" placeholder="   Search" />
				
				<div className="Header__Icons">
					<div className="Icons__Item">
						<span class="material-icons">
							home
						</span>
					</div>

					<div className="Icons__Item">
						<span class="material-icons-outlined">
							sms
						</span>
					</div>

					<div className="Icons__Item">
						<span class="material-icons-outlined">
							add_box
						</span>
					</div>

					<div className="Icons__Item">
						<span class="material-icons-outlined">
							explore
						</span>
					</div>

					<div className="Icons__Item">
						<span class="material-icons-outlined">
							favorite_border
						</span>	
					</div>

					<div className="Icons__Item">
						<span class="material-icons-outlined">
							account_circle
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;

