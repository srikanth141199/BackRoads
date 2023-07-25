import React from 'react'

export const Title = ({ title, tag }) => {
  return (
    <div className="section-title">
      <h2>{title} <span>{tag}</span></h2>
    </div>
  )
}

export const ServiceType = ({ symbol, serviceType, text }) => {
  return (
    <article className="service">
      <span className="service-icon"><i className={symbol}></i></span>
      <div className="service-info">
        <h4 className="service-title">{serviceType}</h4>
        <p className="service-text">
          {text}
        </p>
      </div>
    </article>
  )
}

export const TourInfo = ({ pic, tourDate, title, text, country, days, cost }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={pic} className="tour-img" alt="" />
        <p className="tour-date">{tourDate}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>
          {text}
        </p>
        <div className="tour-footer">
          <p>
            <span><i className="fas fa-map"></i></span> {country}
          </p>
          <p>{days}</p>
          <p>from {cost}</p>
        </div>
      </div>
    </article>
  )
}

export default Title

