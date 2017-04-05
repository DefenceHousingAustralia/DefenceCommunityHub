  <?php
$HasRight = $right;
$HasCentral = $central;

if (!empty($right)) {
    $HasRight = 'has-right';
  }

if (!empty($central)) {
   $HasCentral = 'has-central';
  }
?>



<<?php print $layout_wrapper; print $layout_attributes; ?> class="content-layout bootstrap-threecol <?php print $classes; ?>">
  <?php if (isset($title_suffix['contextual_links'])): ?>
    <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>
  <?php if ($top): ?>
    <div class="row">
      <<?php print $top_wrapper; ?> class="top-col <?php print $top_classes; ?>">
        <?php print $top; ?>
      </<?php print $top_wrapper; ?>>
    </div>
  <?php endif; ?>
  <?php if ($left): ?>
    <div class="row">
      <<?php print $left_wrapper; ?> class="left-side <?php print $HasRight ?> <?php print $HasCentral ?>  <?php print $left_classes; ?>">
        <?php print $left; ?>
      </<?php print $left_wrapper; ?>>
 <?php endif; ?>

  <?php if ($central): ?> 
      <<?php print $central_wrapper; ?> class="central <?php print $central_classes; ?>">
        <?php print $central; ?>
      </<?php print $central_wrapper; ?>>
  <?php endif; ?>
  <?php if ( $right): ?>
      <<?php print $right_wrapper; ?> class="right-side <?php print $HasCentral ?> <?php print $right_classes; ?>">
        <?php print $right; ?>
      </<?php print $right_wrapper; ?>>
    </div> 
  <?php endif; ?>

  <?php if ($bottom): ?>
    <div class="row">
      <<?php print $bottom_wrapper; ?> class="col-sm-12 <?php print $bottom_classes; ?>">
        <?php print $bottom; ?>
      </<?php print $bottom_wrapper; ?>>
    </div>
  <?php endif; ?>
</<?php print $layout_wrapper ?>>


<!-- Needed to activate display suite support on forms -->
<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
