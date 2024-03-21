import React from 'react'
import Header from './sections/Header'
import ErrorComponent from './sections/Error'

const ErrorView = () => {
  return (
    <section>
      <div>
        <Header />
        <ErrorComponent />
      </div>  
    </section>
  )
}

export default ErrorView