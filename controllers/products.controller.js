import Product from '../models/model.product.js';

// Controller function to create a new product
export const createProduct = async (req, res) => {
    try {
        console.log(req.body);
        const length = (await Product.find({})).length;
        const newProduct = new Product({
            id: length + 1,
            name: req.body.name,
            quantity: parseInt(req.body.quantity)
        });
        await newProduct.save();
        
        // Respond with a success status and the newly created product in JSON format
        return res.status(201).json({
            data: {
                product: newProduct
            }
        });
    } catch (err) {
        // If an error occurs, log the error and respond with a server error status
        console.log(`Error in creating a product: ${err}`);
        return res.status(501).json();
    }
};

// Controller function to get all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}, {_id: 0, id: 1, name: 1, quantity: 1});
        
        // Respond with a success status and the list of products in JSON format
        return res.status(200).json({
            data: {
                products: products
            }
        });
    } catch (err) {
        // If an error occurs, log the error and respond with a server error status
        console.log(`Error in getting all products: ${err}`);
        return res.status(501).json();
    }
};

// Controller function to delete a product by ID
export const deleteProduct = async (req, res) => {
    try {
        const isDeleted = await Product.findOneAndRemove({id: parseInt(req.params.id)});
        if (isDeleted) {
            // If the product is deleted successfully, respond with a success status and a message
            return res.status(200).json({
                data: {
                    message: "Product deleted"
                }
            });
        }
        // If the product doesn't exist, respond with a 'no content' status
        return res.status(204).json();
    } catch (err) {
        // If an error occurs, log the error and respond with a server error status
        console.log(`Error in deleting a product: ${err}`);
        return res.status(501).json();
    }
};

// Controller function to update the quantity of a product by ID
export const updateProductQuantity = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findOne({ id: productId });

        if (!product) {
            // If the product is not found, respond with a 'not found' status and a message
            return res.status(404).json({ message: "Product not found" });
        }

        const updatedQuantity = product.quantity + parseInt(req.query.number);
        await Product.findOneAndUpdate({ id: productId }, { quantity: updatedQuantity });

        const updatedProduct = await Product.findOne({ id: productId }, { _id: 0, id: 1, name: 1, quantity: 1 });

        // Respond with a success status, the updated product, and a success message
        return res.status(200).json({
            data: {
                product: updatedProduct,
                message: "Updated successfully"
            }
        });
    } catch (err) {
        // If an error occurs, log the error and respond with a server error status
        console.log(`Error in updating a product: ${err}`);
        return res.status(501).json();
    }
};
