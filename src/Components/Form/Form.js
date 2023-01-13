import "./Form.css"

const ContactForm = () => {
    return(
        <>
        <section className="Style__form">
        <h2 className="Contact__Title">Contact</h2>

        <form className="Style__form">
            <label>Name:</label>
            <input id="Input_form" type="text" value="Naam"></input>
            <label>Email:</label>
            <input id="Input_form" type="text" value="Email"></input>
            <label>Vraag:</label>
            <input id="Input_formText" type="text" value="Vraag"></input>
            <buton className="Button__form">Versturen</buton>
        </form>
        </section>

        </>
    )

}


export default ContactForm;