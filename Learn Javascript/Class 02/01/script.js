
function main()
{
   var vetor = new Array(101);

   for(let count=0; count<vetor.length ; count++)
 vetor[count] = count * count;
 
   for(let count=0 ; count<vetor.length ; count++)
 document.write("Posição "+count+" : "+vetor[count]+"<br />");
 
}

/*
function main()
{
 var vetor = new Array(10,5,6);

 for(let count=0; count<vetor.length ; count++)
  vetor[count] = count;

 document.writeln(vetor);

}
*/