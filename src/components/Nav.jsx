import data from "../data/pages"
import "../styles/nav.css"
import { Link } from 'react-router-dom'


let Nav = () => {
    
    return(
        <nav className="sidebar">
            <h1>REPOZEN</h1>
            <div>
                {data.map(element => <Link to={"/pages"+element.link}><div><span>{element.icon}</span><span>{element.name}</span></div></Link>)}
            </div>
        </nav>
    )
}

export default Nav