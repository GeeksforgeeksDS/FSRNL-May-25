import { useEffect, useState } from 'react'
import axios from 'axios';
import Product from '../components/Product';

const HomePage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1234/products')
            .then((res) => {
                setProducts(() => res.data);
            })
            .catch((err) => console.log(err));
    }, []);


    return (
        <div>
            {products.length === 0 && <p>Loading Products</p>}
            {products.length>0 && products.map((product) => {
                    return <Product
                        key={ product._id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                    />
                })
            }
        </div>
    )
}

export default HomePage
