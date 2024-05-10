// ViewForm.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewForm() {
  const [formData, setFormData] = useState(null);
  const { id } = useParams(); // Récupérer l'ID du formulaire depuis l'URL

  useEffect(() => {
    fetch(`http://localhost:3000/forms/${id}`) // Faire une requête GET pour récupérer les données du formulaire
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setFormData(data); // Mettre à jour l'état avec les données du formulaire
      })
      .catch(error => {
        console.error('Error fetching form data:', error);
      });
  }, [id]); // Exécuter cet effet uniquement lorsque l'ID change

  if (!formData) {
    return <div>Loading...</div>; // Afficher un message de chargement si les données ne sont pas encore disponibles
  }

  return (
    <div>
      <h1>{formData.title}</h1> {/* Afficher le titre du formulaire */}
      {/* Afficher les autres champs du formulaire */}
    </div>
  );
}

export default ViewForm;
