var board = document.querySelector('.board');
var heading = document.querySelector('.top');
window.onload = () => {
    for(let i=0; i<5; i++) {
        var row = document.createElement('div');
        row.className = 'row';
        board.appendChild(row);

        for(let j = 0; j<10; j++) {
            var cell = document.createElement('div');
            cell.className = 'cell';
            cell.innerHTML = '<i class="far fa-user"></i>';
            row.appendChild(cell);
        }
    }
}

var left = 50;
var booked = 0;

function checkSeats(val) {
    if(val) {
        left--;
        booked++;
    } else {
        left++;
        booked--;
    }
}

function displaySeats() {
    heading.innerHTML = `<div class="seats-value"><h2>Booked : ${booked}</h2> <h2>Left : ${left}</h2></div>`;
}

displaySeats();

setTimeout(() => {
    var cells = document.querySelectorAll('.cell');

    
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if(cell.innerHTML === '<i class="fas fa-user"></i>') {
                cell.innerHTML = '<i class="far fa-user"></i>';
                checkSeats(false);
                displaySeats();
            } else {
                cell.innerHTML = '<i class="fas fa-user"></i>';
                checkSeats(true);
                displaySeats();
            }
        })
    })
}, 100)