import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Form = () => {
    const [formInputs, setFormInputs] = useState([]);

    const handleInputAdd = (type, label) => {
        setFormInputs([...formInputs, { type, label }]);
    };

    const handleSave = () => {
        // Ajoutez ici la logique pour enregistrer le formulaire
        console.log('Form inputs:', formInputs);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar onInputAdd={handleInputAdd} onSave={handleSave} />
            {/* Contenu principal */}
            <div className="p-4 w-1/2">
                <h2 className="text-lg font-semibold mb-4">Form Inputs</h2>
                {/* Affichage des inputs ajoutés */}
                {formInputs.map((input, index) => (
                    <div key={index} className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-1">{input.label}</label>
                        <input
                            type={input.type}
                            placeholder={`Enter ${input.label}`}
                            className="block w-full p-2 bg-gray-100 border border-gray-300 rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Form;
