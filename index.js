// Import necessary modules
import express from 'express'; // Import Express framework
import bodyParser from 'body-parser'; // Import body-parser middleware
import { connectDB } from './config/mongoose.js'; // Import the database connection function
import productsRoutes from './routes/products.js'; // Import routes related to products

// Create an Express server instance
const server = express();

// Define the port number where the server will listen
const port = 3600;

// Middleware setup to parse incoming request bodies
server.use(bodyParser.json()); // Parse JSON data
server.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// Attach product-related routes to the '/products' endpoint
server.use('/products', productsRoutes);

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is listening at port: ${port}`); // Display a message indicating that the server is running
  connectDB(); // Establish a connection to the database
});