import styled from "styled-components";
import { useDeleteTaskMutation } from "../../store/boardsSlice";


const StyledTaskItem = styled.li`
  display: flex;
  padding: 10px 5px 10px 10px;
  border-radius: 5px;
  justify-content: space-between;
  border: 1px solid #dcdde2;
`

const StyledTitle = styled.h3`
  white-space: normal; 
  word-wrap: break-word; 
  overflow-wrap: break-word;
`

const StyledDeleteButton = styled.button`
  border-radius: 5px;
  border: none;
  cursor: pointer;
`

interface TaskItemProps {
  taskId: string;
  title: string;
  boardId: string;
  columnId: string;
  order: number;
}

export const TaskItem: React.FC<TaskItemProps> = ({ title, boardId, columnId, taskId }) => {
  const [deleteTask] = useDeleteTaskMutation()

  return (
    <StyledTaskItem>
      <StyledTitle>{title}</StyledTitle>
      <StyledDeleteButton
        onClick={() => { deleteTask({ boardId, columnId, taskId }) }}
      >
        x
      </StyledDeleteButton>
    </StyledTaskItem>
  )
}
