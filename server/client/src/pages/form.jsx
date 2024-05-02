// Form.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Form = () => {
    const [formInputs, setFormInputs] = useState([]);

    const handleInputAdd = (type, label, options) => {
        setFormInputs([...formInputs, { type, label, options }]);
    };

    const handleSave = async () => {
        try {
            const response = await fetch('http://localhost:3000/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputs: formInputs }),
            });

            if (!response.ok) {
                throw new Error('Une erreur est survenue lors de l\'enregistrement du formulaire.');
            }

            alert('Formulaire enregistré avec succès !');

        } catch (error) {
            console.error(error);
            alert('Une erreur est survenue lors de l\'enregistrement du formulaire.');
        }
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
                        {input.type === 'checkbox' ? (
                            input.options.map((option, optionIndex) => (
                                <div key={optionIndex} className="mb-2">
                                    <input type="checkbox" id={`checkbox-${index}-${optionIndex}`} className="mr-2" />
                                    <label htmlFor={`checkbox-${index}-${optionIndex}`}>{option}</label>
                                </div>
                            ))
                        ) : input.type === 'radio' ? (
                            input.options.map((option, optionIndex) => (
                                <div key={optionIndex} className="mb-2">
                                    <input type="radio" id={`radio-${index}-${optionIndex}`} name={`radio-${index}`} className="mr-2" />
                                    <label htmlFor={`radio-${index}-${optionIndex}`}>{option}</label>
                                </div>
                            ))
                        ) : (
                            <input
                                type={input.type}
                                placeholder={`Enter ${input.label}`}
                                className="block w-full p-2 bg-gray-100 border border-gray-300 rounded"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Form;
