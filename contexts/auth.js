import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState({
        error: 'you are logged out, and there is no user object, and no token',
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log('token: ', token);
        if (!(token === null || token === undefined)) {
            loginWithToken();
        }
        setIsLoading(false);
    }, []);

    function loginWithToken() {
        localStorage.setItem('token', 'true');
        setIsAuthenticated(true);
        setUser({
            name: 'hello',
            msg: 'Logged in because token in localStorage',
        });
    }
    function login() {
        setIsAuthenticated(true);
        setUser({
            name: 'hello',
            msg: 'Logged in by clicking login button, you still have no token',
        });
    }

    function logout() {
        setIsAuthenticated(false);
        setUser({
            error: 'you are logged out, and there is no user object, and no token',
        });
        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                login,
                logout,
                loginWithToken,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
