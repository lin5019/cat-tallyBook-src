const localStorageKeyName = 'tagsList';
type Tag = {
    id: string;
    name: string;
}

type TagsListModel = {
    data: Tag[];
    fetch: () => Tag[];
    save: () => void;
    create: (name: string) => 'success' | 'repetition';
    update(): (id: string, name: string) => 'success' | 'repetition' | 'not found';
}

const tagsModel: TagsListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    create(name) {
        const names = this.data.map((item) => item.name);
        if (names.indexOf(name) === -1) {
            this.data.push({id: name, name: name});
            this.save();
            return 'success';
        } else {
            return 'repetition';
        }
    },
    update(id: string,name: string){
        if(this.data.filter((i)=>i.name===name)[0]){
            return  'repetition'
        }
        const tag: Tag= this.data.filter((i)=>i.id===id)[0];
        if(tag){
            tag.name=name;
            this.save()
            return 'success'
        }else {
            return 'not found'
        }
    }
};

export default tagsModel;