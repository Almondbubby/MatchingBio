const table = new Map([
    ["UUU","Phenylalainine"],
    ["UUC","Phenylalainine"],
    ["UUA", "Leucine"],
    ["UUG", "Leucine"],
    ["CCU", "Leucine"],
    ["CUC", "Leucine"],
    ["CUA", "Leucine"],
    ["CUG", "Leucine"],

])

function getValue(){
    var a = document.getElementById("value").value
    alert(table.get(a));
}