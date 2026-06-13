document.addEventListener('DOMContentLoaded', function() {
  // Get the current date and time
  const currentDateTime = new Date();

  // Format the date as "Month Day, Year"
  const formattedDate = currentDateTime.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });

  // Format the time as "Hour:Minute AM/PM"
  const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
  });

  // Display the date and time in the footer
  const dateTimeElement = document.getElementById('myDateTimeStamp');
  dateTimeElement.textContent = `Today's Date: ${formattedDate}. Current Time: ${formattedTime}`;
  
});

    // Shopping Cart Functionality
    let cartItems = 0;
    const cartIcon = document.getElementById('shop-cart');
    const cartItemsDisplay = document.querySelector('.cart-items');

    cartIcon.addEventListener('click', () => {
        // Implement logic to show the cart content
        // For example, display a list of added items with prices
    });

    // Lightbox Functionality
    function openLightbox(imgSrc, productName, price) {
        document.getElementById('lightbox-img').src = imgSrc;
        document.getElementById('lightbox-caption').innerHTML = `<h4>${productName}</h4><p>${price}</p>`;
        document.getElementById('lightbox').style.display = 'block';
    }

    function closeLightbox() {
        document.getElementById('lightbox').style.display = 'none';
    }

    // Example Usage:
    const cardElements = document.querySelectorAll('.musthave__card');
    cardElements.forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.querySelector('img').src;
            const productName = card.querySelector('h4').innerText;
            const price = card.querySelector('p').innerText;
            openLightbox(imgSrc, productName, price);
        });
    });

    // Toggle dropdown on menu bar click
    const menuBar = document.getElementById('menu-bar');
    const dropdownContent = document.getElementById('dropdown-content');

    menuBar.addEventListener('click', () => {
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });

    // Hide dropdown when clicking outside the menu
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.fa')) {
            dropdownContent.style.display = 'none';
        }
    });

      // Sample product data (you can fetch this from a database or API)
      const products = [
        { id: 1, name: "Women's Summer", price: 230, image: "../images/zw.jpg" },
        {id: 2, name: "Basic Formal Upper Wear (Men)", price: 176.00, image: "../images/bw.jpg"},
        {id: 3, name: "Women's Jeans", price: 145.00, image: "../images/2w.jpg"},
        {id: 4, name: "Women's Long Dress", price: 200.00, image: "../images/6w.jpg"},
        {id: 5, name: "Women's Dress", price: 98.00, image: "../images/7w.jpg"},
        { id: 6, name: "Basic Short Dress For Women", price: 340.00, image: "../images/8w.jpg" },
        { id: 7, name: "Custom Tradition", price: 145.00, image: "../images/9w.jpg" },
        {id: 8, name: "Basic Outfit For Women", price: 1170.00, image: "../images/10w.jpg"},
        {id: 9, name: "Basic Formal Wear For Women", price: 398.00, image: "../images/11w.jpg"}
      ];
      // Function to render products dynamically
      function renderProducts(productsData) {
        const productsGrid = document.getElementById('productsGrid');
        productsGrid.innerHTML = '';

        productsData.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('musthave__card');

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p><del>R${product.price * 1.3}</del>&nbsp;&nbsp;R${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;

            productCard.querySelector('.add-to-cart').addEventListener('click', () => {
                // Find the selected product and add it to the cart
                const selectedProduct = products.find(item => item.id === product.id);
                if (selectedProduct) {
                    addToCart(selectedProduct);
                }
            });

            productsGrid.appendChild(productCard);
        });
      }

      // Render products on page load
      window.addEventListener('DOMContentLoaded', () => {
        renderProducts(products);
      });

      // Search Functionality
      const searchInput = document.getElementById('searchInput');
      searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
        renderProducts(filteredProducts);
      });

      let cartItems1 = [];
      const cartIcon1 = document.getElementById('shop-cart');
      const cartItemsDisplay1 = document.getElementById('shop-cart'); // Assuming this is where you display the cart count
  
      function addToCart(product) {
          cartItems1.push(product);
          updateCart();
          displayNotification(`${product.name} is added to cart`);
      }
  
      function removeFromCart(product) {
          const index = cartItems1.findIndex(item => item.id === product.id);
          if (index !== -1) {
              cartItems1.splice(index, 1);
              updateCart();
              displayNotification(`${product.name} is removed from cart`);
          }
      }
  
      function updateCart() {
          cartItemsDisplay1.textContent = cartItems1.length;
  
          // Other cart update logic if needed
      }
  
      function displayNotification(message) {
          // Display a pop-up notification
          alert(message);
      }
      const toaddToCart = [{
        name: 'make dinner',
        dueDate: '2023-11-01'
    }, {
        name: 'wash dishes',
        dueDate: '2023-11-02'
    }, {
        name: 'watch youtube',
        dueDate: '2023-11-03'
    }];

    renderTodoList();

    function renderTodoList() {
        let todoListHTML = '';

        todoList.forEach((todoObject, index) => {
            const { name, dueDate } = todoObject;
            const html = `
                <div>${name}</div>
                <div>${dueDate}</div>
                <button class="del del2">Delete</button>
            `;
            todoListHTML += html;
        });

        document.querySelector('.js-todo-list').innerHTML = todoListHTML;

        document.querySelectorAll('.del2').forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            });
        });
    }

    document.querySelector('.addie').addEventListener('click', () => {
        addTodo();
    });

    function addTodo() {
        const inputElement = document.querySelector('.js-name-input');
        const name = inputElement.value;

        const dateInputElement = document.querySelector('.js-date');
        const dueDate = dateInputElement.value;

        todoList.push({
            name: name,
            dueDate: dueDate
        });

        inputElement.value = '';
        renderTodoList();
    }

    document.addEventListener("DOMContentLoaded", function() {
        const searchIcon = document.getElementById('search-bar');
        const searchInput = document.getElementById('searchInput');
        
        searchIcon.addEventListener('click', function() {
          searchInput.focus();
        });
      });

    document.addEventListener("DOMContentLoaded", function() {
        const shopCart = document.getElementById('shop-cart');
        const productsGrid = document.getElementById('productsGrid');
        const cart = document.getElementById('cart');

    shopCart.addEventListener('click', function() {
        // Toggle cart visibility
        cart.classList.toggle('show');
  });

    // Add event listener to the product grid for adding items to the cart
    productsGrid.addEventListener('click', function(event) {
        if (event.target.classList.contains('add1')) {
        const product = event.target.parentNode.querySelector('h4').innerText;
        const price = event.target.parentNode.querySelector('p').innerText;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${product}</span>
            <span>${price}</span>
            <button class="remove">Remove</button>
        `;

        cart.appendChild(cartItem);
        }
    });

    // Add event listener to the cart for removing items
    cart.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove')) {
        const itemToRemove = event.target.parentNode;
        const productName = itemToRemove.querySelector('span:first-child').innerText;
        cart.removeChild(itemToRemove);
        alert(`${productName} has been removed from your cart.`);
        }
    });
    });