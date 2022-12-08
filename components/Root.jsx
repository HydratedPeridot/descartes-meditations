import React, { useState } from 'react';
import Drawer from './common/drawer/Drawer';
import Modal from './common/modal/Modal';
import useModal from "../hooks/useModal";
import MeditationsMenu from './meditation/menu/MeditationsMenu';
import MeditationContent from './meditation/content/MeditationContent';
import MeditationTitle from './meditation/title/MeditationTitle';
import meditiations from '../ressources/meditations';
import styles from './Root.module.scss'
import ObjectionDrawer from './objections/drawer/ObjectionDrawer';

const Root = (props) => {
  const [meditation, setMeditation] = useState(meditiations[0])
  const {open: menuOpen, show: showMenu, hide: hideMenu} = useModal(false)
  const {open: objectionOpen, show: showObjection, hide: hideObjection} = useModal(false)

  const handleSelectMeditation = (meditation) => () => {
    setMeditation(meditation)
    hideObjection()
    hideMenu()
  }

    return (
        <div className={styles.root}>
          {/* <Modal open={objectionOpen} onClose={hideObjection} /> */}
          <Drawer open={menuOpen} onClose={hideMenu}>
            <MeditationsMenu closeMenu={hideMenu} handleSelectMeditation={handleSelectMeditation}/>
          </Drawer>
          <div className={styles.contentWrapper}>
            <MeditationTitle title={meditation.title} subtitle={meditation.subtitle} openMenu={showMenu} />
            <MeditationContent id={meditation.id} openModal={showObjection}/>
            <ObjectionDrawer open={objectionOpen} closeObjection={hideObjection}/>
          </div>
        </div>
      )
}

export default Root