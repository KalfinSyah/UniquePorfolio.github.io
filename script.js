$(document).ready(function(){
    var portfolioData = ['.MyName', '.EducationalHistory', '.Skills'];

    $('.Arrow').hide();
    $('.Container').hide();
    
    $('#start').click(function() {
        $('.Arrow').show();
        $('#start').hide();
        $('.Container').show();

        for (var i = 0; i < portfolioData.length; i++) {
            if (i == 0) { continue; }
            else { $(portfolioData[i]).hide(); }
        }
    });

    var i = 0;
    LastPortfolioData = portfolioData.length - 1;
    $(".Arrow").click(function() {
        var direction = $(this).data("value");
        
        if (direction == 'down') {
            if (i == LastPortfolioData) {
                $(portfolioData[i]).hide();
                $(portfolioData[0]).show();
                i = 0;
            } else {
                $(portfolioData[i]).hide();
                $(portfolioData[i+1]).show();
                i++;
            }
        } else {
            if (i == 0) {
                $(portfolioData[0]).hide();
                $(portfolioData[LastPortfolioData]).show();
                i = LastPortfolioData;
            } else {
                $(portfolioData[i]).hide();
                $(portfolioData[i-1]).show();
                i--;
            }
        }
    });

});

