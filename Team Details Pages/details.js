$(document).ready(()=>{
    console.log("details script loaded!");

    const queryStr = window.location.search;
    const id = queryStr.toString().substring(1, queryStr.length);
    //console.log(id)
    const rawTeamData = JSON.parse(localStorage.getItem("teamData"))
    const teamData = rawTeamData.filter((item)=>{
        if(item.id == id){
            return true
        }else{
            return false
        }
    })
    console.log(teamData)
    
       

        const {championshipsWon, fullName, key, playerCount, teamIcon, topBatsMan, topBowler} = teamData[0]
        
        $("#teamImg").prop({
            src: teamIcon
        })
        $("#teamName").html(fullName)
        $("#playerCount").html(playerCount)
        $("#batsman").html(topBatsMan)
        $("#bowler").html(topBowler)
        $("#championCount").html(championshipsWon)
    

   
    
})