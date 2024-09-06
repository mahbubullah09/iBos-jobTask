import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // check logged in or not 
    useEffect(() => {
        const savedUser = localStorage.getItem('loggedInUser');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const signup = (email, pass, firstName, lastName) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = users.some(user => user.email === email);
        if (userExists) {
            return { success: false, message: "Email is already registered." };
        }
        const newUser = { email, pass, firstName, lastName };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        return { success: true, message: "Signup successful!" };
    };

    const login = (email, pass) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const savedUser = users.find(user => user.email === email && user.pass === pass);

        if (savedUser) {
            localStorage.setItem('loggedInUser', JSON.stringify(savedUser));
            setUser(savedUser);
            return { success: true, message: "Login successful!" };
        } else {
            return { success: false, message: "Invalid email or password." };
        }
    };

    const logout = () => {
        localStorage.removeItem('loggedInUser');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ signup, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
