 
/**
 *   page produit
 */
  
 
var paramsString = window.location.search;
var searchParams = new URLSearchParams(paramsString);

// Itère sur les paramètres de recherche.
// for (let p of searchParams) {
//   console.log(p);
// }

let id = (searchParams.get('id'));
let item__img = document.querySelector('.item__img')
let titre = document.querySelector('#title')
let prix = document.querySelector('#price')
let description = document.querySelector('#description')
let colors = document.querySelector('#colors')
let addToCart = document.getElementById('addToCart')


const u = 'http://localhost:3000/api/products/';
let urlApi = u+id;
console.log(urlApi)

    fetch(urlApi)
    .then((res)=>{
        if(res.ok){
            return res.json();
        }
    })
    .then((listProducts) =>{
        //AffichageProduct(listProducts);
        console.log(listProducts)
        

         console.log(listProducts['colors'])
         insertDataToElement(listProducts)
         addOptionToSelect(listProducts)

         func_addToCart = (e) => {
            e.preventDefault();
            console.log(listProducts)
            let id = listProducts['_id']
            let prix = listProducts['price']
            let productImage = listProducts['imageUrl']
            let productName = listProducts['name']
            localStorage.setItem("productId",id)
            localStorage.setItem("productPrice",prix)
            localStorage.setItem("productImage",productImage)
            localStorage.setItem("productName",productName)
            console.log(localStorage.getItem("productId"))
            window.location.href="./cart.html";
        }
        
        addToCart.addEventListener('click',func_addToCart)

    })

//inserer les donner de l'api dans la cart produt dom
insertDataToElement = (listProducts) => {
    let elmImg = document.createElement('img')
    elmImg.setAttribute('src',listProducts['imageUrl'])
    item__img.appendChild(elmImg)
    titre.innerHTML = listProducts['name']
    prix.innerHTML = listProducts['price']
    description.innerHTML = listProducts['description']
}
// Element <select> ajout des <options>
addOptionToSelect = (listProducts) => {
    let nbColor = listProducts['colors'].length;

    for (let i = 0; i < nbColor; i++){
        //console.log(listProducts['colors'][i])
        let elmOption = document.createElement('option');
        elmOption.setAttribute('value',listProducts['colors'][i]);
        elmOption.innerHTML = listProducts['colors'][i];
        colors.appendChild(elmOption)
       // console.log(elmOption)
    }
}

 


