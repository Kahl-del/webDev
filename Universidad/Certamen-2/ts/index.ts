class clientes {
    nombre:string;
    rut:string;
    edad:string;
    genero:string;
    fecha_nac:string;
    email:string;
    region:string;
    comuna:string;

    constructor(nombre:string, rut:string, edad:string, genero:string, fecha_nac:string, email:string, region:string, comuna:string){
        this.nombre = nombre;
        this.rut = rut;
        this.edad = edad;
        this.genero = genero;
        this.fecha_nac = fecha_nac;
        this.email = email;
        this.region = region;
        this.comuna = comuna;
    }
}

(function () {
    let doc:any = document.getElementById('cuerpo');

    let cliente1:clientes = new clientes('Felipe Gonzales','20.092.871-0','21','Masculino','21 de diciembre 1999','felipgonz@mail.com','Valparaiso','Valparaiso');
    let cliente2:clientes = new clientes('Franco Gomez','20.007.891-k','25','Masculino','2 de enero 1996','destructordecubos91@mail.com','Valparaiso','Valparaiso');

    cartaCliente(doc,cliente1);
    Editar(doc, cliente1);
    ListAntecedentes(doc, cliente1);
})()

function cartaCliente(doc:any, cliente:clientes){

    let div1:any = document.createElement('div');
    let div2:any = document.createElement('div');
    let divimg:any = document.createElement('div');
    let img:any = document.createElement('img');
    let divCli:any = document.createElement('div');
    let cuerpCli:any = document.createElement('div');
    let nombreCli:any = document.createElement('h5');
    let infoCli:any = document.createElement('p');

    let carta:any;
    let fila:any;
    let imgCli:any;
    let imgPerfil:any;
    let Cli:any;
    let cueCli:any;
    let nomCli:any;
    let infCli:any;

    
    carta.appendChild(div1);
    carta.class="card mb-3";
    
    fila.appendChild(div2);
    fila.class="row g-0";

    imgCli.appendChild(divimg)
    imgCli.class="col-md-4";
    imgPerfil.appendChild(img)
    imgPerfil.innerHTML=' src="..." class="img-fluid rounded-start" alt="..." '
    
    Cli.appendChild(divCli).class="col-md-8";
    cueCli.appendChild(cuerpCli).class="card-body";
    nomCli.appendChild(nombreCli).innerHTML=cliente.nombre;
    infCli.appendChild(infoCli).innerHTML=cliente.fecha_nac+", "+cliente.edad+" Años";

    doc.appendChild(carta);

}

function ListAntecedentes(doc:any, cliente:clientes){

}



function Editar(doc:any, cliente:clientes){
    let editar:any = document.createElement('li');

    editar.addEventListener("click", Formulario(doc, cliente));
}

function Formulario(doc:any, cliente:clientes){

    let forms: any = document.createElement('form');

    doc.appendChild(forms);
    doc.class="row g-3 needs-validation";

    let campos:any = document.createElement('ul');

    forms.appendChild(campos);

    //primer campo: nombre completo
    let nomli:any;
    let nomdiv:any;
    let nomlab:any;
    let nombre:any;

    let linom:any = document.createElement('li');
    let divnom:any = document.createElement('div');
    let labnom:any = document.createElement('label');
    let inpnom:any = document.createElement('input');

    nomli.appendChild(linom);
    nomdiv.appendChild(divnom);
    nomlab.appendChild(labnom);
    nombre.appendChild(inpnom);

    nomdiv.class="col";

    nomlab.for="nombreCliente"
    nomlab.class="form-label"
    nomlab.innerHTML="Nombre Completo";
    
    nombre.type="text";
    nombre.class="form-control";
    nombre.id="nombreCliente";
    nombre.value=cliente.nombre;
    

    //segundo campo: rut cliente
    let rutli:any;
    let rutdiv:any;
    let rutlab:any;
    let rut:any;

    let lirut:any = document.createElement('li');
    let divrut:any = document.createElement('div');
    let labrut:any = document.createElement('label');
    let inprut:any = document.createElement('input');

    rutli.appendChild(lirut);
    rutdiv.appendChild(divrut);
    rutlab.appendChild(labrut);
    rut.appendChild(inprut);

    rutdiv.class="col";

    rutlab.for="rutCliente";
    rutlab.class="form-label";
    rutlab.innerHTML="Rut";

    rut.type="text";
    rut.class="form-control";
    rut.id="rutCliente";
    rut.pattern="^[0-9]{8}-[0-9Kk]{1}$";
    rut.value=cliente.rut;


    //tercer campo: edad cliente
    let edadli:any;
    let edaddiv:any;
    let edadlab:any;
    let edad:any;

    let liedad:any = document.createElement('li');
    let divedad:any = document.createElement('div');
    let labedad:any = document.createElement('label');
    let inpedad:any = document.createElement('input');

    edadli.appendChild(liedad);
    edaddiv.appendChild(divedad);
    edadlab.appendChild(labedad);
    edad.appendChild(inpedad);

    edaddiv.class="col";

    edadlab.for="edadCliente";
    edadlab.class="form-label";
    edadlab.innerHTML="edad";

    edad.type="number";
    edad.class="form-control";
    edad.id="edadCliente";
    edad.value=cliente.edad;


    //cuarto campo: genero cliente
    let genli:any;
    let gendiv:any;
    let genlab:any;
    let genero:any;

    let ligen:any = document.createElement('li');
    let divgen:any = document.createElement('div');
    let labgen:any = document.createElement('label');
    let inpgen:any = document.createElement('input');

    genli.appendChild(ligen);
    gendiv.appendChild(divgen);
    genlab.appendChild(labgen);
    genero.appendChild(inpgen);

    gendiv.class="col";

    genlab.for="generoCliente";
    genlab.class="form-label";
    genlab.innerHTML="Genero";

    genero.type="text";
    genero.class="form-control";
    genero.id="generoCliente";
    genero.value=cliente.genero;

    //quinto campo: fecha de nacimiento
    let nacli:any;
    let nacdiv:any;
    let naclab:any;
    let nacimiento:any;

    let linac:any = document.createElement('li');
    let divnac:any = document.createElement('div');
    let labnac:any = document.createElement('label');
    let inpnac:any = document.createElement('input');

    nacli.appendChild(linac);
    nacdiv.appendChild(divnac);
    naclab.appendChild(labnac);
    nacimiento.appendChild(inpnac);

    nacdiv.class="col";

    naclab.for="nacCliente";
    naclab.class="form-label";
    naclab.innerHTML="Fecha nacimiento";

    nacimiento.type="text";
    nacimiento.class="form-control";
    nacimiento.id="nacCliente";
    nacimiento.value=cliente.fecha_nac;

    //sexto campo: correo electronico
    let mailli:any;
    let maildiv:any;
    let maillab:any;
    let email:any;

    let limail:any = document.createElement('li');
    let divmail:any = document.createElement('div');
    let labmail:any = document.createElement('label');
    let inpmail:any = document.createElement('input');

    mailli.appendChild(limail);
    maildiv.appendChild(divmail);
    maillab.appendChild(labmail);
    email.appendChild(inpmail);

    maildiv.class="col";

    maillab.for="mailCliente";
    maillab.class="form-label";
    maillab.innerHTML="Email";

    email.type="email";
    email.class="form-control";
    email.id="mailCliente";
    email.value=cliente.rut;

    //septimo campo: region
    let regli:any;
    let regdiv:any;
    let reglab:any;
    let region:any;

    let lireg:any = document.createElement('li');
    let divreg:any = document.createElement('div');
    let labreg:any = document.createElement('label');
    let inpreg:any = document.createElement('input');

    regli.appendChild(lireg);
    regdiv.appendChild(divreg);
    reglab.appendChild(labreg);
    region.appendChild(inpreg);

    regdiv.class="col";

    reglab.for="regionCliente";
    reglab.class="form-label";
    reglab.innerHTML="Region";

    region.type="text";
    region.class="form-control";
    region.id="regionCliente";
    region.value=cliente.region;

    //octavo campo: comuna
    let comli:any;
    let comdiv:any;
    let comlab:any;
    let comuna:any;

    let licom:any = document.createElement('li');
    let divcom:any = document.createElement('div');
    let labcom:any = document.createElement('label');
    let inpcom:any = document.createElement('input');

    comli.appendChild(licom);
    comdiv.appendChild(divcom);
    comlab.appendChild(labcom);
    comuna.appendChild(inpcom);

    comdiv.class="col";

    comlab.for="comCliente";
    comlab.class="form-label";
    comlab.innerHTML="Comuna";

    comuna.type="text";
    comuna.class="form-control";
    comuna.id="comCliente";
    comuna.value=cliente.comuna;

}