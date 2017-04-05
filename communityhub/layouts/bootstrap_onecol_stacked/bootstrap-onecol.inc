<?php

// Plugin definition
$plugin = array(
  'title' => t('Bootstrap one Column with top and bottom area'),
  'category' => t('Bootstrap'),
  'icon' => 'bootstrap_onecol.png',
  'theme' => 'bootstrap_onecol',
  'admin css' => '../panels-bootstrap-layouts-admin.css',
  'regions' => array(
    'top' => t('Top'),
    'middle-one' => t('Middle first'),
    'middle-two' => t('Middle second'),
    'bottom' => t('Bottom'),
  ),
);
