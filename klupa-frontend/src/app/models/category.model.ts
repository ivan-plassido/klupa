export default interface Category {
    _id: string,
    parentId: string | null,
    name: string
}