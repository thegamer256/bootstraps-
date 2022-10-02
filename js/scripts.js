$(document).ready(function() {

    $('#loginButton').on('click', function() {
        $('#loginModal').modal()
    });
    $('#loginModal').on('hidden.bs.modal', function(e) {})
    $(".dismiss").on('click', function() {
        $('#loginModal').modal('hide')
    });
    $('#reserveTable').on('click', function() {
        $('#reserveModal').modal()
    });
    $('#reserveModal').on('hidden.bs.modal', function(e) {})
    $(".dismiss").on('click', function() {
        $('#reserveModal').modal('hide')
    });
});

        $(document).ready(function() {
            $('[data-toggle="tooltip"]').tooltip();
        });
        

        $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
            // $("#carousel-pause").click(function(){
            //     $("#mycarousel").carousel('pause');
            // });
            // $("#carousel-play").click(function(){
            //     $("#mycarousel").carousel('cycle');
            // });
            $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');
                }
            });
        });
    
