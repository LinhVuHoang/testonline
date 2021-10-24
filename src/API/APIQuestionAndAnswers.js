const base_url = "https://localhost:44347";
export const APIQuestionAndAnswers = {
    qandas:{
        url:base_url+"/api/Qandas",
        params:{},
        method:"GET"
    },
    add_qanda:{
        url:base_url+"/api/Qandas",
        params:JSON.stringify({
            question:'',
            answer:'',
            id:'',
        }),
        method:"POST"
    },
    detail_qanda:{
        url:base_url+"/api/Qandas/",// +id
        params:{},
        method:"GET"
    },
    edit_qanda:{
        url:base_url+"/api/Qandas/",// +id
        params:JSON.stringify({
            question:'',
            answer:'',
            id:'',
        }),
        method:"PUT"
    },
    delete_qanda:{
        url:base_url+"/api/Qandas/",// +id
        params:{},
        method:"DELETE"
    }
}