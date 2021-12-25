import React from 'react'
import './User.css';

import { PermIdentity, CalendarToday, MailOutline, LocationSearching, PhoneAndroid, Publish } from "@material-ui/icons";
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className='userTitle'>Edit User</h1>
                <Link to='/newUser'>
                    <button className='userAddBtn'>Create</button>
                </Link>
            </div>

            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img src='https://i.pinimg.com/originals/72/88/28/728828aaa2d524fb65537ad854129839.jpg' alt='' className='userShowImg'/>

                        <div className='userShowTopTitle'>
                            <span className='userShowUsername'>GHOST</span>
                            <span className='userShowUserTitle'>MVP</span>
                        </div>
                    </div>

                    <div className='userShowBottom'>
                        <span className='UserShowTitle'>Account Details</span>
                        <div className='userShowInfo'>
                            <PermIdentity className='userShowIcon'/>
                            <span className="userInfoTitle">GHOST99</span>
                        </div>

                        <div className='userShowInfo'>
                            <CalendarToday className='userShowIcon'/>
                            <span className="userInfoTitle">00/00/0000</span>
                        </div>

                        <span className='UserShowTitle'>Contact Details</span>

                        <div className='userShowInfo'>
                            <PhoneAndroid className='userShowIcon'/>
                            <span className="userInfoTitle">8888888888</span>
                        </div>

                        <div className='userShowInfo'>
                            <MailOutline className='userShowIcon'/>
                            <span className="userInfoTitle">GHOST@GHOST.in</span>
                        </div>

                        <div className='userShowInfo'>
                            <LocationSearching className='userShowIcon'/>
                            <span className="userInfoTitle">GHOST</span>
                        </div>
                    </div>

                </div>

                <div className='userUpdate'>
                    <span className="userUpdateTitle">Edit</span>
                    <form className='userUpdateForm'>
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type='text' placeholder='ghost' className='userUpdateInput' />
                            </div>

                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type='text' placeholder='Simon GHOST Riley' className='userUpdateInput' />
                            </div>

                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type='text' placeholder='Simon@Riley.in' className='userUpdateInput' />
                            </div>

                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type='text' placeholder='+000 000 000 000' className='userUpdateInput' />
                            </div>

                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type='text' placeholder='Cape Town' className='userUpdateInput' />
                            </div>

                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src='https://w0.peakpx.com/wallpaper/376/39/HD-wallpaper-ghost-lejendario-call-of-duty-mobile.jpg' alt='' className='userUpdateImg'/>
                                <label htmlFor='file'><Publish className='userUpdateIcon'/></label>
                                <input type='file' id='file' style={{display: 'none'}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
