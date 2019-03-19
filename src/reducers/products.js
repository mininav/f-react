const products = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT_UPDATES':
            return Object.assign({}, state, action.updates);
        case 'PRODUCT_LIST':
            return action.list;
        default:
            return state;
    }
};

export default products
