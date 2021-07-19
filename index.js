$(document).ready(()=>{
    console.log("Script Loaded!")

    let dataArr = [
        {
            id: 1,
            playerName: "Rohit Sharma",
            from: "MI",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Batsman",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/107.png"
        },

        {
            id: 12,
            playerName: "MS Dhoni",
            from: "CSK",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Wicketkeeper batsman",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/1.png"
        },

         {
            id: 39,
            playerName: "Virat Kohli",
            from: "RCB",
            price: "6.50 Cr",
            isPlaying: false,
            championshipsWon: 3,
            description: "Batsman",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RCB-png-logo-2020.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/164.png"
        },
         {
            id: 34,
            playerName: "Sanju Samson",
            from: "RR",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Wicketkeeper batsman",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RR-Logo.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/258.png"
        },

        {
            id: 23,
            playerName: "Rishabh Pant",
            from: "DC",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Wicketkeeper-batsman",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/2972.png"
        },
        {
            id: 2,
            playerName: "Aditya Tare",
            from: "MI",
            price: "6.50 Cr",
            isPlaying: false,
            championshipsWon: 3,
            description: "Wicketkeeper batsman",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/99.png"
        },
        {
            id: 3,
            playerName: "Chris Lynn",
            from: "MI",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Batsman",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/179.png"
        },
        {
            id: 4,
            playerName: "Hardik Pandya",
            from: "MI",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "All-rounder",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/2740.png"
        },
        {
            id: 5,
            playerName: "Arjun Tendulkar",
            from: "MI",
            price: "6.50 Cr",
            isPlaying: false,
            championshipsWon: 3,
            description: "All-rounder",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/10244.png"
        },
        {
            id: 6,
            playerName: "Jasprit Bumrah",
            from: "MI",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Bowler",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/1124.png"
        },
         {
            id: 7,
            playerName: "Macro Jamsen",
            from: "MI",
            price: "6.50 Cr",
            isPlaying: false,
            championshipsWon: 3,
            description: "All-rounder",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/17068.png"
        },
         {
            id: 8,
            playerName: "Ishan Kishan",
            from: "MI",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Batsman",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/2975.png"
        },
         {
            id: 9,
            playerName: "Kieron Pollard",
            from: "MI",
            price: "6.50 Cr",
            isPlaying: false,
            championshipsWon: 3,
            description: "All-rounder",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/210.png"
        },
         {
            id: 10,
            playerName: "Trent Boult",
            from: "MI",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Bowler",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/969.png"
        },
         {
            id: 11,
            playerName: "Jimmy Neesham",
            from: "MI",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "All-rounder",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/971.png"
        },
         
         {
            id: 13,
            playerName: "Ambati Rayudu",
            from: "CSK",
            price: "6.50 Cr",
            isPlaying: false,
            championshipsWon: 3,
            description: "Wicketkeeper batsman",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/100.png"
        },
         {
            id: 14,
            playerName: "KM Asif",
            from: "CSK",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "All-rounder",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/4944.png"
        },
         {
            id: 15,
            playerName: "Dwanye Bravo",
            from: "CSK",
            price: "6.50 Cr",
            isPlaying: false,
            championshipsWon: 3,
            description: "All-rounder",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/25.png"
        },
         {
            id: 16,
            playerName: "Deepak Chahar",
            from: "CSK",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Bowler",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/140.png"
        },
         {
            id: 17,
            playerName: "Faf du Plessis",
            from: "CSK",
            price: "6.50 Cr",
            isPlaying: false,
            championshipsWon: 3,
            description: "Batsman",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/24.png"
        },
         {
            id: 18,
            playerName: "Imran Tahir",
            from: "CSK",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Bowler",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/898.png"
        },
         {
            id: 19,
            playerName: "Narayan Jagadeesan",
            from: "CSK",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Wicketkeeper batsman",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/4942.png"
        },
         {
            id: 20,
            playerName: "Ravindra Jadeja",
            from: "CSK",
            price: "6.50 Cr",
            isPlaying: false,
            championshipsWon: 3,
            description: "All-rounder",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/9.png"
        },
         {
            id: 21,
            playerName: "Sam Curran",
            from: "CSK",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "All-rounder",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/2939.png"
        },
         {
            id: 22,
            playerName: "Suresh Raina",
            from: "CSK",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Batsman",
            logo:"https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
            photo:"https://static.iplt20.com/players/284/14.png"
        },
         
         {
            id: 24,
            playerName: "Ajinkya Rahane",
            from: "DC",
            price: "6.50 Cr",
            isPlaying: false,
            championshipsWon: 3,
            description: "Batsman",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/135.png"
        },
         {
            id: 25,
            playerName: "Amit Mishra",
            from: "DC",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Bowler",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/30.png"
        },
         {
            id: 26,
            playerName: "Anrich Nortje",
            from: "DC",
            price: "6.50 Cr",
            isPlaying: false,
            championshipsWon: 3,
            description: "Bowler",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/5433.png"
        },
         {
            id: 27,
            playerName: "Avesh Khan",
            from: "DC",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Bowler",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/1561.png"
        },
         {
            id: 28,
            playerName: "Axar Patel",
            from: "DC",
            price: "6.50 Cr",
            isPlaying: false,
            championshipsWon: 3,
            description: "All-rounder",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/1113.png"
        },
         {
            id: 29,
            playerName: "Chris Woakes",
            from: "DC",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "All-rounder",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/967.png"
        },
         {
            id: 30,
            playerName: "Ishant Sharma",
            from: "DC",
            price: "6.50 Cr",
            isPlaying: false,
            championshipsWon: 3,
            description: "Bowler",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/38.png"
        },
         {
            id: 31,
            playerName: "Kagiso Rabada",
            from: "DC",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Bowler",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/1664.png"
        },
         {
            id: 32,
            playerName: "Lalit Yadav",
            from: "DC",
            price: "6.50 Cr",
            isPlaying: false,
            championshipsWon: 3,
            description: "All-rounder",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/6870.png"
        },
         {
            id: 33,
            playerName: "Shikhar Dhawan",
            from: "DC",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Batsman",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/41.png"
        },
        
         {
            id: 35,
            playerName: "Andrew Tye",
            from: "RR",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Bowler",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RR-Logo.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/1480.png"
        },
         {
            id: 36,
            playerName: "Anuj Rawat",
            from: "RR",
            price: "6.50 Cr",
            isPlaying: false,
            championshipsWon: 3,
            description: "Wicketkeeper batsman",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RR-Logo.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/10788.png"
        },
         {
            id: 37,
            playerName: "Ben Stokes",
            from: "RR",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "All-rounder",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RR-Logo.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/1154.png"
        },
         {
            id: 38,
            playerName: "David Miller",
            from: "RR",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Batsman",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RR-Logo.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/187.png"
        },
        
         {
            id: 40,
            playerName: "AB de Villiers",
            from: "RCB",
            price: "6.50 Cr",
            isPlaying: false,
            championshipsWon: 3,
            description: "Wicketkeeper batsman",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RCB-png-logo-2020.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/233.png"
        },
         {
            id: 41,
            playerName: "Adam Zampa",
            from: "RCB",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Bowler",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RCB-png-logo-2020.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/958.png"
        },
         {
            id: 42,
            playerName: "Devdutt Padikkal",
            from: "RCB",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Batsman",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RCB-png-logo-2020.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/5430.png"
        },
         {
            id: 43,
            playerName: "Kane Richardson",
            from: "RCB",
            price: "6.50 Cr",
            isPlaying: true,
            championshipsWon: 3,
            description: "Bowler",
            logo:"https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RCB-png-logo-2020.png?quality=100&f=auto",
            photo:"https://static.iplt20.com/players/284/798.png"
        },
    
    ]

    const teamCardsData = [
        {
            id : 1,
            fullName: "Royal Challengers Bangalore",
            key: "RCB",
            championshipsWon: 3,
            teamIcon: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RCB-png-logo-2020.png?quality=100&f=auto",
            playerCount : 11,
            topBatsMan : "Virat Kohli",
            topBowler : "Adam Zampa"
        },
        {
            id : 2,
            fullName: "Mumbai Indians",
            key: "MI",
            championshipsWon: 5,
            teamIcon: "https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
            playerCount : 11,
            topBatsMan : "Rohit Sharma",
            topBowler : "Jasprit Bumrah",
           
        },
        {
            id : 3,
            fullName: "Rajasthan Royals",
            key: "RR",
            championshipsWon: 6,
            teamIcon: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/RR-Logo.png?quality=100&f=auto",
            playerCount : 11,
            topBatsMan : "Sanju Samson",
            topBowler : "Jaydev Unadkat"
        },
        {
            id : 4,
            fullName: "Delhi Capitals",
            key: "DC",
            championshipsWon: 8,
            teamIcon: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/09/Delhi-Capital-_Logo.png?quality=100&f=auto",
            playerCount : 11,
            topBatsMan : "Rishabh Pant",
            topBowler : "Amit Mishra"
        },
        {
            id : 5,
            fullName: "Chennai Super Kings",
            key: "CSK",
            championshipsWon: 3,
            teamIcon: "https://www.pngall.com/wp-content/uploads/2017/04/Chennai-Super-Kings-Logo-PNG.png",
            playerCount : 11,
            topBatsMan : "MS Dhoni",
            topBowler : "Deepak Chahar"
        },
    ]

    const teamSmallImages = [
        "https://cdn3.vectorstock.com/i/thumb-large/68/47/cricket-championship-logo-vector-20066847.jpg" , 

        "https://cdn1.vectorstock.com/i/thumb-large/46/50/logo-for-cricket-sport-vector-34334650.jpg",

        "https://cdn5.vectorstock.com/i/thumb-large/45/24/logo-for-cricket-tournament-vector-27374524.jpg",
         
        "https://cdn5.vectorstock.com/i/thumb-large/53/39/cricket-vintage-logo-emblem-vector-17085339.jpg",

        "https://cdn1.vectorstock.com/i/thumb-large/20/05/cricket-logo-with-cross-bat-ball-and-field-modern-vector-33172005.jpg"
    ]

    const avatarSmallImages = [
        "https://image.flaticon.com/icons/png/512/168/168721.png" , 
        
        "https://image.flaticon.com/icons/png/512/168/168724.png",

        "https://image.flaticon.com/icons/png/512/168/168732.png",

        "https://image.flaticon.com/icons/png/512/168/168726.png",

        "https://image.flaticon.com/icons/png/512/168/168733.png"
    ]
    
    let playerData;
    const rawData = localStorage.getItem("playerData")
    if(rawData){
        playerData = JSON.parse(rawData)
    }else{
        localStorage.setItem("playerData" , JSON.stringify(dataArr))
        playerData = JSON.parse(localStorage.getItem("playerData"))
        console.log("Data created")
    }


    let teamData;
    const rawteamData = localStorage.getItem("teamData")
    if(rawteamData){
        teamData = JSON.parse(rawteamData)
    }else{
        localStorage.setItem("teamData" , JSON.stringify(teamCardsData))
        teamData = JSON.parse(localStorage.getItem("teamData"))
        console.log("Data created")
    }
    
    //localStorage.setItem("teamData" , JSON.stringify(teamCardsData))


    

    const openPlayerDetailsPage = (id) =>{
        location.href = `./Player Details Page/teamDetails.html?${id}`
    }
    const openTeamDetailsPage = (id) =>{
        location.href = `./Team Details Pages/details.html?${id}`
    }


   
    const createTeamCards = (teamData) =>{
        $("#team-cards-wrapper").empty();
        teamData.map((item)=>{
        const {id, fullName, key, championshipsWon, teamIcon, playerCount, topBatsMan, topBowler} = item
        let teamCards = $("<div>").prop({
            class : "team-cards",
        })
        let imageWrapper = $("<div>").prop({
            class : "team-card-left-div"
        })
        let image = $("<img>").prop({
            src : teamIcon,
            alt : key
        })
        imageWrapper.append(image)
        let infoWrapper = $("<div>").prop({
            class : "team-card-right-div"
        })
        infoWrapper.append(
             $("<h3>").html(`<span class="teamName-team-card">${fullName}</span> `) , 
             $(`<h3 id="championshipText" class="champWon-team-card">`).html(`Championship won: <span id="championshipCount" >${championshipsWon}</span>  `) , 
         )
         teamCards.append(imageWrapper , infoWrapper)
         teamCards.click(()=>openTeamDetailsPage(id))
         $("#team-cards-wrapper").append(teamCards)
         //console.log("add card Called")

    })
    }

    const createHomePageCards = (playerData) =>{
         $("#player-cards-wrapper").empty();
        playerData.map((item)=>{
        const {championshipsWon , description , from , id , isPlaying , logo , photo , playerName , price} = item
        const status = isPlaying ? "Playing" : "On-bench"
        let playerCards = $("<div>").prop({
            class : "player-cards",
        })
        let imageWrapper = $("<div>").prop({
            class : "left-div-cards"
        })
        let image = $("<img>").prop({
            src : photo,
            alt : playerName
        })
        imageWrapper.append(image)
        let infoWrapper = $("<div>").prop({
            class : "right-div-cards"
        })
         infoWrapper.append(
             $("<h3>").html(`<span id="playerNameText">${playerName}</span> `) , 
             $("<h3>").html(`Team: <span>${from}</span>  `) , 
             $("<h3>").html(`Price: <span>${price}</span>  `) , 
             $("<h3>").html(`Status: <span>${status}</span>  `) , 
             $("<h3>").html(`Role: <span>${description}</span> `) , 
         )
         playerCards.append(imageWrapper , infoWrapper)
         playerCards.click(()=>openPlayerDetailsPage(id))
         $("#player-cards-wrapper").append(playerCards)
         //console.log("add card Called")

    })
    }
    //const rawTeamData = JSON.parse(localStorage.getItem("teamData"))
    createTeamCards(teamData)
    createHomePageCards(playerData)
    let avatarPos = 0;
    let teamPos = 0;

    const createAvatarImages = () =>{
        $("#avatarImagesWrapper").empty()
        avatarSmallImages.map((item , pos)=>{
            let image = $("<img>").prop({src: item, id:`aid${pos}` , class:"small-images-popup-avatar"})
            image.click(()=>{
                $(".small-images-popup-avatar").removeClass("small-images-popup-avatar-active")
                $(`#aid${pos}`).addClass("small-images-popup-avatar-active")
                console.log("Image clicked")
                avatarPos = pos
            })
            $("#avatarImagesWrapper").append($("<div>").append(image))
        })
        
    }
    const createTeamImages = () =>{
         $("#teamImagesWrapper").empty()
        teamSmallImages.map((item , pos)=>{
            let image = $("<img>").prop({src: item , id:`tid${pos}` , class:"small-images-popup-team"})
            image.click(()=>{
                $(".small-images-popup-team").removeClass("small-images-popup-team-active")
                $(`#tid${pos}`).addClass("small-images-popup-team-active")
                console.log("Image clicked")
                teamPos = pos;
            })
            $("#teamImagesWrapper").append($("<div>").append(image))
        })
        
    }


    $("#searchBtn").click(()=>{
        const value = ($("#serchBox").val()).toString().toUpperCase();
        if(value.trim().length > 0){
            const searchedData = playerData.filter((item)=>{
                const teamName = item.from
                if(teamName == value.trim()){
                    return true
                }else{
                    return false
                }
            })
            //console.log(searchedData)
            createHomePageCards(searchedData)

            const searchedTeamData = teamData.filter((item)=>{
                const teamName = item.key
                if(teamName == value.trim()){
                    return true
                }else{
                    return false
                }
            })
            //console.log(searchedData)
            createHomePageCards(searchedData)
            createTeamCards(searchedTeamData)

        }
        
        //$("#serchBox").val("")
    })

    $("#clearBtn").click(()=>{
        createHomePageCards(playerData)
        createTeamCards(teamData)
         $("#serchBox").val("")
    })

    $("#addNewPlayer-Btn").click(()=>{
        // $("#header-cricket").removeClass("header-fixed")
        // $("#header-cricket").addClass("header-relative")
        $(".overlay").addClass("overlay-visible")
        createAvatarImages()
        createTeamImages()
        $(`#aid${0}`).addClass("small-images-popup-avatar-active")
        $(`#tid${0}`).addClass("small-images-popup-team-active")
    })

    $("#closeIcon").click(()=>{
        $(".overlay").removeClass("overlay-visible")
        $("#popupalert").css("visibility" , "hidden")
    })

    

    //CLOSE POPUP BY CLICKING ADD PLAYER BUTTON

    const addPlayerDataToStorage = () =>{
        let pName = $("#popup-player-name").val()
        let tName = $("#popup-team-name").val()
        let tPrice = $("#popup-price-name").val()
        let tPlayerCount = $("#popup-player-count").val()
        let tTopBatsman = $("#popup-topBatsman-name").val()
        let tTopBowler = $("#popup-topBowler-name").val()
        let tisplaying = $('#playingstatus').find(":selected").text()
        let tRole = $('#role').find(":selected").text()
        let playerListData = JSON.parse(window.localStorage.getItem("playerData"));
        let teamListData = JSON.parse(window.localStorage.getItem("teamData"));
        let obj = {
            championshipsWon: tPlayerCount/2,
            description: tRole,
            from: tName.trim().toUpperCase(),
            id: playerListData.length + 1 ,
            isPlaying: (tisplaying === "Playing") ? true: false ,
            logo: teamSmallImages[teamPos],
            photo: avatarSmallImages[avatarPos],
            playerName: pName,
            price: tPrice
        }
        let teamObj = {
            championshipsWon: parseInt(tPlayerCount/2),
            fullName: tName.trim().toUpperCase(),
            id: teamListData.length + 1 ,
            key: tName.trim().toUpperCase(),
            playerCount: tPlayerCount,
            teamIcon: teamSmallImages[teamPos],
            topBatsMan: tTopBatsman,
            topBowler: tTopBowler
           
        }
        if(pName.trim().length >0 && tName.trim().length>0 && tPrice.trim().length>0 && tPlayerCount > 0  && tTopBatsman.trim().length>0 && tTopBowler.trim().length >0 && tisplaying != "--Select--" && tRole != "--Select--"){
        
            $("#popup-player-name").val("")
            $("#popup-team-name").val("")
            $("#popup-price-name").val("")
            $("#popup-player-count").val("")
            $("#popup-topBatsman-name").val("")
            $("#popup-topBowler-name").val("")
            $('#playingstatus').val("--Select--")
            $('#role').val("--Select--")
            $(".overlay").removeClass("overlay-visible")
            let arrData = [obj].concat(playerListData)
            window.localStorage.setItem("playerData",JSON.stringify(arrData)
            );
            let newData = JSON.parse(window.localStorage.getItem("playerData"))
            createHomePageCards(newData)
            //console.log(teamObj.key)
            let isMatched = false;
            for(let i=0;i<teamListData.length ;i++){
                if(teamListData[i].key == teamObj.key){
                    isMatched = true;
                    break;
                }else{
                    isMatched = false;
                } 
            }
           
            if(!isMatched){
                console.log("key not matched!")
                let teamArr = [teamObj].concat(teamListData)
                window.localStorage.setItem("teamData" , JSON.stringify(teamArr))
                let newteamData = JSON.parse(window.localStorage.getItem("teamData"))
                createTeamCards(newteamData)
            }else{
                console.log("key matched!")
            }
          
            $("#popupalert").css("visibility" , "hidden")
        }else{
            $("#popupalert").css("visibility" , "visible")
        }
        
        
    }
    $("#add-player-btn-popup").click(()=>{
         addPlayerDataToStorage()
    })

    

    

})