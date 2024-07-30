// Importer les modules fs et readline
const fs = require('fs');
const readline = require('readline');

// Créer une interface pour lire les entrées utilisateur
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Demander le nom du fichier
rl.question('--- Veuillez saisir le nom du fichier : ', (fileName) => {
    // Demander le contenu du fichier
    rl.question('--- Veuillez saisir le contenu du fichier : ', (content) => {
        // Créer et écrire dans le fichier
        fs.writeFile(fileName, content, (err) => {
            if (err) {
                console.error('Erreur lors de la création du fichier:', err);
            } else {
                console.log('Fichier créé avec succès:', fileName);
            }
            // Fermer l'interface readline
            rl.close();
        });
    });
});
