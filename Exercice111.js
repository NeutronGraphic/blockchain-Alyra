var n;
var m;

n = prompt("Entrer un nombre entier entre 1 et 100");

console.log(n);

while(n<1 || n>100){
	console.log("Valeur incorrècte rentrez à nouveau une valeur ");
  n = prompt("Entrer un nombre entier entre 1 et 100");
}

	console.log(`la valeur que vous avez donné est: ${n}`);
m = prompt("Devine la réponse précédente")

while(m!=n){
	if(m<n){
    	console.log("Superieur");
      	if((m-n<=5)){
    			console.log("Très proche");	
    		}
    		else if((m-n<=10)){
    			console.log("Proche");
    		}
    }
   else if(m>n){
    	console.log("inferieur");
      if((m-n<=5)){
    			console.log("Très proche");	
    		}
    		else if((m-n<=10)){
    			console.log("Proche");
    		}
    }
	m = prompt("Mauvaise réponse, nouvelle essai");
	console.log("Valeur différente");	
}

console.log("Bonne réponse");