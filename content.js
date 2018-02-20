var elements = document.getElementsByTagName('*');

var badNounsSingular = /\bmoron|\bimbecile\b|\bcretin\b|\barse\b|\bass\b|\basshole\b|\bbastard\b|\bbitch\b|\bbollock\b|\bchild-fucker\b|\bcrap\b|\bcunt\b|\bcuck\b|damn|\bgoddamn\b|\bgodsdamn\b|\bhell\b|\bmotherfucker\b|\bnigga\b|\bnigger\b|shit|\bshit ass\b|\bshitass\b|\bson of a bitch\b|\bson of a motherless goat\b|\bson of a whore\b|\btwat\b|\bcock\b|\bcockfucker\b|\bdick\b|\bdickhead\b|\bdogshit\b|\bfuckface\b|\bfucker\b|\bidiot\b|\bstupid\b|\bjackass\b|\bjack-ass\b|\bprick\b|\bpervert\b|\bpussy\b|\bwanker\b|\bwhore\b|\bdumb\b|\bdummy\b|\bdouche\b|\bdouchebag\b|\bfag\b|\bfaggot\b|\bcocksucker\b|\bshithead\b|\bshitfaced\b|\bfuckface\b|\bbullshit\b|\basshat\b|\bvag\b|\bpiss\b|\bpisspoor\b|\bfucker\b|\btit\b|\btitty\b/ig;
var badNounsPlural = /\btitties\b|\bmorons|\bimbeciles\b|\bcretins\b|\barses\b|\basses\b|\bassholes\b|\bbastards\b|\bbitches\b|\bbollocks\b|\bchild-fuckers\b|\bcraps\b|\bcunts\b|\bcucks\b|\bdamns\b|\bfucks\b|\bmotherfuckers\b|\bniggas\b|\bniggers\b|\bshits\b|\bshit asses\b|\bshitasses\b|\bsons of bitches\b|\bsons of motherless goats\b|\bsons of whores\b|\btwats\b|\bcocks\b|\bcockfuckers\b|\bdicks\b|\bdickheads\b|\bdogshits\b|\bfuckfaces\b|\bfuckers\b|\bidiots\b|\bjackasses\b|\bjack-asses\b|\bpricks\b|\bperverts\b|\bpussys\b|\bpussies\b|\bwankers\b|\bwhores\b|\bdummies\b|\bdouches\b|\bdouchebags\b|\bfags\b|\bfaggots\b|\bcocksuckers\b|\bshitheads\b|\bfuckfaces\b|\basshats\b|\bvags\b|\bhoes\b/ig;
var badVerbs = /\bpiss|\bcum|fuck|\bho\b/ig;

var insultCol1 = ["artless", "bawdy", "beslubbering", "bootless", "churlish", "cockered", "clouted", "craven", "currish", "dankish", "dissembling", "droning", "errant", "fawning", "fobbing", "froward", "frothy", "gleeking", "goatish gorbellied", "impertinent", "infectious", "jarring", "loggerheaded", "lumpish", "mammering", " mangled", "mewling", "paunchy", "pribbling", "puking", "puny", "qualling", "rank", "reeky", "roguish", "ruttish", "saucy", "spleeny", "spongy", "surly", "tottering", "unmuzzled", "vain", "venomed", "villainous", "warped", "wayward", "weedy", "yeasty"];

var insultCol2 = ["base-court", "bat-fowling", "beef-witted", "beetle-headed", "boil-brained", "clapper-clawed", "clay-brained", "common-kissing", "crook-pated", "dismal-dreaming", "dizzy-eyed", "doghearted", "dread-bolted", "earth-vexing", "elf-skinned", "fat-kidneyed", "fen-sucked", "flap-mouthed", "fly-bitten", "folly-fallen", "fool-born", "full-gorged", "guts-griping", "half-faced", "hasty-witted", "hedge-born", "hell-hated", "idle-headed", "ill-breeding", "ill-nurtured", "knotty-pated", "milk-livered", "motley-minded", "onion-eyed", "plume-plucked", "pottle-deep", "pox-marked", "reeling-ripe", "rough-hewn", "rude-growing", "rump-fed", "shard-borne", "sheep-biting", "spur-galled", "swag-bellied", "tardy-gaited", "tickle-brained", "toad-spotted", "unchin-snouted", "weather-bitten"];

var insultCol3 = ["apple-john", "baggage", "barnacle", "bladder", "boar-pig", "bugbear", "bum-bailey", "canker-blossom", "clack-dish", "clotpole", "coxcomb", "codpiece", "death-token", "dewberry", "flap-dragon", "flax-wench", "flirt-gill", "foot-licker", "fustilarian", "giglet", "gudgeon haggard", "harpy", "hedge-pig", "horn-beast", "hugger-mugger", "joithead", "lewdster", "lout", "maggot-pie", "malt-worm", "mammet", "measle", "minnow", "miscreant", "moldwarp", "mumble-news", "nut-hook", "pigeon-egg", "pignut", "puttock", "pumpion", "ratsbane", "scut", "skainsmate", "strumpet", "varlot", "vassal", "whey-face", "wagtail"];

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var shakespeare = insultCol1[Math.floor(Math.random() * insultCol1.length)] + " " + insultCol2[Math.floor(Math.random() * insultCol2.length)] + " " + insultCol3[Math.floor(Math.random() * insultCol3.length)]
            var replacedText = text.replace(badNounsSingular, shakespeare);
            replacedText = replacedText.replace(badNounsPlural, shakespeare+"s");
            replacedText = replacedText.replace(badVerbs, insultCol1[Math.floor(Math.random() * insultCol1.length)]);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}