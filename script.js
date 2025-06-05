window.onload = function() {
    let array_img = [{
        filename: "20140222_131314",
        href: "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
        title: "img1",
        description: "Add a description of the image here 1"
    }, {
        filename: "20140712_203709",
        href: "https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY",
        title: "img2",
        description: "Add a description of the image here 2"
    }, {
        filename: "20190318_182928",
        href: "https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM",
        title: "img3",
        description: "Add a description of the image here 3"
    }, {
        filename: "20190422_181219",
        href: "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
        title: "img4",
        description: "Add a description of the image here 4"
    }, {
        filename: "20190422_181219",
        href: "https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU",
        title: "img4",
        description: "Add a description of the image here 5"
    }];

let categoriesDiv = "";
    for (const entry of array_img) {
        const categoryHtml = 
            `<div class="responsive">` +
                `<div class="category">` +
                    `<a target="_blank" href="${entry.href}">` +
                        `<img src="${entry.href}"` +
                            `alt="Cinque Terre" width="600" height="400">` +
                    `</a>` +
                    `<div class="desc">${entry.description}</div>` +
                `</div>` +
            `</div>`;
        
        categoriesDiv = categoriesDiv + categoryHtml; 
    }

    document.getElementsByClassName("categories")[0].innerHTML = categoriesDiv;

    console.log('categoriesDiv: ', categoriesDiv);
}