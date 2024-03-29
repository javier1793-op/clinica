// ** React Imports
import { useContext } from 'react'

// ** Icons Imports
import { AlertOctagon, List } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'
import CardMedal from '@src/views/ui-elements/cards/advance/CardMedal'

// ** Utils
import { kFormatter } from '@utils'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Demo Components
import InvoiceList from '@src/views/apps/invoice/list'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Images
import jsonImg from '@src/assets/images/icons/json.png'

// ** Avatar Imports
import avatar6 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar7 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import avatar8 from '@src/assets/images/portrait/small/avatar-s-8.jpg'
import avatar9 from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import avatar20 from '@src/assets/images/portrait/small/avatar-s-20.jpg'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import RoleCards from '../../apps/roles-permissions/roles/RoleCards'

const AnalyticsDashboard = () => {
  // ** Context
  const { colors } = useContext(ThemeColors)

  // ** Vars
  const avatarGroupArr = [
    {
      imgWidth: 33,
      imgHeight: 33,
      title: 'Billy Hopkins',
      placement: 'bottom',
      img: avatar9
    },
    {
      imgWidth: 33,
      imgHeight: 33,
      title: 'Amy Carson',
      placement: 'bottom',
      img: avatar6
    },
    {
      imgWidth: 33,
      imgHeight: 33,
      title: 'Brandon Miles',
      placement: 'bottom',
      img: avatar8
    },
    {
      imgWidth: 33,
      imgHeight: 33,
      title: 'Daisy Weber',
      placement: 'bottom',
      img: avatar7
    },
    {
      imgWidth: 33,
      imgHeight: 33,
      title: 'Jenny Looper',
      placement: 'bottom',
      img: avatar20
    }
  ]
  const data = [
    {
      title: '12 Invoices have been paid',
      content: 'Invoices have been paid to the company.',
      meta: '',
      metaClassName: 'me-1',
      customContent: (
        <div className='d-flex align-items-center'>
          <img className='me-1' src={jsonImg} alt='data.json' height='23' />
          <span>data.json</span>
        </div>
      )
    },
    {
      title: 'Client Meeting',
      content: 'Project meeting with john @10:15am.',
      meta: '',
      metaClassName: 'me-1',
      color: 'warning',
      customContent: (
        <div className='d-flex align-items-center'>
          <Avatar img={avatar9} />
          <div className='ms-50'>
            <h6 className='mb-0'>John Doe (Client)</h6>
            <span>CEO of Infibeam</span>
          </div>
        </div>
      )
    },
    {
      title: 'Create a new project for client',
      content: 'Add files to new design folder',
      color: 'info',
      meta: '',
      metaClassName: 'me-1',
      customContent: <AvatarGroup data={avatarGroupArr} />
    },
    {
      title: 'Create a new project for client',
      content: 'Add files to new design folder',
      color: 'danger',
      meta: '',
      metaClassName: 'me-1'
    }
  ]

  return (
    <div id='dashboard-analytics'>
      <Row className='match-height'>
        <Col xl='4' md='6' xs='12'>
          <CardMedal />
        </Col>
        <Col xl='8' md='6' xs='12'>
          <StatsCard cols={{ xl: '3', sm: '6' }} />
        </Col>
      </Row>
     
      <Row className='match-height'>
        <Col xs='12'>
          <h2>Turnos Recientes</h2>
          <InvoiceList />
        </Col>
      </Row>
    </div>
  )
}

export default AnalyticsDashboard
