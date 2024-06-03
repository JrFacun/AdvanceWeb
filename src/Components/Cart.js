import React, { useContext } from "react";
import { auth, fs } from '../Components/Config/Firebase'; // Import your Firebase configuration
import { doc, deleteDoc } from 'firebase/firestore';
import CartContext from './CartContext'; // Correct import
import Header from "./Header";
import './Cart.css'; // Import custom CSS

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
        if (window.confirm("Are you sure you want to remove this item from your cart?")) {
            try {
                const user = auth.currentUser;
                if (user) {
                    const userBucketDocRef = doc(fs, 'tblUsers', user.uid, 'tblBucket', product.id);
                    await deleteDoc(userBucketDocRef);
                    window.alert("Product has been removed from your cart!");
                }
                setCart(cart.filter(item => item.id !== product.id));
            } catch (error) {
                window.alert("Error removing product from cart: " + error.message);
            }
        }
    };

    return (
        <div>
            <Header />
            <div className="container custom-container">
                <h2 className="section-heading text-uppercase text-center">Borrowed</h2>
                <div className="cart-content">
                    {cart.map((product, index) => (
                        <div key={index} className="cart-item">
                            <div className="cart-item-image">
                                <img src={product.prodURL} alt={product.prodTitle} />
                            </div>
                            <div className="cart-item-details">
                                <div className="cart-item-title">{product.prodTitle}</div>
                                <div className="cart-item-desc">{product.prodDesc}</div>
                                <div className="cart-item-price">Price: {product.prodPrice}</div>
                                <div className="cart-item-qty">
                                    <button onClick={() => decrementQty(product)} className="btn btn-secondary btn-sm">-</button>
                                    <span className="mx-2">{product.prodQty}</span>
                                    <button onClick={() => incrementQty(product)} className="btn btn-secondary btn-sm">+</button>
                                </div>
                                <button onClick={() => removeItem(product)} className="btn btn-danger btn-sm mt-2">Remove</button>
                            </div>
                        </div>
                    ))}
                    {cart.length === 0 && <p className="text-center">Your cart is empty.</p>}
                </div>
                {/* <div className="cart-summary">
                    <div>Total: ₱{cart.reduce((acc, item) => acc + item.prodPrice * item.prodQty, 0)}</div>
                    <button className="btn btn-primary btn-block">Borrow</button>
                </div> */}
            </div>
        </div>
    );
}

export default Cart;
