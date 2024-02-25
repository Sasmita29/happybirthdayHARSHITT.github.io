var i = 0;
var txt1 =
  "HAPPYYY BIRTHDAYYYY HARSHITTT  <<               I feel incredibly fortunate to be able to celebrate this special day with you. <<<               I hope to continue celebrating many more birthdays together,                                                                         > HAPPY BIRTHDAY and  I wish for your happiness and < fulfillment in the years ahead.  <<                  I wish I could do something even more special to make you feel cherished not just today,< but every day. <<                           My greatest joy is seeing you smile, < your happiness means everything to me.                                                     > I've said it many times before, but you truly are special to me, and < I thank the universe for bringing you into my life.                     << May the blessings of the divine ensure your eternal happiness.< May your family be forever embraced by joy.< May your life's path be devoid of any adversity or hardship.                                                     > I hope you stay as charming and adorable as ever.                    << Here's to your continued success and happiness in life.                                                             >I had written down all my wishes for you in a letter,< but you've already read it. <(GO READ IT AGAIN) |                  <<<< Hope so tenu jada pain na ho reha hove. <TAKE CARE< HAPPY BIRTHDAY ONCE AGAIN.";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
