// App.js
import React, { useState } from 'react';
import Sidebar from './sidebar';

const Form = () => {
    const [inputs, setInputs] = useState([]);

    const handleInputClick = (type, label) => {
        const newInput = {
            id: inputs.length + 1,
            type: type,
            label: label,
            value: ''
        };
        setInputs([...inputs, newInput]);
    };

    return (
        <div className="flex">
            <Sidebar handleInputClick={handleInputClick} />
            <div className="p-4">
                {inputs.map(input => (
                    <div key={input.id} className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">{input.label}</label>
                        <input
                            type={input.type}
                            placeholder={`Enter ${input.type}`}
                            className="block w-full p-2 bg-gray-100 border border-gray-300 rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Form;
