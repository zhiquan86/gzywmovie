<template>
    <div id="main">
        <Header  title="喵喵电影"/>
           <div id="content">
			<div class="movie_menu">
				<router-link tag="div" to="/movie/city" class="city_name">
					<span>大连</span><i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<div class="hot_swtich">
					<router-link tag="div" to="/movie/nowplaying" class="hot_item active">正在热映</router-link>
					<router-link tag="div" to="/movie/comingsoon" class="hot_item">即将上映</router-link>
				</div>
				<router-link tag="div" to="/movie/search" class="search_entry">
					<i class="iconfont icon-sousuo"></i>
				</router-link>
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
    name:'Movie',
    components:{
        Header,
        TabBar

    }
}
</script>

<style>

</style>
