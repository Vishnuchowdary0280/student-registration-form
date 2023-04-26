
  const form = document.querySelector('form');
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const email = document.getElementById('email');
  const gender = document.getElementsByName('gender');
  const dob = document.getElementById('date');
  const bloodGroup = document.getElementsByName('Select');
  const phone = document.getElementById('phone');
  const address = document.getElementsByName('Address');
  const city = document.getElementsByName('City');
  const state = document.getElementsByName('State');
  const pincode = document.getElementsByName('PinCode');
  const country = document.getElementsByName('Country');
  const courses = document.getElementsByName('course');
  const photo = document.getElementsByName('myfile');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = {
      'First Name': fname.value,
      'Last Name': lname.value,
      'Email': email.value,
      'Gender': '',
      'Date of Birth': dob.value,
      'Blood Group': '',
      'Mobile Number': phone.value,
      'Address': address[0].value,
      'City': city[0].value,
      'State': state[0].value,
      'Pin Code': pincode[0].value,
      'Country': country[0].value,
      'Course': '',
      'Photo': photo[0].value
    };

    for(let i = 0; i < gender.length; i++) {
      if(gender[i].checked) {
        data['Gender'] = gender[i].value;
      }
    }

    for(let i = 0; i < bloodGroup.length; i++) {
      if(bloodGroup[i].selected) {
        data['Blood Group'] = bloodGroup[i].value;
      }
    }

    const selectedCourses = [];
    for(let i = 0; i < courses.length; i++) {
      if(courses[i].checked) {
        selectedCourses.push(courses[i].value);
      }
    }
    data['Course'] = selectedCourses;

    localStorage.setItem('Student Data', JSON.stringify(data));
    alert('Data has been saved successfully in local storage!');
    form.reset();
  });

