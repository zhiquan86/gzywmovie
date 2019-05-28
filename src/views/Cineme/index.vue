<template>
    <div id="main">
        <Header title="电影院"/>
        <div id="content">
        <div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</div>
			</div>
            <router-view/>
        </div>
        <TabBar/>

    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import TabBar from '@/components/TabBar.vue'
export default {
    name:'Cineme',
    components:{
        Header,
        TabBar

    }
}
</script>

<style>

</style>
