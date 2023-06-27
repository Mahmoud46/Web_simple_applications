let buttons = document.querySelectorAll('.buttons button'),
    outValu = document.querySelector('.val');
let calValue = '', stat = true;

buttons.forEach(e => {
    e.addEventListener('click', _ => {
        if (e.getAttribute('value') == 'C') {
            calValue = '';
            outValu.innerHTML = "0"
            stat = true;
        }
        else if (e.getAttribute('value') == '=') {
            outValu.innerHTML = `${eval(calValue).toFixed(2)}`;
            calValue = `${eval(calValue).toFixed(2)}`;
        }
        else {
            if (stat) {
                calValue = '';
                outValu.innerHTML = ""
                stat = false;
            }
            calValue += e.getAttribute('value');
            outValu.innerHTML += e.getAttribute('display');
        }
    })
})