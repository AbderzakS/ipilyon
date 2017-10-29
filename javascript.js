/*-----------*/

document.getElementById('the_header').onmouseover = function(){
    console.log('ok');
    var ele = document.getElementById('the_image');
    ele.style.backgroundImage='url(avatar_remi_2.png)';
    ele.style.height = '320px';
    ele.style.width = '160px';
};

document.getElementById('the_header').onmouseout = function(){

    var ele = document.getElementById('the_image');
    ele.style.backgroundImage='url(avatar_remi_1.jpg)';
    ele.style.height = '120px';
    ele.style.width = '120px';
};

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
var parenthese_ouvrante='';
var parenthese_fermante='';

// Gestion de l'appui sur une touche du clavier produisant un caractère
document.addEventListener("keypress", function (e) {
    switchToucheClavier(String.fromCharCode(e.charCode));
    if(e.keyCode == 13){calculatrice('egal');}
});


//GERE LE FONCTIONNEMENT AU CLAVIER
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

		case '(':
            parenthese();
        break;

		case ')':
            parenthese();
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
//EFFACE LE CALCUL EN COURS
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
function retourArriere()
{
    if(temp_calcul.charAt(temp_calcul.length-1)==' ')
    {
        console.log('ON NE FAIT RIEN');
    }
    else{
        //console.log('CHIFFRE');
        var position_1 = temp_chiffres_cliques.length-1;
        temp_chiffres_cliques = temp_chiffres_cliques.substr(0,position_1);
        var position_2 = temp_calcul.length-1;
        temp_calcul = temp_calcul.substr(0,position_2);
        temp_chiffre = parseFloat(temp_chiffres_cliques);
        document.getElementById("nombre").value = temp_calcul;
    }
}
function verifPasDejaPoints()
{
    console.log('verif point : temp_chiffres_cliques= '+temp_chiffres_cliques);
    if (/\./.test(temp_chiffres_cliques))
    {
        return false;//console.log('Il y a deja un point');
    }
    else
    {
        return true;//console.log('pas de point');
    }
}

function verifPointTempTotal()
{
    console.log('verif point : temp_total= '+temp_total);
    if (/\./.test(temp_total))
    {
        return true;//console.log('Il y a un point ds temp_total');
    }
    else
    {
        return false;//console.log('pas de point ds temp_total');
    }
}
function miseajourtemp(chiffre)
{
    var aexecuter=true;
    if(temp_chiffres_cliques=='' && chiffre=='.'){
        chiffre='0.';//console.log('chiffre = 0. a la place de .');
    }
    if(chiffre=='.' && verifPasDejaPoints()==false)
    {
        //On verifie si il y a deja un point on ne fait rien
        aexecuter=false;
    }
    if(aexecuter==true)
    {
        //garde en mémoire le calcul en type texte
        temp_calcul = temp_calcul+chiffre;
        //Increment la variable avec les chiffres saisies en type texte
        temp_chiffres_cliques = temp_chiffres_cliques+chiffre;
        //recupere ce qui est inscrit en texte et le transforme en entier
        temp_chiffre = parseFloat(temp_chiffres_cliques);
        document.getElementById("nombre").value = temp_calcul;
    }
}

function parenthese()
{
    //ajout possible tout le temps
    if(parenthese_ouvrante=='')
    {
        parenthese_ouvrante='(';
        //garde en mémoire le calcul en type texte
        temp_calcul = temp_calcul+'(';
        temp_chiffres_cliques = temp_chiffres_cliques+'(';
        temp_chiffre = parseFloat(temp_chiffres_cliques);
        document.getElementById("nombre").value = temp_calcul;
    }
    else if(parenthese_ouvrante=='(' && parenthese_fermante=='')
    {
        //ajout possible seulement si déjà parenthese ouvrante et un uniquement un chiffre avant
        parenthese_ouvrante='';
        //garde en mémoire le calcul en type texte
        temp_calcul = temp_calcul+')';
        temp_chiffres_cliques = temp_chiffres_cliques+')';
        temp_chiffre = parseFloat(temp_chiffres_cliques);
        document.getElementById("nombre").value = temp_calcul;
    }

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
    temp_chiffre=0;//temp_chiffre=0
    temp_calcul = temp_total.toString();
    temp_chiffres_cliques = temp_total.toString();
    temp_chiffre = temp_total;
    document.getElementById("nombre").value = temp_calcul;
    document.getElementById("resultat").innerHTML = '= '+temp_total;
    temp_total=0;
    temp_type = '';
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
//VERIFIE SI IL Y A DES ZERO A LA FIN DU CHIFFRE EN DECIMAL ON LES SUPPRIMME
function verifDecimalZero()
{
    temp_total=temp_total.toString();
    while(temp_total.charAt(temp_total.length -1)==0)
    {
        var n = temp_total.lastIndexOf('0');
        var res = temp_total.substr(0,n);
        temp_total=res;
    }
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
    //SI PAS DE VALEUR ON AUTORISE UNIQUEMENT LA NEGATION ET DES CHIFFRES
    if(temp_calcul!='' || operation=='soustraction')
    {
        switch (operation) {
            case 'addition':
                var caractere_operation = ' + ';
                operationCaractere(caractere_operation);
                temp_type = 'addition';
            break;

            case 'soustraction':
                var caractere_operation = ' - ';
                operationCaractere(caractere_operation);
                temp_type = 'soustraction';
            break;

            case 'multiplication':
                var caractere_operation = ' * ';
                operationCaractere(caractere_operation);
                temp_type = 'multiplication';
            break;

            case 'division':
                var caractere_operation = ' / ';
                operationCaractere(caractere_operation);
                temp_type = 'division';
            break;

            case 'egal':
                if(verifCaracteres()==0)
                {
                    check();
                    temp_type = 'egal';
                    historique();
                }
            break;
        }
    }
}

function operationCaractere(caractere_operation)
{
    if(verifCaracteres() != 0)
    {
        /* si il y a déja un caractere de type + - / * on retourne la position de celui ci et on le remplace*/
        la_position = verifCaracteres();
        new_temp_calcul='';
        new_temp_calcul = temp_calcul.substr(0,la_position-1);
        temp_calcul=new_temp_calcul+caractere_operation;
        new_temp_calcul='';
    }
    else{
        check();
        temp_calcul+=caractere_operation;
    }
    document.getElementById("nombre").value = temp_calcul;
    temp_chiffres_cliques='';
}

function check()
{
    if(temp_type!=''){
        switch (temp_type) {
            case 'addition':
                temp_total=temp_total+temp_chiffre;
                execOperation();
            break;

            case 'soustraction':
                temp_total=temp_total-temp_chiffre;
                execOperation();
            break;

            case 'multiplication':
                temp_total=eval(temp_total*temp_chiffre);
                execOperation();
            break;

            case 'division':
                temp_total=temp_total/temp_chiffre;
                execOperation();
            break;

            case 'egal':
            break;
        }
    }
    else{
        temp_total=temp_chiffre;
        temp_chiffre=0;
        document.getElementById("resultat").innerHTML = ' = '+temp_total;
    }
}

function execOperation()
{
    if(verifPointTempTotal()==true)
    {
        temp_total=temp_total.toFixed(8);
        verifDecimalZero();
    }
    document.getElementById("resultat").innerHTML = ' = '+temp_total;
    temp_chiffre=0;
}
