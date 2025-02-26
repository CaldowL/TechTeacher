<template>
	<view class="content">
		<view class="swiper-view">
			<swiper :indicator-dots="false" :autoplay="false" :interval="3000" :duration="1000" previous-margin="30rpx"
				next-margin="30rpx">

				<swiper-item>
					<view class="swiper-item">
						<view class="swiper-item-view">
							<view class="item-subject">语文</view>
							<view class="item-info">
								<view class="item-title">「文学类文本阅读」</view>
								<view class="item-time">24年9月12日09:00-10:00</view>
							</view>
							<view class="item-tag">课堂小测</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view class="swiper-item-view">
							<view class="item-subject">语文</view>
							<view class="item-info">
								<view class="item-title">「文学类文本阅读」</view>
								<view class="item-time">24年9月12日09:00-10:00</view>
							</view>
							<view class="item-tag">课堂小测</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view class="swiper-item-view">
							<view class="item-subject">语文</view>
							<view class="item-info">
								<view class="item-title">「文学类文本阅读」</view>
								<view class="item-time">24年9月12日09:00-10:00</view>
							</view>
							<view class="item-tag">课堂小测</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view class="swiper-item-view">
							<view class="item-subject">语文</view>
							<view class="item-info">
								<view class="item-title">「文学类文本阅读」</view>
								<view class="item-time">24年9月12日09:00-10:00</view>
							</view>
							<view class="item-tag">课堂小测</view>
						</view>
					</view>
				</swiper-item>

			</swiper>
		</view>

		<view class="grades-in">
			<view class="grades-in-title">
				<view style="font-size: 36rpx;font-weight: 600; letter-spacing: 3rpx;line-height: 55rpx;">
					成绩快速录入
				</view>
				<view
					style="position: relative;left: 310rpx;line-height: 55rpx;background-color: #548CFF;width: 130rpx;border-radius: 40rpx;text-align: center;color: white;">
					提交
				</view>
			</view>

			<view class="grades-in-list" id="pos_today" :style="'height: '+String(today_height-10)+'px;'">
				<!-- 190 120 -->
				<view class="list-item">
					<view class="list-item-info">
						<image class="list-item-avatar" src="/static/avatar.png" mode="scaleToFill"></image>
						<view class="list-item-name">陈一一</view>
					</view>
					<view class="list-item-grades">
						<input class="list-item-input" type="text" />
					</view>
				</view>
				<view class="list-item">
					<view class="list-item-info">
						<image class="list-item-avatar" src="/static/avatar.png" mode="scaleToFill"></image>
						<view class="list-item-name">陈一一</view>
					</view>
					<view class="list-item-grades">
						<input class="list-item-input" type="text" />
					</view>
				</view>
				<view class="list-item">
					<view class="list-item-info">
						<image class="list-item-avatar" src="/static/avatar.png" mode="scaleToFill"></image>
						<view class="list-item-name">陈一一</view>
					</view>
					<view class="list-item-grades">
						<input class="list-item-input" type="text" />
					</view>
				</view>
				<view class="list-item">
					<view class="list-item-info">
						<image class="list-item-avatar" src="/static/avatar.png" mode="scaleToFill"></image>
						<view class="list-item-name">陈一一</view>
					</view>
					<view class="list-item-grades">
						<input class="list-item-input" type="text" />
					</view>
				</view>
				<view class="list-item">
					<view class="list-item-info">
						<image class="list-item-avatar" src="/static/avatar.png" mode="scaleToFill"></image>
						<view class="list-item-name">陈一一</view>
					</view>
					<view class="list-item-grades">
						<input class="list-item-input" type="text" />
					</view>
				</view>
				<view class="list-item">
					<view class="list-item-info">
						<image class="list-item-avatar" src="/static/avatar.png" mode="scaleToFill"></image>
						<view class="list-item-name">陈一一</view>
					</view>
					<view class="list-item-grades">
						<input class="list-item-input" type="text" />
					</view>
				</view>
				<view class="list-item">
					<view class="list-item-info">
						<image class="list-item-avatar" src="/static/avatar.png" mode="scaleToFill"></image>
						<view class="list-item-name">陈一一</view>
					</view>
					<view class="list-item-grades">
						<input class="list-item-input" type="text" />
					</view>
				</view>
				<view class="list-item">
					<view class="list-item-info">
						<image class="list-item-avatar" src="/static/avatar.png" mode="scaleToFill"></image>
						<view class="list-item-name">陈一一</view>
					</view>
					<view class="list-item-grades">
						<input class="list-item-input" type="text" />
					</view>
				</view>
				<view class="list-item">
					<view class="list-item-info">
						<image class="list-item-avatar" src="/static/avatar.png" mode="scaleToFill"></image>
						<view class="list-item-name">陈一一</view>
					</view>
					<view class="list-item-grades">
						<input class="list-item-input" type="text" />
					</view>
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

	.swiper-view {
		position: relative;
		width: 100%;
		height: 160rpx;
		top: 20rpx;
		/* background-color: aqua; */
	}

	.swiper-item {
		position: relative;
		height: 160rpx;
		width: 690rpx;
		/* background-color: black; */
		border-radius: 40rpx;
		/* border-style: solid; */
		/* border-color: black; */
		border-width: 1px;
	}

	.swiper-item-view {
		position: relative;
		height: 160rpx;
		width: 670rpx;
		left: 10rpx;
		/* background-color: black; */
		border-radius: 40rpx;
		border-style: solid;
		border-color: #548CFF;
		border-width: 1px;
		display: flex;
	}

	.item-subject {
		position: relative;
		height: 110rpx;
		width: 110rpx;
		background-color: #E5EEFF;
		left: 30rpx;
		top: 30rpx;
		border-radius: 30rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 32rpx;
		font-weight: 800;
		color: #548CFF;
	}

	.item-info {
		position: relative;
		height: 110rpx;
		top: 30rpx;
		width: 400rpx;
		/* background-color: aqua; */
		left: 50rpx;
	}

	.item-title {
		position: relative;
		font-size: 34rpx;
		font-weight: 800;
		color: #548CFF;
	}

	.item-time {
		position: relative;
		color: #7E7E7E;
		top: 20rpx;
		left: 13rpx;
	}

	.item-tag {
		position: relative;
		height: 40rpx;
		width: 120rpx;
		top: 60rpx;
		left: 20rpx;
		text-align: center;
		line-height: 40rpx;
		border-radius: 10rpx;
		color: #548CFF;
		background-color: #E4EDFE;
		font-size: 25rpx;
	}

	.grades-in {
		position: relative;
		width: 100%;
		/* background-color: aqua; */
	}

	.grades-in-title {
		/* background-color: aqua; */
		position: relative;
		width: 88%;
		left: 6%;
		height: 55rpx;
		display: flex;
		top: 50rpx;

	}

	.grades-in-list {
		position: relative;
		width: 100%;
		top: 70rpx;
		/* background-color: aqua; */
		display: flex;
		flex-wrap: wrap;
		margin: 0;
		align-content: flex-start;
		overflow-y: auto;
	}

	.list-item {
		position: relative;
		width: 300rpx;
		margin-top: 30rpx;
		margin-left: 60rpx;
		min-width: 300rpx;
		height: 180rpx;
		background-color: #FFFFFF;
		border-radius: 40rpx;
		display: flex;
	}

	.list-item-info {
		position: relative;
		width: 150rpx;
		height: 190rpx;
	}

	.list-item-avatar {
		position: relative;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		background-color: #FE9C76;
		left: 20rpx;
		top: 20rpx;
	}

	.list-item-name {
		position: relative;
		width: 100rpx;
		height: 40rpx;
		left: 20rpx;
		top: 25rpx;
		/* background-color: aqua; */
		text-align: center;
		font-size: 28rpx;
		letter-spacing: 3rpx;
	}

	.list-item-grades {
		position: relative;
		width: 120rpx;
		height: 60rpx;
		top: 60rpx;
		border-radius: 10rpx;
		background-color: #E6E6E6;
	}

	.list-item-input {
		position: relative;
		height: 60rpx;
		text-align: center;
		font-size: 34rpx;
		font-weight: 700;
		color: #7E7E7E;
	}
</style>