import React, { useCallback, useState } from 'react';
import Header from './header/Header';
import styles from './Root.module.css'
import SideMenu from './side-menu/SideMenu';

const Root = (props) => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  
  const handleMenuOpenClose = useCallback(() => {
    setShowSideMenu(current => !current)
  }, [])

    return (
        <div className={styles.root}>
          <Header title='Méditations' handleMenuOpenClose={handleMenuOpenClose}/>
          <div className={styles.contentWrapper}>
            <SideMenu showSideMenu={showSideMenu} handleMenuOpenClose={handleMenuOpenClose}/>
            <div style={{
              padding: 100
            }}>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor mauris ut velit tristique maximus. Suspendisse bibendum urna elit, id imperdiet dui tempor at. Suspendisse vitae quam nec tortor vulputate luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu elit ac ex convallis tempor. Curabitur pellentesque erat sed odio finibus pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at est lacinia, congue nulla a, ultricies ante. Integer id lacus in risus mattis consequat ac vel orci. Nam posuere leo arcu, condimentum porta eros lacinia quis.
              </p>
              <p>
              Cras sit amet ultricies felis. Donec lacinia leo et efficitur placerat. Nunc ac enim nec leo sollicitudin fermentum quis a lorem. Pellentesque pretium, arcu placerat ultrices dignissim, neque nisi rhoncus nisl, vel gravida turpis mi id arcu. Suspendisse nibh mi, viverra sed blandit vel, cursus eget tortor. Ut varius lectus eu dictum pellentesque. Nunc eget eros accumsan, consectetur turpis et, auctor dui. Donec malesuada scelerisque leo et varius.
              </p>
              <p>
              Nulla vitae turpis eleifend, tempus diam sit amet, rhoncus orci. Phasellus ultrices odio leo, et ultricies orci tempor et. Quisque nec commodo dui. Nulla laoreet, sapien a feugiat iaculis, nibh lacus malesuada sapien, nec lobortis metus turpis in orci. Pellentesque ut enim tortor. Nulla ac urna dolor. Etiam euismod quis velit non scelerisque. Nam in fringilla lorem. Quisque pulvinar pellentesque tortor eget rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse feugiat eleifend ornare. Phasellus sollicitudin nisl sit amet aliquam laoreet.
              </p>
              <p>
              Curabitur ex risus, aliquam vitae nibh sit amet, ultricies facilisis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin felis nibh, pharetra tristique turpis id, varius tempor nunc. Proin arcu sapien, luctus lacinia felis vel, sagittis ultricies purus. Cras tincidunt consectetur consectetur. Sed suscipit sed felis lacinia bibendum. Fusce dignissim lobortis nisl, quis dignissim metus tempor sed. Quisque quis diam sit amet dolor venenatis cursus id non massa. Morbi aliquet finibus erat quis dictum. Nunc lacinia enim a suscipit dignissim. Duis sit amet ex ac purus dictum luctus vel in felis. Nulla ornare nibh dapibus, interdum elit quis, tincidunt orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est purus, hendrerit ac feugiat eu, dapibus eu sapien.
              </p>
              <p>
              Nulla in neque sodales, lobortis leo id, fringilla dui. Proin at fermentum ante. Curabitur at porta leo. Maecenas egestas sollicitudin iaculis. Mauris arcu ante, euismod vitae accumsan non, lacinia et neque. Duis et diam vehicula, malesuada lectus tincidunt, cursus libero. Cras placerat mollis maximus. Duis ullamcorper pretium est sed egestas. Aenean placerat purus in arcu viverra, vitae aliquet nulla hendrerit. Donec fringilla odio et arcu malesuada, a scelerisque odio ullamcorper. Fusce posuere tellus nec eros pellentesque, a dapibus neque rutrum. Suspendisse non magna vitae dolor efficitur mollis ac in est.
              </p>
            </div>
          </div>
        </div>
      )
}

export default Root