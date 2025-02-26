<template>
	<view class="content"
		:style="'background: linear-gradient(to bottom, '+status_colors[status_index]['background']+', #F0F0F0 50%, #F0F0F0 50%);'">
		<view class="greeting">{{getGreeting()}}</view>
		<!-- 450:250 -->
		<view class="banner" :style="'background-color:'+status_colors[status_index]['banner_out'] +';'">
			<!-- 160:430 -->
			<view class="banner-item1" :style="'background-color:'+status_colors[status_index]['banner_in'] +';'">
				<view style="position: relative;display: flex;width: 500rpx;left: 10px;top: 15px;">
					<image style="position: relative;height: 16px;width: 16px;"
						:src="'/static/flag_'+String(status_index)+'.png'" mode="scaleToFill"></image>
					<view style="font-size: 12px;">「{{banner_title}}」</view>
				</view>

				<view style="position: relative;height: 5px;width: 10px;"></view>
				<view style="position: relative;left: 10px;top: 15px;font-size: 18px;font-weight: 800;">
					{{banner_date}}
				</view>

				<view style="position: relative;height: 5px;width: 10px;"></view>
				<view style="position: relative;left: 10px;top: 15px;font-size: 15px;font-weight: 700;">
					{{banner_place}}
				</view>
				<view class="btn"
					:style="'background-color:'+status_colors[status_index]['button'] +';color:'+status_colors[status_index]['button-font']+';'">
					{{status_colors[status_index]["btn"]}}
				</view>

				<view class="time-counter" style="color: #FF743C;">
					<view class="time">{{time_left_obj.hour}}</view>
					<view class="split">:</view>
					<view class="time">{{time_left_obj.minute}}</view>
					<view class="split">:</view>
					<view class="time">{{time_left_obj.second}}</view>
				</view>
			</view>
			<view class="banner-item2" :style="'background-color:'+status_colors[status_index]['banner_in'] +';'">
				<image class="avatar" src="/static/avatar.png"></image>
				<view class="tip" :style="'color: '+status_colors[status_index]['font']+';'">
					{{status_colors[status_index]["tip"]}}
				</view>
			</view>
		</view>

		<view class="greeting" style="position: relative;top: 70rpx;">待处理</view>

		<view class="todo">
			<view class="todo-item" v-for="(item,index) in todoList">
				<view class="todo-item-title-up">
					<view class="todo-item-title">「{{item.title}}」</view>
				</view>
				<view class="todo-item-date">{{item.date}}</view>
				<view class="todo-item-time">{{item.time}}</view>
				<view class="todo-item-btn">{{item.btn}}</view>
			</view>
		</view>

		<view class="greeting" style="position: relative;top: 90rpx;">今日其他课程</view>

		<view class="today-other" id="pos_today" :style="'height: '+String(today_height)+'px;'">
			<view class="today-item" v-for="(item,index) in todayOtherList">
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


</template>

<script>
	export default {
		data() {
			return {
				status_index: 0,
				theme_color: "#F0F0F0",
				banner_title: "记叙文三种题型",
				banner_date: "今天 14:00 - 15:00",
				banner_place: "213室 • 88人",
				banner_btn: "去点名",
				banner_tip: "已经开始上课了，快点名吧",
				today_height: 0,
				todoList: [],
				todayOtherList: [],
				time_left: 8920,
				time_left_obj: {},
				status_colors: [{
						"background": "#F0F0F0",
						"banner_in": "#F7F7F7",
						"banner_out": "#E9E9E9",
						"button": "#FF743C",
						"button-font": "#FFFFFF",
						"font": "#FF743C",
						"btn": "查看上节课",
						"tip": "最近一次课的点名时间还没到呢"
					},
					{
						"background": "#F7EFCB",
						"banner_in": "#FFF4C1",
						"banner_out": "#FEEB97",
						"button": "#FFFFFF",
						"button-font": "#000000",
						"font": "#FF743C",
						"btn": "去点名",
						"tip": "倒计时即将结束，快去点名吧！"
					},
					{
						"background": "#F7EFCB",
						"banner_in": "#F9E58E",
						"banner_out": "#EDC307",
						"button": "#EDC307",
						"button-font": "#000000",
						"font": "#FF743C",
						"btn": "去点名",
						"tip": "已经开始上课了，快点名吧！"
					},
					{
						"background": "#A6BEED",
						"banner_in": "#C1D2E7",
						"banner_out": "#548CFF",
						"button": "#548CFF",
						"button-font": "#FFFFFF",
						"font": "#FFFFFF",
						"btn": "去修改",
						"tip": "点名审核中，倒计时结束自动提交"
					},
					{
						"background": "#FFC9C9",
						"banner_in": "#FFC9A1",
						"banner_out": "#FF743C",
						"button": "#FF743C",
						"button-font": "#FFFFFF",
						"font": "#FFFFFF",
						"btn": "申请补回",
						"tip": "点名已结束，点击申请补回点名"
					},
					{
						"background": "#A2EBE6",
						"banner_in": "#A3E2C9",
						"banner_out": "#00BAAD",
						"button": "#FFF8D9",
						"button-font": "#000000",
						"font": "#FFF8D9",
						"btn": "去查看",
						"tip": "已点名，点击查看或申请更正"
					}
				]
			}
		},
		onLoad() {
			this.status_index = 5
			this.changeThemeColor()
			this.countDown()
		},
		mounted() {
			this.getTodayPos()
		},
		onReady() {
			for (var i = 0; i < 10; i++) {
				this.todoList.push({
					"title": "文学类文本阅读",
					"date": "12月30日",
					"time": "13:00-15:00",
					"btn": "笔记待提交"
				})
			}

			for (var i = 0; i < 10; i++) {
				this.todayOtherList.push({
					"title": "文学类文本阅读",
					"time": "13:00-15:00",
					"btn": "课程未开始"
				})
			}
		},
		methods: {
			changeThemeColor() {
				uni.setNavigationBarColor({
					backgroundColor: this.status_colors[this.status_index]["background"],
					frontColor: "#ffffff"
				})
			},
			getGreeting() {
				const now = new Date();
				const hours = now.getHours();
				let greeting;
				if (hours >= 0 && hours < 6) {
					greeting = '凌晨好';
				} else if (hours >= 6 && hours < 9) {
					greeting = '早上好';
				} else if (hours >= 9 && hours < 12) {
					greeting = '上午好';
				} else if (hours >= 12 && hours < 14) {
					greeting = '中午好';
				} else if (hours >= 14 && hours < 18) {
					greeting = '下午好';
				} else {
					greeting = '晚上好';
				}
				const month = now.getMonth() + 1;
				const date = now.getDate();
				return `${greeting}，今天是${month}月${date}日 👋`;
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
			convertSeconds(seconds) {
				if (seconds <= 0) return
				let hours = Math.floor(seconds / 3600);
				seconds %= 3600;
				let minutes = Math.floor(seconds / 60);
				seconds %= 60;
				return {
					"hour": hours,
					"minute": minutes,
					"second": seconds
				}
			},
			countDown() {
				var that = this
				setInterval(() => {
					that.time_left_obj = that.convertSeconds(that.time_left--)
				}, 1000)
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
		/* background: linear-gradient(to bottom, #F7EFCB, #F0F0F0 50%, #F0F0F0 50%); */
	}

	.greeting {
		position: relative;
		width: 88%;
		left: 6%;
		top: 15rpx;
		font-size: 18px;
		font-weight: 800;
	}

	.banner {
		position: relative;
		width: 660rpx;
		left: 6%;
		height: 365rpx;
		background-color: aqua;
		top: 40rpx;

		border-radius: 20px;
		background-color: #EDC307;

		display: flex;
	}

	.banner-item1 {
		position: relative;
		height: 270rpx;
		width: 245rpx;
		left: 10rpx;
		top: 5px;
		background-color: #F9E58E;
		white-space: nowrap;
		z-index: 999;
		border-radius: 20px 0 0 20px;
	}

	.banner-item2 {
		position: relative;
		height: 300rpx;
		width: 398rpx;
		left: 7rpx;
		top: 5px;
		background-color: #F9E58E;
		border-radius: 0 20px 20px 20px;
	}

	.btn {
		position: relative;
		left: 10px;
		top: 50rpx;
		width: 190rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		border-radius: 40px;
		background-color: #EDC307;
	}

	.time-counter {
		position: relative;
		/* background-color: blueviolet; */
		left: 10rpx;
		width: 230rpx;
		height: 65rpx;
		top: 85rpx;
		display: flex;
		justify-content: space-between;
		color: red;
	}

	.time {
		position: relative;
		height: 55rpx;
		top: 5rpx;
		width: 55rpx;
		background-color: white;
		border-radius: 20rpx;
		line-height: 55rpx;
		text-align: center;
	}

	.split {
		height: 55rpx;
		top: 5rpx;
		line-height: 55rpx;
	}

	.avatar {
		position: relative;
		height: 300rpx;
		width: 300rpx;
		left: 50px;
	}

	.tip {
		position: relative;
		font-size: 12px;
		text-align: center;
		top: 5rpx;
	}

	.todo {
		position: relative;
		top: 90rpx;
		width: 660rpx;
		height: 300rpx;
		left: 45rpx;
		display: flex;
		/* background-color: aquamarine;*/
		overflow-x: auto;
		white-space: nowrap;
		flex: 0 0 auto;
	}

	.todo-item {
		position: relative;
		width: 270rpx;
		min-width: 270rpx;
		height: 270rpx;
		background-color: white;
		border-radius: 40rpx;
		margin-right: 20rpx;
	}

	.todo-item-title-up {
		position: relative;
		width: fit-content;
		text-align: center;
		top: 25rpx;
		height: 40rpx;
		font-size: 25rpx;
		background-color: rgba(84, 140, 255, 0.2);
		left: 20rpx;
		color: #548CFF;
	}

	.todo-item-title {
		position: relative;
		width: fit-content;
	}

	.todo-item-date {
		position: relative;
		width: fit-content;
		color: #7E7E7E;
		top: 37rpx;
		height: 40rpx;
		font-size: 28rpx;
		left: 20rpx;
	}

	.todo-item-time {
		position: relative;
		width: fit-content;
		top: 40rpx;
		height: 40rpx;
		font-size: 34rpx;
		font-weight: 800;
		left: 20rpx;
	}

	.todo-item-btn {
		position: relative;
		background-color: #548CFF;
		height: 75rpx;
		width: 230rpx;
		top: 55rpx;
		line-height: 75rpx;
		text-align: center;
		border-radius: 30px;
		left: 20rpx;
		color: white;
	}

	.today-other {
		position: relative;
		width: 660rpx;
		height: 430rpx;
		left: 45rpx;
		top: 110rpx;

		overflow-y: auto;
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
</style>