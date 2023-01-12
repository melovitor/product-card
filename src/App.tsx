import './App.css'
import { ProductInfo } from './components/ProductInfo'
import Sofa from '../public/sofa.png'

export default function App() {

  return (
    <div className="App">
      <img src={Sofa} />
      <ProductInfo/>
    </div>
  )
}

