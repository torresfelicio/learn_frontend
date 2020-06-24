var tentativa=0;
var numero = Math.floor( (1 + 100*Math.random()) );

function main()
{
	var tent = document.getElementById('tentativas');
	tentativa++;

	tent.innerHTML = tentativa;
}