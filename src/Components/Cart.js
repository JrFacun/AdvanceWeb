import React, { useContext } from "react";
import { auth, fs } from '../Components/Config/Firebase'; // Import your Firebase configuration
import { doc, deleteDoc } from 'firebase/firestore';
import CartContext from './CartContext'; // Correct import
import Header from "./Header";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);

    const incrementQty = (product) => {
        setCart(cart.map(item =>
            item.id === product.id ? { ...item, prodQty: item.prodQty + 1 } : item
        ));
    };

    const decrementQty = (product) => {
        setCart(cart.map(item =>
            item.id === product.id && item.prodQty > 1 ? { ...item, prodQty: item.prodQty - 1 } : item
        ));
    };

    const removeItem = async (product) => {
        if (window.confirm("Are you sure you want to remove this item from your bucket?")) {
            try {
                const user = auth.currentUser;
                if (user) {
                    const userBucketDocRef = doc(fs, 'tblUsers', user.uid, 'tblBucket', product.id);
                    await deleteDoc(userBucketDocRef);
                    window.alert("Product has been removed from your bucket!");
                }
                setCart(cart.filter(item => item.id !== product.id));
                window.location.reload(); // Refresh the page after removing the item
            } catch (error) {
                window.alert("Error removing product from bucket: " + error.message);
            }
        }
    };

    return (
        <div>
            <Header />
            <br></br>
            <div className="container">
                <h2 className="section-heading text-uppercase text-center">Borrow</h2>
                <div className="portfolio-caption-subheading text-muted text-center">Items Borrowed</div>
                <br></br>
                <div className="row">
                    {cart.map((product, index) => (
                        <div key={index} className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">
                                <div className="portfolio-link">
                                    <img className="img-fluid" src={product.prodURL} alt="..." />
                                </div>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">{product.prodTitle}</div>
                                    <div className="portfolio-caption-subheading text-muted">{product.prodDesc}</div>
                                    <div className="portfolio-caption-subheading text-muted">Price: {product.prodPrice}</div>
                                    <div className="portfolio-caption-subheading text-muted">Qty: {product.prodQty}</div>
                                    <div className="quantity-buttons">
                                        <button onClick={() => decrementQty(product)} className="btn btn-secondary btn-sm">-</button>
                                        <span className="mx-2">{product.prodQty}</span>
                                        <button onClick={() => incrementQty(product)} className="btn btn-secondary btn-sm">+</button>
                                    </div>
                                    <button onClick={() => removeItem(product)} className="btn btn-danger btn-sm mt-2">Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {cart.length === 0 && <p>Your cart is empty.</p>}
            </div>
        </div>
    );
}

export default Cart;
