import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  async function fetchProductData(){
    setLoading(true)
    try{
      const result = await fetch(API_URL);
      const data = await result.json();
      setPosts(data)
    }
    catch(error){
      console.log("Error is: " + error)
      setPosts([])
    }
    setLoading(false)
  }

  useEffect( ()=>{
    fetchProductData()
  },[])

  return(
    <div>
      {
        loading ? <Spinner/> : 
        posts.length > 0 ? (
          <div className="grid mr-5 xs:grid-col-1  md:grid-cols-3 lg:grid-cols-4 max-w-6xl md:mx-auto lg:mx-auto p-2 space-y-10 space-x-5 min-h-[80vh]  ">
            {
              posts.map( (post) => (
                <Product key={post.id} post={post}/>
              ))
            }
          </div>
        ) : 
        <div className="flex justify-center items-center w-full h-screen">
          <p className="text-2xl text-green-700 font-semibold">No Posts Found</p>
        </div>
      }
    </div>
  );
};

export default Home;
