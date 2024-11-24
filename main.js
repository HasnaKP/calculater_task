// display in calculator screen
function displayContent(content){
    result.value +=content
}
// clear data
function clearCalcscreen(){
    result.value =""
}
// backspace
function removeCalc(){
    result.value = result.value.slice(0,-1)
}
// evaluation
function calcOut(){
    result.value = eval(result.value)
}