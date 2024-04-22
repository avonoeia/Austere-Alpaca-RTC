import React from 'react';
import MenuAppBar from '../components/MenuAppBar';
import Outlet from 'react-router-dom';

const Root = () => {
    return (
        <>
            <MenuAppBar />
            <Outlet />
        </>
    );
};

export default Root;