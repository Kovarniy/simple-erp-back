module.exports = (app) => {
    const departmentsController = require('../controller/DepartmentsController');

    app.route("/api/departments/add").post(departmentsController.add);
    app.route("/api/departments").get(departmentsController.getAll);
    app.route("/api/departments/:id").get(departmentsController.getOne);
    app.route("/api/departments").put(departmentsController.update);
    app.route("/api/departments/delete/:id").delete(departmentsController.delete);
}