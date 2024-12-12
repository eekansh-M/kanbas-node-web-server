import * as assignmentsDao from "./dao.js"

export default function AssignmentRoutes(app) {
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const status = await assignmentsDao.deleteAssignment(assignmentId);
    res.json(status);  // Using res.json instead of res.send
  });

  app.put("/api/assignments/:assignmentId", async (req, res) => {  // Added async here
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
    res.json(status);  // Using res.json instead of res.send
  });
}