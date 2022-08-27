const product =
class product{
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price){

    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class productList{
  products = [
      new product('A Car', 'https://source.unsplash.com/random/300x300', 'A car!', 40000),
      
      new product('A Car', 'https://source.unsplash.com/random/300x300', 'Pair of sneakers you might like or not.', 2000),
    ];

    constructor(){}

    render(){
      renderHook = document.getElementById('app');
const prodList = document.createElement('ul');
prodList.className = 'product-list';
for (const prod of this.products){
  const prodEl = document.createElement('li');
  prodEl.className = 'product-item';
  prodEl.innerHTML = `
  <div>
    <img src="${prod.imageUrl}" alt="${prod.title}">
    <div class="product-item_content">
    <h2>${prod.title}</h2>
    <h3>\$${prod.price}</h3>
    <p>${prod.description}</p>
    <button>Add to Cart</button>
    </div>
  </div>
  `;
  prodList.append(prodEl);
}
renderHook.append(prodList);
    }
}

const ProductList = new ProductList();
productList.render();