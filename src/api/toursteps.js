import introJS from "intro.js"
// import Tour from "./bootstrap-tour-standalone.min"
// import Tour from "./bootstrap-tour"


export function bootstrapTour(){
    const tour = new Tour({
        steps: [
            {
                element: "#img1",
                title: "1st Panel",
                content: "This is the first panel",
                placement: "bottom"
            },
            {
                element: "#img2",
                title: "1st Panel",
                content: "This is the second panel",
                placement: "bottom"
            }
        ],
        backdrop: true,
        storage: false
    });
    tour.init();
    tour.restart();
}

export function startTour(){
    introJS().setOptions({
        steps: [
            {
                element: document.querySelector('#img1'),
                intro: 'This step focuses on an image'
            },
            {
                element: document.querySelector('#dataGuidence'),
                intro: 'Change Pages'
            },
            {
                title: 'Farewell!',
                element: document.querySelector('#img2'),
                intro: 'And this is our final step!'
            }]
    }).start();
}

export function startTour2(){
    introJS().setOptions({
        steps: [
            {
                element: document.querySelector('#img1'),
                intro: 'Hello world!'
            },
            {
                title: 'Farewell!',
                element: document.querySelector('#img2'),
                intro: 'And this is our final step!'
            },
            {
                element: document.querySelector('#dataGuidence'),
                intro: 'Change Pages'
            },]
    }).start();
}
