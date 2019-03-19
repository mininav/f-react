const measuresReducer = (state = [], action) => {
    switch (action.type) {
        case 'MEASURES':
            return action.measures;
        default:
            return state;

    }
};

export default measuresReducer;