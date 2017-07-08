export function toggleShowAnswer(id) {
    return { type: 'CLICK_SHOW_ANSWER',id };
}

export function toggleTips(id) {
    return { type: 'CLICK_TIPS',id };
}

export function toggleChoose(id,choose) {
    return { type: 'CLICK_CHOOSE', id, choose };
}

export function toggleCheck(id) {
    return { type: 'CLICK_CHECK', id };
}

export function toggleNext() {
    return { type: 'NEXT' };
}

export function togglePre() {
    return { type: 'PRE' };
}