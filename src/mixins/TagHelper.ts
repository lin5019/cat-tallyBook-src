import Vue from 'vue'
import {Component} from 'vue-property-decorator';

@Component
export class TagHelper extends Vue {
    createTag(){
        const newTagName = window.prompt('请输入标签名');
        if(newTagName){
            this.$store.commit('createTag',newTagName)
        }
    }

}

export default TagHelper