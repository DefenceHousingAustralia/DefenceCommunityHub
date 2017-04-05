<?php
/**
 * @file
 * Template for a 4 column panel layout.
 *
 * This template provides a four column panel display layout, with
 * each column roughly equal in width.
 */
?>
<div class="panels panel-4col clearfix" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  <div class="left-col-outer">
    <div class="row">
        <div class="left-col">
          <?php print $content['left']; ?>
        </div>
        <div class="midleft-col">
          <?php print $content['midleft']; ?>
        </div>
        <div class="midright-col">
          <?php print $content['midright']; ?>
        </div>
        <?php if (!empty($content['bottom'])): ?>
        <div class="bottom-col">
          <?php print $content['bottom']; ?>
        </div>
        <?php endif; ?>
    </div>
  </div>
  <div class="right-col-outer">
    <div class="row">
        <div class="right-col">
          <div class="inside">
            <?php print $content['right']; ?>
           </div>
        </div>
    </div>
  </div>
</div>