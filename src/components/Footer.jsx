import React from 'react'
import logo from '../assets/logo.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'

function Footer() {
	return (
		<>
			<div>
				<div className='row footer'>
					<div className='col-6 '>
						<img src={logo} className='footer_logo' />
					</div>

					<div className='col-6 social_logo'>
						<img src={instagram} />
						<img src={facebook} />
						<img src={twitter} />
					</div>

				</div>
			</div>

		</>
	)
}

export default Footer