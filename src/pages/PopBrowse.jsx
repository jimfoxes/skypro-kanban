import { useContext } from "react";
import { PopBrowse } from "../components/PopBrowse/PopBrowse";
import { useParams } from "react-router-dom";
import { TasksContext } from "../context/TasksContext";

export const PopBrowsePage = () => {
  const { tasks, loading } = useContext(TasksContext); 
  const { id } = useParams();
  const card = tasks.find((task) => task._id === id);

  return <PopBrowse card={card} loading={loading}/>;
};
