import React from 'react'
import work1 from '../assets/work1.png';
import work2 from '../assets/work2.png';
import work2_art from '../assets/work2_crop.png';
import work3 from '../assets/work3.png';


function Section() {
	return (
		<>
			<div className="container-fluid section_container">

				{/* First Row */}
				<div className="row m-5 justify-content-center">
					<h1 className='work_Title'>How it Works?</h1>
				</div>

				{/* Second Row */}
				<div className="row sectionImage_Container">
					<div className="col-6 col-sm-6 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
						<div >
							<img className="work_Image1" src={work1} />
						</div>
					</div>
					<div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3 sectionText_Container">
						<h2>Setup your profile & <br /> preferences</h2>
						<p className='workText_para'>Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.</p>
					</div>
				</div>

				{/* Third Row */}
				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
						<div className='row sectionImage_Container'>
							<div className='col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5'></div>
							<div className='col-8 col-sm-8 col-md-7 col-lg-7 col-xl-7 col-xxl-7 work2_Container'>
								<img src={work2} className='work_Image2' />
								<img src={work2_art} className='work_art_Image2' />
							</div>
						</div>
						<div className='row'>
							<div className='col-2 col-sm-2 col-md-6 col-lg-6 col-xl-6 col-xxl-6'></div>
							<div className='col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6 col-xxl-6 sectionText_Container'>
								<h2>Review your<br /> custom box</h2>
								<p className='workText_para'>Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.</p>
							</div>
						</div>
					</div>
				</div>

				{/* Fourth Row */}
				<div className="row sectionImage_Container mt-5">
					<div className="col-6 col-sm-6 col-md-5 col-lg-5 col-xl-5 col-xxl-5 ">
						<img className="work_Image3 " src={work3} />
					</div>
					<div className="col-11 col-sm-11 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3 sectionText_Container">
						<h2>Try it on at home</h2>
						<p className='workText_para'>Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with.</p>
					</div>
				</div>

				{/* Fifth Row */}
				<div className='mb-5 mt-5 work_End'>
					<button href="#" className="btn heroBtn_pink">TRY IT FOR YOURSELF <span>&gt;</span></button>
				</div>
			</div>
		</>
	)
}

export default Section