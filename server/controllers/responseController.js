const Response = require('../models/Response');
const Form = require('../models/form');

exports.submitResponse = async (req, res) => {
    try {
        const { formId, formData } = req.body;

        // Validation des données d'entrée
        if (!formId || !formData) {
            return res.status(400).json({ message: 'Données d\'entrée manquantes.' });
        }

        // Recherche du formulaire correspondant à l'ID
        const form = await Form.findById(formId);
        if (!form) {
            return res.status(404).json({ message: 'Formulaire non trouvé.' });
        }

        // Création de l'objet de réponse
        const response = new Response({
            formId: formId,
            formData: formData.map(item => {
                const input = form.inputs.find(input => input.label === item.label);
                return {
                    label: item.label,
                    value: item.value,
                    type: input ? input.type : 'unknown' // Si le type n'est pas trouvé, utilisez 'unknown'
                };
            })
        });

        // Sauvegarde de la réponse dans la base de données
        await response.save();

        return res.status(201).json({ message: 'Réponse enregistrée avec succès.' });
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement de la réponse :', error);
        return res.status(500).json({ message: 'Erreur lors de l\'enregistrement de la réponse.' });
    }
};
