import React from "react";
import PropTypes from "prop-types";

export default function Banner({ location }) {
    const currentPath = location.pathname;

    const bannerImages = {
        "/Home": {
            image: require("../assets/imghome.jpg"),
            text: "Chez vous, partout et ailleurs",
        },
        "/About": {
            image: require("../assets/imgabout.jpg"),
            text: "",
        },
    };

    const bannerData = bannerImages[currentPath] || {};
    const { image, text } = bannerData;

    return (
        <section className={`banner ${currentPath === "/Home" ? "" : "aboutBanner"}`}>
            <img src={image} alt="Bannière" />
            {currentPath === "/Home" && <h1>{text}</h1>}
        </section>
    );
}

Banner.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
};
