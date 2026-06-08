// CATÁLOGO DE PRODUCTOS
const productos = [
  {
    id: 1,
    nombre: "Hojas de todo tipo",
    detalle: "Paquetes 500 hojas",
    precio: 35,
    categoria: "PAPELERIA BASICA",
    imagen: "https://manualidadesplay.com/wp-content/uploads/2026/03/manualidades-papel.webp"
  },
  {
    id: 2,
    nombre: "Cuadernos, Libretas",
    detalle: "En todos los colores",
    precio: 30,
    categoria: "PAPELERIA BASICA",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtC2iizgY1MSjtFdueVZ_Y3AsAIkMzvcyyeA&s"
  },
  {
    id: 3,
    nombre: "Blocs de notas",
    detalle: "De todo tipo",
    precio: 40,
    categoria: "PAPELERIA BASICA",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXV4a2bvWe_qVAj21fDs1td0s2WLvInJydA&s"
  },
  {
    id: 4,
    nombre: "Borradores",
    detalle: "De todos los colores",
    precio: 5,
    categoria: "PAPELERIA BASICA",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDXqiYxsGIIzdpY82F0IuA0DGJE1G2Bsz1g&s"
  },
  {
    id: 5,
    nombre: "Marcadores",
    detalle: "De todo tipo",
    precio: 30,
    categoria: "ESCRITURA Y DIBUJO",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpL7LI1dWPMMniOJgVnTT5tKfLwmVMyvM_g&s"
  },
  {
    id: 6,
    nombre: "Resaltadores",
    detalle: "En diferentes colores",
    precio: 20,
    categoria: "ESCRITURA Y DIBUJO",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KTPe_-WBoKKiFP05rOOQ4PHS0wjhHcNH5g&s"
  },
  {
    id: 7,
    nombre: "Sets de arte ",
    detalle: "De todo tipo",
    precio: 80,
    categoria: "ESCRITURA Y DIBUJO",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVH6k4YHZmcw449VdNn0FvPaRt2XezHHLZww&s"
  },
  {
    id: 8,
    nombre: "Boligrafos",
    detalle: "Todo lo que puedas imaginar",
    precio: 4,
    categoria: "ESCRITURA Y DIBUJO",
    imagen: "https://libreriairbe.com/wp-content/uploads/2023/10/Boligrafos-Micropuntas-de-Tinta-Gel-con-Glitter-Punta-de-1.0-mm-Zuixua-neon-color-Estuche-de-12-320x320.jpg"
  },
  {
    id: 9,
    nombre: "Corrector",
    detalle: "En todos los colores",
    precio: 20,
    categoria: "ESCRITURA Y DIBUJO",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW79ekt-5AkBNXZvXjqjaconcXpacasNV58w&s"
  },
  {
    id: 10,
    nombre: "Estuches",
    detalle: "De todo tipo",
    precio: 50,
    categoria: "ESCUELA Y ESTUDIO",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR42nQpr6t1dCXWiw8rxWrqswf9C6yC629FsQ&s"
  },
  {
    id: 11,
    nombre: "Tijeras",
    detalle: "De todo tipo",
    precio: 20,
    categoria: "ESCUELA Y ESTUDIO",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xL1Day0SIoenJYJlIO1kGe1Ltvk130ZXLA&s"
  },
  {
    id: 12,
    nombre: "Pegamento",
    detalle: "De todo tipo",
    precio: 15,
    categoria: "ESCUELA Y ESTUDIO",
    imagen: "https://www.selfpaper.com/_imagenes/material-oficina/barra-de-pegamento-imedio-de-21-gramos.jpg"
  },
  {
    id: 13,
    nombre: "Colores",
    detalle: "De todo tipo",
    precio: 110,
    categoria: "ESCUELA Y ESTUDIO",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtF7q1fGJ6HAQa1NOAhjesI0OwAc5lHoMwg&s"
  },
  {
    id: 14,
    nombre: "Reglas",
    detalle: "En todoas las formas posibles",
    precio: 30,
    categoria: "ESCUELA Y ESTUDIO",
    imagen: "https://www.papelcruz.com/wp-content/uploads/2022/10/photoroom_20260427_165036.jpeg"
  },
  {
    id: 15,
    nombre: "Calculadoras",
    detalle: "De todo tipo",
    precio: 65,
    categoria: "ESCUELA Y ESTUDIO",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8od7HPqiACtQoc4Jbydn1A1-2rz6mrhGZQ&s"
  },
  {
    id: 16,
    nombre: "Carpetas",
    detalle: "Desde una unidad",
    precio: 40,
    categoria: "OFICINA Y PROFECIONAL",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsP7DiZNPl48FDxPYQ42wSr3GidCt0HqAMUg&s"
  },
  {
    id: 17,
    nombre: "Folders",
    detalle: "En todos los colores",
    precio: 10,
    categoria: "OFICINA Y PROFECIONAL",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1LIEYmiio8DKMdj1wDMyvF7FjGfw3-OjQqw&s"
  },
  {
    id: 18,
    nombre: "Archivadores",
    detalle: "De todo tipo",
    precio: 20,
    categoria: "OFICINA Y PROFECIONAL",
    imagen: "https://materiales.com.bo/cdn/shop/products/185_300x.jpg?v=1578847623"
  },
  {
    id: 19,
    nombre: "Organizadores",
    detalle: "De todas las formas",
    precio: 95,
    categoria: "OFICINA Y PROFECIONAL",
    imagen: "https://m.media-amazon.com/images/I/71nVuQaB6uL.jpg"
  },
  {
    id: 20,
    nombre: "Accesorios para escritorio",
    detalle: "Formales y bonitos",
    precio: 3,
    categoria: "OFICINA Y PROFECIONAL",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqmAFkiJOLJffUzckOwqoHQIFuoNzMCuJMw&s"
  },
  {
    id: 21,
    nombre: "Boligrafos",
    detalle: "Formales y bonitos",
    precio: 3,
    categoria: "OFICINA Y PROFECIONAL",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqux7IbZCdLeMqpfcTrxhYOxUCkWDlXkx3g&s"
  },
  {
    id: 22,
    nombre: "Lápices de grafito y portaminas",
    detalle: "Por caja",
    precio: 30,
    categoria: "OFICINA Y PROFECIONAL",
    imagen: "https://materiales.com.bo/cdn/shop/products/Set-6-Lapices-de-Dibujo-Castell-9000-Faber-Castell-Vista_1000x.jpg?v=1637789341"
  },
  {
    id: 23,
    nombre: "Correctores",
    detalle: "En cinta y líquido",
    precio: 25,
    categoria: "OFICINA Y PROFECIONAL",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRibb0M8ngmlUw9NiYtXHXCyD--_cSttcMRMg&s"
  },
  {
    id: 24,
    nombre: "Marcadores",
    detalle: "Para pizarra",
    precio: 7,
    categoria: "OFICINA Y PROFECIONAL",
    imagen: "https://materiales.com.bo/cdn/shop/products/147_800x.jpg?v=1576149681"
  },
  {
    id: 25,
    nombre: "Hojas de papel bond",
    detalle: "Por paquete",
    precio: 35,
    categoria: "OFICINA Y PROFECIONAL",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7Te3unLQ_u1Q5v7rkbrdImrtDf7P7QvQrw&s"
  },
  {
    id: 26,
    nombre: "Separadores",
    detalle: "Formales y bonitos",
    precio: 10,
    categoria: "OFICINA Y PROFECIONAL",
    imagen: "https://i.pinimg.com/474x/e6/c7/b7/e6c7b7a60faa2791e3cedd0d9b684b12.jpg"
  },
  {
    id: 27,
    nombre: "Engrampadora ",
    detalle: "Con grapas de repuesto ",
    precio: 20,
    categoria: "OFICINA Y PROFECIONAL",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6zkskH78fEB81Yjn9doaxxckb8F3ZcULrA&s"
  },
  {
    id: 28,
    nombre: "Perforadora",
    detalle: "Formales y bonitos",
    precio: 30,
    categoria: "OFICINA Y PROFECIONAL",
    imagen: "https://www.officedepot.com.pa/medias/34448.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MzAyNTkyfGltYWdlL2pwZWd8YUdOakwyaGpOaTh4TURRNE9UVTROakExTnpJME5pOHpORFEwT0M1cWNHZGZNVEl3TUdaMGR3fDc1YjNhNmRiNTRhZmUxYzc0ZmFjMzc1MzFjYWIyMzI2OTY2ZDY1ODE5ZTA1ZjdjZmMzZjcxYzhkMTk5MmU2NDM"
  },
  {
    id: 29,
    nombre: "Cinta adhesiva",
    detalle: "Transparentes",
    precio: 20,
    categoria: "OFICINA Y PROFECIONAL",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo59J1GVuf9uHnPS9UylfOgj89CSwaznl5jg&s"
  },
  {
    id: 30,
    nombre: "Scrapbooking",
    detalle: "Bonitos",
    precio: 30,
    categoria: "ARTE Y CREATIVIDAD",
    imagen: "https://blauverdimpressors.com/wp-content/uploads/2022/04/pexels-lisa-fotios-3115623-scaled.jpg"
  },
  {
    id: 31,
    nombre: "Washi tapes",
    detalle: "En todos los colores por paquete",
    precio: 20,
    categoria: "ARTE Y CREATIVIDAD",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7spIKsqoVfsPUfBKnv98gXtIkR1Dx1hbnOQ&s"
  },
  {
    id: 32,
    nombre: "Stickers",
    detalle: "Aesthetic",
    precio: 10,
    categoria: "ARTE Y CREATIVIDAD",
    imagen: "https://i.etsystatic.com/7941995/r/il/9b113c/2285536450/il_570xN.2285536450_67sp.jpg"
  },
  {
    id: 33,
    nombre: "Papeles decorativos",
    detalle: "De todo tipo por hoja",
    precio: 7,
    categoria: "ARTE Y CREATIVIDAD",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmmpUVRY0LcABnBTuiKQXVMqq5XAsl5YFlA&s"
  },
  {
    id: 34,
    nombre: "Rotuladores",
    detalle: "En todos los colores",
    precio: 120,
    categoria: "ARTE Y CREATIVIDAD",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyg9Gum1c-8zt2SlsQI3f8OArWuDFUUPs9GQ&s"
  },
  {
    id: 35,
    nombre: "Acuarelas",
    detalle: "Tu imaginacion es el limite",
    precio: 35,
    categoria: "ARTE Y CREATIVIDAD",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Cdo0MiyVSjms6tV1hQhUbiNag_lkjWUjbA&s"
  },
  {
    id: 36,
    nombre: "Pinceles",
    detalle: "En todas las formas",
    precio: 40,
    categoria: "ARTE Y CREATIVIDAD",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMBYl-3u3Kr7cjPaCor2mH5QJYtUDJEK0kQ&s"
  },
  {
    id: 37,
    nombre: "Gomas moldeables",
    detalle: "En todos los colores",
    precio: 12,
    categoria: "ARTE Y CREATIVIDAD",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpM3tZ03GwdVkzVfWcR5ize9B_Pf-0Mpg3w&s"
  },
  {
    id: 38,
    nombre: "Pintura al oleo",
    detalle: "En todos los colores",
    precio: 12,
    categoria: "ARTE Y CREATIVIDAD",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rNIQfYNTwITv87iPlNGTfKkiY3Zle678SA&s"
  }
];

let carrito = [];

function generarMenuCategorias() {
  const menuContenedor = document.getElementById("categorias-menu");
  if (!menuContenedor) return;

  const categorias = [...new Set(productos.map(p => p.categoria))];

  let html = `
    <button class="sidebar-link active" onclick="filtrarCategoria('TODOS', this)">
      <i class="fas fa-border-all"></i> Ver Todo
    </button>
  `;

  categorias.forEach(cat => {
    html += `
      <button class="sidebar-link" onclick="filtrarCategoria('${cat}', this)">
        <i class="fas fa-tag"></i> ${cat}
      </button>
    `;
  });

  menuContenedor.innerHTML = html;
}

// Gestionar el filtrado
function filtrarCategoria(categoria, botonSeleccionado) {
  const botones = document.querySelectorAll("#categorias-menu .sidebar-link");
  botones.forEach(btn => btn.classList.remove("active"));
  
  if(botonSeleccionado) {
    botonSeleccionado.classList.add("active");
  }

  mostrarCatalogo(categoria);

  const seccion = document.getElementById("catalogo-section");
  if(seccion) {
    seccion.scrollIntoView({ behavior: "smooth" });
  }
}

function mostrarCatalogo(filtroCategoria = "TODOS") {
  const contenedor = document.getElementById("catalogo");
  if (!contenedor) return; 
  contenedor.innerHTML = "";

  let categoriasAPintar = [...new Set(productos.map(p => p.categoria))];
  if (filtroCategoria !== "TODOS") {
    categoriasAPintar = [filtroCategoria];
  }

  categoriasAPintar.forEach(cat => {
    const productosDeCategoria = productos.filter(p => p.categoria === cat);
    if(productosDeCategoria.length === 0) return;

    let html = `<h4 class="titulo-categoria"><i class="fas fa-tag me-2"></i>${cat}</h4>`;
    html += `<div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 mb-4">`;

    productosDeCategoria.forEach(p => {
      html += `
        <div class="col">
          <div class="card d-flex flex-column justify-content-between">
            <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}" 
                 onerror="this.src='https://via.placeholder.com/400x180/5B383E/AC7B7B?text=Sin+imagen'">
            <div class="card-body d-flex flex-column justify-content-between flex-grow-1">
              <div>
                <h6 class="card-title fw-bold">${p.nombre}</h6>
                <p class="card-text mb-2">${p.detalle}</p>
              </div>
              <div>
                <p class="precio-tag mb-2">Bs. ${p.precio}</p>
                <button class="btn-añadir" onclick="añadirAlCarrito(${p.id})">
                  <i class="fas fa-cart-plus me-1"></i> Añadir
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    contenedor.innerHTML += html;
  });
}

function añadirAlCarrito(idProducto) {
  const producto = productos.find(p => p.id === idProducto);
  const yaEsta = carrito.find(item => item.id === idProducto);

  if (yaEsta) {
    yaEsta.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  actualizarCarrito();
  mostrarNotificacion(producto.nombre);
}

function eliminarDelCarrito(idProducto) {
  carrito = carrito.filter(item => item.id !== idProducto);
  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

function actualizarCarrito() {
  const badge = document.getElementById("badge-carrito");
  if(badge) {
    const totalItems = carrito.reduce((suma, item) => suma + item.cantidad, 0);
    badge.textContent = totalItems;
  }

  const total = carrito.reduce((suma, item) => suma + (item.precio * item.cantidad), 0);

  const lista = document.getElementById("lista-carrito");
  const totalTexto = document.getElementById("total-carrito");
  const carritoFooter = document.getElementById("carrito-footer");

  if (!lista) return;

  if (carrito.length === 0) {
    lista.innerHTML = `
      <p class="carrito-vacio">
        <i class="fas fa-shopping-cart fa-2x mb-3 d-block"></i>
        Tu carrito está vacío
      </p>`;
    if(carritoFooter) carritoFooter.style.display = "none";
  } else {
    lista.innerHTML = "";
    carrito.forEach(item => {
      lista.innerHTML += `
        <div class="carrito-item">
          <div class="carrito-item-nombre">${item.nombre} x${item.cantidad}</div>
          <div class="carrito-item-precio">Bs. ${item.precio * item.cantidad}</div>
          <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.id})" title="Eliminar">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      `;
    });
    if(totalTexto) totalTexto.innerHTML = `Total: <span>Bs. ${total}</span>`;
    if(carritoFooter) carritoFooter.style.display = "block";
  }
}

function abrirCarrito() {
  const panel = document.getElementById("panel-carrito");
  const overlay = document.getElementById("overlay-carrito");
  if(panel && overlay) {
    panel.classList.add("abierto");
    overlay.classList.add("abierto");
  }
}

function cerrarCarrito() {
  const panel = document.getElementById("panel-carrito");
  const overlay = document.getElementById("overlay-carrito");
  if(panel && overlay) {
    panel.classList.remove("abierto");
    overlay.classList.remove("abierto");
  }
}

function mostrarNotificacion(nombreProducto) {
  const notif = document.getElementById("notificacion");
  if(!notif) return;
  notif.textContent = `✓ "${nombreProducto}" añadido al carrito`;
  notif.style.display = "block";

  setTimeout(() => {
    notif.style.display = "none";
  }, 2000);
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }
  carrito = [];
  localStorage.removeItem("carrito");
  actualizarCarrito(); 
  window.location.href = "compra-exitosa.html";
}

// Inicialización controlada para entornos multi-página
document.addEventListener("DOMContentLoaded", function () {
  generarMenuCategorias();
  mostrarCatalogo();
  actualizarCarrito();
});