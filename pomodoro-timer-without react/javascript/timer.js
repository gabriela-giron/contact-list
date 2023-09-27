//var my_internat_id = setInterval(pomodoro,1000);

var minutes = parseInt(0);
var seconds = parseInt(0);
var minutes_break = parseInt(0);
var seconds_break = parseInt(0);
let my_internat_id;

/* VARIABLES PARA RELOJ PRINCIPAL */
var my_timer = document.getElementById('timer');
var min_section = document.createElement("section");
min_section.id = 'minutos';
min_section.textContent = minutes;
var seconds_section = document.createElement("section");
seconds_section.id = 'segundos'; 
seconds_section.textContent = seconds;
my_timer.appendChild(min_section);
my_timer.appendChild(seconds_section);

/* VARIABLES PARA RELOJ DE BREAK */
var break_time = document.getElementById('break-time');
var minb_section = document.createElement("section");
minb_section.id = 'minutos-break';
minb_section.textContent = minutes_break;
var secb_section = document.createElement("section");
secb_section.id = 'segundos-break'; 
secb_section.textContent = seconds_break;
break_time.appendChild(minb_section);
break_time.appendChild(secb_section);

const add_time = () => {
    var time = validate_radio_buttons();
    if (minutes >= 30){
        alert('no more time');
    }else{
        if(time == 'Minutes') {
            minutes = minutes + 1;
            min_section.textContent = minutes;
        }else if(time == 'Seconds'){
            seconds = seconds + 1;
            if (seconds === 60 ) {
                seconds = 0;
            }
            seconds_section.textContent = seconds;
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
        }
    }else if(time == 'Seconds'){
        if (seconds === 0) {
            alert('no less time');
        }else{
            seconds = seconds - 1;
            seconds_section.textContent = seconds;
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

const validate_break_buttons = () => {
    var select_break = document.getElementsByName('time-break');
    var break_value = ''; //stores the result

    for(var i = 0; i < select_break.length; i++){
        //i debe ser menor al numero de radio buttons
        if(select_break[i].checked){
            break_value = select_break[i].value;
            break;//if its checked, leaves the for
        } 
    }

    return break_value;
}

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

function start_count_break(){
    my_internat_id = setInterval(count_down, 1000);
    count_down_break();
}

function count_down() {
    if(seconds === 0 && minutes === 0) {
        clearInterval(my_internat_id);
        alert('Empieza el descanso!')
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

function restart_timer(){
    minutes = 0;
    seconds = 0;
    min_section.innerText = minutes;
    seconds_section.innerHTML = seconds;

    stop_count();
}

function count_down_break(){
    if(seconds_break === 0 && minutes_break === 0) {
        clearInterval(my_internat_id);
        alert('Termina el descanso!')
        my_internat_id = null;
    }else if(seconds_break === 0 && minutes_break >= 1) {
        minutes_break = minutes_break - 1;
        seconds_break = 60;
        seconds_break = seconds_break - 1;
    }else if(minutes_break === 0 && seconds_break >= 1){
        minutes_break = 0;
        seconds_break = seconds_break - 1;
    } else {
        seconds_break = seconds_break - 1;
    }
    min_section.innerText = minutes_break;
    seconds_section.innerHTML = seconds_break;
}
