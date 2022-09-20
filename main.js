

/// DOM


const tituloPrincipal = document.getElementById ("tituloPrincipal");





tituloPrincipal.innerText= "Biblioteca Matias Fernández Burzaco";

//tituloPrincipal.innerHTML =`<p> Museo Barrio de Flores</p>`;



class libro {
    constructor ( titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }
}


// Stock de Libros Actuales en la Biblioteca

const libroJueves = new libro ("Las Viudad de los Jueves", "Pinero" );
const libroSombras= new libro ("De Amor y de Sombras", "Allende");
const libroFlores= new libro ("Flores siempre es Bello", "Danna");
const libroOrwell= new libro ("1984", "Orwell");
const libroComedia= new libro ("Divina Comedia", "Alighieri");
const libroVioleta= new libro ("Violeta", "Allende");
const libroInfinito= new libro ("El Plan Infinito", "Allende");
const libroMunicipales= new libro ("Ex casita Municipal", "Danna");

const arrayLibros=[];

arrayLibros.push (libroJueves);
arrayLibros.push (libroSombras);
arrayLibros.push (libroFlores);
arrayLibros.push (libroOrwell);
arrayLibros.push (libroComedia);
arrayLibros.push (libroVioleta);
arrayLibros.push (libroInfinito);
arrayLibros.push (libroMunicipales);



const contenedorLibros= document.getElementById ("contenedorLibros");

arrayLibros.forEach ( libro => {
    let div= document.createElement ("div");
    div.innerHTML = ` <div class="card" style="width: 18rem;"> Nombre del libro: <h3> ${libro.titulo} </h3>
     Autor: <h4> ${libro.autor}</h4>
    <button class= "btn btn-primary"> Consultar Disponibilidad </button>
</div>
    `;
    contenedorLibros.appendChild(div);
})