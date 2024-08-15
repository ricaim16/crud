import axios from "axios";
import React, { useEffect, useState } from "react"; // Import useState
import { Link } from "react-router-dom";

function User() {
  // Initialize state with a user object
  // empty array clearly communicates that there are currently no users, but the data structure is in place for when user data is available.
  const [users, setUsers] = useState([]);

  // fetch data from an APi
  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);
  //[] mecheresha lay time ayasfelgewm cuz time karegen sideres delete yaregewal so ayasfelgem

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/deleteUser/${id}`)
      .then((result) => {
        {
          console.log(result);
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          {" "}
          Add +{" "}
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map(
              (
                user, //not related to function its variable
                index // Fix: Added parentheses to return JSX
              ) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    {/* <button>Edit</button> */}
                    {/* <Link to="/update" className="btn btn-success"> */}
                    {/* cuz be id new edit mnaregew thats why we use id  */}
                    <Link
                      to={`/update/${user._id}`}
                      className="btn btn-success"
                    >
                      Update
                    </Link>

                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
