import React from 'react';
import "../../styles/pages/Novedades.css"

const NovedadItem = (props) => {
    const { title, content, image } = props;

    return (
        <div className="novedad-item">
            {image && <img src={image} alt={title} className="novedad-img" />}
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}

export default NovedadItem;