import { Outlet } from "react-router-dom";

import Wrapper from "../assets/wrappers/Dashboard";
import { Navbar, BigSidebar, SmallSidebar } from "../components";

import { useState, createContext, useContext } from "react";


// Global Context for DashboardLayout and its child components - Navbar, BigSidebar, SmallSidebar
const DashboardContext = createContext();

//DashboardLayout component -> Parent for all the following components
const DashboardLayout = () => {

    // temp user object -> to be replaces with custom hooks
    const user = { name: "josh" };


    // Navigation hook and state variables can be set up here



    // State variables
    const [showSidebar, setShowSidebar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);


    // Dark theme toggle function
    const toggleDarkTheme = () => {
    console.log("toggle dark theme");
    };

    // toggle sidebar function
    const toggleSidebar = () => {
    // setShowSidebar is equal to opposite(!) value of current showSidebar Ruh?
    setShowSidebar(!showSidebar);
    };

    // temp user LOGOUT function
    const logoutUser = async () => {
    console.log("logout user");
    };


    return (

        // Context variables and functions provided to child components
        <DashboardContext.Provider
            value={{
            user,
            showSidebar,
            isDarkTheme,
            toggleDarkTheme,
            toggleSidebar,
            logoutUser,
            }}
        >
            <Wrapper>
                <main className="dashboard">

                    {/* Child components of DashboardLayout
                    Sidebars and Navbar components can be passed down
                    as props, however these components have been set up as
                    Global Context */}
                    <SmallSidebar />
                    <BigSidebar />
                    <div>
                        <Navbar />
                        <div className="dashboard-page">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    );
};

// useDashboardContext hook exported to Navbar.jsx, SmallSidebar.jsx, BigSidebar.jsx
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;