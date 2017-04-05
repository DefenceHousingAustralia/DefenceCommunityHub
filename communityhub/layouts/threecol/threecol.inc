<?php

// Plugin definition
$plugin = array(
  'title' => t('Three column'),
  'category' => t('Columns: 3'),
  'icon' => 'threecol.png',
  'theme' => 'panels_threecol',
  'css' => 'threecol.css.min',
  'regions' => array(
    'left' => t('Left side'),
   'middle' => t('Middle right'),
    'right' => t('Right side'),
  ),
);
