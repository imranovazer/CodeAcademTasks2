function handleObjects(obj, key, action) {
    if (action === 'get') {
        return obj[key];
    }
    else if (action === 'add') {
        return { ...obj, key: "" };
    }
    else if (action === 'delete') {
        const newObj = obj;
        delete newObj[key];
        return newObj;
    }
    else {
        return obj;
    }

}


const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}

const result = handleObjects(student, 'programmingLanguage', 'delete');
console.log('result', result);
