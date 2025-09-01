const CUSTOMER_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂',
            }，
ruyi: {
        api: 'http://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
            }，
bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
            }，
tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
            }，
ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
            }，
zy360: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '360资源',
            maotaizy: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台资源',
            wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
            jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
            dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
            mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
            }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
