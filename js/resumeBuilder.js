"use strict";

// BIO -----------------------------------------------

var bio = {
	name: 'Griffy K',
	role: 'Professional Squirrel Hunter',
	contacts: {
		mobile: '(219) 111-1234',
		email: 'griffy@woof.com',
		github: 'squirrels',
		twitter: 'N/A',
		location: 'Seattle, WA'
	},
	welcomeMessage: 'Welcome',
	skills: ['HTML', 'CSS', 'JavaScript', 'Sketch', 'Napping', 'Hunting', 'Swimming'],
	biopic: 'img/me.png',

	display: function() {
		// name & role
		$('#header').prepend(HTMLheaderRole.replace("%data%", bio.role));
		$('#header').prepend(HTMLheaderName.replace("%data%", bio.name));

		// contact info
		$('#topContacts, #footerContacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$('#topContacts, #footerContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
		$('#topContacts, #footerContacts').append(HTMLgithub.replace("%data%", bio.contacts.github));
		$('#topContacts, #footerContacts').append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$('#topContacts, #footerContacts').append(HTMLlocation.replace("%data%", bio.contacts.location));

		// biopic & welcome message
		$('#header').append(HTMLbioPic.replace("%data%", bio.biopic));
		$('#header').append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

		// loop through skills
		$('#header').append(HTMLskillsStart);
		for (var i=0; i<bio.skills.length; i++){
			$('#skills').append(HTMLskills.replace("%data%",bio.skills[i]));
		}
	}
};


// EDUCATION -----------------------------------------------

var education = {
	schools: [{
		name: 'University of Washington',
		location: 'Seattle, WA',
		degree: 'M.S.',
		majors: ['Human Centered Design and Engineering'],
		concentrations: ['Interaction Design', 'User Experience', 'Research'],
		dates: 2015,
		url: 'http://www.hcde.washington.edu/ms'
	},
	{
		name: 'Indiana University',
		location: 'Bloomington, IN',
		degree: 'B.S.',
		majors: ['Informatics'],
		concentrations: ['Environmental Cognate', 'Spanish'],
		dates: 2010,
		url: 'http://www.soic.indiana.edu/'
	}
	],
	onlineCourses:[{
		title: 'Front-End Web Developer Nanodegree',
		school: 'Udacity',
		date: 2015,
		url: 'https://www.udacity.com/course/nd001'
	}],

	display: function() {
		for (var i=0; i<education.schools.length; i++){
			// school information
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree));
			$('.education-entry:last').append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
			$('.education-entry:last').append(HTMLschoolLocation.replace("%data%", education.schools[i].location));

			// loop through majors
			for (var j=0; j<education.schools[i].majors.length; j++){
				$('.education-entry:last').append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));
			}

			// loop through concentrations
			var concentrations = '';
			for (var k=0; k<education.schools[i].concentrations.length; k++){
				if (k !== 0){
					concentrations+= ', ';
				}
				concentrations+= education.schools[i].concentrations[k];
			}

			// if concentrations exist, display them
			if (concentrations !== ''){
				$('.education-entry:last').append(HTMLschoolConcentration.replace("%data%", concentrations));
			}
		}

		// online course information
		$('#education').append(HTMLonlineClasses);
		for (i=0; i<education.onlineCourses.length; i++){
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
			$('.education-entry:last').append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].date));
			$('.education-entry:last').append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
		}
	}
};


// WORK -----------------------------------------------

var work = {
	jobs: [
		{
			employer: 'Dogs, INC.',
			title: 'Chief Squirrel Hunter',
			location: 'Seattle, WA',
			dates: 'May 2010 - Current',
			description: 'I teach other dogs how to hunt'
		},
		{
			employer: 'Goldendoodle USA',
			title: 'Member',
			location: 'Seattle, WA',
			dates: 'October 2010 - present',
			description: 'Member since birth.'
		}
	],

	display: function() {
		for (var i=0; i<work.jobs.length; i++){
			// job information
			$('#workExperience').append(HTMLworkStart);
			$('.work-entry:last').append(HTMLworkEmployer.replace("%data%",work.jobs[i].employer) + HTMLworkTitle.replace("%data%",work.jobs[i].title));
			$('.work-entry:last').append(HTMLworkDates.replace("%data%",work.jobs[i].dates));
			$('.work-entry:last').append(HTMLworkLocation.replace("%data%",work.jobs[i].location));
			$('.work-entry:last').append(HTMLworkDescription.replace("%data%",work.jobs[i].description));
		}
	}
};


// PROJECTS -----------------------------------------------

var projects = {
	projects: [
		{
			
			title: 'Ruff Club',
			dates: 'Jan 2015',
			description: 'Created a club for dogs to get togeher to discuss hunting tips and tricks.',
			images: [
				'img/dogclub.jpg',
				'img/squirrel.jpg',
				'img/swim.jpg'
			]
		}
	],

	display: function() {
		for (var i=0; i<projects.projects.length; i++){
			// project information
			$('#projects').append(HTMLprojectStart);
			$('.project-entry:last').append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
			$('.project-entry:last').append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
			$('.project-entry:last').append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));

			// project images
			for (var j=0; j<projects.projects[i].images.length; j++){
				$('.project-entry:last').append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
			}
		}

	}
};


// INITIALIZATION -----------------------------------------------

var resume = {
	init: function(){
		// display sections
		bio.display();
		work.display();
		projects.display();
		education.display();

		// display maps
		$('#mapDiv').append(googleMap);
		initializeMap();
	}
};


resume.init();

