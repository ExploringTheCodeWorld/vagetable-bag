<template>
	<theme class="ym-cell">
		<view class="ym-cell__body" :style="props.border ? borderStyle : {}">
			<view class="ym-cell__body__left">
				<view class="ym-cell__body__left__icon" v-if="slots.icon || props.icon">
					<slot name="icon" v-if="slots.icon" ></slot>
					<uni-icons v-else :type="props.icon || 'contact'"  :size="props.iconSize"></uni-icons>
				</view>
				<view class="ym-cell__body__left__title" >
					<slot name="title" v-if="slots.title"></slot>
					<text  v-else>{{props.title}}</text>
				</view>
			</view>
			<view class="ym-cell__body__right">
				<view class="ym-cell__body__right__value"  v-if="slots.value || props.value">
					<slot name="value" v-if="slots.value"></slot>
					<text v-else>{{props.value}}</text>
				</view>
				<view class="ym-cell__body__right__link"  v-if="slots.link || props.link">
					<slot name="link" v-if="slots.link"></slot>
					<uni-icons v-else :type="props.link || 'right'" color="#909399" :size="props.iconSize"></uni-icons>
				</view>
			</view>
		</view>
	</theme>
</template>

<script setup>
	import { computed, useAttrs, useSlots } from 'vue';
	const attrs = useAttrs();
	const slots = useSlots();
	
	const props = defineProps({
		title:{
			type:String,
			default:'title'
		},
		icon:{
			type:String,
			default:''
		},
		value:{
			type:String,
			default:'',
		},
		link:{
			type:String,
			default:''
		},
		iconSize:{
			type:[String,Number],
			default:20
		},
		border:{
			type:Boolean,
			default:true
		},
		borderColor:{
			type:String,
			default:'#909399'
		},
		borderSize:{
			type:String,
			default:'2rpx'
		}
	})
	const borderStyle = computed(()=>{
		return {
			borderBottom:props.borderSize + ' ' + props.borderColor + ' solid' 
		}
	})
</script>

<style scoped lang="scss">
.ym-cell{
	&__body{
		@include q_flex();
		// background-color: #000;
		padding:20rpx;
		box-sizing: border-box;
		// border-radius: 20rpx;
		&__left{
			flex: 1;
			@include q_flex(flex-start);
			&__icon{
				@include q_flex(flex-start);
			}
			&__title{
				margin-left: 10rpx;
			}
		}
		&__right{
			flex: 1;
			@include q_flex(flex-end);
			&__value{
				color: #909399;
			}
			&__link{}
		}
	}
	
}
</style>