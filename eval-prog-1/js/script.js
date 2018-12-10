
// EXERCICE 1 //
let div1 = document.createElement("form"); // create first screen //
div1.style.display = "inherit";
document.body.appendChild(div1);

let name = document.createElement("p"); // create first paragraph name //
div1.appendChild(name);

let labelName = document.createElement("label"); //create first label //
labelName.setAttribute("for", "name");
labelName.textContent = "Quel est votre prénom ? :";
name.appendChild(labelName);

let inputName = document.createElement("input"); // create first input //
inputName.type = "text";
inputName.name = "name";
name.appendChild(inputName);

let lastName = document.createElement("p"); // create second paragraph name //
div1.appendChild(lastName);
// CREATE SECOND SCREEN //
let lastNamelabel = document.createElement("label"); // create second label //
lastNamelabel.setAttribute("for", "Name");
lastNamelabel.textContent = "Quel est votre nom ? :";
lastName.appendChild(lastNamelabel);

let lastNameinput = document.createElement("input"); // create second input //
lastNameinput.type = "text";
lastNameinput.name = "LastName";
lastName.appendChild(lastNameinput);

let validation1 = document.createElement("p"); //  create first paragraph button //
div1.appendChild(validation1);

let buttonValidation1 = document.createElement("input"); //  create first button //
buttonValidation1.type = "button";
buttonValidation1.name = "buttonForm";
buttonValidation1.value = "OK";
validation1.appendChild(buttonValidation1);

let errorLabel = document.createElement("label"); // create error message //
errorLabel.style.display = "none"
errorLabel.textContent = "Veuillez remplir les champs avant de valider !";
div1.appendChild(errorLabel);


let div2 = document.createElement("div"); // create second screen //
div2.style.display = "none";
document.body.appendChild(div2);

let fullName = document.createElement("p"); // create second p name //
fullName.textContent = "Bonjour";
div2.appendChild(fullName);

buttonValidation1.addEventListener("click", changement1, false); // create event first btn //

function changement1() { // first function display & show label value full name //
  if (inputName.value.length !== 0 && lastNameinput.value.length !== 0) {
    div1.style.display = "none";
    div2.style.display = "inherit";
    let valueName = inputName.value
    let valueLastName = lastNameinput.value
    fullName.textContent = "Bonjour " + valueName + " " + valueLastName + " !";
  } else {
    errorLabel.style.display = "inherit";

  }
}
//EXERCICE 2//

let div3 = document.createElement("form"); // create third screen //
document.body.appendChild(div3);

let validation2 = document.createElement("p"); // create second paragraph button //
div2.appendChild(validation2);
let buttonValidation2 = document.createElement("input"); // create first button //
buttonValidation2.type = "button";
buttonValidation2.name = "buttonForm2";
buttonValidation2.value = "Hi !";
validation2.appendChild(buttonValidation2);

buttonValidation2.addEventListener("click", display, false); // second fuction display screen 1 & 2//
function display () {
  div3.style.display="inherit"; // show screen 3 //
  div1.style.display="none";
  div2.style.display="none";
}

let salary = document.createElement("p"); // create third paragraph "salary" //
div3.appendChild(salary);
div3.style.display="none";

let labelSalary = document.createElement("label"); //create thrid label //
labelSalary.setAttribute("for", "salary");
labelSalary.textContent = "Salaire mensuel brut";
salary.appendChild(labelSalary);

let inputSalary = document.createElement("input"); // create thrid input //
inputSalary.type = "number";
inputSalary.name = "salary";
salary.appendChild(inputSalary);

let labelSalary2 = document.createElement("label"); //create thrid-2 label //
labelSalary2.setAttribute("for", "salary");
labelSalary2.textContent = "Salaire mensuel net";
salary.appendChild(labelSalary2);

let inputSalary2 = document.createElement("input"); // create thrid-2 input //
inputSalary2.type = "number";
inputSalary2.name = "salary";
salary.appendChild(inputSalary2);

let labelSalary3 = document.createElement("label"); //create thrid-3 label //
labelSalary3.setAttribute("for", "salary");
labelSalary3.textContent = "Salaire annuel brut";
salary.appendChild(labelSalary3);

let inputSalary3 = document.createElement("input"); // create thrid-3 input //
inputSalary3.type = "number";
inputSalary3.name = "salary";
salary.appendChild(inputSalary3);

let labelSalary4 = document.createElement("label"); //create thrid-4 label //
labelSalary4.setAttribute("for", "salary");
labelSalary4.textContent = "Salaire annuel net";
salary.appendChild(labelSalary4);

let inputSalary4 = document.createElement("input"); // create thrid-4 input //
inputSalary4.type = "number";
inputSalary4.name = "salary";
salary.appendChild(inputSalary4);


//EXERCICE 3//

function copyArrayElts(array) { // fucntion copy array //
  let i = 0;
  let currentElt;
  let copyArray = [];
  while (i < array.length) {
    currentElt = array[i] + 1;
    i++;
    copyArray.push(currentElt);
  }
  return copyArray;
}

let array = [1,2.5,4,77,80,40,23,12,64785];

let allEltsArrayPlus1 = copyArrayElts(array);

function displayEltsArray(array) { // Function display //
  let i = 0;
  let currentElt;
  while (i < array.length) {
    currentElt = array[i];
    i++;
    console.log(currentElt);
  }
}

displayEltsArray(allEltsArrayPlus1); // call function //
