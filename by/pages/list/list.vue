<template>
	<view>
		接收index的参数:{{x}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				x:"1"
			};
		},
		onLoad(option){
			console.log(this.$page.options.x);
			this.$data.x=this.$page.options.x
		}
		
	}
</script>

<style lang="scss">

</style>
