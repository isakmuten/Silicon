import React from 'react'
import Showcase from './sections/Showcase'
import Brands from './sections/Brands'
import Header from './sections/Header'
import Appfeatures from './sections/Appfeatures'
import Howdoesitwork from './sections/Howdoesitwork'
import SendmoneySection from './sections/SendmoneySection'
import Faq from './sections/Faq'
import Subscribe from './sections/Subscribe'
import FooterOne from './sections/FooterOne'


const Home = () => {
  return (
    <main>
      <Header />
      <Showcase />
      <Brands />
      <Appfeatures />
      <Howdoesitwork />
      <SendmoneySection />
      <Faq />
      <Subscribe />
      <FooterOne />
    </main>
  )
}

export default Home