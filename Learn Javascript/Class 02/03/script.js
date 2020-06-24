function main()
{
 var alunos =  parseInt(prompt("Numero de alunos: "));
 var vetor = new Array(alunos);

 // Preenchendo o veotr
 for(let count=0; count<alunos; count++)
  vetor[count] = parseInt( prompt("Aluno " + (count+1) + ":") )
 

 // Somando todos os elementos
 var soma=0;
 for(let count in vetor)
  soma += vetor[count];

 var media = soma/alunos;
 document.write("Média da turma: " + media);
}