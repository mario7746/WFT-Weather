export const getCondition = id => {
  let condition = ""
  switch(id){
    case 200:
      condition = "it's thunderstormin' and you got some light fuckin' rain!"
      break;
    case 201:
      condition = "you got some fuckin' thunderstorms and some fuckin' rain!"
      break;
    case 202:
      condition = "you got some fuckin' thunderstorms and the rain is coming down fucking sideways!"
      break;
    case 212:
    case 221:
      condition = "you better grab your fuckin' thunder buddy cause there's some heavy fuckin' thunderstorms out there"
      break;
    case 230:
    case 231:
      condition = "you got thunderstorms and some fuckin' drizzle"
      break;
    case 211:
      condition = "you got some fuckin' thunderstorms!"
      break;
    case 300:
    case 301:
      condition = "it's just fuckin' drizzling!"
      break;
    case 302:
      condition = "drizzly as fuck out there!"
      break;
    case 310:
    case 311:
      condition = "your right on the cusp of fuckin' drizzle and fuckin' rain!"
      break;
    case 312:
    case 313:
    case 314:
    case 321:
      condition = "they say drizzle but its fuckin' raining out there!"
      break;
    case 500:
      condition = "there's a little fuckin rain!"
      break;
    case 501:
      condition = "it's fuckin' raining!"
      break;
    case 502:
    case 503:
    case 504:
      condition = "raining cats and fuckin' dogs!"
      break;
    case 511:
      condition = "there's freeing fuckin' rain!"
      break;
    case 520:
    case 521:
      condition = "you got fuckin' showers out there!"
      break;
    case 522:
    case 531:
      condition = "it's coming down in fucking sheets!"
      break;
    case 600:
      condition = "you just got some fuckin' flurries"
      break;
    case 601:
      condition = "there's fuckin snow out there!"
      break;
    case 602:
      condition = "you got some Tony Montana amounts of pow pow outside"
      break;
    case 611:
    case 612:
      condition = "that weird fuckin' sleet bullshit"
      break;
    case 604:
    case 605:
      condition = "it's the worst fucking mix, rain and snow."
      break;
    case 620:
    case 621:
      condition = "there's some fuckin' snow showers out there!"
      break;
    case 622:
      condition = "damn is it fuckin' dumpin'"
      break;
    case 701:
      condition = "it's fucking misty out there!"
      break;
    case 711:
      condition = "there's some fuckin' smoke in the air!"
      break;
    case 721:
      condition = "you got some weird fucking hazy weather!"
      break;
    case 731:
    case 751:
    case 761:
      condition = "it's wicked fuckin' sandy and dusty out there!"
      break;
    case 741:
      condition = "it's fuckin' pea soup out there!"
      break;
    case 762:
      condition = "there's volcanic fuckin' ash coming down, get the fuck out of there!"
      break;
    case 771:
      condition = "there's fuckin' squalls my boy!!"
      break;
    case 781:
      condition = "it's a fuckin' twista!"
      break;
    case 800:
      condition = "it's clear as fuck!"
      break;
    case 801:
      condition = "there's just a few fuckin' clounds!"
      break;
    case 802:
      condition = "you got scattered fuckin' clounds!!"
      break;
    case 803:
      condition = "you got some broken fuckin' clouds!!"
      break;
    case 804:
      condition = "it's fuckin' overcast!"
      break;
    default:
      condition = "it's fuckin' weather outside!"
  }
  return condition
}