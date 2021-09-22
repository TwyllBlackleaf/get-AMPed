import React, { useState, useEffect } from "react";
import PageContent from "../PageContent";
import AuthService from "../../utils/auth";
import { Redirect } from "react-router-dom";
import { getMe } from "../../utils/API";

function MyProfile() {
    var ownPage = true;

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

    return (
        <main>
            {userData.username}
            <PageContent ownPage={ownPage} userData={userData}></PageContent>
        </main>
    )
}

export default MyProfile;