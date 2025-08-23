export const isEmpty = (data) => {
    if (data === undefined || data === null) {
        return true;
    }
    if (typeof data === 'string' && data.trim() === '') {
        return true;
    }
    if (Array.isArray(data) && data.length === 0) {
        return true;
    }
    if (typeof data === 'object' && Object.keys(data).length === 0) {
        return true;
    }
    return false;
}

export const getCookie = () => {
    let mp = new Map();
    /* name1=value1;name2=value2 형식 */
    const cookie = document.cookie;
    const arr = cookie.split(";");

    arr.forEach((elem) => {
        const temp = elem.split("=");
        mp.set(temp[0], temp[1]);
    });

    return mp;
}

export const getUserId = () => {
    console.log(getCookie());
}

export const customConfirm = (msg, beforeConfirm) => {
    if (!isEmpty(beforeConfirm)) {
        beforeConfirm();
    }
    return window.confirm(msg);
}