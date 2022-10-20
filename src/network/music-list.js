import { request } from "./request"

/**获取歌单分类 */
export function _getCatList() {
    return request({
        url: '/playlist/catlist',
        params: {
            realIP: "127.0.0.1",
        }
    })
}

/**获取热门歌单 */
export function _getMusicListHot() {
    return request({
        url: '/playlist/hot',
        params: {
            realIP: "127.0.0.1",
        }
    })
}

/**获取不同tag的精品歌单 */
export function _getHighquality(cat, limit) {
    return request({
        url: '/top/playlist/highquality',
        params: {
            realIP: "127.0.0.1",
            cat: cat,
            limit: limit,
            time: new Date().getTime()
        }
    })
}

/**获取歌单--网友精选碟，全部歌单 */
export function _getPlayList(cat, limit, offset) {
    return request({
        url: '/top/playlist',
        params: {
            realIP: "127.0.0.1",
            cat: cat,
            limit: limit,
            offset
        }
    })
}