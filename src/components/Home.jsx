import data from "../data/pages"
import Pages from "./Pages"
import "../styles/home.css"
import { Link } from 'react-router-dom'

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
                   <div>ICON FORUM</div>
                   <div>ICON MSG</div>
                   <div>ICON DECO</div>
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