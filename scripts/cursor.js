/*This script is responsible for the interactivity of the mouse*/ 

const cursor = document.querySelector('.cursor'); //refer to css element 
const cursorRound = document.querySelector('.cursor-round');

// Obtains the x and y coordinates of the mouse on any point
const moveCursor = (e)=> {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    cursorRound.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', moveCursor) // Calls the moveCursor ability when mouse moves
