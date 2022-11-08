import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Shared/Header/Header'
import Footer from '../components/Shared/Footer/Footer'

const Main = () => {
    return (
        <div>
            <Header />
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;