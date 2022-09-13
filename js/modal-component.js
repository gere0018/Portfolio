'use strict';

const e = React.createElement;

const LicenseManagementModal = (props) => {
    return (
        <div className="col-md-8 col-md-offset-2">
            <h2>License Management - Case Study </h2>
            <h4>A SAAS platform to show office 365 admins the full picture</h4>
            <div className="h-50"></div>
             <div>

             </div>
            
            
            <h4>Project overview</h4>
            <p>This project was a new module that I designed for Quest On Demand from Inception to implementation. We created the MVP in 2019 and added more details and features in the following years.
                License management is a software as a service tool designed for Office 365 admins. Its main purpose is to give Admins full exposure and control of their various License pools, their cost,
                use and availability. We wanted to show admins the information they needed that wasn’t readily accessible in the Microsoft admin centre in order to help them save costs and make informed
                decisions. As the sole designer for this module I did the following:
            </p>
            <ul>
                <li>Conducted live user interviews to better understand the users’ needs and frustrations</li>
                <li>Created realistic personas that we referred to throughout the development of the product</li>
                <li>Sketched solutions in low fidelity wireframes using Balsamic mockups to define the MVP and validate  requirements</li>
                <li>Created high fidelity interactive prototypes in Sketch and InVision that I further tested with clients, sales and support employees.</li>
                <li>Conducted live usability testing sessions with real clients and produced reports with findings and required changes</li>
                <li>Versioned all my high fidelity designs with Abstract to make them accessible for collaboration</li>
                <li>Created documented handoff files for developers and guided them throughout the implementation lifecycle</li>
            </ul>
            <br /> <img src="img/portfolio/LM-01.jpg" alt="On demand UX/UI conference" className="img-responsive" />
            <br />
            <h4>Understanding user needs and requirements</h4>
            <p>The initial research phase for the product consisted of:</p>
            <ul>
                <li>User interviews to better understand needs and frustrations</li>
                <li>Workshops with Microsoft experts, solution architects and product managers to understand what Microsoft offered and the business requirements for our solution</li>
                <li>Detailed review and inventory of the Microsoft admin centre</li>
                <li>Competitor research of businesses that offered similar solutions</li>
            </ul>
            <p>I conducted interviews with 10 license administrators in various fields. I asked a set of questions that helped me better define what they needed to see and what they
                 couldn't access. Microsoft had an admin centre, but it wasn’t a priority for them to show costs of unused licenses. User needs surpassed what was available which gave
                  Quest the opportunity to fill the gap as a Microsoft partner. A CIBC senior administrator clearly expressed “Licenses are where the money is, we need more visibility 
                  to that”.
            </p>
            <br/><img src="img/portfolio/LM-02.jpg" alt="Personas" className="img-responsive" />
            <br/><p>Based on the interviews, I created we set up three personas. We referred to them throughout the entire product development process.</p>

        </div>
      );
}

const DesignSystemModal = () => (
    <div className="col-md-8 col-md-offset-2">
        <h2>Design Team &amp; Design system</h2>
        <h4> Case Study - Quest On Demand</h4>
        <div className="h-50"></div>
        <p>When I first joined Quest On Demand, I was the only UX designer on the team. It took some digging to find out that we had some wonderful designers working 
            quietly and independently around the world. After reviewing the product that I was hired to enhance, the biggest problem that stood out for me is inconsistency. 
            The modules and features in On Demand looked and behaved in a disconnected manner as if they didn’t belong together and this was a simple reflection of the design team. 
            People were disconnected, they designed features required for their modules without being aware of the big picture of the product. My mission therefore become clear, I had
            to connect the people as a design team and eventually create a design system of reusable components to bring consistency 
            across all modules. This mission was successfully accomplished within the first year of my joining Quest.
        </p>
        <h4>It's all about the people</h4>
        <br /> <img src="img/portfolio/ds-team.jpg" alt="On demand UX/UI conference" className="img-responsive" />
        <br />
        <p>The first step to achieve my goal was to reach out to different individuals, learn who they are, what they do and how they contributed to the product. Designers were located in Russia,
            China, US and Canada. I initiated individual conversations that built trust and empathy and eventually started On Demand design meetings for the first time. As the designer for the 
            core/foundation product from which the modules inherited I naturally led the team into seeing the value and must of a design system and not just a style guide documentation. 
        </p>
        <h4>UX/UI summit</h4>
        <p>It was essential in my opinion to have the UX/UI team meet in person to connect human beings. In my many years of corporate work, I often found that people forget the human aspect and
            get caught up in the mechanical day to day tasks which often leads to conflicts. Knowing people behind the work fosters empathy and kinder relationships. Therefore, I did many 
            presentations to upper management to advocate and justify the cost for a reunion. Fortunately my persuasion skills were effective and led to the first On Demand UX/UI summit. 
            Team members from US, China and Russia were flown to our office in Kanata/Canada on October 2019. The conference resulted in deeper connections, setting goals for the year ahead and
            great collaboration between product managers, designers and developers.</p>
        <h4>Birth of a design system</h4>
        <p>At the time, a design system was still a novice concept mainly used in larger companies. Our team had a style guide that didn’t extend to the design software. Our problem was lack of 
            consistency across modules in the same product. Creating a design system that allowed designers to use the same components in different modules was a sure way to ensure design consistency
            and eventually product consistency across features and modules.
        </p>
        <h4>Tools: Sketch &amp; Abstract</h4>
        <p>To start creating a design system, we first had to adopt the same design tools to work collaboratively. We started using Sketch with Abstract as a versioning tool for our files. It took 
            some convincing to show creative designers the value of such a logical process. Having a developer background, versioning made so much sense to me but it wasn’t a given for all. However, 
            we successfully adopted Abstract and slowly found the joy in collaboration and branches from master that didn’t disrupt a team-mates efforts. 
        </p>
        <h4>Research</h4>
        <p>We needed to define the content of our design system. We conducted elaborate market and community research to learn from existing design systems and identify the structure that was most 
            suitable for our team. Since our Dev team used Angular/Material as the base of their code, we used google material design as a base for our design components.
        </p>
        <h4>Working in iterations</h4>
        <p>Over the course of one year, four of us designers created a complete design system with defined styles, colours and components. Each component was researched, designed, reviewed by the 
            whole team and enhanced in iterations. In parallel our individual features and modules started adopting the common component library.
        </p>
        <h4>A success story</h4>
        <p>Our product started as puzzle pieces that did not fit but Today On Demand is a whole integrated software.This success was led by inspired designers across continents who strongly promoted
            a shared design system. Our individual teams started implementing and creating these components. I personally worked with the core Dev team to create the foundation shared component 
            library that other teams inherited to implement their designs.
        </p>
        <br /> <img src="img/portfolio/ds-cover.jpg" alt="On demand design system" className="img-responsive" />
        <br />
        <h4>Doing it all over again with Figma</h4>
        <p>A few years down the line, Quest’s structure and teams changed drastically and so did the world after a sadly harsh pandemic. I found myself once again with new team members that required
            a change of tools. Figma became the most popular tool on the market for being independent of device type and combining multiple functionalities. Without hesitation, I adapted the change
            and led a new team to recreate our design system and update different components in the process. Recently, we successfully implemented "StoryBook" as a tool for developers to mirror and document the design system components.
            <br/><i>Alas “Change”, the only permanent in world of impermanence!</i>
        </p>
        <div className="h-50"></div>
    </div>
);

const SpiriaModal = () => (
    <div className="col-md-8 col-md-offset-2">
        <h2>Spiria Digital</h2>
        <h4>UX Designer &amp; consultant</h4>
        <div className="h-50"></div>
        <h4>Aidexpress</h4>
        <p>Content under construction</p>
    
    </div>
);
const AChubModal = () => (
    <div className="col-lg-9 col-md-offset-2">
        <h2>Algonquin College Student support services</h2>
        <h4>Mobile App Designer &amp; Developer</h4>
        <div className="h-50"></div>
        <p>ACHub is the name of the student support services department in Algonquin college. While a student on campus, I worked at the AC Hub part time. During the summer
             when I joined them full time, my busy-bee nature drove me to volunteer and create this AC Hub application. The target audience was employees like myself who sat at desks across the college.
             Our main goal was to help students with all types of questions. Many times the inquiries we received were hidden on the college website somewhere and not accessible. So the main purpose 
             of the AC Hub App was to provide a forum for all that knowledge. I created the app in August 2015 and today it is still used by the staff after an update I pushed in late 2016.
        </p>
        <br /> <img src="img/portfolio/AChub-cover.jpg" alt="" className="img-responsive" />
        <div className="h-50"></div>
        <h4>Design Process</h4>
        <p>In order to understand what is needed, I did some intial user interviews with my colleagues and head of department. I collected and defined requirements and user needs, created basic information
             architecture and dived into low fidelity wireframes.  Most of our inquiries were related to directions, contacts on campus, and we also has survey to fill about all inquiries we received. Accordingly,
              I created different sections in the app that addressed these concerns: surverys, FAQs, College directory,
             way finder and upcoming events. Since Ipad was the tool available to us, I decided to give the app a native iOS look by using the Ionic Framework.</p>
        <p>I dove into coding, and created this simple interface that was very helpful to us staff for the years to come.</p>
        <div className="h-50"></div>
        <h4>Application Demo</h4>
        <br/>
        <iframe width="900" height="506" src="https://www.youtube.com/embed/ZM6T-mO5F4o" frameborder="0" allowfullscreen=""></iframe>
        <div className="h-50"></div>
        <h4>Conclusion</h4>
        <p>I was a passionate student eager to learn, and this app allowed me to learn so much as I designed and coded and tested on my own. I was the target audience and the buisness owner. It was a productive summer
             for me but the result is still a very valid tool for the ACHub staff. </p>
        <div className="h-50"></div>
    </div>
);

const TouchPlowModal = () => (
    <div>Touch plow contents</div>
)

const GardeniaModal = () => (
    <div>Gardenia app contents</div>
)
const ModalComponent = () => {
    const [type, setType] = React.useState('')
    
    const demo01 = document.querySelector('#demo01')
    demo01.addEventListener('click', () => {
        setType('LICENSE_MANAGEMENT')
    })

    const demo02 = document.querySelector('#demo02')
    demo02.addEventListener('click', () => {
        setType('DESIGN_SYSTEM')
    })
      
    const demo03 = document.querySelector('#demo03')
    demo03.addEventListener('click', () => {
        setType('SPIRIA')
    })

    const demo04 = document.querySelector('#demo04')
    demo04.addEventListener('click', () => {
        setType('ACHUB')
    })

    const demo05 = document.querySelector('#demo05')
    demo05.addEventListener('click', () => {
        setType('GARDENIA')
    })

    const demo06 = document.querySelector('#demo06')
    demo06.addEventListener('click', () => {
        setType('TOUCHPLOW')
    })



    switch(type){
        case "LICENSE_MANAGEMENT":
            return <LicenseManagementModal />
        case "DESIGN_SYSTEM":
            return <DesignSystemModal />
        case "SPIRIA":
            return <SpiriaModal />
        case "ACHUB":
            return <AChubModal />
        case "GARDENIA":
            return <GardeniaModal />
        case "TOUCHPLOW":
                return <TouchPlowModal />
        
        default:
            return null
    }
}

const domContainer = document.querySelector('#modal-container');

const root = ReactDOM.createRoot(domContainer);
root.render(e(ModalComponent));