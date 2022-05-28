
class Actions {
    loginAdminAction( admin ) {
        const LOGIN = "LOGIN"

        return {
            type: LOGIN,
            payload: admin
        }
    }
}

export default new Actions()
