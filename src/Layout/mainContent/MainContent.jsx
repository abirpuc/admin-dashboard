import Budget from '../../components/Budget/Budget'
import Card from '../../components/Card/Card'
import Report from '../../components/Report/Report'
import Saving from '../../components/Saving/Saving'
import Subscription from '../../components/Subscription/Subscription'
import Transaction from '../../components/Transaction/Transaction'
import './maincontent.css'

export default function MainContent() {
  return (
    <div className='main-content-holder'>
      <div className="content-grid-one">
        <Card/>
        <Transaction/>
        <Report/>
        <Budget/>
        <Subscription/>
        <Saving/>
      </div>
    </div>
  )
}
