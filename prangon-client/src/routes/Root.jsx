import React from 'react';
import MenuAppBar from '../components/MenuAppBar';
import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
import { Outlet } from "react-router-dom";

export async function loader() {
    return true; // Placeholder
}


const Root = () => {
    return (
        <>
            <MenuAppBar />
            <Container maxWidth="sm">
                <Outlet />
            </Container>
        </>
    );
};

export default Root;