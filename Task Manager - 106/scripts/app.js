var nonImportantClass = "far fa-star";
var importantClass = "fas fa-star";
var isImportant = false;
var isFormVisible = true;

function toggleImportant(){
    console.log("icon clicked!");
   
    if(isImportant){
        //non important
        isImportant = false;
        $("#iImportant").removeClass(importantClass);
    $("#iImportant").addClass(nonImportantClass);
    }
    else{
        //important
    $("#iImportant").removeClass(nonImportantClass);
    $("#iImportant").addClass(importantClass);
    isImportant = true;
    }
}
function toggleForm(){
    if(isFormVisible){
        //hide
        isFormVisible = false;
        $("#form").hide();
    }
    else{
        //show
        isFormVisible = true;
        $("#form").show();
    }
}

function init(){
console.log("task manager");
// events
$("#iImportant").click(toggleImportant);
$("#btnToggleForm").click(toggleForm);

//load data

}

window.onload = init;