// Fonction pour ouvrir le pop-up avec l'image et la description
function openPopup(imageSrc, title, description) {
    document.getElementById('popupImg').src = imageSrc;
    document.getElementById('popupDescription').innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
    `;
    document.getElementById('popup').style.display = 'flex';
  }
  
  // Fonction pour fermer le pop-up
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  