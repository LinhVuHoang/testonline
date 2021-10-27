const base_url = "https://localhost:44379";
export const APIQuestionAndExam= {
    qandexams:{
        url:base_url+"/api/Qexams",
        params:{},
        method:"GET"
    },
    add_qandexam:{
        url:base_url+"/api/Qexams",
        params:JSON.stringify({
            idexam:0,
            datemake:'',
            question:0,
            id:0
        }),
        method:"POST"
    },
    detail_qandexam:{
        url:base_url+"/api/Qexams/",// +id
        params:{},
        method:"GET"
    },
    edit_qandexam:{
        url:base_url+"/api/Qexams/",// +id
        params:JSON.stringify({
            idexam:0,
            datemake:'',
            question:0,
            id:0
        }),
        method:"PUT"
    },
    delete_qandexam:{
        url:base_url+"/api/Qexams/",// +id
        params:{},
        method:"DELETE"
    }
}