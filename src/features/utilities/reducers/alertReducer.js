export function getAlertMessages(state, actions) {
    switch (actions.type) {
        case "SUCCESS":
            return {
                type: "SUCCESS",
                message: actions.message
            }
        case "ERROR":
            return {
                type: "ERROR",
                message: actions.message
            }
        default:
            return {
                type: '',
                message: ''
            }
    }
}