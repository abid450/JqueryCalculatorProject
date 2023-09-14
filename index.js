function insertNumber(number){
    var existingNumbers = $("#result").val();

    $("#result").val(existingNumbers + number)
}
function clearresult(){
    $("#result").val('')
}
function calculate(){
    var result = eval($("#result").val())
    $("#result").val(result)
}
function deleteNumber(){
    var presentvalue =  $("#result").val();
    if(presentvalue!=""){
        $("#result").val(presentvalue.slice(0,-1));
    }
}