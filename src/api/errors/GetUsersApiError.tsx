export class GetUsersApiError extends Error {

    constructor(...params: any) {
        super(...params)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, GetUsersApiError)
        }

        this.name = 'GetUsersApiError'
    }

}
