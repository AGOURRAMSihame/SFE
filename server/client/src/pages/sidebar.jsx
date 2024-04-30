import React from 'react';

const Sidebar = ({ handleInputClick, handleLabelClick }) => {
    return (
        <div className="bg-gray-200 p-4 h-screen flex flex-col">
            <h2 className="mb-4">Labels</h2>
            <button onClick={() => handleLabelClick('Label 1')} className="py-2 px-4 mb-2 bg-blue-500 text-white rounded">Label 1</button>
            <button onClick={() => handleLabelClick('Label 2')} className="py-2 px-4 mb-2 bg-blue-500 text-white rounded">Label 2</button>
            {/* Ajoutez d'autres boutons pour d'autres labels si nécessaire */}
            <h2 className="mt-4 mb-4">Input Types</h2>
            <button onClick={() => handleInputClick('text')} className="py-2 px-4 mb-2 bg-blue-500 text-white rounded">Text Input</button>
            <button onClick={() => handleInputClick('password')} className="py-2 px-4 mb-2 bg-blue-500 text-white rounded">Password Input</button>
            {/* Ajoutez d'autres boutons pour d'autres types d'inputs si nécessaire */}
        </div>
    );
};

export default Sidebar;
