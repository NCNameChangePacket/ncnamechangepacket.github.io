
$(document).ready(function(){

    $("#intro-button").click(function(){
        $('#main-content').load("/pages/Introduction.html");
        $('#sidebar').removeClass("sidebar-open");
        $('#sidebar-tab').removeClass("sidebar-open");
        $('#main-content').scrollTop(0);
    });

    $("#bg-checks-button").click(function(){
        $('#main-content').load("/pages/BackgroundChecks.html");
        $('#sidebar').removeClass("sidebar-open");
        $('#sidebar-tab').removeClass("sidebar-open");
        $('#main-content').scrollTop(0);
        
    });

    $("#court-docs-button").click(function(){
        $('#main-content').load("/pages/CourtDocuments.html");
        $('#sidebar').removeClass("sidebar-open");
        $('#sidebar-tab').removeClass("sidebar-open");
        $('#main-content').scrollTop(0);
    });

    $("#id-docs-button").click(function(){
        $('#main-content').load("/pages/IDDocuments.html");
        $('#sidebar').removeClass("sidebar-open");
        $('#sidebar-tab').removeClass("sidebar-open");
        $('#main-content').scrollTop(0);
    });

    $("#sidebar-tab").click(function(){
        $("#sidebar").addClass("sidebar-open");
        $("#sidebar-tab").addClass("sidebar-open");
        
    });


    $('#main-content').load("/pages/Introduction.html");
    
});
