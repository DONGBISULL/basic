import React, {useState} from 'react';
import Products from "./components/Products.jsx";

const AppProducts = () => {
    const [showProducts, setShowProducts] = useState(true)
    return (
        <>
            <div>
                {showProducts && <Products/>}
                <button onClick={() => setShowProducts((show) => !show)}> toggle</button>
            </div>
        </>
    );
};

export default AppProducts;