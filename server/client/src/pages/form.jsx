import React, { useState } from 'react';
import Sidebar from './sidebar';

const Form = () => {
    const [formData, setFormData] = useState([]);

    const handleInputClick = (label, type) => {
        setFormData([...formData, { label, type, value: '' }]);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Data saved successfully');
                // Réinitialisez les valeurs après la soumission réussie si nécessaire
                setFormData([]);
            } else {
                console.error('Failed to save data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex">
            <Sidebar handleInputClick={handleInputClick} />
            <div className="p-4">
                {formData.map((input, index) => (
                    <div key={index} className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">{input.label}</label>
                        <input
                            type={input.type}
                            placeholder={`Enter ${input.label}`}
                            className="block w-full p-2 bg-gray-100 border border-gray-300 rounded"
                            value={input.value}
                            onChange={(e) => {
                                const updatedFormData = [...formData];
                                updatedFormData[index].value = e.target.value;
                                setFormData(updatedFormData);
                            }}
                        />
                    </div>
                ))}
                <button onClick={handleSubmit} className="py-2 px-4 bg-blue-500 text-white rounded mt-4">Submit</button>
            </div>
        </div>
    );
};

export default Form;
