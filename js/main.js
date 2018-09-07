function previousSlide() {
    var currentChecked = $("input[name='room-choice']:checked");
    if (currentChecked.hasClass('first')){
        $("input[name='room-choice']:last-of-type").prop("checked", true);
        
    } else currentChecked.prev().prop("checked", true);
}

function nextSlide() {
    var currentChecked = $("input[name='room-choice']:checked");
    if (currentChecked.hasClass('last')){
        $("input[name='room-choice']:first-of-type").prop("checked", true);
        
    } else currentChecked.next().prop("checked", true);
}