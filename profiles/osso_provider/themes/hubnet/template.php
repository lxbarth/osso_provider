<?php

function hubnet_preprocess_page (&$vars) {
  $vars['site_slogan'] = variable_get('site_slogan', '');
  if ($logged_in == FALSE && $vars['template_files']['0'] == 'page-user') {
    unset($vars['tabs']);
  }
}

function hubnet_preprocess_node (&$vars) {
  /* Remove duplicate node titles */
  $item = menu_get_object();
  if ($item == $vars["node"]) {
    unset($vars["title"]);
  }
}

/**
 * Add activity type classes.
 */
function hubnet_preprocess_views_view_fields(&$vars) {
  if ($type = $vars['row']->node_feeds_data_activity_feed_node_data_field_type_field_type_value) {
    if (isset($vars['fields']['field_type_value'])) {
      $vars['fields']['field_type_value']->class .= ' activity-type-'. strtolower($type);
    }
  }
}
