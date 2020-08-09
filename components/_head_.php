<!DOCTYPE html>
<html lang="pt-br">
<head>
	<!-- Declaração do título da página -->
	<title>Oneflix</title>

	<!-- Metatags -->
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<meta name="viewport" content="width=320, initial-scale=1, minimum-scale=1.0, maximum-scale=1.3, user-scalable=yes">
	<meta name="mobile-web-app-capable" content="yes">

	<!-- css files -->
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800;900&family=Raleway:wght@300;400&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="dist/css/libraries-min.css">
	<link rel="stylesheet" href="dist/css/style-min.css">

</head>

<?php
	$classBody = 'bodyInnerPage';
	if (($pagina == '') || ($pagina == 'home')) {
		$classBody = 'bodyHomePage';
	}
?>

<body class="<?php echo $classBody; ?>">
	<div class="u-maxRow">