import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

function TopMenu() {
  return (
    <Menu inverted>
      <Menu.Item>Dev @ Deakin</Menu.Item>
      <Input style={{ width: '70%', height: '60%', margin: 'auto'}} iconPosition='left' icon='search' placeholder='Search...' />
      <Menu.Menu position="right">
        <Menu.Item>
          Post
        </Menu.Item>
        <Menu.Item name='login'>
          <a href='/signin'>Login</a>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default TopMenu