<template>
	<!-- 搜索框 -->
	<view class="dhbox">
		<image class="sou" src="../../static/icon/sou.png" mode=""></image>
		<input class="uni-input" focus placeholder="请输入你想要的商品" />
	</view>
	
	<!-- 热门 -->
	<view class="hots">

		<swiper catchtouchmove>
		  <swiper-item>
		    <scroll-view class="hots_list" scroll-x>
		      <span v-for="(val,index) in zs" key="index">{{val}}</span>
			  <span>&emsp;</span>
			  <span>&emsp;</span>
		    </scroll-view>
		  </swiper-item>
		</swiper>
		
		<view class="hots_imgbox">
			<image class="hots_img" src="../../static/icon/down.png" mode=""></image>
		</view>
	</view>
	
	<!-- 轮播banner	 -->
	<view class="banners">
		<swiper change="swiper" indicator-dots indicator-color="orange" indicator-active-color="white" circular autoplay interval="2000">
			<swiper-item class="swiper-item" v-for="(item,index) in imgsArr" key="index">
				<image class="imgs" :src="item" mode=""></image>
			</swiper-item>
		</swiper> 
	</view>
	
</template>

<script setup>
	import { ref } from "vue";
		
	
	const zs=ref([])
	const imgsArr=ref([
		"http://bfs.biyao.com/group2/M00/2F/72/CghiFmJ0mIuAFuukAABZhbb5iT0605.jpg",
		"http://bfs.biyao.com/group2/M00/46/FE/CghkFmKfAvqAA13EAABCrIfY964321.jpg",
		"http://bfs.biyao.com/group2/M00/47/5E/CghkFmKf2t6AUMA5AAAu_gR4q5o450.jpg",
		"http://bfs.biyao.com/group2/M00/4A/7B/CghjFmKl0v2AYcBOAADXHRWNCy8884.jpg",
		"http://bfs.biyao.com/group2/M00/33/47/CghkFmJ7ZQmAUeQnAABMRi2JrF8772.jpg",
		"http://bfs.biyao.com/group2/M00/40/5C/CghiFmKRhKKAGAKEAAA6jxGeq3s882.jpg"
		])
	
	
	
	
	uni.request({
		url:"/api/getTypeOne",
		method:"GET",
		success: (res) => {
		    zs.value=res.data
			console.log(zs.value);
		},
	})
</script>

<style>
	@import url("./index.css");
</style>
