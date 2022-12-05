import React, { useCallback, useState } from 'react';
import Header from './header/Header';
import styles from './Root.module.css'
import SideMenu from './side-menu/SideMenu';

const Root = (props) => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  
  const openCloseSideMenu = useCallback(() => {
    setShowSideMenu(current => !current)
  }, [])

    return (
        <div className={styles.root}>
          <Header title='Méditations' openCloseSideMenu={openCloseSideMenu}/>
          <div style={{
            flex: 1,
            position: 'relative'
          }}>
          <SideMenu showSideMenu={showSideMenu}/>
          </div>
        </div>
      )
}

export default Root