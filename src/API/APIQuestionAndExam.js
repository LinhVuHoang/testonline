const base_url = "https://localhost:44347";
export const APIQuestionAndExam= {
    qandexams:{
        url:base_url+"/api/Qexams",
        params:{},
        method:"GET"
    },
    add_qandexam:{
        url:base_url+"/api/Qexams",
        params:JSON.stringify({
            idexam:'',
            datemake:'',
            question:'',
            id:''
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
            idexam:'',
            datemake:'',
            question:'',
            id:''
        }),
        method:"PUT"
    },
    delete_qandexam:{
        url:base_url+"/api/Qexams/",// +id
        params:{},
        method:"DELETE"
    }
}