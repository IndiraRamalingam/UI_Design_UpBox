import React from 'react'
import box from '../assets/box.png'
import box_art from '../assets/box-art.png'

function Hero_Section() {
	return (
		<>
			<div className="heroImg_bg container-fluid">
				<div className="row ">
					<div className='col-12 col-sm-10 col-md-6 col-lg-6 col-xl-5 col-xxl-4'>
						<div className="heroText_Container">
							<h1 className="heroText_heading mb-3">Look good without leaving your house.</h1>
							<p className="heroText_para mb-3">Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month.</p>
							<a href="#" className="btn heroBtn_pink">SIGN UP <span>&gt;</span></a>
						</div>
					</div>

					<div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-7'>
						<div className="heroImages">
							<img src={box} alt="Box_Images" />
							<img src={box_art} alt="Box_art_image" />
						</div>
					</div>

				</div>
			</div>

		</>
	)
}

export default Hero_Section