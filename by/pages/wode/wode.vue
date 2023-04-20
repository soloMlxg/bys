<template>
	<view class="">
		<!-- <input class="uni-input" @input="onKeyInput()" placeholder="输入账号" />
		<input class="uni-input" @input="onMiInput()" placeholder="输入密码" />
		
		<button @click="btn()">登录</button> -->
	</view>
	
	  <view class="container">
	    <view class="form">
	      <view class="input-item">
	        <input type="text" placeholder="请输入账号" v-model="username" />
	      </view>
	      <view class="input-item">
	        <input type="password" placeholder="请输入密码" v-model="password" />
	      </view>
	      <view class="error-info" v-if="showError">{{ errorInfo }}</view>
	      <button class="login-btn" @click="handleLogin">登录</button>
	    </view>
	  </view>
	
</template>

<script setup>
	import { ref } from "vue";
	
	let username=ref('') 
	let password=ref('') 
	let showError=ref(false) 
	let errorInfo=ref('') 
	
	let handleLogin=()=> {
	  // 校验账号和密码是否为空
	  if (!username.value || !password.value) {
	    showError.value = true
	    errorInfo.value = '账号或密码不能为空'
	    return
	  }
		
	  // 发送登录请求
	  // ...
		
	  // 登录成功，跳转到首页
	  uni.reLaunch({
	    url: "/pages/gouwuche/gouwuche"
	  })
	}
	
	
	
</script>

<style>
	  .container {
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    height: 100vh;
	  }
	  .form {
	    display: flex;
	    flex-direction: column;
	    width: 80%;
	  }
	  .input-item {
	    margin-bottom: 20px;
	  }
	  .error-info {
	    color: red;
	    margin-bottom: 10px;
	  }
	  .login-btn {
	    background-color: #007aff;
	    color: #fff;
	    border: none;
	    border-radius: 5px;
	    padding: 10px 20px;
	    font-size: 16px;
	  }
</style>