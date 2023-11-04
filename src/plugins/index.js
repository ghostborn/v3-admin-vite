import { loadElementPlus } from './element-plus';
import { loadElementPlusIcons } from './element-plus-icon';
export function loadPlugins(app) {
    loadElementPlus(app);
    loadElementPlusIcons(app);
}
