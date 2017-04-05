  <?php
$OneSidebar = $content[ 'middle-one'];
$TwoSidebar = $content[ 'middle-two'];

if (!empty($TwoSidebar)) {
    $TwoSidebar = 'left-side';
  }

if (!empty($OneSidebar)) {
    $OneSidebar = 'right-side';
  }
?>

<div class="content-layout bootstrap-onecol clearfix <?php print $classes ?>" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  <?php if (!empty($content['top'])): ?>
  <div class="top-col">
  <div class="inside">
    <?php print $content['top']; ?>
  </div>
  </div>
  <?php endif; ?>

 
  <?php if (!empty($content['middle-one'])):  ?>
    <div class="middle-col first <?php print $TwoSidebar ?>">
    <?php print $content['middle-one']; ?>
    </div>
  <?php endif; ?>

   <?php if (!empty($content['middle-two'])): ?>
    <div class="middle-col second <?php print $OneSidebar ?>">
    <?php print $content['middle-two']; ?>
    </div>
  <?php endif; ?>



  <?php if (!empty($content['bottom'])): ?>
  <div class="bottom-col">
  <div class="inside">
    <?php print $content['bottom']; ?>
    </div>
  </div>
 <?php endif; ?>
 </div>