const cardsContainer = document.getElementById("cartas");

const getProducto = () => {
  return new Promise((resolve, reject) => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(new Error("Error al obtener productos")));
  });
};

getProducto()
  .then((productos) => {
    productos.forEach((producto) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const image = document.createElement("img");
      image.src = producto.image;
      image.alt = producto.title;

      const title = document.createElement("h3");
      title.textContent = producto.title;

      const price = document.createElement("p");
      price.textContent = `$${producto.price}`;

      const description = document.createElement("p");
      description.textContent = producto.description;

      const addToCartButton = document.createElement("button");
      addToCartButton.textContent = "Agregar al carrito";

      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(price);
      card.appendChild(description);
      card.appendChild(addToCartButton);

      cardsContainer.appendChild(card);
    });
  })
  .catch((err) => console.log(err.message));

const categorias = producto.filter((prod, index, arr) => {
  return arr.findIndex((t) => t.category === prod.category) === index;
});

const nav = document.createElement("nav");
nav.classList.add("categorias");

const ul = document.createElement("ul");
ul.classList.add("categorias__lista");

categorias.forEach((categoria) => {
  const li = document.createElement("li");
  li.classList.add("categorias__item");

  const a = document.createElement("a");
  a.href = "#";
  a.textContent = categoria.category;
  a.addEventListener("click", () => {
    // Código para filtrar productos por categoría
  });

  li.appendChild(a);
  ul.appendChild(li);
});

nav.appendChild(ul);
document.body.prepend(nav);
