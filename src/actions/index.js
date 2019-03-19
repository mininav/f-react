export const REQUEST_PRODUCTS = 'getNodeProducts';

export const propductUpdates = products => ({
    type: 'PRODUCT_UPDATES',
    updates: products
});

export const productList = products => ({
    type: 'PRODUCT_LIST',
    list: products
});

export const productTree = tree => ({
    type: 'PRODUCT_TREE',
    tree: tree
});

export const measuresReceived = measures => ({
    type: 'MEASURES',
    measures: measures
});

