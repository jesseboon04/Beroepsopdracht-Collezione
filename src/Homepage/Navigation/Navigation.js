import "./Navigation.css"


const Navigation = () => {
    return (
        <>
            <header className="navigation__header">
                <section >
                    <ul className="navigation__ul">
                        <h1 classname="navigation__h1">Logo</h1>
                        <li className="navigation__li">Over</li>
                        <li className="navigation__li">Features</li>
                        <li className="navigation__li"> Prijs</li>
                        <li className="navigation__li">Contact</li>
                        <button className="navigation__button">Login</button>
                    </ul>
                </section>
            </header>
        </>

    )
}
export default Navigation;