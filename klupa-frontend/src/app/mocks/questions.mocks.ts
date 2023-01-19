import { v4 as uuidv4 } from 'uuid';
import Question from "../models/question.model";
import { ANGULAR_CATEGORY_ID, JAVASCRIPT_CATEGORY_ID, JAVA_CATEGORY_ID, SPRING_CATEGORY_ID, TYPESCRIPT_CATEGORY_ID } from './categories.mock';

const DUMMY_QUESTION = 'Placeholder for a Question';
const DUMMY_ANSWER = 'Placeholder for an Answer';
const DUMMY_TITLE = 'Some Title';

export const QUESTIONS_MOCK: Question[] = [
    {
        id: uuidv4(),
        categoryId: ANGULAR_CATEGORY_ID,
        title: DUMMY_TITLE,
        question: DUMMY_QUESTION,
        answer: DUMMY_ANSWER
    },
    {
        id: uuidv4(),
        categoryId: ANGULAR_CATEGORY_ID,
        title: DUMMY_TITLE,
        question: DUMMY_QUESTION,
        answer: DUMMY_ANSWER
    },
    {
        id: uuidv4(),
        categoryId: ANGULAR_CATEGORY_ID,
        title: DUMMY_TITLE,
        question: DUMMY_QUESTION,
        answer: DUMMY_ANSWER
    },
    {
        id: uuidv4(),
        categoryId: ANGULAR_CATEGORY_ID,
        title: DUMMY_TITLE,
        question: DUMMY_QUESTION,
        answer: DUMMY_ANSWER
    },
    {
        id: uuidv4(),
        categoryId: ANGULAR_CATEGORY_ID,
        title: DUMMY_TITLE,
        question: DUMMY_QUESTION,
        answer: DUMMY_ANSWER
    },
    {
        id: uuidv4(),
        categoryId: JAVASCRIPT_CATEGORY_ID,
        title: DUMMY_TITLE,
        question: DUMMY_QUESTION,
        answer: DUMMY_ANSWER
    },
    {
        id: uuidv4(),
        categoryId: TYPESCRIPT_CATEGORY_ID,
        title: DUMMY_TITLE,
        question: DUMMY_QUESTION,
        answer: DUMMY_ANSWER
    },
    {
        id: uuidv4(),
        categoryId: JAVA_CATEGORY_ID,
        title: DUMMY_TITLE,
        question: DUMMY_QUESTION,
        answer: DUMMY_ANSWER
    },
    {
        id: uuidv4(),
        categoryId: SPRING_CATEGORY_ID,
        title: DUMMY_TITLE,
        question: DUMMY_QUESTION,
        answer: DUMMY_ANSWER
    }
]