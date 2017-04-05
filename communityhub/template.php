<?php
/**
 * @file
 * The primary PHP file for this theme.
 */

function communityhub_js_alter(&$js) {
   $js['misc/jquery.js']['data'] = 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js';
}

/**
* hook_form_searchblock_alter
*/
function communityhub_form_search_block_form_alter(&$form, &$form_state, $form_id) {
    $form['search_block_form']['#title'] = t('Search'); // Change the text on the label element
    $form['search_block_form']['#title_display'] = 'invisible'; // Toggle label visibilty
    $form['search_block_form']['#size'] = 40;  // define size of the textfield
    $form['search_block_form']['#default_value'] = t('Search'); // Set a default value for the textfield
    $form['actions']['submit']['#value'] = t('GO!'); // Change the text on the submit button
    $form['actions']['submit'] = array('#type' => 'image_button', '#src' => base_path() . path_to_theme() . '/images/search-button.png');

    // Add extra attributes to the text box
    $form['search_block_form']['#attributes']['onblur'] = "if (this.value == '') {this.value = 'Search';}";
    $form['search_block_form']['#attributes']['onfocus'] = "if (this.value == 'Search') {this.value = '';}";
    // Prevent user from searching the default text
    $form['#attributes']['onsubmit'] = "if(this.search_block_form.value=='Search'){ alert('Please enter a search'); return false; }";

    // Alternative (HTML5) placeholder attribute instead of using the javascript
    $form['search_block_form']['#attributes']['placeholder'] = t('Search');
} 


function communityhub_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'search_block_form') {
    unset($form['search_block_form']['#title']);

    $form['search_block_form']['#title_display'] = 'invisible';
    $form_default = t('Search this site');
    $form['search_block_form']['#default_value'] = $form_default;
    $form['actions']['submit'] = array('#type' => 'image_button', '#src' => base_path() . path_to_theme() . '/images/search-button.png');

    $form['search_block_form']['#attributes'] = array('onblur' => "if (this.value == '') {this.value = '{$form_default}';}", 'onfocus' => "if (this.value == '{$form_default}') {this.value = '';}" );
  }
}

function communityhub_preprocess_page(&$variables) {
  if (arg(1) == '92') {
     // Set the default value for the form in the header region.
    $variables['page']['header']['search_form']['search_block_form']['#attributes']['placeholder'] = t('abc');

     // Set the default value for the form in the content region.
    $variables['page']['content']['search_form']['search_block_form']['#attributes']['placeholder'] = t('def');
  }
}
