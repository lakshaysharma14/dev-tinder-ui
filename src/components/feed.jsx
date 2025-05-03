import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../redux/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store)=>store.feed);

  const getFeed = async (req,res) => {
    if(feed)
      return;
    try{
      const res = await axios.get(BASE_URL  +'/user/feed',{
        withCredentials:true
      })
      dispatch(addFeed(res?.data?.data)); 

    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getFeed();
  },[])

  if(!feed)
    return;

  if(feed.length <=0 ){
    return <h1 className="flex justify-center text-4xl my-20">No new User Found</h1>
  }

  return feed && (
    <div className="flex justify-center my-20">
         <UserCard user={feed[0]}/>
    </div>
 
  )
}

export default Feed