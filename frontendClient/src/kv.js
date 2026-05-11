//Routes
export const postLogin = 'https://instamay-api.onrender.com/api/auth/login';
export const postSignup = 'https://instamay-api.onrender.com/api/auth/signup';
export const postCreateProfile = 'https://instamay-api.onrender.com/api/user/createprofile';
export const getMe = 'https://instamay-api.onrender.com/api/user/me';
export const postCreateContact = 'https://instamay-api.onrender.com/api/contact/createcontact';
export const postGetProfile = 'https://instamay-api.onrender.com/api/user/getprofile';
export const postSavePost = 'https://instamay-api.onrender.com/api/post/savepost';
export const getFeed = 'https://instamay-api.onrender.com/api/post/getfeed';
export const postGetUserPost = 'https://instamay-api.onrender.com/api/post/userpost';
export const postIsFollowing = 'https://instamay-api.onrender.com/api/contact/isfollowing';
export const postFollow = 'https://instamay-api.onrender.com/api/contact/follow';
export const postUnFollow = 'https://instamay-api.onrender.com/api/contact/unfollow';
export const postUploadStauts = 'https://instamay-api.onrender.com/api/status/uploadstatus';
export const getStauts = 'https://instamay-api.onrender.com/api/status/getStatus';
export const getFollowers = 'https://instamay-api.onrender.com/api/contact/getfollowers';
export const getNotification = 'https://instamay-api.onrender.com/api/contact/getnotification';
export const getContacts = 'https://instamay-api.onrender.com/api/contact/getcontacts';
export const postMsg = 'https://instamay-api.onrender.com/api/msg/savemsg';
export const getMsg = 'https://instamay-api.onrender.com/api/msg/getmsg';

// User / auth
export const TOKEN = localStorage.getItem("TOKEN");
export const USERNAME = localStorage.getItem("USERNAME");
export const USER_PROFILE = JSON.parse(localStorage.getItem("USER_PROFILE"));
export const CONTACTS = JSON.parse(localStorage.getItem("CONTACTS"));   