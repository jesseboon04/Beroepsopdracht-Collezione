import "./Features.css"
const Features = (props) => {
    let FeaturesImage = <img src={"/img/" + props.image} />
    if(props.image === undefined){
        FeaturesImage = <img src={"/img/skier.png"} />;
    }
    console.log(props);
    return(
        <article class="card">
            <figure class="card__figure">
                {FeaturesImage}
            </figure>
            <section class="card__section">
                <h2>{props.h2 || "placeholder"}</h2>
                <p className="text__Features">{props.p || "placeholder"}</p>
            </section>
        </article>
    )
}
export default Features;