<template>
    <div id="main">
        <Header  title="我的喵喵"/>
        <div id="content">
             <div class="login_body">
				<div>
					<input class="login_text" type="text" placeHolder="账户名/手机号/Email" >
				</div>
				<div>
					<input class="login_text" type="password" placeHolder="请输入您的密码" >
				</div>
				<div class="login_btn">
					<input type="submit" value="登录">
				</div>
				<div class="login_link">
					<a href="#">立即注册</a>
					<a href="#">找回密码</a>
				</div>
			</div>
        </div>
        <TabBar/>

    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import TabBar from '@/components/TabBar.vue'
export default {
    name:'Mine',
    components:{
        Header,
        TabBar

    }
}
</script>

<style>

</style>
