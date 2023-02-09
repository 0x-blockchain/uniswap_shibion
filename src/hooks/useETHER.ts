import { ChainId, Currency, ETHER } from '@uniswap/sdk'
import { useActiveWeb3React } from '.'

/**
 * Given a name or address, does a lookup to resolve to an address and name
 * @param nameOrAddress ENS name or address
 */
export default function useETHER(): { loading: boolean; ETHER: Currency } {
  const { chainId } = useActiveWeb3React()
  if (chainId === ChainId.MAINNET) {
    return {
      loading: false,
      ETHER: ETHER
    }
  }
  return {
    loading: true,
    ETHER
  }
}

export function useETHEROfChain(chainId: ChainId | undefined): { loading: boolean; ETHER: Currency } {
  if (chainId === ChainId.MAINNET) {
    return {
      loading: false,
      ETHER: ETHER
    }
  }
  return {
    loading: true,
    ETHER
  }
}

export function getETHEROfChain(chainId: ChainId) {
  if (chainId === ChainId.MAINNET) {
    return ETHER
  }
  return undefined
}
