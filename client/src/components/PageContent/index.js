import { checkPropTypes } from "prop-types";
import React, { useEffect, useState } from "react";
import EditForm from "./EditForm";
// import { updateDisplayname } from '../../../utils/API';

 
function PageContent({ ownPage, userData }) {
    const [profileData, setProfileData] = useState(userData);
    const [editMode, setEditMode] = useState("");

    console.log('page userdata ==== ', userData);
    console.log('page display ===== ', userData.displayname);

    // function for PUTting (or POSTing?) new/edited User data by userId
    // double-check authentication before sending data

    // function for GETting all UserLinks associated with User by userId and storing them in an array

    // function for PUTting (or POSTing?) new/edited UserLinks data by userId
    // double-check authentication before sending data

    // function for edit mode

    // code for editing
    function EditButton(props) {
        return (
            <button onClick={() => setEditMode(props.forItem)}>Edit</button>
        )
    }

    function EditInput(props) {
        if (editMode === props.forItem) {
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
            return null;
        }
    }


    return (
        <>
            {/* Display user content: display name, photo, etc. */}
                {/* Display edit buttons if ownPage === true */}
                {/* Display copyable URL to link to page if ownPage === true */}
            <div>
                <h1 className="text-whitesmoke" id="displayname">{userData.displayname}</h1>
                <EditDiv forItem="displayname"></EditDiv>
            </div>
            <div>
                <p id="aboutme">{profileData.aboutme ? profileData.aboutme : "About Me"}</p>
                <EditDiv forItem="aboutme"></EditDiv>
            </div>

            {/* Iterate through the array of UserLinks */}
                {/* Display edit buttons if ownPage === true */}

        </>
    )
}

export default PageContent;


// // for future development === img upload
// import FileBase64 from 'react-file-base64';
// import { createItem, getItems } from '../../utils/functions';

    // // future development === images
    // const [item, setItem] = useState({ title: '', image: '' });
    // const [items, setItems] = useState([])
    // const onSubmitHandler = async (e) => {
    //     e.preventDefault();
    //     const result = await createItem(item);
    //     setItems([...items, result]);
    // }
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await getItems();
    //         console.log('fetch data;m', result);
    //         setItems(result);
    //     }
    //     fetchData()
    // }, [])
    /* future development === image
    {   
        <div className="container">
        <pre>{JSON.stringify(item, null, '\t')}</pre>
        <form action="" onSubmit={onSubmitHandler}>
            <input type="text" className="input-field"
                onChange={e => setItem({ ...item, title: e.target.value })}
            />
            <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => setItem({ ...item, image: base64 })}
            />
            <div className="right-align">
                <button className="btn">submit</button>
            </div>
        </form>
        {items?.map(item => (
            <div className="card" key={item._id}>
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" style={{ width: '100%', height: 300 }} src={item.image} alt={item.title} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{item.title}</span>
                </div>
            </div>
        ))}
    </div> 
    }
    */

