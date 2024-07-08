const Laptop = document.getElementById('laptops');
const Gpu = document.getElementById('graphicsCards');
const Cpu = document.getElementById('processors');
const Ram = document.getElementById('ram');
const Tv = document.getElementById('tvs'); // document.getElementById("")
const Cams = document.getElementById('cameras');
const ActionCaM = document.getElementById('actionCameras');
const Drones = document.getElementById('drones');
const GamingChair = document.getElementById('gamingChair');
const Keyboards = document.getElementById('keyboard');
const GamingMice = document.getElementById('mouse');
const MousePads = document.getElementById('mousePads');
const Games = document.getElementById('games');
const Controllers = document.getElementById('controllers');

// ==================== LAPTOPS ====================
Laptop.addEventListener('click', function (event) {
	event.preventDefault();
	localStorage.setItem('categoryInfo', JSON.stringify({ category: 'Laptops' }));
	window.location.href = '/category-page/category-page.html';
});

// ==================== GRAPHICS CARDS ====================
Gpu.addEventListener('click', function (event) {
	event.preventDefault();
	console.log('hi');
	localStorage.removeItem('categoryInfo');
	localStorage.setItem(
		'categoryInfo',
		JSON.stringify({ category: 'PC Components', subcategory: 'Graphics Cards' })
	);
	window.location.href = '/category-page/category-page.html';
});

// ==================== PROCESSORS ====================
Cpu.addEventListener('click', function (event) {
	event.preventDefault();
	console.log('hi');
	localStorage.removeItem('categoryInfo');
	localStorage.setItem(
		'categoryInfo',
		JSON.stringify({ category: 'PC Components', subcategory: 'Processors' })
	);
	window.location.href = '/category-page/category-page.html';
});

// ==================== RAM ====================
Ram.addEventListener('click', function (event) {
	event.preventDefault();
	console.log('hi');
	localStorage.removeItem('categoryInfo');
	localStorage.setItem(
		'categoryInfo',
		JSON.stringify({ category: 'PC Components', subcategory: 'RAM' })
	);
	window.location.href = '/category-page/category-page.html';
});

// ==================== TVS ====================
Tv.addEventListener('click', function (event) {
	event.preventDefault();
	console.log('hi');
	localStorage.removeItem('categoryInfo');
	localStorage.setItem('categoryInfo', JSON.stringify({ category: 'TVs' }));
	window.location.href = '/category-page/category-page.html';
});

// ==================== CAMERAS ====================
Cams.addEventListener('click', function (event) {
	event.preventDefault();
	console.log('hi');
	localStorage.removeItem('categoryInfo');
	localStorage.setItem(
		'categoryInfo',
		JSON.stringify({ category: 'Photo, video and drones', subcategory: 'Cameras' })
	);
	window.location.href = '/category-page/category-page.html';
});

// ==================== ACTION CAMERAS ====================
ActionCaM.addEventListener('click', function (event) {
	event.preventDefault();
	console.log('hi');
	localStorage.removeItem('categoryInfo');
	localStorage.setItem(
		'categoryInfo',
		JSON.stringify({ category: 'Photo, video and drones', subcategory: 'Action Cameras' })
	);
	window.location.href = '/category-page/category-page.html';
});

// ==================== DRONES ====================
Drones.addEventListener('click', function (event) {
	event.preventDefault();
	console.log('hi');
	localStorage.removeItem('categoryInfo');
	localStorage.setItem(
		'categoryInfo',
		JSON.stringify({ category: 'Photo, video and drones', subcategory: 'Drones' })
	);
	window.location.href = '/category-page/category-page.html';
});

// ==================== GAMING CHAIRS ====================
GamingChair.addEventListener('click', function (event) {
	event.preventDefault();
	console.log('hi');
	localStorage.removeItem('categoryInfo');
	localStorage.setItem(
		'categoryInfo',
		JSON.stringify({ category: 'Accessories', subcategory: 'Gaming Chair' })
	);
	window.location.href = '/category-page/category-page.html';
});

// ==================== KEYBOARDS ====================
Keyboards.addEventListener('click', function (event) {
	console.log('hi');
	event.preventDefault();
	console.log('hi');
	localStorage.removeItem('categoryInfo');
	localStorage.setItem(
		'categoryInfo',
		JSON.stringify({ category: 'Accessories', subcategory: 'Keyboard' })
	);
	window.location.href = '/category-page/category-page.html';
});

// ==================== MOUSE ====================
GamingMice.addEventListener('click', function (event) {
	console.log('hi');
	event.preventDefault();
	console.log('hi');
	localStorage.removeItem('categoryInfo');
	localStorage.setItem(
		'categoryInfo',
		JSON.stringify({ category: 'Accessories', subcategory: 'Mouse' })
	);
	window.location.href = '/category-page/category-page.html';
});

// ==================== MOUSE PADS ====================
MousePads.addEventListener('click', function (event) {
	console.log('hi');
	event.preventDefault();
	console.log('hi');
	localStorage.removeItem('categoryInfo');
	localStorage.setItem(
		'categoryInfo',
		JSON.stringify({ category: 'Accessories', subcategory: 'Mouse Pads' })
	);
	window.location.href = '/category-page/category-page.html';
});

// ==================== GAMES ====================
Games.addEventListener('click', function (event) {
	console.log('hi');
	event.preventDefault();
	console.log('hi');
	localStorage.removeItem('categoryInfo');
	localStorage.setItem(
		'categoryInfo',
		JSON.stringify({ category: 'Gaming', subcategory: 'Games' })
	);
	window.location.href = '/category-page/category-page.html';
});

// ==================== CONTROLLERS ====================
Controllers.addEventListener('click', function (event) {
	console.log('hi');
	event.preventDefault();
	console.log('hi');
	localStorage.removeItem('categoryInfo');
	localStorage.setItem(
		'categoryInfo',
		JSON.stringify({ category: 'Gaming', subcategory: 'Controllers' })
	);
	window.location.href = '/category-page/category-page.html';
});

// Cpu.addEventListener('click', function (event) {
// 	event.preventDefault();

// 	const Product = {
// 		category: 'PC Components',
// 		subCategory: 'Processors',
// 	};

// 	const productString = JSON.stringify(Product);

// 	localStorage.setItem('Product', productString);

// 	window.location.href = this.href;
// 	const getProduct = JSON.parse(localStorage.getItem(Product));
// 	console.log('u Pressed on CPU', getProduct);
// });

// Gpu.addEventListener('click', function (event) {
// 	event.preventDefault();

// 	const Product = {
// 		category: 'PC Components',
// 		subCategory: 'Graphics Cards',
// 	};

// 	const productString = JSON.stringify(Product);

// 	localStorage.setItem('Product', productString);

// 	window.location.href = this.href;
// 	const getProduct = JSON.parse(localStorage.getItem(Product));
// 	console.log('u Pressed on GPU', getProduct);
// });

// Tv.addEventListener('click', function (event) {
// 	event.preventDefault();

// 	const Product = {
// 		category: 'TVs',
// 		subCategory: null,
// 	};

// 	const productString = JSON.stringify(Product);

// 	localStorage.setItem('Product', productString);

// 	window.location.href = this.href;
// 	const getProduct = JSON.parse(localStorage.getItem(Product));
// 	console.log('u Pressed on TV', getProduct);
// });

// Ram.addEventListener('click', function (event) {
// 	event.preventDefault();

// 	const Product = {
// 		category: 'RAM',
// 		subCategory: null,
// 	};

// 	const productString = JSON.stringify(Product);

// 	localStorage.setItem('Product', productString);

// 	window.location.href = this.href;
// 	const getProduct = JSON.parse(localStorage.getItem(Product));
// });

// Cams.addEventListener('click', function (event) {
// 	event.preventDefault();

// 	const Product = {
// 		category: 'Photo, video and drones',
// 		subCategory: 'Cameras',
// 	};

// 	const productString = JSON.stringify(Product);

// 	localStorage.setItem('Product', productString);

// 	window.location.href = this.href;
// 	const getProduct = JSON.parse(localStorage.getItem(Product));
// });

// ActionCaM.addEventListener('click', function (event) {
// 	event.preventDefault();

// 	const Product = {
// 		category: 'Photo, video and drones',
// 		subCategory: 'Action Cameras',
// 	};

// 	const productString = JSON.stringify(Product);

// 	localStorage.setItem('Product', productString);

// 	window.location.href = this.href;
// 	const getProduct = JSON.parse(localStorage.getItem(Product));
// });

// Drones.addEventListener('click', function (event) {
// 	event.preventDefault();

// 	const Product = {
// 		category: 'Photo, video and drones',
// 		subCategory: 'Drones',
// 	};

// 	const productString = JSON.stringify(Product);

// 	localStorage.setItem('Product', productString);

// 	window.location.href = this.href;
// 	const getProduct = JSON.parse(localStorage.getItem(Product));
// });

// GamingChair.addEventListener('click', function (event) {
// 	event.preventDefault();

// 	const Product = {
// 		category: 'Accessories',
// 		subCategory: 'Gaming Chair',
// 	};

// 	const productString = JSON.stringify(Product);

// 	localStorage.setItem('Product', productString);

// 	window.location.href = this.href;
// 	const getProduct = JSON.parse(localStorage.getItem(Product));
// });

// Keyboards.addEventListener('click', function (event) {
// 	event.preventDefault();

// 	const Product = {
// 		category: 'Accessories',
// 		subCategory: 'Keyboards',
// 	};

// 	const productString = JSON.stringify(Product);

// 	localStorage.setItem('Product', productString);

// 	window.location.href = this.href;
// 	const getProduct = JSON.parse(localStorage.getItem(Product));
// });

// GamingMice.addEventListener('click', function (event) {
// 	event.preventDefault();

// 	const Product = {
// 		category: 'Accessories',
// 		subCategory: 'Mouse',
// 	};

// 	const productString = JSON.stringify(Product);

// 	localStorage.setItem('Product', productString);

// 	window.location.href = this.href;
// 	const getProduct = JSON.parse(localStorage.getItem(Product));
// });

// MousePads.addEventListener('click', function (event) {
// 	event.preventDefault();

// 	const Product = {
// 		category: 'Accessories',
// 		subCategory: 'Mouse Pads',
// 	};

// 	const productString = JSON.stringify(Product);

// 	localStorage.setItem('Product', productString);

// 	window.location.href = this.href;
// 	const getProduct = JSON.parse(localStorage.getItem(Product));
// });

// Games.addEventListener('click', function (event) {
// 	event.preventDefault();

// 	const Product = {
// 		category: 'Gaming',
// 		subCategory: 'Games',
// 	};

// 	const productString = JSON.stringify(Product);

// 	localStorage.setItem('Product', productString);

// 	window.location.href = this.href;
// 	const getProduct = JSON.parse(localStorage.getItem(Product));
// });
// Controllers.addEventListener('click', function (event) {
// 	event.preventDefault();

// 	const Product = {
// 		category: 'Gaming',
// 		subCategory: 'Controllers',
// 	};

// 	const productString = JSON.stringify(Product);

// 	localStorage.setItem('Product', productString);

// 	window.location.href = this.href;
// 	const getProduct = JSON.parse(localStorage.getItem(Product));
// });
