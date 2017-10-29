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
        <h2><a href="index.php">RETOUR AUX PROJETS</a></h2>
    	<hr class="hr_2">
    </article>
    <style>
      .deplacable{
        -moz-user-select: none;		/* Permet d'éviter la sélection*/
        -khtml-user-select: none;
        user-select: none;
      }

				.meteo{
					width : 300px;
					height : 300px;
					border-radius : 20px;
					border : solid 1px gray;
					padding : 10px;
				}

				.meteo img{
					width : 200px;
					margin-left : 50px;
				}

				.meteo div{
					width : 300px;
					text-align:center;
				}

				li {
					list-style-type : none;
					display : inline-block;
					width : 50px;
					padding : 5px;
					border : solid 2px lightgray;
				}
    </style>
    <div class="toto deplacable">DIV DEPLACEBLE</DIV>
        <select onchange="villeSelection(event)" id="villes">
          <option value="Sète"> Sète</option>
          <option value="Lyon"> Lyon</option>
          <option value="Montpellier"> Montpellier</option>
          <option value="Paris"> Paris</option>
        </select>
        <ul>
          <li onclick="selectionneJour(event,0)">Jour 1</li>
          <li onclick="selectionneJour(event,1)">Jour 2</li>
          <li onclick="selectionneJour(event,2)">Jour 3</li>
          <li onclick="selectionneJour(event,4)">Jour 4</li>
          <li onclick="selectionneJour(event,5)">Jour 5</li>
        </ul>
        <div id="resultat"></div>
  </body>

  <script>

  var selected = null;

  function selection(event){
    selected = this; //this egal event.target
  }

  function deplacer(event){
    if (selected!=null){
      selected.setAttribute("style","position:absolute;top:"+(event.clientY-200)+"px;left:"+event.clientX+"px");
    }
  }

  function relacher(event){
    selected = null;
  }

  var elements = document.getElementsByClassName("deplacable");
  document.addEventListener("mousemove",deplacer);
  document.addEventListener("mouseup",relacher);

  for (var i = 0;i<elements.length;i++){
    elements[i].addEventListener("mousedown",selection);
    elements[i].addEventListener("mouseup",relacher);
    elements[i].addEventListener("mousemove",deplacer);

    elements[i].setAttribute("style","position:absolute;");
  }


  var previsions = [];

  function selectionneJour(event,jour){
    var resultat = document.getElementById("resultat");
    resultat.innerHTML = previsionVersHTML(previsions[jour]);
  }

  function villeSelection(event){
    var nomVille = event.target.value;
    requeteVille(nomVille);

  }

  function requeteVille(nomVille){
    var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D"'+nomVille+'%2C%20France")&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

    var req = new XMLHttpRequest();
    req.open("GET",url,true);
    req.addEventListener("readystatechange",resultat);
    req.send();
  }



  function resultat(event){
    try{
      var objet = JSON.parse(event.target.response);
      previsions = objet.query.results.channel.item.forecast;
      traitePrevision(previsions);
    } catch (error){console.log(error +"Probleme de données");}
  }

  function traitePrevision(prevision){
    var resultat = document.getElementById("resultat");
    resultat.innerHTML = previsionVersHTML(prevision[0]);
  }

  function previsionVersHTML(prevision){
    var html = "<div class='meteo'>";
      html +="<img src='"+prevision.text+".png'/>";
      html +="<div class='date'>"+prevision.date+"</div>";
      html +="<div class='degresMin'>Max "+fToCelsius(prevision.high)+"°C</div>";
      html +="<div class='degresMax'>Min"+fToCelsius(prevision.low)+"°C</div>";
    html +="</div>";
    return html;
  }

  function fToCelsius(degres){
    return Math.round((degres-32)*5/9);
  }

  requeteVille("Sète");

  </script>
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
