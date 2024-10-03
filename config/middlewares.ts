export default [
  'strapi::logger',
  'strapi::errors',
  {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'script-src': ["'self'",'https://cdn.ckeditor.com'],
            'frame-src': ["'self'",'https://www.youtube.com']
          },
        },
      },
    },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
