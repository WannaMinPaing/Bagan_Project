
		$(document).ready(function(){
			$(".Bupaya").hide();
			$(".Shwegugyi").hide();
			$(".Shwezigon").hide();



			$(".ananda").click(function(){
				$(".tem_ananda").html("The temple was damaged in the earthquake of 1975.On the occasion of 900th anniversary of its construction celebrated in 1990 the temple spires were gilded. It is a highly revered temple of Bagan.The Buddha statues are made from teak wood gilded with gold leaf and the ones facing North and South are believed to be originals.The four Buddhas are (from left to right) :-Kakusandha – North facing Konagamana – East facing Kassapa – South facing Gautama – West facing");
			});

			$(".dhammayangyi").click(function(){
				$(".tem_dhammayangyi").html("The Dhammayangyi is the widest temple in Bagan, and is built in a plan similar to that of Ananda Temple.Burmese chronicles state that while the construction of the temple was in the process, the king was assassinated by some Indians and thus the temple was not completed.");
			});

			$(".thatbyinnyu").click(function(){
				$(".tem_thatbyinnyu").html("Completed in 1150–51 during the reign of King Sithu I, the temple reflected the Bagan period's innovative architectural and artistic creativity and an expression of the self-confident Burmese spirit of nationhood.At the pinnacle height of 66 m (217 ft), the five-story Thatbyinnyu is known as the tallest temple in Bagan, alongside the tallest stupa in Bagan, the 100 m (328 ft) Shwesandaw.The temple was badly damaged by the earthquakes of 1975 and 2016. It is undergoing restoration work with Chinese technical and financial assistance; the restoration work is expected to last until about 2028.");
			});

			$(".shwesandaw").click(function(){
				$(".tem_shwesandaw").html(" The pagoda was built by King Anawrahta in 1057, and once contained terra cotta tiles depicting scenes from the Jataka. Enshrined within the pagoda are sacred hairs of Gautama Buddha, which were obtained from Thaton.");
			});

			$(".manuha").click(function(){
				$(".tem_manuha").html("About the same time Makuta, captive king of the Thaton Kingdom[1]:150 (his name is now corrupted into 'Manuha'), must have built his colossal images at Myinpagan, where he was living in captivity, a mile S. of Pagan. Stricken with remorse, says the Glass Palace Chronicle, he built a colossal Buddha with legs crossed, and a dying Buddha as it were making pariniruâna; and he prayed saying Whithersoever I migrate in samsâra, may I never be conquered by another!The temple is called Manuha to this day.");
			});



			$(".sulamani").click(function(){
				$(".tem_sulamani").html("It was built in 1183 by King Narapatisithu and is similar to the Thatbyinnyu Temple in design. The Sulamani Temple also shows influence from the Dhammayangyi Temple, and was the model for the Htilominlo Temple. Sulamani Temple was restored after the 1975 earthquake, and utilises brick and stone, with frescoes in the interior of the temple. It was rebuilt in 1994.");
			});


			$(".bupaya").click(function(){
				$(".tem_bupaya").html("It is one of the most notable shrines among the thousands of new or ruined Pagodas in Pagan, which is located about 90 miles (140 km) south of Mandalay.The original pagoda was completely destroyed in the 1975 earthquake. As result of this earthquake, the bulbous pagoda broke into pieces and fell into the river. It was, however, fully reconstructed using modern materials, with lesser adherence to the original design. Subsequently, it was built as a gilded superstructure.");
			});

			$(".shwegugyi").click(function(){
				$(".tem_shwegugyi").html("Located just to the southeast of what apparently were the ruins of the former royal palace founded by King Kyansittha (r. 1084–1113),the temple was built by King Sithu I of Pagan (Bagan) in 1131. According to the stone inscriptions at the temple, set up in 1141, construction work on the temple began on 17 May 1331, and was completed on 17 December 1331.Built on an expansive 3 m (9.8 ft) tall brick foundation, the temple is known for its arched windows, and fine stucco and carved wooden doors in the interior.");
			});

			$(".shwezigon").click(function(){
				$(".tem_shwezigon").html("This pagoda, a Buddhist religious place, is believed to enshrine a bone and tooth of Gautama Buddha. The pagoda is in the form of a cone formed by five square terraces with a central solid core. There are footprints below the four standing Buddha statues here. Jataka legends are depicted on glazed terra-cotta tiles set into three rectangular terraces.There are also four bronze standing statues of Buddha which are stated to be of the current age Buddha. At the outer limits of the pagoda there are 37 nats deified along with an intricately carved wooden sculpture of Thagyamin a Burmese version of Hindu god Indra. Within the compound of the Shwezigon Pagoda there is a stone pillar containing Mon language inscriptions dedicated by Kyansittha.");
			});



			$(".see_more").click(function(){
				$(".Bupaya").show();
				$(".Shwegugyi").show();
				$(".Shwezigon").show();
			});


			$(".scroll-top").click(function() {
        		$("html, body").animate({ 
            		scrollTop: 0 
        		}, "slow");
        		return false;
    		});
																



		});

	