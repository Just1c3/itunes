$(document).ready(function(){
    $("#musicSearch").on("click",function(){
        quantity = $("#quantity").val();
        var artist = $("#artist").val();
        $('table').empty();
        $.ajax({
            url: "https://itunes.apple.com/search?term=" + artist + "&limit=" + quantity,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(result) {
                console.log(result);
                myFunction(result) },
            error: function() {
                alert('Failed!');
            }
        });
    });
});



function myFunction(result) {
    for (var i = 0; i < quantity; i++) {
        var albumName = result.results[i].collectionName;
        var coverArt = result.results[i].artworkUrl100;
        var song = result.results[i].trackName;
        var musicName = result.results[i].previewUrl;
        document.getElementById("table").innerHTML +=
            "<tr class='song'>" + "</tr><td id='number'>" + (i + 1) + "</td>" + "<td id='img'><img src=" + coverArt + "></td>" +
            "<td <div align='center' id='info'>" + song +
            "<br>" + albumName + "<br><audio controls=\"true\" src=\"" +
            musicName + "\" id=\"audio\" type=\"audio/m4a\"></audio>" +
            " </td>";
    }
}

