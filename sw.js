/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","29331bd92c660c81d19e3a2e8ac28bc6"],["/archives/2024/09/index.html","32bf9eef330b21358cb061d5e84bb220"],["/archives/2024/10/index.html","2f117033a5511c125a9d46753f05a72c"],["/archives/2024/11/index.html","5d1a88b4eb870c4ec59fd25d424138f9"],["/archives/2024/12/index.html","119416c80ee483981d89398ecdd4d012"],["/archives/2024/index.html","c974d454c043de032e9f4ce30fb58b7d"],["/archives/2024/page/2/index.html","471fca9d872466fc92f2a87a9230cccd"],["/archives/index.html","2dab1b89193f94e793b63ce0291df234"],["/archives/page/2/index.html","e8e4383f8a9d9f5759cfb6c2dd2c9587"],["/categories/index.html","c7b4b1ae7a3bdde77a0552278be8405d"],["/categories/博客相关/index.html","d9c999a9680606d94338ac88c1e5f771"],["/categories/插件/index.html","cca33b9086828150ed3ef0ff1abccf9b"],["/categories/操作系统/index.html","d7ec40b9d325416d36fbe59ebb3120a3"],["/categories/数据库/index.html","23e9e179e098138da1305683ad844005"],["/categories/视频教程/index.html","694d815f7c41bdb73ea644f89c0bd8aa"],["/categories/视频教程/page/2/index.html","8a3e967984d909853b9cd8166a7fffcc"],["/comments/index.html","0f9bdfb770ffb562e4783680251f495a"],["/css/custom.css","8e93d8881ff2c6de47ef61ca5d34bb06"],["/css/font.css","4fc1036fdf04adcd675fd4d20e5b5943"],["/css/index.css","a69bc851c06cfffb91d2369e867498e1"],["/css/mouse.css","09bb49ab2d2a8f8116371593abf4a68a"],["/css/progress_bar.css","5121c84d9e4001dad87ff69e7b6309d6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gal/index.html","9a601cc29d4cdb42de650ed384dcaf82"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","a360613614245dbbf0a6393d2d08ed4c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e42f163adace8e92bb7fc4bdb9f90082"],["/js/ali_font.js","53c64d2cbcf5e62c53b69ec3c0a645ca"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/snowflake.js","95281ebc0e03c7e76ddb4418eebcb0b7"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","3b74176bbd56587e45189cdf510f3428"],["/live2d-widget/README.en.html","7eba0be13dcb42cedee5e6a376cc0ef7"],["/live2d-widget/README.html","c4cf5defbac9b23eb34e8bd51b973092"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a718730a862416169d20d00fe89eb4cb"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","0f10afabe0311239c281a7e9a91f1b0b"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","ce1a9ecfce499ab60508ae33bd1a85a7"],["/music/index.html","483694f4ed3e3f1e79c76a13e6f48c83"],["/page/2/index.html","3b167b9f9d70cf81716fdf3c6383def2"],["/posts/308ecbbe.html","4b3cceb8d3df48b624c2339ad513a1cf"],["/posts/3447be97.html","ee96eaa9b4f789efa28c6683a0cc6050"],["/posts/37d2fb35.html","87e0f013454cb4fb82393dc01821ff93"],["/posts/39e7251c.html","75e77fc6ccac98c7e763b5af4102656e"],["/posts/4921db1e.html","138ebb9c53084fe5cbca06b72cafdac9"],["/posts/508451ef.html","a2679875b9d1d6d2a31863d1a2e4f007"],["/posts/7b0505a9.html","bf1a485ec6a3903054053a15bcde8f90"],["/posts/90ea59ad.html","f4c4ed5a7e2479f87fd072775dde9923"],["/posts/9211474f.html","8cec3c8ac89bf82eec2ee3d24b1968f3"],["/posts/9312ffd8.html","a1a21b262f2ff38f062e34f5cb903b46"],["/posts/ab55f924.html","b3705a065b8c5e7b1811f77c8135babc"],["/posts/b3623411.html","60f21c6f1315cf97d0e5421bb7e88155"],["/posts/b4c31191.html","b7b749d9d872e41fc3f570053f0242ef"],["/posts/b576c088.html","0c963f892c010e0c88b62b3b1fa898b1"],["/posts/b5b066b2.html","a759e97d1dda0c81840ec1a97ceeb376"],["/posts/d5a6d90f.html","c7dfa3cb9530fa3006271c096ca95d35"],["/posts/d87f7e0c.html","8af3d356e31b98c3eeadaf624db36d67"],["/posts/e6e80026.html","f8f5b3045b7c0f6c7ca43ae1e4db28d3"],["/posts/ed03a884.html","37b7f4f70278181c6b7eb598ea3998f2"],["/posts/ffb5ca8d.html","dd84b2a044e24d25fcc01f57c0536694"],["/sw-register.js","e4d050977f48e617ede25344fc97525b"],["/tags/GALGAME引擎/index.html","5bdb974d151553ed2d7bdc0ec5d6b423"],["/tags/GALGAME引擎/page/2/index.html","1a93c609cd54e0632161c47843472cf6"],["/tags/Linux/index.html","9b89dc44ca478297d0192a0c9aa976c8"],["/tags/MarkDown/index.html","9d64767a78225166738dabe3c4af528a"],["/tags/MySQL/index.html","9e06536e51611154dc4ffda71613cd58"],["/tags/Ren-py/index.html","ea67f3c5b413b67b269666e5238e24a1"],["/tags/Ren-py/page/2/index.html","b70ad07662a2cade4cb8efdd91c512b4"],["/tags/index.html","3503f28708b987d2b7d1b28ba7b9c87d"]];
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
