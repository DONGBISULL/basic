import React, {useEffect, useState} from 'react';

const Products = () => {

    const [checked, setChecked] = useState(false)
    const [products, setProducts] = useState([])
    const handleChange = () => {
        setChecked((prev) => !prev)
    }
    /* onMount 와 watch 가 비슷한 느낌? 빈 배열일 땐 onMount 와 비슷함 */
    useEffect(() => {
        fetch(`data/${checked ? 'sale_' : ''}products.json`)
            .then(res => res.json())
            .then(data => {
                console.log('데이터 조회 ');
                setProducts(data);
            })
        return () => {
            console.log("정리 중")
        }
    }, [checked]);

    return (
        <>
            <input type="checkbox" onChange={handleChange} value={checked}/>
            <label htmlFor="checkbox">
                Show Only 🔥 Sale
            </label>
            {products.map((product) => (
                <li key={product.id}>
                    <article>
                        <h3> {product.name}</h3>
                        <p>{product.price}</p>
                    </article>
                </li>
            ))}
        </>
    );
};

export default Products;