import { v4 as uuidv4 } from 'uuid';
import {getFromLc, saveToLc} from "@/helper/localStorage";

const schema = 'pawaTaskList';

export default async (path, data) => {
    switch (path) {
        case 'task/create': {
            const id = uuidv4();
            if (data.comment) {
                data.comments = [{ from: 'you', message: data.comment }]
                delete data.comment
            }
            const list = getFromLc(schema);
            list.push({ ...data, id })
            saveToLc(schema, list)

            return { success: true, result: { id } }
        }
        case 'task/update': {
            const list = getFromLc(schema);
            const index = list.findIndex(({ id }) => data.id === id);
            if (index < 0) throw { success: false, message: 'task not exist' }
            const { comments } = list[index];

            if (data.comment) {
                comments.push({ from: 'you', message: data.comment })
                delete data.comment
            }

            list[index] = {
                ...data, comments
            }

            saveToLc(schema, list)

            return { success: true, result: { id: data.id } }
        }
        case 'task/list': {
            const list = getFromLc(schema);
            return { success: true, result: list }
        }
        default: throw { error: 404 }
    }
}
