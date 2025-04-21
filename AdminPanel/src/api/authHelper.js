// src/api/authHelpers.js

export const setWithExpiry = (key, value, expiryInMilliSeconds) => {
    const now = new Date();
    
    const item ={
        value,
        expiry: now.getTime() + expiryInMilliSeconds
    };
    // SetItem in localstorage
    localStorage.setItem(key, JSON.stringify(item));
};

export const getWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key);
    // If item doesn't exist
    if(!itemStr) {
        return null;
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

  //Compare the expiry time of the item with the current time
    if(now.getTime() > item.expiry){
      //If the item is expired, delete the item from local storage
        localStorage.removeItem(key);
        return null;
    }

    return item.value;
}

export const getAdminToken = () => {
    const adminToken = getWithExpiry("adminToken");
    return adminToken;
}

export const setAdminToken = (token) => {
    setWithExpiry("adminToken", token, 2*60*60*1000);   //Token expires in 2 hours
}

export const logoutAdmin = () => {
    localStorage.removeItem("adminToken");
}