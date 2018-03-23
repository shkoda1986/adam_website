$(function() {
    $('#go-slow*[href*=\\#]:not(button[href*=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$('*[data-slide-to]').on('click', function(){
    $('#myGallery').carousel($(this).data('slide-to'));
});