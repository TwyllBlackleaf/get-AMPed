import React from "react";
import { useParams } from "react-router-dom";
import PageContent from "../PageContent";
import { getUserData } from "../../utils/API";

function UserPage() {
    // get user ID from URL's :id parameter, and pass it as prop to <PageContent>
    const { id } = useParams();
    const userData = getUserData(id);

    return (
        <main>
            <PageContent ownPage={false} userData={userData}></PageContent>
        </main>
    )
}

export default UserPage;