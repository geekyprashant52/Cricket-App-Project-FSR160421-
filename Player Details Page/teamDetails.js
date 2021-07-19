$(document).ready(()=>{
    console.log("team details script loaded!");

    const queryStr = window.location.search;
    const id = queryStr.toString().substring(1, queryStr.length);
    //console.log(id)
    const rawPlayerData = JSON.parse(localStorage.getItem("playerData"))
    const playerData = rawPlayerData.filter((item)=>{
        if(item.id == id){
            return true
        }else{
            return false
        }
    })
    console.log(rawPlayerData)
    
       

        const {championshipsWon , description , from  , isPlaying , logo , photo , playerName , price} = playerData[0]
        
        $("#playerImg").prop({
            src: photo
        })
        $("#playerName").html(playerName)
        $("#teamName").html(from)
        $("#playerPrice").html(price)
        $("#playerStatus").html(isPlaying ? "Playing" : "Not-playing")
        $("#playerRole").html(description)
    

   
    
})