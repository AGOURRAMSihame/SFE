import React, { useState } from 'react';

const Sidebar = ({ onInputAdd, onSave }) => {
    const [inputType, setInputType] = useState('');
    const [inputLabel, setInputLabel] = useState('');

    const handleInputTypeChange = (e) => {
        setInputType(e.target.value);
    };

    const handleLabelChange = (e) => {
        setInputLabel(e.target.value);
    };

    const handleAddClick = () => {
        if (inputType && inputLabel) {
            onInputAdd(inputType, inputLabel);
            setInputType('');
            setInputLabel('');
        }
    };

    const handleSaveClick = () => {
        onSave();
    };

    return (
        <div className="sidebar bg-gray-200 p-4 h-screen w-1/4 flex flex-col">
            <div className="mb-4">
                <label htmlFor="inputType" className="block text-sm font-semibold mb-1">Input Type</label>
                <select id="inputType" value={inputType} onChange={handleInputTypeChange} className="block w-full p-2 bg-gray-100 border border-gray-300 rounded">
                    <option value="">Select an input type</option>
                    <option value="text">Text</option>
                    <option value="email">Email</option>
                    <option value="number">Number</option>
                    <option value="date">Date</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="radio">Radio</option>
                    <option value="file">File</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="inputLabel" className="block text-sm font-semibold mb-1">Input Label</label>
                <input type="text" id="inputLabel" value={inputLabel} onChange={handleLabelChange} placeholder="Enter Label" className="block w-full p-2 bg-gray-100 border border-gray-300 rounded" />
            </div>
            <button onClick={handleAddClick} className="py-2 px-4 bg-blue-500 text-white rounded mb-4">Add Input</button>
            <button onClick={handleSaveClick} className="py-2 px-4 bg-blue-500 text-white rounded">Save Form</button>
        </div>
    );
};

export default Sidebar;
