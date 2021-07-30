import { useEffect, useState } from 'react';
import CatPost from './CatPost';


const CatList = () => {

    //used to store json response of all cat details
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetchData()
    }, []);

    //fetch all cat data from API endpoint
    async function fetchData() {
        try{
            const response = await fetch('https://api.thecatapi.com/v1/breeds');
            const data = await response.json();
            setPosts(data);
            console.log("JSON data has been fetched")
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }

    return( 
        <div>
            {posts && <CatPost posts={posts}/>}
        </div>
    );
}

export default CatList

