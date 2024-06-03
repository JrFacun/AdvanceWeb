import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { auth, fs } from "./Config/Firebase";
import { getDoc, doc } from 'firebase/firestore';

export const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const change = auth.onAuthStateChanged(async (authUser) => {
            if (authUser) {
                const userDoc = doc(fs, 'tblUsers', authUser.uid);
                const userSnapshot = await getDoc(userDoc);
                setUser(userSnapshot.data()?.FullName || 'User');
            } else {
                setUser(null);
            }
        });

        return () => change();
    }, []);

    return (
        <>
            <Header user={user} />

            <Body />
            <Footer />
        </>
    );
}

export default Home;
