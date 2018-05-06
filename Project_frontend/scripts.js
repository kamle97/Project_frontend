$(document).ready(function () {
    console.log("ready");
    $('.panelENG').css("display", "none");
    $('.panelFRA').css("display", "none");
    $('.panelSPA').css("display", "none");
    $('.panelGER').css("display", "none");
    $('.panelPOL').css("display", "none");
    $('.panelITA').css("display", "none");
    $('.tablesorter').css("display", "none");

    // --- endless scroll --- //
    // does not work until page is not on server
    // check console log

    // $(function () {
    //     $(".container").pjInfiniteScroll();
    // });

    // --- accordion menu --- //

    // var $j = jQuery.noConflict();

    $("#england").bind("click",function () {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('#panelENG').css("display", "none");
        } else {
            $(this).addClass('active');
            $('#panelENG').css("display", "block");
        }
    });

    $("#france").bind("click",function () {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('#panelFRA').css("display", "none");
        } else {
            $(this).addClass('active');
            $('#panelFRA').css("display", "block");
        }
    });

    $("#spain").bind("click",function () {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('#panelSPA').css("display", "none");
        } else {
            $(this).addClass('active');
            $('#panelSPA').css("display", "block");
        }
    });

    $("#germany").bind("click",function () {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('#panelGER').css("display", "none");
        } else {
            $(this).addClass('active');
            $('#panelGER').css("display", "block");
        }
    });

    $("#poland").bind("click",function () {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('#panelPOL').css("display", "none");
        } else {
            $(this).addClass('active');
            $('#panelPOL').css("display", "block");
        }
    });

    $("#italy").bind("click",function () {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('#panelITA').css("display", "none");
        } else {
            $(this).addClass('active');
            $('#panelITA').css("display", "block");
        }
    });

    $("#world").bind("click",function () {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.tablesorter').css("display", "none");
        } else {
            $(this).addClass('active');
            $('.tablesorter').css("display", "block");
        }
    });


    // --- table with sorting --- //
    
    console.log($(this).find("#panel"));

    jQuery.get('table.txt', function(data) {
        var rows = data.split("\n");
        var i, j;
        var thead = rows[0].split("\t");
        var tableContent = "<table>";
        tableContent += "<thead><tr>";
        for(i=0; i<thead.length; ++i) {
            tableContent += "<th>";
            tableContent += thead[i];
            tableContent += "</th>";
        }
        tableContent += "</tr></thead>";
        tableContent += "<tbody>";

        for(i=1; i<rows.length-1; ++i)     {
            var words = rows[i].split("\t");
            tableContent += "<tr>";
            for(j=0; j<words.length; ++j) {
                tableContent += "<td>";
                tableContent += words[j];
                tableContent += "</td>";
            }
            tableContent += "</tr>";
        }

        tableContent += "</tbody>";
        tableContent += "</table>";

        $('#myTable').html(tableContent);
        $("#myTable").tablesorter();
    });


});

