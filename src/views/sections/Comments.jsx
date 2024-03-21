import React from 'react'
import Rating_4 from '../../images/rating4.png'
import Rating_5 from '../../images/rating5.png'
import Avatar_1 from '../../images/avatar1.png'
import Avatar_2 from '../../images/avatar2.png'
import Quotes_1 from '../../images/quotes.png'



const Comments = () => {
  return (
    <div id='comments'>
      <div className='container'>
        <div className='content'>
          
          <div id='box-1' className='box-1'>
            <h1>Clients are Loving Our App</h1>
            </div>
          
          <div id='box-2' className='box-2'>

            <div className='quote'>
              <img id='quotes' src={Quotes_1} alt="Quotes 1" />
            </div>

            <img id='rating-4'src={Rating_4} alt="rating 4" />
            <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
            
            <div className='avatar'>
              <img id='avatar-1' src={Avatar_1} alt="avatar 1" />
              <div className='avatar-name'>
                <h1>Fannie Summers</h1>
                <p>Designer</p>
              </div>
            </div>

            </div>

          <div id='box-3' className='box-2'>

          <div className='quote'>
              <img id='quotes' src={Quotes_1} alt="Quotes 1" />
            </div>

          <img id='rating-5' src={Rating_5} alt="rating 5" />

            <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
            
            <div className='avatar'>
              <img id='avatar-2' src={Avatar_2} alt="avatar 2" />
              <div className='avatar-name'>
                <h1>Albert Flores</h1>
                <p>Developer</p>
              </div>
            </div>
         
          </div>

        </div>
      </div>
    </div>
  )
}

export default Comments