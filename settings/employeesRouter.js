module.exports = (app) => {
    const employeesController = require('../controller/EmployeesController');

    app.route("/employees/add").post(employeesController.add);
    app.route("/employees").get(employeesController.getAll);
    app.route("/employees/:id").get(employeesController.getOne);
    app.route("/employees").put(employeesController.update);
    app.route("/employees/delete/:id").delete(employeesController.delete);
}