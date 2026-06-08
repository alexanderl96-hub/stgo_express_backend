
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
    name,
    email,
    phone,
    password,
    birthday,
    imagen,
    address,
    user_create: new Date().toLocaleString(),
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





// CRUD for admin

export const createNewAdmin = ({
  name,
  email,
  phone,
  password = "",
  birthday = "",
  imagen = "",
  address = "",
  role = "admin",
  user_create = new Date().toLocaleString(),
  job = ""
}) => {
  return {
    name,
    email,
    phone,
    password,
    birthday,
    imagen,
    address,
    user_create,
    role,
    job
  };
};

export const getAdminById = (admins, adminId) => {
  return admins.find(admin => admin.adminId === adminId);
};

export const updateAdmin = (admins, adminId, updatedData) => {
  const admin = admins.find(admin => admin.adminId === adminId);

  if (!admin) {
    return null;
  }

  Object.assign(admin, {
    name: updatedData.name ?? admin.name,
    email: updatedData.email ?? admin.email,
    phone: updatedData.phone ?? admin.phone,
    password: updatedData.password ?? admin.password,
    birthday: updatedData.birthday ?? admin.birthday,
    imagen: updatedData.imagen ?? admin.imagen,
    address: updatedData.address ?? admin.address,
    role: updatedData.role ?? admin.role
  });

  return admin;
};

export const deleteAdmin = (admins, adminId) => {
  const index = admins.findIndex(admin => admin.adminId === adminId);

  if (index === -1) {
    return null;
  }

  return admins.splice(index, 1)[0];
};





// CREUD for orders
export const createNewOrder = ({
  orders = [],
  payment_format = "",
  payment_option = "",
  adm_in_charge = "",
  gestor_sell = "",
  seller_cash = 0,
  dollar_price = 0,
  cup_price = 0,
  revenew_total = 0,
  tienda = 0,
  qrcode = "",
  status_sell = "Pendiente",
  phone = ""
}) => {

  return {

    id: Date.now(),

    qrcode,

    tienda,

    adm_in_charge,

    gestor_sell,

    orders,

    dollar_price,

    cup_price,

    revenew_total,

    seller_cash,

    date: new Date().toLocaleString(),

    payment_format,

    payment_option,

    status_sell,

    phone
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

      adm_in_charge:
        updatedData.adm_in_charge ??
        order.adm_in_charge,

      gestor_sell:
        updatedData.gestor_sell ??
        order.gestor_sell,

      orders:
        updatedData.orders ??
        order.orders,

      dollar_price:
        updatedData.dollar_price ??
        order.dollar_price,

      cup_price:
        updatedData.cup_price ??
        order.cup_price,

      revenew_total:
        updatedData.revenew_total ??
        order.revenew_total,

      seller_cash:
        updatedData.seller_cash ??
        order.seller_cash,

      payment_format:
        updatedData.payment_format ??
        order.payment_format,

      payment_option:
        updatedData.payment_option ??
        order.payment_option,

      status_sell:
        updatedData.status_sell ??
        order.status_sell
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





// CRUD for products

export const createNewProduct = ({
  name = "",
  description = "",
  price = 0,
    dollar_price = 0,
    current_dollar_price = 0,
    original_price = 0,
    discount = 0,
    stock = 0,
    rating = 0,
    reviews = 0,
    category = "",
    sub_category = "",
    brand = "",
    gender = [],
    age_group = 0,
    colors = [],
    colors_match = [],
    sizes = [],
    material = "",
    img = [],
    total_items = 0,
    sold = 0,
    featured = false,

    status = "created",
    likes = 0,

    date = new Date().toLocaleString(),
    qrCode = "",
    store = "",

    caracteristics = [],
    recommended = [],
    battery_details = {
    battery_type: "",
    capacity: "",
    ac_output: "",
    fast_charge: "",
    solar_compatible: false,
    recommended_devices: []
  },
  modelo = "",
  original_store_price = 0 


}) => {

  return {

    id: Date.now(),

    name,

    description,

    price,

    dollar_price,

    current_dollar_price,

    original_price,

    discount,

    stock,

    rating,

    reviews,

    category,

    sub_category,

    brand,

    gender,

    age_group,

    colors,

    colors_match,

    sizes,

    material,

    img,

    total_items,

    sold,

    featured,

    status,

    likes,

    date,

    qrCode,

    store,

    caracteristics,

    recommended,

    battery_details,

    modelo,

    original_store_price
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
    
      sub_category:
        updatedData.sub_category ??
        product.sub_category,

      colors:
        updatedData.colors ??
        product.colors,

      brand:
        updatedData.brand ??
        product.brand,

      sizes:
        updatedData.sizes ??
        product.sizes,

      length:
        updatedData.length ??
        product.length,

      store:
        updatedData.store ??
        product.store,

      likes:
        updatedData.likes ??
        product.likes,

      dollar_price:
        updatedData.dollar_price ??
        product.dollar_price,

      current_dollar_price:
        updatedData.current_dollar_price ??
        product.current_dollar_price,

      price:
        updatedData.price ??
        product.price,

      original_price:
        updatedData.original_price ??
        product.original_price,

      total_items:
        updatedData.total_items ??
        product.total_items,
    
      discount:
        updatedData.discount ??
        product.discount,

      stock:
        updatedData.stock ??
        product.stock,

      description:
        updatedData.description ??
        product.description,

      gender:
        updatedData.gender ??
        product.gender,

      age_group:
        updatedData.age_group ??
        product.age_group,

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

      qrcode:
        updatedData.qrcode ??
        product.qrcode
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







// export const getDollarPrice = async () => {

//     try {

//       const response =
//         await fetch(
//           // "https://tasas.eltoque.com/v1/trmi"
//           "https://open.er-api.com/v6/latest/USD"
//         );

//       const data =
//         await response.json();


//      console.log(data)

//       // return data.usd.value;
//        return data.rates.CUP || 0;

//     } catch (error) {

//       console.log(error);

//       return 0;
//     }
//   };