import { type App } from "vue"
import { loadElementPlus } from "./element-plus"
import { loadElementPlusIcons } from "./element-plus-icon"
import { loadVxeTable } from "./vxe-table"

export function loadPlugins(app: App) {
  loadElementPlus(app)
  loadElementPlusIcons(app)
  loadVxeTable(app)
}
