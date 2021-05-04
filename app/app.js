import * as MODEL from "../model/model.js";
var currentHeroImage = "home";

function init() {
  $("nav a").click(function (e) {
    let btnId = this.id;
    let contentID = btnId + "Content";

    // if (btnId == "home") {
    //   $(`#classSwitch`).closest(`div#classSwitch`).addClass(hero);
    //   MODEL.getPageStuff(heroID);
    //   MODEL.getPageContent(contentID, addPromoListeners);
    // } else {
    //   removeAllClass();
    //   $(`#classSwitch`).closest(`div#classSwitch`).addClass(btnId);
    //   MODEL.getPageStuff(heroID);
    //   MODEL.getPageContent(contentID);
    // }
    // FROM LECTURE?

    if (btnId == "home") {
      $(".hero").css("display", "block");
      $(".hero").removeClass("${currentHeroImage}-hero-image");
      // $("#app").removeClass("otherPadding").addClass("homePadding");
      // $(".white_nav").removeClass(".white_nav").addClass(".black_nav");

      // currentHeroImage = btnId;
      MODEL.getPageContent(contentID);
    }

    if (btnId == "about") {
      removeHero(currentHeroImage);
      $(".white_nav").removeClass("white_nav").addClass("black_nav");
      MODEL.getPageContent(contentID);
    } else if (btnId == "blog") {
      removeHero(currentHeroImage);
      $(".white_nav").removeClass("white_nav").addClass("black_nav");
      $("a").click(function (e) {
        let btnId = this.id;
        let contentID = btnId + "Content";
        console.log(this.id);
        MODEL.getPageContent(contentID);
      });
      addPromoListeners();
      MODEL.getPageContent(contentID);
    } else if (btnId == "gallery") {
      removeHero(currentHeroImage);
      $(".white_nav").removeClass("white_nav").addClass("black_nav");
      $(".galleryimages1 a").click(function (e) {
        let btnId = this.id;
        let contentID = btnId + "Content";
        console.log(this.id);
        MODEL.getPageContent(contentID);
      });
      addPromoListeners();
      MODEL.getPageContent(contentID);
    } else if (btnId == "contact") {
      removeHero(currentHeroImage);
      $(".white_nav").removeClass("white_nav").addClass("black_nav");
      addPromoListeners();
      MODEL.getPageContent(contentID);
    } else if (btnId == "home") {
      $(".black_nav").removeClass("black_nav").addClass("white_nav");
      MODEL.getPageContent(contentID);
    } else {
      removeHero(currentHeroImage);
      MODEL.getPageContent(contentID);
    }

    $(".hero-content .page-name").html(btnId);
  });

  $(".outside a").click(function (e) {
    console.log("here");
  });

  // $(".gallery a").click(function (e) {
  //   let btnId = this.id;
  //   let contentID = btnId + "Content";
  //   MODEL.getPageContent(contentID, addPromoListeners);
  //   console.log("clicked");
  // });

  // $(".bloginfo a").click(function (e) {
  //   let btnId = this.id;
  //   let contentID = btnId + "Content";
  //   MODEL.getPageContent(contentID, addPromoListeners);
  //   console.log("clicked");
  // });
}

function removeHero(currentHeroImage) {
  $(".hero").removeClass(`${currentHeroImage}-hero-image`);
  $(".hero").css("dislay", "none");
  $("#app").removeClass("homePadding").addClass("otherPadding");
  currentHeroImage - currentHeroImage;
}

function addPromoListeners() {
  // paste the promo listeners here
  // $("#app .about .heroThree a").click(function (e) {
  //   console.log(this.id);
  // });

  $(".blog .blog-bottom-section .blog1 .post .bloginfo a").click(function (e) {
    let btnId = this.id;
    let contentID = btnId + "Content";
    // console.log(this.id);
    MODEL.getPageContent(contentID, addPromoListeners);
  });

  $("gallery a").click(function (e) {
    let btnId = this.id;
    let contentID = btnId + "Content";
    console.log(this.id);
    MODEL.getPageContent(contentID);
  });
}

$(document).ready(function () {
  init();
  MODEL.getPageContent("homeContent");
  // $("#app").addClass("homePadding");
});
