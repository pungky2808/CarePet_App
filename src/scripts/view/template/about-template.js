const createAboutTemp = (aboutData) => `
${aboutData.map((data) => `

<section class="about">
        <div class="about-main">
            <img src="${data.image}" alt="foto diri">
            <div class="about-text">
                <h1>${data.nama}</h1>
                <h5>${data.asal}</h5>
                <p>${data.description}</p>
                <a href="${data.href}" target="_blank">More</a>
            </div>
        </div>
    </section>
    `).join(' ')}
`;

export default createAboutTemp;
