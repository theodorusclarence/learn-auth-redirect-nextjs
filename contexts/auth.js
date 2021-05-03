import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const AuthContext = createContext();

function AuthProvider({ children }) {
    const { pathname, events } = useRouter();
    const [user, setUser] = useState({
        error: 'ini ceritanya gaada user di context',
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
        setUser({ error: 'ini ceritanya gaada user di context' });
    }

    // useEffect(() => {
    //     getUser();
    // }, [pathname]);

    // useEffect(() => {
    //     // Check that a new route is OK
    //     const handleRouteChange = (url) => {
    //         if (url !== '/' && !user) {
    //             window.location.href = '/';
    //         }
    //     };

    //     // Check that initial route is OK
    //     if (pathname !== '/' && user === null) {
    //         window.location.href = '/';
    //     }

    //     // Monitor routes
    //     events.on('routeChangeStart', handleRouteChange);
    //     return () => {
    //         events.off('routeChangeStart', handleRouteChange);
    //     };
    // }, [user]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
