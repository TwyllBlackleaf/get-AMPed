import { checkPropTypes } from "prop-types";
import React, { useState } from "react";
import EditForm from "./EditForm";

function PageContent({ ownPage, userId }) {
    const [userData, setUserData] = useState({});
    const [editMode, setEditMode] = useState("");

    // function for GETting all UserLinks associated with User by userId and storing them in an array

    // function for PUTting (or POSTing?) new/edited UserLinks data by userId
    // double-check authentication before sending data

    // function for edit mode

    function EditButton(props) {
        return (
            <button onClick={() => setEditMode(props.forItem)}>Edit</button>
        )
    }

    function EditInput(props) {
        if (editMode.forItem === props.forItem) {
            return <EditForm forItem={props.forItem}></EditForm>
        } else {
            return <></>
        }
    }

    function EditDiv(props) {
        if (ownPage) {
            return (
                <div>
                    <EditButton forItem={props.forItem}></EditButton>
                    <EditInput forItem={props.forItem}></EditInput>
                </div>
                
            )
        } else {
            return (
                <></>
            )
        }
    }

    



    return (
        <>
            {/* Display user content: display name, photo, etc. */}
                {/* Display edit buttons if ownPage === true */}
                {/* Display copyable URL to link to page if ownPage === true */}
            <div>
                <h1 id="displayname">{userData.displayname}</h1>
                <EditDiv forItem="displayname"></EditDiv>
            </div>
            <div>
                <p id="aboutme">{userData.aboutme}</p>
                <EditDiv forItem="aboutme"></EditDiv>
            </div>
            
            {/* Iterate through the array of UserLinks */}
                {/* Display edit buttons if ownPage === true */}
            
        </>
    )
}

export default PageContent;