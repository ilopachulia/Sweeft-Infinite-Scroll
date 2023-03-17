import React from "react";
import { useParams } from "react-router-dom";
import useUserFetch from "../hooks/useUserFetch";
import "./UserDetails.style.css";

const UserDetails = () => {
  const { userId } = useParams();
  const { loading, error, user } = useUserFetch(userId);

  if (loading) {
    return <div className="user-details">Loading...</div>;
  }

  if (error) {
    return (
      <div className="user-details">
        <div className="error-message">Error loading user data</div>
      </div>
    );
  }

  return (
    <div className="container">
      <img className="avatar" src={user.imageUrl} alt={user.name} />
      <div className="info">
        <h2 className="name">
          {user.prefix}
          {user.name} {user.lastName}
        </h2>
        <p className="job-details">{user.title}</p>
        <p className="email">Email: {user.email}</p>
        <p className="ip-address">IP Address: {user.ip}</p>
        <p className="job-area">Job Area: {user.jobArea}</p>
        <p className="job-type">Job Type: {user.jobType}</p>
      </div>
      <div className="address">
        <h3 className="title">Address</h3>
        <p className="company">{user.company.name}</p>
        <p className="city">City: {user.address.city}</p>
        <p className="country">Country: {user.address.city}</p>
        <p className="state">State: {user.address.state}</p>
        <p className="street">Street Address: {user.address.streetAddress}</p>
        <p className="zip">ZIP: {user.address.zipCode}</p>
      </div>
    </div>
  );
};

export default UserDetails;