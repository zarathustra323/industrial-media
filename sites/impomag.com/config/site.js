const navigation = require('./navigation');
const socialMediaLinks = require('./social-links');
const gam = require('./gam');

module.exports = {
  navigation,
  gam,
  socialMediaLinks,
  company: 'Industrial Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/indm/all/impo_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/impo_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/indm/all/impo_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/impo_logo.png?h=120 2x',
      ],
    },
  },
  identityX: {
    appId: '5e28a3dd58e67b229e55ae43',
    enabled: true,
    comments: { enabled: false },
    options: {
      appContextId: '5e8366d0da9f2201fa6852b7',
    },
  },
  gtm: {
    containerId: 'GTM-TRGKQTS',
  },
  gcse: {
    id: '003355913687346718228:n6r3goqxvkt',
  },
  wufoo: {
    userName: 'ien',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    to: 'david@ien.com',
    branding: {
      logo: 'https://base.imgix.net/files/base/indm/all/impo_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
