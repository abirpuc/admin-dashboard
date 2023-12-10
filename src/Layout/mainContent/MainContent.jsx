import Budget from '../../components/Budget/Budget'
import Card from '../../components/Card/Card'
import Financial from '../../components/Financial/Financial'
import Loans from '../../components/Loans/Loans'
import Report from '../../components/Report/Report'
import Saving from '../../components/Saving/Saving'
import Subscription from '../../components/Subscription/Subscription'
import Transaction from '../../components/Transaction/Transaction'
import './maincontent.css'

export default function MainContent() {
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
            <Card />
            <Transaction />
            <Report />
        </div>
        <div className="content-grid-two">
            <Budget />
            <div className="grid-two-item">
              <div className="subgrid-two">
                <Subscription />
                <Saving />
              </div>
            </div>

            <div className="grid-two-item">
              <div className="subgrid-two">
                <Loans />
                <Financial />
              </div>
            </div>
        </div>
    </div>
  )
}
