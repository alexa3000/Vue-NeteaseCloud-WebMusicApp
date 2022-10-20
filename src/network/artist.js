import { request } from './request'
export function _getArtistDesc(id) {
    return request({
        url: '/artist/desc',
        params: {
            realIP: "127.0.0.1",
            id: id
        }
    })
}
/**获取歌手热门五十首歌曲 */
export function _getArtistHot50(id) {
    return request({
        url: '/artist/top/song',
        params: {
            realIP: "127.0.0.1",
            id: id
        }
    })
}

/**获取歌手专辑 */
export function _getArtistAlbum(id) {
    return request({
        url: '/artist/album',
        params: {
            realIP: "127.0.0.1",
            id: id
        }
    })
}

/**获取专辑内容 */
export function _getAlbum(id) {
    return request({
        url: '/album',
        params: {
            realIP: "127.0.0.1",
            id: id
        }
    })
}

/**获取歌手描述 */
export function _getArtistDescDetail(id) {
    return request({
        url: '/artist/desc',
        params: {
            realIP: "127.0.0.1",
            id: id
        }
    })
}

/**获取相识歌手 */
export function _getSimiArtist(cookie, id) {
    return request({
        url: '/simi/artist',
        params: {
            realIP: "127.0.0.1",
            cookie: cookie,
            id: id
        }
    })
}

/**mv */
export function _getArtistMv(id) {
    return request({
        url: '/artist/mv',
        params: {
            realIP: "127.0.0.1",
            id: id
        }
    })
}
