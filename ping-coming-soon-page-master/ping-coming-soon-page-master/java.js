const BookInBtn = document.querySelector('.btn');
const name = document.querySelector('.name');
let URL = 'https://calendly.com/ahmed24012007/meeting'


BookInBtn.addEventListener("click", ()=>{
    const username = name.value
    const url = `${URL}?name=${username}`
    window.open(url, '_blank')
});




/* template literrals
string interpolation hetha heya hethi structure ${ }
the idea:
we combine the base url(nte3 calendly) with the users
name bch yssirlou prefill mba3ed
 */












/* 3afsa behya:
so ken nhebou n3aytou el link inside of an html element
which is base "a href"
el method:
na3mlou varibale that called URL
 w n3aytou ll <a> bel id wala el class
w mba3ed console.log(URL.href(no value))
el talkhis: el value m3a el txt wel href m3a links
*/