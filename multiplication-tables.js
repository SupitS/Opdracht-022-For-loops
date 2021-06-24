// Opdracht 022: For loops 



console.log("Multiplication tables");

var table = 9;
var count = 10;

for (var i = 0; i < count; i++) {
    i++;
    console.log(i + " x " + table + " = " + table * i);
    --i;
}
