<template>
    <div>   
    <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../../src/assets/轮播图1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../src/assets/轮播图2.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../src/assets/轮播图3.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
    <div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
		    	    <span class="mui-icon mui-icon-spinner mui-spin"></span>
		            <div class="mui-media-body">NEWS</div>
               </router-link>
            </li>

		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/imglist">
		            <span class="mui-icon mui-icon-image"><span class="mui-badge">5</span></span>
		            <div class="mui-media-body">IMAGES</div>
                </router-link>
            </li>

            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/videolist">
		            <span class="mui-icon-extra mui-icon-extra-classroom"></span>
		            <div class="mui-media-body">VIDEOS</div>
                </router-link>
            </li>
            
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="">
		            <span class="mui-icon mui-icon-chatboxes"></span>
		            <div class="mui-media-body">COMMENT</div>
                </router-link>
            </li>

		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="">
		            <span class="mui-icon-extra mui-icon-extra-new"></span>
		            <div class="mui-media-body">TOUTIAO</div>
                </router-link>
            </li>

		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="">
		            <span class="mui-icon-extra mui-icon-extra-grech"></span>
		            <div class="mui-media-body">GAME</div>
                </router-link>
            </li>

		    
		</ul>       
    </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data() {
        return {
            
        }
    },
    methods: {
     
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    width: 100%;
    .mint-swipe-item{
        img{
            width: 100%;               
            height:100%;
            background-repeat: no-repeat;
            background-position: center;
        }
    }
}
</style>
