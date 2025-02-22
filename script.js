const page = window.location.pathname;
const header = document.querySelector('#nome');

if (page.includes("index.html")) {
    botao1 = '#enviar';
    formulario = '#myform';
    inputid = '#fname';
    proxpath = 'index2.html';
}
else if (page.includes("index2.html")) {
    botao1 = '#enviar2';
    formulario = '#myform2';
    inputid = '#data';
    proxpath = 'index3.html';
}
else if (page.includes("index3.html")) {
    botao1 = '#enviar3';
    formulario = '#myform3';
    inputid = '#nota';
    proxpath = 'index.html';
}

const btn = document.querySelector(botao1);

btn.addEventListener("click", function(event) {
    event.preventDefault();
    const form = document.querySelector(formulario);
    if (form.checkValidity()) {
        const valor = document.querySelector(inputid).value;
        console.log(valor);
        if (page.includes("index.html")) {
            localStorage.setItem("nomeCliente", valor);
        }
        if (page.includes("index2.html")) {
            localStorage.setItem("dataReun", valor);
        }
        if (page.includes("index3.html")) {
            localStorage.setItem("notaCliente", valor);
        }
        window.location.href = (proxpath);
    } 

    else {
        alert("Erro!"); 
        form.reportValidity(); 
    }

});

if (!page.includes("index.html")) {
    const nomeSalvo = localStorage.getItem("nomeCliente");
    if (nomeSalvo) {
        header.innerHTML = "Cliente: " + nomeSalvo;
    }
}







