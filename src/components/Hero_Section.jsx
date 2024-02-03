import React from 'react'
import box from '../assets/box.png'
import box_art from '../assets/box-art.png'

function Hero_Section() {
  return (
    <>
      <div className="hero_bg container-fluid">
       <div className="row">
{/* 
        <div>
            <div className='img_block'>
                <img src={box_art} className='box_art_img'/>
                <img src={box} className="mt-5  box_img hero_img d-block img-fluid" />  
            </div> 
            <div className="about-text">
                <h2 className="text1 mb-3">Look good without leaving your house.</h2>
                <p className="text2 mb-3">Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month.</p>
                <a href="#" className="btn btn_pink">SIGN UP <span style={{fontSize:'18px'}}>&gt;</span></a>
            </div>
        </div> */}

        
        <div className='col-12 col-md-6'>
          <div className="about-text">
                <h2 className="text1 mb-3">Look good without leaving your house.</h2>
                <p className="text2 mb-3">Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month.</p>
                <a href="#" className="btn btn_pink">SIGN UP <span style={{fontSize:'18px'}}>&gt;</span></a>
            </div>
        </div>

        <div className='col-12 col-md-6'>
              {/* <div className='img_block'>
                <img src={box} className="box_img" /> 
                <img src={box_art} className='box_art_img'/>
              </div> */}
                
        </div>
    
    </div>
  </div>

    </>
  )
}

export default Hero_Section