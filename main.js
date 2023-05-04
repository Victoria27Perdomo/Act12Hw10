Vue.component('chuck-card', {
    props: ['image', 'title'],
    template:
    `
        <div class="col">    
            <div class="card">
                <img class="card-img-top imgCard" v-bind:src="image" v-bind:alt="title">
                <div class="card-body">
                    <p class="card-text">{{title}}</p>
                </div>
            </div>
        </div>
    `
});

var app = new Vue({
    el: '#app',
    data: {
        chuck: [ 
            {
                icon_url: "https://img.europapress.es/fotoweb/fotonoticia_20150310130850-732359_420.jpg",
                value: "Chuck Norris can skydive into outer space."
            }, 
            { 
                icon_url: "https://movieplayer.net-cdn.it/t/images/2003/08/12/chuck-norris-22803_jpg_750x400_crop_q85.jpg",
                value: "The chief export of Chuck Norris is pain."
            },
            {
                icon_url: "https://images.uncyc.org/commons/5/5c/Chuck_Norris.jpg",
                value: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants."
            },
            {
                icon_url: "https://londonfilmandcomiccon.com/wp-content/uploads/2023/03/ChuckNorrisWeb.png",
                value: "Time waits for no man. Unless that man is Chuck Norris."
            }, 
            { 
                icon_url: "https://www.giantbomb.com/a/uploads/scale_medium/46/462814/3221502-8667199912-d2d02.jpg",
                value: "If you spell Chuck Norris in Scrabble, you win. Forever."
            }, 
        ] 
    }
});
