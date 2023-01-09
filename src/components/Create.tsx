import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import ABI from"./abi.json"; 
import * as React from 'react'
 
export function Create() {
  const { config } = usePrepareContractWrite({
    address: '0xf46c48A36E8c13212FAEbDc561C70d3B6848aFB4',
    abi: [
      {
        name: 'create',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [],
        outputs: [],
      },
    ],
    functionName: 'create',
  })
  const { write } = useContractWrite(config)

 
  return (
    <div>
      <button disabled={!write} onClick={() => write?.()}>
        <h4>CREATE CAR</h4>
      </button>
    </div>
  )
}