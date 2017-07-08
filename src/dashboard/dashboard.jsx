import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import InfoBox from '../common/widget/infoBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Dashboard' small='semi título' />
        <Content>
          <Row>
            <InfoBox cols='12 4' color='green' icon='bank' value='300' text='Posts Publicados' />
          </Row>
        </Content>
      </div>
    )
  }
}

export default Dashboard