import React from 'react'
import { NavLink } from 'react-router-dom'


import Sendmoneyimg from '../../images/sendmoney.png'
import Contacts from '../../images/contacts.png'
import Logo_1 from '../../images/icons/card.svg'
import Logo_5 from '../../images/icons/wallet.svg'
import Check_logo from '../../images/bx-check-circle.png'


import Comments from './Comments'


const SendmoneySection = () => {
  return (
    <div id='sendmoney'>
      <div className='container'>

        <div className='content'>

          <div className='text-row-1'>
            <h1>Make your money transefer simple and clear</h1>
            <p id='p-1'><img id='check-logo' src={Check_logo} alt="check-logo" />Banking transactions are free for you</p>
            <p id='p-2'><img id='check-logo' src={Check_logo} alt="check-logo" />No monthly cash commission</p>
            <p id='p-3'><img id='check-logo' src={Check_logo} alt="check-logo" />Manage payments and transactions online</p>
          
            <div className="learn-btn">
              <NavLink className="learn-btn" to="/#overview">
                <a id="btn-theme" class="btn btn-theme" href="signin.html">Learn more<i class="far fa-arrow-right"></i></a>    
              </NavLink>
            </div>

          </div>


            <img id='sendmoneyimg' src={Sendmoneyimg} alt="sendmoneyimg" />
            <img id='contacts' src={Contacts} alt="contacts" />

          <div className='text-row-2'>

            <h1>Recieve payment from international bank details</h1>

              <div className='logos'>
                
                <div className='logo-container'>
                  <img id='small-logo'src={Logo_1} alt="card logo" />
                </div>
                
                <div className='logo-container'>
                  <img id='small-logo' src={Logo_5} alt="wallet logo" />
                </div>

              </div>

            <div className='text-row-2-containers'>
              <div className='content-box'>
                    
                <div id='box-1'>
                  <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                </div>
                
                <div id='box-2'>
                  <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                </div>

              </div>

          </div>
          
            <div className="learn-btn">
              <NavLink className="learn-btn" to="/#overview">
                <a id="btn-theme" class="btn btn-theme" href="signin.html">Learn more<i class="far fa-arrow-right"></i></a>    
              </NavLink>
            </div>

          </div>

        </div>

      </div>




      <Comments />

    </div>

  )
}

export default SendmoneySection