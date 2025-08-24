import { useState } from "react";

const Product = (props) => {

    const [title, setTitle] =  useState(props.title);

    const productClickHandler = () => {
        setTitle('Anonymous');
        console.log(title);
    }

    return (
        <figure onClick={productClickHandler} className='product'>
            <img src={props.image} alt={props.title} />
            <figcaption>
                <h2>{ title }</h2>
                <h3>$ { props.price }</h3>
                <p>{ props.description }</p>
            </figcaption>
        </figure>
    )
}

export default Product
