import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { auth, fs } from "./Config/Firebase";
import { getDoc, doc, getDocs, setDoc, onSnapshot } from 'firebase/firestore';

export const Home = () => {
    function GetUserUid() {
        const [uid, setUid] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    setUid(user.uid);
                }
            })
        }, [])
        return uid;
    }

    const uid = GetUserUid();

    function GetCurrentUser() {
        const [user, setUser] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(async (user) => {
                if (user) {
                    const userCollectionRef = doc(fs, 'tblUsers', user.uid);
                    const userSnapshot = await getDoc(userCollectionRef);
                    setUser(userSnapshot.data().FullName);
                } else {
                    setUser(null);
                }
            })
        }, [])
        return user;
    }
    const user = GetCurrentUser();
    return (
        <>
            <Header user={user} />
            <Body />
            <Footer />
        </>
    )
}
export default Home;
