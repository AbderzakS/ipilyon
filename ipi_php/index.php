<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="author" content="Remi Foyard">
  <meta name="description" content="Tp de IPI Lyon en PHP">
  <meta name="keywords" content="ipi,lyon,php,tp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TP PHP - Rémi Foyard</title>
</head>
<body>
  <h1>TP PHP</h1><br>
  <?php
  $date_actu=date('Y-m-d');
  $annee = date('Y');
  $mois = date('m');
  $jour = date('d');
  $date_jour = $annee.$mois.$jour;
  $annee_naissance=20170816;
  $age=$date_jour-$annee_naissance;
  //echo "mon age est ".$age;
  //echo strtotime("10 September 2000");

  function age($date) {
    $age = date('Y') - date('Y', strtotime($date));
    if (date('md') < date('md', strtotime($date))) {
      return $age - 1;
    }
    return $age;
  }
  // $age = age("2017-08-08 22:00:00");

  $tab0=array("tintin","Haddock","Milou");
  var_dump($tab0);
  echo "<br>";
$tab=array("Premier"=> 1,"Second"=> 2);
var_dump($tab);
echo "<br>";
$tab2[0]="Salut 1";
$tab2[1]="Salut 2";
var_dump($tab2);

echo "<br><br>";
foreach ($tab0 as $value)
{
  echo "Valeur : ".$value."<br>";
}
echo "<br><br>";
echo "<table border='1' ><tbody><tr><td style='padding:5px;'>Clé</td><td style='padding:5px;'>Valeur</td>";
foreach ($tab as $key => $value)
{
  echo "<tr><td style='padding:5px;'>".$key."</td><td style='padding:5px;'>".$value."</td></tr><br>";
}
echo "</tbody></table>";
echo "<br><br>";

if(!empty($_POST))
{
  echo $_POST['nom'];
  echo "données traités !";
}
else {
  ?>
  <form method="POST" action="">
    <input type="text" name="nom" value="" />
    <input type="text" name="arg" value="" />
    <input type="submit" value="Valider" />
  </form>  
    <?php
}
//TABLE DE MULTIPLICATION DE 7
//On initialise la valeur de la table de multiplication à 7
$tablede7 = 7;
//on affiche le début du tableau avant la boucle
echo "<table border='1' style='border:1px solid darkblue; width:200px; text-align:center;'><tr><td colspan='2'>Table de 7</td></tr>";
//on fait un for pour multiplier la valeur 7 de 1 à 10
for($i=1;$i<=10;$i++)
{
  //on multiplie la valeur 7 par la variable $i de 1 à 10
  $calcul = $i * $tablede7;
  //On affiche le calcul et son résultat dans une ligne du tableau
  echo "<tr><td style='width:50%;text-align:center;'>".$i." * ".$tablede7."</td><td style='width:50%;text-align:center;'>".$calcul."</td></tr>";
}
//On affiche la fin du tableau
echo "</table>";

//On passe à la ligne
echo "<br><br>";

//TABLE DE MULTIPLICATION DE 1 à 10

echo "<table border='1' style='border:1px solid darkblue; width:1000px; text-align:center;'><tr><td colspan='20'>Tables de multiplication de 1 à 10</td></tr><tr><td colspan='2'>1</td><td colspan='2'>2</td><td colspan='2'>3</td><td colspan='2'>4</td><td colspan='2'>5</td><td colspan='2'>6</td><td colspan='2'>7</td><td colspan='2'>8</td><td colspan='2'>9</td><td colspan='2'>10</td></tr>";
//on fait une première boucle for de 1 à 10 qui correspondra à la valeur de multiplication
for($j=1;$j<=10;$j++)
{
  //on affiche la première ligne
  echo "<tr>";
  //on fait un deuxieme for qui traitera pour chaque colonne l'affichage des resultats et calculs des tables de 1 à 10
  for($i=1;$i<=10;$i++)
  {
    //on calcul la valeur de multiplication par la valeur à multiplier
    $calcul = $i * $j;
    //on affiche le calcul t les resultats
    echo "<td>".$j." * ".$i."</td><td>".$calcul."</td>";
  }
  //on affiche la fin de la ligne
  echo "</tr>";
}
//on ferme le tableau
echo "</table>";
echo "<br><br>";

/*
echo "TABLE BONUS CORRESPONDANT AUX TABLES A APPRENDRE EN TANT QUE CROUPIER";

//on créé une fonction qui récupère :
//  - la position $i de la boucle
//  - la valeur $valeur de la table de mutltiplication à afficher
//  - la variable $table qui récupère tout et sera affiché à la fin

function ajoutValeurTable($i,$valeur,$table){
  $calcul = $i * $valeur;
  $table.= "<td>".$i." * ".$valeur."</td><td>".$calcul."</td>";
  return $table;
}
$table="";
$i=1;
for($i=1;$i<=20;$i++)
{
  $table.= "<tr>";

  $table=ajoutValeurTable($i,'5',$table);
  $table=ajoutValeurTable($i,'8',$table);
  $table=ajoutValeurTable($i,'11',$table);
  $table=ajoutValeurTable($i,'17',$table);
  $table=ajoutValeurTable($i,'35',$table);

  $table.= "</tr>";

}
echo "<table border='1' style='border:1px solid darkblue; width:1000px; text-align:center;'><tr><td colspan='10'>Tables de multiplication de croupier :5, 8, 11, 17, 35</td></tr>";
echo $table;
echo "</table>";
*/
  /*FAIRE
  afficher table de multplication de 7
  idem de 1 à 10
  LISIBLE
  */
  //var_dump($var);
  //COMMENTAIRE
  ?>
</body>
</html>
