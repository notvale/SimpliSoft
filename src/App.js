import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import TablePage from './pages/TablePage';
import Dashboard from './pages/Dashboard';
import { UserPage } from './pages/UserPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<LandingPage />}> </Route>
                <Route path='/LoginPage' element={<LoginPage />}> </Route>
                <Route path='/Dashboard' element={<Dashboard />}></Route>
                <Route path='/TablePage' element={<TablePage />}> </Route>
                <Route path='/UserPage' element={<UserPage />}> </Route>
                {/* <Route path ='/FormularioPage' element={<FormularioPage/>}> </Route> */}
                
            </Routes>
        </BrowserRouter>

    )
}

export default App;
