import React from 'react';
import './css/SideBar.css';

const SideBar = () => {
    return (
        <div className='main-body-sidebar-bg'>
            <ul className='ul-side-main'>
                <li className='li-side-main'>First section</li>
                <li className='li-side-main'>Second section</li>
                <li className='li-side-main'>Third section</li>
            </ul>
            <ul className='ul-side-main'>
                <li className='li-side-main'>First option</li>
                <li className='li-side-main'>Second option</li>
                <li className='li-side-main'>Third option</li>
            </ul>
            <ul className='ul-side-main'>
                <li className='li-side-main'>First title</li>
                <li className='li-side-main'>Second title</li>
                <li className='li-side-main'>Third title</li>
            </ul>
        </div>
    );
};

export default SideBar;