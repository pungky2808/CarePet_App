const createLingPage = (dataLing) => `
${dataLing.map((data) => `
    <article class="post-item">
        <img class="post-item__thumbnail"
            src="${data.img}"
        <div class="post-item__content">
            <h1 class="post-item__title">${data.title}</h1>
            </a> 
            <p class="post-item__date">${data.createAt}</p>
            <p class="post-item__description" >${data.opening}</p>
        </div> 
        <details>
            <h4>${data.sub_title_1}</h4>
            <p>${data.desc_sub1}</p>
            <h4>${data.sub_title_2}</h4>
            <p>${data.desc_sub2}</p>
            <h4>${data.sub_title_3}</h4>
            <p>${data.desc_sub3}</p>
            <h4>${data.sub_title_4}</h4>
            <p>${data.desc_sub4}</p>
            <h4>${data.sub_title_5}</h4>
            <p>${data.desc_sub5}</p>
        </details>  
    </article>
    `).join(' ')}
`;

export default createLingPage;
