module.exports = (app) => {
    const employeesController = require('../controller/EmployeesController');

    app.route("/api/employees/add").post(employeesController.add);
    app.route("/api/employees").get(employeesController.getAll);
    app.route("/api/employees/:id").get(employeesController.getOne);
    app.route("/api/employees").put(employeesController.update);
    app.route("/api/employees/delete/:id").delete(employeesController.delete);
}