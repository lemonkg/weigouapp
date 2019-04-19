<template>
	<div>
    <mt-header fixed title="微购APP" style="z-index:10;"></mt-header>
    <nav class="mui-bar mui-bar-tab">            
			<router-link class="mui-tab-item-1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">Home</span>
			</router-link>
			<router-link class="mui-tab-item-1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">Search</span>
			</router-link>
			<router-link class="mui-tab-item-1" to="/shoppingcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">Shopping</span>
			</router-link>
			<router-link class="mui-tab-item-1" to="/vip">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">My</span>
			</router-link>
		</nav>
		<div class="app_containner">			
				<router-view ></router-view>
				<div style="clear:both;"></div>
		</div>
  	</div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.app_containner{
padding-top:40px;
overflow-x: hidden;
position: relative;
img{
	width: 100%;
}
}
// .v-enter{
// transform: translateX(100%);
// opacity: 0;
// }
// .v-leave-to{
// transform: translateX(-100%);
// opacity: 0;
// position:absolute;
// }
// .v-enter-active,.v-leave-active{
// transition: 0.5s ease all;
// }
.mui-bar-tab .mui-tab-item-1.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-1 .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>
