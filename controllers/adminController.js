const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/libros.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const rutaCreate = "/admin/create"
const rutaEdit = "admin/edit"
const rutaDelete = "/admin/delete"

const controller = {
	// Root - Show all products
	indexCreate: (req, res) => {
		const ruta = rutaCreate
		res.render('admin', { products, ruta : ruta , toThousand } )
	},
	
	// Create -  Method to store
	create: (req, res) => {
		let img
		
		console.log(req.files);
		let ultimoId = Number(products[products.length -1].id);
		let nuevoUltimoId = (ultimoId + 1).toString();

		if(req.files[0] != undefined){
			img = req.files[0].filename
		} else {
			img = 'default-image.png'
		}
		let newProduct = {
			id: nuevoUltimoId,
			titulo: req.body.titulo,
        	autor: req.body.autor,
        	precio: req.body.precio,
        	paginas: req.body.paginas,
        	editorial: req.body.editorial,
        	categorias: req.body.categorias,
        	sinopsis: req.body.sinopsis,
        	seccion: req.body.seccion,
			img: img
		};
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		let id = req.body.id
		let productToEdit = products.find(product => product.id == id)
		res.render('admin', {productToEdit})
	},
	// Update - Method to update
/*
	update: (req, res) => {
		let id = req.body.id;
		let productToEdit = products.find(product => product.id == id)
		let image

		if(req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = productToEdit.image
		}

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	},
*/
	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	}
};

module.exports = controller;