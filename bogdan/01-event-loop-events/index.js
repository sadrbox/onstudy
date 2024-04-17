let product = {
	pending: true,
	products: [],
	getProducts: () => {
		fetch("https://dummyjson.com/products?limit=3")
			.then((response) => response.json())
			.then((data) => {
				this.products = data;
			});
	},
	getData: () => {
		product.getProducts();
		const interval = setInterval(() => {
			this.pending = this.products ? false : true;
			if (!this.pending) {
				clearInterval(interval);
				console.log(this.products);
				// }
			} else console.log("pending is ", this.pending);
		}, 100);
	},
};

product.getData();
