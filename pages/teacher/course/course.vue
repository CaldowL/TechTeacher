<template>
	<view class="content">
		<view class="top">
			<view class="top-left">
				<view class="todo-num">{{todoNum}}</view>
				<image class="top-left-image" src="/static/todo_have.png" mode="scaleToFill"></image>
			</view>
			<view class="top-right">
				<picker mode="date" @change="changeDate" fields="month">
					<view class="top-right-date">
						<view class="">
							{{selected_date}}
						</view>
						<image style="position: relative;height: 40rpx;width: 40rpx;left: 20rpx;top: 5rpx;"
							src="/static/down_have.png" mode="scaleToFill"></image>
					</view>
				</picker>
				<view class="top-right-list">
					<view class="top-right-list-item" v-for="(item,index) in dateList">
						{{item.date}}
						<view v-if="item.tip"
							style="position: absolute;height: 10rpx;width: 10rpx; background-color: red;border-radius: 50%;left:60rpx; top: 10rpx;">
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="todo-list" id="pos_today" :style="'height: '+String(today_height)+'px;'">
			<view style="margin-bottom: 70rpx;" v-for="(itemm,index) in todayOtherList">
				<view class="todo-list-date">
					{{itemm.date}}
				</view>
				<view class="today-other">
					<view class="today-item" v-for="(item,index) in itemm.list">
						<view class="today-item-left">
							<view class="today-item-title">「{{item.title}}」</view>
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
</template>

<script>
	export default {
		data() {
			return {
				status_index: 0,
				status_colors: ["#FFC9C9", "#A6BEED"],
				selected_date: "2024年09月",
				todayOtherList: [{
						"date": "09月14日（周五）",
						"list": [{
							"title": "爱你爱你爱你",
							"time": "09:00-10:00",
							"person": "10/13人",
							"btn": "去查看"
						}, {
							"title": "爱你爱你爱你",
							"time": "09:00-10:00",
							"person": "10/13人",
							"btn": "去查看"
						}, {
							"title": "爱你爱你爱你",
							"time": "09:00-10:00",
							"person": "10/13人",
							"btn": "去查看"
						}]
					},
					{
						"date": "09月15日（周六）",
						"list": [{
							"title": "爱你爱你爱你",
							"time": "09:00-10:00",
							"person": "10/13人",
							"btn": "去查看"
						}, {
							"title": "爱你爱你爱你",
							"time": "09:00-10:00",
							"person": "10/13人",
							"btn": "去查看"
						}, {
							"title": "爱你爱你爱你",
							"time": "09:00-10:00",
							"person": "10/13人",
							"btn": "去查看"
						}]
					}
				],
				dateList: [],
				today_height: 0,
				todoNum: 88
			}
		},
		onLoad() {
			uni.setNavigationBarColor({
				backgroundColor: this.status_colors[this.status_index],
				frontColor: "#ffffff"
			})

			for (var i = 0; i < 10; i++) {
				this.todayOtherList.push({
					"title": "文学类文本阅读",
					"time": "13:00-15:00",
					"btn": "课程未开始"
				})
			}

			this.dateList = this.generateRandomArray()
		},
		mounted() {
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
			generateRandomArray() {
				let result = [];
				for (let i = 0; i < 20; i++) {
					let item = {
						date: Math.floor(Math.random() * 31) + 1, // 生成 1 到 31 之间的随机日期
						tip: Math.random() >= 0.5 // 生成随机的布尔值
					};
					result.push(item);
				}
				return result;
			},
			generateRandomArray2() {
				let result = [];
				for (let i = 0; i < 20; i++) {
					let item = {
						date: Math.floor(Math.random() * 31) + 1, // 生成 1 到 31 之间的随机日期
						tip: Math.random() >= 0.5 // 生成随机的布尔值
					};
					result.push(item);
				}
				return result;
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
		background: linear-gradient(to bottom, #FFC9C9, #F0F0F0 50%, #F0F0F0 50%);
	}

	.top {
		position: relative;
		width: 660rpx;
		height: 250rpx;
		left: 6%;
		top: 50rpx;
		/* background-color: aqua; */
		display: flex;
	}

	.top-left {
		position: relative;
		width: 250rpx;
		height: 250rpx;

	}

	.top-left-image {
		width: 250rpx;
		height: 250rpx;
	}

	.todo-num {
		position: absolute;
		height: 250rpx;
		width: 250rpx;
		line-height: 250rpx;
		text-align: center;
		font-size: 55rpx;
		top: -25rpx;
		font-weight: 800;
		color: white;
	}

	.top-right {
		position: relative;
		height: 250rpx;
		width: 385rpx;
		left: 25rpx;
		/* background-color: blueviolet; */
	}

	.top-right-date {
		font-size: 38rpx;
		font-weight: 800;
		height: 50rpx;
		/* background-color: aqua; */
		display: flex;
	}

	.top-right-list {
		position: relative;
		width: 390rpx;
		top: 10rpx;
		height: 190rpx;
		/* background-color: burlywood; */
		display: flex;
		/* justify-content: space-between; */
		flex-wrap: wrap;
		overflow-y: scroll;
	}

	.top-right-list-item {
		position: relative;
		min-width: 78rpx;
		height: 80rpx;
		width: 78rpx;
		border-radius: 20rpx;
		font-size: 36rpx;
		line-height: 80rpx;
		margin-right: 17rpx;
		margin-bottom: 17rpx;
		text-align: center;
		/* background-color: aquamarine; */
		border-color: gray;
		border-style: solid;
		border-width: 0.5px;
	}

	.todo-list {
		position: relative;
		width: 660rpx;
		/* height: 250rpx; */
		left: 6%;
		top: 70rpx;
		font-size: 35rpx;
		font-weight: 700;
		overflow-y: auto;
	}

	.today-other {
		position: relative;
		width: 660rpx;
		top: 30rpx;
	}

	.today-item {
		position: relative;
		width: 660rpx;
		height: 150rpx;
		background-color: white;
		border-radius: 20px;
		display: flex;
		margin-bottom: 20rpx;
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
		font-size: 35rpx;

		/* background-color: blueviolet; */
		border-radius: 25px;
		color: #548CFF;
		border-style: solid;
		border-color: #548CFF;
		background-color: white;
	}
	
	.title-in {
		position: relative;
		width: fit-content;
		background-color: rgba(0, 186, 173, 0.1);
		height: 45rpx;
		line-height: 45rpx;
		border-radius: 10rpx 0 10rpx 0;
	}
</style>