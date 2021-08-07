const addToCartFormHandler = async (event) => {
    event.preventDefault();

 const response = await fetch('/api/cart', {
        method: 'POST',
        body: '',
        headers: { 'Content-Type': 'application/json' }
    });
     if (response.ok) {
      console.log(response);
    } else {
      alert('Failed to add to cart');
    }
  };



document
.getElementById("Cart")
.addEventListener("click", addToCartFormHandler);
  