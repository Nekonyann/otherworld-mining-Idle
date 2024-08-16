<style scoped lang="scss">
.item-progress {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    .info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}
</style>

<template>
    <div class="item-progress">
        <div class="info">
            <n-text>物品名称</n-text>
            <div class="info-value">
                <span>{{ formatNumberAbbreviation(total) }}</span>
                <span v-if="itemLimit > 0">/{{ formatNumberAbbreviation(itemLimit) }}</span>
                <span :style="{ color: textColor }">{{variableView}}/s</span>
            </div>
        </div>
        <div class="progress" v-if="itemLimit > 0">
            <div class="progress-bar">1</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { formatNumberAbbreviation } from '@/utils/format';

// const prop = defineProps({
    
// })

const inputa = ref(0)
const variableView = ref("+0.00")
const total = ref(0)
const textColor = ref("gray")
const itemLimit = 0

const formatNumber = (num: number): string=> {
    if (num < 0) {
        textColor.value = 'red';
        return "" + num.toFixed(2)
    } else if (num > 0){
        textColor.value = 'green';
        return "+" + num.toFixed(2)
    } else {
        textColor.value = 'gray';
        return "+" + num.toFixed(2)
    }
}

const adjustValue = (num: number, changeNum: number, limit: number): number => {
    if (num + changeNum < 0) {
        return 0
    }
    if (num + changeNum > limit && limit > 0) {
        return limit
    }
    if(changeNum > 0 && limit === 1) {
        return 1
    }
    return num
}
// return parseFloat(num.toFixed(2))

setInterval(() => {
    inputa.value += Math.random() * 10 - 5
    variableView.value = formatNumber(inputa.value)
    total.value += inputa.value
    total.value = adjustValue(total.value, inputa.value , itemLimit)
}, 1000);

</script>
