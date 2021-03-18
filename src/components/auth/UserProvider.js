import { useEffect, useState } from 'react';
import { getAuthUser, removeAuthUser, saveAuthUser } from './AuthService';
import { UserContext } from './UserContext';
import { removeApiToken, setApiToken } from '../../api/HttpCommon';

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(getAuthUser()); //get user from local storage

    useEffect(() => {
        if (user) {
            saveAuthUser(user);
            setApiToken(user.token);
        } else {
            removeAuthUser();
            removeApiToken();
        }
    }, [user]);

    const loginUser = (user) => {
        setUser(user);
    }

    const logoutUser = () => {
        setUser(null);
    }

    const isAuth = () => {
        return user && user.result;
    }

    return (
        <UserContext.Provider value={{ user, isAuth, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
}