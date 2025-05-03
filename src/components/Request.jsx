import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests,removeRequests } from "../redux/requestSlice";
import { useEffect } from "react";

const Request = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });
      console.log(res?.data);
      dispatch(addRequests(res?.data?.data));
    } catch (error) {
      console.log(error);
    }
  };

  const reviewRequest = async (status, id) => {
    try {
      const url = BASE_URL + `/request/review/${status}/${id}`;
      const res = await axios.post(
        url,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeRequests(id));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) {
    return;
  }

  console.log("Requests:",requests)
  if (requests?.length === 0) {
    return <h1 className="flex text-4xl justify-center my-20">No Requests Found</h1>;
  }

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-grey text-4xl">Requests</h1>
      {requests?.map((req) => {
        const userId = req?._id.toString();
        console.log("Id:", userId);
        const { _id, firstName, lastName, photoUrl, about, age, gender } =
          req.fromUserId;
        return (
          <div
            key={_id}
            className="flex m-4 p-4 justify-between items-center border rounded-4xl border-white w-2/3 mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-30 h-30 rounded-full"
                src={photoUrl}
              ></img>
            </div>
            <div className="text-left mx-5">
              <h2 className="font-bold">{firstName + " " + lastName}</h2>
              <p>{about}</p>
              {age && gender && <p>{age + "," + gender}</p>}
            </div>
            <div>
              <button
                className="btn btn-dash btn-success mx-2"
                onClick={() => reviewRequest("accepted", userId)}
              >
                Accept
              </button>
              <button
                className="btn btn-dash btn-error mx-2"
                onClick={() => reviewRequest("rejected", userId)}
              >
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Request;
