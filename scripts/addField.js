document.querySelector("#add-time").addEventListener('click', cloneField);

function cloneField() {
    //Clone Node duplica elementos HTML
    //O true pega todos os elementos dentro de uma div
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    //Limpar os campos
    const fields = newFieldContainer.querySelectorAll('input');
    fields.forEach(function (field) {
        field.value = "";
    })
    //Colocar os campos na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}