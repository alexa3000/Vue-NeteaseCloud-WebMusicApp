import { request } from './request'

/**最新MV */
export function _getNewMV(limit, area) {
    return request({
        url: '/mv/first',
        params: {
            realIP: "127.0.0.1",
            limit: limit,
            area: area
        }
    })
}

/**封装mv信息 */
export class MV {
    constructor(id, cover, name, artist, count, duration) {
        this.id = id;
        this.cover = cover;
        this.name = name;
        this.artist = artist;
        this.count = count;
        this.duration = duration;
    }
}

/**mv数据 */
export function _getMvDetail(id) {
    return request({
        url: '/mv/detail',
        params: {
            realIP: "127.0.0.1",
            mvid: id
        }
    })
}
/**mv地址 */
export function _getMVUrl(id) {
    return request({
        url: '/mv/url',
        params: {
            realIP: "127.0.0.1",
            id: id
        }
    })
}

/**mv评论 */
export function _getMVComment(id, limit, offset = 1) {
    return request({
        url: '/comment/mv',
        params: {
            realIP: "127.0.0.1",
            id: id,
            limit: limit,
            offset: offset
        }
    })
}

/**相似MV */
export function _getSimiMv(id) {
    return request({
        url: '/simi/mv',
        params: {
            realIP: "127.0.0.1",
            mvid: id
        }
    })
}

/**推荐mv */
export function _getTopMv(limit = 10, area, offset) {
    return request({
        url: '/top/mv',
        params: {
            realIP: "127.0.0.1",
            limit: limit,
            area,
            offset
        }
    })
}

/**全部mv */
export function _AllMv(area = '全部', type = '全部', order = '最新', limit, offset = 1) {
    return request({
        url: '/mv/all',
        params: {
            realIP: "127.0.0.1",
            area: area,
            type: type,
            order: order,
            limit: limit,
            offset: offset
        }
    })
}

/**推荐MV */
export function _Personalized() {
    return request({
        url: '/personalized/mv',
        params: {
            realIP: "127.0.0.1",
        }
    })
}