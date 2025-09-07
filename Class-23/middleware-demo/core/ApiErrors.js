class BadRequestError extends Error{
    constructor(message = 'Bad request') {
        super(message);
        this.status = 400;
    }
}

class NotFoundError extends Error{
    constructor(message = 'Not found error') {
        super(message);
        this.status = 404;
    }
}

class InternalServerError extends Error{
    constructor(message = 'Internal server error') {
        super(message);
        this.status = 500;
    }
}

class AuthenticationError extends Error{
    constructor(message = 'Authentication error') {
        super(message);
        this.status = 401;
    }
}

module.exports = {
    BadRequestError,
    NotFoundError,
    InternalServerError,
    AuthenticationError
}