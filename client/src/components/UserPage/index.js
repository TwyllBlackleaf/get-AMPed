import React from "react";
import PageContent from "../PageContent";


let ownPage;
let userId;

function UserPage() {
    // set constant ownPage to false, and pass it as prop to <PageContent> to prevent rendering of edit buttons
    // get user ID from URL's :id parameter, and pass it as prop to <PageContent>

    return (
        <main>
            <PageContent ownPage={ownPage} userId={userId}></PageContent>
        </main>
    )
}

export default UserPage;