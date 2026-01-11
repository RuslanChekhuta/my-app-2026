import React from "react";

const NotificationArea = ({ newMessagesCount }) => {
  return (
    <div>
      <h3>Центр уведомлений</h3>
      {newMessagesCount > 0 && (
        <div className="notification-box">
          У вас {newMessagesCount} новых сообщений!
        </div>
      )}
    </div>
  );
};

export default NotificationArea;
