import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface SaveData {
    level: number;
    resources: Record<string, number>;
    crafting: Record<string, number>;
    inventory: Record<string, number>;
    tutorialCompleted: boolean;
}

export const useGameStore = defineStore('game', 
() => {
    
})