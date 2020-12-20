const localStorageKeyName = 'tags';
type TagsModel = {
    data: string[];
    fetch: () => string[];
    save: () => void;
    create: (name: string) => 'success' | 'repetition';
}


const tagsModel: TagsModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    create(name){
        if(this.data.indexOf(name)>-1){
            return 'repetition'
        }
        this.data.push(name)
        this.save()
        return 'success';
    }
};

export default tagsModel;