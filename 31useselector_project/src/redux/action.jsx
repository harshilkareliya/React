export const ADD = 'ADD'
export const REMOVE = 'REMOVE'

export const addMoney = (amount) => ({
    type : ADD,
    payload: amount
})

export const removeMoney = (amount) => ({
    type : REMOVE,
    payload: amount
})
