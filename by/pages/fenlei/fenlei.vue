<template>
	<view class="box">
		<!-- 顶部搜索框 -->
		<view class="head">
			<input type="text" placeholder="请输入你想要的商品">
		</view>
		<view class="con">
			<view class="c_left">
				<scroll-view class="container" scroll-y=true>
					<view class="side" v-for="item in arr" key="index"  @touchstart="onTouchStart" :data-item='item'>
						{{item}}
					</view>
				</scroll-view>

			</view>
			<view class="c_right">
				{{num}}
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	let arr = reactive([])
	let num=ref(null)
	uni.request({
		url: '/api/goodList',
		method: 'GET',
		success: (res) => {
			// console.log(res.data);
			res.data.forEach(item => {
				arr.push(item.type_one)
			})
			arr = [...new Set(arr)]
			// console.log(arr);
			num.value=arr[0]
			// console.log(num.value);
		},
		
		fail: (err) => {
			console.log("请求出错了！！,err");
		}
	});
	
	let onTouchStart=(ev)=>{
		// console.log(ev.target.dataset.item);
		num.value=ev.target.dataset.item
		// console.log(num.value);
	}
</script>

<style scoped>
	*{
		margin:0;
		padding: 0;
	}
	.box {
		padding: 0;
		width: 100%;
		margin: 0 auto;
	}

	.head {
		width: 90%;
		margin: 15rpx auto;
		border-radius: 33rpx 33rpx 33rpx 33rpx;
		border: 1rpx solid gray;
		height: 66rpx;
		line-height: 66rpx;
	}

	.head>input {
		display: inline-block;
		padding: 0 15rpx;
		box-sizing: border-box;
		font-size: 20rpx;
	}

	.con {
		display: flex;
	}

	.c_left {
		width: 25%;
		height: 100%;
		background: #f7f7f7;
	}

	.side {
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
	}

	.container {
		width: 25%;
		height: 100%;
		position: fixed;
	}

	.content {
		width: 100%;
		height: 2000rpx;
		/* 设置内容区域的高度，以便可以垂直滚动 */
		transition: transform 0.3s ease;
		/* 添加过渡效果 */
	}

	.c_right {
		width: 75%;
	}
</style>