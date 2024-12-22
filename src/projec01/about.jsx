import React from "react";

function about() {
  return (
    <div class="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
      <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div class="text-left">
          <h2 class="text-4xl font-extrabold leading-10 tracking-tight text-black sm:text-5xl sm:leading-none md:text-6xl">
            Soldier's
            <span class="font-bold text-red-700">Heart </span>
          </h2>
          <p class="max-w-md mx-auto mt-3 text-base text- sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Soldiers' Heart was created by this team as a joke, but they decided
            to make it a reality. Released in November 21, 2024, the game
            centers on a soldier fighting for his lover. The gameplay involves
            multiple levels where the player must rescue his beloved from the
            clutches of dragons. Download it to learn more! Let's fight for the
            ones we love!
          </p>
          <div class="mt-5 sm:flex md:mt-8">
            <div class="rounded-md shadow">
              <a
                href=""
                class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
              >
                Getting started
              </a>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href=""
                class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
              >
                Contribute
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div class="relative w-full p-3 rounded  md:p-8">
          <div class="rounded-lg bg-pink  text-black w-full">
            <img src="\src\assets\bg.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
