function gradeCalculation(percentage){
let grade
switch (true){
    case percentage>=95:
    grade = "A+";
    break;

    case percentage>=75:
    grade = "A";
    break;

    case percentage>=50:
    grade = "B+"
    break;

    case percentage>=35:
    grade = "B"
    break;

    case percentage<35:
    grade = "c"
    break;

    default:
        console.log("Invalid Percentage Value");
}
return grade;
}
console.log(gradeCalculation(45));


