import React from 'react'
import work1 from '../assets/work1.png';
import work2 from '../assets/work2.png';
import work3 from '../assets/work3.png';
import work2_art from '../assets/work2-art.png';

function Section() {
  return (
    <>
        <div className="container-fluid section_container">

            {/* First Row */}
                <div className="row m-5 justify-content-center">
                    <h1 style={{textAlign:'center'}}>How it Works?</h1>
                </div>

            {/* Second Row */}
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-5 img_row_1">
                        <div >
                            <img className="cropped2" src={work1} />
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mt-5 text_row_1">
                        <h4>Setup your profile & preferences</h4>
                        <p>Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.</p>
                    </div>
                </div>

            {/* Third Row */}
               <div className="row justify-content-center">
                    <div className="col-12 col-lg-1">
                      
                    </div>
                    <div className="col-12 col-lg-11">
                        {/* <div className='row'>
                            <div className='col-12 col-lg-6 mb-5'>
                                <img src={work2} className='work_img'/>
                            </div>
                            <div className='col-12 col-lg-6 mb-5' style={{textAlign:'end'}}>
                                <img src={work2_art} className='work_art_img'/>
                            </div>
                        </div> */}
                        <div className='row m-5'>
                            <div className='col-12 col-lg-6'></div>
                            <div className='col-12 col-lg-6 text_row_2'>
                                <h4>Review your custom box</h4>
                                <p>Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.</p>
                            </div>
                           
                        </div>
                    </div>
                </div>

            {/* Fourth Row */}
               <div className="row  justify-content-center">
                    <div className="col-12 col-lg-5 img_row_3">
                        <img className="cropped3" src={work3}/>
                    </div>
                    <div className="col-12 col-lg-4 mt-5 text_row_3">
                        <h4>Try it on at home</h4>
                        <p>Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with.</p>
                    </div>
                </div>

            {/* Fifth Row */}
            <div className='mb-5 mt-5' style={{display:'flex',justifyContent:'center'}}>
                <button href="#" className="btn btn_pink" style={{textAlign:'center'}}>TRY IT FOR YOURSELF <span style={{fontSize:'18px'}}>&gt;</span></button>
            </div>
        </div>
    </>
  )
}

export default Section