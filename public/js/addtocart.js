const catAddToCartFormHandler = async (event) => {
    event.preventDefault();

 const response = await fetch('/api/catitem/:id', {
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
.getElementById("Catcart")
.addEventListener("click", catAddToCartFormHandler);


const dogAddToCartFormHandler = async (event) => {
    event.preventDefault();

 const response = await fetch('/api/dogitem/:id', {
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
.getElementById("Dogcart")
.addEventListener("click", dogAddToCartFormHandler);
  