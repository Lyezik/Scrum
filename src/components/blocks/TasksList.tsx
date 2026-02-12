import styled from 'styled-components'
import { TaskItem } from './TaskItem'
import { useSubscribeAllTasksQuery } from '../../store/boardsSlice';

const StyledTasksList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const TasksList = ({ boardId, columnId }: { boardId: string, columnId: string }) => {

const { data } = useSubscribeAllTasksQuery({ boardId: boardId, columnId: columnId });

    return (
        <StyledTasksList>
            {data &&
                            data.map((task) => (
            
                                <TaskItem
                                    key={task.id}
                                    taskId={task.id}
                                    title={task.name}
                                />
                            ))
                        }
        </StyledTasksList>
    )
}
