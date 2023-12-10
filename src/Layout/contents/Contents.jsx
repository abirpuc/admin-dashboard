import TopContent from '../../components/topContent/TopContent';
import MainContent from '../mainContent/MainContent';
import './content.css';
export default function Contents() {
  return (
    <div className='main-content'>
      <TopContent/>
      <MainContent/>
    </div>
  )
}
