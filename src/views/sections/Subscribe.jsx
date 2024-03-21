import React from 'react'
import SubscriptionForm from './SubscriptionForm'
import Bell from '../../images/icons/notification.png'

const Subscribe = () => {
  return (
    <div id='subscribe'>
    <div className='container'>
      <div className='content'>
        

          <div className='bell'><img id='bell-icon' src={Bell} alt="Bell 1" /></div>
        
          <div className='title'>
            <h1>Subscribe to our newsletter to stay informed about latest updates</h1>
          </div>

          <div className='sub'>
            <SubscriptionForm />
          </div>

        
      </div>
      </div>  
    </div>
  )
}

export default Subscribe