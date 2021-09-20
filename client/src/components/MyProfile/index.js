import React from "react";
import PageContent from "../PageContent";

function MyProfile() {
    // function for checking token to make sure user is authenticated.
        // if authenticated, const ownPage = true
        // pass the ownPage constant to <PageContent> as prop so it can render edit buttons
        // get user ID from token and pass it as prop to <PageContent>

    return (
        <main>
            {/* Check if ownPage === true. If not, <Redirect> to Login */}
            <PageContent ownPage={ownPage} userId={userId}></PageContent>
        </main>
    )
}

export default MyProfile;