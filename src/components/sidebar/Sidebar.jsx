import React from 'react'
import './SideBar.css';

import {  LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report, }  from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">DashBoard</h3>
                    <ul className="sideBarList">
                        <Link to='/' className='link'>
                            <li className="sideBarListItem active">
                                <LineStyle className='sideBarIcon'/>Home
                            </li>
                        </Link>

                        <li className="sideBarListItem">
                            <Timeline className='sideBarIcon'/>Analytics
                        </li>

                        <li className="sideBarListItem">
                            <TrendingUp className='sideBarIcon'/>Sales
                        </li>

                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Quick Menu</h3>
                    <ul className="sideBarList">
                        <Link to='/users' className='link'>
                            <li className="sideBarListItem ">
                                <PermIdentity className='sideBarIcon'/>Users
                            </li>
                        </Link>

                        <Link to='/products' className='link'>
                            <li className="sideBarListItem">
                                <Storefront className='sideBarIcon'/>Products
                            </li>
                        </Link>

                        <Link to='/transactions' className='link'>
                            <li className="sideBarListItem">
                                <AttachMoney className='sideBarIcon'/>Transactions
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Notifications</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem ">
                            <MailOutline className='sideBarIcon'/>Mail
                        </li>

                        <li className="sideBarListItem">
                            <DynamicFeed className='sideBarIcon'/>Feedback
                        </li>

                        <li className="sideBarListItem">
                            <ChatBubbleOutline className='sideBarIcon'/>Messages
                        </li>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Staff</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem ">
                            <WorkOutline className='sideBarIcon'/>Manage
                        </li>

                        <li className="sideBarListItem">
                            <Timeline className='sideBarIcon'/>Analytics
                        </li>

                        <li className="sideBarListItem">
                            <Report className='sideBarIcon'/>Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
