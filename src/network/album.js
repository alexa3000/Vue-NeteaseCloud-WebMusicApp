import { request } from "./request"

export function _getAlbumDetail(id) {
    return request({
        url: '/album/detail/dynamic',
        params: {
            realIP: "127.0.0.1",
            id
        }
    })
}