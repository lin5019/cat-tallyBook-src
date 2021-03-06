type RecordItem = {
    tags: Tag[];
    notes: string;
    type: string;
    amount: number;
    createAt: string; // 属性?: 表示属性不是必须的.
}

type Tag = {
    id: string;
    name: string;
}

type RootState = {
    recordList: RecordItem[];
    tagList: Tag[];
    currentTag?: Tag;
    createTagError: null | Error;
    createRecordError: null | Error;
}

type Item = {
    title: string;
    total?: number;
    record: RecordItem[];
}

type ItemList = Item[]


// type TagsListModel = {
//     data: Tag[];
//     fetch: () => Tag[];
//     create: (name: string) => 'success' | 'repetition';
//     update: (id: string, name: string) => 'success' | 'repetition' | 'not found';
//     remove: (id: string) => boolean;
//     save: () => void;
// }
// //注意大写
// interface Window {
//     tagList: Tag[];
//     createTag: (name: string) => void;
//     remove: (id: string) => boolean;
//     update: (id: string, name: string) => 'success' | 'repetition' | 'not found';
//     findTag: (id: string) => Tag | undefined;
// }