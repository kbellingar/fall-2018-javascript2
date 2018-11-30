<script>
  // var mapPractice = [1, 2, 3]
  // function callback(e) {
  //   return e + 1
  // }
  // var newArray = mapPractice.map(callback)
  // console.log(newArray)

  // var mapPractice = ["zach", "bob", "susan", "carson", "stanley"]
  // function callback(e) {
  //   return "hello " + e
  // }
  // var newArray = mapPractice.map(callback)
  // console.log(newArray)

// var mapPractice = [{name: "zach"} , {name: "bob"} , {name: "susan"}]
//   function callback(e) {
//     return "hello " + e.name
//   }
//   var newArray = mapPractice.map(callback)
//   console.log(newArray)

      var filterPractice = [{name: "zach"} , {name: "bob"} , {name: "susan"}]
        function callback(e) {
         // var name = e.name
          return name !== "bob"
        }
        var newArray = filterPractice.filter(callback)
        console.log(newArray)
        </script>