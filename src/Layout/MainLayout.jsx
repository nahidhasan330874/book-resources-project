import React from 'react';
import NavBer from '../components/NavBer/NavBer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;