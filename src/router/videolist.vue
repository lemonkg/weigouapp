<template>
    <div class="videolistBox">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
                    <a :class="['mui-control-item',item.key=='video_new' ? 'mui-active':'']" v-for="item in videosID" :key="item.key"
                        @click="getvideolist(item.key)"
                    >
                        {{item.value}}
                    </a>
                </div>
            </div>
		</div>
        <ul class="photolist">
        <li v-for="(item,id) in videoslist" :key="item.title">
            <router-link :to="'/home/videoinfo/'+id+item.group_id">
                <img v-lazy="item.image_url" alt="图破啦~">
                <h1>{{item.title}}</h1> 
            </router-link>          
        </li>
        </ul>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            videosID:[],
            videoslist:[],
        }
    },
    methods: {
        //获取视频分类项
        getvideoID(){
            this.$axios.get('http://api01.6bqb.com/xigua/category?apikey=6EF13B01DB0C61314E5A78838B2DA59E').then(result=>{
                if(result.status==200){
                    var rs=result.data.data
                    for(var i=0;i<7;i++){
                        this.videosID=this.videosID.concat(rs[i])
                    }
                    // console.log(this.videosID)                  
                }else{
                    Toast('获取数据失败')
                }
            })
        },
        //获取视频列表
        getvideolist(tagvalue){
            this.$axios.get('http://api01.6bqb.com/xigua/search?apikey=6EF13B01DB0C61314E5A78838B2DA59E&tag='+tagvalue).then(result=>{
                if(result.status==200){
                    var rs=result.data.data
                    this.videoslist=rs
                    // console.log(this.videoslist) 
                }else{
                    Toast('获取数据失败')
                }
            })
        }
        
    },
    mounted() {
        this.$mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    created() {
        this.getvideoID() ;
        this.getvideolist('video_new');  
    }
}
</script>
<style lang="scss" scoped>
.videolistBox{
    margin-bottom: 100px;
}
.photolist{
    h1{
        font-size: 16px;
        font-family:'微软雅黑';
        color: blueviolet;
    }
    li{ 
        margin-bottom: 20px;
        img[lazy=loading] {  
        margin: auto;
        background-image:url("../../src/assets/timg.gif") ;
        background-repeat:no-repeat;
        background-color:#FDFDFD;
        background-size: 60px 60px;;
        background-position: 50% 50%;
        }
    }
}
</style>
