/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","abfe7794aaebcf71f831385d676950de"],["/archives/2024/09/index.html","652ba86bcbb6c71a22696c263811f1de"],["/archives/2024/10/index.html","4536cbcc3c3db7ec21e6fc2ed8cc5e74"],["/archives/2024/11/index.html","1aa52d91674a0ebd3fe0f92258226342"],["/archives/2024/index.html","4e8c930cc10aea79e7dce151aa1184bd"],["/archives/2024/page/2/index.html","c79fcbb7883f621def57895ca43b9d8a"],["/archives/index.html","68e9d7ff87b3c89eab85970fdf0435fb"],["/archives/page/2/index.html","b371725e3aad18a6e5091149f1beda6a"],["/categories/index.html","20c82dbae1cff30447d97ed304964693"],["/categories/使用教程/index.html","eadf890e5d69e787607fe6b0cf1b7994"],["/categories/使用教程/page/2/index.html","7ce9094f333d11cf1f31c3faf20108e6"],["/categories/使用教程/操作系统/index.html","934a3cfb438081764532accca185ab79"],["/categories/使用教程/数据库/index.html","3a5b6f6d4207031ab6b58029883d3e90"],["/categories/使用教程/视频教程/index.html","5af61d47ef5732482558752724095571"],["/categories/插件/index.html","d66d414e2ef5fcf39ea9c36514f51e30"],["/comments/index.html","fa07d64f630c839c80925b2d10b9d08e"],["/css/custom.css","3fba99d7b2d4d356532a2d530529a83a"],["/css/font.css","4fc1036fdf04adcd675fd4d20e5b5943"],["/css/index.css","28d51c6a2180f2eb46da1bd755559fa8"],["/css/mouse.css","09bb49ab2d2a8f8116371593abf4a68a"],["/css/progress_bar.css","5121c84d9e4001dad87ff69e7b6309d6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gal/index.html","847e241674b80651c032cc13a1cbee76"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","a360613614245dbbf0a6393d2d08ed4c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7f0210437593f4a41529f33bd544f8e7"],["/js/ali_font.js","53c64d2cbcf5e62c53b69ec3c0a645ca"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/snowflake.js","fb18e25fcd0300749b19e819bfae507d"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","53963b2128920bfb7fbcf7fb49f4f38c"],["/live2d-widget/README.en.html","7eba0be13dcb42cedee5e6a376cc0ef7"],["/live2d-widget/README.html","c4cf5defbac9b23eb34e8bd51b973092"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a718730a862416169d20d00fe89eb4cb"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","0f10afabe0311239c281a7e9a91f1b0b"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","ce1a9ecfce499ab60508ae33bd1a85a7"],["/music/index.html","ea78a43e687b6e3d15efa1acc0953fce"],["/page/2/index.html","41fa1afa58f8e0418d585d26fbe4b613"],["/posts/308ecbbe.html","f38ebdc79e282d7979d688fc8301dfef"],["/posts/3447be97.html","950496b1ec657a3d455d151904ca9e31"],["/posts/37d2fb35.html","90f43bea9f81629bd10e53de0ed01fee"],["/posts/39e7251c.html","1097904f67b53b8753c4feaaf4114848"],["/posts/4921db1e.html","41ab00dda453c9281d4384aef8c33c91"],["/posts/508451ef.html","d6ec7e30968bbdb61d22a386a2548322"],["/posts/90ea59ad.html","1e67fc8a38b358f6ea01cbdad909cc78"],["/posts/9211474f.html","9b8b3595c260ac413fb09e413915444e"],["/posts/9312ffd8.html","29858b058868ec066c9efb8ca3b122b7"],["/posts/ab55f924.html","0cf3faac043c77585c2707989025b4ea"],["/posts/b3623411.html","5c2468db5cbe72a41d4b5e17cdb4b688"],["/posts/b4c31191.html","c5d4659914c08abd460febf44c5ea78f"],["/posts/b576c088.html","524cc5badd29fc9823a3c51e20656345"],["/posts/b5b066b2.html","9875cd390ae083317db0de6b9b3b39ea"],["/posts/d5a6d90f.html","14e80df13cff114cf2936f24766609b4"],["/posts/e6e80026.html","59ffdebb1ccfbef29b782bbc30700499"],["/posts/ed03a884.html","98c5110e95b53841dd131383d71eb754"],["/sw-register.js","cc4aaaedefcec4322c9a15ce7119a39f"],["/tags/GALGAME引擎/index.html","fcfd0e91b8ddf1791b73d2b3a9aeccbd"],["/tags/Linux/index.html","bd831fbc06f3c7bebefa2accc5fbfaa4"],["/tags/MarkDown/index.html","634d30c22765bf21f61df4b15599339b"],["/tags/MySQL/index.html","2a2e2fd98cb21de0d3abb8a9fd20c1dc"],["/tags/Ren-py/index.html","765ecb783db9a2aa8a880d440f45104f"],["/tags/index.html","8e5e58865446a2312ae07a43701fbb6b"]];
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
