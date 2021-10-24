const base_url = "https://localhost:44347";
export const APIQuestions = {
    questions:{
        url:base_url+"/api/Questions",
        params:{},
        method:"GET"
    },
    add_question:{
        url:base_url+"/api/Questions",
        params:JSON.stringify({
            idquestion:'',
            contentq:'',
            answer:'',
            lodifficult:'',
            dateq:'',
            point:'',
        }),
        method:"POST"
    },
    detail_question:{
        url:base_url+"/api/Questions/",// +id
        params:{},
        method:"GET"
    },
    edit_question:{
        url:base_url+"/api/Questions/",// +id
        params:JSON.stringify({
            idquestion:'',
            contentq:'',
            answer:'',
            lodifficult:'',
            dateq:'',
            point:''
        }),
        method:"PUT"
    },
    delete_question:{
        url:base_url+"/api/Questions/",// +id
        params:{},
        method:"DELETE"
    }
}