import React, { useCallback, useState } from 'react';
import Header from './header/Header';
import styles from './Root.module.css'
import Drawer from './drawer/Drawer';
import MeditationsMenu from './meditation-menu/MeditationsMenu';
import meditiations from '../ressources/meditations';
import MeditationContent from './meditation-content/MeditationContent';

const Root = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [meditation, setMeditation] = useState(meditiations[0])

  const handleDrawer = (open) => () => {
    setShowDrawer(open)
  }

  const handleDrawerOpenClose = () => {
    setShowDrawer(current => !current)
  }

  const handleSelectMeditation = (meditation) => () => {
    setMeditation(meditation)
    setShowDrawer(false)
  }

    return (
        <div className={styles.root}>
          <Header title={meditation.title} subtitle={meditation.subtitle} handleDrawerOpenClose={handleDrawerOpenClose}/>
          <div className={styles.contentWrapper}>
            <Drawer open={showDrawer} onClose={handleDrawer(false)}>
              <MeditationsMenu handleSelectMeditation={handleSelectMeditation}/>
            </Drawer>
            <MeditationContent id={meditation.id}/>
          </div>
        </div>
      )
}

export default Root