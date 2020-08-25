import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
import AppBody from '../AppBody'

export default function LatestTransactions({
  match: {
    params: { currencyIdA, currencyIdB }
  }
}: RouteComponentProps<{ currencyIdA?: string; currencyIdB?: string }>) {

  const context = useWeb3ReactCore()
  console.log("context", context)
  return (
    <AppBody>
      {context.account}
    </AppBody>
  )
}