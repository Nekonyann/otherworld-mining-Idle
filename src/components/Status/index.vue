<style scoped lang="scss">
.app {
    height: 100%;

    .style-tabs {
        :deep(.n-tabs-wrapper) {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }

        :deep(.n-tabs-tab) {
            padding: 5px 5px;
            cursor: pointer;
            &:hover {
            background-color: #373636;
            }
        }

        :deep(.n-tabs-tab-pad) {
            width: 0;
        }
    }

    
}
</style>

<template>
    <div class="app">
        
        <div class="level">
            等级 {{ level }}
            <p>{{ expPercentage }} % {{ expNow }} / {{ expMax }}</p>
            <n-progress type="line" :show-indicator="false" :percentage="expPercentage" />
        </div>
        <div class="magic">
            MP
            <p>100 % 100 / 100 </p>
            <n-progress type="line" :show-indicator="false" :percentage="expPercentage" />
        </div>

        <!-- 快捷菜单 -->
        <n-card content-style="padding: 0;">
            <n-tabs
            type="line"
            size="small"
            :tabs-padding="10"
            pane-style="padding: 10px;"
            class="style-tabs"
            >
            <n-tab-pane name="委托">
                委托菜单
            </n-tab-pane>
            <n-tab-pane name="传送">
                传送菜单
            </n-tab-pane>
            <n-tab-pane name="???????">
                ???????
            </n-tab-pane>
            <n-tab-pane name="????????">
                ???????
            </n-tab-pane>
            </n-tabs>
        </n-card>
    </div>
</template>

<script setup>
let expPercentage = ref(0)
let expMax = ref(10000)
let expNow = ref(0)

const level = ref(0)
</script>