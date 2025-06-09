<template>
  <div class="value-container">
    <transition name="fade" mode="out-in">
      <button v-if="value >= 1" @click="halveValue" class="value-button">
        {{ formattedValue }}
      </button>
      <div v-else class="completion-message">
        Готово!
        <div class="confetti">🎉</div>
      </div>
    </transition>

    <div v-if="history.length > 0" class="history-section">
      <h3 class="history-title">История изменений:</h3>
      <ul class="history-list">
        <li v-for="(item, index) in history" :key="index" class="history-item">
          <span class="history-index">{{ index + 1 }}.</span>
          {{ formatNumber(item) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1000,
      history: [],
    }
  },
  computed: {
    formattedValue() {
      return this.formatNumber(this.value)
    },
  },
  methods: {
    halveValue() {
      this.history.push(this.value)
      this.value = this.value / 2
    },
    formatNumber(num) {
      return num % 1 === 0 ? num : num.toFixed(2)
    },
  },
}
</script>

<style scoped>
.value-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  text-align: center;
}

.value-button {
  background: linear-gradient(135deg, #42b883, #35495e);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  min-width: 200px;
}

.value-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.value-button:active {
  transform: translateY(1px);
}

.completion-message {
  font-size: 2rem;
  color: #42b883;
  font-weight: bold;
  padding: 1.5rem;
  position: relative;
}

.confetti {
  font-size: 3rem;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.history-section {
  margin-top: 2rem;
  background: #f8f9fa;
  border-radius: 10px;
  padding: 1.5rem;
}

.history-title {
  color: #35495e;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.history-list {
  list-style: none;
  padding: 0;
  max-height: 300px;
  overflow-y: auto;
}

.history-item {
  padding: 0.5rem;
  margin: 0.3rem 0;
  background: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.history-item:hover {
  transform: translateX(5px);
}

.history-index {
  color: #42b883;
  font-weight: bold;
  margin-right: 0.5rem;
  min-width: 25px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-15px);
  }
}

.history-list::-webkit-scrollbar {
  width: 6px;
}
.history-list::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
.history-list::-webkit-scrollbar-thumb {
  background: #42b883;
  border-radius: 10px;
}
</style>
