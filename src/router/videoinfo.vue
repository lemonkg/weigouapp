<template>
    <div>
        <h1>视频详情{{index}}+{{uid}}</h1>       
        <p>{{videosInfo.title}}</p>
        <embed :src="videosInfo.videoUrl" type="video/mp4" width="100%">
        <!-- <video :src=videosInfo.videoUrl controls></video> -->
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            index:this.$route.params.id,
            uid:this.$route.params.uid,
            videosInfo:[]
        }
    },
    methods: {
        getvideoInfo(itemId){
            this.$axios.get('http://api01.6bqb.com/xigua/detail?apikey=6EF13B01DB0C61314E5A78838B2DA59E&itemId='+itemId).then(result=>{
                if(result.status==200){
                    var rs=result.data.data
                    this.videosInfo=rs
                    console.log(this.videosInfo) 
                }else{
                    Toast('获取数据失败')
                }
            })
        }
    },
    created() {
        this.getvideoInfo(this.uid)
    }
}
</script>
<style lang="scss" scoped>

</style>
