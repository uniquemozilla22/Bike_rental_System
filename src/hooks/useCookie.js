import React, { useState } from "react";

const setItem = (key, value, numberOfDays) => {
  const now = new Date();
  // set the time to be now + numberOfDays
  now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000);
  document.cookie = `${key}=${value};     expires=${now.toUTCString()}; path=/`;
};

const getItem = (key) =>
  document.cookie.split("; ").reduce((total, currentCookie) => {
    const item = currentCookie.split("=");
    const storedKey = item[0];
    const storedValue = item[1];
    return key === storedKey ? decodeURIComponent(storedValue) : total;
  }, "");

const useCookie = (key, defaultValue) => {
  const getCookie = () => getItem(key) || defaultValue;
  const [cookie, setCookie] = useState(getCookie());

  const updateCookie = (value, numberOfDays) => {
    setCookie(value);
    setItem(key, value, numberOfDays);
  };

  return [cookie, updateCookie];
};
export default useCookie;
