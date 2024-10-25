import React, { useState } from "react";
import Home from "./home";
import OrderPage from "./orderPage";
import SingUp from "./singeUpPage";
import LogIn from "./logInPage";
function Main1() {
    const [currentPage, setPage]= useState('home')
    return(
        <div>
                    {currentPage === 'home' && <Home swichToOrderPage={()=> setPage('order')} swichToSingUpPage={()=> setPage('sing up')} swichToLogInPage={()=> setPage('log in')}/>}
                    {currentPage === 'order' && <OrderPage swichToHomePage={()=> setPage('home')}/>}
                    {currentPage === 'sing up'&& <SingUp/>}
                    {currentPage === 'log in' && <LogIn/>}
        </div>        
    )
}
export default Main1;;
