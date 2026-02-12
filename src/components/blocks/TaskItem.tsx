interface TaskItemProps {
  taskId: string;
  title: string;
}
export const TaskItem: React.FC<TaskItemProps> = ({ title }) => {
  return (
    <div>{title}</div>
  )
}
