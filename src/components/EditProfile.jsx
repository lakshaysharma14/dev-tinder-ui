import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import UserCard from "./UserCard";
import { addUser } from "../redux/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhoto] = useState(user.photoUrl);
  const [about, setAbout] = useState(user.about);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [showToast, setShowToast] = useState(false);

  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      const res = axios.patch(
        BASE_URL + "/profile/edit",
        {firstName,lastName,about,photoUrl,age,gender},
        {
          withCredentials: true,
        }
      );
      setShowToast(true);
      dispatch(addUser(res?.data?.data));
      const i = setTimeout(()=>{
        setShowToast(false);
      },3000);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <>
    <div className="flex justify-center my-30">
      <div>
        <div className="flex justify-center mx-20">
          <div className="card bg-base-300 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title justify-center text-2xl text-green-600">
                Edit Profile
              </h2>

              <span className="flex  text-green-400">First Name</span>
              <label className="input validator my-4">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="First Name"
                  title="Only letters, numbers or dash"
                />
              </label>

              <span className="flex  text-green-400">Last Name</span>
              <label className="input validator my-4">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Last Name"
                  title="Only letters, numbers or dash"
                />
              </label>

              <span className="flex text-green-400"> Photo URL </span>
              <label className="input validator my-4">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="input"
                  value={photoUrl}
                  onChange={(e) => setPhoto(e.target.value)}
                  required
                  placeholder="Photo Url"
                  title="Only letters, numbers or dash"
                />
              </label>

              <span className="flex  text-green-400">About</span>
              <label className="input validator my-4">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="input"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  required
                  placeholder="About"
                  title="Only letters, numbers or dash"
                />
              </label>

              <span className="flex  text-green-400">Age</span>
              <label className="input validator my-4">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="input"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  placeholder="Age"
                  title="Only letters, numbers or dash"
                />
              </label>

              <span className="flex  text-green-400">Age</span>
              <label className="input validator my-4">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="input"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  placeholder="Gender"
                  title="Only letters, numbers or dash"
                />
              </label>

              <p className="text-red-400">{error}</p>

              <div className="card-actions justify-center">
                <button className="btn btn-secondary" onClick={saveProfile}>Save Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={{firstName,lastName,about,photoUrl,age,gender}}/>
    </div>
    {showToast && (
        <div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <span>Profile Saved Successfully ✅.</span>
        </div>
      </div>
    )}
    </>
   
  );
};

export default EditProfile;
