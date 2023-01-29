export default interface Question {
    _id: string,
    categoryId: string,
    question: string,
    answer: string,
    favorite: boolean
}