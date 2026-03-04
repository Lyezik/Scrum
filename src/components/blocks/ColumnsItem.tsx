import styled from "styled-components"
import { TasksList } from "./TasksList"
import { useState } from "react"
import { useCallback } from "react"
import { useAddTaskMutation, useDeleteColumnMutation } from "../../store/boardsSlice"
import { useParams } from "react-router-dom"

const StyledColumnsItem = styled.li`
     display: flex;
     flex-direction: column;
     background-color: #31324e;
     border-radius: 10px;
     padding: 10px;
     min-width: 250px;
     width: 250px;
`

const StyledColumnsTitle = styled.h3`
    color: #f1f5f4;
    font-size: 20px;
    margin-bottom: 10px;
`

const StyledButton = styled.button`
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 10px;
`

const StyledAddTaskPopup = styled.textarea`
    width: 100%;
    margin-bottom: 10px;
    min-height: 40px;
    height: 40px;
    resize: none;
    overflow: hidden;
    border-radius: 5px;
    padding: 3px;
`

interface ColumnsListProps {
    title: string,
    columnId: string
};


export const ColumnsItem: React.FC<ColumnsListProps> = ({ title, columnId }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [taskName, setTaskName] = useState('')
    const [addTask] = useAddTaskMutation()
    const [deleteColumn] = useDeleteColumnMutation();
    const params = useParams();
    const boardId = params.id;

    const autoHeightTextarea = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = '0px'
        e.target.style.height = `${e.target.scrollHeight}px`
    }, [])

    const handkeKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            addTask({ boardId, columnId, taskName })
            setIsOpen(false)
            setTaskName('')
        }
    }
    if (!boardId) return null; // не отрисовывать, если не пришел boardId/ ругается TS

    return (
        <StyledColumnsItem>
            <StyledColumnsTitle>{title}</StyledColumnsTitle>
            {
                isOpen ? (
                    <StyledAddTaskPopup
                        autoFocus
                        placeholder="Введите название задачи"
                        onChange={(e) => {
                            autoHeightTextarea(e)
                            setTaskName(e.target.value)
                        }}
                        onKeyDown={handkeKeyDown}
                    />

                ) : (
                    <StyledButton
                        onClick={() => setIsOpen(true)}
                    >
                        + Добавить задачу
                    </StyledButton>
                )
            }

            <StyledButton
                onClick={() => deleteColumn({ boardId, columnId })}
            >
                Удалить колонку
            </StyledButton>

            <TasksList
                boardId={boardId}
                columnId={columnId}
            />
        </StyledColumnsItem>
    )
}

