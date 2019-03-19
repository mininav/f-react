import React, {useEffect, useState} from 'react';
import Websocket from "../middleware/Websocket";
import PropTypes from 'prop-types'
import ProductRoot from "../components/ProductRoot";

ProductsPage.propTypes = {
    websocket: PropTypes.instanceOf(Websocket).isRequired,
    login: PropTypes.object

};

function ProductsPage({websocket, login}) {

    const[root, setRoot] = useState({});
    useEffect(() => {

        const unsubscribe = websocket.addMsgEventListener("productTree", root => {
            setRoot(root);
        });

        websocket.send({
            getProductTree: {}
        });

        return unsubscribe;
    }, []);

    const [products, setProducts] = useState({});
    useEffect(() => {

        return websocket.addMsgEventListener("products", products => {
            setProducts(products);
        });

    }, []);

    return(
        <div>
            <h1>Products 123</h1>
            <ProductRoot root={root} websocket={websocket}/>
        </div>
    )
}

export default ProductsPage;