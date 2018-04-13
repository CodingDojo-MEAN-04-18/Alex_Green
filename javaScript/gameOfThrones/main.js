
$(document).ready(function(){
    $("img").click(function(){
        var house = $(this).attr("id")
        $.get("https://www.anapioficeandfire.com/api/houses/" + house, function(res) {
            console.log(res);
            html_str = "";
            html_str += `<h4>${res.name}</h4><br>`;
            html_str += "<h4>Words: </h4>"
            html_str += `<p>${res.words}</p><br>`;
            html_str += "<h4>Titles: </h4>"
            for(var t=0; t<res['titles'].length; t++){
                html_str += "<ul>"
                html_str += "<li>"
                html_str += res['titles'][t]
                html_str += "</li>"
                html_str += "</ul>"
            }
            $("#content").html(html_str);
        }, "json")

    })
    
})