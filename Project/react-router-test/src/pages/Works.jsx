import { Link, useParams } from 'react-router-dom'

const Works = () => {
  const data = [
    { id: 1, todo: 'react study'},
    { id: 2, todo: 'js study'},
    { id: 3, todo: 'node study'},
    { id: 4, todo: 'firebase study'},
    { id: 5, todo: 'next study'},
    { id: 6, todo: 'http study'},
  ]
  const params = useParams();
  console.log("params =>", params);
  const targetWork = data.find(function(work){
    return work.id == params.id
  })
  console.log("targetWork =>", targetWork);
  return (
    <div>
      <h3>현재 페이지는 {targetWork.todo} 입니다.</h3>
      {
        data.map(work => {
          return (
            <div key={work.id}>
              <div>할일 : {work.id}</div>
              <Link to={`/works/${work.id}`}>
                <span>Go To : {work.todo}</span>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Works








// import React from 'react'
// import { useNavigate, useLocation, Link } from 'react-router-dom'

// const Works = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   console.log(location);
//   return (
//     <div>
//       <h1>Works !</h1>
//       <span>현재 페이지 : {location.pathname.slice(1)}</span>
//       <br/><br/>
//       <button
//         onClick={() => {
//           navigate("/");
//         }}
//       >홈으로 이동</button>
//       <br/><br/>
//       <Link to="/contact">contact 페이지로 이동하기</Link>
//     </div>
//   )
// }

// export default Works
