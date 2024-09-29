import {
	defineStore
} from 'pinia'
import {
	Language,
	Public
} from '@/utils/enum/commonEnum.js'

const useSettingsStore = defineStore('settings', {
  state: () => ({
    selectedLanguage: Language.getDefault().value,
    selectedPublicMode: Public.getDefault().value,
  }),
  getters: {
    getLanguageLabel: (state) => {
      return Language.getByValue(state.selectedLanguage)?.label ?? '';
    },
    getPublicModeLabel: (state) => {
      return Public.getByValue(state.selectedPublicMode)?.label ?? '';
    },
  },
  actions: {
    setLanguage(value) {
      if (Language.contains(value)) {
        this.selectedLanguage = value;
      } else {
        console.warn(`尝试设置的语言值${value}不在枚举中`);
      }
    },
    setPublicMode(value) {
      if (Public.contains(value)) {
        this.selectedPublicMode = value;
      } else {
        console.warn(`尝试设置的音效模式值${value}不在枚举中`);
      }
    },
    resetToDefaults() {
      this.setLanguage(Language.getDefault().value);
      this.setPublicMode(Public.getDefault().value);
    },
  },
});

export default useSettingsStore;