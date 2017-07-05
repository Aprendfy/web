import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
  <ul className='sidebar-menu'>
    <MenuItem path='#/' label='Dashboard' icon='dashboard' />

    <MenuTree label='Posts' icon='calendar-check-o' >
      <MenuItem path='#createPost' label='Novo Post' icon='plus' />
    </MenuTree>

    <MenuTree label='Categorias' icon='tags' >
      <MenuItem path='#createCategory' label='Nova Categoria' icon='plus' />
    </MenuTree>

    <MenuTree label='Usuários' icon='user' >
      <MenuItem path='#createPost' label='Novo Post' icon='plus' />
    </MenuTree>
  </ul>
)