import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
let data: RecordItem[] | undefined =undefined
function fetch() {
    data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') || [];
    return data;
}
function save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
}


export default {
    recordList: fetch(),
    createRecord: (record: RecordItem)=>{
        const record2: RecordItem = clone(record)
        record2.createAt= new Date()
        data && data.push(record2)
        save()
    },
}