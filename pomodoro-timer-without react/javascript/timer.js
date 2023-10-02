//var my_internat_id = setInterval(pomodoro,1000);
//import 'break-time.js';

var minutes = parseInt(0);
var seconds = parseInt(0);
var intervals = parseInt(0);
let my_internat_id;
var separator = document.createElement("span");
separator.textContent = ':';
var separator2 = document.createElement("span");
separator2.textContent = ':';

/* VARIABLES PARA RELOJ PARAMETROS */
var timer_params = document.getElementById('timer');
var min_parm = document.createElement("section");
min_parm.id = 'minutos';
min_parm.textContent = minutes;
var secs_parm = document.createElement("section");
secs_parm.id = 'segundos'; 
secs_parm.textContent = seconds;
timer_params.appendChild(min_parm);
timer_params.appendChild(separator2);
timer_params.appendChild(secs_parm);

/* VARIABLES PARA RELOJ PRINCIPAL */
var my_timer = document.getElementById('work-timer');
var min_section = document.createElement("section");
min_section.id = 'minutos';
min_section.textContent = minutes;
var seconds_section = document.createElement("section");
seconds_section.id = 'segundos'; 
seconds_section.textContent = seconds;
my_timer.appendChild(min_section);
my_timer.appendChild(separator);
my_timer.appendChild(seconds_section);
var minutes_default = minutes;
var seconds_default = seconds;

const obtener_intervalos = () => {
    /* recibir intervalos de tiempo */
    var intervals_parms = document.getElementById('interval');
    intervals = parseInt(intervals_parms.value);
    return intervals;
}

const add_time = () => {
    if (my_internat_id) {
        alert('espera a que se termine el tiempo!');
    } else {
        var time = validate_radio_buttons();
        if (minutes >= 30){
            alert('no more time');
        }else{
            if(time == 'Minutes') {
                minutes = minutes + 1;
                min_section.textContent = minutes;
                min_parm.textContent = minutes;
            }else if(time == 'Seconds'){
                seconds = seconds + 1;
                if (seconds === 60 ) {
                    seconds = 0;
                }
                seconds_section.textContent = seconds;
                secs_parm.textContent = seconds;
            }
        }
    }
}

const minus_time = () => {
    if(my_internat_id) {
        alert('espera a que termine el tiempo!')
    } else {
        var time = validate_radio_buttons();
        if(time == 'Minutes') {
            if (minutes === 0) {
                alert('no less time');
            }else{
                minutes = minutes - 1;
                min_section.textContent = minutes;
                min_parm.textContent = minutes;
            }
        }else if(time == 'Seconds'){
            if (seconds === 0) {
                alert('no less time');
            }else{
                seconds = seconds - 1;
                seconds_section.textContent = seconds;
                secs_parm.textContent = seconds;
            }
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

function start_count() {
    // esto es para saber si ya hay un intervalo o no
    if(!my_internat_id) {
        if (minutes === 0 && seconds === 0){
            alert('primero coloca el tiempo')
        }else {
            
            console.log(minutes_default);
            console.log(seconds_default);
            console.log(intervals);

            min_section.textContent = minutes_default;
            seconds_section.textContent = seconds_default;
            start_process();
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

function start_process(){
    //esto no es que sea un perform, sino que corre la tarea como en el background
    my_internat_id = setInterval(count_down, 1000);
}

function stop_count() {
    //para terminar el loop
    if (!my_internat_id) {
        alert('no hay nada');
    } else {
        clearInterval(my_internat_id);
        alert('se ha pausado el tiempo');
        my_internat_id = null;
    }
}

function count_down() {
    if(seconds === 0 && minutes === 0) {
        clearInterval(my_internat_id);
        console.log('Empieza el descanso!');
        my_internat_id = null;
        start_count_break();
    }else if(seconds === 0 && minutes >= 1) {
        minutes = minutes - 1;
        seconds = 60;
        seconds = seconds - 1;
    }else if(minutes === 0 && seconds >= 1){
        minutes = 0;
        seconds = seconds - 1;
    } else {
        seconds = seconds - 1;
    }
    min_section.innerText = minutes;
    seconds_section.innerHTML = seconds;
}

function restart_timer(){
    minutes = 0;
    seconds = 0;
    min_section.innerText = minutes;
    seconds_section.innerHTML = seconds;

    stop_count();
}

