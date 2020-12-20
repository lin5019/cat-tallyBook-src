const localStorageKeyName = 'tagsList';
type tag={
    id: string;
    name: string;
}

type TagsListModel = {
    data: tag[];
    fetch: () =>  tag[];
    save: () => void;
    create: (name: string) => string;
}

const tagsModel: TagsListModel = {
    data: [],
    fetch() {
        this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    create(name){
        const names = this.data.map((item)=>item.name);
        if (names.indexOf(name) === -1) {
            this.data.push({id: name,name:name});
            this.save();
            return 'success';
        } else {
            return 'repetition';
        }
    }
};

export default tagsModel;