import React from 'react'
import { Link } from 'react-router-dom'
import AppstoreImage from '../../images/appstore.svg'
import GooglePlayImage from '../../images/googleplay.svg'
import ShowcaseMobilesImage from '../../images/showcase-mobiles.svg'
import Logo_1 from '../../images/icons/card.svg'
import Logo_2 from '../../images/icons/sheild2.svg'
import Logo_3 from '../../images/icons/cost.svg'
import Logo_4 from '../../images/icons/shat2.svg'
import Logo_5 from '../../images/icons/wallet.svg'
import Logo_6 from '../../images/icons/smiley.svg'
import Mobile_1 from '../../images/mobile-appfeatures.svg'
import Mobile_2 from '../../images/mobile-howdoesitwork_1.svg'
import Mobile_3 from '../../images/mobile-howdoesitwork_2.svg'
import Mobile_4 from '../../images/mobile-howdoesitwork_3.svg'

const Appfeatures = () => {
  return (
    <div id="showcase-2">

        <div className="container-2">
          
          <div className="content-2">
            
            <h1>App Features</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>

            <div className='content-boxes'>
            <div className='logo-container'>
          <img id='small-logo'src={Logo_1} alt="card logo" />
          </div>

        <div id='box-1' className='info-box'>
          <h1>Easy Payments</h1>
          <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
        </div>

        <div className='logo-container'>
        <img id='small-logo' src={Logo_2} alt="sheild logo" />
        </div>

        <div id='box-2' className='info-box'>
          <h1>Data Security</h1>
          <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
        </div>

        <div className='logo-container'>
        <img id='small-logo' src={Logo_3} alt="cost logo" />
        </div>
        <div id='box-3' className='info-box'>
          <h1>Cost Statistics</h1>
          <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
        </div>

        <div className='logo-container'>
        <img id='small-logo' src={Logo_4} alt="chat logo" />
        </div>

        <div id='box-4' className='info-box'>
          <h1>Support 24/7</h1>
          <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
        </div>

        <div className='logo-container'>
        <img id='small-logo' src={Logo_5} alt="wallet logo" />
        </div>

        <div id='box-5' className='info-box'>
          <h1>Regular Cashback</h1>
          <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
        </div>
        <div className='logo-container'>
        <img id='small-logo' src={Logo_6} alt="smiley logo" />
        </div>

        <div id='box-6' className='info-box'>
          <h1>Top Standards</h1>
          <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
        </div>
            </div>
            
          </div>
          
          
          <img id='mobile-appfeatures' src={Mobile_1} alt="mobile 1" />

        </div>
    </div>
  )
}

export default Appfeatures