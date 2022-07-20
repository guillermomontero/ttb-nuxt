import { reactive } from 'vue'

export const store = reactive({
  device: 'mobile',
  changeDevice(type) {
    this.device = type;
  },
});
