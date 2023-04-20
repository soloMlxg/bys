<template>
	<view class="boxs">
		<view class="contens" v-for="(item,index) in str" key="index">
			<view class="imges">
				<swiper class="imges" indicator-dots indicator-active-color="red" autoplay interval="2000" circular>
					<swiper-item class="imges" v-for="(el,index) in strimg" key="index">
						<image class="imgs" :src="el" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="jsbox">
				<view class="priceStr">￥{{item.priceStr}}</view>
				<view class="supplier">{{item.supplier}}</view>
				<view class="sizeList">{{item.title}}</view>
				<view class="salePoint">{{item.salePoint}}</view>
			</view>
		</view>
		
		<view class="tls">
			<view class="" v-for="(item,index) in str" key="index">
				<image class="tls_imgt" :src="item.addressLogo" mode=""></image>
				<view class="tls_title">
					<view class="tls_name">{{item.addressName}}</view>
					<view class="tls_list">商品质量:5.0&emsp;服务态度:5.0</view>
				</view>
				
				<view class="hots">
					
					<swiper catchtouchmove>
					  <swiper-item>
					    <scroll-view class="hots_list" scroll-x>
							<view class="hots_list_img" @click="golist(el.Id)"  v-for="(el,index) in newnr" key="index">
								<image class="hots_imgs" :src="el.imageUrl" mode=""></image>
								<view class="hots_priceStr">{{el.priceStr}}元</view>
							</view>
					    </scroll-view>
					  </swiper-item>
					</swiper>
				</view>
					
			</view>
		</view>
		
		<view class="pjbox">
			<view class="pjbox_hd">
				<view class="">商品评价</view>
			</view>
			<view class="pjrw" v-for="(val,index) in pjs" key="index">
				<view class="tops">
					<image class="tops_img" :src="val.userPic" mode=""></image>
					<view class="userName">{{val.userName}}</view>
					<view class="vip">{{val.vip}}</view>
				</view>
				<view class="times">{{val.time}}&emsp;&emsp;{{val.product}}</view>
				<view class="text">
					{{val.text}}
				</view>
			</view>
		</view>
	
		<view class="xuanfu"  v-for="(item,index) in str" key="index">
			<view class="kfs">
				<image src="../../static/icon/客服.png" mode=""></image>
				<text>客服</text>
			</view>
			<view class="dds yys">
				单独购买￥{{item.priceStr}}
			</view>
			<view class="xxs yys">
				新人参团￥{{item.priceStr-5}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				str:[],
				strimg:[],
				pjs:[],
				supplierval:"",
				newnr:[]
			};
		},
		methods:{
			
			nrs(id){
				uni.request({
					url:"/api/detail?goodId="+id,
					method:"GET",
					success: (res) => {
						// console.log(JSON.parse(res.data[0].comment));
						this.pjs=JSON.parse(res.data[0].comment)
						this.str=res.data
						console.log(res.data[0]);
						this.supplierval=res.data[0].supplier
						console.log(JSON.parse(res.data[0].imgs));
						this.strimg=JSON.parse(res.data[0].imgs).slice(1)
						this.tleis()
					},
				})
			},
			
			golist(id){
				console.log(id);
				uni.navigateTo({
					url:'/pages/list/list?id='+id,
					
				})
			},
			
			tleis(){
				uni.request({
					url:"/api/sameList?supplier="+this.supplierval,
					method:"GET",
					success: (res) => {
						this.newnr=res.data
						console.log(this.newnr);
					},
				})
			}
		},
		onLoad(option){
			console.log(this.$page.options.id);
			this.nrs(this.$page.options.id)
		}
		
	}
</script>

<style lang="scss">
	@import url("/pages/list/list.scss");
</style>
