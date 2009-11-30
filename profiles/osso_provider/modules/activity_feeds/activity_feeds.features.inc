<?php

/**
 * Implementation of hook_node_info().
 */
function activity_feeds_node_info() {
  module_load_include('inc', 'activity_feeds', 'activity_feeds.features.node');
  $args = func_get_args();
  return call_user_func_array('_activity_feeds_node_info', $args);
}
