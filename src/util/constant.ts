/**************
 * Env Params *
 **************/
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

type EnvType = string | number | null | undefined

export const POLL_INTERVAL: EnvType =
  process.env.REACT_APP_POLL_INTERVAL || 20000
export const GAS_POLL_INTERVAL: EnvType =
  process.env.REACT_APP_GAS_POLL_INTERVAL || 40000
export const GA4_MEASUREMENT_ID: EnvType =
  process.env.REACT_APP_GA4_MEASUREMENT_ID || null
export const APP_ENV: EnvType = process.env.REACT_APP_ENV || 'dev'
export const isDevBuild = () => APP_ENV === 'dev'
export const SENTRY_DSN: EnvType = process.env.REACT_APP_SENTRY_DSN || null
export const MAX_HEALTH_BLOCK_LAG: EnvType =
  process.env.REACT_APP_MAX_HEALTH_BLOCK_LAG
export const WALLET_VERSION: EnvType = process.env.REACT_APP_WALLET_VERSION
export const WC_PROJECT_ID: EnvType = process.env.REACT_APP_WC_PROJECT_ID
// WalletConnect FLAG
export const DISABLE_WALLETCONNECT: EnvType =
  process.env.REACT_APP_DISABLE_WALLETCONNECT

/*********************
 * Routes Constants **
 *********************/

type RoutesPathType = {
  BRIDGE: string
  HISTORY: string
  EARN: string
  LOCK: string
  STAKE: string
  HELP: string
  BOBASCOPE: string
  VOTE_DAO: string
  DAO: string
  DEV_TOOLS: string
}

export const ROUTES_PATH: RoutesPathType = {
  BRIDGE: '/bridge',
  HISTORY: '/history',
  EARN: '/earn',
  LOCK: '/lock',
  STAKE: '/stake',
  HELP: '/help',
  BOBASCOPE: '/bobascope',
  VOTE_DAO: '/votedao',
  DAO: '/DAO',
  DEV_TOOLS: '/devtools',
}

export const PER_PAGE: number = 8

type Network = 'ethereum' | 'bnb' | 'avax' | 'optimism' | 'arbitrum' //we move this to global network type once we define this
type Page = 'Bridge' | 'History' | 'Earn' | 'Stake' | 'DAO' | 'Monster'
type PagesByNetworkType = Record<Network, Page[]>

export const PAGES_BY_NETWORK: PagesByNetworkType = {
  ethereum: ['Bridge', 'History', 'Earn', 'Stake', 'DAO'],
  bnb: ['Bridge', 'Earn', 'History'],
  avax: ['Bridge', 'Earn', 'History'],
  optimism: ['Bridge', 'History'],
  arbitrum: ['Bridge', 'History'],
}

export enum Layer {
  L1 = 'L1',
  L2 = 'L2',
}
export const LAYER: { [key: string]: Layer } = Layer

type NetworkIconType = 'ethereum' | 'boba'

type NetworkNameType = {
  L1: string
  L2: string
}

type DefaultNetworkType = {
  NAME: NetworkNameType
  ICON: Record<Layer, NetworkIconType>
}

export const DEFAULT_NETWORK: DefaultNetworkType = {
  NAME: {
    L1: 'Ethereum',
    L2: 'Boba ETH',
  },
  ICON: {
    L1: 'ethereum',
    L2: 'boba',
  },
}

export const MM_EXTENTION_URL: string =
  'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'

export const MIN_NATIVE_L1_BALANCE: number = 0.002

export const BANXA_URL: string = 'https://boba.banxa.com/?'
