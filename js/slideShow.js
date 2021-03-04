$(document).ready(function () {
  $(".slideWiz").slideWiz({
    auto: true,
    speed: 5000,
    row: 12,
    col: 35,
    animation: ["flip", "slice", "box3D", "pixel", "fade", "glide", "card"],
    file: [
      {
        src: {
          cover: "img/cover_1.jpg",
        },
        title: "Essence of Premium & Stylish Life",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        descLength: 220,
        button: {
          text: "Dummy Text",
          url: "#",
          class: "btn btn-medium btn-danger",
        },
      },
      {
        src: {
          cover: "img/cover_2.jpg",
        },
        title: "Essence of Premium & Stylish Life",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        descLength: 220,
        button: {
          text: "Dummy Text",
          url: "#",
          class: "btn btn-medium btn-primary",
        },
      },
      {
        src: {
          cover: "img/cover_3.jpg",
        },
        title: "Essence of Premium & Stylish Life",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        descLength: 220,
        button: {
          text: "Dummy Text",
          url: "#",
          class: "btn btn-medium btn-primary",
        },
      },
      {
        src: {
          cover: "img/cover_4.jpg",
        },
        title: "Essence of Premium & Stylish Life",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        descLength: 220,
        button: {
          text: "Dummy Text",
          url: "#",
          class: "btn btn-medium btn-primary",
        },
      },
    ],
  });
});
