export default interface Category {
    id: string,
    parentId: string | null,
    name: string,
    description?: string
}