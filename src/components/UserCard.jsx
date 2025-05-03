import axios from 'axios'
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../redux/feedSlice';
import { BASE_URL } from '../utils/constants';

const UserCard = ({user}) => {
  const{ _id,firstName,lastName,about,photoUrl,age,gender} = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status,id) => {
    try{
      const url = BASE_URL + `/request/send/${status}/${id}`;
      const res = await axios.post(
        url,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUserFromFeed(id));
    }catch(error){
        console.log(error);
    }
  }

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img
          src={photoUrl}
          alt="user photo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{age}</p>
        <p>{gender}</p>
        <p>{about}</p>
        <div className="card-actions justify-center my-5">
          <button className="btn btn-primary flex" onClick={() => handleSendRequest("ignored", _id)}>Ignore 🙃</button>
          <button className="btn btn-secondary" onClick={() => handleSendRequest("interested", _id)}>Interested 💓</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
