const isAddingReducer = (state = 0, action) => {
     if (action.type === 'NEXT') {
        return state + 1 ;
    };

    if (action.type === 'PRE') {
        return state - 1 ;
    };
    return state;
};

export default isAddingReducer;
