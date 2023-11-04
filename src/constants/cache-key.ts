const SYSTEM_NAME :string = 'v3-admin-vite'
/** 缓存数据用到的key */
class CacheKey{
  static readonly TOKEN :string = `${SYSTEM_NAME}-token-key`
  static readonly CONFIG_LAYOUT :string = `${SYSTEM_NAME}-config-layout-key`
  static readonly SIDEBAR_STATUS :string = `${SYSTEM_NAME}-sidebar-status-key`
  static readonly ACTIVE_THEME_NAME :string = `${SYSTEM_NAME}-active-theme-name-key`
  static readonly VISITED_VIEWS :string = `${SYSTEM_NAME}-visited-views-key`
  static readonly CACHED_VIEWS :string = `${SYSTEM_NAME}-cached-views-key`
}
export default CacheKey
