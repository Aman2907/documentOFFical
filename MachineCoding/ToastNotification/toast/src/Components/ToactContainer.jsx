import React, { useState } from "react";


export default function ToastContainer() {

    const [toast, setToast] = useState([]);

    const handleClose = (idToRemove) => {
        setToast(prev => prev.filter(toast => toast.id !== idToRemove));
    };
    //simple way
    // const handleClose = (idToRemove) => {
    //     const updatedToastList = toast.filter(toast => toast.id !== idToRemove);
    //     setToast(updatedToastList);
    // };



    const handleAdd = (message, type) => {
        const id = new Date().getTime()
        const newToast = [...toast, { id, message, type }];
        setToast(newToast)
    }

    return (
        <>
            <div className="container">
                <div className="toastContainer">
                    {toast.map(({ id, message, type }) => {
                        return (
                            <div key={id} className={`toast ${type}`}> {message} <span onClick={() => handleClose(id)}> X </span></div>
                        )
                    })}
                </div>
                <div className="btncontainer">
                    <button onClick={() => handleAdd('Success', 'success')}> Success Toast </button>
                    <button onClick={() => handleAdd('Warning', 'warning')}> Warning Toast </button>
                    <button onClick={() => handleAdd('Info', 'info')}> Info Toast </button>
                    <button onClick={() => handleAdd('Error', 'error')}> Error Toast </button>
                </div>
            </div>
        </>
    )
}