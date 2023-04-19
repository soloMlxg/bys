<template>
	<view class="boxs">
		<view class="contens" v-for="(item,index) in str" key="index">
			<view class="imges">
				<swiper class="imges" autoplay interval="2000" circular>
					<swiper-item class="imges" v-for="(el,index) in strimg" key="index">
						<image class="imgs" :src="el" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	// onload(option){
		// console.log(this);
	// }
	export default {
		data() {
			return {
				str:[],
				strimg:[],
			};
		},
		methods:{
			
			nrs(id){
				uni.request({
					url:"/api/detail?goodId="+id,
					method:"GET",
					success: (res) => {
						console.log(res.data);
						this.str=res.data
						console.log(JSON.parse(res.data[0].imgs).slice(1));
						this.strimg=JSON.parse(res.data[0].imgs)
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
