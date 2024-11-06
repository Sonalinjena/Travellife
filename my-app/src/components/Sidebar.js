// Sidebar.js
import React from 'react';
//import './Sidebar.css'; // Add your styles here or use inline styling

function Sidebar() {
    const menuItems = [
        { name: 'Dashboard', icon: '🏠' },
        { name: 'User Management', icon: '👤' },
        { name: 'Attendance Management', icon: '📅' },
        { name: 'Leave Management', icon: '📝' },
        { name: 'Payroll Management', icon: '💰' },
        { name: 'Performance Management', icon: '📈' },
        { name: 'Recruitment Management', icon: '💼' },
        { name: 'Report Management', icon: '📊' },
        { name: 'Settings', icon: '⚙️' },
    ];

    return (
        <div className="sidebar">
            <div className="logo">Appticode HRMS</div>
            <ul className="menu-list">
                {menuItems.map((item, index) => (
                    <li key={index} className="menu-item">
                        <span className="icon">{item.icon}</span>
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
