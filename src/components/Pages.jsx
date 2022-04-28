
let Pages = (props) => {

    return (
        <div className="page">
            <div className="page-icon-container">
                <p className="page-icon">{props.icon}</p>
            </div>
            <span className="page-name">{props.name}</span>
        </div>
    )

}

export default Pages