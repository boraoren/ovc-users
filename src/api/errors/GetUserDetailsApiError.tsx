export class GetUserDetailsApiError extends Error {

    constructor(...params: any) {
        super(...params)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, GetUserDetailsApiError)
        }

        this.name = 'GetUserDetailsApiError'
    }

}
