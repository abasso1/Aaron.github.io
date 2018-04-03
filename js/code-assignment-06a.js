let project1 = {
  id: 1,
  title: 'Baton Rouge City Tour',
  hasThumbnail: true
}
let project2 = {
  id: 2,
  title: '2.5+ Magnitude Earthquakes in past 24 hours',
  hasThumbnail: true
}
let projects = [
  project1,
  project2
]
for (let i = 0; i < projects.length; i++) {
  console.log('project ' + i + ' title: ' + projects[i].title)
  if (projects[i].hasThumbnail === true) {
  console.log('images/screenshot' + projects[i].id + '.jpg')
}

function describeSchool(myschool){
  let description = 'At ' + myschool + ' there is a live tiger on campus.'
  return description
}

let myschool = 'LSU'
let description = describeSchool(myschool)
console.log(description)
