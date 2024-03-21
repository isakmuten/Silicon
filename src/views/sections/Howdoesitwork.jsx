import React from 'react'

import Mobile_1 from '../../images/mobile-howdoesitwork_1.svg'
import Mobile_2 from '../../images/mobile-howdoesitwork_2.svg'
import Mobile_3 from '../../images/mobile-howdoesitwork_3.svg'
import Iphone_1 from '../../images/iphone_12.svg'


const Howdoesitwork = () => {
  return (

    <div id='howdoesitwork'>
      <div className='container'>
      
        <div className='content'>
              <h1>How Does It Work?</h1>
        </div>
      
        <div className='img-container'>


          <div className='hdiw-img-1'>
            <img id='mobile-howdoesitwork-1' src={Mobile_1} alt="mobile-howdoesitwork-1" />
           </div>

           <div className='hdiw-img-3'>
           <img id='mobile-howdoesitwork-3' src={Mobile_3} alt="mobile-howdoesitwork-3" />
           </div>

           <div className='hdiw-img-2'>
           <img id='iPhone-12' src={Iphone_1} alt="iPhone-12" />
           
           <img id='mobile-howdoesitwork-2' src={Mobile_2} alt="mobile-howdoesitwork-2" />
           </div>

        </div>

        <div className='content-2'>
            <h1>Step 2. Latest transaction history</h1>
            <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
          </div>

      </div>
    </div>
  
  
    )
}

export default Howdoesitwork