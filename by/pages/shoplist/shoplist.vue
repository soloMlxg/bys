<template>
	<view class="hots">
		<swiper catchtouchmove>
		  <swiper-item>
		    <scroll-view class="hots_list" scroll-x>
		      <span class="hots_span" @click="fenlei(val)" v-for="(val,index) in zs" key="index">{{val}}</span>
			  <span class="hots_span">&emsp;</span>
			  <span class="hots_span">&emsp;</span>
		    </scroll-view>
		  </swiper-item>
		</swiper>
	</view>
	
	<view class="listnr">
		<view class="list_xr" @click="golist(ele.Id)" v-for="(ele,index) in liste" key="index">
			<image class="imageUrl" :src="ele.imageUrl" mode=""></image>
			<view class="priceStr">￥{{ele.priceStr}}</view>
			<view class="title">{{ele.title}}</view>
			<view class="evaluate">{{ele.evaluate}}条评价</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nrs:"",
				zs:[],
				liste:[]
			};
		},
		methods:{
			lists(val){
				uni.request({
					url:"/api/getTypeTwo?",
					method:"GET",
					data:{
						type_one:val
					},
					success:(res)=>{
						console.log(res);
						this.zs=res.data
					}
				})
				uni.request({
					url:"/api/goodlist",
					data:{
						page: 1,
						type_one: val,
						
					},
					success:(res)=>{
						console.log(res);
						this.liste=res.data
					}
				})
			},
			golist(id){
				uni.navigateTo({
					url:'/pages/list/list?id='+id,
				})
			},
			fenlei(id){
				console.log(id+"---------"+this.nrs);
				uni.request({
					url:"/api/getTypeTwoList",
					data:{
						page:1,
						type_one:this.nrs,
						type_two:id
					},
					success:(res)=>{
						console.log(res);
						this.liste=""
						this.liste=res.data
					}
				})
			}
		},
		onLoad(options){
			// console.log(options);
			this.nrs=options.vas
			this.lists(options.vas)
		}
	}
</script>

<style>
	@import url("shoplist.css");
</style>