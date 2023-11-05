const firebaseConfig = {
  apiKey: "AIzaSyC3wDWowiC9lggMi0G389LvaSyutnICTvw",
  authDomain: "imgs2-799f3.firebaseapp.com",
  projectId: "imgs2-799f3",
  storageBucket: "imgs2-799f3.appspot.com",
  messagingSenderId: "1083678393787",
  appId: "1:1083678393787:web:8299fc70e847a4a8c0f09e"
};

 // Initialize Firebase
 const app = firebase.initializeApp(firebaseConfig);

 const uploadbtn = document.getElementById("upload-btn");
 const upload = document.getElementById("upload-box");





 function uploadImage() {
    const ref = firebase.storage().ref();
    const file = document.querySelector("#photo").files[0];
    const name = +new Date() + "-" + file.name;
    const metadata = {
       contentType: file.type
    };

    const task = ref.child(name).put(file, metadata);

    task.then(snapshot => snapshot.ref.getDownloadURL())
       .then(url => {
          console.log(url);
          alert('Image uploaded successfully');
          document.querySelector("#image").src = url;
       })
       .catch(error => {
          console.error(error);
          alert('Image upload failed');
       });
 }
 function test() {
  //prevent page from doing refresh
  upload.style.display = "block";}