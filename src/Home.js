import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const images = [
        { id: 1, name: 'Chich Barak', price:10, imageUrl: 'image/frozen/chich barak.jpg' },
        { id: 2, name: 'Chicken Cordon Bleu', price: 15, imageUrl: 'image/frozen/cordon blue.jpg' },
        { id: 3, name: 'Chicken Nuggets', price: 15, imageUrl: 'image/frozen/nuggets.jpg' },
        { id: 4, name: 'Chicken Burger', price: 15, imageUrl: 'image/frozen/buger.jpg' },
        { id: 5, name: 'Kebbeh', price: 20, imageUrl: 'image/frozen/kebe.jpg' },
        { id: 6, name: 'Kebbeh bl Sayniyeh', price: 20, imageUrl: 'image/frozen/kebeh bl sayniye.jpg' },
        { id: 7, name: 'Kebbeh hile', price: 30, imageUrl: 'image/frozen/kebbehHile.jpg' },
        { id: 8, name: 'Sanbousik', price: 10, imageUrl: 'image/frozen/sanbousik.jpg' },
        { id: 9, name: 'Lasagna', price: 30, imageUrl: 'image/frozen/lazanya.jpg' },
        { id: 10, name: 'Nouille', price: 30, imageUrl: 'image/frozen/nouille.jpg' },
        { id: 11, name: 'White Pasta', price: 20, imageUrl: 'image/frozen/pasta blanche.jpg' },
        { id: 12, name: 'Red Pasta', price: 20, imageUrl: 'image/frozen/pasta rouge.jpg' },
        { id: 13, name: 'Souflée', price: 20, imageUrl: 'image/frozen/soufle.jpg' },
        { id: 14, name: 'Pizza', price: 20, imageUrl: 'image/frozen/pizza.jpg' },
        { id: 15, name: 'Fatayer spinach', price: 15, imageUrl: 'image/frozen/ftayer.jpg' },
        { id: 16, name: 'Sfiha', price: 20, imageUrl: 'image/frozen/sfiha.jpg' },
        { id: 17, name: 'Koussa', price: 15, imageUrl: 'image/frozen/kousa.jpg' },
        { id: 18, name: 'Bazella w Rice', price: 10, imageUrl: 'image/frozen/bazellaRez.jpg' },
        { id: 19, name: 'Chicken and Rice', price: 20, imageUrl: 'image/frozen/chickenRiz.jpg' },
        { id: 20, name: 'Meat and Rice', price: 25, imageUrl: 'image/frozen/meatRez.jpg' }
      ];
      const sweets = [
        { id: 1, name: 'Aych Saraya', price: 25, imageUrl: 'image/sweet/aychlsaraya.jpg' },
        { id: 6, name: 'Layali loubnan', price: 30, imageUrl: 'image/sweet/lyaliLebnan.jpg' },
        { id: 9, name: 'Mhalabiye', price: 25, imageUrl: 'image/sweet/mhalabiye.jpeg' },
        { id: 4, name: 'Chocolate Custard', price: 20, imageUrl: 'image/sweet/custard.jpg' },
        { id: 5, name: 'White Custard', price: 20, imageUrl: 'image/sweet/custardVanille.jpg' },
        { id: 10, name: 'Rice and Milk', price: 20, imageUrl: 'image/sweet/milkRice.jpg' },
        { id: 3, name: 'Cookies', price: 30, imageUrl: 'image/sweet/cookies.jpg' },
        { id: 2, name: 'Cake', price: 20, imageUrl: 'image/sweet/cake.jpg' },
        { id: 11, name: 'Sfouf', price: 20, imageUrl: 'image/sweet/sfouf.jpg' },
        { id: 8, name: 'Meghli', price: 30, imageUrl: 'image/sweet/meghle.jpg' },
        { id: 7, name: 'Maakroun', price: 30, imageUrl: 'image/sweet/ma3kron.jpg' }
      ];
      const [language,setLanguage]=useState(false);
      function Lang(){
        const Btn= document.getElementById("btn");
        setLanguage(!language);
        (language===true?Btn.innerHTML="Arabic":Btn.innerHTML="English");
      }

    return (
        <div>
          <header id="header">
          <img src="image/logo.jpg" alt="logo"></img>
          <p id="btn" onClick={Lang}>Arabic</p>
          </header>
          <nav id="socialMedia">
                    <a href="#header"><i class='bx bx-home'></i></a>
                    <a href="#product"><i class='bx bx-bowl-hot' ></i></a>
                    <a href="#sweet"><i class='bx bx-cake' ></i></a>
                    <a href="https://www.instagram.com/regal.lb/" target="_blank" rel="insta noreferrer"><i class='bx bxl-instagram' ></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100028107536859" target="_blank" rel="facebook noreferrer"><i class='bx bxl-facebook' ></i></a>
                    <a href="https://www.tiktok.com/@regal.lb?lang=en" target="_blank" rel="tiktok noreferrer"><i class='bx bxl-tiktok' ></i></a>
                    <a href="https://wa.me/96170080049?text=Hello%20I%20am%20texting%20for%20an%20order" target="_blank" rel="whatsapp noreferrer"><i class='bx bxl-whatsapp' ></i></a> 
          </nav>
          <main id="main1">
                <article id="article1">
                 {language===true?
                 <>
                  <h1>معلومات عنا</h1>
                 <div style={{direction:"rtl",textAlign:"right",margin:"1%",fontSize:"100%",textIndent:"4%"}}>
                  <p>

                  مرحبًا بكم في عائلة <b>ريجال</b>، حيث نؤمن بأهمية تغيير تجارب تناول الطعام العائلية.
    في <b>ريجال</b>، نحن نتفهم التحديات التي يواجهها الآباء المشغولون الذين يسعون جاهدين لتوفير الطعام الصحي
     وجبات لأطفالهم. مهمتنا بسيطة ولكنها عميقة - تقديم ملاذ لذيذ
      من الوجبات السريعة دون المساومة على الراحة.
                  </p>
                  <p>

                  في قلب مطبخنا، نعطي الأولوية لاستخدام الأطعمة الطازجة،
      مكونات عالية الجودة، وصياغة الوجبات التي توازن التغذية بعناية
      ونكهة. سواء اخترت خياراتنا الطازجة الجاهزة للأكل أو اخترت ذلك
       الراحة التي توفرها وجباتنا المجمدة، حيث يتم إعداد كل طبق بعناية
       توفير الوقت دون المساس بجودة الطبخ المنزلي.
                  </p>
                  <p>

                  نحن لسنا مجرد شركة أغذية؛ نحن فريق متخصص متحمس للترويج لـ
        نمط حياة متوازن. هدفنا هو تغذية الروابط الجسدية والعائلية. ينضم
        معنا في رحلة الطهي هذه، حيث نسهل عليك تذوق متعة المنزل
        وجبة مطبوخة، حتى في أكثر أيامك ازدحامًا.
                  </p>
                  <p>
                  في <b>ريجال</b>، نحن أكثر من مجرد مزود طعام، فنحن شريكك في خلق تجربة لا تنسى،
         لحظات مغذية حول مائدة العائلة.
                  </p>
                 </div>
                 </>:
                 <>
                 <h1>About Us</h1>
                 <div id="paragraphe">
                 <p>
                 Welcome to <b>REGAL</b> family , where we believe in transforming family dining experiences.
    At <b>REGAL</b>, we understand the challenges faced by busy parents striving to provide wholesome
     meals for their children. Our mission is simple yet profound to offer a delicious escape
      from fast food without compromising on convenience.</p>
      <p>In the heart of our kitchen, we prioritize the use of fresh, 
      quality ingredients, carefully crafting meals that balance nutrition 
      and flavor. Whether you choose our ready-to-eat fresh options or opt for
       the convenience of our frozen meals, each dish is thoughtfully prepared to 
       save you time without compromising on the goodness of homemade cooking.</p>
       <p>We're not just a food company; we're a dedicated team passionate about promoting a
        balanced lifestyle. Our goal is to nourish both body and family connections. Join 
        us in this culinary journey, where we make it easy for you to savor the joy of a home
        cooked meal, even on your busiest days.</p>
        <p>At <b>REGAL</b>, we're more than just a food provider we're your partner in creating memorable,
         nutritious moments around the family table. 
                  </p>
                  </div>
                  </>}    
                 </article>
                     <img src="image/table.jpg" alt="table"/>
          </main>
          <main id="main2">
             <article id="article2">
              {language===false?<>
                 <h1>Contact us</h1>
                 <p>Call us or whatsapp on number +961 70 080049</p>
                 <h1>Delivery</h1>
                 <p>Experience the convenience of <b>REGAL</b> delivered straight to your doorstep in <u>Beirut</u>! 
                To ensure the freshest and most delightful meals, we kindly request our valued customers 
                to place their orders by contacting us at least <u>2 days in advance</u>. Simply give us a call, 
                and we'll make sure your order is prepared with the utmost care, bringing the goodness of homemade 
                cooking to your table, hassle-free. Thank you for choosing <b>REGAL</b> where nourishing your family is our 
                top priority.</p>
                </>:< div style={{direction:"rtl",textAlign:"right"}}>
                <h1>اتصل بنا</h1>
                 <p style={{fontSize:"120%"}}>أتصل بنا او واتس اب على الرقم 0096170080049</p>
                 <h1>ديليفري</h1>
                 <p style={{fontSize:"120%"}} >استمتع بتجربة راحة <b>ريجال</b> التي يتم توصيلها مباشرة إلى عتبة داركم في بيروت!
                لضمان وجبات طازجة ولذيذة، نرجو من زبائننا الكرام
                لتقديم طلباتهم عن طريق الاتصال بنا قبل يومين على الأقل. ببساطة اتصل بنا،
                وسنتأكد من إعداد طلبك بعناية فائقة، لنقدم لك أفضل جودة محلية الصنع
                الطبخ على طاولتك، بدون متاعب. شكرًا لاختيارك <b>ريجال</b> حيث تغذية عائلتك هي هدفنا
                الاولوية القصوى.</p>
                </div>}
               </article>
               <img src="image/frozen/mou3ajanet.jpg" alt="pic"/>
          </main>
            <div id="product" className="product">
                    {language===true?<h1>ماذا نفعل</h1>:<h1>What we do</h1>} 
                 <div className="image-container">
                    {images.map(image => (
                    <div key={image.id} className="image-card">
                    <img src={image.imageUrl} alt={image.name} />
                    <div className="image-info">
                    <h2>{image.name}</h2>
                    <p>Price: {image.price}$</p>
                    </div>
                    </div>
                            ))}
                </div>
            </div>
            <div id="sweet" className="sweet">
            {language===true?<h1>الحلويات</h1>:<h1>Homemade Sweets</h1>}
      <div className="image-container">
        {sweets.map(sweet => (
          <div key={sweet.id} className="image-card">
            <img src={sweet.imageUrl} alt={sweet.name} />
            <div className="image-info">
              <h2>{sweet.name}</h2>
              <p>Price: {sweet.price}$</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <footer>
      <ul>
        <li><p>Copyright<i class='bx bx-copyright'></i>Regal-2024</p></li>
        <li><p>Contact Us:<dfn>+96170080049</dfn> / regal.bakery.lb@gmail.com</p></li>
        <li><Link to="/Privacy">Privacy Policy</Link> | <Link to="/Terms">Terms of Service</Link></li>
        </ul>
    </footer>
   </div>
    );
  }

export default Home;
