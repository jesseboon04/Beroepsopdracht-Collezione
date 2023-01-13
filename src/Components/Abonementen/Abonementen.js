import "./abonementen.css"



const Abonementen = (props) => {
    let FeaturesImage = <img src={"/img/" + props.image} />
    if(props.image === undefined){
        FeaturesImage = <img src={"/img/skier.png"} />;
    }
    console.log(props);
    return(
        <section className="style__cards">
        <article class="prijs_card">
            <figure class="img__card">
                {FeaturesImage}
            </figure>
            <section class="info__section">
                <h2>{props.h2 || "placeholder"}</h2>
                <p className="text__Features">{props.p || "placeholder"}</p>
            </section>
        </article>
        </section>
    )
}
export default Abonementen;