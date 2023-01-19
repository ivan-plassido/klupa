import { v4 as uuidv4 } from 'uuid';
import Category from "../models/category.model";

export const FRONTEND_DEV_CATEGORY_ID = uuidv4();
export const BACKEND_DEV_CATEGORY_ID = uuidv4();
export const QA_CATEGORY_ID = uuidv4();
export const ANGULAR_CATEGORY_ID = uuidv4();
export const JAVASCRIPT_CATEGORY_ID = uuidv4();
export const TYPESCRIPT_CATEGORY_ID = uuidv4();
export const JAVA_CATEGORY_ID = uuidv4();
export const SPRING_CATEGORY_ID = uuidv4();

export const CATEGORIES_MOCK: Category[] = [
    {
        id: FRONTEND_DEV_CATEGORY_ID,
        parentId: null,
        name: 'Dev Frontend'

    },
    {
        id: BACKEND_DEV_CATEGORY_ID,
        parentId: null,
        name: 'Dev Backend'

    },
    {
        id: QA_CATEGORY_ID,
        parentId: null,
        name: 'QA'

    },
    {
        id: ANGULAR_CATEGORY_ID,
        parentId: FRONTEND_DEV_CATEGORY_ID,
        name: 'Angular'

    },
    {
        id: JAVASCRIPT_CATEGORY_ID,
        parentId: FRONTEND_DEV_CATEGORY_ID,
        name: 'JavaScript'

    },
    {
        id: TYPESCRIPT_CATEGORY_ID,
        parentId: FRONTEND_DEV_CATEGORY_ID,
        name: 'TypeScript'

    },
    {
        id: JAVA_CATEGORY_ID,
        parentId: BACKEND_DEV_CATEGORY_ID,
        name: 'Java'

    },
    {
        id: SPRING_CATEGORY_ID,
        parentId: BACKEND_DEV_CATEGORY_ID,
        name: 'Spring'

    }
];