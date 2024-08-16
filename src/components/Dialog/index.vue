<style scoped lang="scss">
.dialog-view {
  z-index: 1;

  .control {
    display: flex;
    justify-content: flex-end;
    .btn {
      background: none;
      border: none;
      color: #fff;
      font-size: 14px;
      padding: 0;
      margin: 0;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        color: #00aeff;
      }
    }

  }
}

.name {
  font-weight: bold;
  min-height: 22px;
  margin-bottom: 1px;
}

.context {
  white-space: pre-wrap;
  min-height: 36px;
  user-select: none;
}

.char {
  display: inline-block;
  font-size: 15px;
  opacity: 0;
  animation: fadeIn 0.5s forwards;
  margin-bottom: 1px;
}

.context {
  white-space: pre-wrap;
  min-height: 36px;
  user-select: none;
}

.char {
  display: inline-block;
  font-size: 15px;
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>

<template>
   <div class="dialog-view" v-if="showDialog">
    <div class="view" @click="handleClick">
      <div class="name">{{ currentDialog.name }}</div>
        <div class="context">
          <span v-for="(char, index) in displayedText" :key="index" class="char">{{ char }}</span>
        </div>
      </div>
      <div class="control">
        <button @click="skipDialog" class="btn">跳过</button>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
    dialogs: {type: Array}
});

const emit = defineEmits(['update:showDialog']);

const currentDialogIndex = ref(0);
const currentDialog = ref<Dialog>(props.dialogs[0]);
let typingInterval: any | undefined = undefined;
const isTyping = ref(false);
const displayedText = ref<string[]>([]);
const showDialog = ref(true);
let checkSkip = false;

const typeText = (text: string) => {
  displayedText.value = [];
  isTyping.value = true;
  let index = 0;
  typingInterval = setInterval(() => {
    if (index < text.length) {
      displayedText.value.push(text[index]);
      index++;
    } else {
      clearInterval(typingInterval);
      isTyping.value = false;
    }
  }, currentDialog.value?.speed || 70);
};

watch(currentDialog, (newVal) => {
  if (!checkSkip) {
    typeText(newVal.text);
  }
});

const nextDialog = () => {
  if (currentDialogIndex.value < props.dialogs.length - 1) {
    currentDialogIndex.value++;
    currentDialog.value = props.dialogs[currentDialogIndex.value];
  } else {
    showDialog.value = false;
    currentDialogIndex.value = -1;
    currentDialog.value = '';
    displayedText.value = currentDialog.value;
    emit('update:showDialog', showDialog.value);
  }
};

const handleClick = () => {
  if (isTyping.value) {
    clearInterval(typingInterval);
    displayedText.value = currentDialog.value.text.split('');
    isTyping.value = false;
  } else {
    nextDialog();
  }
};

// 跳过全部文本
const skipDialog = () => {
  checkSkip = true;
  clearInterval(typingInterval);
  isTyping.value = false;
  currentDialogIndex.value = -1;
  currentDialog.value = '';
  displayedText.value = currentDialog.value;
  showDialog.value = false;
  emit('update:showDialog', showDialog.value);
}

onMounted(() => {
  typeText(currentDialog.value.text);
});
</script>