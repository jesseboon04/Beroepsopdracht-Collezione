import "./loginsection.css"
import inlogafb from "../../images/loginafb.png"

const Loginsection = () => {
    return<>
    <section className="inlog-section">
       <div className="title-inlog"><h1>Inloggen</h1>
      <form className="forms-inlog">
        <image src={inlogafb}/>
        <label>Gebruikersnaam :</label><br/>
        <input  className="inputinlog"  type='text' value="Gebruikersnaam"></input><br/>
       
        <label>Wachtwoord :</label><br/>
        <input className="inputinlog" type='text' value="Wachtwoord"></input><br/>
        <button className="btn-inlog">Inloggen</button>

      </form>
      </div>


    </section>
    </>
}
export default Loginsection;