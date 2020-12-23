const key='_idMax'

const createId=()=>{
    let id: number=parseInt(window.localStorage.getItem(key)  || '0') || 0
    id++;

    window.localStorage.setItem(key,id.toString())
    return id.toString();
}

export default createId