import React from "react";

const UserStatus = ({ isOnline }) => {
  return (
    <div
      className={
        isOnline ? "status-badge status-online" : "status-badge status-offline"
      }
    >
      {isOnline ? "В сети" : "Не в сети"}
    </div>
  );
};

export default UserStatus;
