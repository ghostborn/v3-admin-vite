/** 缓存数据用到的key */
declare class CacheKey {
    static readonly TOKEN: string;
    static readonly CONFIG_LAYOUT: string;
    static readonly SIDEBAR_STATUS: string;
    static readonly ACTIVE_THEME_NAME: string;
    static readonly VISITED_VIEWS: string;
    static readonly CACHED_VIEWS: string;
}
export default CacheKey;
