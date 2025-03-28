// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get the menu button and mobile menu panel
  const menuButton = document.querySelector('nav button');
  const mobileMenu = document.querySelector('nav div.md\\:hidden');
  
  // Toggle mobile menu when the button is clicked
  menuButton.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    
    // Toggle the hidden class
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  });
});
