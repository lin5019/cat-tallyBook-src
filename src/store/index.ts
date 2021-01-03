import Vue from 'vue';
import Vuex from 'vuex';
import createId from '@/lib/idCreate';
import clone from '@/lib/clone';

Vue.use(Vuex);
const tagsList = 'tagsList';
const recordList = 'recordList';


const store = new Vuex.Store({
    state: {
        recordList: [],
        tagList: [],
        currentTag: undefined
    } as RootState,
    mutations: {
        init() {
            store.commit('tagsListFetch');
            store.commit('recordsFetch');
        },
        recordsFetch(state) {
            state.recordList = JSON.parse(window.localStorage.getItem(recordList) || '[]') || [];
        },
        recordsSave(state) {
            window.localStorage.setItem(recordList, JSON.stringify(state.recordList));
        },
        createRecord(state, record: RecordItem) {
            if (!record.tags || record.tags.length === 0) {
                window.alert('请给消费选择一个标签!');
                return;
            }
            if (!record.amount || record.amount <=0 ) {
                window.alert('记账输入的数字不合法!');
                return;
            }
            if(record.createError===null){
                const record2 = clone(record);
                record2.createAt = new Date().toISOString();
                state.recordList.push(record2);
                store.commit('recordsSave');
            }else {
                alert(record.createError)
            }
        },
        tagsListFetch(state) {
            state.tagList = JSON.parse(window.localStorage.getItem(tagsList) || '[]');
            if (state.tagList.length === 0) {
                store.commit('createTag', '衣');
                store.commit('createTag', '食');
                store.commit('createTag', '住');
                store.commit('createTag', '行');
            }
        },
        tagsListSave(state) {
            window.localStorage.setItem(tagsList, JSON.stringify(state.tagList));
        },
        createTag(state, name: string) {
            const names = state.tagList.map((i) => i.name);
            if (names.indexOf(name) === -1) {
                const id: string = createId();
                state.tagList.push({id, name});
                store.commit('tagsListSave');
                if (state.tagList.length > 4) {
                    window.alert('success');
                }
            } else {
                window.alert('repetition');
            }
        },
        removeTag(state, id: string) {
            for (let i = 0; i < state.tagList.length; i++) {
                if (state.tagList[i].id === id) {
                    state.tagList.splice(i, 1);
                    store.commit('tagsListSave');
                    return;
                }
            }
            window.alert('删除失败');
        },
        updateTag(state, payload: { id: string; name: string }) {
            const {id, name} = payload;
            if (state.tagList.filter((i) => i.name === name)[0]) {
                window.alert('repetition');
            }
            const tag = state.tagList.filter((i) => i.id === id)[0];
            if (!tag) {
                window.alert('not found');
            }
            tag.name = name;
            store.commit('tagsListSave');

        },
        setCurrentTag(state, id: string) {
            state.currentTag = state.tagList.filter((i) => i.id === id)[0];
        }
    },
    actions: {},
    modules: {}
});
store.commit('init');
export default store;