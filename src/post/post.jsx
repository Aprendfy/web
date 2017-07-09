import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsheader'
import TabsContent from '../common/tab/tabscontent'
import TabHeader from '../common/tab/tabheader'
import TabContent from '../common/tab/tabcontent'

class Post extends Component {
  render() {
    return(
      <div>
        <ContentHeader title='Post Publicados' small='Todas as categorias' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tabList' />
              <TabHeader label='Incluir' icon='plus' target='tabCreate' />
              <TabHeader label='Alterar' icon='pencil' target='tabUpdade' />
              <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'><h1>Lista</h1></TabContent>
              <TabContent id='tabCreate'><h1>Incluir</h1></TabContent>
              <TabContent id='tabUpdade'><h1>Alterar</h1></TabContent>
              <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

export default Post