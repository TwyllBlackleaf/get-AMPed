import React from "react";
import { useParams } from "react-router-dom";
import PageContent from "../PageContent";

function UserPage() {
    // get user ID from URL's :id parameter, and pass it as prop to <PageContent>
    const { id } = useParams();


    return (
        <main>
            <PageContent ownPage={false} userId={id}></PageContent>
        </main>
    )
}

export default UserPage;