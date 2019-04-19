<template>
    <div class="commentBox" >
            <h3>发表评论</h3>
            <textarea maxlength="120" placeholder="请你来BB两句(字数120内)..." v-model="msg"></textarea>
            <button type="button" class="mui-btn mui-btn-primary" @click="postcmt">发布</button>
        <div class="cmtBody" v-for="(item, index) in cmtlist" :key="index">
            <div  v-if="index<times">
                <hr>    
                <div id="userinfo">      
                    <img src="../../src/assets/userimg.png"> 
                    <label>                    
                        <h5><span style="color:red;">{{index+1}}楼&nbsp;&nbsp;</span>ID-{{item.commenterScreenName}}</h5>
                        <span>{{item.publishDateStr | dateFormat}}</span>
                    </label>                
                    <span class="mui-icon-extra mui-icon-extra-like" style="color:#8F8F94;font-size:16px;"></span>  
                </div>
                <div id="content">
                    <p>{{item.content}}</p>
                </div> 
            </div>     
        </div>
        <button type="button" class="mui-btn mui-btn-primary mui-btn-outlined" @click="getmore">加载更多</button>
    </div>   
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            cmtlist:[],
            times:5,
            msg:""
        }
    },
    methods: {
        getComment(){
            this.$axios.get('api/hotel/comment/idataapi?apikey=gRAuMKp89OVD3LeWrIwc0nZVZidxdjSbadBJyFK6DCXPmHLARb0rHR1PTryS3s41').then(result=>{
                var rs=result.data.data;
                if(result.status==200){
                    this.cmtlist=this.cmtlist.concat(rs)
                }else{
                    Toast('获取评论失败')
                }  
            })
        },
        getmore(){ 
            if(this.times<this.cmtlist.length){
                this.times=this.times+3;
            }else{
                Toast("没有更多评论了")
            }
        },
        postcmt(){
            if(this.msg==''){
                Toast('评论内容不能为空')
            }else{
                this.$http.post('http://192.168.0.104/server/weigouapp/comment.php',{upcomment:this.msg},{emulateJSON:true}).then(function(data){
                    this.cmtlist.unshift(data.body)
                    this.msg=''
                },function(err){
                    Toast('error')
                })
            }
        }   
    },
    created() {
        this.getComment()   
    }
}
</script>

<style lang="scss" scoped>
.commentBox{
    padding: 10px;
    background-color: white;
    margin-top: 50px;
    margin-bottom: 50px;
    h3{
        font-size: 18px;
    }
    textarea{
        height: 100px;
        margin: 0%;
        font-size: 12px;
    }
    button{
        width: 100%;
        margin-bottom: 20px;
    } 
    .cmtBody{
    #userinfo{
        padding: 5px;
        font-size: 12px;
        width: 100%;
        display: inline-flex;
        justify-content: space-between;
        align-items:center;
        label{
            flex-grow:2;line-height:17px;margin-left:10px;
        }
        img{
            width:30px;flex-grow:0;
        }
    }
    #content{
        margin-left: 45px;
        padding-bottom: 10px;
    }
}  
}

</style>
