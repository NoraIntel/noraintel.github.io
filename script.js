$(document).ready(function() {
    // Get all the details elements.
    const details = $("details");
  
    // Close all the details that are not the clicked one.
    details.each(function() {
      if ($(this) !== $(event.currentTarget)) {
        $(this).slideUp(0.5).stop();
      }
    });
});