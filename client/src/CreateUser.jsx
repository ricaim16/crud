// rfce
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; //import

function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate(); //initialaize we have to use useNavigate  hooks

  const handleSubmit = (e) => {
    // reloade yaregewal page prevents the default behavior
    e.preventDefault();

    //createUser server lay post blen yasgebanew new  name.. ke DB yemimeta semu check temesasay mehonu

    axios
      .post("http://localhost:3001/createUser", { name, email, age })
      .then((result) => {
        console.log("successful sent" + result);
        navigate("/"); //successful sent back to ye mejemeriyaw page
        // the path to redirect users to a different route.
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          {/* validating the form, sending data to a server, or updating the component state. */}

          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              className="form-control"
              onChange={(e) => setName(e.target.value)} //// Update state on change
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              placeholder="Enter age"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
 