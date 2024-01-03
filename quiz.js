var question =["Are you satisfied with our service?","Do you find our website user friendly?","Would you recommend us to others?"];

var Answer = [["yes,no"] ,["yes,no"] ,["yes,no"]];
var Rightanswer = ["yes" , "yes" ,"no" ];
var counter = 0;

function load()
{
   for(var i=0;i<question.length ;i++)
   {
    
    document.getElementById("qh"+i).textContent=question[i];
   }
}
console.log(document.getElementById("qh1").textContent);

function getResult()
{
    var check=[];
    var ansli = document.getElementsByClassName("radio");
    for(var i =0; i<ansli.length; i++)
    {
        if(ansli[i].checked){
            check.push(ansli[i].value);
        }
    }
    if(Rightanswer.length != check.length)
    {
        alert("you check your answer");
        return;
    }
 
for(i=0;i<Rightanswer.length;i++)
{
    if(check[i]== Rightanswer[i])
    {
        counter++;
    }
}
alert(`Thank you for feedback: total =${counter}`);
}