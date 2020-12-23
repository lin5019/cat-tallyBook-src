import createId from '@/lib/idCreate';

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
    update: (id: string, name: string) => 'success' | 'repetition' | 'not found';
    remove: (id: string) => boolean;
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
            const id = createId();
            this.data.push({id, name: name});
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
    },
    remove(id: string){

        for (let i = 0; i <this.data.length ; i++) {
            if(this.data[i].id===id){
                const deleteItem = this.data.splice(i,1)[0];
                //console.log(deleteItem);
                this.save()
                return true
            }
        }
        return false
    },

};

export default tagsModel;