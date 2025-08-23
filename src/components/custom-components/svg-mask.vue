

<script lang="ts" setup>
import {
	type HTMLAttributes,
	computed,
	ref,
} from "vue";
import { cn } from "../../libs/utils";

interface Props {
	class?: HTMLAttributes["class"];
	size?: number;
	revealSize?: number;
}

const props = withDefaults(defineProps<Props>(), {
	size: 12,
	revealSize: 300,
});

const isHovered = ref(false);
const svgMaskContainerRef = ref<HTMLDivElement>();
const mousePosition = ref<{ x: null | number; y: null | number }>({
	x: null,
	y: null,
});

const maskSize = computed(() => {
	return isHovered.value ? props.revealSize : props.size;
});

function updateMousePosition(event: MouseEvent) {
	if (!svgMaskContainerRef.value) return;

	const rect = svgMaskContainerRef.value.getBoundingClientRect();
	mousePosition.value = {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top,
	};
}
</script>

<template>
    <div ref="svgMaskContainerRef"
        :class="cn('h-screen relative', isHovered ? 'bg-transparent' : 'bg-transparent', props.class)"
        @mousemove="updateMousePosition">
        <div :style="{
            maskSize: `${maskSize}px`,
            maskPosition: `${mousePosition.x ? mousePosition.x - maskSize / 2 : 0}px ${mousePosition.y ? mousePosition.y - maskSize / 2 : 0
                }px`,
            transition: 'mask-size 0.2s ease-in-out',
        }"
            class="absolute flex size-full items-center justify-center bg-black dark:bg-white text-black dark:text-white bg-grid-white/[0.2] [mask-image:url(/assets/images/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px]">
            <div class="absolute inset-0 z-0 size-full bg-black dark:bg-white  opacity-50"></div>
            <div class="relative z-20 mx-auto max-w-4xl"
                :onmouseenter="() => (isHovered = true)" :onmouseleave="() => (isHovered = false)">
                <slot name="base"></slot>
            </div>
        </div>

        <div class="flex size-full items-center justify-center ">
            <slot name="reveal"></slot>
        </div>
    </div>
</template>