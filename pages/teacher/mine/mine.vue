<template>
	<view class="content">
		<view class="avatar">
			<view class="image_avatar">
				<image class="image_avatar_image" src="/static/avatar.png" mode="scaleToFill"></image>
			</view>
			<view class="user-info">
				<view class="user-name">
					苹果老师
				</view>
				<view class="user-data">
					<view class="user-data-txt">
						查看或编辑个人资料
					</view>
					<image class="user-data-next" src="/static/user_next.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>

		<view class="user-income">
			<image class="user-income-image" src="/static/mine-income.png" mode="scaleToFill"></image>
			<view class="user-income-money">
				<view class="user-income-left" @click="routeTo(0)">9999.99</view>
				<view class="user-income-right" @click="routeTo(1)">1000.00</view>
			</view>
			<image class="user-income-statics" src="/static/mine-statics.png" mode="scaleToFill"></image>

			<view class="user-statics">
				<view class="user-statics-left">22</view>
				<view class="user-statics-right" @click="routeTo(3)">24</view>
			</view>
		</view>

		<view class="tools">
			<view class="user-title">常用工具
				<image
					style="position: relative; width: 40rpx; height: 17rpx; left:-40rpx;top: 10rpx; border-radius: 10rpx;"
					src="/static/rect.png" mode="scaleToFill"></image>
			</view>

			<view class="tool-list" id="pos_today" :style="'height: '+String(today_height)+'px;'">
				<view style="background-color: #F0F0F0;">
					<image class="tool-list-image" src="/static/tool-1.png" mode="scaleToFill"></image>
				</view>

				<view style="background-color: #F0F0F0;">
					<image class="tool-list-image" src="/static/tool-2.png" mode="scaleToFill"></image>
				</view>
				<view style="background-color: #F0F0F0;">
					<image class="tool-list-image" src="/static/tool-3.png" mode="scaleToFill"></image>
				</view>
				<view style="background-color: #F0F0F0;">
					<image class="tool-list-image" src="/static/tool-4.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				today_height: 0
			}
		},
		onLoad() {
			this.getTodayPos()
		},
		methods: {
			getTodayPos() {
				var that = this
				const query = uni.createSelectorQuery().in(this);
				query
					.select("#pos_today")
					.boundingClientRect((data) => {
						var height = uni.getWindowInfo().windowHeight
						that.today_height = height - data.top
						console.log(that.today_height)
					})
					.exec();
			},
			routeTo(idx) {
				if (idx == 0) {
					uni.navigateTo({
						url: "/pages/teacher/mine/to-fin"
					})
				} else if (idx == 1) {
					uni.navigateTo({
						url: "/pages/teacher/mine/have-fined"
					})
				} else if (idx == 3) {
					uni.navigateTo({
						url: "/pages/teacher/messages/comment"
					})
				}
			}
		}
	}
</script>

<style>
	::-webkit-scrollbar {
		display: none;
	}

	.content {
		position: absolute;
		height: 100%;
		width: 100%;
		background: linear-gradient(to bottom, #FFFFFF, #F0F0F0 50%, #F0F0F0 50%);
	}

	.avatar {
		position: relative;
		display: flex;
		width: 88%;
		left: 6%;
	}

	.image_avatar {
		position: relative;
		height: 150rpx;
		width: 150rpx;
		/* left: 30rpx; */
	}

	.image_avatar_image {
		height: 150rpx;
		width: 150rpx;
		border-radius: 50%;
		background-color: #FEEB97;
	}

	.user-info {
		position: relative;
		top: 15rpx;
		left: 30rpx;
	}

	.user-name {
		position: relative;
		font-size: 36rpx;
		top: 15rpx;
	}

	.user-data {
		position: relative;
		display: flex;
		top: 40rpx;
	}

	.user-data-txt {
		position: relative;
		font-size: 26rpx;
		height: 30rpx;
		line-height: 30rpx;
		color: #7E7E7E;
		letter-spacing: 4rpx;
	}

	.user-data-next {
		position: relative;
		height: 30rpx;
		width: 30rpx;
		left: 0rpx;
	}

	.user-income {
		position: relative;
		width: 88%;
		left: 6%;
		/* background-color: #FEEB97; */
		top: 40rpx;
	}

	.user-income-image {
		position: relative;
		width: 100%;
		height: 237rpx;
	}

	.user-income-money {
		position: absolute;
		display: flex;
		top: 0rpx;
		z-index: 99;
		font-size: 45rpx;
		color: white;
		font-weight: 800;
		text-align: center;
	}

	.user-income-left {
		position: absolute;
		/* background-color: aqua; */
		width: 330rpx;
		height: 237rpx;
		top: 20rpx;
		line-height: 237rpx;
	}

	.user-income-right {
		position: absolute;
		/* background-color: aquamarine; */
		width: 330rpx;
		height: 237rpx;
		left: 330rpx;
		top: 20rpx;
		line-height: 237rpx;
	}

	.user-income-statics {
		position: relative;
		width: 100%;
		height: 154rpx;
		top: 20rpx;
	}


	.user-statics {
		position: absolute;
		display: flex;
		top: 237rpx;
		z-index: 99;
		font-size: 30rpx;
		font-weight: 400;
		text-align: center;
		left: -15rpx;
		color: #7F7F7F;
	}

	.user-statics-left {
		position: absolute;
		/* background-color: aqua; */
		width: 330rpx;
		height: 154rpx;
		top: 50rpx;
		line-height: 154rpx;
	}

	.user-statics-right {
		position: absolute;
		/* background-color: aquamarine; */
		width: 330rpx;
		height: 154rpx;
		left: 345rpx;
		top: 50rpx;
		line-height: 154rpx;
	}

	.tools {
		position: relative;
		width: 88%;
		left: 6%;
		top: 80rpx;
	}

	.user-title {
		position: relative;
		font-size: 36rpx;
		font-weight: 700;
	}

	.tool-list {
		position: relative;
		overflow-y: auto;
		background-color: #F0F0F0;
	}

	.tool-list-image {
		position: relative;
		width: 100%;
		height: 154rpx;
		margin-top: 30rpx;
		background-color: #F0F0F0;

	}
</style>