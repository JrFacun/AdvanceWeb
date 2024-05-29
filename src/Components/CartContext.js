import React, { createContext, useState, useEffect } from "react";
import { auth, fs } from "./Config/Firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                const cartCollectionRef = collection(fs, `tblUsers/${currentUser.uid}/tblBucket`);
                const snapshot = await getDocs(cartCollectionRef);
                const cartData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setCart(cartData);
            } else {
                setUser(null);
                setCart([]);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (user) {
            cart.forEach(async (item) => {
                const userBucketDocRef = doc(fs, 'tblUsers', user.uid, 'tblBucket', item.id);
                await setDoc(userBucketDocRef, item, { merge: true });
            });
        }
    }, [cart, user]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
