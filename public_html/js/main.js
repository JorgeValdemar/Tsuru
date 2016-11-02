function Main() {
    var _self = this;
    
    _self.scrollTo = function() {
        $('.scroll-to').click(function() {
            var scroll = $(this).data().scroll;
            var $item = $('.scroll-'+scroll);
            if($item.length > 0) {
                $('html,body').animate({scrollTop: $item.offset().top},'slow');
            }
        });
    };
    
    _self.construtor = function() {
        _self.scrollTo();
    };
    _self.construtor();
};


var main;
$(function() {
    main = new Main();
});
