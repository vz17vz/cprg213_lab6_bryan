/****************** YOUR NAME: Bryan 000885037

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE
var modelName = "XYZ";
var duration = 0;
/*const model_button = document.querySelector("#model-button");
const duration_button = document.querySelector("#duration-button");*/




/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE
function recalculate(){
    // this has to inside the function
    let costLabel = document.getElementById("calculated-cost");


    if (modelName == "XYZ"){
        costLabel.innerHTML = duration * 100;
        
    }
    else if (modelName == 'CPRG'){
        costLabel.innerHTML = duration * 213;
    }
}
/*let costLabel = document.getElementById("calculated-cost");
var modelname = document.getElementById('model_text').innerHTML
var duration = document.getElementById('duration_text').innerHTML
function recalculate(){
    var XYZ=document.getElementById("XYZ");
    var CPRG=document.getElementById("CPRG");

    calculated-cost== modelname*duration;
    console.log(`The cost to book +$(model_text) for $(duration_text) days is $(costLabel)`);
}*/
/*
if model_button="XYZ"
let costLabel=100
else if model_button="CPRG"
let costLabel=213
console.log(`The cost to book +$(model_button) for $(duration_button) days is $(model_button*duration_button)`);*/




/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE
var modelButton = document.getElementById("model-button");


function changeModel() {

    let modelText = document.getElementById('model-text');

    if(modelName === 'XYZ') {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";

    //   switch_model.setAttribute('modelname', 'CPRG');

    //   let model_text=213


    } else {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";

    }
    recalculate();

}
modelButton.addEventListener("click", changeModel);


/*let switch_model = document.querySelector('switch_model');

switch_model.onclick = function changeModel() {
    let modelname = switch_model.getAttribute('modelname');
    if(modelname === 'XYZ') {
      switch_model.setAttribute('modelname', 'CPRG');
      let model_text=213
    } else {
      switch_model.setAttribute('modelname', 'XYZ');
      let model_text=100
    }
}*/






/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE

var duration_button = document.getElementById('duration-button');

function changeDuration(){

    var durationText = document.getElementById("duration-text");
    duration = parseInt(prompt("Enter duration: "));
    durationText.innerHTML = duration;
    recalculate();

}
duration_button.addEventListener("click", changeDuration);
/*function duration_button(){
    if (modelname==XYZ){
        model_text=100
    } else {
        model_text=213
    }
}*/

