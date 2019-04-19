<template>
    <div>
    <div class="infohead">
        <span class="mui-icon mui-icon-back" @click="goback"></span>
        <h1>&nbsp;&nbsp;&nbsp;新闻详情-{{index}}</h1>
    </div>  
    <div class="newsinfo">   
        <h1>{{title}}</h1>
        <span id="infotime">{{time | dateFormat}}</span>
        <div class="data" v-html=content></div>
        
    </div>
    <cmt></cmt>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
import comment from '../components/comment.vue'
export default {
    data() {
        return {
            index:this.$route.params.id,
            content:null,
            title:null,
            time:null,
        }
    },
    methods: {
      getnewslist(){     
            this.$axios.get('/apis/news/get?channel=头条&start=0&num=10&appkey=6b3bb1d8aebbefa9').then(result=>{
                if(result.status==200){
                    var listdata=result.data.result.list[this.index];
                    this.content=listdata.content;
                    this.title=listdata.title;
                    this.time=listdata.time;
                }else{
                    Toast("获取失败")
                }
            })
        },
        goback(){
            this.$router.go(-1)
        }    
    },
    created() {
        this.getnewslist()
    },
    components:{
        'cmt':comment
    }
    
}
</script>

<style lang="scss" scoped>
    .infohead{
        display: flex;
        background-color: white;
        padding: 5px 5px;
        position: fixed;
        width: 100%;
        margin-top: -60px;
        h1{
            color: brown;
            font-size: 18px;
        }
    }
    .newsinfo{
        width: 100%;
        margin-top: 60px;
        margin-bottom: 60px;
        padding-left: 10px;
        padding-right: 10px;
        
        h1{
            font-size: 18px;
        }
        #infotime{
            color: blue;   
            font-size:12px;
            display: block;
            text-align: right;
            margin-bottom: 10px;    
        }
        .data{
           
            figure{
            h2{
                font-size: 16px;
            }
            img{
                width: 100%;
            }
            video{
                width: 100%;
            }
            }
            
         
        }
    }
</style>
