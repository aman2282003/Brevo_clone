
let evel1 = document.getElementById('one');
let evel2 = document.getElementById('two');
let evel3 = document.getElementById('three');
let evel4 = document.getElementById('four');
let evel5 = document.getElementById('five');


let imageArr = [
    "https://corp-backend.brevo.com/wp-content/uploads/2023/07/SMBS-1.jpg",
    "https://corp-backend.brevo.com/wp-content/uploads/2023/07/startups_2x.webp",
    "https://corp-backend.brevo.com/wp-content/uploads/2023/07/agencies_1x.webp",
    "https://corp-backend.brevo.com/wp-content/uploads/2023/07/ecommerce_1x.webp",
    "https://corp-backend.brevo.com/wp-content/uploads/2023/07/enterprise_2x.webp",
];

let msgsh4 = [
    '"Brevo is fantastic for keeping clients informed of upcoming shoots and the status of portrait collections. Plus, it offers great deliverability!"',
    '"The email dashboard is so detailed! I love to go there, check the stats, and see how contacts are engaging with our content."',
    '"Brevo lets us create personalized experiences for every single contact. The multichannel automation features are super powerful!"',
    '"Marketing is about sending the right message at the right time. Brevos easy-to use platform lets us do exactly that."',
    '"BrevoPlus is absolutely key in allowing us to engage with guests, get their feedback, and optimize our services."'
];

let msgsh5one = [
    'Danie Wigzell','Simón Gómez','Lillie Mazitova','Inès Marotte','Andy Walker'
];
let msgsh5two = [
    'Owner at Pop-Up Portraits','Growth Marketer at Tributi','Project Manager at RocketConseil','Marketing Director at Aquarelle','Chief of Staff at Yumpingo'
];

let image = document.querySelector('#right-img >img');
let msg = document.querySelector('#right-msg > div > h4');
let msgone = document.getElementById('msg-one');
let msgtwo = document.getElementById('msg-two');
let arrow = document.getElementsByClassName('ri-arrow-right-line');

    image.setAttribute('src',imageArr[0])
    msg.innerText = msgsh4[0];
    msgone.innerText = msgsh5one[0];
    msgtwo.innerText = msgsh5two[0];
    evel1.style.fontSize = '2vw';
    evel1.style.position = 'relative';
    evel1.style.left = '35px';
    arrow[0].style.opacity = '1';

    

evel1.addEventListener('click', function()
{
    image.setAttribute('src',imageArr[0]);
    msg.innerText = msgsh4[0];
    msgone.innerText = msgsh5one[0];
    msgtwo.innerText = msgsh5two[0];
    resetAll();
    evel1.style.fontSize = '2vw';
    evel1.style.position = 'relative';
    evel1.style.left = '35px';
    arrow[0].style.opacity = '1';
});
evel2.addEventListener('click', function()
{
    image.setAttribute('src',imageArr[1]);
    msg.innerText = msgsh4[1];
    msgone.innerText = msgsh5one[1];
    msgtwo.innerText = msgsh5two[1];
    resetAll();
    evel2.style.fontSize = '2vw';
    evel2.style.position = 'relative';
    evel2.style.left = '35px';
    arrow[1].style.opacity = '1';
})
evel3.addEventListener('click', function()
{
    image.setAttribute('src',imageArr[2]);
    msg.innerText = msgsh4[2];
    msgone.innerText = msgsh5one[2];
    msgtwo.innerText = msgsh5two[2];
    resetAll();
    evel3.style.fontSize = '2vw';
    evel3.style.position = 'relative';
    evel3.style.left = '35px';
    arrow[2].style.opacity = '1';

})
evel4.addEventListener('click', function()
{
    image.setAttribute('src',imageArr[3]);
    msg.innerText = msgsh4[3];
    msgone.innerText = msgsh5one[3];
    msgtwo.innerText = msgsh5two[3];
    resetAll();
    evel4.style.fontSize = '2vw';
    evel4.style.position = 'relative';
    evel4.style.left = '35px';
    arrow[3].style.opacity = '1';

})
evel5.addEventListener('click', function()
{
    image.setAttribute('src',imageArr[4]);
    msg.innerText = msgsh4[4];
    msgone.innerText = msgsh5one[4];
    msgtwo.innerText = msgsh5two[4];
    resetAll();
    evel5.style.fontSize = '2vw';
    evel5.style.position = 'relative';
    evel5.style.left = '35px';
    arrow[4].style.opacity = '1';
})

let product = [

    {
        id:1,
        imgSrc: "https://corp-backend.brevo.com/wp-content/uploads/2023/02/Vector.svg",
        heading: "Marketing Platform",
        para2: "Create brilliant campaigns with email, SMS, automation, and more"
    },
    {
        id:2,
        imgSrc: "https://corp-backend.brevo.com/wp-content/uploads/2023/02/Vector-1.svg",
        heading: "Sales Platform",
        para2: "Keep a sharp eye on people, pipelines, leads, and deals"
    },{
        id:3,
        imgSrc: "https://corp-backend.brevo.com/wp-content/uploads/2023/09/Brevo64.svg",
        heading: "BrevoPlus",
        para2: "A bespoke all-in-one digital marketing solution tailored to your needs"
    },{
        id:4,
        imgSrc: "https://corp-backend.brevo.com/wp-content/uploads/2023/04/TransactionalEmails-64.svg",
        heading: "Transactional Email",
        para2: "Send thousands of emails right on cue with our powerful API"
    },{
        id:5,
        imgSrc: "https://corp-backend.brevo.com/wp-content/uploads/2023/09/Conversations-64-1.svg",
        heading: "Conversations",
        para2: "Be there for your customers with our one-on-one chat tools"
    },
]