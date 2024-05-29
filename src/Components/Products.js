import React, { useState, useEffect } from "react";
import { auth, fs } from '../Components/Config/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from "react-router-dom";

export const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);

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

    useEffect(() => {
        // Add an auth state observer and get user data
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const handleProductClick = (product) => {
        if (!isLoggedIn) {
            setShowLoginModal(true);
        } else {
            setSelectedProduct(product);
        }
    };

    const closeModals = () => {
        setShowLoginModal(false);
        setSelectedProduct(null);
    };

    return (
        <>
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Products</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        {/* <a className="btn btn-primary btn-xl text-uppercase">
                            <Link to="/add-products" className="nav-link">
                                Add Products
                            </Link>
                        </a>
                        <a className="btn btn-primary btn-xl text-uppercase">
                            <Link to="/update-products" className="nav-link">
                                Update Products
                            </Link>
                        </a> */}
                    </div>
                    <br></br>
                    {products.length > 0 && (
                        <div className="row">
                            {products.map(product => (
                                <div key={product.id} className="col-lg-4 col-sm-6 mb-4">
                                    <div className="portfolio-item">
                                        <a
                                            className="portfolio-link"
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleProductClick(product);
                                            }}
                                        >
                                            <div className="portfolio-hover">
                                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                                            </div>
                                            <img className="img-fluid" src={product.prodURL} alt="..." />
                                        </a>
                                        <div className="portfolio-caption">
                                            <div className="portfolio-caption-heading">{product.prodTitle}</div>
                                            {/* <div className="portfolio-caption-subheading text-muted">{product.prodDesc}</div>
                                        <div className="portfolio-caption-subheading text-muted">Price: {product.prodPrice}</div>
                                        <div className="portfolio-caption-subheading text-muted">Qty: {product.prodQty}</div> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {products.length < 1 && (
                        <div className="container-fluid"> Please Wait..... </div>
                    )}
                </div>
            </section>

            {/* Product Details Modal */}
            {selectedProduct && (
                <div className="portfolio-modal modal fade show" id={`portfolioModal${selectedProduct.id}`} tabIndex={-1} role="dialog" style={{ display: 'block' }} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" onClick={closeModals}>
                                <img src="assets/img/close-icon.svg" alt="Close modal" />
                            </div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="modal-body">
                                            {/* Project details*/}
                                            <h2 className="text-uppercase">{selectedProduct.prodTitle}</h2>
                                            <img className="img-fluid d-block mx-auto" src={selectedProduct.prodURL} alt="..." />
                                            <p>{selectedProduct.prodDesc}</p>
                                            <ul className="list-inline">
                                                <li><strong>Price:</strong> {selectedProduct.prodPrice}</li>
                                                <li><strong>Qty:</strong> {selectedProduct.prodQty}</li>
                                            </ul>
                                            <button className="btn btn-secondary btn-xl text-uppercase" onClick={closeModals}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Login Prompt Modal */}
            {showLoginModal && (
                <div className="portfolio-modal modal fade show" id="loginPromptModal" tabIndex={-1} role="dialog" style={{ display: 'block' }} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" onClick={closeModals}>
                                <img src="assets/img/close-icon.svg" alt="Close modal" />
                            </div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="modal-body">
                                            <h2 className="text-uppercase">You Need to Login First</h2>
                                            <p>Please log in to view the product details.</p>
                                            <Link to="/login" className="btn btn-primary btn-xl text-uppercase">Login</Link>
                                            <button className="btn btn-secondary btn-xl text-uppercase" onClick={closeModals}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Products;
