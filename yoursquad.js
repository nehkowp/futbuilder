document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const nameclub = urlParams.get('nameclub');
    const content = decodeURIComponent(urlParams.get('content'));    
    

    function fillRealData(nameclub){
        console.log(nameclub);
        Papa.parse("./assets/teams-squad-builder-final.csv", {
          download: true,
          header: true,
          complete: function(results) {
              for (let i = 0; i < results.data.length; i++) {
                  const row = results.data[i];
                  if (row["team_name"] === nameclub) {
                    statsReal = document.querySelector(".irl-stats")
                    statsReal.querySelector(".gen").textContent = row["overall"];
                    statsReal.querySelector(".def").textContent = row["attack"];
                    statsReal.querySelector(".mil").textContent = row["midfield"];
                    statsReal.querySelector(".att").textContent = row["defence"];
                    break; 
                  }
              }
          }
      });
    }

    fillRealData(nameclub);
    document.querySelector('.field').innerHTML = content;


    const images = document.querySelectorAll('.card-player.selected');
    let moy = 0;
    let moyDefense = 0;
    let moyMilieu = 0;
    let moyAttaque = 0;
    let countDefense = 0;
    let countMilieu = 0;
    let countAttaque = 0;
    let count = 0;
    
    images.forEach(image => {
        imageurl = image.querySelector('img').src;
        const id = imageurl.match(/\/(\d+)\.png$/)[1];
        Papa.parse("./assets/players-2024.csv", {
            download: true,
            header: true,
            complete: function(results) {
                for (let i = 0; i < results.data.length; i++) {
                    const row = results.data[i];
                    if (row["player_id"] === id) {
                        moy += parseInt(row["overall"]);
                        if (countDefense < 4) {
                            moyDefense += parseInt(row["overall"])
                            countDefense++;
                        } else if (countMilieu < 4) {
                            moyMilieu += parseInt(row["overall"])
                            countMilieu++;
                        } else if (countAttaque < 3) {
                            moyAttaque += parseInt(row["overall"])
                            countAttaque++;
                        }
                        count++;
                        break; 
                    }
                }
                if (count === images.length) {
                    statsYour = document.querySelector(".your-stats")

                    statsYour.querySelector(".gen").textContent = parseInt(moy/11);
                    statsYour.querySelector(".def").textContent = parseInt(moyAttaque/3);
                    statsYour.querySelector(".mil").textContent = parseInt(moyMilieu/4);
                    statsYour.querySelector(".att").textContent = parseInt(moyDefense/4);
                    
                    
                    let moyreal = document.querySelector(".irl-stats").querySelector(".gen").textContent;
                    const coachDiv = document.querySelector('.coach');
                    const newImage = document.createElement('img');
                    if(parseInt(moyreal) <  parseInt(moy/11)){
                        newImage.src = './assets/jose-mourinho.gif';
                        coachDiv.id="mourinho"

                    }else{
                        if(parseInt(moyreal) ==  parseInt(moy/11)){
                            newImage.src = './assets/pepgif.gif';
                            coachDiv.id="pep"
                        }else{
                        newImage.src = './assets/domenech2010.jpg';
                        coachDiv.id="domenech"
                        }
                    }
                    coachDiv.appendChild(newImage);

                }
            }
        });
    });

})