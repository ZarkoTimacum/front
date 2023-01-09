import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function Connect() {
  const { connector, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const { disconnect } = useDisconnect()

  return (
    <div>
      <div id="logged">
        <div >
        {isConnected && (
          <button onClick={() => disconnect()}>
           <h4>LOGOUT</h4>
          </button>
        )}
        </div>
        {connectors
          .filter((x) => x.ready && x.id !== connector?.id)
          .map((x) => (
            <button key={x.id} onClick={() => connect({ connector: x })}>
              <h4>LOGIN</h4>
              {isLoading && x.id === pendingConnector?.id && '(loading...)'}
            </button>
          ))}
      </div>

      {error && <div>{error.message}</div>}
    </div>
  )
}
