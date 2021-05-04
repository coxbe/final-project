var userVarName = "Variable";
var homeContent = `    <div class="home">
<div class="hero">
<div class="header"><h1>Header goes here</h1><h2>Less important text goes here</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
    <p>Fugiat aliquid minus nemo sed est. </p>
<div class="read-more">Read More</div></div></div>

<div class="quote">
    <div class="q"><h1>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo”
    </h1></div>
    <div class="name"><h1>John Smith</h1></div>
    <div class="name2"><h1>Corporation CEO, books author.</h1></div>
</div>



<div class="events">
    <div class="events-top-section">
        <h1>UPCOMING EVENTS: <span></span></h1>
    </div>



    <div class="events-bottom-section">

    <div class="post">
        <div class="date">
            <header>06 <div class="month">JUN</div></header>
        </div>
    
    <div class="blogwords">
    <h1>Sed et persipiatis unde omnis iste natus</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
    </div>
    </div>


        <div class="post">
            <div class="date">
                <header>30 <div class="month">JUL</div></header>
            </div>
    
    <div class="blogwords">
    <h1>Sed et persipiatis unde omnis iste natus</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
    </div>
    </div>


        <div class="post">
            <div class="date">
                <header>30 <div class="month">AUG</div></header>
            </div>
    
    <div class="blogwords">
    <h1>Sed et persipiatis unde omnis iste natus</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
    </div>
    </div>


        <div class="post">
            <div class="date">
                <header>23 <div class="month">NOV</div></header>
            </div>
    
    <div class="blogwords">
    <h1>Sed et persipiatis unde omnis iste natus</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
    </div>
    </div>


        <div class="post">
            <div class="date">
                <header>23 <div class="month">DEC</div></header>
            </div>
    
    <div class="blogwords">
    <h1>Sed et persipiatis unde omnis iste natus</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
    </div>
    </div></div></div></div>`;
var aboutContent =
  '<div class="about"><div class="about-image"></div><div class="about-section"><div class="history"><h1>OUR HISTORY: <span></span></h1><div class="history2"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.  </p></div></div></div></div>';
var galleryContent =
  '<div class="gallery"><div class="galwords"><h1>GALLERY: <span></span></h1></div><div class="galleryimages1"><a class="galleryimg1" href="#"id="gallery1"></a><div class="galleryimg2"></div><div class="galleryimg3"></div></div><div class="galleryimages2"><div class="galleryimg4"></div><div class="galleryimg5"></div></div></div><div class="gallery1"><div class="gal1"></div><div class="galheader1"><h1>1.</h1><h2>food festival</h2></div><div class="galwords1"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div></div><div class="gallery2"><div class="gal2"></div><div class="galheader2"><h1>2.</h1><h2>dee-jay</h2></div><div class="galwords2"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div></div><div class="gallery3"><div class="gal3"></div><div class="galheader3"><h1>3.</h1><h2>speech</h2></div><div class="galwords3"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div></div><div class="gallery4"><div class="gal4"></div><div class="galheader4"><h1>4.</h1><h2>open foodfest</h2></div><div class="galwords4"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div></div><div class="gallery5"><div class="gal5"></div><div class="galheader5"><h1>5.</h1><h2>international</h2></div><div class="galwords5"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div></div>';
var gallery1Content = "";
var gallery2Content = "";
var gallery3Content = "";
var gallery4Content = "";
var gallery5Content = "";
var blogContent =
  '<div class="blog"><div class="blogheader"><h1>BLOG: <span></span></h1></div><div class="blog-bottom-section"><div class="blog1"><div class="post"><div class="date"><header>06 <div class="month">JUN</div></header></div><div class="bloginfo"><a href="#"id="blog1"><div class="blogimg"></div></a><div class="blogwords"><h1>Sed et persipiatis unde omnis iste natus</h1><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p></div></div></div><div class="post"><div class="date"><header>30 <div class="month">JUL</div></header></div><div class="bloginfo"><a id="about" href="#"><div class="blogimg"></div></a><div class="blogwords"><h1>Sed et persipiatis unde omnis iste natus</h1><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p></div></div></div></div><div class="blog2"><div class="post"><div class="date"><header>30 <div class="month">AUG</div></header></div><div class="bloginfo"><a id="about" href="#"><div class="blogimg"></div></a><div class="blogwords"><h1>Sed et persipiatis unde omnis iste natus</h1><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p></div></div></div><div class="post"><div class="date"><header>23 <div class="month">NOV</div></header></div><div class="bloginfo"><a id="about" href="#"><div class="blogimg"></div></a><div class="blogwords"><h1>Sed et persipiatis unde omnis iste natus</h1><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </p></div></div></div></div><div class="blog3"><div class="post"><div class="date"><header>23 <div class="month">DEC</div></header></div><div class="bloginfo"><a id="about" href="#"><div class="blogimg"></div></a><div class="blogwords"><h1>Sed et persipiatis unde omnis iste natus</h1><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p></div></div></div></div></div></div><div class="blogone"><div class="b1"></div><div class="blogheader1"><div class="date"><header>06 <div class="month">JUN</div></header></div></div><div class="bwords1"><h1>Header #1:</h1><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p><h1>Header #2:</h1><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div></div><div class="blogone"><div class="b1"></div><div class="blogheader1"><div class="date"><header>30 <div class="month">JUL</div></header></div></div><div class="bwords1"><h1>Header #1:</h1><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p><h1>Header #2:</h1><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div></div><div class="blogone"><div class="b1"></div><div class="blogheader1"><div class="date"><header>30 <div class="month">AUG</div></header></div></div><div class="bwords1"><h1>Header #1:</h1><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p><h1>Header #2:</h1><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div></div><div class="blogone"><div class="b1"></div><div class="blogheader1"><div class="date"><header>23 <div class="month">NOV</div></header></div></div><div class="bwords1"><h1>Header #1:</h1><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p><h1>Header #2:</h1><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div></div><div class="blogone"><div class="b1"></div><div class="blogheader1"><div class="date"><header>23 <div class="month">DEC</div></header></div></div><div class="bwords1"><h1>Header #1:</h1><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p><h1>Header #2:</h1><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div></div>';
var blog2Content = "";
var blog3Content = "";
var blog4Content = "";
var blog5Content = "";
var blog1Content = "";
var contactContent =
  '<div class="contact"><div class="contact-header"><h1>CONTACT US: <span></span></h1></div><div class="contactus"><div class="contactform"><div class="row1"><div class="text1"><input type="text-field" type="text" placeholder="   Your name..."></div></div><div class="row2"><div class="text1"><input type="text-field" type="text" placeholder="   Email address..."></div></div><div class="row3"><div class="text1"><input type="text-field" type="text" placeholder="   Company..."></div></div><div class="row4"><div class="message"><input type="text" placeholder="   Message..."></div></div><div class="send">SEND MESSAGE</div></div><div class="map"></div></div></div>';

export function getPageContent(pageId) {
  $("#app").html(eval(pageId));
}
