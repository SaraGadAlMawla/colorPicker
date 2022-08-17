//Needed DOM Elements

//Input
const seedColor = document.getElementById("seed");
const selectedMode = document.getElementById("mode-selection");

//output
const colorBlocks = document.querySelector(".color-blocks").children;
const colorHexes = document.querySelector(".color-hexes").children;
const len = colorHexes.length;

//trigger
const getColorsBtn = document.getElementById("getScheme");
getColorsBtn.addEventListener("click", getScheme);

//initial color loading
getScheme()

function getScheme(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.value.slice(1)}&mode=${selectedMode.value}&count=${len}`)
    .then(response => response.json())
    .then(schemeColors => {
        let i = 0;
        for(const block of colorBlocks){
            colorHexes[i].addEventListener("click", copyHex)
            block.style.backgroundColor = schemeColors.colors[i].hex.value;
            colorHexes[i].textContent = schemeColors.colors[i].hex.value;
            i++;
        }
    })
}

function copyHex(e){
    const hexEl = document.getElementById(e.currentTarget.id)
    navigator.clipboard.writeText(hexEl.textContent)
    alert("Hex color copied!")
}