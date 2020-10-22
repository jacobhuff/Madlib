function verify() {
  let inputs = document.getElementsByClassName("madlib-input");
  console.log(inputs);
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == '') {
      return false;
    }
  }
  displayMadlib(inputs);
}

function displayMadlib(inputs) {
  let completedMadlib = "<span class='special-text'>" + inputs[0].value + "</span>" + " is having a " + "<span class='special-text'>" + inputs[1].value + "</span>" + " party! It's going to be at " + "<span class='special-text'>" + inputs[2].value + "</span>" + " on " + "<span class='special-text'>" + inputs[3].value + "</span>" +
    ". Please make sure to show up at " + "<span class='special-text'>" + inputs[4].value + "</span>" + ", or else you will be required to " +
    "<span class='special-text'>" + inputs[5].value + "</span>" + " a/an " + "<span class='special-text'>" + inputs[6].value + "</span>" + " with your " + "<span class='special-text'>" + inputs[7].value + "</span>" + ". Email " + "<span class='special-text'>" + inputs[0].value + "</span>" + " at " + "<span class='special-text'>" + inputs[8].value + "</span>" + " for more details."

  let madlibParagraph = document.getElementById('madlib-paragraph');
  madlibParagraph.innerHTML = completedMadlib;
  madlibParagraph.classList.remove('displayToggle');
  madlibParagraph.scrollIntoView();
}