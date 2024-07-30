// Importer le module fs
const fs = require('fs');

// Nom du fichier à créer
const fileName = 'Exo1.txt';

// Contenu du fichier
const content = 'Fichier texte créé avec le module fs (File System) de nodeJs !!!';

// Créer et écrire dans le fichier
fs.writeFile(fileName, content, (err) => {
  if (err) {
    console.error('Erreur lors de la création du fichier:', err);
  } else {
    console.log('Fichier créé avec succès:', fileName);
  }
});
