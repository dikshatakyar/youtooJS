#STATEMENT VS EXPRESSION


#Expression : Any unit of code that can be evaluated to a value is an expression.
eg : 'hello world'; // A string literal
23;            // A numeric literal
true;          // Boolean value true
sum;           // Value of variable sum
this;          // A keyword that evaluates to the current object
// variables such as i and total
i = 10;
total = 0;


#Statement : A statement is an instruction to perform a specific action.
eg : var sum;
var average; //DeclarationStatement

// In the following example, var total is the statement and total = 0 is an assignment expression
var total = 0;

- Wherever JavaScript expects a statement, you can also write an expression. Such statements are referred to as expression statements. But the reverse does not hold. You cannot use a statement in the place of an expression.

Eg : 
var a = var b; // leads to an error cause you cannot use a statement in the place of an expression
var a = (b = 1); // since (b = 1) is an assignment expression and not a statement, this is a perfectly acceptable line of code.

