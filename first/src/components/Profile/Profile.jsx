import React from 'react';
import profile from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div>
            <div>
                < img src="http://poplanete.com/wp-content/uploads/2017/01/Las-Teresitas.jpg"/>

                <div>
                    ava + description
                </div>
                <MyPosts/>
            </div>
        </div>

    )
}

export default Profile