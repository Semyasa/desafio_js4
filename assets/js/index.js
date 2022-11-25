let propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  },
  {
    name: "Casa Pre-fabricada",
    description: "La cabaña ideal para tu descanso",
    src:
      "https://casasanalberto.com/wp-content/uploads/2020/07/54mts-2aguas.jpg",
    rooms: 3,
    m: 48
  }
];

botonBuscar = document.getElementById("botonBus");
botonBuscar.addEventListener("click", function () {

  let cuartos = document.getElementById("cuartos").value;
  let desde = document.getElementById("desde").value;
  let hasta = document.getElementById("hasta").value;

  if (cuartos == "" || desde == "" || hasta == "") {

    alert("Faltan campos por llenar");

  } else {

    let mostrar = ""
    let contador = 0

    for (let propiedad of propiedadesJSON) {

      if (propiedad.rooms == cuartos && propiedad.m <= hasta && propiedad.m >= desde) {

        mostrar += `<div class="propiedad">
       <div class="img" style="background-image: url('${propiedad.src}')"></div>
       <section>
           <h5>${propiedad.name}</h5>
           <h6>${propiedad.description}</h6>
           <div class="d-flex justify-content-between">
               <p class="m-3">Metros: ${propiedad.m}</p>
               <p class="m-3">Cuartos: ${propiedad.rooms}</p>
           </div>
           <p class="my-3">Casas a la venta</p>
           <button class="btn btn-info ">Ver más</button>
       </section>
        </div>`

        contador = contador + 1;

      }
    }

    let contenedorPropiedades = document.getElementById("propiedades");
    contenedorPropiedades.innerHTML = mostrar;

    let contadorProp = document.getElementById("contadorPropiedades");
    contadorProp.innerHTML = contador;
  }

});
