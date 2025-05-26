import { useContext, useState, useEffect } from "react";
import { TasksContext } from "./TasksContext";
import { AuthContext } from "./AuthContext";
import { fetchTasks } from "../services/api";

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      try {
        const data = await fetchTasks({ token: user.token });
        setTasks(data);
      } catch (error) {
        setError(error.message)
        console.error("Ошибка загрузки задач", error.messageor);
      } finally {
        setLoading(false)
      }
    };
    loadTasks();
  }, [user.token]);

  const addNewTasks = async ({ task }) => {
    try {
      const newTasks = await postTask({ token: user?.token, task });
      setTasks(newTasks);
    } catch (error) {
      console.error("Ошибка добавления задачи", error);
    }
  };

  const updateTasks = async ({ task, id }) => {
    try {
      const newTasks = await editTask({ token: user?.token, id, task });
      setTasks(newTasks);
    } catch (error) {
      console.error("Ошибка редактирования задачи", error);
    }
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks, loading, error }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;