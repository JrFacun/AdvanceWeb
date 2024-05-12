import React, { useState, useEffect } from "react";
import { auth, fs } from '../Components/Config/Firebase'
import { collection, getDocs } from 'firebase/firestore';
import { Link } from "react-router-dom";

export const Products = () => {
    const [products, setProducts] = useState([]);
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

    return (
        <>
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Products</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        <a className="btn btn-primary btn-xl text-uppercase">
                            <Link to="/add-products" className="nav-link">
                                Add Products
                            </Link>
                        </a>
                        <a className="btn btn-primary btn-xl text-uppercase">
                            <Link to="/update-products" className="nav-link">
                                Update Products
                            </Link>
                        </a>
                    </div>
                    <br></br>
                    {products.length > 0 && (
                        <div className="row">
                            {products.map(product => (
                                <div key={product.id} className="col-lg-4 col-sm-6 mb-4">
                                    <div className="portfolio-item">
                                        <a className="portfolio-link" data-bs-toggle="modal" href={`#portfolioModal${product.id}`}>
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

            {/* Portfolio Modals*/}
            {products.map(product => (
                <div key={product.id} className="portfolio-modal modal fade" id={`portfolioModal${product.id}`} tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" data-bs-dismiss="modal">
                                <img src="assets/img/close-icon.svg" alt="Close modal" />
                            </div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="modal-body">
                                            {/* Project details*/}
                                            <h2 className="text-uppercase">{product.prodTitle}</h2>
                                            <img className="img-fluid d-block mx-auto" src={product.prodURL} alt="..." />
                                            <p>
                                                {product.prodDesc}
                                            </p>
                                            <ul className="list-inline">
                                                <li><strong>Price:</strong> {product.prodPrice}</li>
                                                <li><strong>Qty:</strong> {product.prodQty}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Products;
