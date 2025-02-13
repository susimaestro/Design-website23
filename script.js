/* Slider that doesn't work

const slider = document.getElementById('slider');
const after = document.querySelector('.after');

slider.addEventListener('input', (e) => {
    const sliderValue = e.target.value;
    after.style.width = `${sliderValue}%`;
});
*/ 


// FAQ section //
document.addEventListener("DOMContentLoaded", function () {
    function toggleAnswer(id) {
        var answer = document.getElementById("answer" + id);
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    }
    window.toggleAnswer = toggleAnswer; // Expose function globally
});