import React from 'react'
import work1 from '../assets/work1.png';
import work2 from '../assets/work2.png';
import work2_new from '../assets/work2_new.png';
import work2_art from '../assets/work2-art.png';
import work3 from '../assets/work3.png';


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
                        <div className='row'>
                        <div className='col-12 col-lg-5'></div>
                        <div className='col-12 col-lg-7 work_container img_row_2'>
                            <img src={work2_new} className='work_img1'/>
                            <img src={work2_art} className='work_art_img1'/>
                             {/* <div className="images"> */}
                        {/* <img src="https://picsum.photos/400/400?random=1" alt="" />
                        <img src="https://picsum.photos/400/400?random=2" alt="" /> */}
                    {/* <img src={work2_new} alt="Box_Images" />
                    <img src={work2_art} alt="Box_art_image" />
                  </div>*/}
                        </div> 
                         </div>   

                        <div className='row'>
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