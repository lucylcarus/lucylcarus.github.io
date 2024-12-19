/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","639d903751517259d3c15e7f21b76773"],["/archives/2024/09/index.html","4c8071b46301f32d9542dc42ab29bf8a"],["/archives/2024/10/index.html","5960d938364d643dc983fdbde57f4ddc"],["/archives/2024/11/index.html","ca0a1ab9f700c1bcaf923b23b1e07271"],["/archives/2024/12/index.html","b523aa9fa3f7d57581970b1b7bd0aac9"],["/archives/2024/index.html","30bd0eea39c10769ee461acb59e0f048"],["/archives/2024/page/2/index.html","17a4d226bfcf81db673ea52bace6aa02"],["/archives/2024/page/3/index.html","ae6ab0f0ac22035f47dbc41df4c28426"],["/archives/index.html","017a53add01601077ceaa7204df1385d"],["/archives/page/2/index.html","9c2dc492206002b7f25c60b152396e92"],["/archives/page/3/index.html","931e7aa0ad2d0d93713f62af3b71e6d2"],["/categories/index.html","f8f4dbae1bb56cdb12470055e7965535"],["/categories/博客相关/index.html","e7b27bea14ac93dd3f42e7076333a37a"],["/categories/插件/index.html","b3555d2404219e37d7982d4e1ba4e1db"],["/categories/操作系统/index.html","5ae89ebedc4d9c9196d6d8461cc94fac"],["/categories/数据库/index.html","6a1b5589fb5154aed269cc1fce4b1f81"],["/categories/视频教程/index.html","815db3d3939e0f94f7201dfefacf772f"],["/categories/视频教程/page/2/index.html","2f8410d56c0e9eaefbfbcc6c43e5d909"],["/comments/index.html","11bb6e465e6af75b37bbb63c38f828db"],["/css/custom.css","8e93d8881ff2c6de47ef61ca5d34bb06"],["/css/font.css","4fc1036fdf04adcd675fd4d20e5b5943"],["/css/index.css","a69bc851c06cfffb91d2369e867498e1"],["/css/mouse.css","09bb49ab2d2a8f8116371593abf4a68a"],["/css/progress_bar.css","5121c84d9e4001dad87ff69e7b6309d6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gal/index.html","21de1e897f3a17ae1362d7b8e0099c88"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","a360613614245dbbf0a6393d2d08ed4c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c067e1d67d0811262db8ed73113ef5f3"],["/js/ali_font.js","53c64d2cbcf5e62c53b69ec3c0a645ca"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/snowflake.js","95281ebc0e03c7e76ddb4418eebcb0b7"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","1fc9c9cdebcd1f1b37fd0bd4d87b6b41"],["/live2d-widget/README.en.html","7eba0be13dcb42cedee5e6a376cc0ef7"],["/live2d-widget/README.html","c4cf5defbac9b23eb34e8bd51b973092"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a718730a862416169d20d00fe89eb4cb"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","0f10afabe0311239c281a7e9a91f1b0b"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","ce1a9ecfce499ab60508ae33bd1a85a7"],["/music/index.html","60e9a046f1d7655a3cd2f01e13dea31e"],["/page/2/index.html","0f528cb567642be9c5ea9a865ca6f414"],["/page/3/index.html","2a90a9632eddd53c573555f10f3e8846"],["/posts/2fe53600.html","2734147f1ffa64b695d4d73071555769"],["/posts/308ecbbe.html","864626a65fd9000d2d724ce598a44e3f"],["/posts/3447be97.html","7e0bb77ca67818d0708c0ce84ece75bd"],["/posts/37d2fb35.html","48b174a8904850a8fbf93517970dbedf"],["/posts/39e7251c.html","bc339319f727d175b49ba98596e18c76"],["/posts/4921db1e.html","df71a17d34ac2084798bd3db136c308e"],["/posts/508451ef.html","8c1d34b5c0e0d63f6532471a0ecc6de5"],["/posts/7b0505a9.html","592fe4ee8e9aa4e0f3558ddb45f1e90d"],["/posts/90ea59ad.html","cd76fac11fb349819261c220bbdcb937"],["/posts/9211474f.html","7a0e3722726fcbedbfc5f3e15093e43c"],["/posts/9312ffd8.html","f55d55a232255b841c702412b49bcdce"],["/posts/ab55f924.html","d1e2bf43152f40833bd11e7395593726"],["/posts/b3623411.html","c289d199500ac6d9158ceed5c9003a1c"],["/posts/b4c31191.html","47a5d189459d98ef70a1fe0bc8edbe35"],["/posts/b576c088.html","fed66ce7a306e4df24d8cafe6601396e"],["/posts/b5b066b2.html","88fd1cb84297b9c220fbf97679f77c61"],["/posts/d5a6d90f.html","d18e691ccab366add762e1fc55759558"],["/posts/d87f7e0c.html","1ef7b1fde144015119e8bc86716f45be"],["/posts/e6e80026.html","a3bec338f6bdeaf07bcd9ae4d439e286"],["/posts/ed03a884.html","4228e37663620fbdba28c1f300d05680"],["/posts/ffb5ca8d.html","74567e10bc181759e6a7f23f85711b55"],["/sw-register.js","b231ed76ec91cfc1996e7efd317ff99f"],["/tags/GALGAME引擎/index.html","429d741b5b91fcd09ec22d450031d670"],["/tags/GALGAME引擎/page/2/index.html","9b798b723d208373a858803b00751f64"],["/tags/Linux/index.html","d8e35927be8dfdc978af9dfedf035a25"],["/tags/MarkDown/index.html","4048dea0ab000aaebd9c00323b81e56e"],["/tags/MySQL/index.html","5bfdd3e4f5181104c7d9e3ea06156eb6"],["/tags/Ren-py/index.html","7096a40b19aec99b1a0e04c72c8dfc65"],["/tags/Ren-py/page/2/index.html","9d75c77f8b3d84d078fb9ff7815f7732"],["/tags/index.html","c9f3eb46a4a0b8271457a50aa6b6b1f2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
