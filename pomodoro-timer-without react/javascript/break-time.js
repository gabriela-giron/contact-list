/* VARIABLES PARA RELOJ BREAK */
var minutes_break = parseInt(0);
var seconds_break = parseInt(0);
var minutes_param = parseInt(0);
var seconds_param = parseInt(0);
var loop_times = parseInt(0);
var separator4 = document.createElement("span");
separator4.textContent = ':';

let break_internat_id;

/* variables para tiempo de descanso */
var break_time = document.getElementById('break-time');
var minb_section = document.createElement("section");
minb_section.id = 'minutos-break';
minb_section.textContent = minutes_break;
var secb_section = document.createElement("section");
secb_section.id = 'segundos-break'; 
secb_section.textContent = seconds_break;
break_time.appendChild(minb_section);
break_time.appendChild(separator4);
break_time.appendChild(secb_section);

/* variables de descanso para los intervalos */
var break_params = document.getElementById('break-params');
var minp_section = document.createElement("section");
minp_section.id = 'minutos-break-parm';
minp_section.textContent = minutes_break;
var secp_section = document.createElement("section");
secp_section.id = 'segundos-break-parm'; 
secp_section.textContent = seconds_break;
break_params.appendChild(minp_section);
break_params.appendChild(separator2);
break_params.appendChild(secp_section);

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

const add_break = () => {
    if (break_internat_id) {
        alert('espera hasta que se termine el tiempo!');
    } else {
        var time = validate_break_buttons();
        if (minutes_break >= 30){
            alert('no more time');
        }else{
            if(time == 'MP') {
                minutes_break = minutes_break + 1;
                minutes_param = minutes_param + 1;
                minb_section.textContent = minutes_break;
                minp_section.textContent = minutes_break;
            }else if(time == 'SP'){
                seconds_break = seconds_break + 1;
                seconds_param = seconds_param + 1;
                if (seconds_break === 60 ) {
                    seconds_break = 0;
                    seconds_param = 0;
                }
                secb_section.textContent = seconds_break;
                secp_section.textContent = seconds_break;
            }
        }
    }
}

const minus_break = () => {
    if (break_internat_id) {
        alert('espera hasta que se termine el tiempo!');
    } else {
        var time = validate_break_buttons();
        if(time == 'MP') {
            if (minutes_break === 0) {
                alert('no less time');
            }else{
                minutes_break = minutes_break - 1;
                minutes_param = minutes_param - 1;
                minb_section.textContent = minutes_break;
                minp_section.textContent = minutes_break;
            }
        }else if(time == 'SP'){
            if (seconds_break === 0) {
                alert('no less time');
            }else{
                seconds_break = seconds_break - 1;
                seconds_param = seconds_param - 1;
                secb_section.textContent = seconds_break;
                secp_section.textContent = seconds_break;
            }
        }
    }
}

function start_count_break(){
    break_internat_id = setInterval(count_down_break, 1000);
}

function count_down_break(){
    if(seconds_break === 0 && minutes_break === 0) {
        clearInterval(break_internat_id);
        alert('Termina el descanso!')
        break_internat_id = null;
        console.log(intervals);
        if (intervals > 0){
            intervals--;
            minutes = minutes_default;
            seconds = seconds_default;
            minutes_break = minutes_param;
            seconds_break = seconds_param;
            start_count();
        }else {
            min_section.textContent = 0;
            seconds_section.textContent = 0;
            minutes = minutes_default;
            seconds = seconds_default;
            minutes_break = minutes_param;
            seconds_break = seconds_param;
            alert('fin de los ciclos!')
        }
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
    minb_section.innerText = minutes_break;
    secb_section.innerHTML = seconds_break;
}

/* function stop_count_break() {
    //para terminar el loop
    if (!break_internat_id) {
        alert('no hay nada');
    } else {
        clearInterval(break_internat_id);
        alert('se ha pausado el tiempo');
        my_internat_id = null;
    }
} */
