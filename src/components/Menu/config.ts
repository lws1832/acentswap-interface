import { MenuEntry } from 'acentswap-uikit-hwan'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://acentswap.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://acentdefi.github.io/acentswap-front/#/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://acentdefi.github.io/acentswap-front/#/pools',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: 'https://acentdefi.github.io/acentswap-front/#/referrals',
  },
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    items: [
      {
        label: "Overview",
        href: 'https://acentdefi.github.io/acentswap-front/#/info',
      },
      {
        label: "Tokens",
        href: 'https://acentswap.info/tokens',
      },
      {
        label: "Pairs",
        href: 'https://acentswap.info/pairs',
      },
      {
        label: "Accounts",
        href: 'https://acentswap.info/accounts',
      },
    ],
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://acentswap.com/lottery',
  },
  {
    label: 'Launchpad',
    icon: 'IfoIcon',
    href: 'https://acentswap.com/launchpad',
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: 'https://docs.acentswap.com/products/nft-marketplace',
  },

  {
    label: 'Bridge',
    icon: 'BridgeIcon',
    href: 'https://docs.acentswap.com/products/cross-chain-bridge',
  },

  {
    label: 'Acentchain',
    icon: 'ChainIcon',
    href: 'https://docs.acentswap.com/products/acentchain',
  },

  {
    label: 'Stocks',
    icon: 'StockIcon',
    href: 'https://docs.acentswap.com/products/stocks',
  },

  {
    label: 'Supply Chain',
    icon: 'SupplyChainIcon',
    href: 'https://docs.acentswap.com/products/supplychain',
  },
  
  {
    label: 'Games',
    icon: 'NftIcon',
    href: 'https://docs.acentswap.com/products/games',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.acentswap.com/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://snapshot.org/#/acentswap.eth',
      },
      {
        label: 'Github',
        href: 'https://github.com/acentswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.acentswap.com',
      },
      {
        label: 'Blog',
        href: 'https://acentswap.medium.com',
      }
    ],
  },

]

export default config
