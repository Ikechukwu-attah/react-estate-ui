import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContex";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (currentUser) {
      const newSocket = io("http://localhost:4000");
      setSocket(newSocket);

      // Emit newUser event when the socket connects
      newSocket.emit("newUser", currentUser.id);
      console.log(`Emitting newUser event for ${currentUser.id}`);

      // Cleanup on unmount
      return () => newSocket.close();
    }
  }, [currentUser]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
