const base_url = "https://localhost:44379";
export const APIQuestions = {
    questions:{
        url:base_url+"/api/Questions",
        params:{},
        method:"GET"
    },
    add_question:{
        url:base_url+"/api/Questions",
        params:JSON.stringify({
            idquestion:0,
            contentq:'',
            answertrue:'',
            answer1false:'',
            answer2false:'',
            answer3false:'',
            lodifficult:'',
            dateq:'',
            point:0.00,
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
            idquestion:0,
            contentq:'',
            answertrue:'',
            answerfalse1:'',
            answerfalse2:'',
            answerfalse3:'',
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