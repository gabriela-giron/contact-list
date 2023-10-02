const show_modal = document.getElementById('show-modal');
const modal_content = document.getElementById('parms_modal');
const close_modal = document.querySelector('.close-modal');

show_modal.addEventListener('click', () => {
    //evento para clicks, al precionar hacemos que parms_modal aparezca
    modal_content.style.display = 'block';
});

close_modal.addEventListener('click', () => {
    //para cerrar la ventana modal, es como un display:none
    modal_content.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if(event.target === modal_content) {
        modal_content.style.display = 'none';
    }
});