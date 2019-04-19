<template>
    <div>
        <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			<div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
				<a class="mui-control-item" href="" data-wid="tab-top-subpage-1.html">图集1</a>
				<a class="mui-control-item" href="" data-wid="tab-top-subpage-2.html">图集2</a>
				<a class="mui-control-item" href="" data-wid="tab-top-subpage-3.html">图集3</a>
				<a class="mui-control-item" href="" data-wid="tab-top-subpage-4.html">图集4</a>
				<a class="mui-control-item" href="" data-wid="tab-top-subpage-5.html">图集5</a>
                <a class="mui-control-item" href="" data-wid="tab-top-subpage-6.html">图集6</a>
			</div>
        </div>
		</div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            imglist:[]
        }
    },
    methods: {
        getimglist(){
            this.$axios.get('http://api01.6bqb.com/tmall/search?apikey=6EF13B01DB0C61314E5A78838B2DA59E&keyword=衣服&page=1&order=s').then(rs=>{
                if(rs.status==200){
                    console.log(rs.data.data)
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
        this.getimglist()   
    }
}
</script>
<style lang="scss" scoped>
 
</style>
