document.addEventListener('DOMContentLoaded', function() {
  let imagesLoaded = false;
  let selectClub = document.querySelector('.select-club');
  let radioButtons = selectClub.querySelectorAll('input[type="radio"]');
  const searchMenu = document.getElementById("search-menu");
  const cardsPlayerShop = document.querySelector(".players-container");
  const forwards = document.querySelector(".forwards");
  const midfields = document.querySelector(".midfields");
  const defenders =  document.querySelector(".defenders");
  const goalkeeper =  document.querySelector(".goalkeeper");
  const cardsContainer = document.querySelector(".field");
  const select_club = document.querySelector('.select-club');
  const leagueButtons = document.querySelectorAll('.select-league input[name="league-name"]');
 
  placementPlayer();
  shopPlayer();
  chooseShop();
  fillSelect(document.querySelector('.select-league input[name="league-name"]:checked').dataset.league);
  showBudget(document.querySelector('.select-club input[name="club-name"]:checked').dataset.club);
  changeClub()
  updateRadiosB();    
  if (!imagesLoaded) {
      loadImages();
      imagesLoaded = true; 
  }
  sendData();


async function loadImages() {
    try {
      const men_folder = "./assets/imgmen/";   
      const women_folder = "./assets/imgwomen/";

      $.ajax({
          url: men_folder,
          success: function(data) {
              const men_container = $('.players-container-men');
              const imageMenLinks = $(data).find("a[href$='.png']").map(function() {
                  return $(this).attr("href");
              }).get();
              $.each(imageMenLinks, function(i, fileName) {
                  const imagePath = men_folder + fileName;
                  const card_player = $("<div>").addClass("card-player").append($("<img>").attr("src", imagePath.replace(men_folder, "")));
                  const card_box = $("<div>").addClass("card-box");
                  card_box.append(card_player);
                  men_container.append(card_box);
              });  
          }
      });

      $.ajax({
        url: women_folder,
        success: function(data) {
          const women_container = $('.players-container-women');
          const imageWomenLinks = $(data).find("a[href$='.png']").map(function() {
              return $(this).attr("href");
          }).get();
          $.each(imageWomenLinks, function(i, fileName) {
              const imagePath = women_folder + fileName;
              const card_player = $("<div>").addClass("card-player").append($("<img>").attr("src", imagePath.replace(women_folder, "")));
              const card_box = $("<div>").addClass("card-box");
              
              card_box.append(card_player);                
              women_container.append(card_box);
          });
        }
    });
    
  } catch (error) {
      console.error("An error occurred:", error);
  }
  }
function resetShop(){
    const children = cardsPlayerShop.children;
              for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (!child.classList.contains("none")) {
                  child.childNodes.forEach(child => {
                    if (child.firstChild && child.firstChild.classList.contains("card-player")) {
                          child.firstChild.classList.remove("choosed");
                    }
                });
                break;
                }
              }
  }
function createCard(parentElement, cardId) {
      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.id = "card_click";
      newCard.draggable = true;
      newCard.innerHTML = `
          <div class="hexagon">
              <span class="hex">&#x2B22;</span>
              <div class="plus-sign">
                  <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http
                  :
                  **www.w3.org/2000/svg" xmlns:xlink="http
                  :
                  **www.w3.org/1999/xlink" viewBox="0 0 94.49 94.49" xml:space="preserve" stroke="#ffffff" width="24" height="24">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                          <g>
                              <path d="M92.49,35.284H59.206V2c0-1.104-0.896-2-2-2H37.284c-1.104,0-2,0.896-2,2v33.284H2c-1.104,0-2,0.896-2,2v19.922 c0,1.104,0.896,2,2,2h33.284V92.49c0,1.104,0.896,2,2,2h19.922c1.104,0,2-0.896,2-2V59.206H92.49c1.104,0,2-0.896,2-2V37.284 C94.49,36.18,93.596,35.284,92.49,35.284z"></path>
                          </g>
                      </g>
                  </svg>
              </div>
          </div>
      `;

      const card_box = $("<div>").addClass("card-box");
      card_box.append(newCard)
      $(parentElement).append(card_box);
    }
function removePlayer(){
    while (forwards.lastElementChild) {
      forwards.removeChild(forwards.lastElementChild);
    }
    while (midfields.lastElementChild) {
      midfields.removeChild(midfields.lastElementChild);
    }
    while (defenders.lastElementChild) {
      defenders.removeChild(defenders.lastElementChild);
    }
    while (goalkeeper.lastElementChild) {
      goalkeeper.removeChild(goalkeeper.lastElementChild);
    }
  }
function placementPlayer() {
    
    createCard(forwards,1);
    createCard(forwards,2);
    createCard(forwards,3);
    createCard(midfields,4);
    createCard(midfields,5);
    createCard(midfields,6);
    createCard(defenders,7);
    createCard(defenders,8);
    createCard(defenders,9);
    createCard(defenders,10);
    createCard(goalkeeper,11);
    onAddPlayer();


  var compo1 = document.getElementById("compo-1");
  compo1.addEventListener("change", () => {
      if (compo1.checked) {
        removePlayer();
        createCard(forwards,1);
        createCard(forwards,2);
        createCard(forwards,3);
        createCard(midfields,4);
        createCard(midfields,5);
        createCard(midfields,6);
        createCard(defenders,7);
        createCard(defenders,8);
        createCard(defenders,9);
        createCard(defenders,10);
        createCard(goalkeeper,11);
        onAddPlayer();
        resetShop();
        showBudget(document.querySelector('.select-club input[name="club-name"]:checked').dataset.club);

      }
  });  

    var compo2 = document.getElementById("compo-2");
    compo2.addEventListener("change", () => {
        if (compo2.checked) {
          removePlayer();
          createCard(forwards,1);
          createCard(forwards,2);
          createCard(midfields,3);
          createCard(midfields,4);
          createCard(midfields,5);
          createCard(defenders,6);
          createCard(defenders,7);
          createCard(defenders,8);
          createCard(defenders,9);
          createCard(defenders,10);
          createCard(goalkeeper,11);
          onAddPlayer();
          resetShop();
          showBudget(document.querySelector('.select-club input[name="club-name"]:checked').dataset.club);

        }
    });
    var compo3 = document.getElementById("compo-3");
    compo3.addEventListener("change", () => {
        if (compo3.checked) {
          removePlayer();
          createCard(forwards,1);
          createCard(forwards,2);
          createCard(forwards,3);
          createCard(midfields,4);
          createCard(midfields,5);
          createCard(midfields,6);
          createCard(midfields,7);
          createCard(defenders,8);
          createCard(defenders,9);
          createCard(defenders,10);
          createCard(goalkeeper,11);
          onAddPlayer();
          resetShop();
          showBudget(document.querySelector('.select-club input[name="club-name"]:checked').dataset.club);

        }
    });

    var compo4 = document.getElementById("compo-4");
    compo4.addEventListener("change", () => {
        if (compo4.checked) {
          removePlayer();
          createCard(forwards,1);
          createCard(forwards,2);
          createCard(midfields,3);
          createCard(midfields,4);
          createCard(midfields,5);
          createCard(midfields,6);
          createCard(defenders,7);
          createCard(defenders,8);
          createCard(defenders,9);
          createCard(defenders,10);
          createCard(goalkeeper,11);
          onAddPlayer();
          resetShop();
          showBudget(document.querySelector('.select-club input[name="club-name"]:checked').dataset.club);
        }
    });
  }
function updateBudget(value_player,mode_update){
    const budgetDiv = document.querySelector(".budget-club");
    const budgetText = budgetDiv.textContent;
    let budgetInteger = parseInt(budgetText.replace(/\D/g, ''), 10);
    let newbudget;
    
    if(mode_update == 1){
      newbudget =  budgetInteger - Math.round(value_player);
    }else{
      newbudget =  budgetInteger + Math.round(value_player);
    }
    budgetDiv.textContent = newbudget+ " $";
  }
function statsJoueurs(imageUrl,mode_update){
    const id = imageUrl.match(/\/(\d+)\.png$/)[1];
    Papa.parse("./assets/players-2024.csv", {
      download: true,
      header: true,
      complete: function(results) {
        
          for (let i = 0; i < results.data.length; i++) {
              const row = results.data[i];
              if (row["player_id"] === id) {  
                  updateBudget(row["value_eur"],mode_update) 
                  break; 
              }
          }
      }
    });

  }
function shopPlayer(){
    cardsPlayerShop.addEventListener("click", (e) => {
        const player_card = e.target.closest(".card-player");
  
        if (player_card) {
            playerChoice = true;
            if(isClickaddPlayer && !(player_card.classList.contains("choosed"))){
              const send_player_card = player_card.cloneNode(true);
              send_player_card.classList.add("selected");
              player_card.classList.add("choosed");
              const cardId = cardSelected.firstChild.id;
              send_player_card.id = cardId;
              send_player_card.setAttribute('draggable', true);
                
              let image_url = send_player_card.querySelector('img').src;
              statsJoueurs(image_url,1);

              const card_box_send = $("<div>").addClass("card-box");
              card_box_send.append(send_player_card);
              
              $(cardSelected).replaceWith(card_box_send);
              searchMenu.classList.remove("visible");
              cardsContainer.classList.remove("none");

              document.querySelector(".menu").classList.remove("none");
              document.querySelector(".container").classList.remove("add");
              document.querySelectorAll(".card-box").forEach(cardBox => {
                cardBox.classList.remove('shop');
              });
            }  
        }
    });
  }
function chooseShop(){
    var checkbox_men = document.getElementById("male");
    checkbox_men.addEventListener("change", () => {
        if (checkbox_men.checked) {
          document.querySelector(".players-container-women").classList.add("none");
          document.querySelector(".players-container-men").classList.remove("none");

        }
    });

    var checkbox_women = document.getElementById("female");
    checkbox_women.addEventListener("change", () => {
        if (checkbox_women.checked) {
          document.querySelector(".players-container-women").classList.remove("none");
          document.querySelector(".players-container-men").classList.add("none");
        }
    });
  }
function fillSelect(league) {
    if (select_club.children.length !== 0) {
      
      
      while (select_club.firstChild) {
          select_club.removeChild(select_club.firstChild);
      }
  }


      const clubsByLeague = {
          'Ligue 1': ['Paris Saint Germain', 'Olympique de Marseille', 'Lille', 'Olympique Lyonnais', 'Rennes', 'Lens', 'Monaco', 'Nice', 'Montpellier', 'Nantes', 'Lorient', 'Strasbourg', 'Stade de Reims', 'Brest', 'Metz', 'Clermont', 'Toulouse'],
          'La Liga': ['Real Madrid', 'FC Barcelona', 'Atlético Madrid', 'Sevilla', 'Real Sociedad', 'Villarreal', 'Real Betis', 'Valencia', 'Athletic Club', 'Celta de Vigo', 'Getafe', 'Osasuna', 'Mallorca', 'Rayo Vallecano', 'Granada', 'Almería'],
          'Bundesliga': ['FC Bayern München', 'Borussia Dortmund', 'RB Leipzig', 'Bayer 04 Leverkusen', 'Borussia Mönchengladbach', 'VfL Wolfsburg', 'Eintracht Frankfurt', 'SC Freiburg', 'VfB Stuttgart', 'FC Augsburg', 'Hoffenheim', 'Hertha BSC', '1. FC Union Berlin', 'Arminia Bielefeld', '1. FC Köln', 'Bochum', 'Mainz 05', 'Greuther Fürth'],
          'Premier League': ['Manchester City', 'Liverpool', 'Chelsea', 'Manchester United', 'Tottenham Hotspur', 'Arsenal', 'Leicester City', 'West Ham United', 'Wolverhampton Wanderers', 'Everton', 'Crystal Palace', 'Southampton', 'Brighton & Hove Albion', 'Leeds United', 'Newcastle United', 'Brentford', 'Watford', 'Burnley', 'Aston Villa', 'Norwich City'],
          'Serie A': ['Inter', 'Juventus', 'Milan', 'Napoli', 'Lazio', 'Atalanta', 'Roma', 'Fiorentina', 'Sassuolo', 'Sampdoria', 'Udinese', 'Torino', 'Bologna', 'Hellas Verona', 'Spezia', 'Empoli', 'Cagliari', 'Venezia', 'Salernitana', 'Genoa']
      };

      
      const clubs = clubsByLeague[league];
      
      clubs.forEach((club, index) => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'club-name';
        input.id = 'opt-club' + (index + 1);
        input.dataset.club = club;
        input.classList.add('selectopt');
        if (index === 0){
          input.checked = true;
        }
        const label = document.createElement('label');
        label.htmlFor = 'opt-club' + (index + 1);
        label.textContent = club;
        label.classList.add('option');

        select_club.appendChild(input);
        select_club.appendChild(label);
    });
  }
function changeClub(){
  leagueButtons.forEach(button => {
      button.addEventListener('change', function() {
          console.log("test");
          const selectedLeague = this.dataset.league;
          
          fillSelect(selectedLeague);
          resetShop();
          showBudget(document.querySelector('.select-club input[name="club-name"]:checked').dataset.club);
          selectClub = document.querySelector('.select-club');
          radioButtons = selectClub.querySelectorAll('input[type="radio"]');
          updateRadiosB();
          removePlayer();
          placementPlayer();
      });
  });
  }
function updateRadiosB(){
    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('change', () => {
            
            showBudget(document.querySelector('.select-club input[name="club-name"]:checked').dataset.club);
            updateRadiosB();
            removePlayer();
            resetShop();
            placementPlayer();
  
          });
    });
  }
function showBudget(club){
    let selectedClub = club;
  
      Papa.parse("./assets/teams-squad-builder-final.csv", {
          download: true,
          header: true, 
          complete: function(results) {
              var data = results.data; 
              var clubName = selectedClub;
              var clubData = data.find(function(item) {
                  return item.team_name === clubName;
              });
      
              if (clubData) {
                  var clubNetWorth = Math.round(clubData.club_worth_eur);
                  var budgetClubDiv = document.querySelector('.budget-club');
  
                  
                  
                  budgetClubDiv.textContent = (clubNetWorth/5)+ " $";
  
              } else {
                  console.log("Le club " + clubName + " n'a pas été trouvé dans les données.");
              }
          }
      });
  }
function sendData(){
const link = document.getElementById('send-data');

        
        link.addEventListener('click', function(event) {
            
            if(document.querySelectorAll(".card-player.selected").length == 11){
              event.preventDefault();

         
              const fieldContent = document.querySelector('.field').innerHTML;
              const encodedContent = encodeURIComponent(fieldContent);
              const nameclub = document.querySelector('.select-club input[name="club-name"]:checked').dataset.club
              const encodedNameClub = encodeURIComponent(nameclub);
  
              const destinationUrl = `yoursquad.html?content=${encodedContent}&nameclub=${encodedNameClub}`;
  
  
              window.location.href = destinationUrl;
            }
        });
  }
function onAddPlayer(){
          const cardsContainer = document.querySelector(".field");
          const addPlayer = document.querySelectorAll(".hexagon");
          isClickaddPlayer = false
          cardsContainer.addEventListener("click", (e) => {
            const target = e.target.closest(".card-box");
            const alreadytarget = e.target.closest(".card-player.selected");
              addPlayer.forEach(function(addPlayer) {
                if (e.target === addPlayer || addPlayer.contains(e.target)) {
                      isClickaddPlayer = true;
                      cardSelected = target;
                      document.querySelector(".menu").classList.add("none");
                      document.querySelector(".container").classList.add("add");
                      document.querySelectorAll(".card-box").forEach(cardBox => {
                        cardBox.classList.add('shop');
                    });
        
                      searchMenu.classList.add("visible");
                      cardsContainer.classList.add("none");
        
                }
              })
            });
  }
})









/*
function ajouterOnClick() {
  let cards = document.getElementsByClassName("card-box");
  for (let i = 0;i<cards.length;i++){
    cards[i].addEventListener('click',swap);
    cards[i].addEventListener('dragstart',drag);
    cards[i].addEventListener('dragover',allowDrop);
    cards[i].addEventListener('drop',drop);
    cards[i].addEventListener("dragend",dropAnnule);
  }
}

function selectCard(e) {
  
  let card = e.currentTarget;
  
  if (card.classList.contains("card")) {
    let anciennecard = document.getElementById("card_click");
    if (anciennecard) anciennecard.id = ""

    if (card.id == "card_click") {
      card.id = ""
    } else {
      card.id = "card_click"
    }
  }
}

function swap(e) {

  let card_click = document.getElementById("card_click");
  let card = e.currentTarget;

  if (card_click == null) {
    selectCard(e);
    
  } else if (card.isEqualNode(card_click) && equipe.contains(card_click)) { 
    card.id = "";
    if (card.classList.contains("vide")) {
      card.parentNode.removeChild(card)
    } else {
      selection.prepend(card); 
      selection.removeChild(selection.lastChild);
    } 
     
  } else {
    
    let selection = card_click.parentNode;
    let divClick = card.parentNode;
    card.id = "";
    card_click.id = "";
    if (selection == divClick) {
      selectCard(e);
    } else {
      divClick.removeChild(card);
      card_click.classList.contains("vide") ? divClick.appendChild(card_click)  :  divClick.prepend(card_click);
      
      card.classList.contains("vide") ? selection.appendChild(card) : selection.prepend(card) ;
    }
    
    
  }
  let positions = document.getElementsByClassName("card-box");
  for (let i=0;i<positions.length;i++) {
    if (positions[i].children.length==0) positions[i].appendChild(creercardVide());
  }
  ajouterOnClick();

}


ajouterOnClick()






function drag(e) {
  card_click = document.getElementById("card_click");
  if (card_click !=null) card_click.id = "";
  e.currentTarget.id = "card_click";
}

function drop(e) {
  card_click = document.getElementById("card_click");
  positionner(e);
}

function allowDrop(e) {
  e.preventDefault(); 
}

function dropAnnule(e) {
  card_click = document.getElementById("card_click");
  if (card_click !=null) card_click.id = "";

}
*/ 