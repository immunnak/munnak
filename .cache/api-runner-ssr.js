var plugins = [{
      plugin: require('/Users/munna/Desktop/munnak/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/munna/Desktop/munnak/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"pure":false},
    },{
      plugin: require('/Users/munna/Desktop/munnak/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap.xml","createLinkInHead":true},
    },{
      plugin: require('/Users/munna/Desktop/munnak/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Fatima","short_name":"Fatima","start_url":"/","background_color":"#333333","theme_color":"#ffd2d1","display":"standalone","icons":[{"src":"/icons/icon-72x72.png","sizes":"72x72","type":"image/png"},{"src":"/icons/icon-96x96.png","sizes":"96x96","type":"image/png"},{"src":"/icons/icon-128x128.png","sizes":"128x128","type":"image/png"},{"src":"/icons/icon-144x144.png","sizes":"144x144","type":"image/png"},{"src":"/icons/icon-152x152.png","sizes":"152x152","type":"image/png"},{"src":"/icons/icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/icons/icon-384x384.png","sizes":"384x384","type":"image/png"},{"src":"/icons/icon-512x512.png","sizes":"512x512","type":"image/png"}],"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('/Users/munna/Desktop/munnak/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
