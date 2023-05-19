
function Posting(props){
    return (
        <div className="posting">
            <p>{props.data.price}</p>
            <img src={props.data.imageURL} alt={`Image of ${props.data.title}`}/>
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>
        </div>
    )
}

export default Posting