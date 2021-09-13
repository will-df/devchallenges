function decrement(id) {
    let counter = document.getElementById(id);
    if (counter.value > counter.min)
        counter.stepDown();
}

function increment(id) {
    document.getElementById(id).stepUp();
}

function selectColor(id) {
    let select = document.getElementById(id);
    if (select.value == "")
        select.style.color = "#828282";
    else
        select.style.color = "#333333";
}