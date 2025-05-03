import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../redux/connectionSlice'

const Connection = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store)=>store.connections);


  const fetchConnection = async () =>{
    try{
        const res = await axios.get(BASE_URL+'/user/request/connections',{
            withCredentials: true
        })
        dispatch(addConnections(res?.data?.data));
    }catch(error){
        console.log(error);
    }
  } 

  useEffect(()=>{
    fetchConnection();
  },[]);

  //console.log("Connections:",connections);

  if(!connections){
    return;
  }
  
  if(connections.length === 0) {
    return <h1>No Connections Found</h1>
  }

  
  return  (
    <div className='text-center my-10'>
        <h1 className='text-bold text-grey text-4xl'>Connections</h1>
        {
            connections.map((conn) => { 
            const {_id,firstName,lastName,photoUrl,about,age,gender} = conn;
            return(
                <div key={_id} className='flex m-4 p-4 border rounded-4xl border-white w-1/2 mx-auto'>
                    <div>
                        <img alt="photo" className="w-30 h-30 rounded-full" src={conn.photoUrl}></img>
                    </div>
                    <div className='text-left mx-5'>
                        <h2 className='font-bold'>{firstName + " " + lastName}</h2>
                        <p>{about}</p>
                        {age && gender && <p>{age + "," + gender}</p>}
                    </div>
               </div>
            )}
        )}
    </div>
  )
}

export default Connection