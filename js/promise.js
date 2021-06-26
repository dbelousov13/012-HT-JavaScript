"use strict";

fetch("./../dbUser.json")
  .then((response) => response.json())
  .then((data) => console.log("data :>> ", data))
  .catch((e) => console.error(e));
