let cart__items = document.querySelector('#cart__items')
console.log(localStorage.getItem("productImage"))
let image = localStorage.getItem("productImage");
let prix = localStorage.getItem("productPrice")
let nom = localStorage.getItem("productName")
cart__items.innerHTML = ` 
        <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img src="${image}" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${nom}</h2>
                    <p>Vert</p>
                    <p>${prix} €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>

`