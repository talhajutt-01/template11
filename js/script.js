const title = document.getElementById('title');


const nav0 = document.getElementById('nav0');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');

const h0 = document.getElementById('h0');
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');

const a0 = document.getElementById('a0');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');

const s0 = document.getElementById('s0');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7');
const s8 = document.getElementById('s8');
const s9 = document.getElementById('s9');
const s10 = document.getElementById('s10');
const s11 = document.getElementById('s11');
const s12 = document.getElementById('s12');
const s13 = document.getElementById('s13');

const p0 = document.getElementById('p0');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');
const p7 = document.getElementById('p7');
const p8 = document.getElementById('p8');
const p9 = document.getElementById('p9');
const p10 = document.getElementById('p10');
const p11 = document.getElementById('p11');
const p13 = document.getElementById('p12');
const p12 = document.getElementById('p13');
const p14 = document.getElementById('p14');


const t0 = document.getElementById('t0');
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const t5 = document.getElementById('t5');
const t6 = document.getElementById('t6');
const t7 = document.getElementById('t7');
const t8 = document.getElementById('t8');
const t9 = document.getElementById('t9');

const c0 = document.getElementById('c0');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');

const f0 = document.getElementById('f0');
const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const f4 = document.getElementById('f4');
const f5 = document.getElementById('f5');
const f6 = document.getElementById('f6');
const f7 = document.getElementById('f7');
const f8 = document.getElementById('f8');
const f9 = document.getElementById('f9');

const g0 = document.getElementById('header');
const g1 = document.getElementById('about');
const g2 = document.getElementById('service');
const g3 = document.getElementById('project');
const g4 = document.getElementById('project1');
const g5 = document.getElementById('team');
const g6 = document.getElementById('client');
const g7 = document.getElementById('footer');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');
const img9 = document.getElementById('img9');
const img10 = document.getElementById('img10');
const img11 = document.getElementById('img11');
const img12 = document.getElementById('img12');
const img13 = document.getElementById('img13');
const img14 = document.getElementById('img14');
const img15 = document.getElementById('img15');


// Function to update content for a specific element
function updateContent(element, newValue) {
    // Update content for the element
    element.textContent = newValue;
  }
  
  // Function to update content for an <a> tag
  function updateLinkContent(linkElement, newValue) {
    // Update content for the <a> tag
    linkElement.innerText = newValue;
  }

  function updateImageSrc(imageElement, newSrc) {
    // Update the src attribute of the image element
    imageElement.src = newSrc;
}
function updateBackgroundColor(element, newColor) {
  // Update the background color for the element
  element.style.backgroundColor = newColor;
}

  
  // Fetch JSON data from the text file
  function updatePageContent(pageName) {
    console.log('Updating content for page:', pageName);
    fetch('t.txt')
        .then(response => response.json())
        .then(jsonData => {
            // Update content based on the current page
            updateContent(title, jsonData.title.title);

            updateLinkContent(nav0, jsonData.nav.nav0);
            updateLinkContent(nav1, jsonData.nav.nav1);
            updateLinkContent(nav2, jsonData.nav.nav2);
            updateLinkContent(nav3, jsonData.nav.nav3);
            updateLinkContent(nav4, jsonData.nav.nav4);

            updateContent(h0, jsonData.banner.h0);
            updateContent(h1, jsonData.banner.h1);
            updateContent(h2, jsonData.banner.h2);
            updateContent(h3, jsonData.banner.h3);

            updateContent(a0, jsonData.about.a0);
            updateContent(a1, jsonData.about.a1);
            updateContent(a2, jsonData.about.a2);

            updateContent(s0, jsonData.service.s0);
            updateContent(s1, jsonData.service.s1);
            updateContent(s2, jsonData.service.s2);
            updateContent(s3, jsonData.service.s3);
            updateContent(s4, jsonData.service.s4);
            updateContent(s5, jsonData.service.s5);
            updateContent(s6, jsonData.service.s6);
            updateContent(s7, jsonData.service.s7);
            updateContent(s8, jsonData.service.s8);
            updateContent(s9, jsonData.service.s9);
            updateContent(s10, jsonData.service.s10);
            updateContent(s11, jsonData.service.s11);
            updateContent(s12, jsonData.service.s12);
            updateContent(s13, jsonData.service.s13);

            updateContent(p0, jsonData.project.p0);
            updateContent(p1, jsonData.project.p1);
            updateContent(p2, jsonData.project.p2);
            updateContent(p3, jsonData.project.p3);
            updateContent(p4, jsonData.project.p4);
            updateContent(p5, jsonData.project.p5);
            updateContent(p6, jsonData.project.p6);
            updateContent(p7, jsonData.project.p7);
            updateContent(p8, jsonData.project.p8);
            updateContent(p9, jsonData.project.p9);
            updateContent(p10, jsonData.project.p10);
            updateContent(p11, jsonData.project.p11);
            updateContent(p12, jsonData.project.p12);
            updateContent(p13, jsonData.project.p13);
            updateContent(p14, jsonData.project.p14);

            updateContent(t0, jsonData.team.t0);
            updateContent(t1, jsonData.team.t1);
            updateContent(t2, jsonData.team.t2);
            updateContent(t3, jsonData.team.t3);
            updateContent(t4, jsonData.team.t4);
            updateContent(t5, jsonData.team.t5);
            updateContent(t6, jsonData.team.t6);
            updateContent(t7, jsonData.team.t7);
            updateContent(t8, jsonData.team.t8);
            updateContent(t9, jsonData.team.t9);
         
            
            updateContent(c1, jsonData.client.c1);
            updateContent(c2, jsonData.client.c2);
            updateContent(c3, jsonData.client.c3);
            updateContent(c4, jsonData.client.c4);
            updateContent(c5, jsonData.client.c5);
        
    
            updateContent(f0, jsonData.footer.f0);
            updateContent(f1, jsonData.footer.f1);
            updateContent(f2, jsonData.footer.f2);
            updateContent(f3, jsonData.footer.f3);
            updateContent(f4, jsonData.footer.f4);
            updateContent(f5, jsonData.footer.f5);
            updateContent(f6, jsonData.footer.f6);
            updateContent(f7, jsonData.footer.f7);
            updateContent(f8, jsonData.footer.f8);
            updateContent(f9, jsonData.footer.f9);

            updateBackgroundColor(g0, jsonData.color.header);
            updateBackgroundColor(g1, jsonData.color.about);
            updateBackgroundColor(g2, jsonData.color.service);
            updateBackgroundColor(g3, jsonData.color.project);
            updateBackgroundColor(g4, jsonData.color.project1);
            updateBackgroundColor(g5, jsonData.color.team);
            updateBackgroundColor(g6, jsonData.color.client);
            updateBackgroundColor(g7, jsonData.color.footer);
            

            updateImageSrc(img1, jsonData.images.img1);
            updateImageSrc(img2, jsonData.images.img2);
            updateImageSrc(img3, jsonData.images.img3);
            updateImageSrc(img4, jsonData.images.img4);
            updateImageSrc(img5, jsonData.images.img5);
            updateImageSrc(img6, jsonData.images.img6);
            updateImageSrc(img7, jsonData.images.img7);
            updateImageSrc(img8, jsonData.images.img8);
            updateImageSrc(img9, jsonData.images.img9);
            updateImageSrc(img10, jsonData.images.img10);
            updateImageSrc(img11, jsonData.images.img11);
            updateImageSrc(img12, jsonData.images.img12);
            updateImageSrc(img13, jsonData.images.img13);
            updateImageSrc(img14, jsonData.images.img14);
            updateImageSrc(img15, jsonData.images.img15);
      
            // Extract the filename from the path
            const fileName = pageName.split('/').pop();

            if (fileName === 'index.html') {
               
            } else if (fileName === 'about.html') {

            } else if (fileName === 'service.html') {

            } else if (fileName === 'team.html') {

            } else if (fileName === 'contact.html') {

            }
        })
        .catch(error => console.error('Error fetching or parsing JSON:', error));
}

// Call the function to update content when the page loads
window.addEventListener('load', function () {
    console.log('page loaded');
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Update content based on the current page
    updatePageContent(currentPage);
});
