import data from "../data/pages"
import Pages from "./Pages"
import "../styles/home.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPowerOff } from "@fortawesome/free-solid-svg-icons"


let Home = () => {
    const myData = data.map(element => 
        <Link to={"/pages/" + element.link}><Pages key={element.id} 
        {...element}
        /></Link>)

    return(
        <>
           <header className="page-header">
               <h2 className="page-logo">REPOZEN</h2>
               <div className="header-container">
                   <div className="header-icon-container"><p className="header-icon"><FontAwesomeIcon icon={faUser} /></p><span className="notif">0</span></div>
                   <div className="header-icon-container"><p className="header-icon"><FontAwesomeIcon icon={faEnvelope} /></p><span className="notif">0</span></div>
                   <div className="header-icon-container"><p className="header-icon"><FontAwesomeIcon icon={faPowerOff} /></p></div>
               </div>
           </header>
           <h1 className="page-title">MON TABLEAU DE BORD</h1>
           <div className="pages-container">
               {myData}
           </div>
        </>
    )

}

export default Home