<template>
	<view class="content">
		<view class="logo">
			<image style="position: relative;height: 200rpx;width: 200rpx;left: 275rpx;
			top: 150rpx; border-radius: 50%;" src="/static/avatar.png" mode="scaleToFill"></image>
		</view>
		<view class="btn_pthon">
			<view style="position: relative; background-color: #FEEB97;border-radius: 30px;" @click="login">微信一键登录
			</view>
		</view>
		<view class="btn_pthon" style="text-align: center;border-color: white;font-size: 18px;">
			<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class="btn_phone_num"
				style="background-color: white;border: none;box-shadow: none;">手机号登陆</button>
		</view>
		<view class="tip">
			<view style="display: flex; margin: 0 auto;">
				<view class="check">
					<checkbox style="transform:scale(0.7)" color="#FEEB97" :value="false" />
				</view>
				<view class="tip_text">
					<p class="tip-text">登录/注册代表您同意本应用的</p>
					<p class="agreement">《用户协议》</p>
					<p class="connector">和</p>
					<p class="agreement">《隐私协议》</p>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			uni.setStorageSync("openid", "11")
			// if (uni.getStorageSync("openid") != "") {
			// 	uni.switchTab({
			// 		url: "/pages/teacher/home/home"
			// 	})
			// }
		},
		methods: {
			getPhoneNumber(s) {
				console.log(s)
			},
			login() {
				uni.setStorageSync("openid", "aabb")
			}
		}
	}
</script>

<style>
	.content {
		position: absolute;
		height: 100%;
		width: 100%;
		background: linear-gradient(to bottom, rgba(247, 239, 203, 1) 0%, rgba(255, 255, 255, 1) 60%);
	}

	.btn_pthon {
		position: relative;
		width: 70%;
		left: 15%;
		top: 30%;
		height: 55px;
		line-height: 55px;
		text-align: center;
		font-size: 20px;
	}

	.tip {
		position: relative;
		display: flex;
		align-items: center;
		font-size: 12px;
		top: 50%;
	}

	.tip_text {
		display: flex;
		text-align: center;
		align-items: center;
		font-size: 12px;
	}

	.tip-text {
		width: auto;
		margin: 0;
	}

	.agreement {
		width: auto;
		margin: 0;
		color: #FEEB97;
	}

	.btn_phone_num::after {
		border: none;
	}
</style>