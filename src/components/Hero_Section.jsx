import React from 'react'
import box_new from '../assets/box_new.png';
import box from '../assets/box.png'
import box_art from '../assets/box-art.png'

function Hero_Section() {
  return (
    <>
      <div className="hero_bg container-fluid">
       <div className="row">
        <div className='col-12 col-md-auto col-lg-4'>
          <div className="about-text">
                <h1 className="text1 mb-3">Look good without leaving your house.</h1>
                <p className="text2 mb-3">Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month.</p>
                <a href="#" className="btn btn_pink">SIGN UP <span style={{fontSize:'18px'}}>&gt;</span></a>
            </div>
        </div>

        <div className='col-12 col-lg-8 hero_image'>
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