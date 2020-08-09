<?php
	$http = 'http://';
	$urllocal = '/luma_titanium';
	$title = 'Titanium - VTEX';

#Functions
	if (!function_exists("echoCssFiles")) {
		function echoCssFiles($cssFiles)
		{
			global $output_styles;
			foreach ($cssFiles as $key => $val) {
				$output_styles = "<link href=\"$val\" type=\"text/css\" rel=\"stylesheet\" />";
				echo $output_styles;
			}
			return $output_styles;
		}
	}
	if (!function_exists("echoJssFiles")) {
		function echoJssFiles($jsFiles)
		{
			global $output_scripts;
			foreach ($jsFiles as $key => $val) {
				$output_scripts = "<script defer src=\"$val\"></script>";
				echo $output_scripts;
			}
			return $output_scripts;
		}
	}

#Retorna a página
	$URL = str_replace($urllocal, '', $_SERVER['REQUEST_URI']);
	$geturl = explode('/', $URL);
	$params = count($geturl);
	$pagina = explode('?', $geturl[1]);
	$pagina = reset($pagina);
	$fileSys = 'index.php';
	
# carrega os estilos/scripts
	$home = false;
	$url_site = $http . $_SERVER['SERVER_NAME'] . $urllocal;
	
	$css_libraries = 'arquivos/libraries-min.css';
	$css_allPages = 'arquivos/allPages-min.css';
	$js_jquery = 'https://code.jquery.com/jquery-3.3.1.min.js';
	$js_libraries = 'arquivos/libraries-min.js';
	$js_allPages = 'arquivos/allPages-min.js';
	$js_components = 'arquivos/components-min.js';
	
	$load_this_js = array($js_jquery, $js_libraries, $js_components, $js_allPages);
	$load_this_css = array($css_libraries, $css_allPages);
	
	switch ($pagina) {
		case '' :
		case 'home' :
			$file = 'page_home.php';
			$title_page = $title;
			$home = true;
			break;
			
		case 'componentslist':
			$file = 'page_components.php';
			$title_page = 'Components - '.$title;
			break;
		
		case 'institucional':
			$file = 'page_institucional.php';
			$title_page = 'Institucional - '.$title;
			break;
		
		case 'departamento':
			$file = 'page_departamento.php';
			$title_page = 'Categorias - '.$title;
			break;
		
		case 'contato':
			$file = 'page_contato.php';
			$title_page = 'Contato - '.$title;
			break;
		
		case 'termos-de-uso':
			$file = 'page_termosUso.php';
			$title_page = 'Termos de Uso - '.$title;
			break;
		
		case 'politica-de-privacidade':
			$file = 'page_politicaPrivacidade.php';
			$title_page = 'Política de Privacidade - '.$title;
			break;
		
		default :
			header("HTTP/1.0 404 Not Found");
			$file = 'erro404.php';
			$title_page = 'Página não encontrada - '.$title;
			break;
	}

#Monta a base url
	$base_page = '<base href="' . $url_site . '/" />';
	include($fileSys);

?>