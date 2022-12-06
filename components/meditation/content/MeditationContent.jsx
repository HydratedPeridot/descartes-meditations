import React from 'react';
import PropTypes from 'prop-types';
import styles from './MeditationContent.module.scss'
import ModalText from './modaltext/ModalText';

const MeditationContent = (props) => {
    const { id, openModal } = props

    return (
        <div className={styles.content}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et aliquet ipsum. Morbi vehicula, nulla in convallis fermentum, ligula nibh consectetur felis, at efficitur tellus urna vitae tellus. Phasellus sagittis ullamcorper risus elementum congue. Phasellus a porta magna. Nunc metus augue, condimentum ac mollis in, luctus sit amet metus. Fusce aliquam nunc non accumsan vestibulum. Curabitur eleifend ex nisi, vitae volutpat lacus ornare et. Fusce nec auctor lectus, eget faucibus sapien. Cras condimentum vulputate scelerisque. Ut laoreet lectus et enim pellentesque faucibus. Nullam non ligula vel odio malesuada eleifend. Integer at efficitur libero. Maecenas felis leo, varius id justo et, ornare condimentum odio.
            </p>
            <p>
            Curabitur justo enim, lobortis eu finibus posuere, pulvinar ut mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In et nulla sit amet mauris tincidunt fermentum in ac est. Vestibulum sed nisl at ante rhoncus fermentum. Nulla efficitur tellus velit, vel blandit augue finibus quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vitae lectus mattis, mollis arcu nec, egestas lectus. Vivamus sagittis vulputate gravida. Integer dapibus nisi quis metus finibus blandit. In consequat mi sed venenatis dignissim. Fusce sit amet posuere lectus. Nunc eu arcu et mauris laoreet interdum. Fusce non efficitur nisl. Etiam condimentum, enim in vehicula ultrices, justo leo congue enim, a finibus sapien lectus sit amet tellus.
            </p>
            <p>
            Mauris nisi turpis, accumsan et justo vel, interdum laoreet nunc. <ModalText openModal={openModal}>Duis non justo pellentesque, finibus nisl vel, ornare erat.</ModalText> Curabitur ornare auctor sapien, ut suscipit mi accumsan eu. Donec risus neque, mattis pellentesque condimentum nec, laoreet et ex. Proin vulputate malesuada pharetra. Phasellus odio tellus, ullamcorper vel placerat eget, dignissim non nunc. Quisque at elementum metus. Donec tincidunt tortor elit, non porta diam ullamcorper sit amet. Sed vel mi arcu. Etiam pulvinar diam quis magna convallis dignissim. Maecenas aliquam, tortor fringilla convallis feugiat, tellus enim dictum lorem, in cursus sem velit sit amet risus. Nullam euismod varius arcu sed volutpat. Nam iaculis nibh nisi, nec faucibus odio mattis eget.
            </p>
            <p>
            Sed vel dictum nunc. Nulla tincidunt elementum facilisis. Nulla facilisi. Nulla mattis accumsan augue nec volutpat. Praesent id eros ac leo ultricies tristique. Duis tincidunt tortor iaculis venenatis tincidunt. Praesent magna enim, condimentum ut sem sagittis, aliquet congue purus. Quisque fermentum elit nunc, quis cursus neque aliquet a. Aliquam faucibus sit amet erat at luctus. Fusce posuere mattis placerat. In nulla nisl, tincidunt nec diam sed, sagittis pretium justo. Pellentesque et massa in felis pulvinar viverra. Sed blandit tortor sit amet ligula laoreet, sed faucibus ante condimentum.
            </p>
            <p>
            Proin diam lectus, semper at mi quis, dignissim congue metus. Maecenas laoreet scelerisque justo tincidunt rutrum. Mauris porta lacus eget risus ornare, ut congue turpis lobortis. Vestibulum vehicula egestas mi quis lobortis. Suspendisse augue justo, vehicula dapibus lobortis nec, dignissim quis nisl. Duis semper neque id turpis suscipit, quis hendrerit elit vestibulum. Donec et laoreet metus, eu pellentesque massa. Aenean purus leo, placerat at tempus nec, luctus pellentesque urna. Mauris facilisis maximus bibendum. Etiam efficitur a risus dignissim ornare. Fusce dolor ante, imperdiet eget iaculis sit amet, euismod fermentum nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
            In lobortis tortor vel odio luctus vulputate. Proin a leo dolor. Sed eget mi non risus egestas sodales quis vitae augue. Donec pharetra sit amet purus vel cursus. Vestibulum dolor sapien, pellentesque a risus in, placerat pellentesque nisi. In pretium lectus quam, a placerat ante suscipit et. Vivamus lobortis eros nunc. Nunc quis suscipit ex, sit amet imperdiet urna. Nullam sit amet nisl sit amet erat convallis molestie malesuada ac tellus. Etiam varius felis in aliquam cursus. Duis accumsan egestas lectus. Aliquam nec ligula sit amet lacus tincidunt hendrerit id ac nisl. Duis tincidunt ultrices iaculis. Mauris vitae aliquam ex.
            </p>
            <p>
            Maecenas eget fringilla libero. Duis viverra ante eu nulla commodo rutrum. Phasellus sed augue non nibh maximus pharetra. Quisque maximus libero sed erat egestas hendrerit. Fusce cursus velit massa, vel pretium lectus ornare quis. Vivamus pellentesque, augue at tempus sollicitudin, est dui eleifend sapien, dignissim semper justo sapien vel eros. Cras in suscipit odio. Mauris commodo sagittis dui eget venenatis. Quisque est quam, sollicitudin ac ipsum id, porta mattis neque. Mauris aliquet tincidunt felis ultrices tristique. Donec sed interdum dolor, id accumsan ante. Suspendisse in pellentesque lacus. Integer ante velit, viverra in nisi nec, viverra fringilla justo. Mauris vitae ultricies sem.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et aliquet ipsum. Morbi vehicula, nulla in convallis fermentum, ligula nibh consectetur felis, at efficitur tellus urna vitae tellus. Phasellus sagittis ullamcorper risus elementum congue. Phasellus a porta magna. Nunc metus augue, condimentum ac mollis in, luctus sit amet metus. Fusce aliquam nunc non accumsan vestibulum. Curabitur eleifend ex nisi, vitae volutpat lacus ornare et. Fusce nec auctor lectus, eget faucibus sapien. Cras condimentum vulputate scelerisque. Ut laoreet lectus et enim pellentesque faucibus. Nullam non ligula vel odio malesuada eleifend. Integer at efficitur libero. Maecenas felis leo, varius id justo et, ornare condimentum odio.
            </p>
            <p>
            Curabitur justo enim, lobortis eu finibus posuere, pulvinar ut mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In et nulla sit amet mauris tincidunt fermentum in ac est. Vestibulum sed nisl at ante rhoncus fermentum. Nulla efficitur tellus velit, vel blandit augue finibus quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vitae lectus mattis, mollis arcu nec, egestas lectus. Vivamus sagittis vulputate gravida. Integer dapibus nisi quis metus finibus blandit. In consequat mi sed venenatis dignissim. Fusce sit amet posuere lectus. Nunc eu arcu et mauris laoreet interdum. Fusce non efficitur nisl. Etiam condimentum, enim in vehicula ultrices, justo leo congue enim, a finibus sapien lectus sit amet tellus.
            </p>
            <p>
            Mauris nisi turpis, accumsan et justo vel, interdum laoreet nunc. Duis non justo pellentesque, finibus nisl vel, ornare erat. Curabitur ornare auctor sapien, ut suscipit mi accumsan eu. Donec risus neque, mattis pellentesque condimentum nec, laoreet et ex. Proin vulputate malesuada pharetra. Phasellus odio tellus, ullamcorper vel placerat eget, dignissim non nunc. Quisque at elementum metus. Donec tincidunt tortor elit, non porta diam ullamcorper sit amet. Sed vel mi arcu. Etiam pulvinar diam quis magna convallis dignissim. Maecenas aliquam, tortor fringilla convallis feugiat, tellus enim dictum lorem, in cursus sem velit sit amet risus. Nullam euismod varius arcu sed volutpat. Nam iaculis nibh nisi, nec faucibus odio mattis eget.
            </p>
            <p>
            Sed vel dictum nunc. Nulla tincidunt elementum facilisis. Nulla facilisi. Nulla mattis accumsan augue nec volutpat. Praesent id eros ac leo ultricies tristique. Duis tincidunt tortor iaculis venenatis tincidunt. Praesent magna enim, condimentum ut sem sagittis, aliquet congue purus. Quisque fermentum elit nunc, quis cursus neque aliquet a. Aliquam faucibus sit amet erat at luctus. Fusce posuere mattis placerat. In nulla nisl, tincidunt nec diam sed, sagittis pretium justo. Pellentesque et massa in felis pulvinar viverra. Sed blandit tortor sit amet ligula laoreet, sed faucibus ante condimentum.
            </p>
            <p>
            Proin diam lectus, semper at mi quis, dignissim congue metus. Maecenas laoreet scelerisque justo tincidunt rutrum. Mauris porta lacus eget risus ornare, ut congue turpis lobortis. Vestibulum vehicula egestas mi quis lobortis. Suspendisse augue justo, vehicula dapibus lobortis nec, dignissim quis nisl. Duis semper neque id turpis suscipit, quis hendrerit elit vestibulum. Donec et laoreet metus, eu pellentesque massa. Aenean purus leo, placerat at tempus nec, luctus pellentesque urna. Mauris facilisis maximus bibendum. Etiam efficitur a risus dignissim ornare. Fusce dolor ante, imperdiet eget iaculis sit amet, euismod fermentum nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
            In lobortis tortor vel odio luctus vulputate. Proin a leo dolor. Sed eget mi non risus egestas sodales quis vitae augue. Donec pharetra sit amet purus vel cursus. Vestibulum dolor sapien, pellentesque a risus in, placerat pellentesque nisi. In pretium lectus quam, a placerat ante suscipit et. Vivamus lobortis eros nunc. Nunc quis suscipit ex, sit amet imperdiet urna. Nullam sit amet nisl sit amet erat convallis molestie malesuada ac tellus. Etiam varius felis in aliquam cursus. Duis accumsan egestas lectus. Aliquam nec ligula sit amet lacus tincidunt hendrerit id ac nisl. Duis tincidunt ultrices iaculis. Mauris vitae aliquam ex.
            </p>
            <p>
            Maecenas eget fringilla libero. Duis viverra ante eu nulla commodo rutrum. Phasellus sed augue non nibh maximus pharetra. Quisque maximus libero sed erat egestas hendrerit. Fusce cursus velit massa, vel pretium lectus ornare quis. Vivamus pellentesque, augue at tempus sollicitudin, est dui eleifend sapien, dignissim semper justo sapien vel eros. Cras in suscipit odio. Mauris commodo sagittis dui eget venenatis. Quisque est quam, sollicitudin ac ipsum id, porta mattis neque. Mauris aliquet tincidunt felis ultrices tristique. Donec sed interdum dolor, id accumsan ante. Suspendisse in pellentesque lacus. Integer ante velit, viverra in nisi nec, viverra fringilla justo. Mauris vitae ultricies sem.
            </p>
          </div>
    )
}

MeditationContent.propTypes = {
    id: PropTypes.number.isRequired,
    openModal: PropTypes.func.isRequired,
}

export default MeditationContent