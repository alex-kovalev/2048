function upPress() {
    return {type: 'UP_PRESS'}
}

function downPress() {
    return {type: 'DOWN_PRESS'}
}

function leftPress() {
    return {type: 'LEFT_PRESS'}
}

function rightPress() {
    return {type: 'RIGHT_PRESS'}
}

function clearKeyDownEventListener() {
    return window.removeEventListener('keydown', onKeyDown)
}


export function listenToKeyboard(store) {
    function onKeyDown(e) {
        switch (e.keyCode) {
            case 37:
                store.dispatch(leftPress())
                break
            case 38:
                store.dispatch(upPress())
                break
            case 39:
                store.dispatch(rightPress())
                break
            case 40:
                store.dispatch(downPress())
                break
            default:
                return
        }
    }
    window.addEventListener('keydown', onKeyDown, false)
    return clearKeyDownEventListener
}
