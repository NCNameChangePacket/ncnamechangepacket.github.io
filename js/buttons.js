
$(document).ready(function(){

    $("#intro-button").click(function(){
        $('#main-content').load("/pages/Introduction.html");
    });

    $("#bg-checks-button").click(function(){
        $('#main-content').load("/pages/BackgroundChecks.html");
    });

    $("#court-docs-button").click(function(){
        $('#main-content').load("/pages/CourtDocuments.html");
    });

    $("#id-docs-button").click(function(){
        $('#main-content').load("/pages/IDDocuments.html");
        
    });


    $('#main-content').load("/pages/Introduction.html");
    
});
