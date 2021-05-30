let btn = document.getElementById('move');
let bar = document.getElementById('bar');
btn.addEventListener('click', startProgress);


function startProgress() {
    var i = 0;
    var width = 0;
    if (i == 0) {
        i = 1;
        let id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                bar.style.width = width + "%";
            }
        }
    }
}