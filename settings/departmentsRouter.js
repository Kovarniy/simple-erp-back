module.exports = (app) => {
    const departmentsController = require('../controller/DepartmentsController');

    app.route("/departments/add").post(departmentsController.add);
    app.route("/departments").get(departmentsController.getAll);
    app.route("/departments/:id").get(departmentsController.getOne);
    app.route("/departments").put(departmentsController.update);
    app.route("/departments/delete/:id").delete(departmentsController.delete);
}