export const REQUEST_PRODUCTS = 'getNodeProducts';

export function requestProducts(nodeId) {
    return {
        type: REQUEST_PRODUCTS,
        nodeId
    }
}

function fetchProducts(nodeId) {
    return dispatch => {
        dispatch(requestProducts(nodeId))
        return
    }
}

