<?php /******************* BLIBLIOTECA DE FUNCOES ***********/

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

?>