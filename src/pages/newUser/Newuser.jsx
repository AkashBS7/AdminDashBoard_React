import React from 'react';
import './NewUser.css';

export default function Newuser() {
    return (
        <div className='newuser'>
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserFormItem">
                    <label>Username</label>
                    <input type='text' placeholder='username'/>
                </div>

                <div className="newUserFormItem">
                    <label>Full Name</label>
                    <input type='text' placeholder='Full Name'/>
                </div>

                <div className="newUserFormItem">
                    <label>Email</label>
                    <input type='email' placeholder='Email'/>
                </div>

                <div className="newUserFormItem">
                    <label>Password</label>
                    <input type='password' placeholder='Password'/>
                </div>

                <div className="newUserFormItem">
                    <label>Phone</label>
                    <input type='text' placeholder='Phone'/>
                </div>

                <div className="newUserFormItem">
                    <label>Address</label>
                    <input type='text' placeholder='Address'/>
                </div>
            </form>
        </div>
    )
}
