const text = document.querySelector(".title");
const changeColor = document.querySelector(".changer");

function alwaysOdd(x)
{
    if(x % 2 == 0) {
        return false;
    }
    else if(x % 2 == 1) {
        x += 2;
    }
    return x;
}

let fib = document.querySelector("fib");

changeColor.addEventListener('click', function()
{
    text.classList.toggle(alwaysOdd(fib));
});
