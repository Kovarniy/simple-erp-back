module.exports = (app) => {
    const indexController = require('../controller/indexController');
    app.route("/").get(indexController.index);
}