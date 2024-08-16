<style scoped>
.n-layout-header{
  height: 50px;
}

.main{
  top: 50px;
}
</style>

<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <n-dialog-provider>
        <application></application>
      </n-dialog-provider>
    </n-message-provider>
    <n-layout class="app" position="absolute">
      <n-layout-header bordered>
        <!-- 顶部导航 -->
        <Header></Header>
      </n-layout-header>
      <n-layout class="main" position="absolute" has-sider>
        <!-- 侧边菜单 -->
        <n-layout-sider 
        :width="240" 
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        >
            <main-left-tool-bar
            />
        </n-layout-sider>
        <!-- 内容区域 -->
        <n-layout-content content-style="padding: 5px;">
          <!-- <router-view style="height: 100%;"/> -->
          <Main></Main>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Application from '@/layout/components/Application/Application.vue'
import Header from '@/layout/components/Header/index.vue';
import MainLeftToolBar from '@/layout/components/Toolbar/MainLeftToolBar.vue';
import Main from '@/views/Home/index.vue'

import { darkTheme } from 'naive-ui'
const theme = ref<typeof darkTheme | null>(darkTheme)
</script>