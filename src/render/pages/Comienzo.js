import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { GoTools } from 'react-icons/go';
import { Link } from 'react-router-dom';

function Comienzo() {

    // const notify = () => toast.success('Here is your toast.');
    return (
        <div className='app'>
            <GoTools fontSize={60} color='#f9ca24' />
            <h1>Comienza a construir tu app</h1>
            <Link to='/documentacion'  className='boton'>Documentacion</Link>
            <Toaster />
        </div>
    )
}

export default Comienzo