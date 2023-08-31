import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [loggedIn, setloggedIn] = useState(false);
    
    return <UserContext.Provider>
        {children}
    </UserContext.Provider>

};
const useUserContext = () => { useContext( UserContext ) };

export default useUserContext;
