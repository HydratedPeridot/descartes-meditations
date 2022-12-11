import React, { useState } from 'react';
import Drawer from './common/drawer/Drawer';
import useModal from "../hooks/useModal";
import MeditationsMenu from './meditation/menu/MeditationsMenu';
import MeditationContent from './meditation/content/MeditationContent';
import MeditationTitle from './meditation/title/MeditationTitle';
import ObjectionDrawer from './objections/drawer/ObjectionDrawer';
import meditiations from '../ressources/meditations';
import objections from '../ressources/objections'
import styles from './Root.module.scss'

const Root = (props) => {
  const [meditation, setMeditation] = useState(meditiations[0])
  const [objection, setObjection] = useState(objections[0])
  const {open: menuOpen, show: showMenu, hide: hideMenu} = useModal(false)
  const {open: objectionOpen, show: showObjection, hide: hideObjection} = useModal(false)

  const handleSelectMeditation = (meditation) => () => {
    setMeditation(meditation)
    hideObjection()
    hideMenu()
  }

  const openObjection = (objectionId) => () => {
    setObjection(objections[objectionId])
    showObjection()
  }

    return (
        <div className={styles.root}>
          <Drawer open={menuOpen} onClose={hideMenu}>
            <MeditationsMenu closeMenu={hideMenu} handleSelectMeditation={handleSelectMeditation}/>
          </Drawer>
          <div className={styles.contentWrapper}>
            <MeditationTitle title={meditation.title} subtitle={meditation.subtitle} openMenu={showMenu} />
            <MeditationContent meditation={meditation} objectionOpen={objectionOpen} openObjection={openObjection}/>
          </div>
          <ObjectionDrawer objection={objection} open={objectionOpen} closeObjection={hideObjection}/>
        </div>
      )
}

export default Root