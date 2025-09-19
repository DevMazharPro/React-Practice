import React from 'react';

const Password = () => {
    const secretMessage = "React is awesome!";
    const [showMessage, setShowMessage] = React.useState(false);

    return (
        <div>
            <h1 className='text-red-500 font-extrabold text-4xl'>Secret message: {showMessage ? secretMessage : "*****"}</h1>
            <button className='bg-blue-200 p-3 rounded-2xl mt-2 text-xl font-bold' onClick={() => setShowMessage(!showMessage)}>
                {showMessage ? "Hide" : "Show"} message
            </button>
        </div>
    );
};

export default Password;