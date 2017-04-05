<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php foreach ($rows as $id => $row): ?>
  <div <?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
    <?php print $row; ?>
  </div>
  <?php if ($id == 2 || $id == 5 || $id == 8 || $id == 11 || $id == 14 || $id == 17): ?><div class="clearfix"></div><?php endif; ?>
<?php endforeach; ?>