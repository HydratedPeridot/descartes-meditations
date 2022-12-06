import React, { useCallback, useState } from 'react';
import Header from './header/Header';
import styles from './Root.module.css'
import Drawer from './drawer/Drawer';
import MeditationsMenu from './meditation-menu/MeditationsMenu';

const Root = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  
  const handleDrawerOpenClose = useCallback(() => {
    setShowDrawer(current => !current)
  }, [])

    return (
        <div className={styles.root}>
          <Header title='Méditations' handleMenuOpenClose={handleDrawerOpenClose}/>
          <div className={styles.contentWrapper}>
            <Drawer showDrawer={showDrawer} handleDrawerOpenClose={handleDrawerOpenClose}>
              <MeditationsMenu />
            </Drawer>
            <div style={{
              display: "flex",
              flexDirection:'column',
              padding: 100,
            }}>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor mauris ut velit tristique maximus. Suspendisse bibendum urna elit, id imperdiet dui tempor at. Suspendisse vitae quam nec tortor vulputate luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu elit ac ex convallis tempor. Curabitur pellentesque erat sed odio finibus pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at est lacinia, congue nulla a, ultricies ante. Integer id lacus in risus mattis consequat ac vel orci. Nam posuere leo arcu, condimentum porta eros lacinia quis.
              </p>
            </div>
          </div>
        </div>
      )
}

export default Root