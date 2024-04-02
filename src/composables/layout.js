import { shallowRef, onMounted, onUnmounted, defineAsyncComponent } from 'vue'

export function useLayout() {
  const layout = shallowRef(null)

  const onReside = () => {
    const width = window.innerWidth
    if (width < 768) {
      layout.value = defineAsyncComponent(() => import('@/layouts/LayoutSmall.vue'))
    } else if (width < 1200) {
      layout.value = defineAsyncComponent(() => import('@/layouts/LayoutMedium.vue'))
    } else {
      layout.value = defineAsyncComponent(() => import('@/layouts/LayoutLarge.vue'))
    }
  }

  onMounted(() => {
    window.addEventListener('resize', onReside)
    onReside()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onReside)
  })

  return { layout }
}
