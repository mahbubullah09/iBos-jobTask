import { Children, createContext, useEffect, useState } from "react";


export const AuthContext = createContext()

const AuthProvider = () => {
    const [user, setUser] = useState(null);



    // check logged in or not 
    useEffect(() => {
        const savedUser = localStorage.getItem('loggedInUser');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);


    //signup
    const signup = (email, pass) => {
        const newUser = { email, pass };
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
    }

    //login

    const login = (email, pass) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const savedUser = users.find(user => user.email === email && user.pass === pass);
        if (savedUser) {
            localStorage.setItem('loggedInUser', JSON.stringify(savedUser));
            setUser(savedUser);
        } else {
            alert("Invalid email or password");
        }
    }
    // Logout function
    const logout = () => {
        localStorage.removeItem('loggedInUser');
        setUser(null);
    };




    return (
        <AuthContext.Provider value={{ signup,login,logout, user }}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;