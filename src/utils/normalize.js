const types = new Map([
    [1, 'user'], [2, 'group'], [3, 'post'], [4, 'file'], [5, 'instrument'], [6, 'comment']
]);

function isObject(val) {
    return val !== null && typeof val === 'object';
}

function getType(data) {
    if (isObject(data)) {
        if (data.data && data.data.activityId) {
            return 'activity';
        }
        if (data.type && types.has(data.type)) {
            return types.get(data.type);
        }
        return null;
    }
    return null;
}

export default function normalize(data) {
    const result = {};

    const addToResult = (object, type) => {
        result[type] = result[type] || {};
        const id = `${object.id}`; // приведение id к строке

        /*
        КОСТЫЛИ ДЛЯ ПРИВЕДЕНИЯ ДАННЫХ С СЕРВЕРА В УПОРЯДОЧЕННЫЙ ВИД
        */
        if (type === 'activity') {
            // Сохранить тип activity в объекте data
            object.data.activityType = object.type;

            // На случай если поля reason нет - перестрахуюсь
            object.data.reason = object.data.reason || {};

            // latestReasonsData может быть пустым массивом(!), в этом случае,
            // а так же если вдруг поля вообще нет, создаю пустой объект
            object.data.reason.latestReasonsData = (object.data.reason.latestReasonsData
                && !Array.isArray(object.data.reason.latestReasonsData)
                ? object.data.reason.latestReasonsData : {});
            // Код причины приходит как ключ единственного свойства объекта latestReasonsData
            const reasonCode = Object.keys(object.data.reason.latestReasonsData)[0];
            // Если ключ есть (то есть свойство с сервера пришло и это не массив)
            // сохраняю его в новом объекте latestReasonsData, в который копирую все
            // свойства из объекта, доступного по ключу
            if (reasonCode) {
                object.data.reason.latestReasonsData = {
                    ...object.data.reason.latestReasonsData[reasonCode],
                    code: reasonCode
                };
            }
        }

        /* ********************************* */

        if (result[type][id]) {
            result[type][id] = {
                ...result[type][id],
                ...object,
                type,
                id
            };
        } else {
            result[type][id] = {
                ...object,
                type,
                id
            };
        }
    };

    const findEntity = (value) => {
        // Если массив, обследовать каждый элемент
        if (Array.isArray(value)) {
            value.forEach(val => findEntity(val));
            // Если объект является сущностью, то добавить его в результат.
            // Исследовать все свойства объекта
        } else if (isObject(value)) {
            const objType = getType(value);
            if (objType) {
                addToResult(value, objType);
            }

            Object.values(value).forEach(prop => findEntity(prop));
        }
    };

    const replaceDataToLinks = (object) => {
        function findEndReplace(obj) {
            Object.keys(obj).forEach((key) => {
                if (isObject(obj[key])) {
                    const type = getType(obj[key]);
                    if (type) {
                        /* eslint no-param-reassign:0 */
                        obj[key] = {
                            id: `${obj[key].id}`,
                            type
                        };
                    } else {
                        findEndReplace(obj[key]);
                    }
                }
            });
        }

        const typeNames = Object.keys(object);
        typeNames.forEach((name) => {
            const ids = Object.keys(object[name]);
            ids.forEach((id) => {
                const entity = object[name][id];
                findEndReplace(entity);
            });
        });

        return object;
    };

    findEntity(data);

    return replaceDataToLinks(result);
}
