import * as ElementPlusIconsVue from '@element-plus/icons-vue';
export function loadElementPlusIcons(app) {
    /** Element Plus 组件完整引入 */
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component);
    }
}
