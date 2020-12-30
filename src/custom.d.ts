type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createAt?: string; // 属性?: 表示属性不是必须的.
}

type Tag = {
    id: string;
    name: string;
}

type RootState = {
    recordList: RecordItem[];
    tagList: Tag[];
    currentTag?: Tag;
}

type Items = {
    title: string;
    list: RecordItem[];
}

type HashTable = {
    [key: string]: Items;
}

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