<?php

// Plugin definition
$plugin = array(
  'title' => t('Layout for frontpage'),
  'category' => t('Bootstrap'),
  'icon' => 'frontpage.png',
  'theme' => 'frontpage',
  'css' => 'frontpage.css.min',
  'regions' => array(
    'top' => t('Top'),
    'middle-one' => t('Middle first'),
    'middle-two' => t('Middle second'),
    'bottom' => t('Bottom'),
  ),
);
