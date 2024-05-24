import React from 'react'
import './Footer.scss'
function Footer() {
  return (
    <>
    <footer>
     <div className="foot_hero">
     <div className="foot_top">
        <div className="foot1">
          <div className="text"><h3>About Us</h3></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
        </div>
        <div className="foot2">
          <h3>Newsletter</h3>
          <p>Stay update with our latest</p>
         <div className="inp"> <input type="text" placeholder='Enter Email' />
          <button><i className="fa-solid fa-arrow-right"></i></button></div>
        </div>
        <div className="foot3">
          <h3>Instragram Feed</h3>
          <div className="photo">
            <div className="photo_1">
              <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="" />
              <img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="" />
              <img src="https://preview.colorlib.com/theme/shop/img/i3.jpg" alt="" />
              <img src="https://preview.colorlib.com/theme/shop/img/i4.jpg" alt="" />
            </div>
            <div className="photo_1">
              <img src="https://preview.colorlib.com/theme/shop/img/i5.jpg" alt="" />
              <img src="https://preview.colorlib.com/theme/shop/img/i6.jpg" alt="" />
              <img src="https://preview.colorlib.com/theme/shop/img/i7.jpg" alt="" />
              <img src="https://preview.colorlib.com/theme/shop/img/i8.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="foot4">
          <h3>Follow Us</h3>
          <p>Let us be social</p>
          <p>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
          </p>
        </div>

      </div>
      <div className="foot_bottom">
        <p>Copyright ©2024 All rights reserved | This template is made with <i class="fa-regular fa-heart urek"></i> by <span>Colorlib</span>
        </p>
      </div>
     </div>
    </footer>
    </>
  )
}

export default Footer
