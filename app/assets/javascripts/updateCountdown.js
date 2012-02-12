function updateCountdown() {
    // 140 is the max message length
    var remaining = 140 - jQuery('#message').val().length;
    jQuery('.countdown').text(remaining + ' characters remaining.');
}

jQuery(document).ready(function() {
    updateCountdown();
    $('#message').change(updateCountdown).keyup(updateCountdown).keyup();
});

