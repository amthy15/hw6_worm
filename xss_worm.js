// TODO: get info
//      - user id
//      - friends list
alert('get kek\'d')
const add_friend_req = new XMLHttpRequest();
const add_friend_url = 'http://csec380-core.csec.rit.edu:86/add_friend.php?id=76#';
add_friend_req.open("GET", add_friend_url);
add_friend_req.send();

const comment_confirm_req = new XMLHttpRequest();
const d = new Date();
const t = d.getTime();
const comment_confirm_url = "http://csec380-core.csec.rit.edu:86/add_comment.php?id=76&comment=hithere";
comment_confirm_req.open("POST", comment_confirm_url);
comment_confirm_req.send();
