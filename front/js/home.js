/**
 * Affichage page d'acceuil
 */
const urlApi = 'http://localhost:3000/api/products/'
let items = document.querySelector('.items')

    fetch(urlApi)
    .then((res)=>{
        if(res.ok){
            return res.json();
        }
    })
    .then((listProducts) =>{
        AffichageProduct(listProducts);
    
    })

let AffichageProduct = (listProducts) => {
    for (let unProduit of listProducts){
        items.innerHTML += `
           <a href="./product.html?id=${unProduit['_id']}">
               <article id="unProduit"> 
               <img  class="productImage" src="${unProduit['imageUrl']}"  alt="Lorem ipsum dolor sit amet, Kanap name1">
               <h3 class="productName">${unProduit['name']}</h3>
               <p class="productDescription">${unProduit['description']} </p>
               </article>
           </a> 
        `
   }
}

let donnees = (listProducts) => {
    for (let unProduit of listProducts){
        return unProduit 
    }
    
}


