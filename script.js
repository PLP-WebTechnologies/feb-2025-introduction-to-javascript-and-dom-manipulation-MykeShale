// Change text dynamically
function changeText() {
    const para = document.getElementById('description');
    para.textContent = 'The text has been changed by JavaScript!';
  }
  
  // Modify CSS style dynamically
  function toggleStyle() {
    const title = document.getElementById('main-title');
    title.classList.toggle('highlight');
  }
  
  // Add a new element to the DOM
  function addElement() {
    const main = document.querySelector('main');
    if (!document.getElementById('new-paragraph')) {
      const newPara = document.createElement('p');
      newPara.textContent = 'This is a new paragraph added!';
      newPara.id = 'new-paragraph';
      main.appendChild(newPara);
    }
  }
  
  // Remove an element from the DOM
  function removeElement() {
    const element = document.getElementById('new-paragraph');
    if (element) {
      element.remove();
    }
  }
  