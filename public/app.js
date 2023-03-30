// // Fill your details here

// const personalData = {
//     name: "FirstName LastName",
//     dob: "dd-mm-yyyy",
//     place: "my City",
//     mobile: "9876543210",
//     email: "Xyz@gmail.com",
//     linkedIn : "https://www.linkedin.com/in/Xyz/"
// }

// // Objective
// const objective = "Sample career objective"

// // Skills
// const skills = ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"]

// // work Experience - latest to oldest
// // Comment out the { } if you are a fresher
// const company =  [
//     // {
//     //     companyName: "Company Name",
//     //     designation: "my Designation",
//     //     description: "sample description",
//     //     from : "Month 20XX",
//     //     to : "Month 20XX"
//     // },
//     {
//         companyName: "Company Name",
//         designation: "my Designation",
//         description: "sample description",
//         from : "Month 20XX",
//         to : "Month 20XX"
//     },
//     {
//         companyName: "Company Name",
//         designation: "my Designation",
//         description: "sample description",
//         from : "Month 20XX",
//         to : "Month 20XX"
//     }]

// // Education - latest to oldest
// const school = [
//     // {
//     //     level : "Post Graduation xyz",
//     //     stream : "my stream",
//     //     schoolName : "College Name",
//     //     board : "University of xyz",
//     //     from : "YYYY",
//     //     year : "YYYY"
//     // },
//     {
//         level : "Bachelor of xyz",
//         stream : "my stream",
//         schoolName : "College Name",
//         board : "University of xyz",
//         from : "YYYY",
//         year : "YYYY"
//     },
//     {
//         level : "XII",
//         stream : "Science/Comm/etc",
//         schoolName : "School Name",
//         board : "Board of xyz",
//         from : "YYYY",
//         year : "YYYY"
//     },
//     {
//         level : "X",
//         stream : "Science",
//         schoolName : "School Name",
//         board : "Board of xyz",
//         from : "YYYY",
//         year : "YYYY"
//     }
// ]

// // Project - latest to oldest
// // Comment out the { } if you don't want to include project
// const project =  [
//   // {
//   //     title: "",
//   //     platform: "",
//   //     description: "",
//   //     duration : ""
//   // },
//   {
//       title: "Project Title",
//       platform: "C/C++/Java/NA",
//       description: "sample description",
//       duration : "N months"
//   }
// ]


// // Other Details
// const otherDetails = {
//     nationality : "Indian",
//     gender : "Male/Female",
//     language : "English, Hindi, xyz",
//     passport : "Available/Not Available",
// }

// // Extra Curricular Activities
// const cca = [
//     "description 1","description 2"
// ]

// // --------------------------------------------------------------
//         $(document).ready(() => {
//             // Personal Data
//             $("#name").html(personalData.name)
//             $("#dob").html(personalData.dob)
//             $("#place").html(personalData.place)
//             $("#mobile").html(personalData.mobile)
//             $("#email").html(personalData.email)
//             $("#linkedIn").html(personalData.linkedIn)

//             // Other Details
//             $("#nationality").html(otherDetails.nationality)
//             $("#gender").html(otherDetails.gender)
//             $("#language").html(otherDetails.language)
//             $("#passport").html(otherDetails.passport)

//             // Objective
//             $("#objective").html(objective)
            
//             // Skills
//              $.map(skills, (value, index) => {
//                 let row = `<h6 class="col-2 shadow-sm btn rounded">${value}</h6>`
//                 $("#skills").append(row)
//             })

//             // Work Experience
          
//             if(company == "") {
//               $("#experience").hide()
//             }
          
//             $.map(company, (value, index) => {
//                 let row = `<tr>
//                 <td class="">${value.companyName}</td>
//                 <td class="">${value.designation}</td>
//                 <td class="">${value.description}</td>
//                 <td class="">${value.from}</td>
//                 <td class="">${value.to}</td>
//             </tr>`
//                 $("#workExperience").append(row)
//             })

//             // Education
//             $.map(school, (value, index) => {
//                 let row = `<tr>
//                 <td class="">${value.level}</td>
//                 <td class="">${value.stream}</td>
//                 <td class="">${value.schoolName}</td>
//                 <td class="">${value.board}</td>
//                 <td class="">${value.year}</td>
//             </tr>`
//                 $("#education").append(row)
//             })


//             // Project
//             if(project == "") {
//               $("#academicProject").hide()
//             }
//             $.map(project, (value, index) => {
//                 let row = `<tr>
//                 <td class="">${value.title}</td>
//                 <td class="">${value.platform}</td>
//                 <td class="">${value.description}</td>
//                 <td class="">${value.duration}</td>
//             </tr>`
//                 $("#project").append(row)
//             })

//             // Activities and Interests
//             $.map(cca, (value, index) => {
//                 let row = `<p>${value}</p>`
//                 $('#cca').append(row)
//             })
//         })


