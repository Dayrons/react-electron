import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { SiElectron } from 'react-icons/si';
import './App.scss'




function App() {
    const notify = () => toast.success('Here is your toast.');

    return (

        <div>
            <SiElectron/>
            <button onClick={notify}>Make me a toast</button>
            <Toaster />
        </div>

    )
}

export default App
