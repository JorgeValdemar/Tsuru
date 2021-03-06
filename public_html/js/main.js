function Main() {
    var _self = this;
    var $formContato;
    
    _self.enviarContato = function() {
        alert('valido!');
    };
    
    _self.scrollTo = function() {
        $('.scroll-to').click(function() {
            var scroll = $(this).data().scroll;
            var $item = $('.scroll-'+scroll);
            if($item.length > 0) {
                $('html,body').animate({scrollTop: $item.offset().top},'slow');
            }
        });
    };
    
    _self.configurarForm = function() {
        $formContato = $('#formContato').parsley();
        $('#enviarContato').click(function() {
            if($formContato.validate()) {
                _self.enviarContato();
            }
        });
    };
    
    _self.construtor = function() {
        _self.scrollTo();
        _self.configurarForm();
    };
    _self.construtor();
};


var main;
$(function() {
    main = new Main();
});
