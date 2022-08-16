import React, { useEffect, useState } from "react";

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
  const getCookie = () => getItem(key) || defaultValue || JSON.stringify({});
  const [cookie, setCookie] = useState(getCookie());
  const updateCookie = (value, numberOfDays) => {
    setCookie(JSON.stringify(value));
    setItem(key, JSON.stringify(value), numberOfDays || 1);
  };
  const eraseCookie = () => {
    document.cookie = key + "=; Max-Age=0";
  };

  return [JSON.parse(cookie), updateCookie, eraseCookie];
};

export default useCookie;
