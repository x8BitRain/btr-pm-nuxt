const metaTags = (
  title = 'btr.pm',
  link: boolean | string = false,
  description = 'btr.pm - Web dev stuff, photos, and rambles.',
  image: boolean | string = false
): Object => {
  const linkUrl = 'https://btr.pm' + link
  const defaultImage = 'https://btr.pm/og-image.jpg'
  return {
    title: link === '/' ? 'btr.pm' : title + ' | btr.pm',
    link: [
      { rel: 'favicon', href: 'favicon.ico' },
      { rel: 'icon', type: 'image/png', href: 'icon.png' },
    ],
    meta: [
      { charset: 'utf-8' },
      {
        name: 'description',
        content: description,
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        property: 'og:title',
        content: title || 'btr.pm' + ' ' + title,
      },
      {
        property: 'og:url',
        content: linkUrl,
      },
      {
        name: 'og:description',
        content: description,
      },
      {
        property: 'og:image',
        content: image ? 'https://btr.pm' + image : defaultImage,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:url',
        content: linkUrl,
      },
      {
        property: 'twitter:title',
        content: title,
      },
      {
        property: 'twitter:description',
        content: description,
      },
      {
        property: 'twitter:image',
        content: image ? 'https://btr.pm' + image : defaultImage,
      },
    ],
  }
}

export default metaTags
