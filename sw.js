/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f1dc2ab7edb787b4a41ad831a5b5a35c"],["/archives/2024/09/index.html","c2d0d8054101c0f548e18a76237ae081"],["/archives/2024/10/index.html","c998b4d5a676b5d079b1dd5fd8486cc2"],["/archives/2024/11/index.html","302d18baf59129ac7b79b4011e2f5834"],["/archives/2024/index.html","5a331262d2dc3e01a921f49261598bec"],["/archives/2024/page/2/index.html","71d9560f4013c9729ebbd5fce8e034cc"],["/archives/index.html","e5c9f20bc14b1cf9cf35824ef1cf1198"],["/archives/page/2/index.html","17168d743bd0806f85b099a58549c0e1"],["/categories/index.html","b26c7354df39fec63e84e27c7849dfba"],["/categories/使用教程/index.html","3b844c11ff71bffbd1a4338dc1c9998b"],["/categories/使用教程/page/2/index.html","d05a2b32ce9abcabc41f86099915ef47"],["/categories/使用教程/操作系统/index.html","ff9aee31bb3c98ea84e6ba29aaf4e4fa"],["/categories/使用教程/数据库/index.html","2dc62b85023e5b1ab05444b5aec5acca"],["/categories/使用教程/视频教程/index.html","64cedfc57ca71a7bcfe52ed460a3dc68"],["/categories/插件/index.html","c30158e070ba31044cb0f51b8d66dfcb"],["/comments/index.html","040a9351bb828cab06da4cf4b62fceaf"],["/css/custom.css","3fba99d7b2d4d356532a2d530529a83a"],["/css/font.css","4fc1036fdf04adcd675fd4d20e5b5943"],["/css/index.css","28d51c6a2180f2eb46da1bd755559fa8"],["/css/mouse.css","09bb49ab2d2a8f8116371593abf4a68a"],["/css/progress_bar.css","5121c84d9e4001dad87ff69e7b6309d6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gal/index.html","67cf22b5d878aef7c94f79059af70d38"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","a360613614245dbbf0a6393d2d08ed4c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","37a49b047425a5ca4b5f7522ad646373"],["/js/ali_font.js","53c64d2cbcf5e62c53b69ec3c0a645ca"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/snowflake.js","fb18e25fcd0300749b19e819bfae507d"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","ecae47938925b1138e3553176cf56072"],["/live2d-widget/README.en.html","7eba0be13dcb42cedee5e6a376cc0ef7"],["/live2d-widget/README.html","c4cf5defbac9b23eb34e8bd51b973092"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a718730a862416169d20d00fe89eb4cb"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","0f10afabe0311239c281a7e9a91f1b0b"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","ce1a9ecfce499ab60508ae33bd1a85a7"],["/music/index.html","4a8128d2859a5fcb83f9a4d5a2217eb2"],["/page/2/index.html","42274d368027de2c2de30c04eb853a87"],["/posts/308ecbbe.html","46918c803e3a4d2ded4f450794d2e270"],["/posts/3447be97.html","c873ebe86be2b4c8841987cb83a62373"],["/posts/37d2fb35.html","34293575180a11ad7e07553db724d8c1"],["/posts/39e7251c.html","cacad8033ea8c7b7ba960a2af1659ef4"],["/posts/4921db1e.html","02130be6a8d8695b7f72c8c2891593c0"],["/posts/508451ef.html","be165db8fe42671ce26188aa300babb1"],["/posts/90ea59ad.html","09315c21e7d3d5f58b9853149c6060dd"],["/posts/9211474f.html","90d8d8dc4c971a31affaa432addd25f7"],["/posts/9312ffd8.html","3d01c63fa087241036912c70bb17fede"],["/posts/ab55f924.html","61b09b4ce8392a88f90406842ca8db42"],["/posts/b3623411.html","1ed32b709599ebccdd42c134cf21496c"],["/posts/b4c31191.html","f30a67e041a15e4b0b51890f60aa946a"],["/posts/b576c088.html","ea31004eb436e4c9869f6809848bc05e"],["/posts/b5b066b2.html","7573eafb5abd7e5434f5f82c9640f0be"],["/posts/d5a6d90f.html","ede5b6d6d23dfdb8ef1f46e09af775bc"],["/posts/e6e80026.html","9ba93e2fa98ae534d6778be2ee2af3d2"],["/posts/ed03a884.html","5037e4c96363ee6c16056dc37d7c921a"],["/posts/ffb5ca8d.html","9f108cec68fcdf9ffad5603745f02e32"],["/sw-register.js","46cc47c318fe2539f8df37a5bf5f21ea"],["/tags/GALGAME引擎/index.html","ec4db70e9f77548b89a83bf322a2d594"],["/tags/Linux/index.html","2c8385f8bbb2d94246ac51b71524072a"],["/tags/MarkDown/index.html","a5f04dfa1806d5cf7515c86194716e42"],["/tags/MySQL/index.html","9a241d2e338d3ac0debdfaf76980545a"],["/tags/Ren-py/index.html","24ac0cd9181c0798aedf3ca8aff53d4c"],["/tags/index.html","c58549be9566a211e52cb91ab53e3809"]];
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
