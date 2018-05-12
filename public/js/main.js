const HEADER = `
<div style="background-color: orange; position: fixed; width: 100%; padding: 0 100px 0 100px;z-index:1">
    <img src="https://adjob.asia/wp-content/uploads/2016/12/adjob_small.png" style="display: inline-block;">
    <a href="https://fb.me" target="_blank"><i class="fab fa-lg fa-facebook pull-right" style="font-size: 20px; color:#3b5bdb;background-color:#ffffff;margin: 10px 0 10px 0"></i></a>
    <a href="https://youtube.com" target="_blank"><i class="fab fa-youtube pull-right" style="font-size: 20px; color: red; margin: 10px 10px 10px 0"></i></a>
    <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram pull-right" style="font-size: 20px;color: red; margin: 10px 10px 10px 0"></i>
</div>
`;

const NAVIGATION_BAR = (`
    <div style="padding:43px 0 0 0;margin:0 0 10px 0;background-color:#a70e1a">
    <a
    style="
        color: white;
        padding: 20px;
        display: inline-block;
        text-decoration:none;
    "
    href="./index.html">index</a>

    
        <a
        style="
            color: white;
            padding: 20px;
            display: inline-block;
            text-decoration:none;
        "
        href="./page_1.html">page_1</a>
        <a
        style="
            color: white;
            padding: 20px;
            display: inline-block;
            text-decoration:none;
        "
        href="./page_2.html">page_2</a>
        <a
        style="
            color: white;
            padding: 20px;
            display: inline-block;
            text-decoration:none;
        "
        href="./page_3.html">page_3</a>
        <a
        style="
            color: white;
            padding: 20px;
            display: inline-block;
            text-decoration:none;
        "
        href="./page_4.html">page_4</a>
    </div>
`);

document.addEventListener('DOMContentLoaded', e => {
    console.log(e);
    var head = document.head,
        body = document.body;
    var bootstrap = {
        js: document.createElement('script'),
        css: document.createElement('link')
    },
    fontawesome = document.createElement('link')
    //<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    bootstrap.js.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js';
    bootstrap.css.rel = 'stylesheet';
    bootstrap.css.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
    fontawesome.rel = 'stylesheet';
    fontawesome.href = 'https://use.fontawesome.com/releases/v5.0.13/css/all.css';

    head.appendChild(bootstrap.js);
    head.appendChild(bootstrap.css);
    head.appendChild(fontawesome)

    //components
    body.querySelector('div#navigation-bar').innerHTML = NAVIGATION_BAR;
    body.querySelector('div#header').innerHTML = HEADER;
});