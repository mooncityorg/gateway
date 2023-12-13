import { IPoolInfo, IUserInfo } from 'types/earn.types'

export const mockDataEarn: {
  poolInfo: IPoolInfo
  userInfo: IUserInfo
} = {
  poolInfo: {
    L1LP: {
      '0xeccd355862591cbb4bb7e7dd55072070ee3d0fc1': {
        symbol: 'BOBA',
        name: 'Boba Token',
        decimals: 18,
        l1TokenAddress: '0xeccd355862591cbb4bb7e7dd55072070ee3d0fc1',
        l2TokenAddress: '0x4200000000000000000000000000000000000023',
        accUserReward: '369509000000000000',
        accUserRewardPerShare: '3595007',
        userDepositAmount: '100003300000000000000000',
        startTime: '1668555540',
        APR: 0.00034950823567137836,
        tokenBalance: '99954534947000000000000',
      },
      '0x0000000000000000000000000000000000000000': {
        symbol: 'ETH',
        name: 'ETH',
        decimals: 18,
        l1TokenAddress: '0x0000000000000000000000000000000000000000',
        l2TokenAddress: '0x4200000000000000000000000000000000000006',
        accUserReward: '655300000000000',
        accUserRewardPerShare: '0',
        userDepositAmount: '614000000000000000',
        startTime: '1668555372',
        APR: 0.10095232669466178,
        tokenBalance: '846102323651254344',
      },
      '0xcb9b561c91dda1a9bac33f7716a4d5586b7f5649': {
        symbol: 'OMG',
        name: 'OMG Token',
        decimals: 18,
        l1TokenAddress: '0x0000000000000000000000000000000000000000',
        l2TokenAddress: '0x0000000000000000000000000000000000000000',
        accUserReward: '0',
        accUserRewardPerShare: '0',
        userDepositAmount: '0',
        startTime: '0',
        APR: 0,
        tokenBalance: '0',
      },
      '0x07865c6e87b9f70255377e024ace6630c1eaa37f': {
        symbol: 'USDC',
        name: 'USD Coin',
        decimals: 6,
        l1TokenAddress: '0x07865c6e87b9f70255377e024ace6630c1eaa37f',
        l2TokenAddress: '0x429582bde1b0e011c48d883354050938f194743f',
        accUserReward: '0',
        accUserRewardPerShare: '0',
        userDepositAmount: '0',
        startTime: '1668555504',
        APR: 0,
        tokenBalance: '0',
      },
    },
    L2LP: {
      '0x4200000000000000000000000000000000000023': {
        symbol: 'BOBA',
        name: 'Boba Token',
        decimals: 18,
        l1TokenAddress: '0xeccd355862591cbb4bb7e7dd55072070ee3d0fc1',
        l2TokenAddress: '0x4200000000000000000000000000000000000023',
        accUserReward: '24767238000000000',
        accUserRewardPerShare: '648705579',
        userDepositAmount: '565303100000000000000',
        startTime: '1668555549',
        APR: 0.004144222338178,
        tokenBalance: '614833937808000000000',
      },
      '0x4200000000000000000000000000000000000006': {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
        l1TokenAddress: '0x0000000000000000000000000000000000000000',
        l2TokenAddress: '0x4200000000000000000000000000000000000006',
        accUserReward: '763501070953763',
        accUserRewardPerShare: '4434360613',
        userDepositAmount: '289425104000000000',
        startTime: '1668555380',
        APR: 0.24952731183783378,
        tokenBalance: '64179206774468234',
      },
      '0x080bf38b43a1441873116002d36ccb583464cf45': {
        symbol: 'OMG',
        name: 'OMG Token',
        decimals: 18,
        l1TokenAddress: '0x0000000000000000000000000000000000000000',
        l2TokenAddress: '0x0000000000000000000000000000000000000000',
        accUserReward: '0',
        accUserRewardPerShare: '0',
        userDepositAmount: '0',
        startTime: '0',
        APR: 0,
        tokenBalance: '0',
      },
      '0x429582bde1b0e011c48d883354050938f194743f': {
        symbol: 'USDC',
        name: 'USD Coin',
        decimals: 6,
        l1TokenAddress: '0x07865c6e87b9f70255377e024ace6630c1eaa37f',
        l2TokenAddress: '0x429582bde1b0e011c48d883354050938f194743f',
        accUserReward: '0',
        accUserRewardPerShare: '0',
        userDepositAmount: '0',
        startTime: '1668555514',
        APR: 0,
        tokenBalance: '0',
      },
    },
  },
  userInfo: {
    L1LP: {
      '0xeccd355862591cbb4bb7e7dd55072070ee3d0fc1': {
        l1TokenAddress: '0xeccd355862591cbb4bb7e7dd55072070ee3d0fc1',
        amount: 0,
        pendingReward: 0,
        rewardDebt: 0,
      },
      '0x0000000000000000000000000000000000000000': {
        l1TokenAddress: '0x0000000000000000000000000000000000000000',
        amount: 0,
        pendingReward: 0,
        rewardDebt: 0,
      },
      '0xcb9b561c91dda1a9bac33f7716a4d5586b7f5649': {
        l1TokenAddress: '0xcb9b561c91dda1a9bac33f7716a4d5586b7f5649',
        amount: 0,
        pendingReward: 0,
        rewardDebt: 0,
      },
      '0x07865c6e87b9f70255377e024ace6630c1eaa37f': {
        l1TokenAddress: '0x07865c6e87b9f70255377e024ace6630c1eaa37f',
        amount: 0,
        pendingReward: 0,
        rewardDebt: 0,
      },
    },
    L2LP: {
      '0x4200000000000000000000000000000000000023': {
        l2TokenAddress: '0x4200000000000000000000000000000000000023',
        amount: 0,
        pendingReward: 0,
        rewardDebt: 0,
      },
      '0x4200000000000000000000000000000000000006': {
        l2TokenAddress: '0x4200000000000000000000000000000000000006',
        amount: 0,
        pendingReward: 0,
        rewardDebt: 0,
      },
      '0x080bf38b43a1441873116002d36ccb583464cf45': {
        l2TokenAddress: '0x080bf38b43a1441873116002d36ccb583464cf45',
        amount: 0,
        pendingReward: 0,
        rewardDebt: 0,
      },
      '0x429582bde1b0e011c48d883354050938f194743f': {
        l2TokenAddress: '0x429582bde1b0e011c48d883354050938f194743f',
        amount: 0,
        pendingReward: 0,
        rewardDebt: 0,
      },
    },
  },
}
