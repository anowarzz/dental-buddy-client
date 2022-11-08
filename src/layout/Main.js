import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

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