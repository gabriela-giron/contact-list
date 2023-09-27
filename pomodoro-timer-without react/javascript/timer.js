//var my_internat_id = setInterval(pomodoro,1000);

var minutes = parseInt(0);
var seconds = parseInt(0);
let my_internat_id;

var my_timer = document.getElementById('timer');
my_timer.textContent = 'my timer';
var min_section = document.createElement("section");
min_section.id = 'minutos';
min_section.textContent = minutes;
var seconds_section = document.createElement("section");
seconds_section.id = 'segundos'; 
seconds_section.textContent = seconds;
my_timer.appendChild(min_section);
my_timer.appendChild(seconds_section);

const add_time = () => {
    var time = validate_radio_buttons();
    if (minutes >= 10){
        alert('no more time');
    }else{
        if(time == 'Minutes') {
            minutes = minutes + 1;
            min_section.textContent = minutes;
            //console.log(minutes);
            //timer(minutes,seconds);
        }else if(time == 'Seconds'){
            seconds = seconds + 1;
            if (seconds === 60 ) {
                seconds = 0;
            }
            seconds_section.textContent = seconds;
            //console.log(seconds);
            //timer(minutes,seconds);
        }
    }
}

const minus_time = () => {
    var time = validate_radio_buttons();
    if(time == 'Minutes') {
        if (minutes === 0) {
            alert('no less time');
        }else{
            minutes = minutes - 1;
            min_section.textContent = minutes;
            //console.log(minutes);
            //timer(minutes,seconds);
        }
    }else if(time == 'Seconds'){
        if (seconds === 0) {
            alert('no less time');
        }else{
            seconds = seconds - 1;
            seconds_section.textContent = seconds;
            //console.log(seconds);
            //timer(minutes,seconds);
        }
    }
}

const validate_radio_buttons = () => {
    var selection = document.getElementsByName('time');
    var radio_value = ''; //stores the result

    for(var i = 0; i < selection.length; i++){
        //i debe ser menor al numero de radio buttons
        if(selection[i].checked){
            radio_value = selection[i].value;
            break;//if its checked, leaves the for
        }
    }

    return radio_value;
}

/* function timer(minutes,seconds){
    var my_timer = document.getElementById('timer');

    my_timer.textContent = 'my timer';

    var min_section = document.createElement("section");
    min_section.id = 'minutos';
    min_section.textContent = minutes;
    var seconds_section = document.createElement("section");
    seconds_section.id = 'segundos';
    seconds_section.textContent = seconds;
    my_timer.appendChild(min_section);
    my_timer.appendChild(seconds_section);

}

timer(minutes,seconds); */

function start_count() {
    // esto es para saber si ya hay un intervalo o no
    if(!my_internat_id) {
        if (minutes === 0 && seconds === 0){
            alert('primero coloca el tiempo')
        }else {
            my_internat_id = setInterval(count_down, 1000);
        }
    } else {
        var minutes_count = document.getElementById('minutes');
        minutes_count.innerHTML = minutes;
        var seconds_count = document.getElementById('seconds');
        seconds_count.innerHTML = seconds;

        if (minutes === 0 && seconds === 0){
            clearInterval(my_internat_id);
            console.log('reinicio');
            my_internat_id = null;
            my_internat_id = setInterval(count_down, 1000);
        }
    }
}

function count_down() {
    /* var minutes_count = document.getElementById('minutos');
    minutes_count.innerHTML = minutes;
    var seconds_count = document.getElementById('segundos');
    seconds_count.innerHTML = seconds; */

    if(seconds === 0 && minutes === 0) {
        clearInterval(my_internat_id);
        console.log('ha terminado el tiempo')
        my_internat_id = null;
    }else if(seconds === 0 && minutes >= 1) {
        minutes = minutes - 1;
        seconds = 60;
        seconds = seconds - 1;
        console.log(minutes);
        console.log(seconds);
    }else if(minutes === 0 && seconds >= 1){
        minutes = 0;
        seconds = seconds - 1;
        console.log(minutes);
        console.log(seconds);
    } else {
        //minutes = minutes - 1;
        seconds = seconds - 1;
        console.log(minutes);
        console.log(seconds);
    }

    min_section.innerText = minutes;
    seconds_section.innerHTML = seconds;
}

function stop_count() {
    //para terminar el loop
    if (!my_internat_id) {
        console.log('no hay nada');
    } else {
        clearInterval(my_internat_id);
        console.log('se ha pausado el tiempo');
        my_internat_id = null;
    }
    
}

function restart_timer(){
    /* var minutes_count = document.getElementById('minutes');
    minutes_count.innerHTML = 0;
    var seconds_count = document.getElementById('seconds');
    seconds_count.innerHTML = 0; */

    minutes = 0;
    seconds = 0;
    min_section.innerText = minutes;
    seconds_section.innerHTML = seconds;

    stop_count();
}
