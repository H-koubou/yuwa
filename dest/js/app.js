(function($) {
  
  /* ==================================================
    Drawer Menu
  ================================================== */

  $(function(){
    const openBtn = $("#menuicon");
    const openBtnActive = ".active";
    const closeBtn = $("#close");
    const overlay = $("#overlay");
    const panel = $("#hamburgerwrap");
    function panelOpen() {
      overlay.fadeIn('fast');
      panel.addClass('open');
      openBtn.addClass('active');
    }
    function panelClose() {
      overlay.fadeOut('fast');
      panel.removeClass('open');
      openBtn.removeClass('active');
    }
    openBtn.on('click',function(){
      if($(".active").length) {
        panelClose();
      } else {
        panelOpen();
      }
    });
    closeBtn.on('click',function(){
      panelClose();
    });
    overlay.on('click',function(){
      panelClose();
    });
    $(window).on('resize',function(){
      panelClose();
    });
    $(window).on('load resize',function(){
      windowHeight();
    });
  });

})(jQuery);



  /* ==================================================
    PageTop
  ================================================== */
  //スクロール量を取得する関数
  function getScrolled() {
    return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
  };

  //トップに移動する関数
  function scrollToTop() {
    var scrolled = getScrolled();
    window.scrollTo( 0, Math.floor( scrolled / 2 ) );
    if ( scrolled > 0 ) {
      window.setTimeout( scrollToTop, 80 );
    }
  };

  //イベント登録
  document.getElementById( 'js-pagetop-btn' ).addEventListener('click', () => {
    scrollToTop();
  });