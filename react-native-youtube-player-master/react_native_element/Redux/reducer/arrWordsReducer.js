const defaultStateReading = [
    { id: 0, showCheck: false, checked: false, answer: "", showTextExplain1: false, showTextExplain2: false }
];


const arrWordsReducer = (state = defaultStateReading, action) => {

    if (action.type === 'CLICK_CHECK') {
        return state.map(e => {
            if (e.id !== action.id) return e;
            return { ...e, showCheck: false, checked: true };
        });
    };


    if (action.type === 'CLICK_CHOOSE') {
        return state.map(e => {
            if (e.id !== action.id) return e;
            return { ...e, showCheck: true, answer: action.choose };
        });
    };

    if (action.type === 'CLICK_SHOW_ANSWER') {
        return state.map(e => {
            if (e.id !== action.id) return e;
            return { ...e, showTextExplain1: !e.showTextExplain1, showTextExplain2: false };
        });
    };

    if (action.type === 'CLICK_TIPS') {
        return state.map(e => {
            if (e.id !== action.id) return e;
            return { ...e, showTextExplain1: false, showTextExplain2: !e.showTextExplain2 };
        });
    };

    if (action.type === 'NEXT') {
        return state.concat([{
            id: state.length,
            showCheck: false,
            checked: false,
            answer: "",
            showTextExplain1: false,
            showTextExplain2: false
        }]);
    }
    return state;
};

export default arrWordsReducer;
