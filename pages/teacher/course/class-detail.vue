<template>
	<view class="content">
		<view class="title-class">
			<view class="title-class-title">
				「文学类文本阅读」
			</view>
			<view class="title-class-detail">
				<view class="title-class-time">24年9月12日09:00-10:00</view>
				<image class="title-class-image" src="/static/to-relax.png" mode="scaleToFill"></image>
			</view>
		</view>

		<view class="stu-list">
			<view class="stu-num">
				共{{stu_list.length}}人
			</view>

			<view class="stu-list-class" id="pos_today" :style="'height: '+String(today_height)+'px;'">
				<view class="stu-list-item" v-for="(item,index) in stu_list">
					<image class="stu-item-img" src="/static/avatar.png" mode="scaleToFill"></image>
					<view class="stu-item-info">
						<view class="stu-item-name">{{item.name}}</view>
						<view class="stu-item-grade">{{item.grade}}</view>
					</view>
					<image class="stu-item-detail" src="/static/notice_unfold.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>

	</view>

</template>

<script>
	export default {
		data() {
			return {
				today_height: 0,
				stu_list: []
			}
		},
		onLoad() {
			this.getTodayPos()
			this.demo_stu()
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
			demo_stu() {
				for (var i = 0; i < 30; i++) {
					this.stu_list.push({
						"name": "陈一二",
						"grade": "福建省第十五中学，初二年级"
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

	.title-class {
		position: relative;
		left: 6%;
		width: 88%;
		top: 30rpx;
		border-radius: 50rpx;
		border-style: solid;
		border-width: 1px;
		height: 160rpx;
		border-color: #548CFF;
	}

	.title-class-title {
		position: relative;
		left: 50rpx;
		top: 30rpx;
		color: #548CFF;
		font-size: 34rpx;
		font-weight: 700;
	}

	.title-class-detail {
		position: relative;
		display: flex;
		left: 65rpx;
		top: 50rpx;
		height: 50rpx;
		/* background-color: #548CFF; */
	}

	.title-class-time {
		position: relative;
		color: #7E7E7E;
		line-height: 50rpx;
		font-size: 34rpx;
	}

	.title-class-image {
		position: relative;
		height: 50rpx;
		width: 110rpx;
		left: 30rpx;
		top: 0rpx;
	}

	.stu-num {
		position: relative;
		left: 6%;
		top: 50rpx;
		font-size: 36rpx;
		font-weight: 500;
		color: #548CFF;
	}

	.stu-list-class {
		position: relative;
		width: 88%;
		left: 6%;
		top: 50rpx;
		overflow-y: auto;
		/* background-color: aqua; */
	}

	.stu-list-item {
		position: relative;
		height: 150rpx;
		background-color: #FDFDFD;
		border-radius: 50rpx;
		display: flex;
		margin-top: 30rpx;
	}

	.stu-item-img {
		position: relative;
		height: 120rpx;
		width: 120rpx;
		min-width: 120rpx;
		left: 30rpx;
		top: 15rpx;
		border-radius: 50%;
		background-color: #FC9B75;
	}

	.stu-item-info {
		position: relative;
		left: 50rpx;
		height: 150rpx;
		width: 430rpx;
		/* background-color:blue; */
	}

	.stu-item-name {
		position: relative;
		top: 25rpx;
		font-size: 34rpx;
		letter-spacing: 3rpx;
	}

	.stu-item-grade {
		position: relative;
		top: 45rpx;
		color: #7E7E7E;
		letter-spacing: 3rpx;
		font-size: 29rpx;
		/* background-color: aquamarine; */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.stu-item-detail {
		position: relative;
		height: 50rpx;
		width: 50rpx;
		top: 50rpx;
		left: 50rpx;
	}
</style>