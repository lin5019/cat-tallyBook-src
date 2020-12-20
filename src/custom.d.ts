type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createAt?: Date; // 属性?: 表示属性不是必须的.
}