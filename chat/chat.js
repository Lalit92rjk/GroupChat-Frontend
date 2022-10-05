
let txt = document.querySelector('#inptext');
let sendmsg = document.querySelector('.sendmsg');
let allmsgs = document.querySelector('.messages');
let token = localStorage.getItem('token');
let signout = document.querySelector('#signout');
let welc = document.querySelector('#welcomeuser');
let nam = '';
axios.get('http://localhost:3000/user', {
  headers: { authorization: token },
})
  .then(result => {
    nam += result.data[0].name;
    console.log(nam);
    welc.innerHTML = `Welcome ${result.data[0].name}`;
  })
  .catch(err => {
    console.log(err);
  })



sendmsg.addEventListener('click', (e) => {
  let token = localStorage.getItem('token');

  let msg = txt.value;

  let obj = {
    message: msg
  }
  axios.post("http://localhost:3000/chatmessage", obj, {
    headers: { authorization: token },
  })
  .then(result=>{
      console.log(result);
      txt.value="";
  })
  .catch(err=>{
    console.log(err);
  })
});


signout.addEventListener('click', () => {

  localStorage.clear();
  location.replace('../login/login.html')
})
