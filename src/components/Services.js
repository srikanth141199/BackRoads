import React from 'react'
import Title, { ServiceType } from './Title'
import { services } from '../data'

function Services() {
  return (
    <section className="section services" id="services">
      <Title title= 'OUR' tag= 'Services'/>
      <div className="section-center services-center">
        {services.map((obj1)=>{
          return(
            <ServiceType key={obj1.id} {...obj1}/>
          )
        })}
      </div>
    </section>
  )
}

export default Services