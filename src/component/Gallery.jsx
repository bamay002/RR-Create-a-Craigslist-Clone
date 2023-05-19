import Posting from "./Posting"
import Directory from "./Directory"
import { postings } from "../postings"

function Gallery(){
    console.log(postings)
    let postList = postings.map((data, i) => <Posting data= {data} key={i} />)

    return (
        <div className="gallery">
            <Directory />
            {postList}
        </div>
    )
}

export default Gallery