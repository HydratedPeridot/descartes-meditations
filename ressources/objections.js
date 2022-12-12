const downplayed =  {color: 'rgba(0, 0, 0, 0.4)'}

const objections = [
    {
        id: 0,
        title: <>Troisième Objection faites par un célèbre philosophe anglais avec les réponses de l'auteur</>,
        subtitle: null,
        objection: 
        {
            title: <>Objection I<sup>re</sup>: SUR LA MÉDITATION PREMIÈRE. DES CHOSES QUI PEUVENT ÊTRE RÉVOQUÉES EN DOUTE</>,
            content: <p>Il paroît assez, par ce qui a été dit dans cette Méditation, qu’il n’y a point de marque certaine et évidente par laquelle nous puissions reconnoître 
            et distinguer nos songes d’avec la veille et d’avec une vraie perception des sens ; et partant que ces images ou ces fantômes que nous sentons étant éveillés, 
            ne plus ne moins que ceux que nous apercevons étant endormis, ne sont point des accidents attachés à des objets extérieurs, et ne sont point des preuves suffisantes pour montrer 
            que ces objets extérieurs existent véritablement. C’est pourquoi si, sans nous aider d’aucun autre raisonnement, nous suivons seulement le témoignage de nos sens, 
            nous aurons juste sujet de douter si quelque chose existe ou non. Nous reconnoissons donc la vérité de cette méditation. Mais d’autant que Platon a parlé de cette incertitude des choses sensibles, 
            et plusieurs autres anciens philosophes avant et après lui, et qu’il est aisé de remarquer la difficulté qu’il y a de discerner la veille du sommeil, 
            j’eusse voulu que cet excellent auteur de nouvelles spéculations se fût abstenu de publier des choses si vieilles.</p>,
            footnotes: []
        },
        response: 
        {
            title: <>RÉPONSE</>,
            content: <p>Les raisons de douter qui sont ici reçues pour vraies par ce philosophe n’ont été proposées par moi que comme vraisemblables: 
            et je m’en suis servi, non pour les débiter comme nouvelles, mais en partie pour préparer les esprits des lecteurs à considérer les choses intellectuelles, 
            et les distinguer des corporelles, à quoi elles m’ont toujours semblé très nécessaires; en partie pour y répondre dans les méditations suivantes, 
            et en partie aussi pour faire voir combien les vérités que je propose ensuite sont fermes et assurées, puisqu’elles ne peuvent être ébranlées par des doutes si généraux et si extraordinaires. 
            Et ce n’a point été pour acquérir de la gloire que je les ai rapportées; mais je pense n’avoir pas été moins obligé de les expliquer, 
            qu’un médecin de décrire la maladie dont il a entrepris d’enseigner la cure.</p>,
            footnotes: []
        }
    },
    {
        id: 1,
        title: <>Lettre de Monsieur Descartes à Monsieur Clerselier servant de réponse à un recueil des principales instances faite par Monsieur Gassendi contre les précédentes réponses</>,
        subtitle: <>Cette lettre écrite en français par Descartes le 12 janvier 1646, a été publiée par Clerselier dans l'édition de 1647, à la suite de sa traduction des Cinquièmes Objections et Réponses.</>,
        objection: 
        {
            title: <>OBJECTION FAITES À DESCARTES ET QU’IL CITE DANS LA LETTRE</>,
            content: <p><span style={downplayed}>Ils<sup>1</sup> en remarque trois contre la première méditation à savoir "1° que je demande une chose impossible en voulant que l’on quitte toutes sortes de préjugés; 
            2° qu’en pensant les quitter on se revêt d’autres préjugés qui sont plus préjudiciables;</span> 3° et que ma méthode de douter de tout, que j’ai proposé, ne peut servir à trouver aucune vérité".</p>,
            footnotes: 
            [
                <p style={downplayed}>[1] Le "ils" renvoie certainement aux amis de Monsieur Clerselier: 
                "Je vous ai beaucoup d’obligation de ce que, voyant que j’ai négligé de répondre au gros livre d’instance que l’auteur des cinquièmes objections à produit contre les réponses, 
                vous avez prié quelques-uns de vos amis de recueillir les plus fortes raisons de ce livre, et m’avez envoyé l’extrait qu’ils en ont fait. 
                Vous avez eu en cela plus de soin de ma réputation que moi même; car je vous assure qu’il m’est indifférent d'être estimé ou méprisé par ceux que de semblables raisons auront pu persuader. 
                Les meilleurs esprits de ma connaissance qui on lu son livre m’ont témoigné qu’ils n’y avaient trouvé aucune chose qui les arretat; c’est à eux seuls que je désire satisfaire"</p>,
            ]
        },
        response: 
        {
            title: <>RÉPONSES DÉVELOPPÉES PAR DESCARTES DANS LA MÊME LETTRE</>,
            content: <><p style={downplayed}>La première desquelles est fondée sur ce que l'auteur de ce livre n’a pas considéré que le mot de préjugé ne s'étend pas à toutes les notions qui sont en notre esprit, 
            desquelles j’avoue qu’il est impossible de se défaire, mais seulement à toutes les opinions que les jugements que nous avons faits auparavant ont laissées en notre créance; 
            et, parce que c’est une action de la volonté que de juger ou ne pas juger, ainsi que j’ai expliqué en son lieu, il est évident qu’elle est en notre pouvoir; 
            car enfin, pour se défaire de toutes sortes de préjugés, il ne faut autre chose que se résoudre à ne rien assurer ou nier de tout ce qu’on avait assuré ou nié auparavant, 
            sinon apres l’avoir derechef examiné, quoiqu’on ne laisse pas pour cela de retenir toutes les mêmes notions en sa mémoire. 
            J’ai dit néanmoins qu’il y avait de la difficulté à chasser ainsi hors de sa creance tout ce qu’on y avait mis auparavant, 
            partie à cause qu’il est besoin d’avoir quelque raison de douter avant que de s’y déterminer (c’est pourquoi j’ai proposé les principales en ma premiere Meditation), 
            et partie aussi à cause que, quelque résolution qu’on ait prise de ne rien nier ni assurer, on s’en oublie aisément par après si on ne l’a fortement imprimée en sa mémoire; 
            c’est pourquoi j’ai désiré qu’on y pensât avec soin.</p>
            <p style={downplayed}>La deuxième objection n’est qu’une supposition manifestement fausse; car, encore que j’aie dit qu’il fallait même s’efforcer de nier les choses qu’on avait trop assurées auparavant, 
            j’ai très expressément limité que cela ne se devait faire que pendant le temps qu’on portait son attention à chercher quelque chose de plus certain que tout ce qu’on pourrait ainsi nier, 
            pendant lequel il est évident qu’on ne saurait se revêtir d’aucun préjugé qui soit préjudiciable.</p>
            <p>La troisième ne contient aussi  qu’une cavillation; car, bien qu’il soit vrai que le doute seul ne suffit pas pour établir aucune vérité, 
            il ne laisse pas d'être utile à préparer l’esprit pour en établir par après, et c’est à cela seul que je l’ai employé.</p></>,
            footnotes: []
        }
    },
    {
        id: 2,
        title: <>Lettre de Monsieur Descartes à Monsieur Clerselier servant de réponse à un recueil des principales instances faite par Monsieur Gassendi contre les précédentes réponses</>,
        subtitle: <>Cette lettre écrite en français par Descartes le 12 janvier 1646, a été publiée par Clerselier dans l'édition de 1647, à la suite de sa traduction des Cinquièmes Objections et Réponses.</>,
        objection: 
        {
            title: <>OBJECTION FAITES À DESCARTES ET QU’IL CITE DANS LA LETTRE</>,
            content: <p>Ils<sup>1</sup> en remarque trois contre la première méditation à savoir "1° que je demande une chose impossible en voulant que l’on quitte toutes sortes de préjugés; 
            2° qu’en pensant les quitter on se revêt d’autres préjugés qui sont plus préjudiciables; <span style={downplayed}>3° et que ma méthode de douter de tout, 
            que j’ai proposé, ne peut servir à trouver aucune vérité".</span></p>,
            footnotes: 
            [
                <p>[1] Le "ils" renvoie certainement aux amis de Monsieur Clerselier: 
                "Je vous ai beaucoup d’obligation de ce que, voyant que j’ai négligé de répondre au gros livre d’instance que l’auteur des cinquièmes objections à produit contre les réponses, 
                vous avez prié quelques-uns de vos amis de recueillir les plus fortes raisons de ce livre, et m’avez envoyé l’extrait qu’ils en ont fait. 
                Vous avez eu en cela plus de soin de ma réputation que moi même; car je vous assure qu’il m’est indifférent d'être estimé ou méprisé par ceux que de semblables raisons auront pu persuader. 
                Les meilleurs esprits de ma connaissance qui on lu son livre m’ont témoigné qu’ils n’y avaient trouvé aucune chose qui les arretat; c’est à eux seuls que je désire satisfaire"</p>,
            ]
        },
        response: 
        {
            title: <>RÉPONSES DÉVELOPPÉES PAR DESCARTES DANS LA MÊME LETTRE</>,
            content: <><p>La première desquelles est fondée sur ce que l'auteur de ce livre n’a pas considéré que le mot de préjugé ne s'étend pas à toutes les notions qui sont en notre esprit, 
            desquelles j’avoue qu’il est impossible de se défaire, mais seulement à toutes les opinions que les jugements que nous avons faits auparavant ont laissées en notre créance; 
            et, parce que c’est une action de la volonté que de juger ou ne pas juger, ainsi que j’ai expliqué en son lieu, il est évident qu’elle est en notre pouvoir; 
            car enfin, pour se défaire de toutes sortes de préjugés, il ne faut autre chose que se résoudre à ne rien assurer ou nier de tout ce qu’on avait assuré ou nié auparavant, 
            sinon apres l’avoir derechef examiné, quoiqu’on ne laisse pas pour cela de retenir toutes les mêmes notions en sa mémoire. 
            J’ai dit néanmoins qu’il y avait de la difficulté à chasser ainsi hors de sa creance tout ce qu’on y avait mis auparavant, 
            partie à cause qu’il est besoin d’avoir quelque raison de douter avant que de s’y déterminer (c’est pourquoi j’ai proposé les principales en ma premiere Meditation), 
            et partie aussi à cause que, quelque résolution qu’on ait prise de ne rien nier ni assurer, on s’en oublie aisément par après si on ne l’a fortement imprimée en sa mémoire; 
            c’est pourquoi j’ai désiré qu’on y pensât avec soin.</p>
            <p>La deuxième objection n’est qu’une supposition manifestement fausse; car, encore que j’aie dit qu’il fallait même s’efforcer de nier les choses qu’on avait trop assurées auparavant, 
            j’ai très expressément limité que cela ne se devait faire que pendant le temps qu’on portait son attention à chercher quelque chose de plus certain que tout ce qu’on pourrait ainsi nier, 
            pendant lequel il est évident qu’on ne saurait se revêtir d’aucun préjugé qui soit préjudiciable.</p>
            <p style={downplayed}>La troisième ne contient aussi  qu’une cavillation; car, bien qu’il soit vrai que le doute seul ne suffit pas pour établir aucune vérité, 
            il ne laisse pas d'être utile à préparer l’esprit pour en établir par après, et c’est à cela seul que je l’ai employé.</p></>,
            footnotes: []
        }
    },
    {
        id: 3,
        title: <>Réponses de l’auteur aux cinquièmes objections</>,
        subtitle: <>Traduction de Clerselier de l'édition de 1647</>,
        objection: 
        {
            title: <>DES CHOSES QUI ONT ÉTÉ OBJECTÉES CONTRE LA PREMIÈRE MÉDITATION</>,
            content: <p>Vous dites que vous approuvez le dessin que j’ai eu de délivrer l’esprit des anciens préjugés, qui est tel en effet que personne n’y peut trouver à redire; 
            mais vous voudriez que je m’en fusse acquitté "simplement et en peu de paroles", c’est à dire, en un mot "négligemment et sans tant de précaution"; 
            comme si c'était une chose si facile que de délivrer de tout les erreurs dont nous sommes impu dès notre enfance, et que l' on put faire trop exactement ce qu’on ne doute point qu’il ne faille faire. 
            Mais certe je vois bien que vous avez voulu m’indiquer qu’il y en a plusieurs qui disent seulement de bouche qu’il faut soigneusement éviter la prévention, mais qui pourtant ne l'évite jamais, 
            parce qu’ils ne s’étudient point à s’en défaire, et se persuadent qu’on ne doit point tenir pour des préjugés ce qu’ils ont une fois reçu pour véritable. 
            Certainement vous jouez ici parfaitement bien leur personnage, et n'omettez rien de ce qu’ils me pourraient objecter, mais cependant vous ne dites rien qui sente tant soit peu son philosophe. 
            Car, ou vous dites qu’il n'était "pas besoin de feindre un Dieux trompeur, ni que je dormais", un philosophe aurait cru être obligé d’ajouter la raison pourquoi ces choses ne peuvent être révoquées en doute, 
            ou s’il n’en eût point eu, comme de vrai il n’y en a point, il se serait abstenu de dire cela. Il n’aurait pas non plus ajouté qu’il suffisait en ce lieu là d'alléguer, 
            pour raison de notre defiance, le peu de lumière de l’esprit humain, ou la faiblesse de notre nature; 
            car il ne sert de rien, pour corriger nos erreurs, de dire que nous nous trompons parce que notre esprit n’est pas beaucoup clairvoyant, ou que notre nature est infirme; 
            car c’est le même que si nous disions que nous errons parce que nous sommes sujets à l’erreur. Et certes on ne peut pas nier qu’il ne soit plus utile de prendre garde, comme j’ai fait, 
            à toutes les ou il peut arriver que nous errons, de peur que nous ne leur donnions trop légèrement notre créance. Un philosophe n’aurait pas dit aussi qu’en "tenant toutes choses pour fausses, 
            je ne me dépouille pas tant de mes anciens préjugés, que je me revêt d’un autre tout nouveau"; ou bien il eu premièrement tâché de montrer qu’une telle supposition nous pouvait induire en erreur; 
            mais tout au contraire, vous assurez un peut apres qu’il n’est pas possible que je puisse obtenir cela de moi, que de douter de la vérité et certitudes de ces choses que j’ai supposé être fausses; 
            c’est à dire que je puisse me revêtir de ce nouveau préjugé dont vous appréhendez que je me laisse prevenir. 
            Et un philosophe ne serait pas plus étonné de cette supposition que de voir quelquesfois une personne qui, 
            pour redresser un bâton qui est courbé, le recourbe de l’autre part, car il n’ignore pas que souvent on prend ainsi des choses fausses pour véritable, 
            comme lorsque les astronomes imaginent au ciel un equateur, un zodiaque et d’autres cercles, ou que le géomètre ajoute de nouvelles lignes à des figures données, 
            et souvent aussi les philosophes en beaucoup de rencontre; et celui qui appel cela "recourir à une machine, forger des illusions, 
            rechercher des détours et des nouveautés" et qui dit que cela est "indigne de la candeur d’un philosophe et du zèle de la vérité", 
            montre bien qu’il ne se veut pas lui même servir de cette candeur philosophiques, ni mettre en usage les raisons, mais seulement donner au choses le fard et les couleurs de la rhétorique.</p>,
            footnotes: []
        },
        response: null
    },
]

export default objections


// {
//     title: "",
//     content: "",
//     footnotes: []
// }