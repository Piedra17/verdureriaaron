const productos = [
    {
        nombre: "Fresas",
        categoria: "frutas",
        imagen: "contenido/fotos/cajafresas.png",
        descripcion: "Fruta dulce y jugosa, cultivada localmente. Perfecta para postres, batidos y meriendas saludables.",
        modalId: "modalFresas"
    },
    {
        nombre: "Aguacate",
        categoria: "frutas",
        imagen: "inventario/Aguacate.png",
        descripcion: "Fruto cremoso y versátil. Ideal para ensaladas, tostadas y guacamoles llenos de sabor y nutrientes.",
        modalId: "modalAguacate"
    },
    {
        nombre: "Mandarina",
        categoria: "frutas",
        imagen: "inventario/Mandarina.png",
        descripcion: "Cítrico dulce y refrescante, perfecto para un snack natural o jugos llenos de vitamina C.",
        modalId: "modalMandarina"
    },
    {
        nombre: "Mandarina agria",
        categoria: "frutas",
        imagen: "inventario/Mandarina Agria.png",
        descripcion: "Ideal para aderezos, marinados o bebidas. Su sabor ácido aporta un toque único y tradicional.",
        modalId: "modalMandarinaAgria"
    },
    {
        nombre: "Naranja",
        categoria: "frutas",
        imagen: "inventario/Naranja.png",
        descripcion: "Refrescante y dulce, rica en vitamina C. Perfecta para jugos o acompañar tus desayunos.",
        modalId: "modalNaranja"
    },
    {
        nombre: "Banano",
        categoria: "frutas",
        imagen: "inventario/Banano.png",
        descripcion: "Energético y natural. Ideal para batidos, postres o como snack antes del ejercicio.",
        modalId: "modalBanano"
    },
    {
        nombre: "Piña",
        categoria: "frutas",
        imagen: "inventario/Piña.png",
        descripcion: "Dulce y tropical, con un aroma irresistible. Perfecta para jugos, ensaladas o postres frescos.",
        modalId: "modalPiña"
    },
    {
        nombre: "Sandía",
        categoria: "frutas",
        imagen: "inventario/Sandia.png",
        descripcion: "Refrescante y jugosa, ideal para los días calurosos. Rica en agua y antioxidantes.",
        modalId: "modalSandia"
    },
    {
        nombre: "Papaya",
        categoria: "frutas",
        imagen: "inventario/Papaya.png",
        descripcion: "Suave, dulce y digestiva. Perfecta para desayunos y jugos naturales.",
        modalId: "modalPapaya"
    },
    {
        nombre: "Manzana Gala",
        categoria: "frutas",
        imagen: "inventario/ManzanaGala.png",
        descripcion: "Crujiente, jugosa y naturalmente dulce. Excelente para meriendas saludables.",
        modalId: "modalManzanaGala"
    },
    {
        nombre: "Guineo",
        categoria: "frutas",
        imagen: "inventario/Guineo.png",
        descripcion: "Fruta tropical suave y dulce. Ideal para jugos, repostería o para comer al natural.",
        modalId: "modalGuineo"
    },


    //verduras

    {
        nombre: "Lechuga",
        categoria: "verduras",
        imagen: "inventario/Lechuga.png",
        descripcion: "Fresca y crujiente, perfecta para ensaladas y acompañamientos ligeros.",
        modalId: "modalLechuga"
    },
    {
        nombre: "Repollo Verde",
        categoria: "verduras",
        imagen: "inventario/RepolloVerde.png",
        descripcion: "Hojas firmes y frescas. Ideal para ensaladas, sopas o fermentados como el chucrut.",
        modalId: "modalRepolloVerde"
    },
    {
        nombre: "Repollo Morado",
        categoria: "verduras",
        imagen: "inventario/Repollo morado.png",
        descripcion: "De color intenso y textura crujiente. Ideal para ensaladas o salteados llenos de color.",
        modalId: "modalRepolloMorado"
    },
    {
        nombre: "Espinaca",
        categoria: "verduras",
        imagen: "inventario/Espinaca.png",
        descripcion: "Rica en hierro y fibra. Perfecta para jugos verdes, ensaladas o platos salteados.",
        modalId: "modalEspinaca"
    },
    {
        nombre: "Acelga",
        categoria: "verduras",
        imagen: "inventario/Acelga.png",
        descripcion: "Hojas verdes nutritivas con un toque suave. Ideal para guisos, sopas o tortillas.",
        modalId: "modalAcelga"
    },
    {
        nombre: "Cebolla blanca",
        categoria: "verduras",
        imagen: "inventario/cebolla blanca.png",
        descripcion: "Base esencial en la cocina. De sabor suave, ideal para guisos y salsas.",
        modalId: "modalCebollaBlanca"
    },
    {
        nombre: "Cebolla morada",
        categoria: "verduras",
        imagen: "inventario/cebolla morada.png",
        descripcion: "Sabor dulce y color vibrante. Perfecta para ensaladas, ceviches y tacos.",
        modalId: "modalCebollaMorada"
    },
    {
        nombre: "Cebollino",
        categoria: "verduras",
        imagen: "inventario/cebollino.png",
        descripcion: "Delicado y aromático. Aporta frescura a sopas, huevos y platos gourmet.",
        modalId: "modalCebollino"
    },
    {
        nombre: "Ajo malla",
        categoria: "verduras",
        imagen: "inventario/ajo malla.png",
        descripcion: "Aromático y esencial. Da sabor y profundidad a cualquier platillo.",
        modalId: "modalAjoMalla"
    },
    {
        nombre: "Jengibre",
        categoria: "verduras",
        imagen: "inventario/Jengibre.png",
        descripcion: "Picante y fragante. Ideal para infusiones, marinados o platos orientales.",
        modalId: "modalJengibre"
    },
    {
        nombre: "Cúrcuma",
        categoria: "verduras",
        imagen: "inventario/Curcuma.png",
        descripcion: "Raíz dorada con propiedades antiinflamatorias. Perfecta para currys o bebidas saludables.",
        modalId: "modalCurcuma"
    },
    {
        nombre: "Tomate",
        categoria: "verduras",
        imagen: "inventario/Tomate.png",
        descripcion: "Jugoso y lleno de sabor. Base de salsas, ensaladas y guisos.",
        modalId: "modalTomate"
    },
    {
        nombre: "Tomate cherry",
        categoria: "verduras",
        imagen: "inventario/cherry.png",
        descripcion: "Pequeños, dulces y coloridos. Ideales para ensaladas o aperitivos.",
        modalId: "modalCherry"
    },
    {
        nombre: "Chile dulce",
        categoria: "verduras",
        imagen: "inventario/chile.png",
        descripcion: "Aromático y colorido. Aporta dulzura natural a guisos y salteados.",
        modalId: "modalChile"
    },
    {
        nombre: "Berenjena",
        categoria: "verduras",
        imagen: "inventario/Berenjena.png",
        descripcion: "Suave y versátil. Ideal para asar, hornear o preparar lasañas vegetales.",
        modalId: "modalBerenjena"
    },
    {
        nombre: "Zanahoria",
        categoria: "tubérculos",
        imagen: "inventario/Zanahoria.png",
        descripcion: "Crujiente y naturalmente dulce. Rica en betacarotenos y perfecta en ensaladas o sopas.",
        modalId: "modalZanahoria"
    },
    {
        nombre: "Pepino",
        categoria: "verduras",
        imagen: "inventario/Pepino.png",
        descripcion: "Refrescante y ligero. Ideal para ensaladas, jugos o snacks saludables.",
        modalId: "modalPepino"
    },
    {
        nombre: "Ayote tierno",
        categoria: "verduras",
        imagen: "inventario/ayote tierno.png",
        descripcion: "Suave y delicado. Perfecto para sopas, cremas o hervido con un toque de sal.",
        modalId: "modalAyoteTierno"
    },
    {
        nombre: "Ayote sazón",
        categoria: "verduras",
        imagen: "inventario/ayote sazon.png",
        descripcion: "De textura firme y sabor profundo. Ideal para picadillos o platos al horno.",
        modalId: "modalAyoteSazon"
    },
    {
        nombre: "Chayote",
        categoria: "verduras",
        imagen: "inventario/chayote.png",
        descripcion: "Verdura suave y ligera. Clásico en sopas, hervidos o picadillos costarricenses.",
        modalId: "modalChayote"
    },
    {
        nombre: "Brócoli",
        categoria: "verduras",
        imagen: "inventario/brocoli.png",
        descripcion: "Ramilletes verdes ricos en fibra y vitaminas. Delicioso al vapor o salteado.",
        modalId: "modalBrocoli"
    },
    {
        nombre: "Coliflor",
        categoria: "verduras",
        imagen: "inventario/coliflor.png",
        descripcion: "Textura suave y sabor delicado. Ideal para guisos, purés o al horno.",
        modalId: "modalColiflor"
    },
    {
        nombre: "Apio",
        categoria: "verduras",
        imagen: "inventario/apio.png",
        descripcion: "Tallo fresco y crocante. Ideal para jugos verdes, sopas o snacks saludables.",
        modalId: "modalApio"
    },
    {
        nombre: "Elote",
        categoria: "verduras",
        imagen: "inventario/elote.png",
        descripcion: "Dulce y tierno. Perfecto para asar, hervir o preparar deliciosos elotes con mantequilla.",
        modalId: "modalElote"
    },
    {
        nombre: "Vainica",
        categoria: "verduras",
        imagen: "inventario/Vainica.png",
        descripcion: "Tierna y saludable. Ideal para guisos, ensaladas o salteados caseros.",
        modalId: "modalVainica"
    },
    {
        nombre: "Plátano",
        categoria: "frutas",
        imagen: "inventario/Platano.png",
        descripcion: "Versátil y delicioso. Perfecto maduro para freír o verde para tostones.",
        modalId: "modalPlatano"
    },


    //tuberculos
    {
        nombre: "Papa",
        categoria: "tubérculos",
        imagen: "inventario/Papa.png",
        descripcion: "Clásico de la cocina. Versátil y nutritiva, perfecta para purés, sopas o frituras.",
        modalId: "modalPapa"
    },
    {
        nombre: "Camote",
        categoria: "tubérculos",
        imagen: "inventario/comote.png",
        descripcion: "Dulce y lleno de energía. Excelente para hornear, asar o hacer puré.",
        modalId: "modalCamote"
    },
    {
        nombre: "Yuca",
        categoria: "tubérculos",
        imagen: "inventario/Yuca.png",
        descripcion: "Raíz tropical con sabor suave. Ideal para hervir, freír o preparar enyucados.",
        modalId: "modalYuca"
    },
    {
        nombre: "Ñampi",
        categoria: "tubérculos",
        imagen: "inventario/ñanpi.png",
        descripcion: "De textura suave y sabor neutro. Ideal para sopas o hervidos tradicionales.",
        modalId: "modalÑampi"
    },
    {
        nombre: "Rábano",
        categoria: "tubérculos",
        imagen: "inventario/Rabano.png",
        descripcion: "Crujiente y ligeramente picante. Perfecto para ensaladas frescas o guarniciones.",
        modalId: "modalRabano"
    },
    {
        nombre: "Remolacha",
        categoria: "tubérculos",
        imagen: "inventario/Remolacha.png",
        descripcion: "Color intensa y sabor dulce. Excelente para ensaladas, jugos y guarniciones.",
        modalId: "modalRemolacha"
    },

    //Olores
    {
        nombre: "Culantro",
        categoria: "hierbas aromáticas",
        imagen: "inventario/culantro.png",
        descripcion: "Aromático y fresco. Esencial en la cocina costarricense para dar sabor a todo tipo de comidas.",
        modalId: "modalCulantro"
    },
    {
        nombre: "Culantro coyote",
        categoria: "hierbas aromáticas",
        imagen: "inventario/culantro coyote.png",
        descripcion: "Sabor intenso y auténtico. Perfecto para sopas, arroces y guisos tradicionales.",
        modalId: "modalCoyote"
    },
    {
        nombre: "Perejil",
        categoria: "hierbas aromáticas",
        imagen: "inventario/Peregil.png",
        descripcion: "Herbácea y fresca. Ideal para decorar y realzar el sabor de tus comidas.",
        modalId: "modalPeregil"
    },
    {
        nombre: "Albahaca",
        categoria: "hierbas aromáticas",
        imagen: "inventario/Albahaca.png",
        descripcion: "Hoja fragante y dulce. Perfecta para pastas, pizzas y salsas italianas.",
        modalId: "modalAlbahaca"
    },
    {
        nombre: "Tomillo",
        categoria: "hierbas aromáticas",
        imagen: "inventario/Tomillo.png",
        descripcion: "Aroma fuerte y terroso. Ideal para carnes, sopas y guisos con sabor profundo.",
        modalId: "modalTomillo"
    },
    {
        nombre: "Romero",
        categoria: "hierbas aromáticas",
        imagen: "inventario/Romero.png",
        descripcion: "Fragancia intensa y refrescante. Excelente para asados, panes y aderezos.",
        modalId: "modalRomero"
    },
    {
        nombre: "Hierbabuena",
        categoria: "hierbas aromáticas",
        imagen: "inventario/Hierbabuena.png",
        descripcion: "Refrescante y suave. Ideal para infusiones, postres o cócteles naturales.",
        modalId: "modalHierbabuena"
    },
    {
        nombre: "Estragón",
        categoria: "hierbas aromáticas",
        imagen: "inventario/Estragon.png",
        descripcion: "Sabor delicado y anisado. Perfecto para salsas y pescados.",
        modalId: "modalEstragon"
    },
    {
        nombre: "Orégano",
        categoria: "hierbas aromáticas",
        imagen: "inventario/Oregano.png",
        descripcion: "Aromático y esencial en la cocina mediterránea. Ideal para pizzas y guisos.",
        modalId: "modalOregano"
    },
    {
        nombre: "Menta",
        categoria: "hierbas aromáticas",
        imagen: "inventario/Menta.png",
        descripcion: "Fresca y perfumada. Ideal para bebidas frías, postres o platos exóticos.",
        modalId: "modalMenta"
    },

    //Lacteos
    {
        nombre: "Queso",
        categoria: "lacteos",
        imagen: "inventario/Queso.png",
        descripcion: "Fresco y artesanal. Ideal para acompañar tus comidas o disfrutar con tortillas recién hechas.",
        modalId: "modalQueso"
    },
    {
        nombre: "Natilla",
        categoria: "lacteos",
        imagen: "inventario/Natilla.png",
        descripcion: "Suave y cremosa. Perfecta para acompañar gallos, tortillas o papas asadas.",
        modalId: "modalNatilla"
    }
];
