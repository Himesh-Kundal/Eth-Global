import React from 'react';
const TitleImage = ({ title, imageUrl, altText }) => {
    return (React.createElement("div", { className: "title-image-container" },
        React.createElement("h1", null, title),
        React.createElement("img", { src: imageUrl, alt: altText, className: "title-image" })));
};
export default TitleImage;
//# sourceMappingURL=Card.js.map