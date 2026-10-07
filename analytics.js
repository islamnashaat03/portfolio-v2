// Preserve the site's existing Google Analytics property.
// Local previews and automated checks do not create analytics traffic.
if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-R5CTNLJQ6G');
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-R5CTNLJQ6G';
  document.head.append(script);
}
