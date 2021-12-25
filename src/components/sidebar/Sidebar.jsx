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


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">DashBoard</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem active">
                            <LineStyle className='sideBarIcon'/>Home
                        </li>

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
                        <li className="sideBarListItem ">
                            <PermIdentity />Users
                        </li>

                        <li className="sideBarListItem">
                            <Storefront />Products
                        </li>

                        <li className="sideBarListItem">
                            <AttachMoney />Transactions
                        </li>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Notifications</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem ">
                            <MailOutline />Mail
                        </li>

                        <li className="sideBarListItem">
                            <DynamicFeed />Feedback
                        </li>

                        <li className="sideBarListItem">
                            <ChatBubbleOutline />Messages
                        </li>
                    </ul>
                </div>

                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Staff</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem ">
                            <WorkOutline />Manage
                        </li>

                        <li className="sideBarListItem">
                            <Timeline />Analytics
                        </li>

                        <li className="sideBarListItem">
                            <Report />Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
