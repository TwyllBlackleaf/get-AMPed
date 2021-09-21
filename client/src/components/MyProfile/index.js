import React from "react";
import PageContent from "../PageContent";
import { getProfile } from "../../utils/auth";
import { Redirect } from "react-router-dom";

function MyProfile() {
    const ownPage = false;
    const userId = getProfile()._id;

    if (userId) {
        ownPage = true;
    }

    function CheckRedirect() {
        if (!ownPage) {
            return <Redirect to="/login"></Redirect>
        }
    }

    return (
        <main>
            {/* Check if ownPage === true. If not, <Redirect> to Login */}
            <CheckRedirect></CheckRedirect>
            <PageContent ownPage={ownPage} userId={userId}></PageContent>
        </main>
    )
}

export default MyProfile;