import data from "../data/pages"

let Nav = () => {
    
    return(
        <nav>
            <h1>REPOZEN</h1>
            <div>
                {data.map(element => <span>{element.name}</span>)}
            </div>
        </nav>
    )
}

export default Nav