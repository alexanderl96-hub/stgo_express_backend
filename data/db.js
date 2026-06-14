// export const customers = [];
export const orders = [
      { 
    customerId: 1,
    name: "Carlos Méndez",
    email: "carlos@gmail.com",
    phone: "5351234567",
    password: "carlos_Mendez",
    birthday: "12/05/1988",
    imagen: "",
    address: "Habana Vieja, La Habana, Cuba",
    userCreate: "4/29/2025, 07:18:57 PM",
    qrcode: "ORDER1QR",

    order: [
      { 
        id: 10156776543,
        qrcode: "ORDER1QR",
        admInCharge: "Lisandra Ojeda",
        gestorSell: "Daniela Paniagua",
        orders: [
          { name: "Zapatos Deportivos", 
            qty: 1, 
            price: 45, 
            img: ["/images/zapatos/hombres/Jordan_Copy_1/Jordan_Copy1_blue.avif"], 
            qrcode: "QR1",
            color: "red"
         },
          { name: "Camiseta Nike", 
            qty: 2, 
            price: 20, 
            img: ["/images/zapatos/hombres/Jordan_Copy_1/Jordan_Copy1_red.avif"], 
            qrcode: "QR2",
            color: "green" 
         }
        ],
        dollarPrice: 85,
        cupPrice: 43350,
        revenewTotal: 48350,
        sellerCash: 2000,
        date: "1/29/2026, 10:18:57 AM",
        paymentFormat: "Transferencia",
        paymentOption: "En Persona",
        statusSell: "Pendiente"
      }
    ],

    orderProccess: [
      { 
        id: 10156776543,
        qrcode: "ORDER1QR",
        admInCharge: "Lisandra Ojeda",
        gestorSell: "Daniela Paniagua",
        orders: [
          { name: "Zapatos Deportivos", 
            qty: 1, 
            price: 45, 
            img: ["/images/zapatos/hombres/Jordan_Copy_1/Jordan_Copy1_blue.avif"], 
            qrcode: "QR1" 
         },
          { name: "Camiseta Nike", 
            qty: 2, 
            price: 20, 
            img: ["/images/zapatos/hombres/Jordan_Copy_1/Jordan_Copy1_red.avif"], 
            qrcode: "QR2" }
        ],
        dollarPrice: 85,
        cupPrice: 43350,
        revenewTotal: 48350,
        sellerCash: 2000,
        date: "1/29/2026, 10:18:57 AM",
        paymentFormat: "Transferencia",
        paymentOption: "En Persona",
        statusSell: "Por pagar"
      }
    ],

    delivered: [
      { 
        id: 10156776543,
        qrcode: "ORDER1QR",
        admInCharge: "Lisandra Ojeda",
        gestorSell: "Daniela Paniagua",
        orders: [
          { name: "Zapatos Deportivos", 
            qty: 1, 
            price: 45, 
            img: ["/images/zapatos/hombres/Jordan_Copy_1/Jordan_Copy1_blue.avif"], 
            qrcode: "QR1" 
         },
          { name: "Camiseta Nike", 
            qty: 2, 
            price: 20, 
            img: ["/images/zapatos/hombres/Jordan_Copy_1/Jordan_Copy1_red.avif"], 
            qrcode: "QR2" }
        ],
        dollarPrice: 85,
        cupPrice: 43350,
        revenewTotal: 48350,
        sellerCash: 2000,
        date: "1/29/2026, 10:18:57 AM",
        paymentFormat: "Transferencia",
        paymentOption: "En Persona",
        statusSell: "Pagada"
      }
    ]
  },

  { 
    customerId: 2,
    name: "Ana Rodríguez",
    email: "ana@gmail.com",
    phone: "5357654321",
    password: "ana_rodriguez",
    birthday: "08/14/1992",
    imagen: "",
    address: "Santiago de Cuba",
    userCreate: "3/15/2025, 02:10:11 PM",
    qrcode: "ORDER2QR",
    order: [
      { 
        id: 20234567891,
        qrcode: "ORDER2QR",
        admInCharge: "Yonelkis Ávila",
        gestorSell: "Daniela Ávila",
        orders: [
          { name: "Bolso Mujer", 
            qty: 1, 
            price: 30, 
            img: ["/images/accesorios/hombres/Guantillas_Deportivas/Sport/sport_blue.avif"], 
            qrcode: "QR3" }
        ],
        dollarPrice: 30,
        cupPrice: 15300,
        revenewTotal: 17300,
        sellerCash: 2000,
        date: "2/10/2026, 11:00:00 AM",
        paymentFormat: "Efectivo",
        paymentOption: "Domicilio",
        statusSell: "Pendiente"
      }
    ],

    orderProccess: [
      { 
        id: 20234567891,
        qrcode: "ORDER2QR",
        admInCharge: "Yonelkis Ávila",
        gestorSell: "Daniela Ávila",
        orders: [
          { name: "Bolso Mujer", 
            qty: 1, price: 30, 
            img: ["/images/accesorios/hombres/Guantillas_Deportivas/Sport/sport_blue.avif"], 
            qrcode: "QR3" }
        ],
        dollarPrice: 30,
        cupPrice: 15300,
        revenewTotal: 17300,
        sellerCash: 2000,
        date: "2/10/2026, 11:00:00 AM",
        paymentFormat: "Efectivo",
        paymentOption: "Delivery",
        statusSell: "Por pagar"
      }
    ],

    delivered: [
      { 
        id: 20234567891,
        qrcode: "ORDER2QR",
        admInCharge: "Yonelkis Ávila",
        gestorSell: "Daniela Ávila",
        orders: [
          { name: "Bolso Mujer", 
            qty: 1, price: 30, 
            img: ["/images/accesorios/hombres/Guantillas_Deportivas/Sport/sport_blue.avif"], 
            qrcode: "QR3" }
        ],
        dollarPrice: 30,
        cupPrice: 15300,
        revenewTotal: 17300,
        sellerCash: 2000,
        date: "2/10/2026, 11:00:00 AM",
        paymentFormat: "Efectivo",
        paymentOption: "Delivery",
        statusSell: "Pagada"
      }
    ]
  },

  { 
    customerId: 3,
    name: "Luis Fernández",
    email: "luis@email.com",
    phone: "5359988776",
    password: "luis_fernandez",
    birthday: "05/22/1985",
    imagen: "",
    address: "Camagüey",
    userCreate: "2/01/2025, 09:45:00 AM",
    qrcode: "ORDER3QR",
    order: [
      { 
        id: 30345678912,
        qrcode: "ORDER3QR",
        admInCharge: "Daniela Paniagua",
        gestorSell: "Yonelkis Ávila",
        orders: [
          { name: "Reloj Casio", qty: 1, price: 25, img: ["/img/watch.jpg"], qrcode: "QR4" }
        ],
        dollarPrice: 25,
        cupPrice: 12750,
        revenewTotal: 14750,
        sellerCash: 2000,
        date: "2/20/2026, 03:30:00 PM",
        paymentFormat: "Transferencia",
        paymentOption: "En Persona",
        statusSell: "Pendiente"
      }
    ],

    orderProccess: [
      { 
        id: 30345678912,
        qrcode: "ORDER3QR",
        admInCharge: "Daniela Paniagua",
        gestorSell: "Yonelkis Ávila",
        orders: [
          { name: "Reloj Casio", qty: 1, price: 25, img: ["/img/watch.jpg"], qrcode: "QR4" }
        ],
        dollarPrice: 25,
        cupPrice: 12750,
        revenewTotal: 14750,
        sellerCash: 2000,
        date: "2/20/2026, 03:30:00 PM",
        paymentFormat: "Transferencia",
        paymentOption: "En Persona",
        statusSell: "Por pagar"
      }
    ],

    delivered: [
      { 
        id: 30345678912,
        qrcode: "ORDER3QR",
        admInCharge: "Daniela Paniagua",
        gestorSell: "Yonelkis Ávila",
        orders: [
          { name: "Reloj Casio", qty: 1, price: 25, img: ["/img/watch.jpg"], qrcode: "QR4" }
        ],
        dollarPrice: 25,
        cupPrice: 12750,
        revenewTotal: 14750,
        sellerCash: 2000,
        date: "2/20/2026, 03:30:00 PM",
        paymentFormat: "Transferencia",
        paymentOption: "En Persona",
        statusSell: "Pagada"
      }
    ]
  }
];
// export const users = [];
export const categoryData = [
  {
    id: "ropa",
    name: "Ropa",
    personInCharge: "Yonelkis Ávila",
    subCategories: [
      "Shorts",
      "Vestidos",
      "Pantalones",
      "Jeans",
      "Blusas",
      "Pulóveres",
      "Bikinis",
      "Medias Hombre",
      "Medias Mujer",
      "Enterizos"
    ],
    filters: ["tipo", "nombre", "categoria", "color", "marca", "talla", "largo", "tienda", "precio", "descuento", "rating", "sexo", "edad"]
  },

  {
    id: "zapatos",
    name: "Zapatos",
    personInCharge: "Yonelkis Ávila",
    subCategories: ["Botas", "Sandalias", "Zapatillas", "Tacones", "Chancletas"],
    filters: ["talla", "color", "material", "marca", "descuento"]
  },

  {
    id: "joyeria",
    name: "Joyería",
    personInCharge: "Yonelkis Ávila",
    subCategories: ["Anillos", "Cadenas", "Aretes", "Brazaletes", "Relojes"],
    filters: ["material", "color", "sexo", "edad", "descuento"]
  },

  {
    id: "bolsos",
    name: "Bolsos",
    personInCharge: "Yonelkis Ávila",
    subCategories: ["Bolsos de Mano", "Mochilas", "Maletas", "Carteras", "Billeteras", "Loncheras"],
    filters: ["color", "edad", "material", "sexo", "descuento"]
  },

  {
    id: "accesorios",
    name: "Accesorios",
    personInCharge: "Yonelkis Ávila",
    subCategories: [
      "Cinturones",
      "Gorras",
      "Gafas",
      "Cintillos",
      "Ligas",
      "Felpas",
      "Pasadores",
      "Pulseras",
      "Gemelos",
      "Sombreros"
    ],
    filters: ["color", "marca", "material", "sexo", "descuento"]
  },

  {
    id: "maquillaje",
    name: "Maquillaje",
    personInCharge: "Lisandra Ojeda",
    subCategories: [
      "Gloss",
      "Base en Polvo",
      "Base Líquida",
      "Lápices",
      "Exfoliante",
      "Esponjas",
      "Brochas",
      "Sombras",
      "Iluminador",
      "Delineadores",
      "Rímel"
    ],
    filters: ["marca", "color", "descuento"]
  },

  {
    id: "pelo",
    name: "Productos de Pelo",
    personInCharge: "Lisandra Ojeda",
    subCategories: [
      "Shampoo",
      "Acondicionador",
      "Aceites",
      "Keratina",
      "Mascarillas",
      "Tintes",
      "Peróxido",
      "Decoloración"
    ],
    filters: ["tipoPelo", "marca", "color", "volumen", "tratamiento", "descuento"]
  },

  {
    id: "unas",
    name: "Productos de Uñas",
    personInCharge: "Lisandra Ojeda",
    subCategories: [
      "Acrílico",
      "Líquido Acrílico",
      "Uñas",
      "Decoraciones",
      "Piedras",
      "Pinceles",
      "Gel Lento",
      "Gel Rápido",
      "Polvos",
      "Pintura Gel",
      "Acetona",
      "Limas",
      "Antihongos",
      "Alicate",
      "Polygel",
      "Removedor Cutícula"
    ],
    filters: ["numero", "marca", "tipo", "descuento"]
  },

  {
    id: "equipos",
    name: "Equipos",
    personInCharge: "Lisandra Ojeda",
    subCategories: [
      "Herramientas de Uñas",
      "Ventiladores",
      "Tenazas",
      "Secadores",
      "Lavadoras",
      "Bocinas",
      "Planchas",
      "EcoFlow",
      "Refrigeradores",
      "Arroceras",
      "Multipropósito",
      "TV",
      "Cafeteras",
      "Microondas",
      "Cocinas",
      "Linternas"
    ],
    filters: ["marca", "tipo", "descuento"]
  },

  {
    id: "electronicos",
    name: "Electrónicos",
    personInCharge: "Lisandra Ojeda",
    subCategories: [
      "Tablet",
      "Laptop",
      "Móviles",
      "Xbox",
      "Nintendo",
      "PlayStation",
      "Audífonos",
      "Cables",
      "Extensiones"
    ],
    filters: ["marca", "descuento"]
  }
];
export const colorMap = {
  black: "Negro",
  white: "Blanco",
  red: "Rojo",
  blue: "Azul",
  green: "Verde",
  yellow: "Amarillo",
  pink: "Rosado",
  purple: "Morado",
  darkPurple: "Morado Oscuro",
  gray: "Gris",
  brown: "Marrón",
  orange: "Naranja",
  gold: "Dorado",
  silver: "Plateado"
};
export const administrador = [
  { 
    id: 1,
    name: "Jonelkis Àvila",
    phone: "5356428430",
    password: "Yuni_85*",
    email: "yuni85avila@gmail.com",
    birthday: "12/07/1985",
    address: "Mariana Grajales #810 Reparto La Risueña, Santiago de Cuba, Cuba",
    job: "Administradora / Dependienta",
    role: "admin"
  },
  {
    id: 2,
    name: "Lisandra Ojeda",
    phone: "5350031672",
    password: "Lis@1608",
    email: "lisandraojedasalmon@gmail.com",
    birthday: "8/16/2000",
    address: "Calle 5ta Ducoreaux #62 El Caney, Santiago de Cuba, Cuba",
    job: "Administradora / Dependienta",
    role: "admin"
  },
  {
    id: 3,
    name: "Daniela Paniagua",
    phone: "5358753021",
    password: "dani@angels_04",
    email: "dp5460566@gmail.com",
    birthday: "10/04/2009",
    address: "Mariana Grajales #810 Reparto La Risueña, Santiago de Cuba, Cuba",
    job: "Gestora de Ventas",
    role: "gestor"
  },
  {
    id: 4,
    name: "Gabriela Rocío",
    phone: "5353566340",
    password: "rocio12345@",
    email: "rocio07rocio@gmail.com",
    birthday: "8/16/2007",
    address: "Mariana Grajales #13, entre A y C, Petrocasa, Santiago de Cuba, Cuba",
    job: "Gestora de Ventas",
    role: "gestor"
  },
  {
    id: 5,
    name: "Denis Ernesto",
    phone: "5363191892",
    password: "denis@ernesto2011",
    email: "denis11ernesto@gmail.com",
    birthday: "1/11/2011",
    address:  "Mariana Grajales #810 Reparto La Risueña, Santiago de Cuba, Cuba",
    job: "Gestor de Venta",
    role: "admin"
  },
  {
     id: 6,
    name: "Silvia Vilma",
    phone: "5354333471",
    password: "silvia_vilma",
    email: "oyaladde53@gmail.com",
    birthday: "11/03/1963",
    address: "Mariana Grajales #840 Reparto La Risueña, Santiago de Cuba, Cuba",
    job: "Administradora / Contadora",
    role: "admin"
  },
  {
    id: 7,
    name: "Alexander La Rosa",
    phone: "5350332088",
    password: "echu3_nigue",
    email: "alexander.lrperez@gmail.com",
    birthday: "5/27/1987",
    address: "Mariana Grajales #840 Reparto La Risueña, Santiago de Cuba, Cuba",
    job: "Administrador",
    role: "admin"
  }
];
export const users = [
  { 
    customerId: 1,
    name: "Carlos Méndez",
    email: "carlos@gmail.com",
    phone: "5351234567",
    password: "carlos_Mendez",
    birthday: "12/05/1988",
    imagen: "",
    address: "Habana Vieja, La Habana, Cuba",
    userCreate: "4/29/2025, 07:18:57 PM",
    role: "users",

    order: [
      { 
        id: 10156776543,
        qrcode: "ORDER101QR",
        admInCharge: "Lisandra Ojeda",
        gestorSell: "Daniela Paniagua",
        orders: [
          { name: "Zapatos Deportivos", 
            qty: 1, 
            price: 45, 
            img: ["/images/zapatos/hombres/Jordan_Copy_1/Jordan_Copy1_blue.avif"], 
            qrcode: "QR1" 
         },
          { name: "Camiseta Nike", 
            qty: 2, 
            price: 20, 
            img: ["/images/zapatos/hombres/Jordan_Copy_1/Jordan_Copy1_red.avif"], 
            qrcode: "QR2" }
        ],
        dollarPrice: 85,
        cupPrice: 43350,
        revenewTotal: 48350,
        sellerCash: 2000,
        date: "1/29/2026, 10:18:57 AM",
        paymentFormat: "Transferencia",
        paymentOption: "En Persona",
        statusSell: "Pendiente"
      }
    ],

    orderProccess: [
      { 
        id: 10156776543,
        qrcode: "ORDER101QR",
        admInCharge: "Lisandra Ojeda",
        gestorSell: "Daniela Paniagua",
        orders: [
          { name: "Zapatos Deportivos", 
            qty: 1, 
            price: 45, 
            img: ["/images/zapatos/hombres/Jordan_Copy_1/Jordan_Copy1_blue.avif"], 
            qrcode: "QR1" 
         },
          { name: "Camiseta Nike", 
            qty: 2, 
            price: 20, 
            img: ["/images/zapatos/hombres/Jordan_Copy_1/Jordan_Copy1_red.avif"], 
            qrcode: "QR2" }
        ],
        dollarPrice: 85,
        cupPrice: 43350,
        revenewTotal: 48350,
        sellerCash: 2000,
        date: "1/29/2026, 10:18:57 AM",
        paymentFormat: "Transferencia",
        paymentOption: "En Persona",
        statusSell: "Por pagar"
      }
    ],

    delivered: [
      { 
        id: 10156776543,
        qrcode: "ORDER101QR",
        admInCharge: "Lisandra Ojeda",
        gestorSell: "Daniela Paniagua",
        orders: [
          { name: "Zapatos Deportivos", 
            qty: 1, 
            price: 45, 
            img: ["/images/zapatos/hombres/Jordan_Copy_1/Jordan_Copy1_blue.avif"], 
            qrcode: "QR1" 
         },
          { name: "Camiseta Nike", 
            qty: 2, 
            price: 20, 
            img: ["/images/zapatos/hombres/Jordan_Copy_1/Jordan_Copy1_red.avif"], 
            qrcode: "QR2" }
        ],
        dollarPrice: 85,
        cupPrice: 43350,
        revenewTotal: 48350,
        sellerCash: 2000,
        date: "1/29/2026, 10:18:57 AM",
        paymentFormat: "Transferencia",
        paymentOption: "En Persona",
        statusSell: "Pagada"
      }
    ]
  },

  { 
    customerId: 2,
    name: "Ana Rodríguez",
    email: "ana@gmail.com",
    phone: "5357654321",
    password: "ana_rodriguez",
    birthday: "08/14/1992",
    imagen: "",
    address: "Santiago de Cuba",
    userCreate: "3/15/2025, 02:10:11 PM",
    role: "users",

    order: [
      { 
        id: 20234567891,
        qrcode: "ORDER102QR",
        admInCharge: "Yonelkis Ávila",
        gestorSell: "Daniela Ávila",
        orders: [
          { name: "Bolso Mujer", 
            qty: 1, 
            price: 30, 
            img: ["/images/accesorios/hombres/Guantillas_Deportivas/Sport/sport_blue.avif"], 
            qrcode: "QR3" }
        ],
        dollarPrice: 30,
        cupPrice: 15300,
        revenewTotal: 17300,
        sellerCash: 2000,
        date: "2/10/2026, 11:00:00 AM",
        paymentFormat: "Efectivo",
        paymentOption: "Delivery",
        statusSell: "Pendiente"
      }
    ],

    orderProccess: [
      { 
        id: 20234567891,
        qrcode: "ORDER102QR",
        admInCharge: "Yonelkis Ávila",
        gestorSell: "Daniela Ávila",
        orders: [
          { name: "Bolso Mujer", 
            qty: 1, price: 30, 
            img: ["/images/accesorios/hombres/Guantillas_Deportivas/Sport/sport_blue.avif"], 
            qrcode: "QR3" }
        ],
        dollarPrice: 30,
        cupPrice: 15300,
        revenewTotal: 17300,
        sellerCash: 2000,
        date: "2/10/2026, 11:00:00 AM",
        paymentFormat: "Efectivo",
        paymentOption: "Delivery",
        statusSell: "Por pagar"
      }
    ],

    delivered: [
      { 
        id: 20234567891,
        qrcode: "ORDER102QR",
        admInCharge: "Yonelkis Ávila",
        gestorSell: "Daniela Ávila",
        orders: [
          { name: "Bolso Mujer", 
            qty: 1, price: 30, 
            img: ["/images/accesorios/hombres/Guantillas_Deportivas/Sport/sport_blue.avif"], 
            qrcode: "QR3" }
        ],
        dollarPrice: 30,
        cupPrice: 15300,
        revenewTotal: 17300,
        sellerCash: 2000,
        date: "2/10/2026, 11:00:00 AM",
        paymentFormat: "Efectivo",
        paymentOption: "Delivery",
        statusSell: "Pagada"
      }
    ]
  },

  { 
    customerId: 3,
    name: "Luis Fernández",
    email: "luis@email.com",
    phone: "5359988776",
    password: "luis_fernandez",
    birthday: "05/22/1985",
    imagen: "",
    address: "Camagüey",
    userCreate: "2/01/2025, 09:45:00 AM",
    role: "users",
    order: [
      { 
        id: 30345678912,
        qrcode: "ORDER103QR",
        admInCharge: "Daniela Paniagua",
        gestorSell: "Yonelkis Ávila",
        orders: [
          { name: "Reloj Casio", qty: 1, price: 25, img: ["/img/watch.jpg"], qrcode: "QR4" }
        ],
        dollarPrice: 25,
        cupPrice: 12750,
        revenewTotal: 14750,
        sellerCash: 2000,
        date: "2/20/2026, 03:30:00 PM",
        paymentFormat: "Transferencia",
        paymentOption: "En Persona",
        statusSell: "Pendiente"
      }
    ],

    orderProccess: [
      { 
        id: 30345678912,
        qrcode: "ORDER103QR",
        admInCharge: "Daniela Paniagua",
        gestorSell: "Yonelkis Ávila",
        orders: [
          { name: "Reloj Casio", qty: 1, price: 25, img: ["/img/watch.jpg"], qrcode: "QR4" }
        ],
        dollarPrice: 25,
        cupPrice: 12750,
        revenewTotal: 14750,
        sellerCash: 2000,
        date: "2/20/2026, 03:30:00 PM",
        paymentFormat: "Transferencia",
        paymentOption: "En Persona",
        statusSell: "Por pagar"
      }
    ],

    delivered: [
      { 
        id: 30345678912,
        qrcode: "ORDER103QR",
        admInCharge: "Daniela Paniagua",
        gestorSell: "Yonelkis Ávila",
        orders: [
          { name: "Reloj Casio", qty: 1, price: 25, img: ["/img/watch.jpg"], qrcode: "QR4" }
        ],
        dollarPrice: 25,
        cupPrice: 12750,
        revenewTotal: 14750,
        sellerCash: 2000,
        date: "2/20/2026, 03:30:00 PM",
        paymentFormat: "Transferencia",
        paymentOption: "En Persona",
        statusSell: "Pagada"
      }
    ]
  }
];
export const products = [
    {
        id: 1, 
        type: "Zapatos",
        name: "Zapatillas de Baloncesto",
        category: "Zapatillas",
        color: ["red_rojo", "white_blanco", "blue_azul"],
        brand: "Jordan",
        size: [41, 42],
        length: "",
        store: "Temu",
        likes: 0,
        dollar_price: 15,
        current_dollar_price: 510,
        price: 18000, 
        original_price: 18000, 
        total_items: 3,
        description: `Zapatillas de baloncesto de caña alta para hombre — Robustas  
        y estables, zapatillas de entrenamiento unisex con cordones, textura en el 
        arco y suela especializada — Ideales para correr, fitness, baloncesto y 
        caminar — Zapatillas de primavera/verano — El regalo perfecto para 
        hombres — Ligeras, transpirables y ergonómicas.`,
        genero: ["Hombres"],
        age: 40,
        rating: 2.0, 
        reviews: 0, 
        img: ["/images/zapatos/hombres/Jordan_Copy_1/Jordan_Copy1_blue.avif"],
        status: "normal",
        date: "01/01/2026",
        qrCode: "https://www.temu.com/women-s-autumn-winter-snow-leopard-and-red--printed-wide-leg-pants-fashion-casual--trendy-versatile-drawstring-design-elastic-waist-comfortable--stylish-modern--for-daily-wear-outing-travel-g-605604294794053.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F33dc1cfc-ce56-4c9b-83fe-6dfa1442ef53.jpg&spec_id=21263&spec_gallery_id=263533&refer_page_sn=10009&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=MTM3NQ&_oak_gallery_order=262545729%2C1791130473%2C1927697601%2C953336704%2C1247062918&_oak_mp_inf=EMW29uaz2YkBGiA1MjkzMDI3MWNmNDE0ZTUzOTYyNGU2MGZiOWVmN2U0NiC195Si2TM%3D&spec_ids=21263&search_key=pantalonetas%20de%20mujer%20largas%20anchas&refer_page_el_sn=200049&ab_scene=0&enable_vqr=1&refer_page_name=search_result&refer_page_id=10009_1776309066921_tb4gzy70yq&_x_sessn_id=lvxv466jpz",
    },
    { 
        id: 2, 
        type: "Zapatos",
        name: "Botas",
        category: "Botas",
        color: ["black_negro"],
        brand: "Addidas",
        size: [35, 37, 38],
        length: "",
        store: "Temu",
        likes: 0,
        dollarPrice: 88,
        currentDollarPrice: 510,
        price: 45000, 
        originalPrice: 45000, 
        total_Items: 4,
        description: `Botas para mujeres — Robustas  
        y estables, zapatillas de entrenamiento unisex con cordones, textura en el 
        arco y suela especializada — Ideales para correr, fitness, baloncesto y 
        caminar — Zapatillas de primavera/verano — El regalo perfecto para 
        hombres — Ligeras, transpirables y ergonómicas.`,
        genero: ["Mujeres"],
        age: 40,
        rating: 4.0, 
        reviews: 100, 
        img: [
            "/images/zapatos/mujeres/botasOne_black.jpg"
        ],
        status: "old",
        date: "25/12/2025",
        qrCode: "https://www.amazon.com/gp/cart/view.html?ref_=nav_cart",
    },
    {
        id: 3, 
        type: "Zapatos",
        name: "Zapatillas deportivas",
        category: "Zapatillas",
        color: ["black_negro", "white_blanco"],
        brand: "Jordan",
        size: [40, 42],
        length: "",
        store: "Temu",
        likes: 0,
        dollarPrice: 29,
        currentDollarPrice: 510,
        price: 15000, 
        originalPrice: 15000, 
        total_Items: 2,
        description: `Zapatillas deportivas bajas de moda para hombre 
        con cordones, diseño de rayas y suela plana, ideales para el 
        Festival de Primavera.`,
        genero: ["Hombres"],
        age: 40,
        rating: 3.0, 
        reviews: 0, 
        img: [
            "/images/zapatos/hombres/Jordan_Copy_3/Jordan_Copy3_blackAndred_1.avif", 
            "/images/zapatos/hombres/Jordan_Copy_3/Jordan_Copy3_blackAndred_2.avif",
            "/images/zapatos/hombres/Jordan_Copy_3/Jordan_Copy3_whiteAndblack.avif"
        ],
        status: "normal",
        date: "01/01/2026",
        qrCode: "https://www.temu.com/women-s-autumn-winter-snow-leopard-and-red--printed-wide-leg-pants-fashion-casual--trendy-versatile-drawstring-design-elastic-waist-comfortable--stylish-modern--for-daily-wear-outing-travel-g-605604294794053.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F33dc1cfc-ce56-4c9b-83fe-6dfa1442ef53.jpg&spec_id=21263&spec_gallery_id=263533&refer_page_sn=10009&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=MTM3NQ&_oak_gallery_order=262545729%2C1791130473%2C1927697601%2C953336704%2C1247062918&_oak_mp_inf=EMW29uaz2YkBGiA1MjkzMDI3MWNmNDE0ZTUzOTYyNGU2MGZiOWVmN2U0NiC195Si2TM%3D&spec_ids=21263&search_key=pantalonetas%20de%20mujer%20largas%20anchas&refer_page_el_sn=200049&ab_scene=0&enable_vqr=1&refer_page_name=search_result&refer_page_id=10009_1776309066921_tb4gzy70yq&_x_sessn_id=lvxv466jpz",
    },
    {
        id: 4, 
        type: "Accesorios",
        name: "Guantillas Sport",
        category: "Guantillas deportivas",
        color: ["blue_azul", "white_blanco", "green_verde", "red_rojo"],
        brand: "Sport",
        size: ["One Size"],
        length: "",
        store: "Temu",
        likes: 0,
        dollarPrice: 5,
        currentDollarPrice: 510,
        price: 2500, 
        originalPrice: 2500, 
        total_Items: 4,
        description: `1 par de guantes deportivos multifuncionales 
        de medio dedo para hombre, con almohadillas antideslizantes, 
        ideales para senderismo, gimnasio y deportes.`,
        genero: ["Hombres"],
        age: 40,
        rating: 3.0, 
        reviews: 0, 
        img: [
            "/images/accesorios/hombres/Guantillas_Deportivas/Sport/sport_blue.avif", 
            "/images/accesorios/hombres/Guantillas_Deportivas/Sport/sport_green.avif", 
            "/images/accesorios/hombres/Guantillas_Deportivas/Sport/sport_red.avif", 
            "/images/accesorios/hombres/Guantillas_Deportivas/Sport/sport_white.avif"
        ],
        status: "normal",
        date: "01/01/2026",
        qrCode: "https://www.temu.com/women-s-autumn-winter-snow-leopard-and-red--printed-wide-leg-pants-fashion-casual--trendy-versatile-drawstring-design-elastic-waist-comfortable--stylish-modern--for-daily-wear-outing-travel-g-605604294794053.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F33dc1cfc-ce56-4c9b-83fe-6dfa1442ef53.jpg&spec_id=21263&spec_gallery_id=263533&refer_page_sn=10009&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=MTM3NQ&_oak_gallery_order=262545729%2C1791130473%2C1927697601%2C953336704%2C1247062918&_oak_mp_inf=EMW29uaz2YkBGiA1MjkzMDI3MWNmNDE0ZTUzOTYyNGU2MGZiOWVmN2U0NiC195Si2TM%3D&spec_ids=21263&search_key=pantalonetas%20de%20mujer%20largas%20anchas&refer_page_el_sn=200049&ab_scene=0&enable_vqr=1&refer_page_name=search_result&refer_page_id=10009_1776309066921_tb4gzy70yq&_x_sessn_id=lvxv466jpz",
    },
    {
        id: 5, 
        type: "Accesorios",
        name: "Guantillas Outdoor",
        category: "Guantillas deportivas",
        color: ["black_negro"],
        brand: "Outdoor",
        size: ["One Size"],
        length: "",
        store: "Temu",
        likes: 0,
        dollarPrice: 4,
        currentDollarPrice: 510,
        price: 2000, 
        originalPrice: 2000, 
        total_Items: 1,
        description: `Un par de guantes deportivos de medio dedo 
        para exteriores: transpirables y duraderos, con múltiples 
        cierres de botones y un diseño texturizado para un ajuste
        perfecto. Aptos tanto para hombres como para mujeres, 
        ideales para actividades al aire libre cotidianas, 
        entrenamientos y como complemento para el fitness.`,
        genero: ["Hombres"],
        age: 40,
        rating: 3.0, 
        reviews: 0, 
        img: [
            "/images/accesorios/hombres/Guantillas_Deportivas/outdoor/outdoor_black.avif"
        ],
        status: "normal",
        date: "01/01/2026",
        qrCode: "https://www.temu.com/women-s-autumn-winter-snow-leopard-and-red--printed-wide-leg-pants-fashion-casual--trendy-versatile-drawstring-design-elastic-waist-comfortable--stylish-modern--for-daily-wear-outing-travel-g-605604294794053.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F33dc1cfc-ce56-4c9b-83fe-6dfa1442ef53.jpg&spec_id=21263&spec_gallery_id=263533&refer_page_sn=10009&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=MTM3NQ&_oak_gallery_order=262545729%2C1791130473%2C1927697601%2C953336704%2C1247062918&_oak_mp_inf=EMW29uaz2YkBGiA1MjkzMDI3MWNmNDE0ZTUzOTYyNGU2MGZiOWVmN2U0NiC195Si2TM%3D&spec_ids=21263&search_key=pantalonetas%20de%20mujer%20largas%20anchas&refer_page_el_sn=200049&ab_scene=0&enable_vqr=1&refer_page_name=search_result&refer_page_id=10009_1776309066921_tb4gzy70yq&_x_sessn_id=lvxv466jpz",
    },
    {
        id: 6, 
        type: "Joyeria",
        name: "Collar de Sirena",
        category: "Aretes",
        color: ["blue_azul", "pink_rosado", "red_rojo", 
        "white_blanco", "yellow_amarillo", "purple_morado"],
        brand: "Mermaid",
        size: ["One Size"],
        length: "",
        store: "Temu",
        likes: 0,
        dollarPrice: 6,
        currentDollarPrice: 510,
        price: 3000, 
        originalPrice: 3000, 
        total_Items: 6,
        description: `Elegante conjunto de joyería de imitación de 
        sirena con collar y pendientes, ideal para banquetes y bodas. 
        Conjunto de 2 piezas. Regalo perfecto para fiestas y 
        ocasiones especiales.`,
        genero: ["Mujeres"],
        age: 40,
        rating: 3.0, 
        reviews: 0, 
        img: [
            "/images/joyeria/Collar_Sirena/sirena_blue.avif", 
            "/images/joyeria/Collar_Sirena/sirena_blue_1.avif", 
            "/images/joyeria/Collar_Sirena/sirena_blue_2.avif", 
            "/images/joyeria/Collar_Sirena/sirena_pink.avif", 
            "/images/joyeria/Collar_Sirena/sirena_purple.avif", 
            "/images/joyeria/Collar_Sirena/sirena_red.avif",
            "/images/joyeria/Collar_Sirena/sirena_red_1.avif", 
            "/images/joyeria/Collar_Sirena/sirena_white.avif", 
            "/images/joyeria/Collar_Sirena/sirena_yellow.avif"
        ],
        status: "normal",
        date: "01/01/2026",
        qrCode: "https://www.temu.com/women-s-autumn-winter-snow-leopard-and-red--printed-wide-leg-pants-fashion-casual--trendy-versatile-drawstring-design-elastic-waist-comfortable--stylish-modern--for-daily-wear-outing-travel-g-605604294794053.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F33dc1cfc-ce56-4c9b-83fe-6dfa1442ef53.jpg&spec_id=21263&spec_gallery_id=263533&refer_page_sn=10009&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=MTM3NQ&_oak_gallery_order=262545729%2C1791130473%2C1927697601%2C953336704%2C1247062918&_oak_mp_inf=EMW29uaz2YkBGiA1MjkzMDI3MWNmNDE0ZTUzOTYyNGU2MGZiOWVmN2U0NiC195Si2TM%3D&spec_ids=21263&search_key=pantalonetas%20de%20mujer%20largas%20anchas&refer_page_el_sn=200049&ab_scene=0&enable_vqr=1&refer_page_name=search_result&refer_page_id=10009_1776309066921_tb4gzy70yq&_x_sessn_id=lvxv466jpz",
    },
    {
        id: 7, 
        type: "Accesorios",
        name: "Gafas de Sol",
        category: "Gafas",
        color: ["purple_morado","darkPurple_morado oscuro", "brown_marron", "pink_rosado"],
        brand: "Mermaid",
        size: ["One Size"],
        length: "",
        store: "Temu",
        likes: 0,
        dollarPrice: 7,
        currentDollarPrice: 510,
        price: 3500, 
        originalPrice: 3500, 
        total_Items: 4,
        description: `Gafas Solares`,
        genero: ["Mujeres"],
        age: 40,
        rating: 3.0, 
        reviews: 0, 
        img: [
            "/images/accesorios/mujeres/womanGafas_brown.avif", 
            "/images/accesorios/mujeres/womanGafas_pink.avif", 
            "/images/accesorios/mujeres/womanGafas_purple.avif", 
            "/images/accesorios/mujeres/womanGafas_darkPurple.avif"
        ],
        status: "normal",
        date: "01/01/2026",
        qrCode: "https://www.temu.com/women-s-autumn-winter-snow-leopard-and-red--printed-wide-leg-pants-fashion-casual--trendy-versatile-drawstring-design-elastic-waist-comfortable--stylish-modern--for-daily-wear-outing-travel-g-605604294794053.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F33dc1cfc-ce56-4c9b-83fe-6dfa1442ef53.jpg&spec_id=21263&spec_gallery_id=263533&refer_page_sn=10009&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=MTM3NQ&_oak_gallery_order=262545729%2C1791130473%2C1927697601%2C953336704%2C1247062918&_oak_mp_inf=EMW29uaz2YkBGiA1MjkzMDI3MWNmNDE0ZTUzOTYyNGU2MGZiOWVmN2U0NiC195Si2TM%3D&spec_ids=21263&search_key=pantalonetas%20de%20mujer%20largas%20anchas&refer_page_el_sn=200049&ab_scene=0&enable_vqr=1&refer_page_name=search_result&refer_page_id=10009_1776309066921_tb4gzy70yq&_x_sessn_id=lvxv466jpz",
    },
    {
        id: 8, 
        type: "Equipos",
        name: "EcoFlow Delta 2",
        category: "EcoFlow",
        color: ["black_negro"],
        brand: "EcoFlow",
        size: ["16cm/24cm/15cm"],
        length: "",
        store: "Temu",
        likes: 0,
        dollarPrice: 29,
        currentDollarPrice: 510,
        price: 15000, 
        originalPrice: 15000, 
        total_Items: 1,
        description: `EcoFlow Delta 2`,
        genero: ["Unisex"],
        age: 40,
        rating: 4.2, 
        reviews: 0, 
        img: [
            "/images/equipos/EcoFlow/Delta2/delta2_black.avif", 
            "/images/equipos/EcoFlow/Delta2/delta2_black_1.avif"
        ],
        status: "normal",
        date: "01/01/2026",
        qrCode: "https://www.temu.com/women-s-autumn-winter-snow-leopard-and-red--printed-wide-leg-pants-fashion-casual--trendy-versatile-drawstring-design-elastic-waist-comfortable--stylish-modern--for-daily-wear-outing-travel-g-605604294794053.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F33dc1cfc-ce56-4c9b-83fe-6dfa1442ef53.jpg&spec_id=21263&spec_gallery_id=263533&refer_page_sn=10009&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=MTM3NQ&_oak_gallery_order=262545729%2C1791130473%2C1927697601%2C953336704%2C1247062918&_oak_mp_inf=EMW29uaz2YkBGiA1MjkzMDI3MWNmNDE0ZTUzOTYyNGU2MGZiOWVmN2U0NiC195Si2TM%3D&spec_ids=21263&search_key=pantalonetas%20de%20mujer%20largas%20anchas&refer_page_el_sn=200049&ab_scene=0&enable_vqr=1&refer_page_name=search_result&refer_page_id=10009_1776309066921_tb4gzy70yq&_x_sessn_id=lvxv466jpz",
    },
    {
        id: 9, 
        type: "Equipos",
        name: "EcoFlow Delta 3",
        category: "EcoFlow",
        color: ["black_negro"],
        brand: "EcoFlow",
        size: ["26cm/34cm/25cm"],
        length: "",
        store: "Temu",
        likes: 0,
        dollarPrice: 735,
        currentDollarPrice: 510,
        price: 375000, 
        originalPrice: 375000, 
        total_Items: 1,
        description: `EcoFlow Delta 3`,
        genero: ["Unisex"],
        age: 40,
        rating: 4.2, 
        reviews: 0, 
        img: [
            "/images/equipos/EcoFlow/Delta3/delta3_black.avif"
        ],
        status: "normal",
        date: "01/01/2026",
        qrCode: "https://www.temu.com/women-s-autumn-winter-snow-leopard-and-red--printed-wide-leg-pants-fashion-casual--trendy-versatile-drawstring-design-elastic-waist-comfortable--stylish-modern--for-daily-wear-outing-travel-g-605604294794053.html?top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F33dc1cfc-ce56-4c9b-83fe-6dfa1442ef53.jpg&spec_id=21263&spec_gallery_id=263533&refer_page_sn=10009&freesia_scene=2&_oak_freesia_scene=2&_oak_rec_ext_1=MTM3NQ&_oak_gallery_order=262545729%2C1791130473%2C1927697601%2C953336704%2C1247062918&_oak_mp_inf=EMW29uaz2YkBGiA1MjkzMDI3MWNmNDE0ZTUzOTYyNGU2MGZiOWVmN2U0NiC195Si2TM%3D&spec_ids=21263&search_key=pantalonetas%20de%20mujer%20largas%20anchas&refer_page_el_sn=200049&ab_scene=0&enable_vqr=1&refer_page_name=search_result&refer_page_id=10009_1776309066921_tb4gzy70yq&_x_sessn_id=lvxv466jpz",
    },
]


// Update categories 
// UPDATE categories 
// SET sub_category = sub_category || '["Protectores de Pantalla"]'::jsonb
// WHERE category_key = 'electronicos';

