import { transform, isEqual, isObject } from 'lodash';

const isEmpty = (value) => value === undefined || value === null || value === '';

const iteratee = (base) => (result, value, key) => {
    if (!isEqual(value, base[key])) {
        const valIsObj = isObject(value) && isObject(base[key]);
        if (!(isEmpty(value) && isEmpty(base[key]))) {
            result[key] =
                valIsObj === true
                    ? differenceObject(value, base[key])
                    : [base[key], value];
        }
    }
};

export function differenceObject(object, base) {
    return transform(object, iteratee(base));
}
