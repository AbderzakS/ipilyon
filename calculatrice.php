<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="author" content="Remi Foyard">
  <meta name="description" content="ipi">
  <meta name="keywords" content="ipi">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CV Rémi Foyard</title>
  <link media="screen" rel="stylesheet" type="text/css" href="style_2.css" >
  <link media="screen" rel="stylesheet" type="text/css" href="style.css" >
</head>
<body>
  <div id="the_header" class="top">
    <header >
        <div class="width_1000">
            <div id="the_image"></div><h1>R&Eacute;MI FOYARD</h1><div class="carre"></div><h2>WEBMASTER</h2>
        </div>
    </header>
    <div class="infos">
        <div class="width_1000">
            <p>06 00 00 00 00</p>
            <p>-</p>
            <p>REMI.FOYARD@GMAIL.COM</p>
            <p>-</p>
            <address>Mon adresse</address>
            <p>-</p>
            <p>30 ANS</p>
            <p>-</p>
            <p>VEHICUL&Eacute;</p>
        </div>
    </div>
</div>

    <div class="conteneur">
        <article>
        <hr class="hr_1">
        <div class="footer_sprites">
          <a href="https://www.facebook.com/" target="_blank"><div class="sprites sprite_facebook"></div></a>
          <a href="https://twitter.com/?lang=fr" target="_blank"><div class="sprites sprite_twitter"></div></a>
          <a href="https://fr.linkedin.com" target="_blank"><div class="sprites sprite_linkedin"></div></a>
        </div>
            <h2><a href="index.php">ACCUEIL</a> - <a href="bootstrap/index.html">PROJET BOOTSTRAP</a></h2>
        	<hr class="hr_2">
        </article>
        <article>
    <form name="formCalc" action="index.html" method="post" onsubmit="return calculatrice()">
    <hr class="hr_1">
        <h2>CALCULATRICE</h2>
      <hr class="hr_2"><!--
        --><div class="cadre"><input class="texte_a_saisir" readonly type="text" id="nombre" value="" /><!--
--><div class="retour_arriere" id="retour_arriere" onclick="retourArriere()"><div class="fermer_triangle"></div><div class='fermer'>x</div></div><!--
        --><p class="supp_calcul" id="supp_calcul" onclick="suppCalcul()"> CE </p><!--
        --><p class="resultats" id="resultat"> = </p><!--
        --><input class="egal" type="button" onclick="calculatrice('egal')" value="=" /><!--
        --><input class="colonne_1 chiffre" type="button" onclick="miseajourtemp('7')" value="7" /><!--
        --><input class="colonne_2 chiffre" type="button" onclick="miseajourtemp('8')" value="8" /><!--
        --><input class="colonne_3 chiffre" type="button" onclick="miseajourtemp('9')" value="9" /><!--
        --><input class="colonne_4"  type="button" onclick="calculatrice('addition')" value="+" /><!--
        --><input class="colonne_1 chiffre" type="button" onclick="miseajourtemp('4')" value="4" /><!--
        --><input class="colonne_2 chiffre" type="button" onclick="miseajourtemp('5')" value="5" /><!--
        --><input class="colonne_3 chiffre" type="button" onclick="miseajourtemp('6')" value="6" /><!--
        --><input class="colonne_4" type="button" onclick="calculatrice('soustraction')" value="-" /><!--
        --><input class="colonne_1 chiffre" type="button" onclick="miseajourtemp('1')" value="1" /><!--
        --><input class="colonne_2 chiffre" type="button" onclick="miseajourtemp('2')" value="2" /><!--
        --><input class="colonne_3 chiffre" type="button" onclick="miseajourtemp('3')" value="3" /><!--
        --><input class="colonne_4" type="button" onclick="calculatrice('multiplication')" value="x" /><!--
        --><input class="colonne_1 chiffre" type="button" onclick="miseajourtemp('.')" value="." /><!--
        --><input class="colonne_2 chiffre width_50" type="button" onclick="miseajourtemp('0')" value="0" /><!--
        <input class="colonne_3 chiffre" type="button" onclick="parenthese()" value="( )" />--><!--
        --><input class="colonne_4" type="button" onclick="calculatrice('division')" value="/" /><!--
--></div>
  <hr class="hr_1">
    <h2>HISTORIQUE</h2>
  <hr class="hr_2">
  <div class="histo"><div class="cadre_2"><div class="gauche"><h3>Calculs</h3><p id="historique_calcul"></p></div><!--
--><div class="droite"><h3>Résultats</h3><p id="historique"></p></div></div><!--
        --><input class="btn_reset" type="button" name="reset" onclick="resetAll()"  value="TOUT SUPPRIMER" /></div><!--
        --></form>
        </article>
    </div>
    <footer class="infos_2">
        <p>INTERETS</p>
        <p>:</p>
        <p>Informatique</p>
        <p>-</p>
        <p>Tennis</p>
        <p>-</p>
        <p>Parapente</p>
        <p>-</p>
        <p>Photographie</p>
    </footer><!--
    --><script src="javascript.js" defer></script><!--
    --></body>
    </html>
