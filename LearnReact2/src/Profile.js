import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
    const {id} = useParams();
    return (
        <div>
            <h2>프로필 페이지</h2>
            <p>프로필 ID: {id}</p>
        </div>
    );
}

export default Profile;