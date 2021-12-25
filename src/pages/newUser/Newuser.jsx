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

                <div className="newUserFormItem">
                    <label>Gender</label>
                    <div className="newUserGenderContainer">
                        <input type='Radio' name='gender' id='male' value='male'/>
                        <label htmlFor='male'>Male</label>

                        <input type='Radio' name='gender' id='female' value='female'/>
                        <label htmlFor='female'>Female</label>

                        <input type='Radio' name='gender' id='others' value='others'/>
                        <label htmlFor='other'>Other</label>
                    </div>
                </div>

                <div className="newUserFormItem">
                    <label>Active</label>
                    <select className='newUserSelect' name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
            </form>
            <button className='newUserButton'>Create</button>
        </div>
    )
}
