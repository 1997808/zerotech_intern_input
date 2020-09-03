// export default function Auth(props) {
//   const [authData, setAuthData] = useState({
//     "username": "diennk@zerobank.cash",
//     "password": "UBZSYL3PvJ9Gxpg"
//   })

  // document.cookie = "ghost-admin-api-session=s%3AtT6N7M1BQu5nJLi2BaFrJmE7MnNtGDMo.XLHUpCg9UMd6gF5DWT15th06AwNFdVtYP%2FZqBTTHxY4"

  // const signIn = (e) => {
  //   e.preventDefault()
  //   fetch("/session", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Origin": "http://localhost:3000",
  //     },
  //     body: JSON.stringify(authData),
  //     // credentials: 'include',
  //   })
  //     .then(res => res.json()) //['set-cookies']
  //     .then(
  //       (result) => {
  //         console.log(result)
  //       },
  //       (error) => {
  //         console.log(error, "error")
  //       }
  //     )
  // }

  // const getPost = (e) => {
  //   e.preventDefault()
  //   fetch("/posts", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Origin": "http://localhost:3000",
  //     },
  //     credentials: 'include',
  //   })
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         console.log(result)
  //       },
  //       (error) => {
  //         console.log(error, "error")
  //       }
  //     )
  // }
  // const getPost = (e) => {
  //   e.preventDefault()
  //   axios.get('/posts', {
  //     // url: '/posts',
  //     withCredentials: true,
  //     headers: {
  //       "X-Version": "1.0",
  //       'Access-Control-Allow-Origin': "*",
  //       // 'Origin': "http://localhost:2368"
  //     },
  //   })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .then(function () {
  //       // always executed
  //     });
  // }