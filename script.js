document.addEventListener('DOMContentLoaded', function() {
  let imagesLoaded = false;
  const select_club = document.querySelector('.select-club');
  const searchMenu = document.getElementById("search-menu");
  const cardsPlayerShop = document.querySelector(".players-container");
  const forwards = document.querySelector(".forwards");
  const midfields = document.querySelector(".midfields");
  const defenders =  document.querySelector(".defenders");
  const goalkeeper =  document.querySelector(".goalkeeper");
  const cardsContainer = document.querySelector(".field");
  const leagueButtons = document.querySelectorAll('.select-league input[name="league-name"]');
  var inp = document.getElementById("searcharea");
  var players_men_names =['Kylian Mbappé Lottin', 'Erling Braut Haaland', 'Kevin De Bruyne', 'Lionel Andrés Messi Cuccittini', 'Karim Benzema', 'Robert Lewandowski', 'Thibaut Nicolas Marc Courtois', 'Harry Kane', 'Vinícius José Paixão de Oliveira Júnior', 'Alisson Ramsés Becker', 'Rodrigo Hernández Cascante', 'Rúben dos Santos Gato Alves Dias', 'Neymar da Silva Santos Júnior', 'Marc-André ter Stegen', 'Carlos Henrique Venancio Casimiro', 'Virgil van Dijk', 'Mohamed Salah Ghaly', 'Federico Santiago Valverde Dipetta', 'Victor James Osimhen', 'Ederson Santana de Moraes', 'Joshua Walter Kimmich', 'Antoine Griezmann', 'Jan Oblak', 'Bruno Miguel Borges Fernandes', 'Bernardo Mota Veiga de Carvalho e Silva', 'Martin Ødegaard', 'Frenkie de Jong', 'Gianluigi Donnarumma', 'Lautaro Javier Martínez', 'Gregor Kobel', 'Mike Maignan', 'Marcos Aoás Corrêa', 'Manuel Peter Neuer', 'Luka Modrić', '손흥민 孙兴慜', 'Jamal Musiala', 'Khvicha Kvaratskhelia', 'Pedro González López', 'Rafael Alexandre Conceição Leão', 'Jude Victor William Bellingham', 'Ronald Federico Araújo da Silva', 'Bukayo Saka', 'Matthijs de Ligt', 'Éder Gabriel Militão', 'Sandro Tonali', 'Nicolò Barella', 'Trent Alexander-Arnold', 'Christopher Nkunku', 'Ousmane Dembélé', 'Cristiano Ronaldo dos Santos Aveiro', 'Toni Kroos', 'Wojciech Tomasz Szczęsny', 'İlkay Gündoğan', 'Daniel Parejo Muñoz', 'Riyad Mahrez', 'Sadio Mané', 'João Pedro Cavaco Cancelo', 'Paulo Bruno Exequiel Dybala', "N'Golo Kanté", 'Andrew Robertson', 'Sergej Milinković-Savić', 'Rodrygo Silva de Goes', 'Florian Richard Wirtz', 'Theo Bernard François Hernández', 'Alessandro Bastoni', 'Philip Foden', 'Jules Koundé', 'Marcus Rashford', 'Diogo José Teixeira da Silva', 'Declan Rice', 'John Stones', 'Aymeric Laporte', 'André Onana', 'Kieran Trippier', 'Kevin Trapp', 'Ciro Immobile', 'Iago Aspas Juncal', 'Keylor Navas Gamboa', 'David Olatukunbo Alaba', 'Raphaël Varane', 'Damián Emiliano Martínez', 'Antonio Rüdiger', 'Jack Grealish', 'Hakan Çalhanoğlu', 'Leon Christoph Goretzka', 'Yassine Bounou', 'Thomas Partey', 'Domenico Berardi', 'Kingsley Junior Coman', 'Giovanni Di Lorenzo', 'Marcos Javier Acuña', 'Aurélien Tchouaméni', 'Ismaël Bennacer', 'Fikayo Tomori', 'Moussa Diaby', 'Gabriel Teodoro Martinelli Silva', 'Aaron Ramsdale', 'Randal Kolo Muani', 'Lisandro Martínez', 'Gleison Bremer Silva Nascimento', 'Bruno Guimarães Rodriguez Moura', 'Niklas Süle', 'Rúben Diogo da Silva Neves', 'Alejandro Remiro Gargallo', 'Gabriel dos Santos Magalhães', 'Achraf Hakimi Mouh', '김민재 金敏在', 'Reece James', 'Julian Brandt', 'Pierre-Emile Kordt Højbjerg', 'James Maddison', 'Lucas François Bernard Hernández Pi', 'Mikel Merino Zazón', 'Gabriel Fernando de Jesus', 'Raphael Dias Belloli', 'Federico Chiesa', 'Luis Fernando Díaz Marulanda', 'Thiago Emiliano da Silva', 'Yann Sommer', 'Péter Gulácsi', 'Kyle Walker', 'Thiago Alcântara do Nascimento', 'Thomas Müller', 'Chris Smalling', 'Romelu Lukaku Menama', 'Koen Casteels', 'Jorge Resurrección Merodio', 'Luis Alberto Romero Alconchel', 'Kalidou Koulibaly', 'Memphis Depay', 'Nick Pope', 'Serge David Gnabry', 'Matthias Ginter', 'Yannick Ferreira Carrasco', 'Fábio Henrique Tavares', 'Adrien Rabiot', 'Alejandro Grimaldo García', 'Rodrigo Javier De Paul', 'Stanislav Lobotka', 'Leroy Aziz Sané', 'Marcos Llorente Moreno', 'Milan Škriniar', 'Pablo Martín Páez Gavira', 'William Alain André Gabriel Saliba', 'Enzo Jeremías Fernández', 'Alphonso Boyle Davies', 'Cody Mathès Gakpo', 'Dušan Vlahović', 'Nico Schlotterbeck', 'Jeremie Agyekum Frimpong', 'Daniel Olmo Carvajal', 'Sven Botman', 'Unai Simón Mendibil', 'Pau Francisco Torres', 'Andreas Bødtker Christensen', 'José María Giménez de Vargas', 'Alex Meret', 'Gianluca Mancini', 'Konrad Laimer', 'Guido Rodríguez', 'Benjamin Pavard', 'André-Franck Zambo Anguissa', 'Lorenzo Pellegrini', 'João Maria Lobo Alves Palhinha Gonçalves', 'Mikel Oyarzabal Ugarte', 'Patrik Schick', 'Sergio Ramos García', 'Hugo Lloris', 'Mats Hummels', 'Edin Džeko', 'Ángel Fabián Di María Hernández', 'Marco Reus', 'Jordi Alba Ramos', 'Sergio Busquets i Burgos', 'Christian Dannemann Eriksen', 'Alexandre Lacazette', 'Wissam Ben Yedder', 'Francesco Acerbi', 'José Ignacio Fernández Iglesias', 'Álvaro Borja Morata Martín', 'Sergi Darder Moll', 'Raheem Sterling', 'Vilmos Tamás Orban', 'Luiz Frello Filho Jorge', 'Sébastien Haller', 'Luke Shaw', 'Gerard Moreno Balagueró', 'Emre Can', 'Filip Kostić', 'Jonas Hofmann', 'Piotr Sebastian Zieliński', 'Alessio Romagnoli', 'Marcelo Brozović', 'Rafael Alexandre Fernandes Ferreira da Silva', 'Nabil Fekir', 'Marco Asensio Willemsen', 'Borja Iglesias Quintás', 'Ronaldo Jailson Cabrais Petri', 'Eduardo Celmi Camavinga', 'Diogo Meireles Costa', 'Ferran Torres García', 'Joško Gvardiol', 'Darwin Gabriel Núñez Ribeiro', 'Robin Le Normand', 'Kai Lukas Havertz', 'Nuno Alexandre Tavares Mendes', 'Manuel Locatelli', 'Dayotchanculle Oswald Upamecano', 'Cristian Gabriel Romero', 'Jadon Sancho', 'Nahuel Molina Lucero', 'Dominik Szoboszlai', 'Orkun Kökçü', 'Ikoma Loïs Openda', 'Federico Dimarco', 'Rodrigo Bentancur Colmán', 'Noussair Mazraoui', 'Guglielmo Vicario', 'Pedro António Pereira Gonçalves', 'Viktor Tsygankov', 'Boulaye Dia', 'Jordan Pickford', 'Youri Tielemans', 'Enes Ünal', 'Lucas Torreira Di Pascua', 'Presnel Kimpembe', 'Franck Yannick Kessié', 'Donyell Malen', 'Alexis Mac Allister', 'Dominik Livaković', 'Timo Werner', 'Thomas Lemar', 'Joelinton Cassio Apolinário de Lira', 'David García Zubiría', 'Manuel Obafemi Akanji', 'Mario Hermoso Canseco', 'Youssef En-Nesyri', 'José Luis Mato Sanmartín', 'Olivier Giroud', 'Fernando Francisco Reges', 'Mario Götze', 'Nicolás Hernán Gonzalo Otamendi', 'Callum Wilson', 'Stefan de Vrij', 'Dušan Tadić', 'Anthony Lopes', 'Granit Xhaka', 'Roberto Firmino Barbosa de Oliveira', 'Íñigo Martínez Berridi', 'Stefan Savić', 'Daniel Carvajal Ramos', 'Mateo Kovačić', 'Raphaël Adelino José Guerreiro', 'Fabian Lukas Schär', 'Otávio Edmilson da Silva Monteiro', 'José Luís Gayà Peña', 'Mark Flekken', 'Vincenzo Grifo', 'Robert Andrich', 'João Mário Naval da Costa Eduardo', 'Ricardo Jorge da Luz Horta', 'Ángel Martín Correa', 'Seko Fofana', 'Jeremías Conan Ledesma', 'Mattia Zaccagni', 'Ivan Provedel', 'Ferland Mendy', 'Lucas Luciano Mantela Patrício', 'Josué Durval Chiamulera Vaz', 'Javier Galán Gil', 'Isaac Palazón Camacho', 'Édouard Mendy', 'Mehdi Taremi', 'Alejandro Balde Martínez', 'Ibrahima Konaté', 'João Félix Sequeira', 'Oihan Sancet Tirapu', 'Antony Matheus dos Santos', 'Alexander Isak', 'Samuel Chimerenka Chukwueze', 'Manuel Ugarte Ribeiro', 'Edmond Fayçal Tapsoba', 'Dejan Kulusevski', 'Davide Calabria', 'Ben Chilwell', 'Mason Mount', 'Xaver Schlager', 'Lucas Tolentino Coelho de Lima', 'Ibrahim Sangaré', 'Edson Omar Álvarez Velázquez', 'Nicolás Iván González', 'Pedro Antonio Porro Sauceda', 'Jonathan Christian David', 'Brice Samba', 'Kepa Arrizabalaga Revuelta', 'Odisseas Vlachodimos', 'Ademola Lookman', 'Norberto Bercique Gomes Betuncal', 'Bryan Cristante', 'Nathan Aké', 'Jonathan Tah', 'Allan Saint-Maximin', 'Malcom Filipe Silva de Oliveira', 'Ellyes Joris Skhiri', 'Giovani Lo Celso', 'Yeray Álvarez López', '鎌田 大地', 'Denzel Justus Morris Dumfries', 'Brais Méndez Portela', 'Arnaut Danjuma Adam Groeneveld', 'Martin Terrier', 'Almoatasembellah Ali Mohamed Al musrati', 'Kléper Laveran de Lima Ferreira', 'Francisco Guillermo Ochoa Magaña', 'Raúl Albiol Tortajada', 'Kasper Peter Schmeichel', 'Ivan Rakitić', 'Dries Mertens', 'Rui Pedro dos Santos Patrício', 'Etienne Capoue', 'Simon Thorup Kjær', 'Toby Albertine Maurits Alderweireld', 'Alexis Alejandro Sánchez Sánchez', 'Iker Muniain Goñi', 'Lukáš Hrádecký', 'Nemanja Matić', 'Bernd Leno', 'Henrikh Mkhitaryan', 'Sebastián Coates Nión', 'Lorenzo Insigne', 'Wilfried Zaha', 'Danilo Luiz da Silva', 'Lewis Dunk', 'Steven Berghuis', 'Danilo Luís Hélio Pereira', 'Geoffrey Edwin Kondogbia', 'Felipe Anderson Pereira Gomes', 'Mário Rui Silva Duarte', 'Arkadiusz Krystian Milik', 'Maximilian Arnold', 'Leandro Trossard', 'William Silva de Carvalho', 'Lucas Vázquez Iglesias', 'Frederico Rodrigues de Paula Santos', 'Gaëtan Laborde', 'Rui Tiago Dantas da Silva', 'Anderson Souza Conceição', 'Benjamin Bourigeaud', 'Gerónimo Rulli', 'Duván Esteban Zapata Banguera', 'Iñaki Williams Arthuer', 'Andrej Kramarić', 'Matteo Politano', 'Diego Carlos Santos Silva', 'Hirving Rodrigo Lozano Bahena', 'Fabián Ruiz Peña', 'Adryan Juliano Zonta Torres', 'Rosival Jailson Dourado Santos', 'Louri Adriano Bisesi Barbosa', 'Welington Kauê Dano Nascimento', 'Nailton Suzuki Ito', 'Marvin Oswaldo Rangel Azevedo', 'Miguel Ángel Almirón Rejala', 'Reinildo Isnard Mandava', 'Jonathan Clauss', 'Amir Rrahmani'];
  var players_women_names =['Alexia Putellas Segura', 'Aitana Bonmatí Conca', 'Caroline Graham Hansen', 'Samantha May Kerr', 'María Pilar León Cebrián', 'Alexandra Morgan Carrasco', 'Ada Martine Stolsmo Hegerberg', 'Kadidiatou Diani', 'Marie-Antoinette Oda Katoto', 'Patricia Guijarro Gutiérrez', 'Sophia Olivia Smith', 'Alexandra Popp', 'Débora Cristiane de Oliveira', 'Irene Paredes Hernández', 'Wéndèleine Thérèse Renard', 'Guro Reiten', 'Claudia Christiane Endler Mutinelli', 'Ewa Pajor', 'Lena Sophie Oberdorf', 'Fridolina Rolfö', 'Lucia Roberta Tough Bronze', 'Sandra Paños García-Villamil', 'Rosemary Kathleen Lavelle', 'Lina Maria Magull', 'Bethany Jane Mead', 'Selma Bacha', 'Onema Grace Geyoro', 'Lea Schüller', 'Lauren May Hemp', 'Mallory Diane Pugh', 'Sakina Karchaoui', 'Vivianne Miedema', 'Jill Jamie Roord', 'Mary Alexandra Earps', 'Cristiana Girelli', 'Jennifer Hermoso Fuentes', 'Ashley Elizabeth Marie Lawrence', 'Lindsey Michelle Horan', 'Kim Alison Little', 'Keira Fae Walsh', 'Ona Batlle Pascual', 'Kadeisha Buchanan', 'Leah Cathrine Williamson', 'Merle Frohms', 'Khadija Monifa Shaw', 'Manuela Zinsberger', 'Kailen Mary Iacovoni Sheridan', 'Katie McCabe', 'Rebecca Elizabeth Sauerbrunn', 'Megan Anna Rapinoe', 'Kathrin-Julia Hendrich', 'Amandine Chantal Henry', 'Svenja Anette Huth', 'Rachel Ann Daly', 'Millie Bright', 'Asisat Lamina Oshoala', 'Georgia Marie Stanway', 'Chiamaka Cynthia Nnadozie', 'Trinity Rodman', 'Catarina Cantanhede Melônio Macário', 'Paulina Dudek', 'Lisa Boattin', 'Clara Matéo', 'Chloe Maggie Kelly', 'Alessia Russo', 'Bella Bixby', 'Delphine Cascarino', 'Carolyn Jane Campbell', 'Crystal Alyssia Dunn Soubrier', 'Marta Vieira da Silva', 'Amanda Ilestedt', 'Caitlin Jade Foord', 'Marta Torrejón Moya', 'Francesca Kirby', 'Sara Ilonka Däbritz', 'Eugénie Anne Claudine Le Sommer', 'Amel Majri', 'Desiree Rose Marie Scott', 'Elisabeth Petronella Lieke Martens', 'Linda Dallmann', 'Caroline Elspeth Lillias Weir', 'Ann-Katrin Berger', 'Pernille Mosegaard-Harder', 'Ashleigh Neville', 'Aubrey Kingsbury', 'Jessica Fishlock', '永里 優季', 'Claudia Pina Medina', 'Racheal Kundananji', 'Lauren James', 'Ellie Madison Carpenter', 'Erin Jacqueline Cuthbert', 'Rasheedat Busayo Ajibade', 'Klara Bühl', 'Ella Toone', 'Lara Prašnikar', 'Mathilde Bourdieu', 'Mayra Ramírez', 'Giulia Ronja Gwinn', 'Katharina Naschenweng', 'Arianna Caruso', 'Vanessa Brigitte Gilles', 'Laura Freigang', 'Griedge Yinda Colette Mbock Bathy Nka', 'Casey Grace Murphy', 'Dominique Johanna Anna Petrone Janssen', 'Felicitas Rauch', 'Dzsenifer Marozsán', "Kelley Maureen O'Hara", 'Christen Annemarie Press', 'Meghan Elizabeth Klingenberg', 'Alyssa Michele Naeher', 'Christine Margaret Sinclair', 'Kosovare Asllani', 'Magdalena Lilly Eriksson', 'Martina Rosucci', 'Barbara Bonansea', 'Stephanie-Elise Catley', 'Alex Greenwood', 'Sophie Diana Schmidt', 'Adrianna Nichole Franch', 'Sherida Spitse', 'Lynn Raenie Williams', 'Sara Doorsoun-Khajeh', 'Ludmila da Silva', 'Pauline Camille Peyraud-Magnin', 'Hannah Jayne Blundell', 'Marina Hegering', 'Tabea Waßmuth', 'Glódís Perla Viggósdóttir', 'Lia Wälti', 'Leah Galton', 'Amaiur Sarriegi Isasa', 'Frida Leonhardsen Maanum', 'María Isabel Rodríguez Rivero', 'Damaris Berta Egurrola Wienke', 'Ashley Nicole Sanchez', 'Sveindís Jane Jónsdóttir', 'Paula Fernández Jiménez', 'Manuela Vanegas', 'Ingrid Syrstad Engen', 'Sydney Lohmann', ' 遠藤 純', 'Melvine Malard', 'Nerea Eizaguirre Lasa', 'Tanja Pawollek', 'Perle Morroni', 'Sandy Baltimore', 'Alana Cook', 'Chantal Hagel', 'Théa Gréboval', '長谷川 唯', 'Katie Zelem', 'Gabriela García', 'Lineth Enid Fabienne Beerensteyn', ' 杉田 妃和', 'Alba María Redondo Ferrer', 'Nicole Billa', 'Hailie Mace', 'Alexandra Blaire Krieger', 'Eva Sofia Jakobsson', 'Sara Caroline Seger', 'Olivia Alma Charlotta Schough', 'Linda Birgitta Sembrant', 'Emilie Bosshard Haavi', 'Emily Louise van Egmond', 'Gaëtane Thiney', 'Kenza Dali', 'Anaïg Charlotte Thérese Butel', 'Rafaelle Leone Carvalho Souza', 'Emily Ann Sonnett', 'Leila Ouahabi El Ouahabi', 'Daniëlle van de Donk', 'Ève Josette Noelle Périsset', 'Carolin Simon', 'Ouleymata Sarr', 'Sofia Christine Huerta', 'Ashley Hatch', 'Ángela Sosa Martín', 'Bethany England', 'Ramona Bachmann', 'Rocky Rodríguez', 'Carson Pickett', 'Vanessa DiBernardo', 'Katie Lind', 'Ana-Maria Crnogorčević', 'Daelle Melchie Dumornay', 'Jule Brand', 'Maya Le Tissier', 'Lena Lattwein', 'Alisha Lehmann', 'Geyse da Silva Ferreira', 'Athenea del Castillo Belvide', 'Janina Minge', 'Mayumi Pacheco', 'Tatumn Milazzo', 'Élisa De Almeida', 'Gabriela Nunes da Silva', 'Andi Maureen Sullivan', 'Emily Fox', 'Synne Sofie Kinden Jensen', 'Emma Stina Blackstenius', 'Ewelina Kamczyk', 'Viola Calligaris', 'Sydney Rae Leroux Dwyer', 'Melanie Leupolz', 'Cecilia Salvai', 'Sara Gama', 'Jordan Nobbs', 'Charlotte Bilbault', 'María Guadalupe Sánchez Morales', 'Danielle Colaprico', 'Esther González Rodríguez', 'Lauren Kate Barnes', 'Abby May Erceg', 'Nikita Josephine Parris', 'María Francesca Caldentey Oliver', 'Hanna Erica Maria Glas', 'Margaret Purce', 'Verena Hanshaw', 'Daphne Corboz', 'Hayley Ladd', 'Rachel Hill', "Lo'eau LaBonta", 'Nataša Andonova'];
  placementPlayer();
  shopPlayer();
  chooseShop();
  fillSelect(document.querySelector('.select-league input[name="league-name"]:checked').dataset.league);
  showBudget(document.querySelector('.select-club input[name="club-name"]:checked').dataset.club);
  changeClub();
  updateRadiosB();
  ajouterOnClick();
  autocomplete(inp, players_men_names);
  searchShop();
  resetSearch();

  if (!imagesLoaded) {
      loadImages();
      imagesLoaded = true; 
  }
  sendData();

  /*Charge toutes les images dans les divs des folders en les
  mettant dans les bonnes card-box*/
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
                    const card_player = $("<div>").addClass("card-player").append($("<img>").attr("src", imagePath.replace(men_folder, "")).attr("alt", "men"));
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
                const card_player = $("<div>").addClass("card-player").append($("<img>").attr("src", imagePath.replace(women_folder, "")).attr("alt", "women"));
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

  /*Remet les joueurs précedemments choisis du shop
  par exemple lors d'un reset de formation ou de club*/
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

  /*Crée une carte avec le button ajouter en svg selon 
  sa div parente*/
  function createCard(parentElement, cardId) {
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.id = "card-"+cardId;
        newCard.draggable = true;
        newCard.innerHTML = `
            <div class="hexagon">
                <span class="hex">&#x2B22;</span>
                <div class="plus-sign">
                    <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http
                    :
                    //www.w3.org/2000/svg" xmlns:xlink="http
                    :
                    //www.w3.org/1999/xlink" viewBox="0 0 94.49 94.49" xml:space="preserve" stroke="#ffffff" width="24" height="24">
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

  /*Reset toute la formation sur le terrain en bouclant dans
  les différentes éléments dom*/
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

  /*Place les joueurs selon la formation choisis et rajoute
  les évenements d'ajout de joueurs*/
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

  /*Met à jour le budget selon la valeur du joueur, avec mode update
  pour déterminer si c'est un ajout de joueur (1) ou un
  retrait de joueur (0) */
  function updateBudget(value_player,mode_update){
      const budgetDiv = document.querySelector(".budget-club");
      const budgetText = budgetDiv.innerHTML.replace(/\s/g, '');
      let budgetInteger = parseInt(budgetText.match(/-?\d+/)[0], 10);
      let newbudget;

      if(mode_update == 1){
        newbudget =  budgetInteger - Math.round(value_player);
      }else{
        newbudget =  budgetInteger + Math.round(value_player);
      }

      budgetDiv.textContent = newbudget.toLocaleString('fr-FR')+ " $";
    }

  /*Récupère les stats du joueur à partir de son URL et
  met à jour le budget selon le mode de transfert*/
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

  /*Permet de choisir son joueur dans le shop si le joueur
  n'a pas déjà était choisi. Remet le menu et le field quand
  le joueur est choisi et le place au bon endroit */
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
                //Permettra de récupérer une valeur quand on drag and drop
                send_player_card.setAttribute('data-value', cardId);
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
                ajouterOnClick();
              }  
          }
      });
    }

  /*Permet de choisir entre le shop des hommes et des femmes*/
  function chooseShop(){
      var checkbox_men = document.getElementById("male");
      checkbox_men.addEventListener("change", () => {
          if (checkbox_men.checked) {
            document.querySelector(".players-container-women").classList.add("none");
            document.querySelector(".players-container-men").classList.remove("none");
            autocomplete(inp, players_men_names);

          }
      });

      var checkbox_women = document.getElementById("female");
      checkbox_women.addEventListener("change", () => {
          if (checkbox_women.checked) {
            document.querySelector(".players-container-women").classList.remove("none");
            document.querySelector(".players-container-men").classList.add("none");
            autocomplete(inp, players_women_names);

          }
      });
    }

  /*Rempli la div du choix des clubs selon la league */
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

  /*Ajoute l'event listener sur le bouton du choix de ligue
  et appelle les fonctions pour le choix de club, le budget et
  pour enlever les joueurs du terrain et les mettre dans le shop*/
  function changeClub(){
    leagueButtons.forEach(button => {
        button.addEventListener('change', function() {
            const selectedLeague = this.dataset.league;
            
            fillSelect(selectedLeague);
            resetShop();
            showBudget(document.querySelector('.select-club input[name="club-name"]:checked').dataset.club);
            radioButtons = select_club.querySelectorAll('input[type="radio"]');
            updateRadiosB();
            removePlayer();
            placementPlayer();
        });
    });
    }

  /*Ajoute l'event listener sur le bouton choix de club et met à
  jour selon le club les différentes informations comme pour la
  ligue*/
  function updateRadiosB(){
      let radioButtons = select_club.querySelectorAll('input[type="radio"]');
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

  /*Affiche le budget de départ du club en divisant par 5 la valeur
  globale du club*/
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
    
                    
                    
                    budgetClubDiv.textContent = (clubNetWorth/5).toLocaleString('fr-FR')+ " $";
    
                } else {
                    console.log("Le club " + clubName + " n'a pas été trouvé dans les données.");
                }
            }
        });
    }

  /*Envoie le budget du club actuel, le nom du club 
  pour récupérer les datas réelles du clubs et envoie 
  la formation entière en mettant les différentes divs
  en innerhtml si il y a bien 11 joueurs et envoie vers l'url
  créée et encodé avec les différentes variables*/
  function sendData(){
          const link = document.getElementById('send-data');

          
          link.addEventListener('click', function(event) {
              
              let nbJoueurs =  document.querySelectorAll(".card-player.selected").length 
              if(nbJoueurs == 11){
                removeAdd();
                event.preventDefault();

                const budgetDiv = document.querySelector(".budget-club");
                const budgetText = budgetDiv.innerHTML.replace(/\s/g, '');
                let budgetInteger = parseInt(budgetText.match(/-?\d+/)[0], 10);
                const encodedBudget = encodeURIComponent(budgetInteger);

                const fieldContent = document.querySelector('.field').innerHTML;
                const encodedContent = encodeURIComponent(fieldContent);
                const nameclub = document.querySelector('.select-club input[name="club-name"]:checked').dataset.club
                const encodedNameClub = encodeURIComponent(nameclub);
    
                const destinationUrl = `yoursquad.html?content=${encodedContent}&nameclub=${encodedNameClub}&budget=${encodedBudget}`;
    
                
                window.location.href = destinationUrl;
              }else{
                alert("Il manque "+(11-nbJoueurs)+" joueurs")
              }
          });
    }

  /*Ajoute l'event listener si on click sur l'hexagon des cartes
  vides pour ajouter un jouer, affiche donc le shop et enlève 
  l'affichage du menu et du terrain*/
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
                        resetSearchShop();
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

  /*Ajoute les différentes fonction drag et selection sur les
  cartes de joueur et les cartes vides*/
  function ajouterOnClick() {
    let cartes_player = document.querySelector(".field").querySelectorAll(".card-player.selected");
    for (let i = 0;i<cartes_player.length;i++){
      cartes_player[i].addEventListener('click',selectCard);
      cartes_player[i].addEventListener('dragstart',drag);
      cartes_player[i].addEventListener('dragover',allowDrop);
      cartes_player[i].addEventListener('drop',drop);
    }
    let cartes = document.querySelector(".field").querySelectorAll(".card");
    for (let i = 0;i<cartes.length;i++){
      cartes[i].addEventListener('dragover',allowDrop);
      cartes[i].addEventListener('drop',drop);
    }
    
  }

  /*Si la carte a déjà était cliqué (id:clicked) alors la
  remplace par une carte vide en remettant la carte dans le
  shop sinon si c'est une autre carte on échange les deux*/
  function selectCard(){
    if(this.id === "clicked"){
      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.draggable = true;
      newCard.innerHTML = `
          <div class="hexagon">
              <span class="hex">&#x2B22;</span>
              <div class="plus-sign">
                  <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 94.49 94.49" xml:space="preserve" stroke="#ffffff" width="24" height="24">
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
      var cardImgToShop = this;
      if (this.alt=="women"){
        var containerShop = document.querySelector(".players-container-women");
      }else{
        var containerShop = document.querySelector(".players-container-men");

      }
      var cardsShop = containerShop.querySelectorAll(".card-player")
      cardsShop.forEach(function(card) {
        if(cardImgToShop.firstChild.src == card.firstChild.src){
          card.classList.remove("choosed");
        }
      })


      this.parentNode.replaceChild(newCard, this);
      onAddPlayer();
      ajouterOnClick();
    }else{
      let alreadyclicked = document.getElementById("clicked");
      if(alreadyclicked){
        this.removeAttribute('id');
        alreadyclicked.removeAttribute('id');
        first_click = alreadyclicked.innerHTML;
        second_click = this.innerHTML;
        
        this.innerHTML = first_click;
        alreadyclicked.innerHTML = second_click;
        removeAdd();
        onAddPlayer();
        ajouterOnClick();
      }else{
        this.id = "clicked";
      }

    }
  }

  /*Enlève l'attribut qui montre que la carte a été sélectioné*/
  function removeAdd(){
    var clickedElement = document.getElementById('clicked');

    if (clickedElement) {
        clickedElement.removeAttribute('id');
    }
  }

  /* Fonctions de drag and drop inspirés par https://www.w3schools.com/html/html5_draganddrop.asp*/

  function allowDrop(ev) {
    ev.preventDefault();
  }

  /*Prend la valeur du data-value pour pouvoir la récupérer quand
  on arrête le drag*/
  function drag(ev) {
    removeAdd();
    ev.dataTransfer.setData("text", ev.target.parentNode.dataset.value);
  }

  /* On swap quand c'est une carte avec un joueur sinon si c'est une carte
  vide ca déplace le joueur grâce au innerhtml*/
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    if(ev.target.parentElement.classList.contains('selected')){
      drop_content =  ev.target.parentElement.innerHTML;
      drag_content = document.querySelector('[data-value="' + data + '"]').innerHTML;
      ev.target.parentElement.innerHTML = drag_content;
      document.querySelector('[data-value="' + data + '"]').innerHTML = drop_content;
    }else{
      drop_content =  ev.target.parentElement.parentElement.parentElement.innerHTML;
      drag_content = document.querySelector('[data-value="' + data + '"]').parentElement.innerHTML;
      document.querySelector('[data-value="' + data + '"]').parentElement.innerHTML = drop_content;
      ev.target.parentElement.parentElement.parentElement.innerHTML = drag_content;

    }
    onAddPlayer();
    ajouterOnClick();
  }

  /*Permet de compléter le nom des joueurs dans la barre de recherche*/
  function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { //up
          currentFocus--;

          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

  /*Reset la recherche du joueur selon le shop*/
  function resetSearchShop(){
    if(document.querySelector(".players-container-men").classList.contains("none")){
      var containerShop = document.querySelector(".players-container-women");
    }else{
      var containerShop = document.querySelector(".players-container-men");
    }
    var cardsShop = containerShop.querySelectorAll(".card-player")
    cardsShop.forEach(function(card) {   
        card.parentElement.classList.remove('none');
    })
  }

  /*Recherche dans le shop le joueur selon l'input 
  grâce à son img src et affiche selon la bonne carte ensuite */
  function searchShop(){

    var submitButton = document.getElementById('submit_button');
    submitButton.addEventListener('click', function(event) {
            event.preventDefault();
            resetSearchShop();
            var searchText = document.getElementById('searcharea').value;
            Papa.parse("./assets/players-2024.csv", {
              download: true,
              header: true,
              complete: function(results) {
                
                  for (let i = 0; i < results.data.length; i++) {
                      const row = results.data[i];
                      if (row["long_name"] === searchText) {
                          var id_player = row["player_id"];
                          if(document.querySelector(".players-container-men").classList.contains("none")){
                            var containerShop = document.querySelector(".players-container-women");
                          }else{
                            var containerShop = document.querySelector(".players-container-men");
                          }
                          var cardsShop = containerShop.querySelectorAll(".card-player")
                          cardsShop.forEach(function(card) {
                            var srcAttribute = card.querySelector('img').src;
                            var id = srcAttribute.match(/\/(\d+)\.png$/)[1];
                            if(id_player != id){
                              card.parentElement.classList.add('none');
                            }
                          })
                          break; 
                      }
                  }
              }
            });
    
    
    });
  }

  /*Reset la recherche */
  function resetSearch(){
    var crossButton = document.getElementById('cross_button');
    crossButton.addEventListener('click', function(event) {
      resetSearchShop();
    })
  }


})
