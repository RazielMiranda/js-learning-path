var variavelGlobal = "ei sou acessivel em qualquer parte";

function Calculo(n1, n2){
	var variavelLocal = 98;
	return n1+n2 * variavelLocal;
}

console.log(Calculo(30,78));