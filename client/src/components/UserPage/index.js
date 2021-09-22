import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageContent from "../PageContent";
import { getUserData } from "../../utils/API";

function UserPage() {
    // get user ID from URL's :id parameter, and pass it as prop to <PageContent>
    const { id } = useParams();

    const [userData, setUserData] = useState({});
    const userDataLength = Object.keys(userData).length;

    useEffect(() => {
        const getSingleUserData = async () => {
            try {
                const response = await getUserData(id);


                if (!response.ok) {
                    throw new Error("something went wrong!");
                }

                const user = await response.json();
                console.log(user);
                setUserData(user);
                
            } catch (err) {
                console.log(err);
            }
        }

        getSingleUserData();
    }, [userDataLength]);


    

    return (
        <main>
            {userData.username}
            <PageContent ownPage={false} userData={userData}></PageContent>
        </main>
    )
}

export default UserPage;