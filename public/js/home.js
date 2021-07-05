$(document).ready(function(){

    $("#srhBtn").click(function(){
        var location = $("#location").val();

        if(!location){
            alert("Please enter location to serach weather....!");
            return;
        }

        $.ajax({
            url: `/api/weather?location=${location}`,
            type: 'GET',
            success: function(res) {
                $("#result").text(res.forcast)
            }
        });
    })
});