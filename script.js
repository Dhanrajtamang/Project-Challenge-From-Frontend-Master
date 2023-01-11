const codeExampleSlider = document.querySelector("#code-example-slider");

codeExampleSlider.addEventListener("input", () => {
  document.querySelector("#code").style.tabSize = codeExampleSlider.value;
});


const raceExampleSlider = document.querySelector("#raceExampleSlider");

raceExampleSlider.addEventListener("input", () => {
  document.querySelector("#race").style.tabSize = raceExampleSlider.value;
})