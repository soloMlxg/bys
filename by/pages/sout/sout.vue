<template>
	<view class="box">
		<!-- 搜索框 -->
		<view class="dhbox">
			<image @click="logins()" class="sou" src="../../static/icon/sou.png" mode=""></image>
			<input class="uni-input" v-model="inputValue" focus placeholder="请输入你想要的商品" />
		</view>
		<view v-if="nrs" @click="golist(el.Id)" v-for="(el,index) in nrs" key="index" class="bigbox">
			<image class="imageUrl" :src="el.imageUrl" mode=""></image>
			<view class="smbox">
				<view class="title">{{el.title}}</view>	
				<view class="salePoint">{{el.salePoint}}</view>
				<view class="supplier">{{el.supplier}}</view>
				<view class="priceStr">{{el.priceStr}}元</view>
				<view class="evaluate">{{el.evaluate}}条好评</view>
			</view>
		</view>
		<view v-else class="">
			还没出来，等会
			<image src="https://5b0988e595225.cdn.sohucs.com/images/20181015/99ef160e28e74b258d4579a29a2b5001.gif" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				nrs:[],
				inputValue:""
			}
		},
		methods:{
		
			goods(id){
				uni.request({
					url:"/api/search",
					data:{
						word:id,
						page:1
					},
					method:"GET",
					success: (res) => {
						console.log(res);
						this.nrs=res.data
					},
				})
			},
			logins(){
				uni.navigateTo({
					url:"/pages/sout/sout?id="+this.inputValue
				})
			},
			golist(id){
				uni.navigateTo({
					url:'/pages/list/list?id='+id,
				})
			}
			
		},
		onLoad(option){
			console.log(option.id);
			this.goods(option.id)
		}
	}
</script>

<style>
	@import url("sout.css");
</style>