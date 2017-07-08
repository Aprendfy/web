import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import InfoBox from '../common/widget/infoBox'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Dashboard' small='semi título' />
        <Content>
          <InfoBox cols='12 4' color='green' icon='bank' value='300' text='Posts Publicados' />
        </Content>
      </div>
    )
  }
}

export default Dashboard