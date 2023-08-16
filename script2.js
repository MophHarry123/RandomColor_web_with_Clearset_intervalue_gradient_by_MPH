// const generateGradientColorCode = () => {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     return `linear-gradient(to right,rgb(${blue},${red},${green}),rgb(${green},${blue},${red}))`;
//   };
  
//   setInterval(() => {
//     document.body.style.backgroundImage = generateGradientColorCode(); // Call the function
//   }, 1250);

//   const generateGradientColorCode2 = () => {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     return `linear-gradient(to right,rgb(${blue},${red},${green}),rgb(${green},${blue},${red}))`;
//   };
  
//   const gradientInterVal = setInterval(() => {
//     document.body.style.backgroundImage = generateGradientColorCode(); // Call the function
//   }, 1250);

//   function Stop() {
//   clearInterval(gradientInterVal);  
//   }

const generateGradientColorCode = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `linear-gradient(to right,rgb(${blue},${red},${green}),rgb(${green},${blue},${red}))`;
};

const gradientInterval = setInterval(() => {
  document.body.style.backgroundImage = generateGradientColorCode();
}, 1250);

function Stop() {
  clearInterval(gradientInterval);
}