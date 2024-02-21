import React from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Card from "../components/Card";
import data from "../Data/data.json";

export default function Home() {
    const location = useLocation();

    return (
        <div>
            <Header />
            <Banner location={location} />
            <section className="cardsContainer">
                {data.map((location, index) => (
                    <Card
                        location={location}
                        key={index}
                    />
                ))}
            </section>
            <Footer />
        </div>
    );
}
