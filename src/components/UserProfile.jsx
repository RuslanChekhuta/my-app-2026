import React from "react";

const UserProfile = (props) => {
  const { name, age, isAdmin, tags } = props;

  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
      {isAdmin && <span className="badge">Admin</span>}
      <div className="tags">{tags.join(", ")}</div>
    </div>
  );
};

export default UserProfile;
