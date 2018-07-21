/* 
 * V3 Reqs:
 * Should display at least 5 cats, listed by name
 * An area to display the selected cat
 * In the display area, the cat's name, picture, and number of clicks shows
 */ 

// Constructor function for Cat
var Cat = function(name, imgURL) {
	this.name = name;
	this.img = imgURL;
	this.count = 0;
}

// Create HTML dynamically
var img_index = 1;
var div_index = 1;

//Function that creates the div for animal
Cat.prototype.divTemplate = function(object) {
		// Create <div>
		var newDiv = document.createElement('div');
		$(newDiv).attr('id', this.name+div_index);
		$(newDiv).addClass('hidden');

		//Create header inside of new div
		var catName = document.createElement('h3');
		catName.innerHTML = this.name;

		//Create image inside of new div
		var catPhoto = $('<img />').attr({
		            'id': 'myImage'+img_index,
		            'src': this.img,
		            'width': 250
		        });
		$(catPhoto).attr('data-cat-name', this.name);

		//Create counter text inside new div
		var countText = document.createElement('p');
		countText.innerHTML = 'Click count: ' + this.count;

		//Create a li to append 
		var catListItem = document.createElement('li');
		var catLink = document.createElement('a');
		catLink.innerHTML = this.name;
		$(catLink).attr('href', '#'+this.name+div_index);

		//Add the new div element to container div
		$('.cat-list').append(catListItem);
		$(catListItem).append(catLink)
		$('.all-cats').append(newDiv);
		$(newDiv).append(catName);
		$(newDiv).append(catPhoto);
		$(newDiv).append(countText);

		img_index++;
		div_index++;
}

//Create new cats
var murray = new Cat('Murray', 'img/cat-photo.jpg');
var jonesy = new Cat('Jonesy', 'img/cat-photo2.jpg');
var carlton = new Cat('Carlton', 'img/carlton-catphoto.jpeg');
var henry = new Cat('Henry', 'img/henry-catphoto.jpeg');
var felix = new Cat('Felix', 'img/felix-catphoto.jpeg');
var fuego = new Cat('Fuego', 'img/fuego-catphoto.jpeg');
var macy = new Cat('Macy', 'img/macy-catphoto.jpeg');

//Cat array 
var catArray = [];

//Push new cat to array
catArray['murray'] = murray;
catArray['jonesy'] = jonesy;
catArray['carlton'] = carlton;
catArray['henry'] = henry;
catArray['felix'] = felix;
catArray['fuego'] = fuego;
catArray['macy'] = macy;


//With loop create HTML for each cat object
for(let kitty in catArray) {
	catArray[kitty].divTemplate();
}

//event listener for click on img
$(document).on('click', 'img', function(e){
	let kitty = e.target; // to access the cat clicked
	counter = kitty.nextSibling, // to access p tag with click count
 name = kitty.getAttribute('data-cat-name').toLowerCase();
	getCat = catArray[name];
	getCat.count += 1;	
 counter.innerHTML = 'Click count: ' + getCat.count;
}); 

//event listener for click on li 
$(document).on('click', 'li', function(e) {
	let cat = e.target.attributes[0].nodeValue;
	let catSiblings = $(cat).siblings();

	if($(cat).hasClass('hidden')) {
		$(cat).toggleClass('hidden');
		$(catSiblings).addClass('hidden');
	}
});

