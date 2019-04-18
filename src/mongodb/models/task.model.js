const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema(
    {
        taskName: {
            type: String,
            required: true
        },
        taskDone: {
            type: Boolean,
            required: true
        },
        authorId: {
            type: mongoose.Types.ObjectId,
            required: true
        }
    },
    {
        collection: "tasks"
    }
);

const TaskModel = mongoose.model("tasks", taskSchema);

module.exports = {
    TaskModel,
    taskSchema,
    newTask: (taskName, authorId) => {
        return new TaskModel({
            taskName,
            taskDone: false,
            authorId
        });
    }
}
