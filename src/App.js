import React, { Component } from "react";
import "./App.css";
import cgal1 from './images/call-girl-1.jpeg';
import cgal2 from './images/call-girl-2.jpeg';
import cgal3 from './images/call-girl-3.jpeg';
import cgal4 from './images/call-girl-4.jpeg';
import cgal5 from './images/call-girl-5.jpeg';
import cgal6 from './images/call-girl-6.jpeg';
import cgal7 from './images/call-girl-7.jpeg';
import cgal8 from './images/call-girl-8.jpeg';
import headerImg from './images/sexy-girl-2.jpg';
import sticker from './images/naked-girl-sticker-2.png';

function App() {
    const cityList = [{
      cityName:'Indore',
      areaList:['Vijay Nagar', 'Palasiya', 'AB Road', 'Bengali Square', 'Omaxe City', 'Rau', 'Ujjain Road']
    },
    {
      cityName:'Mumbai',
      areaList:['Bandra', 'Powai', 'Andheri', 'Chembur', 'Goregaon', 'Juhu', 'Dadar']
    },
    {
      cityName:'Ahmedabad',
      areaList:['Mani Nagar', 'Motera', 'Naroda', 'Narol', 'Paldi', 'Sarkhej', 'Gandhinagar']
    },
    {
      cityName:'Hyderabad',
      areaList:['Amberpet', 'Gachibowli', 'Kachiguda', 'Kondapur', 'Madhapur', 'Manikonda', 'Kothaguda']
    },
    {
      cityName:'Bangalore',
      areaList:['WhiteField', 'Koramangala', 'HSR Layout', 'Majestic', 'Marathali', 'Jaynagar', 'Hebbal']
    },
    {
      cityName:'Lucknow',
      areaList:['Aliganj', 'Gomti Nagar', 'Hazratganj', 'Ashiyana', 'Alambagh', 'Indira Nagar']
    },
    {
      cityName:'Scecundarabad',
      areaList:['Dr AS Rao Nagar', 'Aphb Colony Moulali']
    }
    ];
    const cgalList = [{
        image: cgal1,
        cgalInfoHeader: 'Kavya Indore Low price High profile call girl Service 24 hour',
        cgalInfoDesc: 'Hi, Call me Kavya. Hand to hand payment no advance. Hotel and home available 24 hours.'
      },
      {
        image: cgal2,
        cgalInfoHeader: 'PRIYA Indore Call☎️ to FULL HARD FUCK SUCK BOOBS',
        cgalInfoDesc: 'My name is Priya, I’m available in Indore..Big Boobs with curvy body.'
      },
      {
        image: cgal3,
        cgalInfoHeader: 'Best Indore Girl Giving Sexual Services',
        cgalInfoDesc: 'Hi there, my name is Anaya and I’m a slim and hot independent call girl in Indore.Suck my hot tits, lick nipples & fuck hard.'
      },
      {
        image: cgal4,
        cgalInfoHeader: 'Pay Cash With No Advance Genuine And Real Meet',
        cgalInfoDesc: 'Totally Payment Cash in Hand Girl....... No Advance and WhatsApp I will Reply Immediately 24/7 Hours Service Available....'
      },
      {
        image: cgal5,
        cgalInfoHeader: 'Neha VIP Call Girl Available in indore',
        cgalInfoDesc: 'Your satisfaction is our responsibility.⭐⭐💖 *Service. Available* 1.▪Kissing (French kiss also) 2.▪Liplock. 3.▪Blowjob. Without. Condom. 4.▪Oral sex. 5.▪Anal.sex 6.▪Sucking. 7.▪Fucking.'
      },
      {
        image: cgal6,
        cgalInfoHeader: 'NO ADVANCE 💥💯Indore best VIP genuine high profile girl available 24 hours call me now',
        cgalInfoDesc: '🌟Hotel service available 24 hour💐 Hotel outservice and ins with regular price, guarantee satisfaction genuine service.'
      },
      {
        image: cgal7,
        cgalInfoHeader: 'Myself Saloni Provide Best Service',
        cgalInfoDesc: 'Saloni Here. Provide full saisfaction- Anal Sex, Vaginal Sex Blowjob, Suck Boobs, Full Night Hotel Service available'
      },
      {
        image: cgal8,
        cgalInfoHeader: 'Divya VIP call girl unlimited shot without condom.',
        cgalInfoDesc: '100% Customers Satisfaction Guarantee // 100 % VIP Profiles Top Grade Service. I GUARANTEE FULL SATISFACTION & IN CASE OF ANY UNHAPPY EXPERIENCE, I WOULD REFUND YOUR FEES'
      }
      ];

    return (
        <div class="main-body">
          <div class="header">
            <img class="sticker" src={sticker} />
            <p class="header-text">VIP CALL GIRLS</p>
            <div class="header-buttons">
              <a class="whatsapp-btn-2" href="https://api.whatsapp.com/send?phone=9241583647">
                 Chat Now
              </a>
              <a class="header-call-btn" href="tel:123-456-7890">Book Now</a>
            </div>
          </div>
          <img class="header-img" src={headerImg} />
          
          <div class="info-Container-1">
            <p class="info-header-text-1">
                HIGH PROFILE CALL GIRLS AFFORDABLE PRICE
            </p>
            <p class="info-desc-text">
              Are you looking for the best Escort Service in Indore? Our team of experienced call girls in Indore offers all the sexual services you’ve been waiting for.
            </p>
            <p class="info-desc-text">
              Book Call Girl in Indore:
            </p>
            <p class="info-desc-text">
              Cgals has the best elite models and recruits only high-profile girls, college girls, rich-class girls, VIP models, high society ladies, married housewives, and many more. We have truly independent Indore call girls.
              Our call girls are very supportive and experts in providing all pleasurable services a man dream of.
            </p>
            <p class="info-desc-text">
              You can reach out to us via Whatsapp and call for booking hot and VIP call girls or models to get sensational experience.
            </p>
            <p class="info-desc-text-2">
              Find local escort and call girls Indore:
            </p>
          </div>

          <ul class="cgalList">
              {cgalList.map((cgal) => (
                <div class="image-Container">
                <img class = "cgalImg" src={cgal.image} />
                <div class="cgal-info-container">
                  <p class="cgal-info-header-text">
                    {cgal.cgalInfoHeader}
                  </p>
                  <p class="cgal-info-desc-text">
                    {cgal.cgalInfoDesc}
                  </p>
                  <div class="buttons">
                    <a class="whatsapp-btn-2" href="https://api.whatsapp.com/send?phone=9241583647">
                      WhatsApp Me
                    </a>
                    <a class="call-btn" href="tel:123-456-7890">Call Me</a>
                  </div>              
                </div>
              </div>
              ))}
          </ul>

          <div class="info-Container-2">
            <p class="info-header-text">
              Are you searching for cheap call girls in Indore and other parts of India for unbeatable erotic fun?
            </p>
            <p class="info-desc-text">
              Sexy babes are the hottest asset who can allure smart and dashing men. Indian men are fond of foreigner chicks and look for cheap call girls for complete entertainment. They have an interest in dating foreigner call girls and Indian VIP escorts. Males have a fondness for women in saree and short dresses. Some love their girl to be in Indian attire, and some in western outfits. The unlimited game of love begins when these pretty call girls unravel their assets in front of customers. Our escort call girls are professional in handling the lusty side of every man. This escort service is famous for providing call girls in all the regions of India without delay. We offer beautiful companions to handsome hulks and adult men around the country at their convenience. Our in-house and out-house services are popular among men. You can take any girl of your dream with us out in a hotel or can stay at our comfortable & cozy premises.
              Our girls are pure souls, and open to every kind of sexual service. They are comfortable for one-shot service at any point of time anywhere for enjoyment. Call girl is one of the top most lovable personalities.
              You are not obligated to share your details with us or your identity. We ensure to keep your identity safe and secure. Our beauties are trained in a way to give you erotic pleasure and take your command.
              We understand every man has different tastes when it comes to pleasure with video call girls. Every male is attracted to females with different body types and structures. Few men believe tall and slim girls are stunning others think mature ladies like housewife escorts are the most beautiful women. Many males believe ladies with long legs look superb in short clothing. Therefore, different preferences of men are there, and we are aware of this taste. Hence, we bring together all sorts of females to choose from for a session.
              You can engage yourself in cheap yet elite escorts in India who are ready for some fun. Intimate moments that entice every male is our prime motto. Customers can get 100% satisfaction while meeting with hot babes of our agency. They share their number to ensure the client can have an enjoyable time with call girls.
              You can catch all pretty ladies and watch their skills if you hire our sexual services. These hotel call girl are women who like to be with multiple partners and loves to acquire unlimited pleasure. You can have a relaxing feeling and sensation beyond comparison. They will bring the perfect night and unlimited relationship that you can feel.
              Browse our gallery and pick the one dream girl or more than one of your choices. Our escort call girls are superb at making your fantasies come true. We have an impressive section of pretty ladies who are your weakness. You will be astonished when you meet them in person; we provide genuine sexual activities to customers.
              Some client enjoys wild sex, and few love to be passionate in bed. Therefore, the partner should be equally fanatic and have an interest to love. Our girls are horny and know how to seduce you. One can explore the this website for a glimpse of our facilities. You will fall in love with their compassion and charming nature. We design dates according to your preference and assign the girls to allure you.
            </p>
            <p class="info-header-text">
              Get hi-profile call girl service in top cities of India with professional experience.
            </p>
            <p class="info-desc-text">
              There are numerous ways to get in touch with high-profile female escorts in Indore, yet few are reliable sources. After researching multiple options in the region; one can make out that the Tottaax agency is one of the extraordinary ones. We present cheap call girls in Indore belonging to different cities of India according to the client’s choice. Also, ensure customer satisfaction after every session. You can fix a meeting with our representatives at your convenience and flexibility. Our services are open 24 hours for you and cover all the areas of India.
              Don’t be complacent in the unsatisfactory experience of erotic pleasure. Instead, pick the one with a well-known reputation and top model call girls for your service. We eradicate your compromising state of sexual life and replace it with delightful moments of fun. You can create memories of being with charming females and cherish them. These naughty girls will go the extra mile to be with customers and seduce them. Our call gril Indore is beautiful, witty, intelligent, and gorgeous. She is a unique example of beauty with brains.
              One can hire our services for a complete satisfactory date escorts will refresh your soul. The practice of love and the game of lust is open to all men. Those who want to play soul or with multiple partners at the same time; are welcome. Our escorts are elegant and filled with grace; you can interact with them comfortably. We can arrange your dating encounters, and you can experience the difference between other sex agencies with ours. Our highly skilled hot chicks are superb in giving customers mind-blowing hand jobs, blow jobs, etc.
              We take care of erotic needs and present the thrilling practice of making love. Our Escort call girls Indore have toned bodies and attractive skin that often allure most men. They are witty too, and you can discuss with them any subject. Customers usually describe their desires and ask them to do innovative techniques of intercourse.
              High-profile escorts tend to pitch multiple men and are experts in handling different males. You can establish a connection with them instantly; after an exchange of a few messages. Escort girls in Indore powered by Tottaax agency are entertainers and have a friendly approach toward customers. Every man wants to come close to them because of their classy look and sophistication. We have high-profile escorts in India who are ladies with heads and beautiful bodies. It is a rare and unmatched combination.
              Men often stay busy with daily chores and earning eking. Thus, the less time for their pleasure and fun moments filled with eroticism. Still, they strive for such time to meet their expectation. Video call girl in Indore can do wonders when she meets you. Often, men feel bored from daily sexual activities with a partner at home and look for change. Innovation in intercourse is a blessing for males. Therefore, they love to explore new techniques and learn from our call girls.
            </p>
            <p class="info-header-text">
              What services do escorts in Indore provide?
            </p>
            <p class="info-desc-text">
              You can do many things in India that will make your trip unforgettable, such as independent call girls, girl adventures, and role-playing. Escorts in Indore provide sexual services to guys who want to meet their sexual needs. They offer both in-call and out-call services. Some women want to meet guys to fill their sex needs. In Indore, thousands of women provide escort services.
            </p>
            <p class="info-desc-text">
              There are hot call girls of all shapes, sizes, and colors, from curvy to short to blonde to black or brown, and they're ready to give you the best joys. You can find independent call girls, women, Russians, strangers, VIP models, or Indian air hostesses. They have a lot more attractive call girls available, such as Bhabhi, Bikini Beauty, Chubby, Milf, White Chick, College Teens, Air Hostess, and more. It's also possible to have a threesome or a group in this case. There are millions of women in Indore who offer escort services. Have a nice night out with one of them.
            </p>
          </div>
          <div id="whatsapp-button">
            <a href="https://api.whatsapp.com/send?phone=9241583647" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" />
            </a>
          </div>
          <div class="info-Container-3">
            <ul class="bottom-navbar">
              <li class="navbar-element"><a href="./App.js">Home</a></li>
              <li class="navbar-element"><a href="https://api.whatsapp.com/send?phone=9241583647">Contact Us</a></li>
            </ul>
            <div class="city-info">
              <h2 class="bottom-header-text">Top Cities</h2>
              <ul>
               {cityList.map((city) => (
                <div class="city">
                  <p>{city.cityName}</p>
                  <div>
                    <ol class="area-list">
                      {city.areaList.map((area) => (<li class="area-name">{area}</li>))}
                    </ol>
                  </div>
                </div>
                ))}
              </ul>
              <h2 class="bottom-header-text-2">@Copyright-2024 Cgals.com- All Rights Reserved</h2>
            </div>
          </div>
        </div>
    );
}

export default App;