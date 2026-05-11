
// CRUD for users

export const createNewUser = ({
  name,
  email,
  phone,
  password = "",
  birthday = "",
  imagen = "",
  address = "",
  role = "users"
}) => {
  return {
    customerId: Date.now(),
    name,
    email,
    phone,
    password,
    birthday,
    imagen,
    address,
    userCreate: new Date().toLocaleString(),
    role,
    order: [],
    orderProccess: [],
    delivered: []
  };
};

export const getUserById = (users, customerId) => {
  return users.find(
    (user) => user.customerId === customerId
  );
};

export const updateUser = (
  users,
  customerId,
  updatedData
) => {
  return users.map((user) => {
    if (user.customerId !== customerId) {
      return user;
    }

    return {
      ...user,

      name: updatedData.name ?? user.name,
      email: updatedData.email ?? user.email,
      phone: updatedData.phone ?? user.phone,
      password: updatedData.password ?? user.password,
      birthday: updatedData.birthday ?? user.birthday,
      imagen: updatedData.imagen ?? user.imagen,
      address: updatedData.address ?? user.address,
      role: updatedData.role ?? user.role
    };
  });
};

export const deleteUser = (users, customerId) => {
  return users.filter(
    (user) => user.customerId !== customerId
  );
};







export const createNewOrder = ({
  orders = [],
  paymentFormat = "",
  paymentOption = "",
  admInCharge = "",
  gestorSell = "",
  sellerCash = 0,
  dollarPrice = 0,
  cupPrice = 0,
  revenewTotal = 0,
  tienda = 0,
  qrcode = "",
  statusSell = "Pendiente"
}) => {

  return {

    id: Date.now(),

    qrcode,

    tienda,

    admInCharge,

    gestorSell,

    orders,

    dollarPrice,

    cupPrice,

    revenewTotal,

    sellerCash,

    date: new Date().toLocaleString(),

    paymentFormat,

    paymentOption,

    statusSell
  };
};

export const getOrderById = (
  orders,
  orderId
) => {

  return orders.find(
    (order) =>
      Number(order.id) === Number(orderId)
  );
};

export const updateOrder = (
  orders,
  orderId,
  updatedData
) => {

  return orders.map((order) => {

    if (
      Number(order.id) !== Number(orderId)
    ) {
      return order;
    }

    return {

      ...order,

      qrcode:
        updatedData.qrcode ??
        order.qrcode,

      tienda:
        updatedData.tienda ??
        order.tienda,

      admInCharge:
        updatedData.admInCharge ??
        order.admInCharge,

      gestorSell:
        updatedData.gestorSell ??
        order.gestorSell,

      orders:
        updatedData.orders ??
        order.orders,

      dollarPrice:
        updatedData.dollarPrice ??
        order.dollarPrice,

      cupPrice:
        updatedData.cupPrice ??
        order.cupPrice,

      revenewTotal:
        updatedData.revenewTotal ??
        order.revenewTotal,

      sellerCash:
        updatedData.sellerCash ??
        order.sellerCash,

      paymentFormat:
        updatedData.paymentFormat ??
        order.paymentFormat,

      paymentOption:
        updatedData.paymentOption ??
        order.paymentOption,

      statusSell:
        updatedData.statusSell ??
        order.statusSell
    };
  });
};

export const deleteOrder = (
  orders,
  orderId
) => {

  return orders.filter(
    (order) =>
      Number(order.id) !== Number(orderId)
  );
};

export const findOrderEverywhere = (
  customer,
  orderId
) => {

  const pending =
    customer.order.find(
      (o) =>
        Number(o.id) === Number(orderId)
    );

  if (pending) {
    return {
      location: "order",
      order: pending
    };
  }



  const process =
    customer.orderProccess.find(
      (o) =>
        Number(o.id) === Number(orderId)
    );

  if (process) {
    return {
      location: "orderProccess",
      order: process
    };
  }



  const delivered =
    customer.delivered.find(
      (o) =>
        Number(o.id) === Number(orderId)
    );

  if (delivered) {
    return {
      location: "delivered",
      order: delivered
    };
  }



  return null;
};



export const createNewProduct = ({
  type = "",
  name = "",
  category = "",
  color = [],
  brand = "",
  size = [],
  length = "",
  store = "",
  likes = 0,
  dollarPrice = 0,
  currentDollarPrice = 0,
  price = 0,
  originalPrice = 0,
  total_Items = 0,
  description = "",
  genero = [],
  age = 0,
  rating = 0,
  reviews = 0,
  img = [],
  status = "normal",
  date = new Date().toLocaleString(),
  qrCode = ""
}) => {

  return {

    id: Date.now(),

    type,

    name,

    category,

    color,

    brand,

    size,

    length,

    store,

    likes,

    dollarPrice,

    currentDollarPrice,

    price,

    originalPrice,

    total_Items,

    description,

    genero,

    age,

    rating,

    reviews,

    img,

    status,

    date,

    qrCode
  };
};

export const getProductById = (
  products,
  productId
) => {

  return products.find(
    (product) =>
      Number(product.id) ===
      Number(productId)
  );
};

export const updateProduct = (
  products,
  productId,
  updatedData
) => {

  return products.map((product) => {

    if (
      Number(product.id) !==
      Number(productId)
    ) {
      return product;
    }

    return {

      ...product,

      type:
        updatedData.type ??
        product.type,

      name:
        updatedData.name ??
        product.name,

      category:
        updatedData.category ??
        product.category,

      color:
        updatedData.color ??
        product.color,

      brand:
        updatedData.brand ??
        product.brand,

      size:
        updatedData.size ??
        product.size,

      length:
        updatedData.length ??
        product.length,

      store:
        updatedData.store ??
        product.store,

      likes:
        updatedData.likes ??
        product.likes,

      dollarPrice:
        updatedData.dollarPrice ??
        product.dollarPrice,

      currentDollarPrice:
        updatedData.currentDollarPrice ??
        product.currentDollarPrice,

      price:
        updatedData.price ??
        product.price,

      originalPrice:
        updatedData.originalPrice ??
        product.originalPrice,

      total_Items:
        updatedData.total_Items ??
        product.total_Items,

      description:
        updatedData.description ??
        product.description,

      genero:
        updatedData.genero ??
        product.genero,

      age:
        updatedData.age ??
        product.age,

      rating:
        updatedData.rating ??
        product.rating,

      reviews:
        updatedData.reviews ??
        product.reviews,

      img:
        updatedData.img ??
        product.img,

      status:
        updatedData.status ??
        product.status,

      qrCode:
        updatedData.qrCode ??
        product.qrCode
    };
  });
};

export const deleteProduct = (
  products,
  productId
) => {

  return products.filter(
    (product) =>
      Number(product.id) !==
      Number(productId)
  );
};