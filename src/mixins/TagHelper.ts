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

@Component
export class Loader extends Vue {
    mounted(){
        setTimeout(()=>{
            //console.log('hi!');
            window.scrollTo(0, 10000);
        },0)
    }
}

//export default TagHelper