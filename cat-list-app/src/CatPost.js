import 'bootstrap/dist/css/bootstrap.min.css'
import { Card} from 'react-bootstrap'

const CatPost = ({ posts }) => {
 
    //store html template for each cat object in posts/cat data
    function setPosts(){
        const content = []
        posts.forEach(cat => {
            content.push(
                <Card className="card m-4" key={cat.id}>
                    <div className="card-body">
                        <div className="row" > 
                            <div className="col col-md-2">
                                <img className="img-thumbnail" src={catImgUrlCheck(cat)} alt="A Cat"></img>
                            </div>
                            <div className="col col-md-10" >
                                <h5 className="card-title">ID: {cat.id}</h5>
                                <h6 className="card-text m-2">Breed: {cat.name}</h6>
                                <h6 className="card-text m-2">Affection Level: {cat.affection_level}</h6>
                                <h6 className="card-subtitle m-2 ">Short Legs: {hasShortLegs(cat.short_legs)}</h6>
                                <h6 className="card-text m-2">Description:</h6>
                                <p className="card-text m-2">Description {cat.description}</p>
                            </div>
                        </div>
                    </div>
                </Card>
            )
        });
        console.log(content.length + " posts have been rendered")
        return content
    }

    //return placeholder img url if there is no image url found in cat object
    function catImgUrlCheck(cat){
        if(cat.hasOwnProperty('image') && Object.keys(cat.image).length){
            return cat.image.url
        }else{
            console.log("cat of id: " + cat.id + "has no image url")
            return "http://www.hallens.co.uk/wp-content/themes/consultix/images/no-image-found-360x260.png"
        }
    }

    //returns True or False depending on if cat has short legs or not
    function hasShortLegs(shortLegs){
    return (shortLegs === 1 ? 'False' : 'True');
    }
    
    return( 
        <div>
            {setPosts()}
        </div>
    );
}

export default CatPost;







