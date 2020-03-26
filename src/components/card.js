import React from "react"

const Card = ({ data }) => {
  return (
    <div className="card">
      <header className="card-header">
        <h2 className="card-header-title is-size-5">{data.name}</h2>
      </header>
      <div className="card-content">
        <p className="has-text-weight-semibold">{data.description}</p>
        <p>{data.details}</p>
        <div style={{ padding: `10px 0` }}>
          <h3 className="has-text-weight-semibold">Remote Goods</h3>
          <ul>
            {data.goods.map((good, index) => {
              return <li key={index}>{good}</li>
            })}
          </ul>
        </div>
        {data.giftcards.length > 0 && (
          <div style={{ padding: `10px 0` }}>
            <h3 className="has-text-weight-semibold">Gift Cards</h3>
            <ul>
              {data.giftcards.map((gc, index) => {
                return <li key={index}>{gc}</li>
              })}
            </ul>
          </div>
        )}
      </div>
      <footer className="card-footer">
        <a href={data.website} className="card-footer-item">
          Website
        </a>
        <a href={`tel:1-${data.phone}`} className="card-footer-item">
          {data.phone}
        </a>
        <div className="card-footer-item tags">
          {/* <span className="tag">{🛍️Shop}</span> */}
          {data.categories.map((tag, index) => {
            return (
              <span key="index" className="tag is-success">
                <span role="img" aria-label="{tag.type}">
                  {tag.emoji}
                </span>
                {tag.type}
              </span>
            )
          })}
        </div>
      </footer>
    </div>
  )
}

export default Card
