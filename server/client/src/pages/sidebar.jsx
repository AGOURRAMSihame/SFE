// Sidebar.js
import React, { useState } from 'react';

const Sidebar = ({ handleInputClick }) => {
    const [label, setLabel] = useState('');

    const handleChange = (e) => {
        setLabel(e.target.value);
    };

    const handleClick = (type) => {
        handleInputClick(type, label);
        setLabel('');
    };

    return (
        <div className="bg-gray-200 p-4 h-screen flex flex-col">
            <input
                type="text"
                placeholder="Label"
                value={label}
                onChange={handleChange}
                className="py-2 px-4 mb-2 bg-white border border-gray-300 rounded"
            />
            <button onClick={() => handleClick('text')} className="py-2 px-4 mb-2 bg-blue-500 text-white rounded">Text Input</button>
            <button onClick={() => handleClick('password')} className="py-2 px-4 mb-2 bg-blue-500 text-white rounded">Password Input</button>
            <button onClick={() => handleClick('email')} className="py-2 px-4 mb-2 bg-blue-500 text-white rounded">Email Input</button>
            <button onClick={() => handleClick('number')} className="py-2 px-4 mb-2 bg-blue-500 text-white rounded">Number Input</button>
            <button onClick={() => handleClick('checkbox')} className="py-2 px-4 mb-2 bg-blue-500 text-white rounded">Checkbox</button>
            <button onClick={() => handleClick('radio')} className="py-2 px-4 mb-2 bg-blue-500 text-white rounded">Radio Button</button>
            <button onClick={() => handleClick('date')} className="py-2 px-4 mb-2 bg-blue-500 text-white rounded">Date Input</button>
            <button onClick={() => handleClick('file')} className="py-2 px-4 mb-2 bg-blue-500 text-white rounded">File Input</button>
        </div>
    );
};

export default Sidebar;
