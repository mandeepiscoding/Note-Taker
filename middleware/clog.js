// Middleware function to log incoming requests.
const clog = (req, res, next) => {
    switch (req.method) {
        case 'GET':
            console.info(`GET request to ${req.path}`);
            break;
        case 'POST':
            console.info(`POST request to ${req.path}`);
            break;
        default:
            console.info(`${req.method} request to ${req.path}`);
    }
    next();
};

module.exports = clog;