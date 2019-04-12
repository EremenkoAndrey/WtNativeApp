export default function twoLevelMerge(baseObj, newObj) {
    const result = { ...baseObj };
    Object.keys(newObj).forEach((key) => {
        if (result[key]) {
            result[key] = {
                ...result[key],
                ...newObj[key]
            };
        } else {
            result[key] = {
                ...newObj[key]
            };
        }
    });

    return result;
}
