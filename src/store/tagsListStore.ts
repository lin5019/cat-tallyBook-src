// import createId from '@/lib/idCreate';
//
// const tagsList = 'tagsList';
//
//
// const tagsListStore = {
//     tagList: [] as Tag[],
//     tagsListFetch() {
//         this.tagList = JSON.parse(window.localStorage.getItem(tagsList) || '[]');
//         return this.tagList;
//     },
//     tagsListSave() {
//         window.localStorage.setItem(tagsList, JSON.stringify(this.tagList));
//     },
//     createTag(name: string) {
//         const names = this.tagList.map((item) => item.name);
//         if (names.indexOf(name) === -1) {
//             const id = createId();
//             this.tagList.push({id, name: name});
//             tagsListStore.tagsListSave();
//             return 'success';
//         } else {
//             return 'repetition';
//         }
//     },
//     remove(id: string) {
//         for (let i = 0; i < this.tagList.length; i++) {
//             if (this.tagList[i].id === id) {
//                 this.tagList.splice(i, 1);
//                 tagsListStore.tagsListSave();
//                 return true;
//             }
//         }
//         return false;
//     },
//     update(id: string, name: string) {
//         if (this.tagList.filter((i) => i.name === name)[0]) {
//             return 'repetition';
//         }
//         const tag: Tag = this.tagList.filter((i) => i.id === id)[0];
//         if (tag) {
//             tag.name = name;
//             tagsListStore.tagsListSave();
//             return 'success';
//         } else {
//             return 'not found';
//         }
//     },
//     findTag(id: string) {
//         return this.tagList.filter(i => i.id === id)[0];
//     }
// };
// tagsListStore.tagsListFetch();
// //console.log(tagsListStore.tagList);
// export default tagsListStore;