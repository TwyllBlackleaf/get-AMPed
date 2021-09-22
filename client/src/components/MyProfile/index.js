import React from "react";
import PageContent from "../PageContent";
import AuthService from "../../utils/auth";
import { Redirect } from "react-router-dom";
import { getMe } from "../../utils/API";

function MyProfile() {
    var ownPage = false;


    const userData = getMe(AuthService.getToken());

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
            <CheckRedirect></CheckRedirect>
            <PageContent ownPage={ownPage} userData={userData}></PageContent>
        </main>
    )
}

export default MyProfile;