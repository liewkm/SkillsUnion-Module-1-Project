let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button')); // array.from converts document.getElementsByClassName into an array.
//console.log(buttons); // test log of buttons on browser console.

buttons.map(button => {            
    button.addEventListener('click', (e) => {
        // console.log('clicked');
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText); // To test whether addEventListener is functioning first.
        switch (e.target.innerText) {   // switch statement for actions when specific buttons are clicked.
            case 'C':
                display.innerText = '';     // clears display when C is pressed, instead of leaving C on the display.
                break;

            case 'DEL':
                if(display.innerText) {         // if there is exisitng display on the display, execute code below. 
                    display.innerText = display.innerText.slice(0, -1);     // deletes the last string.
                }
                break;

            case '=': 
                try {
                    display.innerText = eval(display.innerText);    // eval will execute any JS code and can pose security risk.
                } catch {
                    display.innerText = 'Invalid Input';

                }
                break;

            default:
                display.innerText += e.target.innerText;    // clicking any button innerText will appear on display.

        }
    });
});