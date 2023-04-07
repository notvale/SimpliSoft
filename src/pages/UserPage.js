import React from 'react';

import { Navbar, Header, MenuLateral } from '../components'


const UserPage = () => {
    return (
        <div>

            <div>

                <Navbar />
                <br></br>
                <Header />
                
                <div className='container md-4'>
                    <div className='row'>
                        <div className='col-2'>
                            <MenuLateral />
                        </div>

                        <div className='col-10'>
                            <br></br>
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <h2>Acá debe ir una gráfica y un KPI</h2>
                            </div>


                        </div>
                    </div>
                </div>

            </div >
        </div>
    )
}

export default UserPage; 