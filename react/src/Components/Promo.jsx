function Promo(props) {
    return (
        <div className="card">
            <h3>Feature: {props.feature}</h3>
            <a href="#">Click to by!</a>
            {/* <h2>Benefit: {props.benefit}</h2>
            <p>Target audience: {props.audience}</p> */}

        </div>
    )
}

export default Promo;