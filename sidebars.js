// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  tutorialSidebar: [
    // Section title
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Overview',
      defaultStyle: true,
    },
    'overview/intro',
    'overview/gameArchitecture',

    {
      type: 'html',
      value: '<span class="sidebar-divider" />',
    },

    // Section title
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Settings',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Create Wallet',
      link: {
        type: 'generated-index',
        title: 'Create Wallet',
        // description: '블록체인에서 토큰을 보관하고, 전송하려면 무엇이 필요할까요? 바로 지갑입니다. 직접 지갑을 만들어 보면서 자세히 살펴봅시다.'
        description: '일상에서 현금을 보관하기 위해 지갑을 사용하는 것처럼, 블록체인에서도 토큰을 보관하기 위해 지갑이 필요합니다. 직접 지갑을 만들어 보면서 자세히 살펴봅시다.'
      },
      items: ['settings/create-wallet/create-wallet-with-vault', 'settings/create-wallet/create-wallet-with-js', 'settings/create-wallet/get-testnet-xpla'],
    },
    {
      type: 'category',
      label: 'Create Testnet Transaction',
      link: {
        type: 'generated-index',
        title: 'Create Testnet Transaction',
        description: 'XPLA 테스트넷 토큰을 이용하여 블록체인에 데이터를 기록해봅시다.'

      },
      items: ['settings/create-testnet-transaction/send-tx', 'settings/create-testnet-transaction/check-tx-in-explorer', 'settings/create-testnet-transaction/send-query'],
    },
  ],
};

module.exports = sidebars;
