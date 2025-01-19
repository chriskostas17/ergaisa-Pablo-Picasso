document.addEventListener("DOMContentLoaded", () => {
	const navLinks = document.querySelectorAll("nav ul li a");
	const asideSections = document.querySelectorAll(".aside-section");
	const contentSection = document.getElementById("content");

	navLinks.forEach(link => {
			link.addEventListener("click", (e) => {
					e.preventDefault();
					const section = e.target.getAttribute("data-section");

				
					asideSections.forEach(aside => aside.classList.add("hidden"));

					
					const asideToShow = document.getElementById(`aside-${section}`);
					if (asideToShow) {
							asideToShow.classList.remove("hidden");
					}

					
					contentSection.innerHTML = `<h2>${e.target.textContent}</h2><p>Επιλέξτε μια υποκατηγορία από το αριστερό μενού.</p>`;
			});
	});

	const asideLinks = document.querySelectorAll("aside a");

	asideLinks.forEach(link => {
			link.addEventListener("click", (e) => {
					e.preventDefault();
					const subsection = e.target.getAttribute("data-subsection");
					if(subsection === 'Early Life'){
					
					contentSection.innerHTML = `<p class="main-header">${subsection}</p><div class="early-life"><div class="Picasso-img"><div><img src="eikones-biografias/Pablo_Picasso_with_his_sister_Lola,_1889.jpg"></div><div>Pablo and his sister Lola, 1889</div></div>Picasso was born at 23:15 on 25 October 1881, in the city of Málaga, Andalusia, in southern Spain.[5] He was the first child of Don José Ruiz y Blasco (1838–1913) and María Picasso y López.[14] Picasso's family was of middle-class background. His father was a painter who specialized in naturalistic depictions of birds and other game. For most of his life, Ruiz was a professor of art at the School of Crafts and a curator of a local museum.[1]

					Picasso's birth certificate and the record of his baptism include very long names, combining those of various saints and relatives.[b][c] Ruiz y Picasso were his paternal and maternal surnames, respectively, per Spanish custom. The surname "Picasso" comes from Liguria, a coastal region of north-western Italy.[16] Pablo's maternal great-grandfather, Tommaso Picasso, moved to Spain around 1807.[16]

					Picasso showed a passion and a skill for drawing from an early age. According to his mother, his first words were "piz, piz", a shortening of lápiz, the Spanish word for "pencil".[17] From the age of seven, Picasso received formal artistic training from his father in figure drawing and oil painting. Ruiz was a traditional academic artist and instructor, who believed that proper training required disciplined copying of the masters, and drawing the human body from plaster casts and live models. His son became preoccupied with art to the detriment of his classwork.[18]

					The family moved to A Coruña in 1891, where his father became a professor at the School of Fine Arts. They stayed for almost four years. On one occasion, the father found his son painting over his unfinished sketch of a pigeon. Observing the precision of his son's technique, an apocryphal story relates, Ruiz felt that the thirteen-year-old Picasso had surpassed him, and vowed to give up painting,[19] though paintings by him exist from later years.[20]

					In 1895, Picasso was traumatized when his seven-year-old sister, Conchita, died of diphtheria.[21] After her death, the family moved to Barcelona, where Ruiz took a position at its School of Fine Arts. Picasso thrived in the city, regarding it in times of sadness or nostalgia as his true home.[22] Ruiz persuaded the officials at the academy to allow his son to take an entrance exam for the advanced class. This process often took students a month, but Picasso completed it in a week, and the jury admitted him, at just 13. As a student, Picasso lacked discipline but made friendships that would affect him in later life. His father rented a small room for him close to home so he could work alone, yet he checked up on him numerous times a day, judging his drawings. The two argued frequently.[23]

					Picasso's father and uncle decided to send the young artist to Madrid's Real Academia de Bellas Artes de San Fernando, the country's foremost art school.[22] At age 16, Picasso set off for the first time on his own, but he disliked formal instruction and stopped attending classes soon after enrollment. Madrid held many other attractions. The Prado housed paintings by Diego Velázquez, Francisco Goya, and Francisco Zurbarán. Picasso especially admired the works of El Greco; elements such as his elongated limbs, arresting colours, and mystical visages are echoed in Picasso's later work.[24]</div>`;}
					else if(subsection === "Career"){
						contentSection.innerHTML = `<p class="main-header">${subsection}</p><div class="career"><div class="Picasso-img"><img src="eikones-biografias/Pablo_Picasso,_1904,_Paris,_photograph_by_Ricard_Canals_i_Llambí_cut.jpg"><div>Picasso in 1904. Photograph by Ricard Canals</div></div><h3>Before 1900</h3>
						<br>
						Picasso in 1904. Photograph by Ricard Canals
						Picasso's training under his father began before 1890. His progress can be traced in the collection of early works now held by the Museu Picasso in Barcelona, which provides one of the most comprehensive extant records of any major artist's beginnings.[25] During 1893 the juvenile quality of his earliest work falls away, and by 1894 his career as a painter can be said to have begun.[26] The academic realism apparent in the works of the mid-1890s is well displayed in The First Communion (1896), a large composition that depicts his sister, Lola. In the same year, at the age of 14, he painted Portrait of Aunt Pepa, a vigorous and dramatic portrait that Juan-Eduardo Cirlot has called "without a doubt one of the greatest in the whole history of Spanish painting."[27]

						In 1897, his realism began to show a Symbolist influence, for example, in a series of landscape paintings rendered in non-naturalistic violet and green tones. What some call his Modernist period (1899–1900) followed. His exposure to the work of Rossetti, Steinlen, Toulouse-Lautrec and Edvard Munch, combined with his admiration for favourite old masters such as El Greco, led Picasso to a personal version of modernism in his works of this period.[28]

						Picasso made his first trip to Paris, then the art capital of Europe, in 1900. There, he met his first Parisian friend, journalist and poet Max Jacob, who helped Picasso learn the language and its literature. Soon they shared an apartment; Max slept at night while Picasso slept during the day and worked at night. These were times of severe poverty, cold, and desperation. Much of his work was burned to keep the small room warm. During the first five months of 1901, Picasso lived in Madrid, where he and his anarchist friend Francisco de Asís Soler founded the magazine Arte Joven (Young Art), which published five issues. Soler solicited articles and Picasso illustrated the journal, mostly contributing grim cartoons depicting and sympathizing with the state of the poor. The first issue was published on 31 March 1901, by which time the artist had started to sign his work Picasso.[29] From 1898 he signed his works as "Pablo Ruiz Picasso", then as "Pablo R. Picasso" until 1901. The change does not seem to imply a rejection of the father figure. Rather, he wanted to distinguish himself from others; initiated by his Catalan friends who habitually called him by his maternal surname, much less current than the paternal Ruiz.[30] <br>
			
						<h3>Blue Period: 1901–1904</h3>
						<br>
						<div class="Picasso-img">
						 	<div><img src="eikones-biografias/Picasso_la_vie.jpg"></div>
						  <div>La Vie (1903), Cleveland Museum of Art</div> 
						</div>
						Picasso's Blue Period (1901–1904), characterized by sombre paintings rendered in shades of blue and blue-green only occasionally warmed by other colours, began either in Spain in early 1901 or in Paris in the second half of the year.[31] Many paintings of gaunt mothers with children date from the Blue Period, during which Picasso divided his time between Barcelona and Paris. In his austere use of colour and sometimes doleful subject matter—prostitutes and beggars are frequent subjects—Picasso was influenced by a trip through Spain and by the suicide of his friend Carles Casagemas. Starting in autumn of 1901, he painted several posthumous portraits of Casagemas culminating in the gloomy allegorical painting La Vie (1903), now in the Cleveland Museum of Art.[32]

						The same mood pervades the well-known etching The Frugal Repast (1904),[33] which depicts a blind man and a sighted woman, both emaciated, seated at a nearly bare table. Blindness, a recurrent theme in Picasso's works of this period, is also represented in The Blindman's Meal (1903, the Metropolitan Museum of Art) and in the portrait of Celestina (1903). Other Blue Period works include Portrait of Soler and Portrait of Suzanne Bloch.
						<br>
			
						<h3>Rose Period: 1904–1906</h3>
						<br>		
						
						The Rose Period (1904–1906)[34] is characterized by a lighter tone and style utilizing orange and pink colours and featuring many circus people, acrobats and harlequins known in France as saltimbanques. The harlequin, a comedic character usually depicted in checkered patterned clothing, became a personal symbol for Picasso. Picasso met Fernande Olivier, a bohemian artist who became his mistress, in Paris in 1904.<div class="Picasso-img">
						 	<div><img src="eikones-biografias/Pablo_Picasso,_1905,_Au_Lapin_Agile_(At_the_Lapin_Agile),_oil_on_canvas,_99.1_x_100.3_cm,_Metropolitan_Museum_of_Art.jpg"></div>
						  <div>
							Pablo Picasso, 1905, Au Lapin Agile (At the Lapin Agile) (Arlequin tenant un verre), oil on canvas, Metropolitan Museum of Art
							</div> 
						</div>[21] Olivier appears in many of his Rose Period paintings, many of which are influenced by his warm relationship with her, in addition to his increased exposure to French painting. The generally upbeat and optimistic mood of paintings in this period is reminiscent of the 1899–1901 period (i.e., just prior to the Blue Period), and 1904 can be considered a transition year between the two periods.		
						<br>
			
						<h3>African art and primitivism: 1907–1909</h3>
						<br>
						Picasso's African-influenced Period (1907–1909) begins with his painting Les Demoiselles d'Avignon. The three figures on the left were inspired by Iberian sculpture, but he repainted the faces of the two figures on the right after being powerfully impressed by African artefacts he saw in June 1907 in the ethnographic museum at Palais du Trocadéro.[39] When he displayed the painting to acquaintances in his studio later that year, the nearly universal reaction was shock and revulsion; Matisse angrily dismissed the work as a hoax.[40] Picasso did not exhibit Les Demoiselles publicly until 1916.

						Other works from this period include Nude with Raised Arms (1907) and Three Women (1908). Formal ideas developed during this period lead directly into the Cubist period that follows.[41] Analytic cubism (1909–1912) is a style of painting Picasso developed with Georges Braque using monochrome brownish and neutral colours. Both artists took apart objects and "analyzed" them in terms of their shapes. Picasso and Braque's paintings at this time share many similarities.[42]

						In Paris, Picasso entertained a distinguished coterie of friends in the Montmartre and Montparnasse quarters, including André Breton, poet Guillaume Apollinaire, writer Alfred Jarry and Gertrude Stein. In 1911, Picasso was arrested and questioned about the theft of the Mona Lisa from the Louvre. Suspicion for the crime had initially fallen upon Apollinaire due to his links to Géry Pieret, an artist with a history of thefts from the gallery. Apollinaire in turn implicated his close friend Picasso, who had also purchased stolen artworks from the artist in the past. Afraid of a conviction that could result in his deportation to Spain, Picasso denied having ever met Apollinaire. Both were later cleared of any involvement in the painting's disappearance.[43][44]
						<div class="Picasso-img">
						 	<div><img src="eikones-biografias/Les_Demoiselles_d'Avignon.jpg"></div>
						  <div>Les Demoiselles d'Avignon (1907), Museum of Modern Art, New York</div> 
						</div>
						<br>
			
						<h3>Synthetic cubism: 1912–1919</h3>
						<br>

						Synthetic cubism (1912–1919) was a further development of the genre of cubism, in which cut paper fragments – often wallpaper or portions of newspaper pages – were pasted into compositions, marking the first use of collage in fine art.[citation needed]

						Between 1915 and 1917, Picasso began a series of paintings depicting highly geometric and minimalist Cubist objects, consisting of either a pipe, a guitar or a glass, with an occasional element of collage. "Hard-edged square-cut diamonds", notes art historian John Richardson, "these gems do not always have upside or downside".[45][46] "We need a new name to designate them," wrote Picasso to Gertrude Stein. The term "Crystal Cubism" was later used as a result of visual analogies with crystals at the time.[47][45][48] These "little gems" may have been produced by Picasso in response to critics who had claimed his defection from the movement, through his experimentation with classicism within the so-called return to order following the war.[45][47]

						After acquiring some fame and fortune, Picasso left Olivier for Marcelle Humbert, also known as Eva Gouel. Picasso included declarations of his love for Eva in many Cubist works. Picasso was devastated by her premature death from illness at the age of 30 in 1915.[49]

						At the outbreak of World War I in August 1914, Picasso was living in Avignon. Braque and Derain were mobilized and Apollinaire joined the French artillery, while the Spaniard Juan Gris remained from the Cubist circle. During the war, Picasso was able to continue painting uninterrupted, unlike his French comrades. His paintings became more sombre and his life changed with dramatic consequences. Kahnweiler's contract had terminated on his exile from France. At this point, Picasso's work would be taken on by the art dealer Léonce Rosenberg. After the loss of Eva Gouel, Picasso had an affair with Gaby Lespinasse. During the spring of 1916, Apollinaire returned from the front wounded. They renewed their friendship, but Picasso began to frequent new social circles.
						<div class="Picasso-img">
						 	<div><img src="eikones-biografias/170px-Pablo_Picasso,_summer_1912.jpg"></div>
						  <div>Picasso in front of his painting The Aficionado (Kunstmuseum Basel) at Villa les Clochettes, summer 1912</div> 
						</div>
						Towards the end of World War I, Picasso became involved with Serge Diaghilev's Ballets Russes. Among his friends during this period were Jean Cocteau, Jean Hugo, Juan Gris, and others. In the summer of 1918, Picasso married Olga Khokhlova, a ballerina with Sergei Diaghilev's troupe, for whom Picasso was designing a ballet, Erik Satie's Parade, in Rome; they spent their honeymoon near Biarritz in the villa of glamorous Chilean art patron Eugenia Errázuriz.[51]

						Khokhlova introduced Picasso to high society, formal dinner parties, and other dimensions of the life of the rich in 1920s Paris. The two had a son, Paulo Picasso,[52] who would grow up to be a motorcycle racer and chauffeur to his father. Khokhlova's insistence on social propriety clashed with Picasso's bohemian tendencies and the two lived in a state of constant conflict. During the same period that Picasso collaborated with Diaghilev's troupe, he and Igor Stravinsky collaborated on Pulcinella in 1920. Picasso took the opportunity to make several drawings of the composer.[53] In the summer of 1921, Picasso, Khokhlova and Paulo stayed at a villa in the village of Fontainebleau, France; during their time there, Picasso, using the garage as a studio, painted Three Women at the Spring and Three Musicians.[54][55]

						In 1927, Picasso met 17-year-old Marie-Thérèse Walter and began a secret affair with her. Picasso's marriage to Khokhlova soon ended in separation rather than divorce, as French law required an even division of property in the case of divorce, and Picasso did not want Khokhlova to have half his wealth. The two remained legally married until Khokhlova's death in 1955. Picasso carried on a long-standing affair with Marie-Thérèse Walter and fathered a daughter with her, named Maya. Marie-Thérèse lived in the vain hope that Picasso would one day marry her, and hanged herself four years after Picasso's death.[56]
												`
					}else if(subsection === "Portraits"){
							contentSection.innerHTML = `<p class="main-header">${subsection}</p>
							<div class="gallery">
									<div class="painting">
											<img src="pinakes/pin1.jpg">
											<p>Dove</p>
									</div>
									<div class="painting">
											<img src="pinakes/pin2.jpg">
											<p>Figure At The Seaside</p>
									</div>
									<div class="painting">
											<img src="pinakes/pin3.jpg">
											<p>Girl in a Chemise</p>
									</div>
									<div class="painting">
											<img src="pinakes/pin4.jpg">
											<p>Harlequin with Glass</p>
									</div>
									<div class="painting">
											<img src="pinakes/pin5.jpg">
											<p>Head of a Woman</p>
									</div>
									<div class="painting">
											<img src="pinakes/pin6.jpg">
											<p>La Vie</p>
									</div>
									<div class="painting">
											<img src="pinakes/pin7.jpg">
											<p>Painter and Model</p>
									</div>
									<div class="painting">
											<img src="pinakes/pin8.jpg">
											<p>Girl Before A Mirror</p>
									</div>
									<div class="painting">
											<img src="pinakes/pin9.jpg">
											<p>Harlequin</p>
									</div>
									<div class="painting">
											<img src="pinakes/pin10.jpg">
											<p>Large Bather</p>
									</div>
									<div class="painting">
											<img src="pinakes/pin11.jpg">
											<p>Guernica</p>
									</div>
									<div class="painting">
											<img src="pinakes/pin12.jpg">
											<p>Joie De Vivire</p>
									</div>
									<div class="painting">
											<img src="pinakes/pin13.jpg">
											<p>Portrait of Aunt Pepa</p>
									</div>
									<div class="painting">
											<img src="pinakes/pin14.jpg">
											<p>Science and Charity</p>
									</div>
									<div class="painting">
											<img src="pinakes/pin15.jpg">
											<p>Self Portrait</p>
									</div>
							</div>
						`
					
					}
			});
	});
});


