const color1 = document.getElementById('color-1');
const color2 = document.getElementById('color-2');
// const changeBtn = document.getElementById('changeBtn');

// changeBtn.addEventListener('click', (event) => {
//     document.body.style.backgroundImage = 'linear-gradient(' + color1.value + ',' + color2.value + ')';
// });

color1.addEventListener('change', (event) => {
    console.log(event);
    document.body.style.backgroundImage = 'linear-gradient(' + color1.value + ',' + color2.value + ')';
});

color2.addEventListener('change', (event) => {
    document.body.style.backgroundImage = 'linear-gradient(' + color1.value + ',' + color2.value + ')';
})