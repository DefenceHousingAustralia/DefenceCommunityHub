  <div class="panel-2col-stacked clearfix <?php print $classes ?>" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  <?php if (!empty($content['top'])): ?>
  <div class="top-col">
  <div class="inside">
    <?php print $content['top']; ?>
    </div>
  </div>
  <?php endif; ?>



    <div class="left-col">
    <?php print $content['left']; ?>
    </div>
    <div class="right-col">
    <?php print $content['right']; ?>
    </div>


  <?php if (!empty($content['bottom'])): ?>
  <div class="bottom-col">
  <div class="inside">
    <?php print $content['bottom']; ?>
    </div>
  </div>
 <?php endif; ?>
 </div>