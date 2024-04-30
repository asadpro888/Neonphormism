let color = document.querySelector("#input1");
const sizeInput = document.getElementById('input2');
const radiusInput = document.getElementById('input3');
const shadowInput = document.getElementById('input4');
const blurInput = document.getElementById('input5');
let main = document.querySelector('body');
const childElement = document.querySelector('.child');

color.addEventListener('input', (e)=>{
    main.style.backgroundColor = e.target.value;
});

if (sizeInput && childElement) {
  sizeInput.addEventListener('change', (event) => {
    const value = parseFloat(event.target.value);
    if (value > 0) { 
      childElement.style.transform = `scale(${value})`;
    } 
  });
}

if (radiusInput && childElement) {
  radiusInput.addEventListener('change', (event) => {
    const value = parseFloat(event.target.value);
    if (value >= 0) {
      childElement.style.borderRadius = `${value}%`;
    }
  });
} 

if (shadowInput && childElement) {
    shadowInput.addEventListener('change', (event) => {
      const value = parseFloat(event.target.value);
      if (value >= 0) { 
        childElement.style.boxShadow = ` inset 0 0 ${value}px rgba(2, 2, 10, 0.5)`;
      }
    });
  }

  if (blurInput && childElement) {
    blurInput.addEventListener('change', (event) => {
      const value = parseFloat(event.target.value);
      if (value >= 0) { 
        childElement.style.filter = `blur(${value}px)`;
      }
    });
}