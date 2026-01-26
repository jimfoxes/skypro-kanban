import { useContext, useState, useEffect } from "react";
import { PopBrowse } from "../components/PopBrowse/PopBrowse";
import { useParams } from "react-router-dom";
import { TasksContext } from "../context/TasksContext";

export const PopBrowsePage = () => {
  const { tasks } = useContext(TasksContext); 
  const { id } = useParams();
  const [card, setCard] = useState(null);
   const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const foundCard = tasks.find((task) => task._id === id);
    setCard(foundCard || null);
    setLoading(false);
  }, [id, tasks]);

  return <PopBrowse card={card} loading={loading} id={id}/>;
};
