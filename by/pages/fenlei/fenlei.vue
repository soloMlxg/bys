<template>
	<view class="box">
		<!-- 顶部搜索框 -->
		<div class="head">
			<input type="text" placeholder="请输入你想要的商品">
		</div>
		<div class="con">
			<div class="c_left"></div>
			<div class="c_right"></div>
		</div>
	</view>
</template>

<script setup>
// import utils from '/apis/api.js';
//  utils.getRequest('https://api.example.com/resource', {name: '张三'}).then((data) => {
//       this.responseData = data;
//     }).catch((err) => {
//       console.log(err);
//     });
</script>

<style scoped>
.box{
	padding: 0;
	width: 100%;
	margin: 0 auto;
}
.head{
	width: 90%;
	margin: 15rpx auto;
	border-radius: 33rpx 33rpx 33rpx 33rpx;
	border: 1rpx solid gray;
	height: 66rpx;
	line-height: 66rpx;
}
.head>input{
	display: inline-block;
	padding: 0 15rpx;
	box-sizing: border-box;
	font-size: 20rpx;
}

.con{
	display: flex;
}
.c_left{
	width: 25%;
	height:100vh;
	background:red;
}              
			
.c_right{      
	width: 75%;
	height:100vh;
	background:slateblue;
}
</style>
