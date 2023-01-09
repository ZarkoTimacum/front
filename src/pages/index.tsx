import { useAccount } from 'wagmi'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { Account, Connect} from '../components'
import { Create } from '../components'

function Page() {
  const { isConnected } = useAccount()

  return (
    <>
    <h1 >CREATE YOUR OWN CAR</h1>
 <Connect />
    {!isConnected && <h4>Connect your wallet first.</h4>}
  
  
   {isConnected && (
    <>
  <h4>Your public wallet address is:</h4><p id="acc"><Account /></p>
   </>
   )}
   
  <br/>

  <form > 
    Name:<br/>
  <input type="text" name="car_name"></input>
  <br/>Color:<br/>
  <input type="text" name="car_color"></input>
  <br/>Year:<br/>
  <input type="number" min="0" name="car_year" ></input>
  <br/>Registered:<br/>
  <input id="box" type="checkbox"></input>
  </form>  
  <>
<h5><Create /></h5>
    </>
    </>
  )
}

export default Page
