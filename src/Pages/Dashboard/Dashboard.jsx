import React from 'react';
import './Dashboard.css';
import { DashboardCard } from '../../components/UI/DashboardCard'

const Dashboard = () => {
    return (
        <>
        <div className="dashboard_container">
            <div className="wrapper">
                <DashboardCard/>
            </div>
        </div>
            
        </>
    )
}

export default Dashboard
