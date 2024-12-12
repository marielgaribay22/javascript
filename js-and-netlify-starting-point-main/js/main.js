
const fullMenu = document.getElementById('full-menu'); 
const showMenuButton = document.getElementById('show-menu'); 
const closeButton = document.getElementById('close-btn'); 


showMenuButton.addEventListener('click', function() {
  fullMenu.classList.add('show');
});


closeButton.addEventListener('click', function() {
  fullMenu.classList.remove('show');
});

