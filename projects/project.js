const Projects = [
    {
        name : "Clone of Agoda.com",
        about : "Agoda is a fastest growing online travel booking platform. It also provides budget hotels, apartments, homes, and villas to suit all budgets and travel occasions.",
        img : "https://miro.medium.com/max/1400/1*V3SfEMO4g2oOyi9NnEXjDQ.png",
        gitrepo : "https://github.com/db648/Agoda-clone",
        blog : "https://medium.com/@vdbhavani.648/agoda-clone-eb28c930815e",
        tech_stack : "HTML | CSS | JAVASCRIPT | React | Redux | MongoDB | Express | Nodejs",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/react-native.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/redux.png"/>`,
            `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/express.png"/>`
        ],
        project_link : "https://agoda-clone-website.vercel.app/",
        project_type : "Team Project"
    },
    {
        name : "Clone of specsmakers.in",
        about : "Specsmakers offers a wide variety of stylish eyewear with high quality of Eyeglasses, Eyeglass Frames, Computer Glasses, Contact Lenses and Sunglasses Online at specsmakers.",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83waNZy94ppQK-oRhV70lco-r4kcA8rZ13Q&usqp=CAU",
        gitrepo : "https://github.com/db648/Specs-Makers-clone",
        blog : "https://medium.com/@vdbhavani.648/specsmakers-clone-8e0434e3ed0e",
        tech_stack : "HTML | CSS | JAVASCRIPT | API | JSON-SERVER",
        tech_stackicons : [
        `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
        `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
        `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
        `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`,
        `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`
        ],
        project_link : "https://tender-hoover-a53af4.netlify.app/",
        project_type : "Team Project"
    },
    {
        name : "Clone of shop4reebok.com",
        about : "An E-commerce website that sells fashionable, branded clothing & footwear and accessories for women, men & kids online at shop4reebok.",
        img : "https://content.shop4reebok.com/static/hero/Sneeker_Fest_1920x800_091221_2.jpg",
        gitrepo : "https://github.com/db648/reebok",
        blog : "https://medium.com/@suraj.devere/shop4reebok-clone-eddfa7c32fe7",
        tech_stack : "HTML | CSS | JAVASCRIPT",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            
        ],
        project_link : "https://rebookwebsite-clone1.vercel.app/",
        project_type : "Team Project"

    },
    {
        name : "Clone of MyShopping.com",
        about : "An E-commerce website that sells fashionable, branded clothing for women, men & kids online at MyShopping.com.",
        img : "./homepage-shopping.png",
        gitrepo : "https://github.com/db648/ecommerce-react-project",
        blog : "",
        tech_stack : "HTML | CSS | JAVASCRIPT | React | Redux | MongoDB | Express | Nodejs | Bootstrap",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/react-native.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/redux.png"/>`,
            `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/express.png"/>`,
            `<img src="https://img.icons8.com/color/48/000000/bootstrap.png"/>`
            
        ],
        project_link : "https://ecommerce-react-project.vercel.app/",
        project_type : "Individual Project"

    },
    {
        name : "Weather-Map Web Application",
        about : "A Weather search web application, where user will get location based weather report. Here user will get all info related to a particular city with daily report as well as weekly forecast.",
        img : "./weather.png",
        gitrepo : "https://github.com/db648/weatherapp",
        blog : "",
        tech_stack : "HTML | CSS | JAVASCRIPT | API's",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`
            
        ],
        project_link : "https://weatherapp-ten-kappa.vercel.app/",
        project_type : "Individual Project"

    }
]


let projects__container = document.getElementById("projects--container")

Projects.forEach(pro => {
    let main = document.createElement("div")
    main.setAttribute("class", "portfolio-item padd-15")
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name"><b>${pro.name}</b></h3> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <a href=${pro.project_link} target="_blank" class="see-project">Live💻</a>
      <a href=${pro.gitrepo} target="_blank" class="github-repo">GitHub</a>
      </div>
      <br/>
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span>${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : '' }
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ''}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ''}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ''}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ''}
      ${pro.tech_stackicons[5] ? pro.tech_stackicons[5] : ''}
      ${pro.tech_stackicons[6] ? pro.tech_stackicons[6] : ''}
      ${pro.tech_stackicons[7] ? pro.tech_stackicons[7] : ''}
      ${pro.tech_stackicons[8] ? pro.tech_stackicons[8] : ''}
      ${pro.tech_stackicons[9] ? pro.tech_stackicons[9] : ''}
      </span>
      
    </div>
  </div>
    `
    projects__container.append(main)

})
