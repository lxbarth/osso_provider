<?php

function hubnet_preprocess_page (&$vars) {
  $vars['site_slogan'] = variable_get('site_slogan', '');
  if ($logged_in == FALSE && $vars['template_files']['0'] == 'page-user') {
    unset($vars['tabs']);
  }
  //krumo($vars); 
}

function hubnet_preprocess_node (&$vars) {
  $item = menu_get_object();
  krumo($vars);
  if ($item == $vars["node"]) {
    unset($vars["title"]);
  }
}

