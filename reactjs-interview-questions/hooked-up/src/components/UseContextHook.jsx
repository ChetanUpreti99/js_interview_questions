import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");
const UserContext = createContext(null);

const UseContextHook = () => {
    const [theme, setTheme] = useState("light")
    const [profile, setProfile] = useState({ name: "chetan", age: 26 })


    const changeProfile = () => {
        setProfile({ ...profile, age: 28 });
    }

    const changeTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <UserContext.Provider value={{ isLoggedIn: false, name: "Chetan Upreti" }}>
                <div>
                    <h3>
                        <u>useContext Hook</u>
                    </h3>
                    <h5>Question 1: What is useContext in React?</h5>
                    {/*
                    - Used to consume values ( like data or functions ) from a context created by 
                    `createContext()`.
                    - It allows functional components to access context values without prop drilling.
                    - In scenarios where passing props through multiple levels of components is impractical.
                    */}
                </div>
                <GrandparentComponent></GrandparentComponent>
            </UserContext.Provider>
        </ThemeContext.Provider>
    )

}



// Prop Drilling
// GrandparentComponent
const GrandparentComponent = () => {
    const data = "Hello from Grandparent";

    return <ParentComponent data={data} />;
};

// ParentComponent
const ParentComponent = ({ data }) => {
    return <ChildComponent data={data} />;
};

// ChildComponent
const ChildComponent = ({ data }) => {
    return <GrandchildComponent data={data} />;
};

// GrandchildComponent
const GrandchildComponent = ({ data }) => {
    const { theme, changeTheme } = useContext(ThemeContext);
    const { isLoggedIn, name } = useContext(UserContext);
    return (
        <>
            <p>{data}</p>

            <p>{name}</p><br></br>
            <p>
                {
                    isLoggedIn ?
                        "User logged In"
                        : "User Logout."
                }
            </p>

            <p>{theme}</p>
            <button onClick={changeTheme}>Change Theme</button>
        </>
    );
};


export default UseContextHook;