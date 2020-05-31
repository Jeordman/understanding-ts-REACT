export interface TodoListProps {
    items: { id: string, text: string }[]
    todoDeleteHandler: (id: string) => void
}