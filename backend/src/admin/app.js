import favicon from './extensions/favicon.png';
import loginLogo from './extensions/loginLogo.png';

export default {
  config: {
    locales: [
      // 'ar',
       'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    head: {
      favicon: favicon,
    },
    auth: {
      logo: loginLogo
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
