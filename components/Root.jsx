import React, { useCallback, useState } from 'react';
import Drawer from './common/drawer/Drawer';
import Header from './common/header/Header';
import Modal from './common/modal/Modal';
import useModal from "../hooks/useModal";
import MeditationsMenu from './meditation/menu/MeditationsMenu';
import MeditationContent from './meditation/content/MeditationContent';
import MediationTitle from './meditation/title/MeditationTitle';
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
        <div>
          <Modal open={modalOpen} onClose={hideModal} />
          <Drawer open={drawerOpen} onClose={hideDrower}>
            <MeditationsMenu closeMenu={hideDrower} handleSelectMeditation={handleSelectMeditation}/>
          </Drawer>
          <Header openMenu={showDrawer}>
            <MediationTitle title={meditation.title} subtitle={meditation.subtitle}/>
          </Header>
          <div className={styles.contentWrapper}>
            <MeditationContent id={meditation.id} openModal={showModal}/>
          </div>
        </div>
      )
}

export default Root