import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState({
        error: 'you are logged out, and there is no user object',
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    async function getUser() {
        try {
            //   const response = await fetch('/api/me')/
            //   const profile = await response.json()
            // const profile = { name: 'hello' };
            if (user.error) {
                setUser(null);
            } else {
                setUser(user);
            }
        } catch (err) {
            console.error(err);
        }
    }

    function login() {
        setIsAuthenticated(true);
        setUser({ name: 'hello' });
    }

    function logout() {
        setIsAuthenticated(false);
        setUser({ error: 'you are logged out, and there is no user object' });
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
