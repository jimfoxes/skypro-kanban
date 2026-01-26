import { useContext, useState, useEffect } from "react";
import { TasksContext } from "./TasksContext";
import { AuthContext } from "./AuthContext";
import { fetchTasks, postTask, editTask, getTask, delTask } from "../services/api";

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      try {
        const data = await fetchTasks({ token: user?.token });
        setTasks(data);
      } catch (error) {
        setError(error.message)
        console.error("Ошибка загрузки задач", error);
      } finally {
        setLoading(false)
      }
    };
    loadTasks();
}, [user.token]);

  const addNewTask = async ({ task }) => {
    try {
      const newTasks = await postTask({ token: user?.token, task });
      setTasks(newTasks);
    } catch (error) {
      console.error("Ошибка добавления задачи", error);
    }
  };

    const loadTask = async (id) => {
    try {
      const task = await getTask({ token: user?.token, id });
      return task;
    } catch (error) {
      setError(error.message);
      console.error("Ошибка загрузки данных задачи", error);
    } 
  };

  const updateTask = async ({ task, id }) => {
    try {
      const data = await editTask({ token: user?.token, id, task });
      setTasks(data);
    } catch (error) {
      console.error("Ошибка редактирования задачи", error);
    }
  };

    const deleteTask = async (id) => {
    try {
      const data = await delTask({ token: user?.token, id });
      setTasks(data);
    } catch (error) {
      console.error("Ошибка удаления задачи", error);
    }
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks, loading, error, loadTask, deleteTask, addNewTask, updateTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;