import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer/Footer';

const Main = () => {
      return (
            <div className='w-[90%] mx-auto'>
            <Header></Header>
            
           <Outlet></Outlet>

           <Footer></Footer>

            </div>
      );
};

export default Main;