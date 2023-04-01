import React from 'react';

const Header = () => {
    return (

        <div className='divHeader'>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" class="btn btn-outline-success ms-2">Tickets abiertos</button>
                <button type="button" class="btn btn-outline-warning ms-2">Tickets pausados</button>
                <button type="button" class="btn btn-outline-danger ms-2">Tickets cerrados</button>

            </div>
        </div>

    )
}

export {Header};
