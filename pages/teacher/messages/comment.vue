<template>
	<view class="content">
		<view class="avatar">
			<view class="image_avatar">
				<image class="image_avatar_image" src="/static/avatar.png" mode="scaleToFill"></image>
			</view>
			<view class="user-info">
				<view class="user-name">
					{{name}}
				</view>
				<view class="user-data">
					<view class="user-data-txt">
						好评数合计: {{count}}条
					</view>
				</view>
			</view>
		</view>
		<view class="tab">
			<view :class="selected_index==0? 'opt button_style_selected':'opt button_style'" @click="changeType(0)">
				全部
			</view>
			<view :class="selected_index==1? 'opt button_style_selected':'opt button_style'" @click="changeType(1)">
				好评
			</view>
			<view :class="selected_index==2? 'opt button_style_selected':'opt button_style'" @click="changeType(2)">
				中评
			</view>
			<view :class="selected_index==3? 'opt button_style_selected':'opt button_style'" @click="changeType(3)">
				差评
			</view>
		</view>

		<view class="comment" id="pos_today" :style="'height: '+String(today_height-10)+'px;'">
			<view style="position: relative;height: 190rpx;margin-bottom: 30rpx;" v-for="(item,index) in comment_show">
				<view class="comment-item" :style="'background-color:'+ bg_colors[item.code] + ';'">
					<image class="comment-item-img" :src="src_path[item.code]" mode="scaleToFill"></image>
					<view class="comment-item-info">
						<view class="comment-item-info-tt" :style="item.code==1?'color: black;':'color: white;'">
							<view class="item-p">{{item.name}}</view>
							<view class="item-date">{{item.date}}</view>
						</view>
						<view class="comment-item-info-msg" :style="item.code==1?'color: black;':'color: white;'">
							{{item.content}}
						</view>
					</view>
					<image class="notice-unfold" src="/static/notice_unfold.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selected_index: 0,
				today_height: 0,
				comment_list: [],
				comment_show: [],
				name: "苹果老师",
				count: 22,
				bg_colors: ["#FF743C", "#FDEA96", "#548BFE"],
				src_path: ["/static/comment_good.png", "/static/comment_ok.png", "/static/comment_bad.png"]
			}
		},
		onLoad() {
			this.getTodayPos()
			this.demo()
			this.changeType(0)
		},
		methods: {
			demo() {
				for (var i = 0; i < 100; i++) {
					this.comment_list.push({
						"name": "陈一一家长",
						"date": "24年09月19日",
						"content": "这是评价这是评价这是评价这是评价这是评价这是评价",
						"code": 2
					})
				}
			},
			changeType(idx) {
				this.selected_index = idx
				this.comment_show = []
				if (idx == 0) {
					this.comment_show = this.comment_list
					return
				}
				for (var index = 0; index < this.comment_list.length; index++) {
					var ele = this.comment_list[index]
					if (ele.code == idx - 1) {
						this.comment_show.push(ele)
					}
				}
			},
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

	.tab {
		position: relative;
		width: 94%;
		left: 6%;
		height: 100rpx;
		top: 50rpx;
		display: flex;
		/* background-color: blueviolet; */
		overflow-x: auto;
	}

	.opt {
		position: relative;
		height: 60rpx;
		width: 160rpx;
		min-width: 160rpx;
		top: 20rpx;
		/* background-color: aquamarine; */
		line-height: 60rpx;
		text-align: center;
		font-size: 30rpx;
		color: white;
		margin-right: 50rpx;
		border-radius: 35rpx;
		background-color: #548CFF;
	}

	.button_style_selected {
		background-color: #548CFF;
		color: #E5EEFF;
	}

	.button_style {
		background-color: #E5EEFF;
		color: #548CFF;
	}

	.comment {
		position: relative;
		width: 88%;
		left: 6%;
		top: 100rpx;
		overflow-y: auto;
	}

	.comment-item {
		position: relative;
		width: 660rpx;
		height: 165rpx;
		display: flex;
		position: relative;
		top: 30rpx;
		background-color: #FE743C;
		border-radius: 50rpx;
		overflow: visible;
		/* margin-bottom: 70rpx; */
		color: white;
		letter-spacing: 3rpx;
	}

	.comment-item-img {
		position: absolute;
		width: 80rpx;
		height: 80rpx;
		left: 0rpx;
		top: -30rpx;
	}

	.notice-unfold {
		position: relative;
		height: 40rpx;
		width: 40rpx;
		top: 63rpx;
		left: 25rpx;
	}

	.comment-item-info {
		position: relative;
		width: 580rpx;
		height: 165rpx;
	}

	.comment-item-info-tt {
		position: relative;
		display: flex;
		width: 580rpx;
		left: 90rpx;
		top: 15rpx;
		line-height: 50rpx;
		height: 50rpx;
		/* background-color: brown; */
	}

	.item-p {
		font-size: 25rpx;
		font-weight: 300;
	}

	.item-date {
		position: relative;
		font-size: 20rpx;
		height: 30rpx;
		width: 150rpx;
		text-align: center;
		left: 220rpx;
		top: 10rpx;
		line-height: 30rpx;
		background-color: rgba(255, 255, 255, 0.1);
		font-weight: 300;
		border-radius: 10rpx;
	}

	.comment-item-info-msg {
		position: relative;
		left: 90rpx;
		top: 15rpx;
		width: 505rpx;
		height: 90rpx;
		font-size: 25rpx;
		display: -webkit-box;
		/* 使用弹性盒子布局 */
		-webkit-box-orient: vertical;
		/* 设置文本垂直排列 */
		-webkit-line-clamp: 2;
		/* 限制显示的行数 */
		overflow: hidden;
		/* 隐藏超出部分 */
		text-overflow: ellipsis;
		/* 超出部分显示省略号 */
		line-height: 1.5;
		/* 设置行高，确保高度计算正确 */
		max-height: calc(1.5em * 2);
		/* 根据行高和行数设置最大高度 */
	}
</style>