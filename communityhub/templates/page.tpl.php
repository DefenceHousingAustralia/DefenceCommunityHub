<div class="mobileNavWrap">
<nav id="mobile-nav" role="navigation">
  <?php print render($page['sidebar_first']); ?>
</nav>
</div>

<div id="header" role="banner">
  <div class="container">

      <div class="mobile-header visible-xs visible-sm">
        <button id="mobile-nav-btn" class="hamburger hamburger--collapse" type="button">
           <span class="hamburger-box">
              <span class="hamburger-inner"></span>
           </span>
        </button>
        <a id="logo-mobile" href="<?php print $front_page; ?>">
          <img src="<?php print $logo; ?>" alt="Defence Community Hub" />
        </a> 
    </div>
    <div class="site-logo">
      <?php if ($logo): ?>
        <a href="<?php print $front_page; ?>">
          <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
        </a>
      <?php endif; ?>
    </div>

  <div class="pull-right social-icons">
      <div class="addthis_inline_share_toolbox"></div>
    </div>

    <div id="primary-nav" role="navigation">
        <?php if (!empty($page['navigation'])): ?>
          <?php print render($page['navigation']); ?>
        <?php endif; ?>
    </div>

  </div>
</div>

<div id="page">

    <div class="page-image">
       <?php print render($page['feature_header']); ?>
    </div>

  <?php if (!empty($title)): ?>
      <div class="page-title">
          <div class="container">
          <div class="page-title-wrap">
              <h1><?php print $title; ?></h1>
              <?php if (!empty($page['page_title'])): ?>
                 <?php print render($page['page_title']); ?>
                <?php endif; ?>  
                </div>
          </div>

      </div>
      <?php endif; ?>  

    <div class="main-container">    
<div class="container">
      <?php print $breadcrumb;?>
       
       <div class="row">

              <?php if (!empty($page['sidebar_first'])): ?>
                <aside id="secondary-nav" role="complementary">
                  <?php print render($page['sidebar_first']); ?>
                </aside>  
              <?php endif; ?>

          

              <div id="content" <?php print $content_column_class; ?>>
               
                

                  <a id="main-content"></a>

                  <?php print $messages; ?>
                  <?php if (!empty($tabs)): ?>
                    <?php print render($tabs); ?>
                  <?php endif; ?>
                  <?php if (!empty($page['help'])): ?>
                    <?php print render($page['help']); ?>
                  <?php endif; ?>
                  <?php if (!empty($action_links)): ?>
                    <ul class="action-links"><?php print render($action_links); ?></ul>
                  <?php endif; ?>
               
                  <?php print render($page['content']); ?>

              </div>    

              <?php if (!empty($page['sidebar_second'])): ?>
                <aside id="tertiary-nav" class="col-sm-3" role="complementary">
                  <?php print render($page['sidebar_second']); ?>
                </aside>  <!-- /#sidebar-second -->
              <?php endif; ?>
      </div>

  </div>
</div>

      <?php if (!empty($page['highlighted'])): ?>
      <div id="highlighted" class="highlighted"><?php print render($page['highlighted']); ?></div>
      <?php endif; ?>

 
      <?php if (!empty($page['content_bottom'])): ?>
      <div id="content-bottom" class="content-bottom"><?php print render($page['content_bottom']); ?></div>
      <?php endif; ?>


      <?php if (!empty($page['site_bottom'])): ?>
      <div id="bottom" class="site-bottom"><?php print render($page['site_bottom']); ?></div>
      <?php endif; ?>


<?php if (!empty($page['footer'])): ?>
  <footer class="footer">
    <div class="container">

     <div class="footer-right">
      <div class="col-xs-12 col-sm-4">
      <h4>DHA</h4>
      <ul>
      <li class="leaf"><a href="https://www.facebook.com/pages/Defence-Housing-Australia" title=""><i class="fa fa-facebook-square"></i> DHA on Facebook</a></li>
      <li class="last leaf"><a href="https://twitter.com/defencehousing" title=""><i class="fa fa-twitter-square"></i> DHA on Twitter</a></li>
      </ul>
      </div>

      <div class="col-xs-12 col-sm-4">
      <h4>DCO</h4>
      <ul>
      <li><a href="https://www.facebook.com/DefenceCommunityOrganisation/" title=""><i class="fa fa-facebook-square"></i> DCO on Facebook</a></li>
      <li class="leaf"><a href="https://twitter.com/DCO_AusDefence" title=""><i class="fa fa-twitter-square"></i> DCO on Twitter</a></li>

      </ul>
      </div>

      <div class="col-xs-12 col-sm-4">
      <h4>DFA</h4>
      <ul>
      <li class="leaf"><a href="https://www.facebook.com/DefenceFamiliesofAustralia/" title=""><i class="fa fa-facebook-square"></i> DFA on Facebook</a></li>
      </ul>
      </div>
    </div>


    <div class="footer-left">
    <?php print render($page['footer']); ?>

    <div class="copyright">
    <p>&copy; <?php echo date("Y"); ?> <?php print $site_name; ?>.</p>
    </div>
    </div>

   
    </div>
  </footer>
<?php endif; ?>
</div>