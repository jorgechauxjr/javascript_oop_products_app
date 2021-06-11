class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct() {

  }

  deleteProduct() {

  }

  showMessage() {

  }
}

// DOM EVENTS

document.getElementById("product-form").addEventListener("submit", function (event) {

  const productName = document.getElementById("pName").value
  const price = document.getElementById("pPrice").value
  const year = document.getElementById("pYear").value
  
  // CANCEL DEFAULT REFRESH
  event.preventDefault();

})
