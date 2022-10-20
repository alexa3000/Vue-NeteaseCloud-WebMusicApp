import axios from 'axios'
import $store from '@/store/index'

// const baseURL="http://localhost:3000";
// const baseURL="http://59.110.124.156:3000";
// const baseURL="http://123.56.175.108:3000"

let baseURL = "";
if (process.env.NODE_ENV === "development") {
    if (process.env.VUE_APP_NETEASE_API_URL_DEV === undefined) {
        baseURL = "http://localhost:3000";
    } else {
        baseURL = process.env.VUE_APP_NETEASE_API_URL_DEV;
    }
} else {
    if (process.env.VUE_APP_NETEASE_API_URL === undefined) {
        baseURL = "https://neteasecloudmusicapi-docs.4everland.app/";
    } else {
        baseURL = process.env.VUE_APP_NETEASE_API_URL;
    }
}

let ajaxTimer = 0;
export function request(config) {
    $store.commit('showLoading');
    const install = axios.create({
        baseURL,
        timeOut: 2000
    });
    install.interceptors.request.use(data => {
        ajaxTimer++;
        return data;
    }, err => {
        $store.commit('hiddenLoading');
        return err
    });
    install.interceptors.response.use(data => {
        ajaxTimer--;
        if (ajaxTimer == 0) $store.commit('hiddenLoading');
        return data;
    }, err => {
        $store.commit('hiddenLoading');
        throw err;
        return err;
    });
    return install(config);
}