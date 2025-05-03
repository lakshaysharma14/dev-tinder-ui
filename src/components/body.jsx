import { Outlet, useNavigate } from 'react-router-dom';
import Navbar  from './navbar';
import Footer from './footer';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/userSlice';
import { useEffect } from 'react';
import axios from 'axios';

const Body = () => {
    const dispatch = useDispatch();    
    const navigate = useNavigate();
    const user = useSelector((store)=>store.user); // used to fetch data from redux store

    const fetchUser = async () =>{
        if(user)
        return;
        try{
            const res = await axios.get(BASE_URL+'/profile/view',{
                withCredentials:true
            })  
            dispatch(addUser(res.data));
        }catch(error){  
            if(error.status === 401 ){
                navigate('/login');
            }
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchUser();
    },[]);

    return(
        <>
            <Navbar />
            {/* Gives Outlet for Rendering Child Components */}
            <Outlet />
            <Footer />
        </>
    )
}

export default Body;