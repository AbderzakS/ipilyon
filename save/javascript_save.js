function unSwitch() //PERMET D'eviter un if elseif de type "===" c'est à dire vérifie aussi le type da la variable 
{
	var drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 4) :'));

	switch (drawer) {
		case 1:
			alert('Contient divers outils pour dessiner : du papier, des crayons, etc.');
		break;
	
		case 2:
			alert('Contient du matériel informatique : des câbles, des composants, etc.');
		break;
	
		case 3:
			alert('Ah ? Ce tiroir est fermé à clé ! Dommage !');
		break;
	
		case 4:
			alert('Contient des vêtements : des chemises, des pantalons, etc.');
		break;
	
		default:
			alert("Info du jour : le meuble ne contient que 4 tiroirs et, jusqu'à preuve du contraire, les tiroirs négatifs n'existent pas.");
	}
}

function unTernaire()
{
	var startMessage = 'Votre catégorie : ',
    endMessage,
    adult = confirm('Êtes-vous majeur ?');

	endMessage = adult ? '18+' : '-18';
	
	alert(startMessage + endMessage);
}
/*
Qu'est-ce qu'un contenu vrai ou faux ? => un nombre qui vaut zéro ou bien une chaîne de caractères vide.
*/

function uneConditionBoolSurAutresTypes()
{
	var conditionTest = 'Fonctionnera ? Fonctionnera pas ?';
	
	if (conditionTest) {// la variable conditionTest est convertie en booléen et son contenu est évalué comme étant vrai CAR FAUX si "" ou 0
		alert('Fonctionne !');
	} else {
		alert('Ne fonctionne pas !');
	}
}

function unOuParticulier() //l'opérateur OU va se charger de retourner la valeur de la première variable dont le contenu est évalué à true
{
	var conditionTest1 = '', conditionTest2 = 'Une chaîne de caractères';
	
	alert(conditionTest1 || conditionTest2);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function devinette()
{
    
    var valeur_precedente='';
    var add1='';
    var add2='';
    var add='';
    var valeur_precedente_type='';
    var valeuratrouver = getRandomIntInclusive(0, 100); 
    var valeur_du_client = prompt('Saisissez un chiffre entre 0 et 100 :');
    var i=0;
    while (valeuratrouver != valeur_du_client)
    {
        
        add1 = '100';
        add2 = '0';
        //alert('haut valeur_precedente'+valeur_precedente);
        //alert('haut valeur_du_client'+valeur_du_client);
        if(valeur_du_client<valeuratrouver){
            if(valeur_precedente!='' && valeur_precedente_type==1)
            {
                //alert(valeur_precedente+'petit');
                //alert(valeur_du_client+'petit');
                afficher = ''+valeur_du_client+' et '+valeur_precedente+' ';
            }
            else afficher = ''+valeur_du_client+' et '+add1+' ';
            valeur_precedente = valeur_du_client;
            valeur_du_client = prompt('trop petit, Resaisissez un chiffre entre '+afficher+':');
            valeur_precedente_type = 0;
        }
        else if(valeur_du_client>valeuratrouver){            
            if(valeur_precedente!='' && valeur_precedente_type==0)
            {
                //alert(valeur_precedente+'grand');
                //alert(valeur_du_client+'grand');
                afficher = ' '+valeur_precedente+' et '+valeur_du_client+' ';
            }
            else afficher = ''+add2+' et '+valeur_du_client+' ';  
            valeur_precedente = valeur_du_client;
            valeur_du_client = prompt('trop grand, Resaisissez un chiffre entre '+afficher+' :');
            valeur_precedente_type = 1;          
        }
        
        //alert('bas valeur_precedente'+valeur_precedente);
        //alert('bas valeur_du_client'+valeur_du_client);
        i++;
    }
    alert('Trouvé  en '+i+' fois! '+valeuratrouver);
}

function lesTableaux()
{
    var monTableau=[5,15,20];
    var monTableau2=monTableau;
    alert(monTableau2.pop());
    alert(monTableau);
    alert(monTableau2);
}

function sumTableaux()
{
    var tab=[5,10,15,20,30];
    var somme=0;
    for(i in tab)
    {
        somme+=tab[i];
    }
    alert(somme);
}
function multiTableaux()
{
    var tab = [[1,2,3],[4,5,6],[7,8,9]];
    
    alert(tab[0][0]);
}

function montantTTC(ht, tva)
{
    totaltva = (ht * tva)/100;
    return ht+totaltva;
}
//alert(montantTTC(50,20));

function tabInverse(tab)
{
    var new_tab = [];
    for(i=0;i<tab.length;i++)
    {
        new_tab.unshift(tab[i]);
    }
    return new_tab;                                 
}

function tableauExo()
{
    var tab = [1,2,3,4,5,6,7];
    var newtab;
    newtab = tabInverse(tab);
    alert(newtab);
}

/*-------------- CALCULATRICE --------------*/

var temp_calcul='';//calcul en cours en STRING
var temp_chiffres_cliques='';//chiffre clique en cours en STRING
var temp_chiffre=0;//chiffre clique en cours en ENTIER
var temp_total=0;//resultat calcul en ENTIER
var temp_type = '';
var temp_hist='';
var temp_hist_calcul='';
var new_temp_calcul='';
var la_position;

function switchToucheClavier(valeur)
{
    
	switch (valeur) {
            
		case '*':
            calculatrice('multiplication');
        break;
            
		case '+':
            calculatrice('addition');
        break;
            
		case '-':
            calculatrice('soustraction');
        break;            
            
		case '/':
            calculatrice('division');
        break;
            
		case '=onKeyPress="if (event.keyCode == 13) mafonction()" ':
            calculatrice('egal');
        break;    
            
		case '0':
            miseajourtemp('0');
        break;           
            
		case '1':
            miseajourtemp('1');
        break;           
            
		case '2':
            miseajourtemp('2');
        break;           
            
		case '3':
            miseajourtemp('3');
        break;           
            
		case '4':
            miseajourtemp('4');
        break;           
            
		case '5':
            miseajourtemp('5');
        break;           
            
		case '6':
            miseajourtemp('6');
        break;           
            
		case '7':
            miseajourtemp('7');
        break;           
            
		case '8':
            miseajourtemp('8');
        break;           
            
		case '9':
            miseajourtemp('9');
        break;
    }
}
// Gestion de l'appui sur une touche du clavier produisant un caractère
document.addEventListener("keypress", function (e) {
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
    switchToucheClavier(String.fromCharCode(e.charCode));    
    if(e.keyCode == 13){calculatrice('egal');}
}); 
function suppCalcul()
{
    temp_calcul='';
    temp_chiffres_cliques='';
    temp_chiffre=0;
    temp_total=0;
    temp_type = '';
    document.getElementById("nombre").value = '';
    document.getElementById("resultat").innerHTML = '=';
}
function verifPasDejaPoints()
{
    console.log('verif point : temp_chiffres_cliques= '+temp_chiffres_cliques);
    if (/\./.test(temp_chiffres_cliques))
    {
        return false;
        console.log('Il y a deja un point');
    }
    else
    {
        return true;
        console.log('pas de point');
    }
}

function verifPointTempTotal()
{
    console.log('verif point : temp_total= '+temp_total);
    if (/\./.test(temp_total))
    {
        return true;
        console.log('Il y a un point ds temp_total');
    }
    else
    {
        return false;
        console.log('pas de point ds temp_total');
    }
}
function miseajourtemp(chiffre)
{
    console.log('temp_chiffres_cliques miseajourtemp avt '+temp_chiffres_cliques);
    var aexecuter=true;
    if(temp_calcul=='' && chiffre=='.'){
        chiffre='0.';
        console.log('chiffre = 0. a la place de .');
    }    
    if(chiffre=='.' && verifPasDejaPoints()==false)
    {
        //On verifie si il y a deja un point on ne fait rien
        console.log('deja point');
        aexecuter=false;
    }
    if(aexecuter==true)
    {
        console.log('ok');
        //garde en mémoire le calcul en type texte
        temp_calcul = temp_calcul+chiffre;
        //Increment la variable avec les chiffres saisies en type texte
        temp_chiffres_cliques = temp_chiffres_cliques+chiffre;
        //recupere ce qui est inscrit en texte et le transforme en entier
        temp_chiffre = parseFloat(temp_chiffres_cliques);
        console.log(temp_calcul);
        console.log(temp_chiffres_cliques);
        console.log(temp_chiffre);
        document.getElementById("nombre").value = temp_calcul;
    }
    console.log('temp_chiffres_cliques miseajourtemp fin '+temp_chiffres_cliques);
}

function historique()
{        
    if(temp_calcul!="" && temp_calcul!=0)
    {
        if(temp_hist!=''){aff_br=' <br> '}else aff_br='';
        temp_hist=temp_hist+aff_br+temp_total;
        document.getElementById("historique").innerHTML = temp_hist;   
        temp_hist_calcul=temp_hist_calcul+aff_br+temp_calcul;
        document.getElementById("historique_calcul").innerHTML = temp_hist_calcul;
    }
    console.log('temp_chiffres_cliques avt'+temp_chiffres_cliques);
    temp_chiffre=0;//temp_chiffre=0
    //temp_calcul='';
    //miseajourtemp(temp_total);
    temp_calcul = temp_total;    
    temp_chiffres_cliques = temp_total;
    temp_chiffre = parseFloat(temp_total);
    document.getElementById("nombre").value = temp_calcul;
    console.log('temp_chiffres_cliques apres'+temp_chiffres_cliques);

    temp_total=0;
    temp_type = '';
    document.getElementById("resultat").innerHTML = '=';
    console.log('temp_chiffres_cliques fin'+temp_chiffres_cliques);
}

function resetAll()
{
    temp_calcul='';
    temp_chiffres_cliques='';
    temp_chiffre=0;
    temp_total=0;
    temp_type = '';
    temp_hist='';
    temp_hist_calcul='';
    new_temp_calcul='';
    la_position;
    document.getElementById("nombre").value = "0";
    document.getElementById("resultat").innerHTML = '=';
    document.getElementById("historique").innerHTML = '';
    document.getElementById("historique_calcul").innerHTML = '';
}

function verifDecimalZero()
{
    //temp_total='6.200000';
    console.log('verif tempt_total ='+temp_total);
    temp_total=temp_total.toString();
    console.log(typeof(temp_total));
    console.log(temp_total);
    var last = temp_total.charAt(temp_total.length -1);
    console.log('Ok 1='+last);
    var ne = temp_total.lastIndexOf('0');
    console.log('ne='+ne);
    var res = temp_total.substr(0,ne);      
    console.log(res);
    
    while(temp_total.charAt(temp_total.length -1)==0)
    {
        var n = temp_total.lastIndexOf('0');
        console.log(n);
        var res = temp_total.substr(0,n);        
        console.log(res);
        temp_total=res;
        console.log(temp_total);
    }
    
    console.log(temp_total);
    console.log('Ok 2');
    parseFloat(temp_total);
}
function verifCaracteres()
{
    var last;
    if(temp_calcul.length>=2){
        last = temp_calcul.charAt(temp_calcul.length -2);
        if(last == '+' || last == '-' || last == '*' || last == '/')
        {
            var position = temp_calcul.length-2;
            return position;
        }
        else return 0;

    }
    else return 0;
}

function calculatrice(operation)
{
    if(temp_calcul!='' || operation=='soustraction')
    {
        var x = document.forms["formCalc"]["nombre"].value;
        x=parseFloat(x);
        console.log('chiffre inscrit = '+x);
        operationSwith(operation,x);
        temp_en_cours=0;
    }
}


function operationSwith(valeur,chiffre)
{
	switch (valeur) {
		case 'addition':
            if(verifCaracteres() != 0)
            {
                /* si il y a déja un caractere on retourne la position de celui ci */
                la_position = verifCaracteres();
                new_temp_calcul='';
                new_temp_calcul = temp_calcul.substr(0,la_position-1);
                temp_calcul=new_temp_calcul+' + ';
                new_temp_calcul='';
            }
            else{
                check(chiffre);
                temp_calcul+=' + ';
            }
            document.getElementById("nombre").value = temp_calcul; 
            temp_type = 'addition';
            temp_chiffres_cliques='';            
		break;
	
		case 'soustraction':
            if(verifCaracteres() != 0)
            {
                /* si il y a déja un caractere on retourne la position de celui ci */
                la_position = verifCaracteres();
                new_temp_calcul='';
                new_temp_calcul = temp_calcul.substr(0,la_position-1);
                temp_calcul=new_temp_calcul+' - ';
                new_temp_calcul='';
            }
            else{
                check(chiffre);
                temp_calcul+=' - ';
            }
            document.getElementById("nombre").value = temp_calcul; 
            temp_type = 'soustraction';
            temp_chiffres_cliques='';
		break;
	
		case 'multiplication':
            if(verifCaracteres() != 0)
            {
                /* si il y a déja un caractere on retourne la position de celui ci */
                la_position = verifCaracteres();
                new_temp_calcul='';
                new_temp_calcul = temp_calcul.substr(0,la_position-1);
                temp_calcul=new_temp_calcul+' * ';
                new_temp_calcul='';
            }
            else{
                check(chiffre);
                temp_calcul+=' * ';
            }
            document.getElementById("nombre").value = temp_calcul; 
            temp_type = 'multiplication';
            temp_chiffres_cliques='';
		break;
	
		case 'division':
            if(verifCaracteres() != 0)
            {
                /* si il y a déja un caractere on retourne la position de celui ci */
                la_position = verifCaracteres();
                new_temp_calcul='';
                new_temp_calcul = temp_calcul.substr(0,la_position-1);
                temp_calcul=new_temp_calcul+' / ';
                new_temp_calcul='';
            }
            else{
                check(chiffre);
                temp_calcul+=' / ';
            }
            document.getElementById("nombre").value = temp_calcul; 
            temp_type = 'division';            
            temp_chiffres_cliques='';
		break;
            
		case 'egal':
            if(verifCaracteres()==0)
            {
                check(chiffre);
                temp_type = 'egal';
                historique();
                number1=4.8;
                number2=2.4;
                var resutat=number1+number2;
                result= resutat.toFixed(4); ;
                console.log(result);
                console.log(eval(number1+number2));
            }
		break;
	
		default:
			alert("Pas d'opération");
	}
}

function check(chiffre)
{
    console.log(temp_type);
    if(temp_type!=''){
        recup_type(chiffre);
    }
    else{          
        console.log('temp_total avt modif = '+temp_total);
        temp_total=temp_chiffre;
        console.log('temp_total apres modif = '+temp_total);
        temp_chiffre=0;
        document.getElementById("resultat").innerHTML = ' = '+temp_total;  
    }
}

function recup_type(chiffre)
{
    switch (temp_type) {
		case 'addition':
            console.log('temp_total avt modif = '+temp_total);
            console.log('temp_chiffre avt modif = '+temp_chiffre);
            temp_total=temp_total+temp_chiffre;
            if(verifPointTempTotal()==true)
            {
                temp_total=temp_total.toFixed(8);
                verifDecimalZero();                
            }
            console.log('temp_total apres modif = '+temp_total);
            document.getElementById("resultat").innerHTML = ' = '+temp_total;  
            temp_chiffre=0;
		break;
	
		case 'soustraction':
            console.log('temp_total avt modif = '+temp_total);
            console.log('temp_chiffre avt modif = '+temp_chiffre);
            temp_total=temp_total-temp_chiffre;
            if(verifPointTempTotal()==true)
            {
                temp_total=temp_total.toFixed(8);
                verifDecimalZero();                
            }
            console.log('temp_total apres modif = '+temp_total);
            document.getElementById("resultat").innerHTML = ' = '+temp_total;  
            temp_chiffre=0;
		break;
	
		case 'multiplication':
            console.log('temp_total avt modif = '+temp_total);
            console.log('temp_chiffre avt modif = '+temp_chiffre);
            temp_total=temp_total*temp_chiffre;
            if(verifPointTempTotal()==true)
            {
                temp_total=temp_total.toFixed(8);
                verifDecimalZero();                
            }
            console.log('temp_total apres modif = '+temp_total);
            document.getElementById("resultat").innerHTML = ' = '+temp_total;  
            temp_chiffre=0;
		break;
	
		case 'division':
            console.log('temp_total avt modif = '+temp_total);
            console.log('temp_chiffre avt modif = '+temp_chiffre);
            temp_total=temp_total/temp_chiffre;
            if(verifPointTempTotal()==true)
            {
                temp_total=temp_total.toFixed(8);
                verifDecimalZero();                
            }
            console.log('temp_total apres modif = '+temp_total);
            document.getElementById("resultat").innerHTML = ' = '+temp_total;  
            temp_chiffre=0;
		break;
            
		case 'egal':
		break;
	}
}