import React, { useState, useEffect, useContext } from "react";
import { auth, fs } from './Config/Firebase';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import CartContext from './CartContext';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollectionRef = collection(fs, 'tblProducts');
                const snapshot = await getDocs(productsCollectionRef);
                const productsData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(productsData);
            } catch (error) {
                window.alert("Error fetching products: " + error.message);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setIsLoggedIn(!!user);
        });

        return () => unsubscribe();
    }, []);

    const handleProductClick = (product) => {
        if (!isLoggedIn) {
            setShowLoginModal(true);
        } else {
            setSelectedProduct(product);
        }
    };

    const handleBorrowClick = async (product) => {
        if (!isLoggedIn) {
            window.alert("Please Login First!");
            navigate('/login');
        } else {
            const confirmAdd = window.confirm("Do you want to add this product to your bucket?");
            if (!confirmAdd) return;

            const existingProduct = cart.find(item => item.id === product.id);
            let borrowedProduct;
            if (existingProduct) {
                setCart(cart.map(item =>
                    item.id === product.id ? { ...item, prodQty: item.prodQty + 1 } : item
                ));
                borrowedProduct = { ...existingProduct, prodQty: existingProduct.prodQty + 1 };
            } else {
                borrowedProduct = { ...product, prodQty: 1 }; // Add only one item initially
                setCart(prevCart => [...prevCart, borrowedProduct]);
            }

            const user = auth.currentUser;
            if (user) {
                try {
                    const userBucketDocRef = doc(fs, 'tblUsers', user.uid, 'tblBucket', product.id);
                    await setDoc(userBucketDocRef, borrowedProduct, { merge: true });
                    window.alert("Product has been added to your bucket!");
                    window.location.reload();
                } catch (error) {
                    window.alert("Error adding product to bucket: " + error.message);
                }
            }

            closeModals();
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
                    </div>
                    <br />
                    {products.length > 0 ? (
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
                                            <button className="btn-borrow" onClick={() => handleBorrowClick(product)}>Borrow</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="container-fluid"> Please Wait..... </div>
                    )}
                </div>
            </section>

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
                                            <h2 className="text-uppercase">{selectedProduct.prodTitle}</h2>
                                            <img className="img-fluid d-block mx-auto" src={selectedProduct.prodURL} alt="..." />
                                            <p>{selectedProduct.prodDesc}</p>
                                            <button className="btn-borrow" onClick={() => handleBorrowClick(selectedProduct)}>Borrow</button>
                                            <button className="btn-close" onClick={closeModals}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showLoginModal && (
                <div className="modal fade show" id="loginModal" tabIndex={-1} role="dialog" style={{ display: 'block' }} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" onClick={closeModals}>
                                <img src="assets/img/close-icon.svg" alt="Close modal" />
                            </div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="modal-body">
                                            <h2 className="text-uppercase">Login Required</h2>
                                            <p>
                                                You need to be logged in to borrow items. Please login to continue.
                                            </p>
                                            <button className="btn-login" onClick={() => navigate('/login')}>Login</button>
                                            <button className="btn-close" onClick={closeModals}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Products;
