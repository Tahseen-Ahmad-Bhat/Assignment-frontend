import React from "react";
import "./UpdateNotification.css";

export default function UpdateNotification({ content }) {
  return (
    <div className="notification">
      <p className="notification-content">{content}</p>
    </div>
  );
}
