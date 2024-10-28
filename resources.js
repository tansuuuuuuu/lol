const password = 'yippie';

const resources = {
    about: [
        {
            title: "Niccolò Machiavelli",
            author: "Wikipedia",
            link: "https://en.wikipedia.org/wiki/Niccolò_Machiavelli",
            comment: "My favorite political theorist",
            datePublished: "2021",
            extraFeature: "Italian Renaissance figure",
            hidden: false
        },
        {
            title: "Nikolai Gogol",
            author: "Wikipedia",
            link: "https://en.wikipedia.org/wiki/Nikolai_Gogol",
            comment: "My favorite Russian novelist",
            datePublished: "2020",
            extraFeature: "Works include Dead Souls",
            hidden: false
        },
        {
            title: "Stoicism",
            author: "Wikipedia",
            link: "https://en.wikipedia.org/wiki/Stoicism",
            comment: "My favorite school of philosophy",
            datePublished: "2022",
            extraFeature: "Founded in ancient Greece",
            hidden: false
        },
        {
            title: "Seoul Travel Guide",
            author: "YouTube",
            link: "https://www.youtube.com/watch?v=70rijjnK5GQ",
            comment: "A guide to one of my favorite cities",
            datePublished: "2023",
            extraFeature: "Highlights of Seoul culture",
            hidden: false
        },
        {
            title: "The Prince",
            author: "Niccolò Machiavelli",
            link: "https://www.gutenberg.org/files/1232/1232-h/1232-h.htm",
            comment: "My favorite work by Machiavelli",
            datePublished: "1513",
            extraFeature: "Guide on political philosophy",
            hidden: true 
        }
    ],
    professional: [
        {
            title: "RES Report",
            author: "Ministry of Energy",
            link: "https://docs.google.com",
            comment: "My RES report",
            datePublished: "2024",
            extraFeature: "Focus on RES in Kazakhstan",
            hidden: false
        },
        {
            title: "RES Development",
            author: "PwC",
            link: "https://www.pwc.com/kz/en/publications/esg/may-2021-eng.pdf",
            comment: "RES Development in Kazakhstan",
            datePublished: "2021",
            extraFeature: "Environmental progress in Kazakhstan",
            hidden: true 
        },
        {
            title: "Ministry on RES",
            author: "RoK Ministry of Energy",
            link: "https://www.gov.kz/memleket/entities/energo/activities/4910?lang=en",
            comment: "RES initiatives in Kazakhstan",
            datePublished: "2023",
            extraFeature: "Sustainable development policies",
            hidden: false
        },
        {
            title: "ADB in Kazakhstan",
            author: "ADB",
            link: "https://www.adb.org/where-we-work/kazakhstan",
            comment: "ADB projects in Kazakhstan",
            datePublished: "2023",
            extraFeature: "Economic partnerships",
            hidden: false
        },
        {
            title: "ADB Cooperation",
            author: "Kazakh Ministry of Foreign Affairs",
            link: "https://www.gov.kz/memleket/entities/mfa/press/news/details/761570?lang=en",
            comment: "Kazakhstan-ADB collaboration",
            datePublished: "2024",
            extraFeature: "Impact on local economy",
            hidden: false
        }
    ],
    music: [
        {
            title: "Laufey",
            author: "YouTube",
            link: "https://www.youtube.com/watch?v=Lf3QII_Q8H8",
            comment: "An inspiring musician",
            genre: "Jazz/Pop",
            extraFeature: "Calm and introspective",
            hidden: false
        },
        {
            title: "Arctic Monkeys",
            author: "YouTube",
            link: "https://www.youtube.com/watch?v=2A2XBoxtcUA",
            comment: "Indie rock favorite",
            genre: "Rock",
            extraFeature: "Classic sound",
            hidden: true 
        },
        {
            title: "Tyler, The Creator",
            author: "YouTube",
            link: "https://www.youtube.com/watch?v=LSIOcCcEVaE",
            comment: "Creative artist",
            genre: "Hip Hop/Rap",
            extraFeature: "Eclectic and expressive",
            hidden: false
        },
        {
            title: "Frank Ocean",
            author: "YouTube",
            link: "https://www.youtube.com/watch?v=PVRbKHXwM58",
            comment: "Unique sound",
            genre: "R&B/Soul",
            extraFeature: "Emotive and reflective",
            hidden: false
        },
        {
            title: "beabadoobee",
            author: "YouTube",
            link: "https://www.youtube.com/watch?v=3WpdCZC9q6w",
            comment: "Fresh indie artist",
            genre: "Indie Pop",
            extraFeature: "Youthful energy",
            hidden: false
        }
    ],
    hobbies: [
        {
            title: "Margarita Mamun",
            author: "YouTube",
            link: "https://www.youtube.com/watch?v=iC72I75aM70",
            comment: "My favorite rhythmic gymnast",
            sport: "Rhythmic Gymnastics",
            extraFeature: "Gold medalist",
            hidden: false
        },
        {
            title: "Ran Takahashi",
            author: "YouTube",
            link: "https://www.youtube.com/watch?v=Q59eRid3aX4",
            comment: "Top volleyball player",
            sport: "Volleyball",
            extraFeature: "Japanese volleyball star",
            hidden: true 
        },
        {
            title: "Yana Kudryavtseva",
            author: "YouTube",
            link: "https://www.youtube.com/watch?v=aBQtrKB4pnk",
            comment: "Another rhythmic gymnastics icon",
            sport: "Rhythmic Gymnastics",
            extraFeature: "Graceful performances",
            hidden: false
        },
        {
            title: "Brandon Bochenski",
            author: "Wikipedia",
            link: "https://en.wikipedia.org/wiki/Brandon_Bochenski",
            comment: "Favorite ice hockey player",
            sport: "Ice Hockey",
            extraFeature: "Played in NH + became an US state mayor",
            hidden: false
        },
        {
            title: "Tomohito Yamamoto",
            author: "YouTube",
            link: "https://www.youtube.com/watch?v=eeGaE4x7p3w",
            comment: "Outstanding volleyball player",
            sport: "Volleyball",
            extraFeature: "Known for agility",
            hidden: false
        }
    ]
};

function displayResources(page) {
    const resourceContainer = document.getElementById('resource-list');
    resourceContainer.innerHTML = ''; 

    if (!resources[page]) return;

    resources[page].forEach(resource => {
        if (!resource.hidden) { 
            const resourceDiv = createResourceDiv(resource);
            resourceContainer.appendChild(resourceDiv);
        }
    });
}

function createResourceDiv(resource) {
    const resourceDiv = document.createElement('div');
    resourceDiv.className = 'resource-item';
    resourceDiv.innerHTML = `
        <h4>${resource.title}</h4>
        <p><strong>Author:</strong> ${resource.author}</p>
        <p><strong>Link:</strong> <a href="${resource.link}" target="_blank">${resource.link}</a></p>
        <p><strong>Comment:</strong> ${resource.comment}</p>
        <p><strong>More Info:</strong> ${resource.datePublished || resource.genre || resource.sport}</p>
        <p><strong>Additional Info:</strong> ${resource.extraFeature}</p>
    `;
    return resourceDiv;
}

function toggleHiddenResources() {
    const inputPassword = prompt("Enter the password to view hidden resources:");
    if (inputPassword === password) {
        alert("access granted! you can see the hidden resources now!");

        const resourceContainer = document.getElementById('resource-list');
        resources[currentPage].forEach(resource => {
            if (resource.hidden) { 
                const resourceDiv = createResourceDiv(resource);
                resourceContainer.appendChild(resourceDiv);
            }
        });
    } else {
        alert("incorrect password - access denied!");
    }
}

const currentPage = document.body.getAttribute('data-page');

document.addEventListener('DOMContentLoaded', () => {
    displayResources(currentPage);
    document.getElementById('toggle-resources').addEventListener('click', toggleHiddenResources);
});


function removeExampleElement() {
    const tempElement = document.createElement('div');
    tempElement.id = 'example-element';
    tempElement.textContent = 'This is a temporary element';
    document.body.appendChild(tempElement);

    const elementToRemove = document.getElementById('example-element');
    if (elementToRemove) {
        elementToRemove.remove(); 
        console.log('Temporary element removed');
    }
}

removeExampleElement();