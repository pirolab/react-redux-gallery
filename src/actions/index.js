export const next = (dataLength) => {
    return {
        type:'NEXT',
        dataLength : dataLength,
    }
}
export const prev = (dataLength) => {
    return {
        type:'PREV',
        dataLength : dataLength,
    }
}

export const bullet = (index,dataLength) => {
    return {
        type:'BULLET',
        dataLength : dataLength,
        index : index
    }
}


