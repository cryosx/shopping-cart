var items = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];

var subtotalVal = 0;

for (var i = 0; i < items.length; i++) {
	var cartItemDiv = document.createElement('div');
	cartItemDiv.className = 'cartItem';

	var cartItemImgDiv = document.createElement('div');
	cartItemImgDiv.className = 'cartItemImg';

	var cartItemImg = document.createElement('img');
	cartItemImg.src = 'assets/64x64.png';
	cartItemImg.placeholder = 'placeholder';

	cartItemImgDiv.appendChild(cartItemImg);

	var cartItemBodyDiv = document.createElement('div');
	cartItemBodyDiv.className = 'cartItemBody';
	var cartItemNameDiv = document.createElement('div');
	cartItemNameDiv.className = 'cartItemName';
	cartItemNameDiv.innerHTML = items[i].product;

	var cartItemDescriptionDiv = document.createElement('div');
	cartItemDescriptionDiv.className = 'cartItemDescription';
	cartItemDescriptionDiv.innerHTML = items[i].description;

	cartItemBodyDiv.appendChild(cartItemNameDiv);
	cartItemBodyDiv.appendChild(cartItemDescriptionDiv);

	var cartItemPriceDiv = document.createElement('div');
	cartItemPriceDiv.className = 'cartItemPrice';
	cartItemPriceDiv.innerHTML = '$' + items[i].price;
	subtotalVal += items[i].price;

	cartItemDiv.appendChild(cartItemImgDiv);
	cartItemDiv.appendChild(cartItemBodyDiv);
	cartItemDiv.appendChild(cartItemPriceDiv);

	document.getElementById('shoppingCart').appendChild(cartItemDiv);

	cartItemNameDiv.addEventListener('click', function() {
		var display = this.nextSibling.style.display;
		if (display === 'none' || display === '') {
			this.nextSibling.style.display = 'block';
		} else {
			this.nextSibling.style.display = 'none';
		}
	});

}

var subtotalDiv = document.createElement('div');
subtotalDiv.id = 'subtotal';

var subtotalLabelDiv = document.createElement('div');
subtotalLabelDiv.id = 'subtotalLabel';
subtotalLabelDiv.innerHTML = 'Subtotal';

var subtotalValueDiv = document.createElement('div');
subtotalValueDiv.id = 'subtotalValue';
subtotalValueDiv.innerHTML = '$' + subtotalVal;

subtotalDiv.appendChild(subtotalLabelDiv);
subtotalDiv.appendChild(subtotalValueDiv);
document.getElementById('shoppingCart').appendChild(subtotalDiv);







