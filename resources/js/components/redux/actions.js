export const ADD_TODO = "ADD_TODO";
export const ADD_USER = "ADD_USER";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const RESET_USER = "RESET_USER";

export function ResetUSER() {
    return {
        type:'RESET_USER',
//        payload:todo
    }
}

export function SetUSER(todo) {
    return {
        type:'SET_CURRENT_USER',
        payload:todo
    }
}

export function AddUSER(todo) {
    return {
        type:'ADD_USER',
        payload:todo
    }
}

export function AddTODO(todo) {
    return {
        type:'ADD_TODO',
        payload:todo
    }
}

export function DeleteTODO(todoID) {
    return {
        type:'DELETE_TODO',
        payload:todoID
    }
}

export function UpdateTODO(todo) {
    return {
        type:'UPDATE_TODO',
        payload:todo
    }
}