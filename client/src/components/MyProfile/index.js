import React, { useState, useEffect } from "react";
import PageContent from "../PageContent";
import AuthService from "../../utils/auth";
import { Redirect } from "react-router-dom";
import { getMe } from "../../utils/API";

function MyProfile() {
    var ownPage = false;

    const [userData, setUserData] = useState({});

    const userDataLength = Object.keys(userData).length;

    useEffect(() => {
        const getUserData = async () => {
            try {
                const token = AuthService.getToken() ? AuthService.getToken() : null;
                if (!token) {
                    return false;
                }
                const response = await getMe(token);

                if (!response.ok) {
                    throw new Error("something went wrong!");
                }

                const user = await response.json();
                setUserData(user);
            } catch (err) {
                console.log(err);
            }
        };

        getUserData();
    }, [userDataLength]);




    if (userData) {
        ownPage = true;
    }

    function CheckRedirect() {
        if (!ownPage) {
            return <Redirect to="/login"></Redirect>
        } else {
            return null;
        }
    }

    return (
        <main>
            {/* Check if ownPage === true. If not, <Redirect> to Login */}
            {userData.username}
            {/* <CheckRedirect></CheckRedirect> */}
            <PageContent ownPage={ownPage} userData={userData}></PageContent>
        </main>
    )








    return null;





}

export default MyProfile;