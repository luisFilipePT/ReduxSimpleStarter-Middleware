export default function ({ dispatch }) {
    return next => action => {
        // if its not a promise
        if (!action.payload || !action.payload.then) {
            return next(action);
        }

        action.payload
            .then((response) => {
                const newAction = { ...action, payload: response };
                dispatch(newAction);
            });
    }
}