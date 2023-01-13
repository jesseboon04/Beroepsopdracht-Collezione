import "./FeaturesSection.css"

const FeaturesSection = (props) => {
    
    return (
        <section class="section__features">
            <header class="section__header">
             
                <h2 class="section__h2">{props.titleSection||"placeholder title"}</h2>
            </header>
            
            {props.children}
        </section>
    )
}

export default FeaturesSection;