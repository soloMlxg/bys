<template>
	<view class="gg">
		<image class="gg" src="../../static/icon/微信截图1.png" mode=""></image>
	</view>
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
	
	<!-- 商品list -->
	<view class="list">
		<view class="list_nr" @click="golist(ele.Id)" data-id="ele.Id" v-for="(ele,index) in nrs" key="index">
			<image :src="ele.imageUrl" mode=""></image>
			<view class="priceStr">{{ele.priceStr}}元</view>
			<view class="title">{{ele.title}}</view>
			<view class="goods">{{ele.evaluate}}条好评</view>
		</view>
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
	
	let golist=(id)=>{
		// console.log(id);
		uni.navigateTo({
			url:'/pages/list/list?id='+id,
			
		})
	}
		
	let nrs=ref()
	let num=ref("1")
	uni.request({
		url:"/api/hotList",
		method:"GET",
		data: {
		        page: num.value
		    },
		success: (res) => {
			console.log(res);
			nrs.value=res.data
		},
	})
</script>

<style>
	@import url("./index.css");
</style>
