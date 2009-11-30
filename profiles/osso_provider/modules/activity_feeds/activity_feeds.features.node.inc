<?php

/**
 * Helper to implementation of hook_node_info().
 */
function _activity_feeds_node_info() {
  $items = array(
    'post_feed' => array(
      'name' => t('Post feed'),
      'module' => 'features',
      'description' => t('Aggregate user posts from other sites, relate to local users.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'has_body' => '1',
      'body_label' => t('Body'),
      'min_word_count' => '0',
      'help' => '',
    ),
  );
  return $items;
}
