import React from 'react'
import Header from './sections/Header'
import ContactSection from './sections/ContactSection'
import Map from './sections/Map'
import FooterDos from './sections/FooterDos'

const Contact = () => {
  return (
    <section>
      <div>
        <Header contactPage={true} />
        <ContactSection />
        <Map />
        <FooterDos />
      </div>
    </section>
  )
}

export default Contact
