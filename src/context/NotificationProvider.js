import React, { createContext, useState } from "react";
import UpdateNotification from "../components/UpdateNotification";

export const NotificationContext = createContext();

let timeoutId;

export default function NotificationProvider({ children }) {
  const [notification, setNotification] = useState("");

  const updateNotification = (value) => {
    if (timeoutId) clearTimeout(timeoutId);

    setNotification(value);
    timeoutId = setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ updateNotification }}>
      {children}
      {notification && <UpdateNotification content={notification} />}
    </NotificationContext.Provider>
  );
}
