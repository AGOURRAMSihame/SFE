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

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      <h1>{formData.title}</h1>
      <form>
        {formData.inputs.map((input, index) => (
          <div key={index}>
            <label>{input.label}</label>
            {input.type === 'textarea' ? (
              <textarea />
            ) : input.type === 'radio' ? (
              input.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input type="radio" name={`radio-${index}`} value={option} />
                  <label>{option}</label>
                </div>
              ))
            ) : input.type === 'checkbox' ? (
              input.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input type="checkbox" value={option} />
                  <label>{option}</label>
                </div>
              ))
            ) : (
              <input type={input.type} />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormById;
