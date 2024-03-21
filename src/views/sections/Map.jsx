import React from 'react'
import Position from '../../images/icons/bx-map.png'
import Phone from '../../images/icons/bx-phone-call.png'
import Clock from '../../images/icons/bx-time-five.png'
import FullMap from '../../images/icons/map.png'

const Map = () => {
  return (
    <div id='map'>
      <div className='container'>
        <div className='content'>

          <div className='full-map'>
          <img src={FullMap} alt="full map" />
          </div>

          <div className='details'>
            <div className='content-box-1'>
              <h1>Medical Center 1</h1>
              <div id='row-1'><img src={Position} alt="position" /><p>4517 Washington Ave. Manchester. Kentucky 39495</p></div>
              <div id='row-2'><img src={Phone} alt="phone" /><p>(406) 555-0120</p></div>
              <div id='row-3'>
                <div className='clock-img'><img src={Clock} alt="clock" /></div>
                <div className='hours'>
                  <h1>Mon-Fre</h1> <p>9:00 am - 22:00 am</p>
                  <h1>Sat-Sun</h1> <p>9:00 am - 20:00 am</p>
                </div>
              </div>
            </div>
            <div className='content-box-2'>
              <h1>Medical Center 2</h1>
              <div id='row-1'><img src={Position} alt="position" /><p>2464 Royal Ln. Mesa,New Jersey 45463</p></div>
              <div id='row-2'><img src={Phone} alt="phone" /><p>(406) 544-0123</p></div>
              <div id='row-3'>
                <div className='clock-img'><img src={Clock} alt="clock" /></div>
                <div className='hours'>
                  <h1>Mon-Fre</h1> <p>9:00 am - 22:00 am</p>
                  <h1>Sat-Sun</h1> <p>9:00 am - 20:00 am</p>
                </div>
              </div>
            </div>
            <div className='socials'>
              <div className='facebook'><i id='fb' class="fa-brands fa-square-facebook"></i></div>
              <div className='twitter'><i id='tt' class="fa-brands fa-twitter"></i></div>
              <div className='instagram'><i id='ig' class="fa-brands fa-square-instagram"></i></div>
              <div className='youtube'><i id='yt' class="fa-brands fa-youtube"></i></div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Map