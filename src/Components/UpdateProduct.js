import React, { useState, useEffect } from "react";
import { fs } from '../Components/Config/Firebase'
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

export const UpdateProducts = () => {
    const [products, setProducts] = useState([]);
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [updatedPrice, setUpdatedPrice] = useState('');
    const [updatedQty, setUpdatedQty] = useState('');
    const [productIdToUpdate, setProductIdToUpdate] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const productsCollectionRef = collection(fs, 'tblProducts');
            const snapshot = await getDocs(productsCollectionRef);
            const productsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProducts(productsData);
        };
        fetchProducts();
    }, []);

    const handleUpdateProducts = async () => {
        if (productIdToUpdate) {
            const productDocRef = doc(fs, 'tblProducts', productIdToUpdate);
            await updateDoc(productDocRef, {
                prodTitle: updatedTitle,
                prodDesc: updatedDescription,
                prodPrice: Number(updatedPrice),
                prodQty: Number(updatedQty),
            });
            // Refresh product data after update
            const updatedProducts = products.map(product => {
                if (product.id === productIdToUpdate) {
                    return {
                        ...product,
                        prodTitle: updatedTitle,
                        prodDesc: updatedDescription,
                        prodPrice: Number(updatedPrice),
                        prodQty: Number(updatedQty),
                    };
                }
                return product;
            });
            setProducts(updatedProducts);
            // Reset form fields
            setUpdatedTitle('');
            setUpdatedDescription('');
            setUpdatedPrice('');
            setUpdatedQty('');
            setProductIdToUpdate('');
        } else {
            // Handle case where no product is selected for update
            console.log("Please select a product to update.");
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await deleteDoc(doc(fs, 'tblProducts', productId));
            const updatedProducts = products.filter(product => product.id !== productId);
            setProducts(updatedProducts);
            // Reset form fields
            setUpdatedTitle('');
            setUpdatedDescription('');
            setUpdatedPrice('');
            setUpdatedQty('');
            setProductIdToUpdate('');
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleProductSelection = (productId) => {
        const selectedProduct = products.find(product => product.id === productId);
        setUpdatedTitle(selectedProduct.prodTitle);
        setUpdatedDescription(selectedProduct.prodDesc);
        setUpdatedPrice(selectedProduct.prodPrice);
        setUpdatedQty(selectedProduct.prodQty);
        setProductIdToUpdate(productId);
    };

    return (
        <div className="container">
            <h1>Update Products</h1>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <h3>Products List:</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.prodTitle}</td>
                                    <td>{product.prodDesc}</td>
                                    <td>{product.prodPrice}</td>
                                    <td>{product.prodQty}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => handleProductSelection(product.id)}>Select</button>
                                        <button className="btn btn-danger" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <h3>Update Product Details:</h3>
                    <label>Title:</label>
                    <input type="text" className="form-control" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />
                    <br />
                    <label>Description:</label>
                    <input type="text" className="form-control" value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)} />
                    <br />
                    <label>Price:</label>
                    <input type="number" className="form-control" value={updatedPrice} onChange={(e) => setUpdatedPrice(e.target.value)} />
                    <br />
                    <label>Quantity:</label>
                    <input type="number" className="form-control" value={updatedQty} onChange={(e) => setUpdatedQty(e.target.value)} />
                    <br />
                    <button onClick={handleUpdateProducts} className="btn btn-primary">Update Product</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProducts;
