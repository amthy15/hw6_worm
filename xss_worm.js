// TODO: get info
//      - user id
//      - friends list
alert('get kek\'d')
const http = new XMLHttpRequest();
const url = 'http://csec380-core.csec.rit.edu:86/add_friend.php?id=76#';
http.open("GET", url);
http.send();
