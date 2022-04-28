import data from "../data/pages"
import "../styles/nav.css"


let Nav = () => {
    
    return(
        <nav className="sidebar">
            <h1>REPOZEN</h1>
            <div>
                {data.map(element => <span>{element.name}</span>)}
            </div>
        </nav>
    )
}

export default Nav