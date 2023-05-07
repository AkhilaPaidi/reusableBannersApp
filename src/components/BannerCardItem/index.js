import './index.css'

const Banner = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails

  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Banner
