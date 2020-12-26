import createId from '@/lib/idCreate';


const localStorageKeyName = 'tagsList';
let data: Tag[] =[]
function fetch() {
    data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') ;
    return data;
}
function save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
}
function create(name: string) {
    const names = data.map((item) => item.name);
    if (names.indexOf(name) === -1) {
        const id = createId();
        data.push({id, name: name});
        save();
        return 'success';
    } else {
        return 'repetition';
    }
}
function update(id: string, name: string) {
    if (data.filter((i) => i.name === name)[0]) {
        return 'repetition';
    }
    const tag: Tag = data.filter((i) => i.id === id)[0];
    if (tag) {
        tag.name = name;
        save();
        return 'success';
    } else {
        return 'not found';
    }
}
function remove(id: string) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            data.splice(i, 1);
            save();
            return true;
        }
    }
    return false;
}



export default {
   tagList: fetch(),
   createTag:(name: string)=>{
        const message = create(name);
        if(message==='repetition'){
            window.alert('不可以添加重复标签')
        }else {
            window.alert('添加成功')
        }
    },
    remove:(id: string)=>{
        return  remove(id);
    },
    update:(id: string,name: string)=>{
        return update(id,name);
    },
    findTag(id: string){
        return this.tagList.filter(i => i.id === id)[0]
    }
}