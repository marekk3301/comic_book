function autoScroll(totalDuration) {
    var wrapper = document.getElementById("wrapper");
    var arrow = document.getElementById("arrow");
    var start = wrapper.scrollLeft;
    var end = wrapper.scrollWidth - wrapper.clientWidth;
    var remainingDistance = end - start;
    var remainingDuration = totalDuration * (remainingDistance / (wrapper.scrollWidth - wrapper.clientWidth));
    var startTime = null;
    var isInterrupted = false;

    function animateScroll(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var percent = Math.min(progress / remainingDuration, 1);
        var distance = remainingDistance * percent;
        wrapper.scrollLeft = start + distance;
        if (percent < 1 && !isInterrupted) {
            window.requestAnimationFrame(animateScroll);
        } else {
            removeInterruptionListeners();
            checkArrowVisibility();
        }
    }

    function onInterrupt() {
        isInterrupted = true;
        removeInterruptionListeners();
        checkArrowVisibility();
    }

    function addInterruptionListeners() {
        document.addEventListener("mousedown", onInterrupt);
        document.addEventListener("wheel", onInterrupt);
    }

    function removeInterruptionListeners() {
        document.removeEventListener("mousedown", onInterrupt);
        document.removeEventListener("wheel", onInterrupt);
    }

    function checkArrowVisibility() {
        if (wrapper.scrollLeft >= end) {
            arrow.style.display = "none";
        } else {
            arrow.style.display = "block";
        }
    }

    addInterruptionListeners();
    window.requestAnimationFrame(animateScroll);
}

document.getElementById("arrow").addEventListener("click", function() {
    autoScroll(40000);  // Adjust the total duration as needed
});

document.getElementById("wrapper").addEventListener("scroll", function() {
    var wrapper = document.getElementById("wrapper");
    var arrow = document.getElementById("arrow");
    var end = wrapper.scrollWidth - wrapper.clientWidth;
    if (wrapper.scrollLeft >= end) {
        arrow.style.display = "none";
    } else {
        arrow.style.display = "block";
    }
});
