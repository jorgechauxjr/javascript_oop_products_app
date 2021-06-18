class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById("product-list")
        const element = document.createElement("div");
        // DESIGN the html that is going to be inside product-list in the html
        element.innerHTML = `
            <div class="card text-center mb-4 ">
                <!--div encargado del contenido de la tarjeta-->
                <div class="card-body">
                    <strong>Product</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;

        // INSERT the design we made up
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById("product-form").reset();
    }


    deleteProduct(element) {
        if(element.name === 'delete') {
            // console.log(element.parentElement.parentElement.parentElement)
            element.parentElement.parentElement.parentElement.remove();
        }

    }

    showMessage(message, bootstrapCssClass) {
        const div = document.createElement('div');
        
        // div.className = 'alert alert-' + bootstrapCssClass;
        div.className = `alert alert-${bootstrapCssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        
        // Show the message in the DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// DOM EVENTS

//  CAPTURE THE SUBMIT EVENT FROM THE FORM
// The event submit is executed by the product-form
document.getElementById("product-form").addEventListener("submit", function (event) {

    const productName = document.getElementById("pName").value;
    const price = document.getElementById("pPrice").value;
    const year = document.getElementById("pYear").value;

    const product = new Product(productName, price, year);

    /*object ui that obtains the methods from ui
    addProduc, deleteProduct and show message*/
    const ui = new UI();
    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage("Product Added Successfuly", "success");
    
    // CANCEL DEFAULT REFRESH
    event.preventDefault();

});

// CAPTURE THE DELETE EVENT
// The event delete is executed by the products-list (esta declarado en el html)
document.getElementById("product-list").addEventListener("click", function(event) {
    // console.log(event.target)
    const ui = new UI();
    ui.deleteProduct(event.target);
});