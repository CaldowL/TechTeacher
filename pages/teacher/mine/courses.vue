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
						排课数合计: 23次课
					</view>
				</view>
			</view>
		</view>
		<view class="money-list">
			<picker mode="date" @change="changeDate" fields="month">
				<view class="top-right-date">
					<view>
						{{selected_date}}
					</view>
					<image style="position: relative;height: 40rpx;width: 40rpx;left: 20rpx;top: 5rpx;"
						src="/static/down_no.png" mode="scaleToFill"></image>
				</view>
			</picker>

			<view class="money-list-area" id="pos_today" :style="'height: '+String(today_height-5)+'px;'">
				<view style="position: relative; margin-bottom: 40rpx;top: 20rpx;"
					v-for="(itemm,index) in todayOtherList">
					<view
						style="position: relative;text-align: end;color: #548CFF;font-weight: 800;font-size: 34rpx; right: 20rpx; ">
						{{itemm.date}}
					</view>
					<view class="today-other">
						<view class="today-item" v-for="(item,index) in itemm.list">
							<view class="today-item-left">
								<view class="today-item-title">
									<view class="title-in">
										「{{item.title}}」
									</view>
								</view>
								<view class="today-item-date">
									<view class="today-item-date-time">{{item.time}}</view>
									<view class="today-item-date-person">{{item.person}}</view>
								</view>
							</view>
							<view class="today-item-right">
								<view class="today-item-btn">
									{{item.btn}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<uni-popup ref="popup" type="bottom">
			<view class="popup-view">
				
			</view>
		</uni-popup>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				selected_date: "2024年12月",
				today_height: 0,
				todayOtherList: [{
						"date": "14日（周五）",
						"list": [{
							"title": "爱你爱你爱你",
							"time": "09:00-10:00",
							"person": "13人",
							"btn": "去查看"
						}, {
							"title": "爱你爱你爱你",
							"time": "09:00-10:00",
							"person": "13人",
							"btn": "去查看"
						}, {
							"title": "爱你爱你爱你",
							"time": "09:00-10:00",
							"person": "13人",
							"btn": "去查看"
						}]
					},
					{
						"date": "15日（周六）",
						"list": [{
							"title": "爱你爱你爱你",
							"time": "09:00-10:00",
							"person": "13人",
							"btn": "去查看"
						}, {
							"title": "爱你爱你爱你",
							"time": "09:00-10:00",
							"person": "103人",
							"btn": "去查看"
						}, {
							"title": "爱你爱你爱你",
							"time": "09:00-10:00",
							"person": "1013人",
							"btn": "去查看"
						}]
					},
					{
						"date": "17日（周六）",
						"list": [{
							"title": "爱你爱你爱你",
							"time": "09:00-10:00",
							"person": "113人",
							"btn": "去查看"
						}, {
							"title": "爱你爱你爱你",
							"time": "09:00-10:00",
							"person": "113人",
							"btn": "去查看"
						}, {
							"title": "爱你爱你爱你",
							"time": "09:00-10:00",
							"person": "1013人",
							"btn": "去查看"
						}]
					}
				]
			}
		},
		onLoad() {
			this.getTodayPos()
		},
		methods: {
			changeDate(s) {
				s = s.detail.value
				s = s.replace("-", "年") + "日"
				this.selected_date = s
			},
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

	.avatar {
		position: relative;
		display: flex;
		width: 88%;
		left: 6%;
		top: 30rpx;
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
		font-size: 28rpx;
		height: 30rpx;
		line-height: 30rpx;
		color: #7E7E7E;
		letter-spacing: 3rpx;
	}

	.user-data-next {
		position: relative;
		height: 30rpx;
		width: 30rpx;
		left: 0rpx;
	}

	.top-right-date {
		position: relative;
		top: 70rpx;
		font-size: 38rpx;
		font-weight: 600;
		height: 50rpx;
		left: 6%;
		width: 88%;
		display: flex;
		letter-spacing: 3rpx;
		/* background-color: aqua; */
	}

	.money-list-area {
		position: relative;
		width: 88%;
		left: 6%;
		top: 70rpx;
		overflow-y: auto;
		/* background-color: #FEEB97; */
	}


	.today-other {
		position: relative;
		width: 660rpx;
		top: 10rpx;
	}

	.today-item {
		position: relative;
		width: 660rpx;
		height: 150rpx;
		background-color: white;
		border-radius: 20px;
		display: flex;

		margin-bottom: 20rpx;
		/* background: url('/static/icon-bill-paied.png') no-repeat; */
		background-size: cover;
	}

	.today-item-left {
		position: relative;
		height: 150rpx;
		width: 430rpx;
		/* background-color: aqua; */
	}

	.today-item-title {
		position: relative;
		font-size: 28rpx;
		color: #548CFF;
		top: 20rpx;
		left: 30rpx;
		/* background-color: aqua; */
		width: auto;
	}

	.today-item-date {
		position: relative;
		display: flex;
		top: 30rpx;
		left: 30rpx;
		height: 80rpx;
	}

	.today-item-date-time {
		position: relative;
		font-size: 40rpx;
		font-weight: 800;
		line-height: 80rpx;
		top: -5rpx;
	}

	.today-item-date-person {
		position: relative;
		font-size: 28rpx;
		line-height: 80rpx;
		left: 20rpx;
		color: #7E7E7E;
	}

	.today-item-right {
		position: relative;
		left: -10rpx;
	}

	.today-item-btn {
		position: relative;
		height: 70rpx;
		width: 200rpx;
		top: 40rpx;
		line-height: 70rpx;
		text-align: center;
		color: #548CFF;
		font-size: 36rpx;
		font-weight: 500;
		
		border-radius: 25px;
		border-style: solid;
		border-color: #548CFF;
		border-width: 1px;
		background-color: white;
	}

	.title-in {
		position: relative;
		width: fit-content;
		background-color: rgba(84, 140, 255 0.1);
		height: 45rpx;
		line-height: 45rpx;
		border-radius: 10rpx 0 10rpx 0;
	}
	.popup-view{
		
	}
</style>