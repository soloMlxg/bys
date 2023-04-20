// export const gets= () => {
//     return axios({
//         method: "get",
//         url: "/api/getTypeOne",
//         params: {
//             // page: 1,
//         },
//     })
// }

export const gets=()=>{
	return uni.request({
		url:"/api/getTypeOne",
		
	})
}