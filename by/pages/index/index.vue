<template>
	<view class="content">
		<view class="text-area">
			<text class="title">Hello</text>
		</view>
		<button @click="golist()">golist</button>
	</view>
</template>

<script setup>
	let golist=()=>{
		// uni.navigateTo({
		// 	url:"/pages/list/list?x=10"
		// })
	}
	uni.request({
		url:"/api/home/floorlist",
		// url:"/api/rmsp",
		method:'GET',
		header: {
			// "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
			// 'Access-Control-Allow-Origin': '*'
		},
		success: (res) => {
		    console.log(res);
		},
		// fail:(err)=>{
		// 	console.log("错误",err);
		// }
	})
</script>

<style>
	
</style>
