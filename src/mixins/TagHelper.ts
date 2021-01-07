import Vue from 'vue'
import {Component} from 'vue-property-decorator';

@Component
export class TagHelper extends Vue {
    createTag(){
        const map: {[key: string]: string}={
            'tagName repetition' :'标签名重复'
        }
        const newTagName = window.prompt('请输入标签名');
        if(!newTagName){
            window.alert('标签创建失败')
            return;
        }
        this.$store.commit('createTag',newTagName)
        if(this.$store.state.createTagError){
            window.alert(map[this.$store.state.createTagError.message] || '未知错误')
            return;
        }
        if (this.$store.state.tagList.length > 4) {
            window.alert('success');
        }

    }

}

//export default TagHelper