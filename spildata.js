// --- 1. DATA: Dine spil ---
const gamesData = [
    {
        title: "Partners",
        players: "4 spillere",
        time: "45-60 min",
        category: "Strategi",
        desc: "Det ultimative par-spil. Kan du og din makker få brikkerne i mål før modstanderne? Perfekt hvis baby sover længe."
    },
    {
        title: "Ludo",
        players: "2-4 spillere",
        time: "30 min",
        category: "Klassiker",
        desc: "Alle kender det. Det kræver ikke meget hjernekapacitet, så det er perfekt, hvis man er i 'baby-tåge'."
    },
    {
        title: "Monopoly Speed",
        players: "2-4 spillere",
        time: "10 min",
        category: "Hurtigt",
        desc: "Monopoly på under 10 minutter! Perfekt til når du kun har en kort pause fra baby."
    },
    {
        title: "Ticket to Ride",
        players: "2-5 spillere",
        time: "45 min",
        category: "Strategi",
        desc: "Byg togruter gennem Europa. Hyggeligt, visuelt og let at gå til og fra."
    },
    {
        title: "Cluedo",
        players: "3-6 spillere",
        time: "45 min",
        category: "Klassiker",
        desc: "Hvem gjorde det? Løs mordmysteriet. Kræver lidt mere fokus, godt til fædre-gruppen."
    },
    {
        title: "Bezzerwizzer",
        players: "2+ spillere",
        time: "30-60 min",
        category: "Quiz",
        desc: "Quiz om alt mellem himmel og jord. Kan nemt sættes på pause ved amning/bleskift."
    },
    {
        title: "Exploding Kittens",
        players: "2-5 spillere",
        time: "15 min",
        category: "Hurtigt",
        desc: "Russisk roulette med killinger. Hylende morsomt og lynhurtigt at spille."
    },
    {
        title: "Carcassonne",
        players: "2-5 spillere",
        time: "35 min",
        category: "Strategi",
        desc: "Byg landskaber brik for brik. Et roligt spil, hvor man nemt kan tage en pause, hvis den lille vågner."
    },
    {
        title: "Catan",
        players: "3-4 spillere",
        time: "60-90 min",
        category: "Strategi",
        desc: "Handl med får, træ og korn. En moderne klassiker. Kræver lidt tid, så perfekt til den lange lur."
    },
    {
        title: "Azul",
        players: "2-4 spillere",
        time: "30-45 min",
        category: "Strategi",
        desc: "Smukt og æstetisk spil om at lægge fliser. Ingen tekst at læse, så man kan sludre imens."
    },
    {
        title: "Splendor",
        players: "2-4 spillere",
        time: "30 min",
        category: "Strategi",
        desc: "Saml ædelstene og køb kort. Hurtigt at lære, svært at mestre, og brikkerne føles lækre i hånden."
    },
    {
        title: "Sequence",
        players: "2-12 spillere",
        time: "20 min",
        category: "Klassiker",
        desc: "En blanding af kortspil og brætspil. Kan spilles i hold, hvilket er genialt til mødregrupper."
    },
    {
        title: "Hint",
        players: "4+ spillere",
        time: "45 min",
        category: "Quiz",
        desc: "Syng, nyn, tegn eller tal. Det perfekte selskabsspil, hvis I har brug for et godt grin."
    },
    {
        title: "Codenames",
        players: "4-8 spillere",
        time: "15 min",
        category: "Hurtigt",
        desc: "Gæt de hemmelige ord. Kræver samarbejde og tankevirksomhed, men runderne er korte."
    },
    {
        title: "Uno",
        players: "2-10 spillere",
        time: "10-20 min",
        category: "Hurtigt",
        desc: "Klassikeren over dem alle. Kan spilles med én hånd, mens man vugger barnevognen med den anden."
    },
    {
        title: "Backgammon",
        players: "2 spillere",
        time: "30 min",
        category: "Klassiker",
        desc: "Det ultimative kaffespil. Perfekt til en rolig stund, mens baby sover ved siden af."
    },
    {
        title: "Rummikub",
        players: "2-4 spillere",
        time: "30 min",
        category: "Klassiker",
        desc: "Læg talrækker og tøm din holder. Hyggeligt og nemt at gå til for alle generationer."
    },
    {
        title: "Smart10",
        players: "2-8 spillere",
        time: "20 min",
        category: "Quiz",
        desc: "Alle får en chance for at svare. Man behøver ikke vente på sin tur, så ingen keder sig."
    },
    {
        title: "Sushi Go!",
        players: "2-5 spillere",
        time: "15 min",
        category: "Hurtigt",
        desc: "Sødt kortspil hvor du samler sushi-menuer. Hurtigt, simpelt og med nuttet grafik."
    },
    {
        title: "King of Tokyo",
        players: "2-6 spillere",
        time: "30 min",
        category: "Strategi",
        desc: "Kæmp om herredømmet som monstre. Slå med terninger og del øretæver ud. God til at få aggressioner ud!"
    },
    {
        title: "7 Wonders Duel",
        players: "2 spillere",
        time: "30 min",
        category: "Strategi",
        desc: "Verdens måske bedste spil kun til to. Perfekt til barselsparret, der vil dyste mod hinanden."
    },
    {
        title: "Patchwork",
        players: "2 spillere",
        time: "20 min",
        category: "Strategi",
        desc: "Sy det bedste tæppe. Et meget roligt to-personers spil, der minder lidt om Tetris."
    },
    {
        title: "Scrabble",
        players: "2-4 spillere",
        time: "60 min",
        category: "Klassiker",
        desc: "Ordspil for bogstavhaier. Tag jer god tid og nyd en kop kaffe mellem ordene."
    },
    {
        title: "Yatzy",
        players: "2+ spillere",
        time: "15 min",
        category: "Klassiker",
        desc: "5 terninger og en blok. Det bliver ikke mere simpelt eller nostalgisk end det her."
    },
    {
        title: "The Mind",
        players: "2-4 spillere",
        time: "15 min",
        category: "Hurtigt",
        desc: "Samarbejdsspil hvor I ikke må snakke sammen. I skal bare 'føle' hinandens rytme. Meget intenst!"
    },
    {
        title: "Pandemic",
        players: "2-4 spillere",
        time: "45 min",
        category: "Strategi",
        desc: "Red verden sammen. I spiller mod spillet, ikke mod hinanden. Godt hvis man ikke gider dårlig stemning."
    },
    {
        title: "Kingdomino",
        players: "2-4 spillere",
        time: "15 min",
        category: "Strategi",
        desc: "Byg dit eget kongerige med domino-brikker. Tager kun 15 minutter, men er sjovt hver gang."
    },
    {
        title: "Love Letter",
        players: "2-4 spillere",
        time: "10 min",
        category: "Hurtigt",
        desc: "Minimalistisk spil med kun 16 kort. Kan være i en pusletaske og spilles overalt."
    },
    {
        title: "Det Dårlige Selskab",
        players: "3-8 spillere",
        time: "30 min",
        category: "Quiz",
        desc: "Ukorrekt humor for voksne. Perfekt når I trænger til at være 'ikke-forældre' og grine igennem."
    },
    {
        title: "Skak",
        players: "2 spillere",
        time: "30-60 min",
        category: "Klassiker",
        desc: "Kongernes spil. Kræver fuld stilhed og koncentration – eller bare en baby der sover."
    },
    {
        title: "Trivial Pursuit",
        players: "2-6 spillere",
        time: "60 min",
        category: "Quiz",
        desc: "Den store paratviden-test. Hvem ved mest om geografi og sport? En ægte tidsrøver."
    },
    {
        title: "Dobble",
        players: "2-8 spillere",
        time: "5 min",
        category: "Hurtigt",
        desc: "Find symbolet før de andre. Det går stærkt, så hold tungen lige i munden."
    },
    {
        title: "Wingspan",
        players: "1-5 spillere",
        time: "60 min",
        category: "Strategi",
        desc: "Et smukt spil om fugle. Meget afslappende stemning og fantastisk flotte kort."
    },
    {
        title: "Ego",
        players: "2-6 spillere",
        time: "30 min",
        category: "Quiz",
        desc: "Hvor godt kender du dine venner? Spørgsmål der går tæt på, men på den gode måde."
    },
    {
        title: "Partners Duo",
        players: "2 spillere",
        time: "30 min",
        category: "Strategi",
        desc: "Ligesom Partners, men designet specifikt til to personer. Perfekt til en hurtig dyst."
    },
    {
        title: "Cascadia",
        players: "1-4 spillere",
        time: "30-45 min",
        category: "Strategi",
        desc: "Læg naturfliser og dyr. Meget fredeligt puslespil, hvor man ikke generer hinanden."
    },
    {
        title: "Risk",
        players: "3-5 spillere",
        time: "90 min",
        category: "Klassiker",
        desc: "Verdensherredømmet står på spil. Kun for dem med god tid og stærke venskaber."
    },
    {
        title: "Kluster",
        players: "1-4 spillere",
        time: "10 min",
        category: "Hurtigt",
        desc: "Magnetisk spil. Læg dine magneter uden de klikker sammen. Hylende sjovt og meget kort."
    },
    {
        title: "Timeline",
        players: "2-6 spillere",
        time: "15 min",
        category: "Quiz",
        desc: "Hvornår blev dåseåbneren opfundet? Før eller efter pæren? Læg kortene i kronologisk rækkefølge."
    },
    {
        title: "Stratego",
        players: "2 spillere",
        time: "45 min",
        category: "Klassiker",
        desc: "Fang fanen før din modstander. En strategisk klassiker om bluff og angreb."
    },
    {
        title: "Dixit",
        players: "3-6 spillere",
        time: "30 min",
        category: "Klassiker",
        desc: "Gæt ud fra drømmende billeder. Handler om fantasi og associationer. Meget hyggeligt."
    },
    {
        title: "Just One",
        players: "3-7 spillere",
        time: "20 min",
        category: "Hurtigt",
        desc: "Samarbejdsspil om ord. Skriv ledetråde til hinanden, men vær unikke!"
    },
    {
        title: "Matador",
        players: "3-6 spillere",
        time: "90 min",
        category: "Klassiker",
        desc: "Den danske klassiker. Køb Rådhuspladsen og byg hoteller. Kræver god tid."
    },
    {
        title: "Wavelength",
        players: "2-12 spillere",
        time: "30 min",
        category: "Quiz",
        desc: "Er kaffe 'varmt' eller 'koldt'? I skal tune ind på hinandens bølgelængde."
    },
    {
        title: "6. nimmt!",
        players: "2-10 spillere",
        time: "20 min",
        category: "Hurtigt",
        desc: "Et tal-kortspil hvor du ikke vil have kortene. Sjovest hvis man er mange."
    },
    {
        title: "Jaipur",
        players: "2 spillere",
        time: "20 min",
        category: "Strategi",
        desc: "Hurtigt handelsspil for to. Køb og sælg varer på markedet. Nemt at lære."
    },
    {
        title: "Kalaha",
        players: "2 spillere",
        time: "10 min",
        category: "Klassiker",
        desc: "Flyt kuglerne i skålene. Et spil børnene også kan lære, når de bliver lidt ældre."
    },
    {
        title: "Hive",
        players: "2 spillere",
        time: "20 min",
        category: "Strategi",
        desc: "Skak med insekter, men uden bræt. Kan spilles på ethvert cafébord."
    },
    {
        title: "Concept",
        players: "4-12 spillere",
        time: "40 min",
        category: "Quiz",
        desc: "Gæt ord ved hjælp af ikoner. Ingen snak, kun logik og symboler."
    },
    {
        title: "Skull",
        players: "3-6 spillere",
        time: "15 min",
        category: "Hurtigt",
        desc: "Bluff og pokerfjæs. Tør du vende brikken? Perfekt som 'filler' spil."
    },
    {
        title: "Quacks of Quedlinburg",
        players: "2-4 spillere",
        time: "45 min",
        category: "Strategi",
        desc: "Bryg dine egne eliksirer. Men pas på gryden ikke sprænger! Sjovt 'push-your-luck' spil."
    },
    {
        title: "Everdell",
        players: "1-4 spillere",
        time: "60 min",
        category: "Strategi",
        desc: "Byg en landsby til skovens dyr. Utrolig flot spil med et 3D træ på brættet."
    },
    {
        title: "Meyer",
        players: "2+ spillere",
        time: "10 min",
        category: "Hurtigt",
        desc: "Det klassiske terningespil. Kræver kun to terninger og et raflebæger. Og et godt pokerfjæs."
    },
    {
        title: "Secret Hitler",
        players: "5-10 spillere",
        time: "45 min",
        category: "Strategi",
        desc: "Hvem er fascister, og hvem er liberale? Et spil om bedrag og mistillid. Kræver en større gruppe."
    },
    {
        title: "iKnow",
        players: "2-6 spillere",
        time: "45 min",
        category: "Quiz",
        desc: "Det handler ikke kun om at vide det, men om at gætte om de andre ved det. Taktisk quiz."
    },
    {
        title: "Hanabi",
        players: "2-5 spillere",
        time: "25 min",
        category: "Hurtigt",
        desc: "Lav et fyrværkeri sammen. Twistet er, at du ikke må se dine egne kort, kun de andres."
    },
    {
        title: "Takenoko",
        players: "2-4 spillere",
        time: "45 min",
        category: "Strategi",
        desc: "Pas pandaen og dyrk bambus. Et af de sødeste spil på hylden, meget afslappende."
    },
    {
        title: "Sagrada",
        players: "1-4 spillere",
        time: "30-45 min",
        category: "Strategi",
        desc: "Byg de smukkeste glasmosaik-vinduer med terninger. Meget visuelt og afslappende for hjernen."
    },
    {
        title: "4 på Stribe",
        players: "2 spillere",
        time: "5 min",
        category: "Klassiker",
        desc: "Det bliver ikke hurtigere. Kan spilles mens man venter på, at flasken bliver varm."
    },
    {
        title: "Flamme Rouge",
        players: "2-4 spillere",
        time: "30 min",
        category: "Strategi",
        desc: "Taktisk cykelløb. Få dit hold først over målstregen. Simpelt, men intenst."
    },
    {
        title: "No Thanks!",
        players: "3-7 spillere",
        time: "20 min",
        category: "Hurtigt",
        desc: "Sig 'nej tak' til kortene og betal med jetoner. Et spil om at presse hinanden, men på den sjove måde."
    },
    {
        title: "Alias",
        players: "4+ spillere",
        time: "45 min",
        category: "Quiz",
        desc: "Forklar ord på tid uden at sige selve ordet. Får pulsen op og lattermusklerne igang."
    },
    {
        title: "Calico",
        players: "1-4 spillere",
        time: "30-45 min",
        category: "Strategi",
        desc: "Sy tæpper og tiltræk søde katte. Det hyggeligste tema, perfekt til en regnvejrsdag på barsel."
    },
    {
        title: "Mastermind",
        players: "2 spillere",
        time: "20 min",
        category: "Klassiker",
        desc: "Knæk koden. Det klassiske logikspil med de små farvede pinde. Ren hjernegymnastik."
    },
    {
        title: "MicroMacro: Crime City",
        players: "1-4 spillere",
        time: "15-45 min",
        category: "Strategi",
        desc: "Som 'Find Holger' men med mordmysterier. I kigger på et kæmpe kort sammen. Meget stille og roligt."
    },
    {
        title: "Taco Cat Goat Cheese Pizza",
        players: "2-8 spillere",
        time: "10 min",
        category: "Hurtigt",
        desc: "Sig ordene, slå i bordet. Kaotisk reaktionsspil, der vækker selv den trætteste forælder."
    },
    {
        title: "Othello (Reversi)",
        players: "2 spillere",
        time: "20 min",
        category: "Klassiker",
        desc: "Et minut at lære, et liv at mestre. Vend modstanderens brikker til din farve."
    },
    {
        title: "The Crew: Quest for Planet Nine",
        players: "2-5 spillere",
        time: "20 min",
        category: "Strategi",
        desc: "Samarbejds-kortspil i rummet. I skal løse missioner uden at tale for meget sammen."
    },
    {
        title: "Bohnanza",
        players: "2-7 spillere",
        time: "45 min",
        category: "Strategi",
        desc: "Bønnespillet! Handl med bønner og tjen guld. Et kortspil hvor man skal være god til at snakke for sin syge moster."
    },
    {
        title: "Sænke Slagskibe",
        players: "2 spillere",
        time: "20 min",
        category: "Klassiker",
        desc: "Du sænkede mit slagskib! Strategi og held i en kasse, man nemt kan pakke væk."
    },
    {
        title: "Heat: Pedal to the Metal",
        players: "1-6 spillere",
        time: "45-60 min",
        category: "Strategi",
        desc: "Formel 1 brætspil. Styr din bil gennem svingene uden at motoren brænder sammen. Meget populært."
    },
    {
        title: "Hvem er Hvem?",
        players: "2 spillere",
        time: "10 min",
        category: "Klassiker",
        desc: "Har din person briller? Ren nostalgi. Nemt at spille med en baby på armen."
    },
    {
        title: "Viticulture",
        players: "1-6 spillere",
        time: "60-90 min",
        category: "Strategi",
        desc: "Driv din egen vingård i Italien. Lidt tungere strategi, men perfekt hvis baby tager en lang lur."
    },
    {
        title: "Tegn & Gæt",
        players: "3+ spillere",
        time: "45 min",
        category: "Quiz",
        desc: "Klassikeren hvor dine tegneevner (eller mangel på samme) er i centrum."
    },
    {
        title: "For Sale",
        players: "3-6 spillere",
        time: "20 min",
        category: "Hurtigt",
        desc: "Køb billigt, sælg dyrt. Et hurtigt ejendomsmægler-spil med masser af bluff."
    },
    {
        title: "Mølle",
        players: "2 spillere",
        time: "15 min",
        category: "Klassiker",
        desc: "Det ældgamle brætspil. Simpelt, taktisk og kræver absolut ingen opsætningstid."
    },
    {
        title: "Santorini",
        players: "2-4 spillere",
        time: "20 min",
        category: "Strategi",
        desc: "Byg smukke hvide tårne i Grækenland. Ser utrolig flot ud på bordet og er nemt at lære."
    },
    {
        title: "Spyfall",
        players: "3-8 spillere",
        time: "15 min",
        category: "Quiz",
        desc: "Vi er alle på en lokation, undtagen spionen. Kan du regne ud, hvem der ikke aner, hvor vi er?"
    },
    {
        title: "Isle of Cats",
        players: "1-4 spillere",
        time: "60 min",
        category: "Strategi",
        desc: "Red katte op på din båd. Et puslespil med Tetris-brikker og kortstyring."
    },
    {
        title: "Klodsmajor",
        players: "1+ spillere",
        time: "10 min",
        category: "Klassiker",
        desc: "Fjern klodserne uden tårnet vælter. Kræver rolige hænder (måske ikke efter for meget kaffe)."
    },
    {
        title: "Cockroach Poker (Kakerlakenpoker)",
        players: "2-6 spillere",
        time: "15 min",
        category: "Hurtigt",
        desc: "Er det en rotte eller en flagermus? Et spil om at lyve sine venner lige op i ansigtet."
    },
    {
        title: "Terraforming Mars: Ares Expedition",
        players: "1-4 spillere",
        time: "60 min",
        category: "Strategi",
        desc: "Gør Mars beboelig. Kortspils-versionen af det store spil. Hurtigere, men stadig dybt."
    },
    {
        title: "Domino",
        players: "2-4 spillere",
        time: "15 min",
        category: "Klassiker",
        desc: "Match brikkerne. En hyggelig aktivitet, der ikke kræver den store hjernekapacitet."
    },
    {
        title: "Magic Maze",
        players: "1-8 spillere",
        time: "15 min",
        category: "Hurtigt",
        desc: "Stjæl udstyr fra et supermarked i stilhed! Alle styrer de samme brikker. Hektisk samarbejde."
    },
    {
        title: "Small World",
        players: "2-5 spillere",
        time: "45-60 min",
        category: "Strategi",
        desc: "Risk, men med troldmænd og orker. Erobr verden, men den er for lille til os alle!"
    },
    {
        title: "Qwirkle",
        players: "2-4 spillere",
        time: "30 min",
        category: "Strategi",
        desc: "Scrabble, men med former og farver i stedet for bogstaver. Meget familievenligt."
    },
    {
        title: "Halma",
        players: "2-6 spillere",
        time: "30 min",
        category: "Klassiker",
        desc: "Flyt dine kugler tværs over stjerne-brættet. Ren nostalgi fra bedsteforældrenes tid."
    },
    {
        title: "Cartographers",
        players: "1-100 spillere",
        time: "30 min",
        category: "Strategi",
        desc: "Tegn dit eget landkort. Du vender et kort, og alle tegner det på deres papir. Hyggeligt 'tegne'-spil."
    },
    {
        title: "Zombie Dice",
        players: "2+ spillere",
        time: "5 min",
        category: "Hurtigt",
        desc: "Slå med terninger og spis hjerner. Pas på du ikke bliver skudt! Perfekt 'filler' spil."
    },
    {
        title: "Codenames: Pictures",
        players: "2-8 spillere",
        time: "15 min",
        category: "Hurtigt",
        desc: "Samme som Codenames, men med billeder. Endnu nemmere at gå til for trætte hjerner."
    },
    {
        title: "Cribbage",
        players: "2 spillere",
        time: "30 min",
        category: "Klassiker",
        desc: "Klassisk engelsk kortspil med pointtavle. Perfekt til en kop te og en sludder."
    },
    {
        title: "My City",
        players: "2-4 spillere",
        time: "30 min",
        category: "Strategi",
        desc: "Tetris-agtigt spil hvor du bygger din by. Reglerne ændrer sig lidt for hver gang man spiller."
    },
    {
        title: "Rhino Hero",
        players: "2-5 spillere",
        time: "10 min",
        category: "Hurtigt",
        desc: "Byg et korthus og flyt næsehornet opad. Pas på det ikke vælter! Sjovt for både børn og voksne."
    },
    {
        title: "Wits & Wagers",
        players: "3+ spillere",
        time: "30 min",
        category: "Quiz",
        desc: "Du behøver ikke kende svaret, du skal bare satse på den, du tror ved det. Alle har en chance."
    },
    {
        title: "Flamecraft",
        players: "1-5 spillere",
        time: "45 min",
        category: "Strategi",
        desc: "Du er en drage-hvisker. Utroligt nuttet spil med små drager, der bager brød og laver smykker."
    },
    {
        title: "Canasta",
        players: "4 spillere",
        time: "60 min",
        category: "Klassiker",
        desc: "Kortspil med makkerpar. Kræver to sæt spillekort. En rigtig klub-klassiker."
    },
    {
        title: "Point Salad",
        players: "2-6 spillere",
        time: "15 min",
        category: "Hurtigt",
        desc: "Lav den bedste salat. Hvert kort er enten en grøntsag eller en point-regel. Lynhurtigt at lære."
    },
    {
        title: "Villainous",
        players: "2-6 spillere",
        time: "60 min",
        category: "Strategi",
        desc: "Spil som Disney-skurkene. Vær Maleficent eller Kaptajn Klo og opnå dit onde mål."
    },
    {
        title: "20 Sekunder",
        players: "3+ spillere",
        time: "20 min",
        category: "Quiz",
        desc: "Hurtig paratviden og skøre udfordringer. Holdet skal nå mest muligt på 20 sekunder."
    },
    {
        title: "L.A.M.A.",
        players: "2-6 spillere",
        time: "15 min",
        category: "Hurtigt",
        desc: "Læg Alle Minusser Af. Simpelt kortspil hvor du ikke vil have point. Godt hvis man har ammehjerne."
    },
    {
        title: "Parks",
        players: "1-5 spillere",
        time: "40 min",
        category: "Strategi",
        desc: "Vandre gennem amerikanske nationalparker. Et af de smukkeste spil der findes. Ren afslapning."
    },
    {
        title: "Dam",
        players: "2 spillere",
        time: "20 min",
        category: "Klassiker",
        desc: "Hop over modstanderens brikker. En stille og rolig dyst på det ternede bræt."
    },
    {
        title: "Unstable Unicorns",
        players: "2-8 spillere",
        time: "30-45 min",
        category: "Strategi",
        desc: "Byg en enhjørninge-hær og saboter dine venner. Sødt udseende, men ondt gameplay!"
    },
    {
        title: "Coup",
        players: "2-6 spillere",
        time: "15 min",
        category: "Hurtigt",
        desc: "Hvem er hertugen? Et bluff-spil, hvor en runde kun tager et par minutter."
    },
    {
        title: "Ticket to Ride: Europe",
        players: "2-5 spillere",
        time: "45-60 min",
        category: "Strategi",
        desc: "Den udvidede version med tunneler og færger. Lidt mere dybde end det originale, men stadig hyggeligt."
    },
    {
        title: "HINT: Rød",
        players: "4+ spillere",
        time: "45 min",
        category: "Quiz",
        desc: "Den røde udgave af Hint. Mere fokus på figurer og lyde. Altid et hit."
    },
    {
        title: "Bunny Kingdom",
        players: "2-4 spillere",
        time: "45 min",
        category: "Strategi",
        desc: "Kaninerne skal udvide deres territorium. Vælg kort og byg gulerodsfarme. Meget farverigt."
    }
];