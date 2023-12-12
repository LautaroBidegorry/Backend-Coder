class ProductManager {
  static #products = [];

  create(data) {
    if (data.title && data.photo && data.price && data.stock) {
      const newProduct = {
        id: (ProductManager.#products[ProductManager.#products.length - 1]?.id || 0) + 1,
        title: data.title,
        photo: data.photo,
        price: data.price,
        stock: data.stock,
      };

      ProductManager.#products.push(newProduct);
      return newProduct;
    } else {
      return "No puede haber campos vacíos";
    }
  }

  read() {
    return ProductManager.#products.length > 0 ? ProductManager.#products : "No hay productos disponibles";
  }

  readOne(id) {
    const product = ProductManager.#products.find((product) => product.id === Number(id));

    return product ? product : "Producto no encontrado";
  }
}

const Manager = new ProductManager();
console.log(Manager.create({title: "tituloPH", photo: "https://picsum.photos/640/360", price: 5000, stock: 5}))
console.log(Manager.readOne(1));
console.log(Manager.read());
