import React, { useState } from 'react';
import Drawer from './common/drawer/Drawer';
import Modal from './common/modal/Modal';
import useModal from "../hooks/useModal";
import MeditationsMenu from './meditation/menu/MeditationsMenu';
import MeditationContent from './meditation/content/MeditationContent';
import MeditationTitle from './meditation/title/MeditationTitle';
import meditiations from '../ressources/meditations';
import styles from './Root.module.scss'

const Root = (props) => {
  const [meditation, setMeditation] = useState(meditiations[0])
  const {open: drawerOpen, show: showDrawer, hide: hideDrower} = useModal(false)
  const {open: modalOpen, show: showModal, hide: hideModal} = useModal(false)

  const handleSelectMeditation = (meditation) => () => {
    setMeditation(meditation)
    hideDrower()
  }

    return (
        <div className={styles.root}>
          <Modal open={modalOpen} onClose={hideModal} />
          <Drawer open={drawerOpen} onClose={hideDrower}>
            <MeditationsMenu closeMenu={hideDrower} handleSelectMeditation={handleSelectMeditation}/>
          </Drawer>
          <div className={styles.contentWrapper}>
            <MeditationTitle title={meditation.title} subtitle={meditation.subtitle} openMenu={showDrawer} />
            <MeditationContent id={meditation.id} openModal={showModal}/>
          </div>
        </div>
      )
}

export default Root