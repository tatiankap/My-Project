var API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjUwMDE1ZDAwMWUzMzhhNTIyMDAzODAxNjM0NmY5MWRmMzAzZDA1Mjg1MzBjMzA1ODRlMjM4ZTRkYWJjZTAxZTg3OGFkZjg5YjFlYTVjOTQxIn0.eyJhdWQiOiIxMCIsImp0aSI6IjUwMDE1ZDAwMWUzMzhhNTIyMDAzODAxNjM0NmY5MWRmMzAzZDA1Mjg1MzBjMzA1ODRlMjM4ZTRkYWJjZTAxZTg3OGFkZjg5YjFlYTVjOTQxIiwiaWF0IjoxNTU0NTMxNjc3LCJuYmYiOjE1NTQ1MzE2NzcsImV4cCI6MTg3MDE1MDg3MSwic3ViIjoiNjkyIiwic2NvcGVzIjpbInVzZXJCYXNlSW5mbyIsInVzZXJEZXRhaWxlZEluZm8iLCJ1c2VyQ291cnNlSW5mbyJdfQ.GuCKsUv452Rjpsgm822KivZ9gtcSsvZbm-r0p6B4vQMm80XznDP43cjjkU-hwBVbtcZhD2dw6_1ZBdq_r-QiLJEP0R7WLK5hB4rFCWfl-5EJ85QTMFEsI25LSsoV5rpctDyL7bc5SlpNfWVkDgNjYd989cSfIJo96QfmnOoA_4c7O1Yab2haTaeVug9xpDrBFztlJUnKW7xM_douZB6xvueeT4luUQfhuhEH8fJtwYgU3FkRMDUctHXVmcE1xQ8yNez-nVFgWp17Fr8dHLcNP01km10P2XvtHXo_Za0UVmEVkGj8RhM9SO4XwbVF2gDF5PC_rLG8m2SEEJIQ3_BMMFo8fZR3y1ZPfXsmw_KRNT7p3LV5x7_OqmHipuK8K1kuOUNpDDjkWmdstLWFN6p8tmqryaJJRH-C-HI_coRIaJOxCT3utb8MB51gEDMeODwU-vTz4lwKdfTlLV3MDec3Ch9w3nemZNLUtBwlYjE8qdARHGbbxmhC1PXmHwYfJF4QTJQlUaW0sYC_SycmedjBBhPDMYOAJK0IS8n3mPh4G2Wx23thYhxeZcK4l1ObpUJmIdRYW163mHqo7kSb54AjZcSlkf2E_UiKv0CcgVK1JMGpKapE8VEzp5ln1HBhvX5Oovf0mKXxxztJKwwDQT1zTG7OXJbC-FIRwoPFSYNEzdc';

var client = new INTITAClient({
	key: API_KEY,
});

// client.getUserDetails(function(error, data) {
//   console.log(error, data);
// });
client.getUserDetails(function(error, data) {

	const getUserName = document.getElementById('userName');
  getUserName.innerText = data.firstName + " " + data.secondName;

  const getUserAddress = document.getElementById('userAddress');
  getUserAddress.innerText = data.address;

  const  getUserAboutMy = document.getElementById('userAboutMy');
  getUserAboutMy.innerText = data.aboutMy;

  const  getUserPhone = document.getElementById('userPhone');
  getUserPhone.innerText = data.phone;

  const  getUserInterests = document.getElementById('userInterests');
  getUserInterests.innerText = data.interests;

});


// client.getUserCoursesAndModules(function(error, data) {
//  console.log(error, data);
// });
client.getUserCoursesAndModules(function(error, data) {
	//name ofcourses
 document.getElementById('courseFirstName').innerText = data.courses[0].title;
 document.getElementById('courseSecondName').innerText = data.courses[1].title;
 const getFirstCourseId = data.courses[0].id;
 const getSecondCourseId = data.courses[1].id;

 
 client.getCourseModules(getFirstCourseId, function (error, modules) {
   
  function showLecturesFirst(module) {
    client.getModuleLectures(module.id, function (error,item) {
      let list = document.createElement('ul');
      item.forEach(function (item) {
        let li = document.createElement("li");
        li.innerText = item.title;
        list.appendChild(li);
      });
    });
  };  
  
  modules.forEach(function (module, itemNumber) {
    var moduleget = $('.accordionFirst');
    moduleget.append(`
     ${module.title} 
     <div
     data-parent="#moduleFirst"
     >
     </div>
     `);
    showLecturesFirst(module);
  });
});

 client.getCourseModules(getSecondCourseId, function (error, modules) {
  
  function showLecturesSecond(module) {
    client.getModuleLectures(module.id, function (error,item) {
      let list = document.createElement('ul');
      item.forEach(function (lectures) {
        let li = document.createElement("li");
        li.innerText = item.title;
        list.appendChild(li);
      });
    });
  };   
  modules.forEach(function (module, itemNumber) {
    var moduleget = $('.accordion');
    moduleget.append(`
     ${module.title} 
     <div
     data-parent="#moduleSecond"
     >
     </div>
     `);
    showLecturesSecond(module);
  });
});
});
