// JS for the Gamestore

//User Data:
if (sessionStorage.getItem('cart') == null) sessionStorage.setItem('cart','[]')
let cartState;
updateCartIcon()

//Classes (games & consoles):
class Product {
  constructor(id, name, image, price, publisher, details) {
    this.id = id
    this.name = name
    this.image = image
    this.price = price
    this.publisher = publisher 
    this.details = details
  }
}
class Game extends Product {
  constructor(id, name, image, price, publisher, year, console, details) {
    super(id, name, image, price, publisher, details)
    this.year = year
    this.console = console
  }
}

//OBJ for each game:
const animalCrossingOBJ = new Game (
  1,
  'Animal Crossing: New Horizons',
  'img/AnimalCrossing_Img.jpg',
  59.99,
  'Nintendo',
  2020,
  ['nintendo'],
  'Build your community from scratch on a deserted island brimming with possibility; Create your personal getaway and customize your character, home, decorations, and even the landscape itself.'
)
const zeldaOBJ = new Game (
  2,
  'The Legend of Zelda : Tears of the Kingdom',
  'img/Zelda_Img.jpg',
  69.99,
  'Nintendo',
  2023,
  ['nintendo'],
  'An epic adventure across the land and skies of Hyrule awaits in the Legend of Zelda: Tears of the Kingdom. The adventure is yours to create in a world fueled by your imagination.'
)
const cyberpunk2077OBJ = new Game (
  3,
  'Cyberpunk 2077',
  'img/Cyberpunk2077_Img.jpg',
  49.99,
  'CD Project Red',
  2020,
  ['pc'],
  'Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.'
)
const eldenRingOBJ = new Game (
  4,
  'Elden Ring',
  'img/EldenRing_Img.jpg',
  49.99,
  'FromSoftware Inc.',
  2020,
  ['pc','playstation'],
  'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.'
)
const godOfWarOBJ = new Game (
  5,
  'God Of War Ragnarok',
  'img/GodOfWar_Img.jpg',
  59.99,
  'Santa Monica Studio',
  2022,
  ['playstation'],
  'Feel your journey through the Norse realms, made possible by immersive haptic feedback and adaptive trigger functionality.'
)
const yakuzaOBJ = new Game (
  6,
  'Yakuza : Like A Dragon',
  'img/Yakuza_Img.jpg',
  39.99,
  'Sega',
  2021,
  ['pc','playstation'],
  'Ichiban Kasuga, a low-ranking grunt of a low-ranking yakuza family in Tokyo, faced an 18-year prison sentence, and returns to take the world by storm.'
)
//Games Array:
const games = [
  animalCrossingOBJ,
  zeldaOBJ,
  cyberpunk2077OBJ,
  eldenRingOBJ,
  godOfWarOBJ,
  yakuzaOBJ
]

//OBJ for each console:
const nintendoSwitchOBJ = new Product (
  7,
  'Nintendo Switch',
  'img/NintendoSwitch_Img.jpg',
  349.99,
  'Nintendo',
  'Includes a Switch console, Switch dock, Joy-Con (L) and Joy-Con (R), Joy-Con grip, AC adapter, HDMI cable, and 2 Joy-Con strap accessories, and a Nintendo Switch Online 3-Month Individual Membership.'
)
const ps4OBJ = new Product (
  8,
  'Playstation 4 Pro, 4K-HDR',
  'img/PS4_Img.jpg',
  279.99,
  'Sony',
  'PlayStation 4 Pro - the super charged PS4 - take play to the next level with PS4 Pro: See every detail explode into life with 4K gaming and entertainment, experience faster, smoother frame rates and a more powerful gaming performance.'
)
const ps5OBJ = new Product (
  9,
  'Playstation 5',
  'img/PS5_Img.jpg',
  499.99,
  'Sony',
  'Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.Lightning Speed - Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do.'
)
//Consoles Array:
const consoles = [
  nintendoSwitchOBJ,
  ps4OBJ,
  ps5OBJ
]

//Create Navbar:
function createNav() {
  let navbar = 
  `<nav class="navbar navbar-expand-sm bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a href="./index.html"><img src="./img/SVG/GM_logo.svg"></a>
    <a class="navbar-brand" href="./index.html">GAMER'S MARKET</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="./index.html">Store</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="" data-bs-toggle="modal" data-bs-target="#cartModal" onclick="updateCartItems()">
          Cart
          <img src=${cartState}>
          <span id="cart_circle" class="position-relative badge rounded-pill bg-success d-${cartCircle_display}">${JSON.parse(sessionStorage.getItem('cart')).length}</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ml-50" href="" data-bs-toggle="modal" data-bs-target="#contactModal">Contact Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Locations
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="" onclick="alert('Location pending funding from investors :(')">Tel Aviv</a></li>
            <li><a class="dropdown-item" href="" onclick="alert('Location pending funding from investors :(')">Haifa</a></li>
            <li><a class="dropdown-item" href="" onclick="alert('Location pending funding from investors :(')">Eilat</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  </nav>`
  document.querySelector('nav').innerHTML = navbar;
}
createNav()

//Create Games Cards:
function createCards(filter) {
  document.getElementById("games").innerHTML = ''
  if (filter == '') {
    for (let i = 0; i < games.length; i++) {
      document.getElementById("games").innerHTML += `
      <div class="card col-sm-12 col-md-5 col-lg-3 flex-fill" style="max-width: 320px">
      <img src="${games[i].image}" class="card-img-top mt-2">
      <div class="card-body">
      <h5 class="card-title flex-grow-1">${games[i].name}</h5>
      <div class="card-text flex-grow-1">
      <p>${games[i].publisher} | ${games[i].year}</p>
      </div>
      <div class="card-end btn-group">
      <div class="btn btn-success pricebox">$ ${games[i].price}</div>
      <button onclick="addToCart(${games[i].id}), updateCartIcon()" class="btn btn-outline-success w-70">Add To Cart</button>
      </div></div></div>`
    }
  }
  else {
    for (let i = 0; i < games.length; i++) {
    if(games[i].console.includes(filter)) {
      document.getElementById("games").innerHTML += `
      <div class="card col-sm-12 col-md-5 col-lg-3 flex-fill" style="max-width: 320px">
      <img src="${games[i].image}" class="card-img-top mt-2">
      <div class="card-body">
      <h5 class="card-title flex-grow-1">${games[i].name}</h5>
      <div class="card-text flex-grow-1">
      <p>${games[i].publisher} | ${games[i].year}</p>
      </div>
      <div class="card-end btn-group">
        <div class="btn btn-success pricebox">$ ${games[i].price}</div>
        <button onclick="addToCart(${games[i].id}), updateCartIcon()" class="btn btn-outline-success w-70">Add To Cart</button>
      </div></div></div>`
    }
    }
  }
}
createCards('')

//Create Consoles Cards:
for (let i = 0; i < consoles.length; i++) {
  document.getElementById("consoles").innerHTML += `
  <div class="card col-sm-12 col-md-5 col-lg-3 flex-fill" style="max-width: 320px">
  <img src="${consoles[i].image}" class="card-img-top mt-2 flex-grow-1">
  <div class="card-body">
  <h5 class="card-title flex-grow-1">${consoles[i].name}</h5>
  <div class="card-text flex-grow-1">
  <p>${consoles[i].publisher}</p>
  <p>
  </div>
  <div class="card-end btn-group">
    <div class="btn btn-success pricebox">$ ${consoles[i].price}</div>
    <button onclick="addToCart(${consoles[i].id}), updateCartIcon()" class="btn btn-outline-success w-70">Add To Cart</button>
  </div>
  </div>
  </div>`
}

//Cart Functions:
function addToCart(id) {
  let cart = JSON.parse(sessionStorage.getItem('cart'))
  switch (id) {
    case 1 :
      cart.push(animalCrossingOBJ)
      break
    case 2 :
      cart.push(zeldaOBJ)
      break
    case 3 :
      cart.push(cyberpunk2077OBJ)
      break
    case 4 :
      cart.push(eldenRingOBJ)
      break
    case 5 :
      cart.push(godOfWarOBJ)
      break
    case 6 :
      cart.push(yakuzaOBJ)
      break
    case 7 :
      cart.push(nintendoSwitchOBJ)
      break
    case 8 :
      cart.push(ps4OBJ)
      break
    case 9 :
      cart.push(ps5OBJ)
      break
  }
  sessionStorage.setItem('cart',JSON.stringify(cart))
}
function updateCartIcon() {
  if (JSON.parse(sessionStorage.getItem('cart')).length > 0) {
    cartState = './img/SVG/cart_filled.svg'
    cartCircle_display = 'inline-block'
  } 
  else {
    cartState = './img/SVG/cart_empty.svg'
    cartCircle_display = 'none'
  }
  createNav()

}
function removeCartItem(id) {
  let cart = JSON.parse(sessionStorage.getItem('cart'))
  itemIndex = cart.findIndex((obj) => obj.id == id )
  cart.splice(itemIndex, 1)
  sessionStorage.setItem('cart',JSON.stringify(cart))
  updateCartItems()
  updateCartIcon()
}
function checkoutCart() {
  if (JSON.parse(sessionStorage.getItem('cart')).length > 0) {
    alert(`Your order has been placed.\nThank you for choosing Gamer's Market!`)
    sessionStorage.setItem('cart','[]')
    updateCartItems()
    updateCartIcon()
  }
  else {
    alert(`Nothing to check out!`)
  }
}

function updateCartItems() {
  let modalList = document.querySelector('#modalList')
  modalList.innerHTML = null;
  let cart = JSON.parse(sessionStorage.getItem('cart'))
  if (cart.length > 0) {
    let sum = 0
    for (i in cart) {
      modalList.innerHTML += `<li class="list-group-item"><div class="row">
        <div class="col-2" style="width:110px; height:100px">
          <img style="width: 100%; height:100%" src="${cart[i].image}">
        </div>
        <p class="col-4">${cart[i].name}</p>
        <p class="col-4">$${cart[i].price}</p>
        <button type="button" class="btn-close" onclick="removeCartItem(${cart[i].id})"></button>
      </div></li>`
      sum += cart[i].price
    } 
    modalList.innerHTML += `<div class="row" style="margin-left: 7px; margin-right: 7px">
      <p class="col-auto me-auto"><b>Total:</b></p>
      <p class="col-auto"><b>$${Math.round(sum * 100) / 100}</b></p>
    </div>`
  }
  else {
    modalList.innerHTML += `<div class="row" style="margin-left: 7px; margin-right: 7px">
      <p class="col-12">Your cart is empty!</p>
    </div>`
  }
}

//Create Footer:
let footer = 
`<footer class="w-100 lh-1">
  <div class="container h-100">
      <div class="w-50">
          <p><b>Gamer's Market  |  May 2023</b></p>
          <p>Creative, Non-Commercial Webproject by MK Websites</p>
          <br>
          <p><b>Sources</b></p>
          <p>Pexels.com | Pixabay.com</p>
          <p>Google Images</p>
      </div>
      <div class="w-50">
          <p class="text-center"><b>Socials</b></p>
          <div class="d-flex gap-4 justify-content-center">
              <img src="./img/SVG/facebook.svg" alt="facebook" style="width: 30px">    
              <img src="./img/SVG/instagram.svg" alt="instagram" style="width: 30px">    
              <img src="./img/SVG/twitter.svg" alt="twitter" style="width: 30px">
          </div>
      </div>
  </div>
</footer>`
document.querySelector('footer').innerHTML = footer;