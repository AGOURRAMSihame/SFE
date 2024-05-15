import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FormById() {
  const [formData, setFormData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchFormById = async () => {
      try {
        const response = await fetch(`http://localhost:3000/forms/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchFormById();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { title, inputs } = formData;
      const formDataToSubmit = {
        title,
        inputs: inputs.map(input => ({
          label: input.label,
          value: input.value
        }))
      };

      console.log('Data to submit:', formDataToSubmit);

      const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          formId: id,
          formData: formDataToSubmit.inputs
        })
      });

      if (response.ok) {
        alert('Vos informations ont été enregistrées avec succès.');
      } else {
        throw new Error('Failed to save data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
      alert('Une erreur est survenue lors de l\'enregistrement de vos informations.');
    }
  };

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{formData.title}</h1>
      <form onSubmit={handleSubmit}>
        {formData.inputs.map((input, index) => (
          <div key={index}>
            <label>{input.label}</label>
            {input.type === 'textarea' ? (
              <textarea value={input.value} onChange={(e) => input.value = e.target.value} />
            ) : input.type === 'radio' ? (
              input.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input type="radio" name={`radio-${index}`} value={option} checked={input.value === option} onChange={(e) => input.value = e.target.value} />
                  <label>{option}</label>
                </div>
              ))
            ) : input.type === 'checkbox' ? (
              input.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input type="checkbox" value={option} checked={input.value.includes(option)} onChange={(e) => {
                    if (e.target.checked) {
                      input.value.push(e.target.value);
                    } else {
                      input.value = input.value.filter(val => val !== e.target.value);
                    }
                  }} />
                  <label>{option}</label>
                </div>
              ))
            ) : (
              <input type={input.type} value={input.value} onChange={(e) => input.value = e.target.value} />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormById;
