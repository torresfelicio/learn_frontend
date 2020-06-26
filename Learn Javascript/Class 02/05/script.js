function main()
{
 var vetor = [10, 2, 5, 4, 3, 1, 11, 99, 76, 54, 23, 29, 49, 86, 66, 55, 44, 33, 22, 88];
 var num = parseInt(document.getElementById("num").value);
 var resposta = document.getElementById('resposta');
 var vet = document.getElementById('vetor');

 vet.innerHTML = vetor;
 resposta.innerHTML = search(vetor,num)

}

function search (vetor, elemento)
{
 if(vetor.indexOf(elemento)>=0)
  return "Está no índice "+vetor.indexOf(elemento);
 else
  return "Não está no array"
}

/*
concat()         - Une (concatena) dois ou mais arrays e retorna uma cópia deles juntos
copyWithin() - Copiar elementos de um canto para outro dentro do array
entries()         - Retorna o par chave/vale de um array, para iterar o objeto
every()  - Checa se cada elemento de um array passa em um teste
fill()                 - Preenche elementos de um array com um valor estático
filter()         - Cria um novo array, a partir de outro, mas só os que passam num teste
find()         - Retorna o valor do primeiro elemento a passar num teste
findIndex() - Retorna o índice do primeiro elemento a passar num teste
forEach()         - Chama uma determinada função para cada elemento do array
from()         - Cria um array a partir de um objeto
includes() - Checa se em um array existe determinado elemento
indexOf() - Procura um elemento no array e retorna sua posição(índice)
isArray()         - Checa se o objeto é um array
join()         - Junta todos os elementos de um array numa só string
keys()         - Retorna um objeto de iteração de array, contendo as chaves do array original
lastIndexOf() - Busca um elemento em um array, a partir do fim, e retorna o índice de sua posição
map()         - Cria um novo array a partir do resultado de função que foi invocada para cada elemento do array
pop()         - Elimina o último elemento de um array
push()         - Insere um novo elemento ao fim do array e retorna o novo tamanho (length)
reduce()         - Reduz os valores de um array para um único valor (da esquerda pra direita)
reduceRight() - Reduz os valores de um array para um único valor, agora da direita pra esquerda
reverse()         - Inverte a ordem dos elementos de um array
shift()         - Remove o primeiro elemento do array e retorna esse elemento
slice()         - Seleciona uma parte do array e retorna na forma de um novo array
some()         - Checa se qualquer elemento de um array passa em um teste
sort()         - Ordena os elementos de um array
splice()         - Adiciona ou remove elementos de um array
toString() - Converte todo um array para uma string e retorna esse resultado
unshift()         - Adiciona um novo elemento no começo do array e retorna seu novo tamanho
valueOf() - Retorna o valor primitido de um array
*/