/*
============================================
 Author: Advanced Prototyping
 Date:   May 2018
 Description: The about-component.js file
    holds the template for the aboutcomponents
    component.
===========================================
*/
ko.components.register("aboutcomponent", {
    template:
    '<div class="about-background"></div>\
    <div class="about-container">\
    <div class="about-profileCard">\
        <div class="about-profileCard-head">\
            <img src="./media/profiles/jared.PNG" class="about-profileCard-img" />\
            <div class="about-profileCard-title">Jared Brown</div>\
        </div>\
        <div class="about-profileCard-body">\
            <p class="about-profileCard-text">\
            Jared Brown was born in Brockport, NY and currently lives in Jamestown,\
             NY.\ He is a tech enthusiast who has been learning about technology for most of his life.\
            In addition to enjoying technology, he also loves graphic design even though he isnt\
            very good at it. Jared earned his Associates in Information Technology at Jamestown\
            Community College. While earning his degree in IT, Jared became interested in web\
            development as it allowed him to fuse his love for technology with his love for design.\
            \ Jared’s first big project in Web Development was created when he began working on a\
            mobile app for a local church. He used Ionic which is a framework that bridges Cordova\
            and Angular essentially allowing developers to create smooth mobile apps using web\
            technologies. With this project, Jared also learned how to interact with RESTful APIs\
            as he used the church’s website API (built using Wordpress by Jared a year earlier) to\
            populate the app with information. Jared also wrote a backend using PHP which accepts\
            user input sent from the app and enters it into either a database or emails it to the\
            appropriate people. Jared has experience with the following technologies: JavaScript,\
            TypeScript, Java, PHP, Python, HTML, CSS, Angular, SQL, Ionic, Bootstrap, Wordpress,\
            phpMyAdmin, and MySQL.\
            Jared currently attends Bellevue University for his Bachelors in Web Development. </p>\
            <a href="https://github.com/JaredBrown138" class="about-profileCard-github">Github</a>\
        </div>\
    </div>\
    <div class="about-profileCard">\
        <div class="about-profileCard-head">\
            <img src="./media/profiles/heather.PNG" class="about-profileCard-img" />\
            <div class="about-profileCard-title">Heather Peterson</div>\
        </div>\
        <div class="about-profileCard-body">\
            <p class="about-profileCard-text">\
            Heather Peterson was born in San Diego,\
            California in 1986.  Now, a proud mother of one, she is aspiring to become a full-stack\
            developer to full-full her dream career.  Hobbies that she enjoys are bicycling, making\
            jewelry, playing with her daughter, and spending time with her boyfriend.  When she’s\
            not plugging away on the computer, Heather enjoys cooking homemade meals, reading books,\
            and vacationing.  As a student of Bellevue University back in June 2016, classes that have\
            become of interest to her are HTML, CSS, and JavaScript</p>\
            <a href="https://github.com/HeatherPetersonLMM" class="about-profileCard-github">Github</a>\
        </div>\
    </div>\
    <div class="about-profileCard">\
        <div class="about-profileCard-head">\
            <img src="./media/profiles/hector.PNG" class="about-profileCard-img" />\
            <div class="about-profileCard-title">Hector F. Leguillow</div>\
        </div>\
        <div class="about-profileCard-body">\
            <p class="about-profileCard-text">\
            Hector F.  Leguillow was born in Brooklyn, N.Y. He joined the Army at 18 and where he\
            attended the Army’s LPN Program. He has a total of 22 years of military experience which\
            includes service in both the Medical and Chemical Corps. Aside from his military\
            experience, Hector is also a graduate of Bellevue University’s undergraduate HR program\
            Hector’s pride and joy are his two children. His son Steven is currently stationed at\
            Naval Station Everett as a Master at Arms. His daughter Tinissia English currently lives\
            in Niceville, Fl. She is also a graduate of Bellevue University’s with a MS-HRM degree.\
            Hector has been a licensed nursing home administrator for seven years and is currently the\
            administrator at Saint Joseph Villa Nursing Center. He has been married to his wife Rhonda\
            for 12 years. Together they have four children and enjoy the love of nine grandchildren.</p>\
            <a href="https://github.com/hleguillow1" class="about-profileCard-github">Github</a>\
        </div>\
    </div>\
    <div class="about-profileCard">\
        <div class="about-profileCard-head">\
            <img src="./media/profiles/matt.PNG" class="about-profileCard-img" />\
            <div class="about-profileCard-title">Matthew Howard</div>\
        </div>\
        <div class="about-profileCard-body">\
            <p class="about-profileCard-text">\
            Matthew was born in Pascagoula, MS, in 1982. He moved to Mobile, AL at the age of two where\
            he went to elementary, middle, and high school.  He joined the Air Force in 2002 where he\
            became an Information Manger. He went to Basic Military Training in May and graduated on July\
            4th, 2002.  From there he went to Technical Training received training in U.S. Air Force\
            administrative processes as well as hands-on computer training.  He learned all of the inner\
            components of the Personal Computer and how to build one from scratch.  As well as installing\
            the Operating System and all the required drivers.  As an Airman Basic, his first duty\
            assignment was at Lackland Air Force Base, San Antonio, TX.  There he worked for the\
            commander of the 318th Information Operations Group (IOG).  He excelled at his position\
            building the 318 IOG’s first-ever organizational web page using Dreamweaver and ColdFusion.\
            A year-and-a-half later he moved to the 690th Information Operations Squadron (IOS) where we\
            worked as a Client Systems Administrator (CSA) and Help Desk Technician.  In this position, he\
            was responsible for maintaining 400 computers on three separate networks.  In 2005, Matthew\
            moved to Osan Air Base, Republic of South Korea.  There he was the CSA for the 36th Fighter\
            Squadron.  He helped migrate the squadron from using CAT5 network cables to using Fiber Optic\
            connection.  He also migrated the units aging computer systems from Windows 2000 to Windows XP.\
            A year later, his time in Korea was over and he moved to Ramstein Air Base, Germany.\
            At Ramstein he was Assistant NCOIC, Communication Focal Point for the 693rd Intelligence,\
            Surveillance and Reconnaissance (ISR) Group.  He was responsible for ensuring the Sun\
            Microsystems as well as standard Air Force networks were fully mission capable for the\
            Distributed Ground System (DGS).  As part of a 5-person tiger team, he installed 412 systems\
            from the ground up for the Communication Focal Points move to a new building.  In 2009 he\
            moved to Hurlburt Field, FL where he was the 361st ISR Group’s SharePoint Administrator as\
            well as their Video Teleconference (VTC) Specialist.  He built the 361 ISRGs SharePoint site\
            from scratch and integrated it with base’s SharePoint site.  In 2013, he moved to NATO Air\
            Base Geilenkirchen, Germany.  There, he was NCOIC, Classified Registry where he maintained\
            inventory of 8K pieces of classified material.\
            He currently lives in Colorado Springs, CO where he is station at Peterson Air Force Base.\
            He is the NCOIC, Executive Assistant to the NORAD Deputy Commander.  He maintains all of\
            computer systems for the General, including the systems in his home office as well as his cell\
            phones.\
            Matthew is married with one daughter.  He and his wife met in 2010 and were married in\
            August 2011.  Their daughter was born in May 2012 and they are the joy of his life.\
            </p>\
            <a href="https://github.com/mhoward14" class="about-profileCard-github">Github</a>\
        </div>\
    </div>\
    </div>\
    '
});