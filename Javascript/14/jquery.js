$(document).ready(function() {
    // jQuery code to toggle paragraph visibility
    $("#toggleButton").click(function() {
        $("#demo").slideUp(); // Changed to slideToggle for a toggle effect
    });
});
    $(document).ready(function(){
        //Attach a click event handler to the div
    // Attach a click event handler to the div
    $('#toggleDiv').click(function() {
        // Toggle between two background colors
        $(this).toggleClass('alternateColor');
    });
});
