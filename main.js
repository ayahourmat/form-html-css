const inputChaine = document.getElementById('inputChaine');
inputChaine.addEventListener('input', () => {
  // Retirer les espaces en début et fin de chaîne
  inputChaine.value = inputChaine.value.trim();
  // Remplacer tous les caractères qui ne sont pas des lettres par une chaîne vide
  inputChaine.value = inputChaine.value.replace(/[^a-zA-Z]/g, '');
});
var labelInput=document.getElementById('texte');
labelInput.addEventListener("input",()=>{
labelInput.value=labelInput.value.trim();
labelInput.value=labelInput.value.replace(/[^a-zA-Z]/g, '');
});

const inputEmail = document.getElementById('inputEmail');
inputEmail.addEventListener('input', () => {
  // Récupérer la valeur saisie dans l'input
  let email = inputEmail.value;
  // Formater l'adresse e-mail en minuscules
  email = email.toLowerCase();
  // Mettre à jour la valeur de l'input avec l'adresse e-mail formatée
  inputEmail.value = email;
});

const inputSite = document.getElementById('inputSite');
inputSite.addEventListener('input', () => {
  // Récupérer la valeur saisie dans l'input
  let url = inputSite.value;
  // Ajouter http:// si l'utilisateur n'a pas précisé le protocole
  if (!url.startsWith('www.') && !url.startsWith('www.')) {
    url = 'www.' + url;
  }
  // Mettre à jour la valeur de l'input avec l'URL formatée
  inputSite.value = url;
});






