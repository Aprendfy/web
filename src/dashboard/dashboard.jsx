import React, { Component } from 'react'

import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import InfoBox from '../common/widget/infoBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
  render() {
    const { credit, debt } = this.props.summary
    return (
      <div>
        <ContentHeader title='Dashboard' small='semi título' />
        <Content>
          <Row>
            <InfoBox cols='12 4' color='green' icon='bank' value='300' text='Posts Publicados' />
            <InfoBox cols='12 4' color='red' icon='bank' value={`${credit}`} text='Posts Publicados' />
          </Row>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  summary: state.dashboard.summary
})

export default connect(mapStateToProps)(Dashboard)
