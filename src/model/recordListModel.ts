import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
    data: [] as RecordItem [],
    fetch() {
        this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') || [];
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    // update(tag: RecordItem []){
    //
    // },
    create(record: RecordItem){
        const record2: RecordItem = clone(record)
        record2.createAt= new Date()
        this.data.push(record2)
    }
};

export default recordListModel;