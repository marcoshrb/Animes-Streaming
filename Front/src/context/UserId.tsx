import { useState, createContext } from "react";

export const UserIdContext = createContext();
UserIdContext.displayName = 'UserId';

export const UserIdProvider = ({ children }) => {
    const [idUser, setIdUser] = useState('');

    return (
        <UserIdContext.Provider value={{ idUser, setIdUser }}>
            {children}
        </UserIdContext.Provider>
    );
};
