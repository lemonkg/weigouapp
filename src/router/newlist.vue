<template>
        <div>
            <h1><span class="mui-icon mui-icon-back" @click="goback"></span>&nbsp;&nbsp;&nbsp;新闻列表</h1>
            <ul class="mui-table-view">               
				<li class="mui-table-view-cell mui-media" v-for="(item, id) in newslist" :key="id">
					<router-link :to="'/home/newslist/'+id">
						<img class="mui-media-object mui-pull-left" :src="item.pic">
						<div class="mui-media-body">
                            <h1 class='mui-ellipsis'>{{item.title}}</h1>
							<p class='muip'>
                                <span class='mui-ellipsis'>{{item.src}}</span>
                                <span>{{item.ptime | dateFormat}}</span>
                            </P>
						</div>
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
            newslist:[]
        }
    },
    methods: {
      getnewslist(){     
            this.$axios.get('/apis/news/get?channel=头条&start=0&num=10&appkey=6b3bb1d8aebbefa9').then(result=>{
                if(result.status==200){
                    // console.log(result.data.result.list);
                    this.newslist=result.data.result.list;
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
    }
}
</script>


<style lang="scss" scoped>
.newsAnm-enter,.newsAnm-leave-to{
    opacity: 0;
}
.newsAnm-enter-active,.newsAnm-leave-active{
    transition: 2s ease all;
}

h1{
    font-size: 16px;
}
.mui-table-view{  
        margin-bottom: 70px;
        li{
            h1{
                font-size: 12px;
            }
            .muip{
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                span{
                    &:nth-child(2){
                        color: blue;
                    }
                }
            }
        }      
    }
</style>

