const grade=75
if( grade > 90)
{
    console.log("Student got A Grade");   
}
else if(grade > 70 && grade < 90)
{
    console.log("Student got B Grade"); 
}
else if(grade > 50 && grade < 70)
{
    console.log("Student got C Grade"); 
}
else if(grade < 50)
{
    console.log("Student got F Grade"); 
}
else{
    console.log("Student get Failed");
    
}