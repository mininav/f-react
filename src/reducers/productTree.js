const productTree = (state = {}, action) => {

    switch (action.type) {
        case 'PRODUCT_TREE':
            return action.tree;
        default:
            return state;
    }
};

export default productTree;