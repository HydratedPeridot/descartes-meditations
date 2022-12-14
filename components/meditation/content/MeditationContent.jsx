import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './MeditationContent.module.scss'
import ObjectedText from './objected-text/ObjectedText';

const transitionDuration = 300

const MeditationContent = (props) => {
    const { meditation, objectionOpen, openObjection } = props

    const ref = useRef(null)

    if (meditation.id !== 1) {
        return <div className={styles.tocome}>
            À venir !
        </div>
    }

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.contentBox}>
                <div ref={ref} className={styles.content} style={{
                    transition: `padding-left ${transitionDuration}ms cubic-bezier(0.165, 0.84, 0.44, 1), padding-right ${transitionDuration}ms cubic-bezier(0.165, 0.84, 0.44, 1)`
                }}>
                    <p>
                        Il y a déjà quelque temps que je me suis aperçu que, dès mes premières années, j’avais reçu quantité de fausses opinions pour véritables, 
                        et que ce que j’ai depuis fondé sur des principes si mal assurés, ne pouvait être que fort douteux et incertain ; 
                        de façon qu’il me fallait entreprendre sérieusement une fois en ma vie de me défaire de toutes les opinions que j’avais reçues jusques alors en ma créance, 
                        et commencer tout de nouveau dès les fondements, si je voulais établir quelque chose de ferme et de constant dans les sciences. Mais cette entreprise me semblant être fort grande, 
                        j’ai attendu que j’eusse atteint un âge qui fût si mûr, que je n’en pusse espérer d’autre après lui, auquel je fusse plus propre à l’exécuter ; ce qui m’a fait différer si longtemps, 
                        que désormais je croirais commettre une faute, si j’employais encore à délibérer le temps qu’il me reste pour agir. 
                    </p>
                    <p>
                        Maintenant donc que mon esprit est libre de tous soins, et que je me suis procuré un repos assuré dans une paisible solitude, 
                        je m’appliquerai sérieusement et avec liberté à détruire généralement toutes mes anciennes opinions. Or il ne sera pas nécessaire, 
                        pour arriver à ce dessein, de prouver qu’elles sont toutes fausses, de quoi peutêtre je ne viendrais jamais à bout ; 
                        mais, d’autant que la raison me persuade déjà que je ne dois pas moins soigneusement m’empêcher de donner créance aux choses qui ne sont pas entièrement certaines et indubitables, 
                        qu’à celles qui nous paraissent manifestement être fausses, le moindre sujet de douter que j’y trouverai, suffira pour me les faire toutes rejeter. 
                        Et pour cela il n’est pas besoin que je les examine chacune en particulier, ce qui serait d’un travail infini ; 
                        mais, parce que la ruine des fondements entraîne nécessairement avec soi tout le reste de l’édifice, je m’attaquerai d’abord aux principes, 
                        sur lesquels toutes mes anciennes opinions étaient appuyées. 
                    </p>
                    <p>
                        Tout ce que j’ai reçu jusqu’à présent pour le plus vrai et assuré, je l’ai appris des sens, ou par les sens : 
                        or j’ai quelquefois éprouvé que ces sens étaient trompeurs, et il est de la prudence de ne se fier jamais entièrement à ceux qui nous ont une fois trompés. 
                    </p>
                    <p>
                        Mais, encore que les sens nous trompent quelquefois, touchant les choses peu sensibles et fort éloignées, il s’en rencontre peut-être beaucoup d’autres, 
                        desquelles on ne peut pas raisonnablement douter, quoique nous les connaissions par leur moyen : par exemple, que je sois ici, assis auprès du feu, 
                        vêtu d’une robe de chambre, ayant ce papier entre les mains, et autres choses de cette nature. Et comment est-ce que je pourrais nier que ces mains et ce corps-ci soient à moi ? 
                        si ce n’est peut-être que je me compare à ces insensés, de qui le cerveau est tellement troublé et offusqué par les noires vapeurs de la bile, qu’ils assurent constamment qu’ils sont des rois, 
                        lorsqu’ils sont très pauvres ; qu’ils sont vêtus d’or et de pourpre, lorsqu’ils sont tout nus ; ou s’imaginent être des cruches, ou avoir un corps de verre. 
                        Mais quoi ? Ce sont des fous, et je ne  serais pas moins extravagant, si je me réglais sur leurs exemples. 
                    </p>
                    <p>            
                        Toutefois j’ai ici à considérer que je suis homme, et par conséquent que j’ai coutume de dormir et de me représenter en mes songes les mêmes choses, 
                        ou quelquefois de moins vraisemblables, que ces insensés, lorsqu’ils veillent. Combien de fois m’est-il arrivé de songer, la nuit, que j’étais en ce lieu, 
                        que j’étais habillé, que j’étais auprès du feu, quoique je fusse tout nu dedans mon lit ? Il me semble bien à présent que ce n’est point avec des yeux endormis que je regarde ce papier ; 
                        que cette tête que le remue n’est point assoupie ; que c’est avec dessein et de propos délibéré que j’étends cette main, et que je la sens : 
                        ce qui arrive dans le sommeil ne semble point si clair ni si distinct que tout ceci. Mais, en y pensant soigneusement, je me ressouviens d’avoir été souvent trompé, 
                        lorsque je dormais, par de semblables illusions. <ObjectedText openObjection={openObjection(0)}>Et m’arrêtant sur cette pensée, je vois si manifestement qu’il n’y a point d’indices concluants, 
                        ni de marques assez certaines par où l’on puisse distinguer nettement la veille d’avec le sommeil, que j’en suis tout étonné ; et mon étonnement est tel, 
                        qu’il est presque capable de me persuader que je dors.</ObjectedText> 
                    </p>
                    <p>
                        Supposons donc maintenant que nous sommes endormis, et que toutes ces particularités-ci, à savoir, que nous ouvrons les yeux, que nous remuons la tête, 
                        que nous étendons les mains, et choses semblables, ne sont que de fausses illusions ; et pensons que peut-être nos mains, ni tout notre corps, ne sont pas tels que nous les voyons. 
                        Toutefois il faut au moins avouer que les choses qui nous sont représentées dans le sommeil, sont comme des tableaux et des peintures, 
                        qui ne peuvent être formées qu’à  la ressemblance de quelque chose de réel et de véritable ; et qu’ainsi, pour le moins, ces choses générales, 
                        à savoir, des yeux, une tête, des mains, et tout le reste du corps, ne sont pas choses imaginaires, mais vraies et existantes. Car de vrai les peintres, 
                        lors même qu’ils s’étudient avec le plus d’artifice à représenter des sirènes et des satyres par des formes bizarres et extraordinaires, 
                        ne leur peuvent pas toutefois attribuer des formes et des natures entièrement nouvelles, mais font seulement un certain mélange et composition des membres de divers animaux ; 
                        ou bien, si peut-être leur imagination est assez extravagante pour inventer quelque chose de si nouveau, que jamais nous n’ayons rien vu de semblable, 
                        et qu’ainsi leur ouvrage nous représente une chose purement feinte et absolument fausse, certes à tout le moins les couleurs dont ils le composent doivent-elles être véritables.
                    </p>
                    <p>
                        Et par la même raison, encore que ces choses générales, à savoir, des yeux, une tête, des mains, et autres semblables, pussent être imaginaires, 
                        il faut toutefois avouer qu’il y a des choses encore plus simples et plus universelles, qui sont vraies et existantes ; 
                        du mélange desquelles, ni plus ni moins que de celui de quelques véritables couleurs, toutes ces images des choses qui résident en notre pensée, soit vraies et réelles, 
                        soit feintes et fantastiques, sont formées. De ce genre de choses est la nature corporelle en général, et son étendue ; 
                        ensemble la figure des choses étendues, leur quantité ou grandeur, et leur nombre ; comme aussi le lieu où elles sont, le temps qui mesure leur durée, et autres semblables. 
                    </p>
                    <p>
                        C’est pourquoi peut-être que de là nous ne conclurons pas mal, si nous disons que la physique, l’astronomie, 
                        la médecine, et toutes les autres sciences qui dépendent de la considération des choses composées sont fort douteuses et incertaines ; 
                        mais que l’arithmétique, la géométrie, et les autres sciences de cette nature, qui ne traitent que de choses fort simples et fort générales, 
                        sans se mettre beaucoup en peine si elles sont dans la nature, ou si elles n’y sont pas, contiennent quelque chose de certain et d’indubitable. 
                        Car, soit que je veille ou que je dorme, deux et trois joints ensemble formeront toujours le nombre de cinq, et le carré n’aura jamais plus de quatre côtés ; 
                        et il ne semble pas possible que des vérités si apparentes puissent être soupçonnées d’aucune fausseté ou d’incertitude. 
                    </p>
                    <p>
                        Toutefois il y a longtemps que j’ai dans mon esprit une certaine opinion, qu’il y a un Dieu qui peut tout, et par qui j’ai été créé et produit tel que je suis. 
                        Or qui me peut avoir assuré que ce Dieu n’ait point fait qu’il n’y ait aucune terre, aucun ciel, aucun corps étendu, aucune figure, aucune grandeur, aucun lieu,
                        et que néanmoins j’aie les sentiments de toutes ces choses, et que tout cela ne me semble point exister autrement que je le vois ? 
                        Et même, comme je juge quelquefois que les autres se méprennent, même dans les choses qu’ils pensent savoir avec le plus de certitude, 
                        il se peut faire qu’il ait voulu que je me trompe toutes les fois que je fais l’addition de deux et de trois, ou que je nombre les côtés d’un carré, 
                        ou que je juge de quelque chose encore plus facile, si l’on se peut imaginer rien de plus facile que cela. Mais peut-être que Dieu n’a pas voulu que je fusse déçu de la sorte, 
                        car il est dit souverainement bon. Toutefois, si cela répugnait à sa bonté, de m’avoir fait tel que je me trompasse toujours, cela semblerait aussi lui être aucunement contraire, 
                        de permettre que je me trompe quelquefois, et néanmoins je ne puis douter qu’il ne le permette.
                    </p>
                    <p>
                        Il y aura peut-être ici des personnes qui aimeront mieux nier l’existence d’un Dieu si puissant, que de croire que toutes les autres choses sont incertaines. 
                        Mais ne leur résistons pas pour le présent, et supposons, en leur faveur, que tout ce qui est dit ici d’un Dieu soit une fable. 
                        Toutefois, de quelque façon qu’ils supposent que je sois parvenu à l’état et à l’être que je possède, soit qu’ils l’attribuent à quelque destin ou fatalité, 
                        soit qu’ils le réfèrent au hasard, soit qu’ils veuillent que ce soit par une continuelle suite et liaison des choses, 
                        il est certain que, puisque faillir et se tromper est une espèce d’imperfection, d’autant moins puissant sera l’auteur qu’ils attribueront à mon origine, 
                        d’autant plus sera-t-il probable que je suis tellement imparfait que je me trompe toujours. 
                        Auxquelles raisons je n’ai certes rien à répondre, mais je suis contraint d’avouer que, de toutes les opinions que j’avais autrefois reçues en ma créance pour véritables, 
                        il n’y en a pas une de laquelle je ne puisse maintenant douter, non par aucune inconsidération ou légèreté, 
                        mais pour des raisons très fortes et mûrement considérées : <ObjectedText openObjection={openObjection(1)}>de sorte qu’il est nécessaire que j’arrête et suspende désormais mon jugement sur ces pensées, 
                        et que je ne leur donne pas plus de créance, que je ferais à des choses qui me paraîtraient évidemment fausses si je désire trouver quelque chose de constant et d’assuré dans les sciences.</ObjectedText>
                    </p>
                    <p>
                        Mais il ne suffit pas d’avoir fait ces remarques, il faut encore que je prenne soin de m’en souvenir ; 
                        car ces anciennes et ordinaires opinions me reviennent encore souvent en la pensée, le long et familier usage qu’elles ont eu avec moi leur donnant droit d’occuper mon esprit contre mon gré, 
                        et de se rendre presque maîtresses de ma créance. Et je ne me désaccoutumerai jamais d’y acquiescer, et de prendre confiance en elles, tant que je les considérerai telles qu’elles sont en effet, 
                        c’est à savoir en quelque façon douteuses, comme je viens de montrer, et toutefois fort probables, en sorte que l’on a beaucoup plus de raison de les croire que de les nier. 
                        C’est pourquoi je pense que j’en userai plus prudemment, si, prenant un parti contraire, j’emploie tous mes soins à me tromper moi-même, 
                        feignant que toutes ces pensées sont fausses et imaginaires ; <ObjectedText openObjection={openObjection(2)}>jusques à ce qu’ayant tellement balancé mes préjugés, 
                        qu’ils ne puissent faire pencher mon avis plus d’un côté que d’un autre, mon jugement ne soit plus désormais maîtrisé par de mauvais usages et 
                        détourné du droit chemin qui le peut conduire a la connaissance de la vérité.</ObjectedText> Car je suis assuré que cependant il ne peut y avoir de péril ni d’erreur en cette voie, 
                        et que je ne saurais aujourd’hui trop accorder à ma défiance, puisqu’il n’est pas maintenant question d’agir, mais seulement de méditer et de connaître. 
                    </p>
                    <p>
                        Je supposerai donc qu’il y a, non point un vrai Dieu, qui est la souveraine source de vérité, mais un certain mauvais génie, 
                        non moins rusé et trompeur que puissant qui a employé toute son industrie à me tromper. 
                        Je penserai que le ciel, l’air, la terre, les couleurs, les figures, les sons et toutes les choses extérieures que nous voyons, ne sont que des illusions et tromperies, 
                        dont il se sert pour surprendre ma crédulité. Je me considérerai moi-même comme n’ayant point de mains, point d’yeux, point de chair, point de sang, comme n’ayant aucuns sens, 
                        mais croyant faussement avoir toutes ces choses. Je demeurerai obstinément attaché à cette pensée ; et si, par ce moyen, il n’est pas en mon pouvoir de parvenir à la connaissance d’aucune vérité, 
                        à tout le moins il est en ma puissance de suspendre mon jugement. <ObjectedText openObjection={openObjection(3)}>C’est pourquoi je prendrai garde soigneusement de ne point recevoir en ma croyance aucune fausseté, 
                        et préparerai si bien mon esprit à toutes les ruses de ce grand trompeur, que, pour puissant et rusé qu’il soit, il ne pourra jamais rien imposer.</ObjectedText>
                    </p>
                    <p>
                        Mais ce dessein est pénible et laborieux, et une certaine paresse m’entraîne insensiblement dans le train de ma vie ordinaire. 
                        Et tout de même qu’un esclave qui jouissait dans le sommeil d’une liberté imaginaire, lorsqu’il commence à soupçonner que sa liberté n’est qu’un songe, 
                        craint d’être réveillé, et conspire avec ces illusions agréables pour en être plus longuement abusé, ainsi je retombe insensiblement de moi-même dans mes anciennes opinions, 
                        et j’appréhende de me réveiller de cet assoupissement, de peur que les veilles laborieuses qui succéderaient à la tranquillité de ce repos, 
                        au lieu de m’apporter quelque jour et quelque lumière dans la connaissance de la vérité, ne fussent pas suffisantes pour éclaircir les ténèbres des difficultés qui viennent d’être agitées.
                    </p>
                </div>
            </div>
        </div>
    )
}

MeditationContent.propTypes = {
    meditation: PropTypes.object.isRequired,
    objectionOpen: PropTypes.bool.isRequired,
    openObjection: PropTypes.func.isRequired,
}

export default MeditationContent