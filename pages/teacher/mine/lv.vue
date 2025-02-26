<template>
	<view class="content">
		<view class="info">
			<view class="avatar">
				<image class="avatar-img" src="/static/avatar.png" mode="scaleToFill"></image>
			</view>
			<view class="data">
				<view class="item-time">9999</view>
				<view class="item-class">9999</view>
				<view class="item-stu">9999</view>
			</view>
		</view>
		<view class="map" id="pos_today" :style="'height: '+String(today_height-5)+'px;'">
			<image class="map-img" style="position: relative;width: 100%;" src="/static/lv.png" mode="widthFix"></image>
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

	.info {
		position: relative;
		width: 100%;
		height: 180rpx;
		display: flex;
		top: 30rpx;
		left: 30rpx;
		/* background-color: aqua; */
	}

	.avatar {
		position: relative;
		width: 150rpx;
		height: 150rpx;
		top: 15rpx;
		left: 30rpx;
		border-radius: 50%;
		background-color: #FEEB97;
	}

	.avatar-img {
		position: relative;
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
	}

	.data {
		position: relative;
		background: url("/static/level_flag.png") no-repeat;
		background-size: cover;
		width: 500rpx;
		height: 145rpx;
		top: 15rpx;
		left: 40rpx;
		display: flex;
		/* background-color: aqua; */
	}

	.item-time {
		width: 167rpx;
		text-align: center;
		position: relative;
		font-size: 34rpx;
		font-weight: 800;
		color: #548CFF;
		line-height: 130rpx;
		top: -10rpx;
		left: 5rpx;
	}

	.item-class {
		width: 167rpx;
		text-align: center;
		position: relative;
		font-size: 34rpx;
		font-weight: 800;
		color: #548CFF;
		line-height: 130rpx;
		top: -10rpx;
	}

	.item-stu {
		width: 167rpx;
		text-align: center;
		position: relative;
		font-size: 34rpx;
		font-weight: 800;
		color: #548CFF;
		line-height: 130rpx;
		top: -10rpx;
	}

	.map {
		position: relative;
		width: 92%; /* 690 */
		left: 4%;
		top: 50rpx;
		background-color: white;
		overflow-y: auto;
		border-radius: 30rpx;
	}

	.map-img {
		position: relative;
		width: 630rpx;
		left: 30rpx;
		top: 30rpx;
	}
</style>