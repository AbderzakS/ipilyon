<?php
	if(preg_match("/127.0.0.1/i",$_SERVER["HTTP_HOST"]) )
	{
		$host = "127.0.0.1"; $user = "root"; $password = "root"; $base = "mariadb_ipi";
	}
	else
	{
		$host = "remifoyard.mysql.db"; $user = "remifoyard"; $password = "BDDremi06"; $base = "remifoyard";
	}
   $link = mysqli_connect ($host, $user, $password) or die("Impossible de se connecter au serveur de bases de données.");
   mysqli_select_db($link,$base) or die("Impossible de se connecter à la base de données.");    
?>

