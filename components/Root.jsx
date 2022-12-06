import React, { useCallback, useState } from 'react';
import Drawer from './common/drawer/Drawer';
import Header from './common/header/Header';
import Modal from './common/modal/Modal';
import MeditationsMenu from './meditation/menu/MeditationsMenu';
import MeditationContent from './meditation/content/MeditationContent';
import MediationTitle from './meditation/title/MeditationTitle';
import meditiations from '../ressources/meditations';
import styles from './Root.module.css'

const Root = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [meditation, setMeditation] = useState(meditiations[0])

  const handleDrawer = (open) => () => {
    setShowDrawer(open)
  }

  const toggleDrawer = () => {
    setShowDrawer(current => !current)
  }

  const toggleModal = () => {
    setShowModal(current => !current)
  }

  const handleSelectMeditation = (meditation) => () => {
    setMeditation(meditation)
    setShowDrawer(false)
  }

    return (
        <div className={styles.root}>
          <Modal open={showModal} hide={toggleModal} />
          <Header title={meditation.title} subtitle={meditation.subtitle} toggleDrawer={toggleDrawer}>
            <MediationTitle title={meditation.title} subtitle={meditation.subtitle}/>
          </Header>
          <div className={styles.contentWrapper}>
            <Drawer open={showDrawer} onClose={handleDrawer(false)}>
              <MeditationsMenu handleSelectMeditation={handleSelectMeditation}/>
            </Drawer>
            <MeditationContent id={meditation.id} openModal={toggleModal}/>
          </div>
        </div>
      )
}

export default Root