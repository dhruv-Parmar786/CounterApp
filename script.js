let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = (e.currentTarget.classList);
        if (styles.contains('decrese')) {
            count--;
        }
        else if (styles.contains('increse')) {
            count++;
        }
        else {
            count = 0;
            value.style.color = "black"
        }
        if (count < 0) {
            value.style.color = "red"
        }
        else if (count > 0) {
            value.style.color = "green"
        }
        value.textContent = count;
    });
});