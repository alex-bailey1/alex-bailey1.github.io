

$(document).ready(function(){

    $("#contact_submit").click(function(){
        let name = $("#contact_name").val();
        $("#contact_name").val("");
        $("#contact_email").val("");
        $("#contact_comment").val("");
        $("#thank_text").text("Thank you " + name + " I will respond as soon as I can");
    });
    
});