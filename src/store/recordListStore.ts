// import clone from '@/lib/clone';
//
// const localStorageKeyName = 'recordList';
//
// const createRecord = {
//     recordList: [] as RecordItem[],
//     recordsFetch(){
//         this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') || [];
//         return this.recordList;
//     },
//     recordsSave(){
//         window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
//     },
//     createRecord(record: RecordItem){
//         const record2: RecordItem = clone(record);
//         record2.createAt = new Date();
//         this.recordList && this.recordList.push(record2);
//         createRecord.recordsSave();
//     },
// };
// createRecord.recordsFetch();
// //console.log(createRecord.recordList);
// export default createRecord;