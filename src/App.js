import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UserPage from './pages/UserPage';
import RegistroPage from './pages/RegistroPage';
import TablePage from './pages/TablePage';
import { UserPageClient } from './pages/UserPageClient';
import Dashboard from './pages/Dashboard';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path ='/' element={<LandingPage/>}> </Route>
                <Route path ='/RegistroPage' element={<RegistroPage/>}> </Route>
                <Route path ='/UserPage' element={<UserPage/>}> </Route>
                <Route path ='/TablePage' element={<TablePage/>}> </Route>
                <Route path ='/Dashboard' element={<Dashboard/>}> </Route>
                <Route path ='/UserPageClient' element={<UserPageClient/>}> </Route>
                {/* <Route path ='/FormularioPage' element={<FormularioPage/>}> </Route> */}
            </Routes>
        </BrowserRouter>

    )
}

export default App;
