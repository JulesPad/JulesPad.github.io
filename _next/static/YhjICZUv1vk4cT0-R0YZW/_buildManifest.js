self.__BUILD_MANIFEST = function(s, a, t) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": ["static/chunks/pages/index-530f4807d6ea0045.js"],
        "/404": ["static/chunks/pages/404-49c41f76f7ee4f2f.js"],
        "/_error": ["static/chunks/pages/_error-f2496e8b9fdedb89.js"],
        "/domain/[custom_domain]/robots.txt": ["static/chunks/pages/domain/[custom_domain]/robots.txt-93bea314538262d3.js"],
        "/domain/[custom_domain]/sitemap.xml": ["static/chunks/pages/domain/[custom_domain]/sitemap.xml-9fb74ecf7cfd6a16.js"],
        "/domain/[custom_domain]/[[...path]]": [s, "static/chunks/7311-03d103dce982e114.js", a, "static/chunks/9161-277c9e6f29ae0f1d.js", t, "static/css/289ce20160032536.css", "static/chunks/pages/domain/[custom_domain]/[[...path]]-21db35e56dfa0f5e.js"],
        "/[slug]/robots.txt": ["static/chunks/pages/[slug]/robots.txt-43079a89f475e84e.js"],
        "/[slug]/sitemap.xml": ["static/chunks/pages/[slug]/sitemap.xml-cfb9a66140e03e2f.js"],
        "/[slug]/[[...path]]": [s, a, t, "static/css/68fc3a0328256e37.css", "static/chunks/pages/[slug]/[[...path]]-d363c610b645423e.js"],
        sortedPages: ["/", "/404", "/_app", "/_error", "/domain/[custom_domain]/robots.txt", "/domain/[custom_domain]/sitemap.xml", "/domain/[custom_domain]/[[...path]]", "/[slug]/robots.txt", "/[slug]/sitemap.xml", "/[slug]/[[...path]]"]
    }
}("static/chunks/8bd53eb9-8753fefecf7bdc80.js", "static/chunks/4180-a81b8f1c4168f38b.js", "static/chunks/7675-82a4848849cb8032.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();